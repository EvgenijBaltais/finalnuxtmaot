
import { useState, useEffect, useRef} from 'react'
import Head from 'next/head'

import { YMaps, Map, Placemark } from "react-yandex-maps"

import Hotel_search_result from "../components/hotel_details/Hotel_search_result"
import Rooms_info from "../components/hotel_details/Rooms_info"
import Hotel_service from "../components/hotel_details/Hotel_service"
import Hotel_contact from "../components/hotel_details/Hotel_contact"
import Hotel_rooms_all from "../components/hotel_details/Hotel_rooms_all"
import styles from "../styles/Hoteldetail.module.css"


import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from "swiper";

function Hoteldetail ({hotel}) {

    let hotelData = useState(hotel)
        hotelData = hotelData[0].data

    const [active_block, setActive_block] = useState(1)

    const changeBlock = e => {

        e.preventDefault()
        setActive_block(e.target.getAttribute('data-value'))
    }


    const [visibleNav, setVisibleNav] = useState(0)

    const rootEl = useRef(null)

        useEffect(() => {
          const onClick = e => rootEl.current.contains(e.target) || setVisibleNav(false)

          document.addEventListener('click', onClick)
          return () => document.removeEventListener('click', onClick)
        }, [])

    return (
        <>
            <Head>
                <title>  - СКИДКИ! доставка путевок, онлайн-бронирование - {hotelData.rus_name} - Магазин отдыха</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section className = {styles["single-hotel"]}>
                <div className={styles["titles-top"]}>
                    <div className = {styles["title-block"]}>
                        {hotelData.rus_name ? <h1 className = "hotel-title">{hotelData.rus_name}</h1> : ''}
                        {hotelData.other.adress ? <p className = {styles["hotel-adress"]}>{hotelData.other.adress}</p> : ''}
                    </div>
                    <div className = {styles["hotel-rate-info"]}>
                        <ul className = {styles["hotel-rate__list"]}>
                            <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                            <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                            <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                            <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                            <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-grey"]}`}></li>
                        </ul>
                        <span className = {styles["hotel-rate__reviews"]}>{hotelData.reviews.length} отзывов</span>
                        <div className={styles["add-to-favorite"]}>
                            <a className={styles["add-to-favorite__link"]}>добавить в избранное</a>
                        </div>
                    </div>
                </div>

                <div className = {styles["map-slider"]}>
                    <div className={styles["hotel-slider"]}>
                        <div className = {styles["hotel-slider__main"]}>
                            <div className = {styles["arrow-left"]}></div>
                            <div className = {styles["arrow-right"]}></div>
                        </div>
                        <div className = "hotel-slider__items">
                            <div className = {styles["hotel-slider__w"]}>
                            <Swiper
                                slidesPerView={5}
                                spaceBetween={10}
                                keyboard={{
                                    enabled: true,
                                }}
                                loop = {true}
                                slideToClickedSlide = {true}
                                speed= {400}
                                onSlideChange={(e) => console.log(e.$el[0].swiper.realIndex)}
                                modules={[Keyboard]}
                                className="hoteldetail-swiper"
                            >
                                {hotelData.images.map((item, index) => (
                                    index == 0 ? '' :
                                    <SwiperSlide key={index} className = "hotel-slider__item"></SwiperSlide>
                                ))}
                            </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className = {styles["hotel-map"]}>
                        <YMaps>
                            <Map 
                                className = {styles["hoteldetail-y-map"]}
                                defaultState = {{ 
                                    center: [hotelData.latitude, hotelData.longitude],
                                    zoom: 12
                                }}
                            >
                                <Placemark 
                                    geometry={[hotelData.latitude, hotelData.longitude]}
                                    properties = {{
                                        balloonContent: hotelData.other.adress
                                    }}
                                    modules = {
                                        ['geoObject.addon.balloon']
                                    }
                                />
                            </Map>
                        </YMaps>
                        {hotelData.latitude && hotelData.longitude ?
                            <div className = {styles["hotel-map__place"]}>
                                <span>Координаты: </span>
                                <a className = {styles["hotel-map__coordinates"]}>{hotelData.latitude}, {hotelData.longitude}</a>
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
                </div>

                <div className = {styles["select-dates-nav"]}>
                    
                    <h2 className = "section-title icon-item icon-item-menu">Навигация</h2>

                    <div className = {visibleNav ? `${styles["select-nav-bg"]} ${styles["active-nav-list"]}` : styles["select-nav-bg"]} ref={rootEl}>
                        <div className = {styles["select-dates-item"]} onClick = {() => setVisibleNav(visibleNav => !visibleNav)}>
                            <a href="" 
                                data-value = "1" 
                                onClick={changeBlock} 
                                className = {`${styles["select-dates-link"]} ${active_block == 1 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Поиск номеров
                            </a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" 
                                data-value = "2" 
                                onClick={changeBlock} 
                                className = {`${styles["select-dates-link"]} ${active_block == 2 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Об отеле
                            </a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" 
                                data-value = "3" 
                                onClick={changeBlock} 
                                className = {`${styles["select-dates-link"]} ${active_block == 3 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Услуги
                            </a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href=""
                                data-value = "4"
                                onClick={changeBlock}
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

export default Hoteldetail