import Head from "next/head"
import Script from "next/script"
import { useState, useEffect } from "react"

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation } from "swiper"
import "swiper/css"

import { useRouter } from 'next/router'

import styles from "../styles/Hotelbooking.module.css"

const Hotelbooking = () => {

    const [mapReady, setMapReady] = useState(0)
    const router = useRouter()
    const { query } = useRouter()
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [hotelData, setHotelData] = useState(0)
    let myMap

    useEffect(() => {

        if (!router.isReady) return

            // Запрос инфы по отелю и доступных номеров

            let datein = query.start_date.slice(0, 4) + '-' + query.start_date.slice(5, 7) + '-' + query.start_date.slice(8, 10)
            let dateout = query.end_date.slice(0, 4) + '-' + query.end_date.slice(5, 7) + '-' + query.end_date.slice(8, 10)
            let adults = query.adults || 2
            let link = 'https://maot-api.bokn.ru/api/hotels/search?'

            link += 'start_date=' + datein
            link += '&end_date=' + dateout
            link += '&adults=' + adults
            
            if (query.childs) {
                for (let i = 0; i < query.children_ages.length; i++) {
                    link += `&childs[${i}]=` + query.children_ages[i]
                }
            }

            link += '&id=' + query['id']

            
            fetch(link)
            .then((result) => result.json())
            .then((result) => {

                setHotelData(result.data[0].hotel)

                let lat = String(result.data[0].hotel.coordinates.latitude).length > 10 ? Number(result.data[0].hotel.coordinates.latitude).toFixed(5) : Number(result.data[0].hotel.coordinates.latitude)
                let long = String(result.data[0].hotel.coordinates.longitude).length > 10 ? Number(result.data[0].hotel.coordinates.longitude).toFixed(5) : Number(result.data[0].hotel.coordinates.longitude)

                setLatitude(lat)
                setLongitude(long)
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

    useEffect(() => {console.log(mapReady)

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

    console.log(query)


    function addBackgroundImage (slider) {
        slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
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

                    <h3 className={styles["hotel-bron-data-title__h3"]}>Отель <a>{hotelData.name}</a></h3>
                    <h4 className={styles["hotel-bron-data-title__h4"]}>Номер <a>{query.room}</a></h4>
            </div>

            <div className={styles["hotel-bron-ready"]}>
                <div className={`${styles["hotel-bron-ready-item-w"]}`}>
                    <div className={styles["hotel-bron-ready-somediv"]}>
                        <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-in"]}`}>
                            <p className={styles["hotel-bron-ready__title"]}>Заезд</p>
                            <p className={styles["hotel-bron-ready__info"]}>12.10.2022</p>
                        </div>
                        <div className={`${styles["hotel-bron-ready-next"]}`}></div>
                        <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-out"]}`}>
                            <p className={styles["hotel-bron-ready__title"]}>Выезд</p>
                            <p className={styles["hotel-bron-ready__info"]}>12.10.2022</p>
                        </div>
                    </div>
                    <div className={styles["hotel-bron-ready__text"]}>Всего дней отдыха <span></span></div>
                </div>
                <div className={`${styles["hotel-bron-ready-middle"]}`}></div>
                <div className={`${styles["hotel-bron-ready-item-w"]}`}>
                    <div className={styles["hotel-bron-ready-somediv"]}>
                        <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-adults"]}`}>
                            <p className={styles["hotel-bron-ready__title"]}>Взрослых</p>
                            <p className={styles["hotel-bron-ready__info"]}></p>
                        </div>
                        <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-childs"]}`}>
                            <p className={styles["hotel-bron-ready__title"]}>Детей</p>
                            <p className={styles["hotel-bron-ready__info"]}></p>
                        </div>
                    </div>
                    <div className={styles["hotel-bron-ready__text"]}>Всего дней отдыха <span></span></div>
                </div>
            </div>

            <div className={styles["hotel-bron-contactinfo"]}>
                <p className={styles["hotel-bron-contactinfo__title"]}>Контактные данные гостей.</p>
                <p className={styles["hotel-bron-contactinfo__subtitle"]}>Пожалуйста, заполните все поля.</p>
            </div>

            <div className={styles["hotel-bron-ready-form"]}>
                <form action="" name = "hotel-bron-ready-form">

                    <div className={styles["hotel-bron-ready__guest"]}>
                        <p className={styles["guest-text-title"]}>Гость 1 <span>(покупатель)</span></p>

                        <div>
                            <input type="text" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-surname"]} ${styles["hotel-bron-necessarily"]}`} />
                            <input type="text" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-name"]} ${styles["hotel-bron-necessarily"]}`} />
                            <input type="text" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-patronymic"]} ${styles["hotel-bron-necessarily"]}`} />

                            <div className={`${styles["hotel-bron-block"]} ${styles["hotel-bron-input-citizenship"]} ${styles["hotel-bron-necessarily"]}`}></div>
                            <div className={`${styles["hotel-bron-block"]} ${styles["hotel-bron-input-sex"]} ${styles["hotel-bron-necessarily"]}`}></div>

                            <input type="text" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-phone"]} ${styles["hotel-bron-necessarily"]}`} />
                            <input type="text" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-email"]} ${styles["hotel-bron-necessarily"]}`} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Hotelbooking