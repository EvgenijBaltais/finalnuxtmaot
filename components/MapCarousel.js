import Script from 'next/script'
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";

import 'swiper/css'
import styles from "../styles/MapCarousel.module.css"

import ContactsMap from "./ContactsMap"
import ContactSLider from "./ContactSLider"

export default function MapCarousel () {

    const [mapReady, setMapReady] = useState(0)
    const [activeCity, setActiveCity] = useState(0)

    const cities = ["Москва", "Санкт-Петербург", "Тула", "Краснодар", "Ростов-на-Дону"]
    const koordinates = [['55.776858', '37.668871'], ['59.979322', '30.330124'], ['54.191289', '37.589293'], ['45.058765', '38.978511'], ['47.235277', '39.713638']]
    const addresses = [
                        'ул. Бауманская д.6с2. Бизнес-центр Виктория Плаза. 8 этаж. 804 офис', 
                        'Большой Сампсониевский просп., 68, корп. 1, Санкт-Петербург, Россия',
                        'г. Тула, ул. Демонстрации, д. 38В',
                        'г. Краснодар, ул. Офицерская, д. 32',
                        'г. Ростов-на-Дону, Ворошиловский проспект, 82/4',
                    ]

    return (
        <>
            <Script id = "y-maps" src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" strategy="afterInteractive" onReady={() => {
                setMapReady(1)
        }} />

            <section className = {styles["map"]}>
                <ContactSLider setActiveCity = {setActiveCity} cities = {cities} />
                <div className = {styles["map-slider-nav"]}>
                    <div className = {styles["our-offices-info"]}>Наши офисы расположены по всей России</div>
                </div>
                <ContactsMap name = {cities[activeCity]} koordinates = {koordinates[activeCity]} address = {addresses[activeCity]} mapReady = {mapReady} activeCity = {activeCity} />
            </section>
        </>
    )
}