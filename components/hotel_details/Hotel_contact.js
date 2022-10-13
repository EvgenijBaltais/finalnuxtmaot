import { useEffect } from 'react'
import styles from "../../styles/Hoteldetail.module.css"

const Hotel_contact = ({hotelData}) => {

    let lat = ('' + hotelData.coordinates.latitude).length > 10 ? hotelData.coordinates.latitude.toFixed(5) : hotelData.coordinates.latitude
    let long = ('' + hotelData.coordinates.longitude).length > 10 ? hotelData.coordinates.longitude.toFixed(5) : hotelData.coordinates.longitude
    const koordinates = [lat, long]

    let description = document.createElement("div")
        description.innerHTML = hotelData.description

    const initContacts = () => {
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

    useEffect(() => {
        ymaps.ready(initContacts)
    }, [])

    return (

        <div className={styles["result-description"]}>
            <h2 className = "section-title icon-item icon-item-contact">Контакты</h2>

            <div className = {`${styles["hotel-title-section"]} ${styles["hotel-title-descr"]}`}>
                <div className = {styles["hotel-main-descr"]}>
                        <h3>Расположение</h3>
                        <p>{hotelData.address}</p>
                        {hotelData.description ? 
                        <>
                            <h3>У нас вы найдете</h3>
                            <p className = {styles["hotel-description-text"]}>{description.textContent}</p>
                        </>
                        : ''}
                </div>

                <div className={styles["contact-map"]}>
                    <div id = "contactmap" className={styles['contact-map-block']}></div>
                </div>
            </div>

            {/*hotelData.wayinfo ?
                <div className = {`${styles["hotel-contact-section"]} ${styles["hotel-serv-descr"]}`}>
                    <p><b>На машине:</b> от МКАД по Минскому шоссе (трасса М1) следовать до 
                    указателей — «Дорохово-Верея» (85 км), повернуть по указателю на «Дорохово» налево 
                    и следовать до отеля 700 метров.</p>
                    <p><b>На электричке:</b> с Белорусского вокзала до станции «Дорохово».</p>
                </div> : ''
            */}
            <div className={styles["contact-map"]}>
                <div id = "contactmap" className={styles['contact-map-block']}></div>
            </div>
        </div>
    )
}

export default Hotel_contact