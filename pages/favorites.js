import React, { useEffect, useState } from "react"
import Head from 'next/head'

import Favorites_hotel_item from "../components/favorites/Favorites_hotel_item"
import styles from "../styles/search_results/Search_results.module.css"

import RangeSlider from "../components/RangeSlider"

export default function Hotels () {

    const [loadedItems, setLoadedItems] = useState([])

    function getDate(date) {

    	var dd = date.getDate();
    	if (dd < 10) dd = '0' + dd;

    	var mm = date.getMonth() + 1;
    	if (mm < 10) mm = '0' + mm;

    	var yy = date.getFullYear();
    	if (yy < 10) yy = '0' + yy;

    	return yy + '-' + mm + '-' + dd;
    }

    let date = new Date()
    let today = getDate(date)
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1)
        tomorrow = getDate(tomorrow)

    useEffect(() => {

        setLoadedItems([])

        //['bristol_hotel_7', 'bristol_guest_house_2', 'yaltaintourist_hotel', 'chayka_hotel_3', 'petrhotel']
        let h = ['bristol_hotel_7', 'bristol_guest_house_2', 'yaltaintourist_hotel']

        localStorage.setItem('h', JSON.stringify(h))

        let link = ''

        let hotels = [],
            readyHotels = []

            hotels = JSON.parse(localStorage.getItem('h'))

        //for (let i = 0; i < hotels.length; i++) {

            link = `https://maot-api.bokn.ru/api/hotels/search?start_date=${today}&end_date=${tomorrow}&adults=2&id=${hotels[0]}`

            console.log(link)

            fetch(`https://maot-api.bokn.ru/api/hotels/search?start_date=${today}&end_date=${tomorrow}&adults=2&id=${hotels[0]}`)
            .then((res) => res.json())
            .then((res) => {

                res.data.map((el) => {
                    return formatServices(el)
                })

                readyHotels.push(res.data[0])
                setLoadedItems(readyHotels)

                console.log(readyHotels)
            })

            fetch(`https://maot-api.bokn.ru/api/hotels/search?start_date=${today}&end_date=${tomorrow}&adults=2&id=${hotels[1]}`)
            .then((res) => res.json())
            .then((res) => {

                res.data.map((el) => {
                    return formatServices(el)
                })

                readyHotels.push(res.data[0])
                setLoadedItems(readyHotels)

                console.log(readyHotels)
            })

            fetch(`https://maot-api.bokn.ru/api/hotels/search?start_date=${today}&end_date=${tomorrow}&adults=2&id=${hotels[2]}`)
            .then((res) => res.json())
            .then((res) => {

                res.data.map((el) => {
                    return formatServices(el)
                })

                readyHotels.push(res.data[0])
                setLoadedItems(readyHotels)

                console.log(readyHotels)
            })

        //}
    }, [])

    function formatServices (el) {

        // Заполнить главные услуги
        let servicesArr = []
        let dopServicesArr = []
        el.hotel.servicesMain = []
        el.hotel.servicesDop = []

        el.rates[0].meal ? servicesArr.push(['meal', el.rates[0].meal[0]]) : ''          // Питание

        // Добавить в главные услуги из объекта общих отельных услуг

        for (let i = 0; i < el.hotel.services.length; i++) {
            if (el.hotel.services[i].group_name == "Интернет") {
                for (let k = 0; k < el.hotel.services[i].amenities.length; k++) {
                    el.hotel.services[i].amenities[k].indexOf('Wi-Fi') + 1 ||
                    el.hotel.services[i].amenities[k].indexOf('wi-fi') + 1 || 
                    el.hotel.services[i].amenities[k].indexOf('WI-FI') + 1 ? 
                    servicesArr.push(['internet', el.hotel.services[i].amenities[k]]) : ''
                }
                continue
            }
            if (el.hotel.services[i].group_name == "В номерах") {
                for (let k = 0; k < el.hotel.services[i].amenities.length; k++) {
                    el.hotel.services[i].amenities[k].indexOf('Холодильник') + 1 ? 
                    servicesArr.push(['fridge', el.hotel.services[i].amenities[k]]) : ''
                }
                continue
            }

            if (el.hotel.services[i].group_name == "Общее") {
                for (let k = 0; k < el.hotel.services[i].amenities.length; k++) {
                    el.hotel.services[i].amenities[k].indexOf('Кондиционер') + 1 ? 
                    servicesArr.push(['conditioner', el.hotel.services[i].amenities[k]]) : ''
                }
                continue
            }
        }

        for (let i = 0; i < el.hotel.services.length; i++) {
            for (let k = 0; k < el.hotel.services[i].amenities.length; k++) {
                dopServicesArr.push(el.hotel.services[i].amenities[k])
            }
        }

        el.rates[0].room_info.bathroom ? servicesArr.push(['bathroom', el.rates[0].room_info.bathroom]) : ''                      // Ванна
        el.rates[0].room_info.bed ? servicesArr.push(['bed', el.rates[0].room_info.bed]) : ''                                     // Кровать
        el.rates[0].room_amenities.nonSmoking ? servicesArr.push(['nonSmoking', el.rates[0].room_amenities.nonSmoking]) : ''      // Для некурящих
        el.rates[0].room_amenities.window ? servicesArr.push(['window', el.rates[0].room_amenities.window]) : ''                  // Окно

        el.hotel.servicesMain = servicesArr
        el.hotel.servicesDop = dopServicesArr

        return el
}

    // Функция для определения количества ночей для дат в формате гг-мм.дд

    return (
        <>
        <Head>
            <title>Избранное</title>
        </Head>
            <section className = {styles["search-result-title"]}>
                Избранные отели
            </section>
            <section className = {styles["search-result-w"]}>
                <div className = {styles["search-result-left"]}>
                    <div className = {styles["search-result-left-w"]}>


                    </div>
                </div>
                <div className = {`${styles["search-result-right"]} search-result-right`}>


                {
                        loadedItems.length ? (
                            loadedItems.map((item, index) => {
                            return (
                                <Favorites_hotel_item
                                    key = {index}
                                    item = {item.hotel}
                                    rates = {item.rates}
                                    nights = {1}
                                />
                            )
                        })) : ''
                    }

                </div>
            </section>
        </>
    )
}