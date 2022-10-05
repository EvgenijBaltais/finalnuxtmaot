import { useEffect } from 'react'
import styles from "../styles/Hoteldetail.module.css"

export default function Hotel_map ({hotelData, mapReady}) {

    let lat = String(hotelData.coordinates.latitude).length > 10 ? Number(hotelData.coordinates.latitude).toFixed(5) : Number(hotelData.coordinates.latitude)
    let long = String(hotelData.coordinates.longitude).length > 10 ? Number(hotelData.coordinates.longitude).toFixed(5) : Number(hotelData.coordinates.longitude)


    const init = () => {

        const myMap = new ymaps.Map("map", {
            center: [lat, long],
            zoom: 13
        })
    
        const myPlacemark = new ymaps.Placemark([lat, long], {
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

        ymaps.ready(init)
    }, [mapReady])

    return (
        <div className = {styles["hotel-map"]} id = "map">
            <div className = {styles["hoteldetail-y-map"]}></div>
            {lat && long ?
                <div className = {styles["hotel-map__place"]}>
                    <span>Координаты: </span>
                    <a className = {styles["hotel-map__coordinates"]}>
                        {lat}, {long}
                    </a>
                </div> : ''
            }
        </div>
    )
}