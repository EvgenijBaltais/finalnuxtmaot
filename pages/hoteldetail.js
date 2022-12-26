import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import { useRouter } from 'next/router'

import Hoteldetail_form from '../components/Hoteldetail_form'
import Hotel_search_result from "../components/hotel_details/Hotel_search_result"
import Rooms_info from "../components/hotel_details/Rooms_info"
import Hotel_service from "../components/hotel_details/Hotel_service"
import Hotel_contact from "../components/hotel_details/Hotel_contact"
import Hotel_map from "../components/Hotel_map"
import styles from "../styles/Hoteldetail.module.css"
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation } from "swiper"

function Hoteldetail () {

    const router = useRouter()
    const { query } = useRouter()
    const [hotelData, setHotelData] = useState(0)
    const [roomBlocks, setRoomBlocks] = useState([])
    const [active_block, setActive_block] = useState(1)

    const [mapReady, setMapReady] = useState(0)
    const [datesText, setDatesText] = useState('')
    const [bronPageLink, setBronPageLink] = useState('')

    const [visibleNav, setVisibleNav] = useState(0)

    const [isMobile, setIsMobile] = useState(0)
    const [isTablet, setIsTablet] = useState(0)
    const [isDesktop, setIsDesktop] = useState(0)
    const [moreThan1040, setMoreThan1040] = useState(0)

    const [isFavorite, setIsFavorite] = useState(false)

    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    useEffect(() => {
        setIsMobile(window.screen.width <= 480)
        setIsTablet(window.screen.width >= 480 && window.screen.width <= 860)
        setIsDesktop(window.screen.width > 860)
        setMoreThan1040(window.screen.width > 1040)

        window.addEventListener('resize', () => {
            setIsMobile(window.screen.width <= 480)
            setIsTablet(window.screen.width >= 480 && window.screen.width <= 860)
            setIsDesktop(window.screen.width > 860)
            setMoreThan1040(window.screen.width > 1040)
        })
    }, [])
/*
    const rootEl = useRef(null)
        useEffect(() => {
          const onClick = e => rootEl.current.contains(e.target) || setVisibleNav(false)

          document.addEventListener('click', onClick)
          return () => document.removeEventListener('click', onClick)
        }, [])
*/

    useEffect(() => {

        let text = ''

        if (query.datein && query.dateout) {

            parseInt(query.datein.slice(3, 5)) == parseInt(query.dateout.slice(3, 5)) ? 
            text = `Номера на ${query.datein.slice(0, 2)} - ${query.dateout.slice(0, 2)} ${months[(parseInt(query.dateout.slice(3, 5)) - 1)]}  для ${returnAdults(query.adults)}` :
            text = `Номера на ${query.datein.slice(0, 2)} ${months[(parseInt(query.datein.slice(3, 5)) - 1)]} - ${query.dateout.slice(0, 2)} ${months[(parseInt(query.dateout.slice(3, 5)) - 1)]}  для ${returnAdults(query.adults)}`
            
            let children_arr = (Number.isInteger(+query.children_ages) ? [query.children_ages] : query.children_ages || [])
            query.children_ages ? text += ' и ' + returnChildren(children_arr.length) : ''
            setDatesText(text)
        }


        // В избранном или нет

        let arr = []

        localStorage.getItem('hotels') ? arr = JSON.parse(localStorage.getItem('hotels')) : ''

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].hotel.id == query.hotel_id) {
                setIsFavorite(true)
            }
        }

    }, [query])
    
    // Все что касается дат, конец

    // Данные по отелю

    useEffect(() => {

        if (!router.isReady) return

            let datein = query.datein.slice(6, 10) + '-' + query.datein.slice(3, 5) + '-' + query.datein.slice(0, 2)
            let dateout = query.dateout.slice(6, 10) + '-' + query.dateout.slice(3, 5) + '-' + query.dateout.slice(0, 2)
            let hotel_id = query['hotel_id']
            hotel_id == 'golden_tulip_roza_khutor' ? hotel_id += '_' : ''
            let adults = query.adults || 2
            let children_arr = (Number.isInteger(+query.children_ages) ? [query.children_ages] : query.children_ages || [])
            let link = 'https://maot-api.bokn.ru/api/hotels/search?'
            let bronPageLink = ''

            link += 'start_date=' + datein
            bronPageLink +=  'start_date=' + datein
            link += '&end_date=' + dateout
            bronPageLink += '&end_date=' + dateout
            link += '&adults=' + adults
            bronPageLink += '&adults=' + adults
            
            if (children_arr) {
                for (let i = 0; i < children_arr.length; i++) {
                    link += `&childs[${i}]=` + children_arr[i]
                    bronPageLink += '&children_ages=' + children_arr[i]
                }
            }

            link += '&id=' + hotel_id
            bronPageLink += '&id=' + hotel_id
            
            setBronPageLink(bronPageLink)

            // Запрос инфы по отелю и доступных номеров

            console.log(link)

            fetch(link)
            .then((result) => result.json())
            .then((result) => {
                //console.log(link)

                if (result.data.length > 0) {

                    result.data.map((el) => {
                        return formatServices(el)
                    })

                    setHotelData(result.data[0])

                    let room_blocks_set = new Set()     // Уникальные названия номеров
                    let room_blocks = []                // Для готовых блоков
                    let arr = []

                    // Определить все виды групп номеров
                    for (let i = 0; i < result.data[0].rates.length; i++) {
                        room_blocks_set.add(result.data[0].rates[i].room_name)
                    }

                    for (let item of room_blocks_set) {

                        arr = []
                        for (let i = 0; i < result.data[0].rates.length; i++) {
                            if (item == result.data[0].rates[i].room_name) {
                                arr.push(result.data[0].rates[i])
                            }
                        }
                        room_blocks.push({room_name: item, room_variants: arr})
                    }

                    setRoomBlocks(room_blocks)
                    
                    //console.log(result.data[0].rates)

                    return false
                }

                // Если нет номеров то еще один запрос чтобы просто найти данные по отелю и привести объект с данными к тому же виду, что и объект с номерами

                fetch('https://maot-api.bokn.ru/api/hotels/get?id=' + hotel_id)
                .then((result) => result.json())
                .then((result) => {
                    //console.log(link)
                    
                    let obj = {}
                    obj.hotel = result.data
                    obj.rates = {}

                    setHotelData(obj)
                    setRoomBlocks([])
                })
            })
    }, [query])

    let blocksOffsetArr = []

    useEffect(() => {

        function scrollingOptions () {

            if (!isDesktop) return false

            if (!blocksOffsetArr.length) {
                for (let i = 0; i < document.querySelectorAll('.block-scrolling-item').length; i++) {
                    blocksOffsetArr.push(document.querySelectorAll('.block-scrolling-item')[i])
                }
            }
            else {
                window.pageYOffset < blocksOffsetArr[1].offsetTop ? setActive_block(1) : ''
                window.pageYOffset > blocksOffsetArr[1].offsetTop && window.pageYOffset < blocksOffsetArr[2].offsetTop ? setActive_block(2) : ''
                window.pageYOffset > blocksOffsetArr[2].offsetTop && window.pageYOffset < blocksOffsetArr[3].offsetTop ? setActive_block(3) : ''
                window.pageYOffset > blocksOffsetArr[3].offsetTop ? setActive_block(4) : ''
            }

            window.pageYOffset < document.querySelector('.select-dates-nav').offsetTop ?
                document.querySelector('.select-nav-list').style.position = "absolute" :
                document.querySelector('.select-nav-list').style.position = "fixed"
        }

        window.addEventListener('scroll', scrollingOptions)

        return () => {
            window.removeEventListener('scroll', scrollingOptions)
        }
    }, [])


    // Удалить яндекс карты
    useEffect(() => {
        return () => {
            document.getElementById('y-maps') ? document.getElementById('y-maps').remove() : ''
        }
    }, [])


    function addBackgroundImage (slider) {
        document.querySelector('.hotel-slider__main').style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
    }

    // Все что касается дат

    function returnChildren (num) {

        let text = ' детей',
            a = [1, 21, 31, 41, 51, 61, 71, 81, 91, 101]

        a.forEach(element => {
            num == element ? text = ' ребенка' : ''
        })

        return num + text
    }

    function returnAdults (num) {

        let text = ' взрослых',
            a = [1, 21, 31, 41, 51, 61, 71, 81, 91, 101]

        a.forEach(element => {
            num == element ? text = ' взрослого' : ''
        })

        return num + text
    }

    function scrollToSection () {

        event.preventDefault()
        
        document.getElementById(event.target.getAttribute('href').slice(1)).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    // Проверить есть ли уже в избранном и если да, то удалить, а если нет то добавить

    function checkFavorite () {

        let arr = []

        localStorage.getItem('hotels') ? arr = JSON.parse(localStorage.getItem('hotels')) : ''

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].hotel.id == query.hotel_id) {
                setIsFavorite(false)
                arr.splice(i, 1)
                localStorage.setItem('hotels', JSON.stringify(arr))
                return false
            }
        }

        setIsFavorite(true)

            let obj = {}
            obj.hotel = hotelData.hotel
            obj.rates = hotelData.rates

            // Удалить лишние ненужные поля, чтобы не сохранять в localstorage огромные массивы с лишней инфой
            obj = removeUnnecessaryFields (obj)

            arr.push(obj)
            localStorage.setItem('hotels', JSON.stringify(arr))  

            if (!setMoreThan1040) return false   // Если менее 1040, то в меню не добавляется уведомление

            // Вставить всплывающее окно, что отель добавлен в Избранное
            
            let menuFavorite = document.querySelectorAll('.nav-link')[document.querySelectorAll('.nav-link').length - 1]

            new Promise(res => {
                menuFavorite.insertAdjacentHTML('beforeend',
                    `<div class='favorite-info'>
                            <a class='favorite-info-link'>Отель ${hotelData.hotel.name}</a>
                            <p class='favorite-info-text'>Добавлен в Избранное</p>
                        </div>
                    `
                    )
                    res()
                }).then(() => {
                    setTimeout(() => {
                        menuFavorite.querySelector('.favorite-info').remove()
                    }, 1200)
                })
        }

    function formatServices (el) {

        // Заполнить главные услуги
        let servicesArr = []
        let dopServicesArr = []
        el.hotel.servicesMain = []
        el.hotel.servicesDop = []

        el.rates[0].meal ? servicesArr.push(['meal', el.rates[0].meal[0]]) : ''          // Питание

        // Добавить в главные услуги из объекта общих отельных услуг

        for (let i = 0; i < el.hotel.services.length; i++) {
            if (el.hotel.services[i].group_name == "Интернет") {
                for (let k = 0; k < el.hotel.services[i].amenities.length; k++) {
                    el.hotel.services[i].amenities[k].indexOf('Wi-Fi') + 1 ||
                    el.hotel.services[i].amenities[k].indexOf('wi-fi') + 1 || 
                    el.hotel.services[i].amenities[k].indexOf('WI-FI') + 1 ? 
                    servicesArr.push(['internet', el.hotel.services[i].amenities[k]]) : ''
                }
                continue
            }
            if (el.hotel.services[i].group_name == "В номерах") {
                for (let k = 0; k < el.hotel.services[i].amenities.length; k++) {
                    el.hotel.services[i].amenities[k].indexOf('Холодильник') + 1 ? 
                    servicesArr.push(['fridge', el.hotel.services[i].amenities[k]]) : ''
                }
                continue
            }

            if (el.hotel.services[i].group_name == "Общее") {
                for (let k = 0; k < el.hotel.services[i].amenities.length; k++) {
                    el.hotel.services[i].amenities[k].indexOf('Кондиционер') + 1 ? 
                    servicesArr.push(['conditioner', el.hotel.services[i].amenities[k]]) : ''
                }
                continue
            }
        }

        for (let i = 0; i < el.hotel.services.length; i++) {
            for (let k = 0; k < el.hotel.services[i].amenities.length; k++) {
                dopServicesArr.push(el.hotel.services[i].amenities[k])
            }
        }

        el.rates[0].room_info.bathroom ? servicesArr.push(['bathroom', el.rates[0].room_info.bathroom]) : ''                      // Ванна
        el.rates[0].room_info.bed ? servicesArr.push(['bed', el.rates[0].room_info.bed]) : ''                                     // Кровать
        el.rates[0].room_amenities.nonSmoking ? servicesArr.push(['nonSmoking', el.rates[0].room_amenities.nonSmoking]) : ''      // Для некурящих
        el.rates[0].room_amenities.window ? servicesArr.push(['window', el.rates[0].room_amenities.window]) : ''                  // Окно

        el.hotel.servicesMain = servicesArr
        el.hotel.servicesDop = dopServicesArr

        return el
    }

    function removeUnnecessaryFields (item) {
        // Удалить лишние ненужные поля, чтобы не сохранять в localstorage огромные массивы с лишней инфой

        //delete item.hotel.address
        //delete item.hotel.coordinates
        delete item.hotel.crm_id
        delete item.hotel.description
        //delete item.hotel.services
        delete item.hotel.star_rating
        delete item.hotel.type_id
        delete item.rates.url
        //delete item.rates[0].images
        delete item.rates[0].cancellation_penalties
        delete item.rates[0].description
        delete item.rates[0].daily_price
        delete item.rates[0].room_amenities
        delete item.rates[0].room_info
        delete item.rates[0].room_name
        delete item.rates[0].url
        delete item.rates[0].all_inclusive

        return item
    }

    if (!hotelData.hotel) {
        return <>
            <style jsx global>{`
                .footer {
                    display:none
                }
                .header {
                    display:none
                }
            `}</style>
            <img src = "/images/waiting.gif" className = "waiting-hotel-image" />
        </>
    }

    return (
        <>
            <Head>
                <title>  - СКИДКИ! доставка путевок, онлайн-бронирование - {hotelData.hotel.name} - Магазин отдыха</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Script id = "y-maps" src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" strategy="afterInteractive" onReady={() => {
                setMapReady(1)
            }} />

            <section className = {styles["single-hotel"]}>
                <div className={styles["titles-top"]}>
                    <div className = {styles["title-block"]}>
                        {hotelData.hotel.name ? <h1 className = "hotel-title">{hotelData.hotel.name}</h1> : ''}
                        {hotelData.hotel.address ? <p className = {styles["hotel-adress"]}>{hotelData.hotel.address}</p> : ''}
                    </div>
                    <div className={styles["add-to-favorite"]}>
                        {isMobile ?
                            isFavorite ? 
                                <a className={`${styles["add-to-favorite__link-active"]}`}
                                    onClick = {checkFavorite}>в&nbsp;избранном
                                </a> :
                                <a className={`${styles["add-to-favorite__link"]}`}
                                    onClick = {checkFavorite}>в&nbsp;избранное
                                </a>
                            :
                            isFavorite ? 
                                <a className={`${styles["add-to-favorite__link-active"]}`}
                                    onClick = {checkFavorite}>добавлено&nbsp;в&nbsp;избранное
                                </a> :
                                <a className={`${styles["add-to-favorite__link"]}`}
                                    onClick = {checkFavorite}>добавить&nbsp;в&nbsp;избранное
                                </a>
                        }
                    </div>

                </div>

                <div className = {styles["map-slider"]}>
                    <div className={`hotel-slider ${styles["hotel-slider"]}`}>
                        <div className = {`hotel-slider__main ${styles["hotel-slider__main"]}`} style = {hotelData.hotel.images[0] ? {backgroundImage: `url(${hotelData.hotel.images[0]})`} : {}}></div>
                        <div className = "hotel-slider__items">
                            <div className = {styles["hotel-slider__w"]}>
                            <Swiper
                                onSlideChange = {slider => addBackgroundImage(slider)}
                                slidesPerView={5}
                                spaceBetween={10}
                                navigation={true}
                                keyboard={{
                                    enabled: true,
                                }}
                                loop = {true}
                                slideToClickedSlide = {true}
                                speed= {400}
                                modules={[Keyboard, Navigation]}
                                className="hoteldetail-swiper"
                            >
                                {hotelData.hotel.images.map((item, index) => (
                                    index == 0 ? '' :
                                    <SwiperSlide key={index} data-pic = {item} className = "hotel-slider__item" style = {item ? {backgroundImage: `url(${item})`} : {}}></SwiperSlide>
                                ))}
                            </Swiper>
                            </div>
                        </div>
                    </div>

                    {mapReady == 1 && isDesktop ?
                        <Hotel_map hotelData = {hotelData.hotel} mapReady = {mapReady} />
                        : ''
                    }

                </div>
            </section>

            <section className = {styles["select-dates-content"]}>
                
                <div className = {styles["select-dates-form-block"]}>
                    <h2 className = {styles["hotel-title-h2"]}>
                        {datesText}
                    </h2>

                     <Hoteldetail_form
                        hotel_id = {query['hotel_id']}
                        hotel_name = {hotelData.hotel.name}
                        setRoomBlocks = {setRoomBlocks}
                        setBronPageLink = {setBronPageLink}

                    />

                    <Hotel_search_result roomBlocks = {roomBlocks} hotelData = {hotelData.hotel} bronPageLink = {bronPageLink} />
                    <Rooms_info hotelData = {hotelData.hotel}/>
                    <Hotel_service services = {hotelData.hotel.services} />
                    {mapReady ? <Hotel_contact hotelData = {hotelData.hotel}/> : ''}
                    
                </div>

                {isDesktop ?        
                    <div className = {`${styles["select-dates-nav"]} select-dates-nav`}>
                        <div className = {visibleNav ? `${styles["select-nav-bg"]} ${styles["active-nav-list"]} select-nav-list` : `${styles["select-nav-bg"]} select-nav-list`}>
                            <div className = {styles["icon-item-menu"]}>Навигация по странице</div>
                            <div className = {styles["select-dates-item"]} onClick = {() => setVisibleNav(visibleNav => !visibleNav)}>
                                <a href="#all-rooms" 
                                    onClick={scrollToSection}
                                    data-value = "1" 
                                    className = {`${styles["select-dates-link"]} ${active_block == 1 ? styles["select-dates-link-active"] : ''}`}
                                >
                                    Поиск номеров
                                </a>
                            </div>
                            <div className = {styles["select-dates-item"]}>
                                <a href="#rooms-info"
                                    onClick={scrollToSection}
                                    data-value = "2" 
                                    className = {`${styles["select-dates-link"]} ${active_block == 2 ? styles["select-dates-link-active"] : ''}`}
                                >
                                    Об отеле
                                </a>
                            </div>
                            <div className = {styles["select-dates-item"]}>
                                <a href="#hotel-service"
                                    onClick={scrollToSection}
                                    data-value = "3" 
                                    className = {`${styles["select-dates-link"]} ${active_block == 3 ? styles["select-dates-link-active"] : ''}`}
                                >
                                    Услуги
                                </a>
                            </div>
                            <div className = {styles["select-dates-item"]}>
                                <a href="#contacts"
                                    onClick={scrollToSection}
                                    data-value = "4"
                                    className = {`${styles["select-dates-link"]} ${active_block == 4 ? styles["select-dates-link-active"] : ''}`}
                                >
                                    Контакты
                                </a>
                            </div>
                        </div>
                    </div> : ''}
            </section>
        </>
    )
}

export default Hoteldetail