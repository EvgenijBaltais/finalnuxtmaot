import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import { useMediaQuery } from 'react-responsive'
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
    const [hotelData, setHotelData] = useState()
    const [popularHotels, setPopularHotels] = useState([])
    const [roomsData, setRoomsData] = useState(0)
    const [active_block, setActive_block] = useState(1)

    const [mapReady, setMapReady] = useState(0)

    const [datesText, setDatesText] = useState('')

    const changeBlock = event => {

        event.preventDefault()
        setActive_block(event.target.getAttribute('data-value'))
    }

    const [visibleNav, setVisibleNav] = useState(0)

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 480px)' })

    const rootEl = useRef(null)

        useEffect(() => {
          const onClick = e => rootEl.current.contains(e.target) || setVisibleNav(false)

          document.addEventListener('click', onClick)
          return () => document.removeEventListener('click', onClick)
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

    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    useEffect(() => {

        let text = ''

        if (query.datein && query.dateout) {

            parseInt(query.datein.slice(3, 5)) == parseInt(query.dateout.slice(3, 5)) ? 
            text = `Номера на ${query.datein.slice(0, 2)} - ${query.dateout.slice(0, 2)} ${months[(parseInt(query.dateout.slice(3, 5)) - 1)]}  для  2  взрослых` :
            text = `Номера на ${query.datein.slice(0, 2)} ${months[(parseInt(query.datein.slice(3, 5)) - 1)]} - ${query.dateout.slice(0, 2)} ${months[(parseInt(query.dateout.slice(3, 5)) - 1)]}  для  2  взрослых`
            
            query.children_ages ? text += ' и ' + returnChildren(query.children_ages.length) : ''

            setDatesText(text)
        }

    }, [query])
    // Все что касается дат, конец

    // Данные по отелю

    useEffect(() => {

        if (!router.isReady) return

        fetch(`https://maot-api.bokn.ru/api/hotels/get?id=${ query['hotel_id'] }`)
        .then((res) => res.json())
        .then((res) => {

            setHotelData(res.data)

            // Запрос доступных номеров

            let datein = query.datein.slice(6, 10) + '-' + query.datein.slice(3, 5) + '-' + query.datein.slice(0, 2)
            let dateout = query.dateout.slice(6, 10) + '-' + query.dateout.slice(3, 5) + '-' + query.dateout.slice(0, 2)
            let adults = query.adults || 2
            let link = 'https://maot-api.bokn.ru/api/hotels/search?'

            link += 'start_date=' + datein
            link += '&end_date=' + dateout
            link += '&adults=' + adults
            
            if (query.children_ages) {
                for (let i = 0; i < query.children_ages.length; i++) {
                    link += `&childs[${i}]=` + query.children_ages[i]
                }
            }

            link += '&id=' + query['hotel_id']

            fetch(link)
            .then((result) => result.json())
            .then((result) => {
                console.log(link)
                setRoomsData(result.data)

                console.log(result.data[0])
            })
        })
    }, [query])

    useEffect(() => {

        // Популярные отели

        fetch('https://maot-api.bokn.ru/api/hotels/top')
        .then((res) => res.json())
        .then((res) => {
            setPopularHotels(res.data)
        })
    }, [])

    // Удалить яндекс карты
    useEffect(() => {
        return () => {
            document.getElementById('y-maps') ? document.getElementById('y-maps').remove() : ''
        }
    }, [])

    if (!hotelData) {
        return <></>
    }

    return (
        <>
            <Head>
                <title>  - СКИДКИ! доставка путевок, онлайн-бронирование - {hotelData.name} - Магазин отдыха</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Script id = "y-maps" src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" strategy="afterInteractive" onReady={() => {
                setMapReady(1)
            }
            } />

            <section className = {styles["single-hotel"]}>
                <div className={styles["titles-top"]}>
                    <div className = {styles["title-block"]}>
                        {hotelData.name ? <h1 className = "hotel-title">{hotelData.name}</h1> : ''}
                        {hotelData.address ? <p className = {styles["hotel-adress"]}>{hotelData.address}</p> : ''}
                    </div>
                    <div className={styles["add-to-favorite"]}>
                        {/*isBigScreen && <a className={styles["add-to-favorite__link"]}>добавить&nbsp;в&nbsp;избранное</a>*/}
                        {/*isTabletOrMobile && <a className={styles["add-to-favorite__link"]}>в&nbsp;избранное</a>*/}
                    </div>

                </div>

                <div className = {styles["map-slider"]}>
                    <div className={`hotel-slider ${styles["hotel-slider"]}`}>
                        <div className = {`hotel-slider__main ${styles["hotel-slider__main"]}`} style = {hotelData.images[0] ? {backgroundImage: `url(${hotelData.images[0]})`} : {}}></div>
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
                                {hotelData.images.map((item, index) => (
                                    index == 0 ? '' :
                                    <SwiperSlide key={index} data-pic = {item} className = "hotel-slider__item" style = {item ? {backgroundImage: `url(${item})`} : {}}></SwiperSlide>
                                ))}
                            </Swiper>
                            </div>
                        </div>
                    </div>

                    <Hotel_map hotelData = {hotelData} mapReady = {mapReady} />

                </div>
            </section>

            <section className = {styles["select-dates-content"]}>
                
                <div className = {styles["select-dates-form-block"]}>
                    <h2 className = {styles["hotel-title-h2"]}>
                        {datesText}
                    </h2>

                     <Hoteldetail_form
                        hotel_id = {query['hotel_id']}
                        hotel_name = {hotelData.name}
                        popularHotels = {popularHotels}
                        setRoomsData = {setRoomsData}
                    />

                    {active_block == 1 ? <Hotel_search_result items = {roomsData[0]} /> : ''}
                    {active_block == 2 ? <Rooms_info hotelData = {hotelData}/> : ''}
                    {active_block == 3 ? <Hotel_service services = {hotelData.services} /> : ''}
                    {active_block == 4 ? <Hotel_contact hotelData = {hotelData} /> : '' }
                </div>
                                

                <div className = {styles["select-dates-nav"]}>
                    <div className = {visibleNav ? `${styles["select-nav-bg"]} ${styles["active-nav-list"]}` : styles["select-nav-bg"]} ref={rootEl}>
                        <div className = {styles["icon-item-menu"]}>Навигация по странице</div>
                        <div className = {styles["select-dates-item"]} onClick = {() => setVisibleNav(visibleNav => !visibleNav)}>
                            <a href="" 
                                data-value = "1" 
                                onClick={event => changeBlock(event)} 
                                className = {`${styles["select-dates-link"]} ${active_block == 1 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Поиск номеров
                            </a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" 
                                data-value = "2" 
                                onClick={event => changeBlock(event)} 
                                className = {`${styles["select-dates-link"]} ${active_block == 2 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Об отеле
                            </a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" 
                                data-value = "3" 
                                onClick={event => changeBlock(event)} 
                                className = {`${styles["select-dates-link"]} ${active_block == 3 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Услуги
                            </a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href=""
                                data-value = "4"
                                onClick={event => changeBlock(event)}
                                className = {`${styles["select-dates-link"]} ${active_block == 4 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Контакты
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hoteldetail