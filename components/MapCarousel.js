import React, { useRef, useState } from "react";
import { YMaps, Map, Placemark, FullscreenControl, TrafficControl } from "react-yandex-maps"

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import styles from "../styles/MapCarousel.module.css"


const moscow = {
    coordinates: [55.776234, 37.675361],
    adress: 'ул. Бауманская д.6с2. Бизнес-центр Виктория Плаза. 8 этаж. 804 офис'
}

const cities = ["Москва", "Санкт-Петербург", "Ростов-на-Дону", "Краснодар", "Тула"]

const mapState = { center: [55.76, 37.64], zoom: 12, controls: [] };

class MapCarousel extends React.Component {

	componentDidMount() {

	}
  
	componentWillUnmount() {

	}

    changeMap() {

    }

    render() {
        return (
        <section className = {styles["map"]}>

            <Swiper
                    slidesPerView={5}
                    centeredSlides={true}
                    slideToClickedSlide = {true}
                    loop = {true}
                    speed= {400}
                    onSlideChange={(e) => console.log(e.$el[0].swiper.realIndex)}
                    className="map-swiper"
                >
                
                {cities.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} item = "index">
                        {slideContent}
                    </SwiperSlide>
                ))}

            </Swiper>

                <div className = {styles["map-slider-nav"]}>
                    <div className = {styles["our-offices-left"]}></div>
                    <div className = {styles["our-offices-info"]}>Наши офисы расположены по всей России</div>
                    <div className = {styles["our-offices-right"]}></div>
                </div>

            <div className = {styles["map-section"]}>
                <div className = {styles["map-info"]}>
                    <h2 className = "section-title icon-item icon-item-direction">Как к нам добраться</h2>
                    <div className = {`${styles["contact-info-block"]} ${styles["contact-info-adress"]}`}>
                        <p className = "subtitle-bold">Адрес</p>
                        <span className = "block-span">г.&nbsp;Москва, ул.&nbsp;Бауманская д.6с2. Бизнес-центр Виктория Плаза, 8&nbsp;этаж, 804&nbsp;офис</span>
                    </div>
                    <div className = {`${styles["contact-info-block"]} ${styles["contact-info-phone"]}`}>
                        <p className = "subtitle-bold">Телефоны</p>
                        <div className = {styles["contact-info__phone"]}>
                            <a href="tel:+74956486711" className = {`${styles["contacts-phone"]} ${styles["contacts-chast"]}`}>+7 495 648 67 11</a>&nbsp;
                            <span className = {styles["contacts-phone-info"]}>Для частных лиц</span>
                        </div>
                        <div className = {styles["contact-info__phone"]}>
                            <a href="tel:+74956624928" className = {`${styles["contacts-phone"]} ${styles["contacts-corp"]}`}>+7 495 662 49 28</a>&nbsp;
                            <span className = {styles["contacts-phone-info"]}>Корпоративный отдел</span>
                        </div>
                    </div>
                    <div className = {`${styles["contact-info-block"]} ${styles["contact-info-time"]}`}>
                        <p className = "subtitle-bold">Мы работаем</p>
                        <span className = "block-span">по будням с 9:00 до 21:00,<br/>по выходным с 11:00 до 18:00</span>
                        <div className = {styles["metro-block"]}>
                            <div className = {styles["metro-item"]}>Бауманская</div>
                            <div className = {styles["metro-item"]}>Красносельская</div>
                        </div>
                    </div>
                </div>
                <div className = {styles["map-block"]}>
                    <YMaps>
                        <Map 
                            className = "contacts-y-map"
                            defaultState = {{ 
                                center: moscow.coordinates,
                                zoom: 12
                            }}
                        >
                            <Placemark 
                                geometry={moscow.coordinates}
                                properties = {{
                                    balloonContent: moscow.adress
                                }}
                                modules = {
                                    ['geoObject.addon.balloon']
                                }
                            />
                            <FullscreenControl />
                            <TrafficControl />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </section>
        )
    }
}

export default MapCarousel