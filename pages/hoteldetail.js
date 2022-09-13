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
import styles from "../styles/Hoteldetail.module.css"


import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation } from "swiper"


function Hoteldetail ({hotel}) {

    const router = useRouter()
    const { query } = useRouter()
    const [hotelData, setHotelData] = useState(hotel)
    const [active_block, setActive_block] = useState(1)
    const [koordinates, setKoordinates] = useState([1,2])

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

    function setToday () {

        let today = new Date();
            today.setTime(today.getTime());

        return addNullToDate(today.getDate()) + "." + addNullToDate((today.getMonth() + 1)) + "." + today.getFullYear()
    }

    function setTomorrow () {
        var tomorrow = new Date()
            tomorrow.setTime(tomorrow.getTime() + 24 * 60 * 60 * 1000)

            return addNullToDate(tomorrow.getDate()) + "." + addNullToDate((tomorrow.getMonth() + 1)) + "." + tomorrow.getFullYear()
    }

    function addNullToDate(num) {
        return num < 10 ? '0' + num : num
    }

    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    useEffect(() => {

        let text = ''

        if (query.datein && query.dateout) {


            parseInt(query.datein.slice(3, 5)) == parseInt(query.dateout.slice(3, 5)) ? 
            text = `Номера на ${query.datein.slice(0, 2)} - ${query.dateout.slice(0, 2)} ${months[(parseInt(query.dateout.slice(3, 5)) - 1)]}  для  2  взрослых и ребенка` :
            text = `Номера на ${query.datein.slice(0, 2)} ${months[(parseInt(query.datein.slice(3, 5)) - 1)]} - ${query.dateout.slice(0, 2)} ${months[(parseInt(query.dateout.slice(3, 5)) - 1)]}  для  2  взрослых и ребенка`
            setDatesText(text)
        }

        //text = `Номера на ${query.datein.slice(0, 2)} - ${query.dateout.slice(0, 2)} июля  для  2  взрослых и ребенка`

        console.log(text)

    }, [query])
    // Все что касается дат, конец

    // Данные по отелю

    useEffect(() => {

        if (!router.isReady) return

        fetch(`https://maot-api.bokn.ru/api/hotels/get?id=${ query['hotel_id'] }`)
        .then((res) => res.json())
        .then((res) => {
            setHotelData(res.data)
            setKoordinates([res.data.coordinates.latitude, res.data.coordinates.longitude])
        })
    }, [query])

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

                function init() {
                    const myMap = new ymaps.Map("map", {
                        center: koordinates,
                        zoom: 13
                    });
                
                    const myPlacemark = new ymaps.Placemark(koordinates, {
                        hintContent: hotelData.name,
                        balloonContent: hotelData.address
                    });
                    myMap.geoObjects.add(myPlacemark);
                    myMap.setType('yandex#map');
                    myMap.behaviors.disable('scrollZoom');
                }

                ymaps.ready(init)
            }} />

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
                    <div className = {styles["hotel-map"]} id = "map">
                        <div className = {styles["hoteldetail-y-map"]}>
                        </div>
                        {hotelData.coordinates.latitude && hotelData.coordinates.longitude ?
                                <div className = {styles["hotel-map__place"]}>
                                    <span>Координаты: </span>
                                    <a className = {styles["hotel-map__coordinates"]}>{hotelData.coordinates.latitude.toFixed(6)}, {hotelData.coordinates.longitude.toFixed(6)}</a>
                                </div> : ''
                            }
                    </div>
                </div>
            </section>

                <section className = {styles["select-dates-content"]}>
                <div className = {styles["select-dates-form-block"]}>
                    <h2 className = {styles["hotel-title-h2"]}>
                        {datesText}
                    </h2>

                    <Hoteldetail_form />


                    {active_block == 1 ? <Hotel_search_result /> : ''}
                    {active_block == 2 ? <Rooms_info /> : ''}
                    {active_block == 3 ? <Hotel_service /> : ''}
                    {active_block == 4 ? <Hotel_contact hotelData = {hotelData} koordinates = {koordinates} /> : '' }

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

Hoteldetail.getInitialProps = async ({ query, req }) => {

    if (!req) {
        return {
            hotel: null
        }
    }

    const res = await fetch(`https://maot-api.bokn.ru/api/load?id=${ query['hotel_id'] }`)
    const hotel = await res.json()
    return { 
        hotel: hotel.data
    }
  }

export default Hoteldetail