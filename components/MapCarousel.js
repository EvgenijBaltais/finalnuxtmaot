import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import styles from "../styles/MapCarousel.module.css"

import ContactsMap from "./ContactsMap"

export default function MapCarousel () {

    const [mapReady, setMapReady] = useState(0)
    const [activeCity, setActiveCity] = useState(0)

    const cities = ["Москва", "Санкт-Петербург", "Ростов-на-Дону", "Краснодар", "Тула"]
    const koordinates = [['55.776858', '37.668871'], ['59.979322', '30.330124'], ['47.235277', '39.713638'], ['45.058765', '38.978511'], ['54.191289', '37.589293']]
    const addresses = [
                        'ул. Бауманская д.6с2. Бизнес-центр Виктория Плаза. 8 этаж. 804 офис', 
                        'Большой Сампсониевский просп., 68, корп. 1, Санкт-Петербург, Россия',
                        'г. Ростов-на-Дону, Ворошиловский проспект, 82/4',
                        'г. Краснодар, ул. Офицерская, д. 32',
                        'г. Тула, ул. Демонстрации, д. 38В'
                    ]


    const sliderChange = (e) => {
        setActiveCity(e.$el[0].swiper.realIndex)
    }

    return (
        <>
            <Head>
                <title>Контакты</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Script id = "y-maps" src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" strategy="afterInteractive" onReady={() => {
                setMapReady(1)
            }
            } />

            <section className = {styles["map"]}>

                <Swiper
                        slidesPerView={5}
                        centeredSlides={true}
                        slideToClickedSlide = {true}
                        loop = {true}
                        speed= {400}
                        onSlideChange={(e) => sliderChange(e)}
                        className="map-swiper"
                    >
                    {cities.map((slideContent, index) => (
                        <SwiperSlide key={slideContent} item = "index">
                            {slideContent}
                        </SwiperSlide>
                    ))}

                </Swiper>

                    <div className = {styles["map-slider-nav"]}>
                        <div className = {styles["our-offices-left"]}><span></span></div>
                        <div className = {styles["our-offices-info"]}>Наши офисы расположены по всей России</div>
                        <div className = {styles["our-offices-right"]}><span></span></div>
                    </div>

                <ContactsMap name = {cities[activeCity]} koordinates = {koordinates[activeCity]} address = {addresses[activeCity]} mapReady = {mapReady} activeCity = {activeCity} />

            </section>
        </>
    )
}