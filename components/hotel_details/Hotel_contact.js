import { useEffect } from 'react'
import styles from "../../styles/Hoteldetail.module.css"

const Hotel_contact = ({koordinates, hotelData}) => {

    useEffect(() => {

        function initContacts() {
            const myMap = new ymaps.Map("contactmap", {
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
    
        ymaps.ready(initContacts)
    
    }, [])

    return (

        <div className={styles["result-description"]}>
            <h2 className = "section-title icon-item icon-item-contact">Контакты</h2>
            {hotelData.wayinfo ?
                <div className = {`${styles["hotel-contact-section"]} ${styles["hotel-serv-descr"]}`}>
                    <p><b>На машине:</b> от МКАД по Минскому шоссе (трасса М1) следовать до 
                    указателей — «Дорохово-Верея» (85 км), повернуть по указателю на «Дорохово» налево 
                    и следовать до отеля 700 метров.</p>
                    <p><b>На электричке:</b> с Белорусского вокзала до станции «Дорохово».</p>
                </div> : ''
            }
            <div className={styles["contact-map"]}>
                <div id = "contactmap" className={styles['contact-map-block']}></div>
            </div>
        </div>
    )
}

export default Hotel_contact