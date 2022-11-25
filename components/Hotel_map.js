import { useEffect } from 'react'
import styles from "../styles/Hoteldetail.module.css"

export default function Hotel_map ({hotelData, mapReady}) {

    let lat = String(hotelData.coordinates.latitude).length > 10 ? Number(hotelData.coordinates.latitude).toFixed(5) : Number(hotelData.coordinates.latitude)
    let long = String(hotelData.coordinates.longitude).length > 10 ? Number(hotelData.coordinates.longitude).toFixed(5) : Number(hotelData.coordinates.longitude)
    let myMap

    function init () {

        myMap = new ymaps.Map("map", {
            center: [lat, long],
            zoom: 13
        })

        const myPlacemark = new ymaps.Placemark([lat, long], {
            hintContent: hotelData.name,
            balloonContent: hotelData.address
        })

        myMap.controls.remove('geolocationControl')
        myMap.controls.remove('searchControl')
        myMap.controls.remove('trafficControl')
        myMap.controls.remove('typeSelector')
        myMap.controls.remove('fullscreenControl')

        myMap.geoObjects.add(myPlacemark)
        myMap.setType('yandex#map')
    }

    useEffect(() => {

        if (!mapReady) {
            return
        }
        if (!ymaps) {
            return
        }
        try{
            ymaps.ready(init)
        }
        catch(e) {
            console.log(e)
        }
    }, [mapReady])

    function copyCoordinates () {
        event.preventDefault()

        const elem = event.target
        const newElem = document.createElement('span')
            newElem.classList.add('green-text')
            newElem.innerText = 'Данные скопированы'

        navigator.clipboard.writeText(elem.innerText)
            .then(() => {
                elem.replaceWith(newElem)

                setTimeout(() => {
                    newElem.replaceWith(elem)
                }, 2000)
            })
    }

    return (
        <div className = {styles["hotel-map"]} id = "map">
            <div className = {styles["hoteldetail-y-map"]}></div>
            {lat && long ?
                <div className = {styles["hotel-map__place"]}>
                    <span>Координаты: </span>
                    <a className = {styles["hotel-map__coordinates"]} onClick = {copyCoordinates}>
                        {lat}, {long}
                    </a>
                </div> : ''
            }
        </div>
    )
}