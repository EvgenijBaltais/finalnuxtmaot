import styles from "../styles/MapCarousel.module.css"
import { useEffect } from "react"

let myMap

const ContactsMap = ({name, address, koordinates, mapReady, activeCity}) => {

    useEffect(() => {

        if (!mapReady) return

        myMap ? myMap.destroy() : ''

        ymaps.ready(() => init(name, address, koordinates))
    }, [mapReady])

    useEffect(() => {

        if (!mapReady) return

        myMap ? myMap.destroy() : ''

        ymaps.ready(() => init(name, address, koordinates))
    }, [activeCity])


    let init = function (name, address, koordinates) {

        myMap = new ymaps.Map("map", {
            center: [koordinates[0], koordinates[1]],
            zoom: 11
        })
    
        let myPlacemark = new ymaps.Placemark([koordinates[0], koordinates[1]], {
            hintContent: name,
            balloonContent: address
        })

        myMap.geoObjects.add(myPlacemark);
        myMap.setType('yandex#map');
        myMap.behaviors.disable('scrollZoom');
    }

    return (
        <>
            <div className = {styles["map-section"]}>
                <div className = {styles["map-info"]}>
                    <h2 className = "section-title icon-item icon-item-direction">Как к нам добраться</h2>
                    <div className = {`${styles["contact-info-block"]} ${styles["contact-info-adress"]}`}>
                        <p className = "subtitle-bold">Адрес</p>
                        <span className = "block-span">{address}</span>
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
                    <div id="map" className = "contacts-y-map"></div>
                </div>
            </div>
        </>
    )
}

export default ContactsMap