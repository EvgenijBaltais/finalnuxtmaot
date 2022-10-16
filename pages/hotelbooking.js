import Head from "next/head"
import Script from "next/script"
import { useState, useEffect } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"

import { useRouter } from 'next/router'

import styles from "../styles/Hotelbooking.module.css"

import Adult_user from "../components/hotelbooking/Adult_user"

const Hotelbooking = () => {

    const [mapReady, setMapReady] = useState(0)
    const router = useRouter()
    const { query } = useRouter()
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [hotelData, setHotelData] = useState(0)
    const [guests, setGuests] = useState([])
    const [children, setChildren] = useState([])
    const [dateInValue, setDateInValue] = useState('')
    const [dateOutValue, setDateOutValue] = useState('')

    let guestsArr = [], childrenArr = []
    let myMap

    const childAges = ['до 1 года', '1 год', '2 года', '3 года', '4 года', '5 лет', '6 лет', '7 лет', '8 лет', '9 лет', '10 лет', '11 лет', '12 лет',
    '13 лет', '14 лет', '15 лет', '16 лет', '17 лет']

    useEffect(() => {

        if (!router.isReady) return
        if (!query.start_date || !query.start_date || !query.adults || !query.id) return

            for (let i = 0; i < query.adults; i++) {
                guestsArr.push(i)     
            }
            setGuests(guestsArr)

            if (query.children_ages) {
                if (Array.isArray(query.children_ages)) {
                    for (let i = 0; i < query.children_ages.length; i++) {
                        childrenArr.push(query.children_ages[i])
                    }
                }
                else {
                    childrenArr.push(query.children_ages)
                }
            }

            setChildren(childrenArr)
            setDateInValue(query.start_date.slice(8, 10) + '.' + query.start_date.slice(5, 7) + '.' + query.start_date.slice(0, 4))
            setDateOutValue(query.end_date.slice(8, 10) + '.' + query.end_date.slice(5, 7) + '.' + query.end_date.slice(0, 4))

            fetch('https://maot-api.bokn.ru/api/hotels/get?id=' + query.id)
            .then((result) => result.json())
            .then((result) => {

                setHotelData(result.data)

                setLatitude(String(result.data.coordinates.latitude).length > 10 ? Number(result.data.coordinates.latitude).toFixed(5) : Number(result.data.coordinates.latitude))
                setLongitude(String(result.data.coordinates.longitude).length > 10 ? Number(result.data.coordinates.longitude).toFixed(5) : Number(result.data.coordinates.longitude))
            })
    }, [query])

    function init () {

        myMap = new ymaps.Map("map", {
            center: [latitude, longitude],
            zoom: 11
        })
    
        let myPlacemark = new ymaps.Placemark([latitude, longitude], {
            hintContent: hotelData.name,
            balloonContent: hotelData.address
        })

        myMap.geoObjects.add(myPlacemark);
        myMap.setType('yandex#map');
        myMap.behaviors.disable('scrollZoom');
    }

    useEffect(() => {

        if (!mapReady) {
            return
        }
        if (!hotelData) {
            return
        }
        
        //if (typeof ymaps != undefined && typeof ymaps != 'undefined') {
            try{
                ymaps.ready(init)
            }
            catch(e) {
                console.log(e)
            }
        //}

    }, [mapReady])


    function addBackgroundImage (slider) {
        slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
    }

    function diffDates(day_one, day_two) {

        let day_1 = new Date(day_one.slice(0, 4), day_one.slice(5, 7), day_one.slice(8, 10)),
            day_2 = new Date(day_two.slice(0, 4), day_two.slice(5, 7), day_two.slice(8, 10))
            
        return (day_2 - day_1) / (60 * 60 * 24 * 1000)
    }

    if (!query.start_date || !query.end_date || !query.adults || !query.id) {
        return <>
            <div className={styles["no-data-query"]}>
                Недостаточно данных для бронирования
            </div>
        </>
    }

    if (!hotelData) {
        return <>
            <style jsx global>{`
                .main {
                    opacity: 0
                }
            `}</style>
        </>
    }

    return (
        <>
            <Head>
                <title>Бронирование номера</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charset="utf-8" />
            </Head>

            <Script id = "y-maps" src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" strategy="afterInteractive" onReady={() => {
                setMapReady(1)
            }} />

            <h1 className = "secondary-h1">Бронирование номера</h1>
            <div className={styles["hotel-bron-top"]}>
                <div className={styles["hotel-bron-slider"]}>
                    {hotelData.images ? 
                        <Swiper
                            onSlideChange = {slider => addBackgroundImage(slider)}
                            slidesPerView={1}
                            spaceBetween={0}
                            navigation={true}
                            modules={[Navigation]}
                            className='select-search-item-pics'
                        >
                            {hotelData.images.map((item, index) => {
                                return (
                                    <SwiperSlide
                                        className={'select-results__item-image'}
                                        key = {index}
                                        data-pic = {item}
                                        style = {index == 0 ? {backgroundImage: `url(${item})`} : {}}
                                    ></SwiperSlide>
                                )
                            })}

                        </Swiper>
                        :''}
                    <div className = {styles["arrow-left"]}></div>
                    <div className = {styles["arrow-right"]}></div>
                </div>
                <div className={styles["hotel-bron-map"]} id = "map">
                    <div className = {styles["hotel-bron-info"]}>
                        <p className = {styles["hotel-bron-info__title"]}>{hotelData.name}</p>
                        <p>Координаты:&nbsp;
                            <a className = {styles["hotel-map__coordinates"]}>
                                {latitude}, {longitude}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles["hotel-bron-data-title"]}>
                <div className={styles["hotel-bron-data-title"]}>
                    <h3 className={styles["hotel-bron-data-title__h3"]}>Отель <a>{hotelData.name}</a></h3>
                    <h4 className={styles["hotel-bron-data-title__h4"]}>Номер <a>{query.room}</a></h4>
                </div>
                <div className={styles["hotel-bron-ready"]}>
                    <div className={`${styles["hotel-bron-ready-item-w"]}`}>
                        <div className={styles["hotel-bron-ready-somediv"]}>
                            <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-in"]}`}>
                                <p className={styles["hotel-bron-ready__title"]}>Заезд</p>
                                <p className={styles["hotel-bron-ready__info"]}>{dateInValue}</p>
                            </div>
                            <div className={`${styles["hotel-bron-ready-next"]}`}></div>
                            <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-out"]}`}>
                                <p className={styles["hotel-bron-ready__title"]}>Выезд</p>
                                <p className={styles["hotel-bron-ready__info"]}>{dateOutValue}</p>
                            </div>
                        </div>
                        <div className={styles["hotel-bron-ready__text"]}>Всего дней отдыха <span>{diffDates(query.start_date, query.end_date)}</span></div>
                    </div>
                    <div className={`${styles["hotel-bron-ready-middle"]}`}></div>
                    <div className={`${styles["hotel-bron-ready-item-w"]}`}>
                        <div className={styles["hotel-bron-ready-somediv"]}>
                            <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-adults"]}`}>
                                <p className={styles["hotel-bron-ready__title"]}>Взрослых</p>
                                <p className={styles["hotel-bron-ready__info"]}>{guests.length}</p>
                            </div>
                            <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-childs"]}`}>
                                <p className={styles["hotel-bron-ready__title"]}>Детей</p>
                                <p className={styles["hotel-bron-ready__info"]}>{children.length}</p>
                            </div>
                        </div>
                        <div className={styles["hotel-bron-ready__text"]}>Всего гостей {guests.length + children.length}<span></span></div>
                    </div>
                </div>
                <div className={styles["hotel-bron-contactinfo"]}>
                    <p className={styles["hotel-bron-contactinfo__title"]}>Контактные данные гостей.</p>
                    <p className={styles["hotel-bron-contactinfo__subtitle"]}>Пожалуйста, заполните все поля.</p>
                </div>
                <div className={styles["hotel-bron-ready-form"]}>
                    <form action="" name = "hotel-bron-ready-form">
                        {guests.map((item, index) => {
                                return <Adult_user key = {index} number = {item + 1} />
                            }
                        )}

                        {children.length && children.length > 0 ?
                            <div className={styles["hotel-bron-ready__children"]}>
                                <p className={styles["guest-text-title"]}>Количество детей {children.length}</p>
                                <div className={styles["children-age-wrapper"]}>
                                    {children.map((item, index) => {
                                        return (
                                            <div key = {index} className={`${styles["children-age-block"]} ${styles["hotel-bron-necessarily"]}`}>{childAges[item]}</div>
                                        )
                                    })}
                                </div>
                            </div> : ''
                        }

                        <div className={styles["hotel-bron-required-attention-w"]}>
                            <div className = "subscribe-agree">
                                <input type="checkbox" id="bron-agree-checkbox-1" className = {styles["broned"]} /> 
                                <label htmlFor="bron-agree-checkbox-1">
                                Я соглашаюсь с политикой конфиденциальности</label>
                            </div>
                            <div className = {styles["hotel-bron-required-attention-w"]}>
                                <span className={styles["hotel-bron-required-attention"]}>*</span> обязательно для заполнения
                            </div>
                        </div>
                    </form>
                </div>
                <div className={styles["hotel-bron-btn-w"]}>
                    <button className={styles["hotel-bron-btn"]}>Далее</button>
                </div>
            </div>
        </>
    )
}

export default Hotelbooking