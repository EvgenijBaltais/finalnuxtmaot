import React, { useEffect, useState } from "react"
import Head from 'next/head'

import Favorites_hotel_item from "../components/favorites/Favorites_hotel_item"
import styles from "../styles/favorites/Favorites_results.module.css"

import RangeSlider from "../components/RangeSlider"

export default function Hotels () {

    const [loadedItems, setLoadedItems] = useState([])
    const [hotelsArr, setHotelsArr] = useState([])
    const [sliderMin, setSliderMin] = useState(0)
    const [sliderMax, setSliderMax] = useState(0)
    const [loadedItemsMinMax, setLoadedItemsMinMax] = useState([])
    const [loadedItemsMaxMin, setLoadedItemsMaxMin] = useState([])
    const [isResearch, setIsResearch] = useState(false)
    const [checkBoxesResearch, setCheckBoxesResearch] = useState(false)

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

        let arr = []
        localStorage.getItem('hotels') ? arr = JSON.parse(localStorage.getItem('hotels')) : ''
        setLoadedItems(arr)

        // Отсортировать сразу выборку по порядку цен, чтобы вставить значения в слайдер 
        //и в дальнейшем использовать в фильтрах, чтобы потом опять не фильтровать и не вешать страницу лишний раз
        
        let minMax = arr.length ? arr.slice() : [] // скопировать массив
        let maxMin = arr.length ? arr.slice() : [] // скопировать массив

        minMax.sort((a, b) => {
            return +a['rates'][0].price - +b['rates'][0].price
        })

        maxMin.sort((a, b) => {
            return +b['rates'][0].price - +a['rates'][0].price
        })

        setLoadedItemsMinMax(minMax)
        setLoadedItemsMaxMin(maxMin)

        setSliderMin(minMax.length ? +minMax[0].rates[0].price : 0)
        setSliderMax(maxMin.length ? +maxMin[0].rates[0].price : 0)

    }, [])

    function startReDraw () {

        if (isResearch == true) return false
        if (sliderMin == 0 && sliderMax == 0) return

        setCheckBoxesResearch(false)
        setIsResearch(true)
    }

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
                Избранные отели{`: ` + hotelsArr.length}
            </section>
            <section className = {styles["search-result-w"]}>
                <div className = {styles["search-result-left"]}>
                    <div className = {styles["search-result-left-w"]}>
                        <h3 className="aside-block-title">
                            Направление (регион)
                        </h3>

                        <div className="aside-fiters-w">

                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id={`checkbox-3`} className = "stylized stars-checkbox" />
                                <label className = {styles["aside-stars-label"]} htmlFor={`checkbox-3`}>Подмосковье</label>
                            </div>

                            <div className = "aside-slider">
                                <div className="slider-values">
                                    {sliderMin != 0 ?
                                        <div className="aside-slider-val aside-slider-left">
                                            <input type="text" className="aside-slider-input aside-slider-from" />
                                        </div>:
                                        <div className="aside-slider-val aside-slider-left">
                                            <input type="text" className="aside-slider-input aside-slider-from" defaultValue = 'от 100 ₽' />
                                        </div>
                                    }
                                    {sliderMax != 0 ?
                                        <div className="aside-slider-val aside-slider-right">
                                            <input type="text" className="aside-slider-input aside-slider-to" />
                                        </div>:
                                        <div className="aside-slider-val aside-slider-right">
                                            <input type="text" className="aside-slider-input aside-slider-to" defaultValue = 'до 280000 ₽' />
                                        </div>
                                    }
                                </div>

                                {sliderMax != 0 ?
                                    <RangeSlider
                                        startReDraw = {startReDraw}
                                        sliderMin = {sliderMin}
                                        sliderMax = {sliderMax}
                                        isResearch = {isResearch}
                                        setIsResearch = {setIsResearch}
                                        setCheckBoxesResearch = {setCheckBoxesResearch}
                                    /> :
                                    <RangeSlider
                                        sliderMin = {100}
                                        sliderMax = {280000}
                                    />
                                }

                            </div>
                        </div>

                    </div>
                </div>
                <div className = {`${styles["search-result-right"]} search-result-right`}>

                {isResearch ? <div className="waiting-fon"></div>: ''}

                <a className = {`${styles["compare-favorites"]} compare-favorites`}>Сравнить избранные отели</a>

                    {
                        loadedItems.length ? (
                            loadedItems.map((item, index) => {
                            return (
                                <Favorites_hotel_item
                                    key = {index}
                                    item = {item}
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