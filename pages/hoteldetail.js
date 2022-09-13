import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'

import Hotel_search_result from "../components/hotel_details/Hotel_search_result"
import Rooms_info from "../components/hotel_details/Rooms_info"
import Hotel_service from "../components/hotel_details/Hotel_service"
import Hotel_contact from "../components/hotel_details/Hotel_contact"
import Hotel_rooms_all from "../components/hotel_details/Hotel_rooms_all"
import styles from "../styles/Hoteldetail.module.css"


import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation } from "swiper"


function Hoteldetail ({hotel}) {

    const router = useRouter()
    const { query } = useRouter()
    const [hotelData, setHotelData] = useState(hotel)
    const [active_block, setActive_block] = useState(1)
    let myMap = ''
    let objectManager = ''

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
  

    function init(koordinats) {
        myMap = new ymaps.Map("map", {
            center: koordinats,
            zoom: 11
        });
    
        myPlacemark = new ymaps.Placemark(koordinats, {
            hintContent: 'МАОТ',
            balloonContent: 'ул. Бауманская д.6с2. Бизнес-центр Виктория Плаза. 8 этаж. 804 офис'
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.setType('yandex#map');
        myMap.behaviors.disable('scrollZoom');
    }

    function setMainSlide (e) {

       // console.log(e.$el[0].parentElement.parentElement.parentElement)
        
        document.querySelector('.hotel-slider__main').style.backgroundImage = 'url(1.jpg)'
        //e.$el[0].swiper.realIndex
    }

    function addBackgroundImage (slider) {
        document.querySelector('.hotel-slider__main').style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
    }
    
// Яндекс карта, конец

useEffect(() => {

    if (!router.isReady) return

    fetch(`https://maot-api.bokn.ru/api/hotels/get?id=${ query['hotel_id'] }`)
    .then((res) => res.json())
    .then((res) => {
        setHotelData(res.data)

        /*const koordinats = [res.data.coordinates.latitude, res.data.coordinates.longitude]*/
        const koordinats = [55.775555, 37.674597]
        
        //console.log(latitude + ' ' + longitude)

        // Подгрузка карты
        //loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU", () => {
           // window.ymaps.ready(init)
        //})
    })

    return () => {
       // document.scripts[0].remove()
       // myMap.destroy()
    }
}, [query])

console.log(hotelData)

    if (!hotelData) {
        return <></>
    }

    return (
        <>
            <Head>
                <title>  - СКИДКИ! доставка путевок, онлайн-бронирование - {hotelData.rus_name} - Магазин отдыха</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" strategy="beforeInteractive" />

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
                    <h2 className = {styles["hotel-title-h2"]}>Номера на&nbsp;
                        <span className = {styles["select-dates-in"]}>16</span>&nbsp;
                        -&nbsp;
                        <span className = {styles["select-dates-in"]}>18</span>&nbsp;
                        <span className = {styles["select-dates-month"]}>июля</span>&nbsp;
                        для &nbsp;
                        <span className = {styles["select-dates-adults"]}>2</span>&nbsp;
                        взрослых и&nbsp;
                        <span className = {styles["select-dates-children"]}>ребенка</span>&nbsp;
                    </h2>

                    <form action="">
                        <div className = {styles["select-dates-form"]}>
                            <div className = {styles["select-dates-form__form"]}>
                                <div className = {styles["select-form-items"]}>
                                    <div className = {styles["select-form-input-w"]}>
                                        <input 
                                            type="text"
                                            name = "select-form-name"
                                            className = {`${styles["select-form-input"]} ${styles["select-form-name"]}`}
                                            placeholder={hotelData.rus_name}
                                            defaultValue={hotelData.rus_name}
                                        />
                                    </div>
                                    <div className = {styles["select-form-input-w"]}>
                                        <input type="text" name = "select-form-in" className = {`${styles["select-form-input"]} ${styles["select-form-in"]}`} placeholder="16 июля" />
                                    </div>
                                    <div className = {styles["select-form-input-w"]}>
                                        <input type="text" name = "select-form-out" className = {`${styles["select-form-input"]} ${styles["select-form-out"]}`} placeholder="18 июля"/>
                                    </div>
                                    <div className = {styles["select-form-input-w"]}>
                                        <input type="text" name = "select-form-guests" className = {`${styles["select-form-input"]} ${styles["select-form-guests"]}`} placeholder="3 гостя" />
                                    </div>
                                </div>
                            </div>
                            <button type = "button" className = {styles["select-dates-form__btn"]}>Найти</button>
                        </div>
                    </form>

                    {active_block == 1 ? <Hotel_search_result /> : ''}
                    {active_block == 2 ? <Rooms_info /> : ''}
                    {active_block == 3 ? <Hotel_service /> : ''}
                    {active_block == 4 ? <Hotel_contact /> : ''}
                    {active_block == 5 ? <Hotel_rooms_all /> : ''}
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

/*
export const getServerSideProps = async ({ query, req }) => {

    if (!req) {
        return {
            hotel: null
        }
    }

    //const response = await fetch(`http://hotelsystem.local/api/load?id=${ query['hotel-id'] }`)
    const response = await fetch(`http://hotelsystem.local/api/load?id=6578`)
    const hotel = await response.json()

    return {
        props: {
            hotel
        },
    }
}
*/
export default Hoteldetail