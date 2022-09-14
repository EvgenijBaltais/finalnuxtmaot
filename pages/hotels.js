import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import AsideMainForm from "../components/AsideMainForm"

import Search_hotel_item from "../components/search_results/Search_hotel_item"
import styles from "../styles/search_results/Search_results.module.css"

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


export default function Hotels () {

    const router = useRouter()
    const { query } = useRouter()

    const [loadedItems, setLoadedItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [isResearch, setIsResearch] = useState(false)
    const [nights, setNights] = useState(0)
    const [popularHotels, setPopularHotels] = useState([])
    const [popularWays, setPopularWays] = useState([])
    const [filtersOn, setFiltersOn] = useState(0)
    const [sliderMin, setSliderMin] = useState(0)
    const [sliderMax, setSliderMax] = useState(0)
    const [nodataText, setNodataText] = useState('')
    const foodTypes = ['Завтрак', 'Завтрак и обед', 'Полный пансион', 'Все включено', 'Частичный All inclusive']

    useEffect(() => {

            // Поиск контента через API

            if (!router.isReady) return

            if (!query.region_id || !query.region_name || query.region_id == '' || query.region_name == '') {
                setNodataText('Некорректные данные отеля для поиска')
                return () => {}
            }

            setNodataText('Загрузка подходящих вариантов...')

            let [dayIn, monthIn, yearIn] = query.datein.split('.')
            let [dayOut, monthOut, yearOut] = query.dateout.split('.')
            let dateIn = yearIn + '-' + monthIn + '-' + dayIn
            let dateOut = yearOut + '-' + monthOut + '-' + dayOut
            let link = ''

            // Определить сколько всего ночей было выбрано
            setNights(calculateNights(dateIn, dateOut))

            query.region_id ? link = 'https://maot-api.bokn.ru/api/regions/search?'
                        : link = 'https://maot-api.bokn.ru/api/hotels/search?'

            query.region_id ? link += 'id=' + query.region_id
                        : link += '&id=' + query.hotel_id

            link += '&start_date=' + dateIn
            link += '&end_date=' + dateOut
            link += '&adults=' + query.adults
            

            if (query.children_ages) {
                for (let i = 0; i < query.children_ages.length; i++) {
                    link += '&children_ages=' + query.children_ages[i]
                }
            }

            console.log(link)

           fetch(link)
                    .then((res) => res.json())
                    .then((res) => {
                        setLoadedItems(res.data)

                // определить минимум и максимум цен

                let prices = []
                let nights = calculateNights(dateIn, dateOut)

                for (let i = 0; i < res.data.length; i++) {
                    prices.push(parseInt(res.data[i].daily_price))
                }

                setSliderMin(Number.isInteger(Math.min.apply(null, prices) * nights) ? Math.min.apply(null, prices) * nights : 0)
                setSliderMax(Number.isInteger(Math.max.apply(null, prices) * nights) ? Math.max.apply(null, prices) * nights : 0)
                res.data.length == 0 ? setNodataText('Нет подходящих вариантов') : setNodataText('')
          })

    }, [query])


    // Функция для определения количества ночей для дат в формате гг-мм.дд

    function calculateNights (datein, dateout) {
        let begin_date = new Date(datein)
        let end_date = new Date(dateout)
        return (end_date - begin_date) / (1000 * 60 * 60 * 24)
    }

    // Слайдер

    let from = ''
    let to = ''

    const renewValues = value => {

        document.querySelector('.aside-slider-from').value = 'от ' + value[0] + ' ₽'
        document.querySelector('.aside-slider-to').value = 'до ' + value[1] + ' ₽'

        setIsResearch(true)
    }

    const showVariants = () => {

        setNodataText('')
        let res = applyFilters(loadedItems)

        res.length == 0 ? setNodataText('Не удалось ничего найти. Попробуйте изменить условия поиска') : ''

        setIsResearch(true)
        setFiltersOn(true)
        setFilteredItems(res)
        setIsResearch(false)
    }

    function applyFilters(items) {

        const arr = items

        // Минимальная и максимальная цена

        let min = parseInt(document.querySelector('.aside-slider-from').value.match(/\d+/))
        let max = parseInt(document.querySelector('.aside-slider-to').value.match(/\d+/))
        let food = []
        let stars = []

        // Выбранные типы питания

        for (let i = 0; i < document.querySelectorAll('.food-checkbox').length; i++) {
            document.querySelectorAll('.food-checkbox')[i].checked ? 
            food.push(document.querySelectorAll('.food-checkbox')[i].nextElementSibling.innerText) : ''
        }

        // Выбранные типы звездности

        for (let i = 0; i < document.querySelectorAll('.stars-checkbox').length; i++) {
            document.querySelectorAll('.stars-checkbox')[i].checked ? 
            stars.push(i + 1) : ''
        }

        let newArr = []
        let starsAllow = false

        // Проверка на все фильтры

        for (let i = 0; i < arr.length; i++) {
            starsAllow = 0
            // Диапазон цен
            if (parseInt(arr[i].daily_price) * nights >= min && (parseInt(arr[i].daily_price) * nights) <= max) {

                // Проверка на тип питания
                if (food.includes('Все включено')) {
                    if (!arr[i].is_all_inclusive) continue
                }

                // Проверка на Звездность
                if (stars.length != 0) {
                    for (let k = 0; k < stars.length; k++) {
                        if (arr[i].star_rating == stars[k]) {
                            starsAllow = true
                            break
                        }
                    }
                    if (!starsAllow) continue
                }

                newArr.push(arr[i])
            }
        }
        return newArr
    }

    useEffect(() => {
        from = document.querySelector('.aside-slider-from')
        to = document.querySelector('.aside-slider-to')
    }, [])

    useEffect(() => {

        // Популярные отели

        fetch('https://maot-api.bokn.ru/api/hotels/top')
        .then((res) => res.json())
        .then((res) => {
            setPopularHotels(res.data)
        })
    }, [])

    useEffect(() => {

        // Популярные направления

        fetch('https://maot-api.bokn.ru/api/regions/top')
        .then((res) => res.json())
        .then((res) => {
            setPopularWays(res.data)
        })
    }, [])

    return (
        <>
        <Head>
            <title>Результаты поиска</title>
        </Head>
            <section className = {styles["search-result-title"]}>
                Результаты поиска
            </section>
            <section className = {styles["search-result-w"]}>
                <div className = {styles["search-result-left"]}>
                    <div className = {styles["search-result-left-w"]}>
                        <div className = {`${styles["aside-block"]} ${styles["direction-aside-form"]}`}>
                            <h3 className = "aside-block-title">Направление</h3>
                            <AsideMainForm
                                setNodataText = {setNodataText}
                                setFilteredItems = {setFilteredItems}
                                setIsResearch = {setIsResearch}
                                setLoadedItems = {setLoadedItems}
                                setFiltersOn = {setFiltersOn}
                                popularHotels = {popularHotels}
                                popularWays = {popularWays}
                            />
                        </div>
                        <div className = "aside-slider">
                            <div className="slider-values">
                                <div className="aside-slider-val aside-slider-left">
                                    {sliderMin != 0 ?
                                        <input type="text" defaultValue = {'от ' + sliderMin + ' ₽'} onChange = {value => setSliderMin(value)} className="aside-slider-input aside-slider-from" />
                                    : ''}
                                    </div>
                                <div className="aside-slider-val aside-slider-right">
                                    {sliderMax != 0 ?
                                        <input type="text" defaultValue = {'до ' + sliderMax + ' ₽'} onChange = {value => setSliderMax(value)} className="aside-slider-input aside-slider-to" />
                                    : ''}
                                </div>
                            </div>
                            {sliderMax != 0 ?
                                <Slider
                                    step = {1}
                                    range
                                    defaultValue={[sliderMin, sliderMax]}
                                    min={0}
                                    max={(sliderMax + 10000)}
                                    onChange={value => renewValues(value)}
                                    onAfterChange = {() => showVariants()}
                                /> :  ''
                            }
                        </div>
                        <div className = {styles["aside-block"]}>
                            <h3 className = "aside-block-title">Типы питания</h3>
                            {foodTypes.map((item, index) => {
                              return (
                                <div key = {index} className = {styles["aside-checkbox"]}>
                                    <input type="checkbox" id={`checkbox-1${index + 1}`} className = "stylized food-checkbox" onChange={() => showVariants()} /> 
                                    <label htmlFor={`checkbox-1${index + 1}`}>{item}</label>
                                </div>
                              )  
                            })}
                        </div>
                        <div className = {styles["aside-block"]}>
                            <h3 className = "aside-block-title">Звездность</h3>
                            {
                                [...Array(5)].map((e, i) => {
                                    return (
                                        <div key = {i} className = {styles["aside-checkbox"]}>
                                            <input type="checkbox" id={`checkbox-2${i + 1}`} className = "stylized stars-checkbox" onChange={() => showVariants()} />
                                            <label className = {styles["aside-stars-label"]} htmlFor={`checkbox-2${i + 1}`}>
                                                <ul className = {styles["aside-stars-list"]}>
                                                    {[...Array(i + 1)].map((el, ind) => {
                                                        return (
                                                            <li key = {ind} className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                                        )
                                                    })}
                                                    {[...Array(5 - (i + 1))].map((el, ind) => {
                                                        return (
                                                            <li key = {ind} className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-grey"]}`}></li>
                                                        )
                                                    })}
                                                </ul>
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className = {styles["search-result-right"]}>

                {nodataText ? <p className = "no-result">{nodataText}</p> : ''}
                {isResearch ? <div className="waiting-fon"></div>: ''}
                    
                    {/* Вывод по поиску */}
                    {
                        loadedItems.length && !filtersOn ? (loadedItems.map((item, index) => {
                            return (
                                <Search_hotel_item key = {index} item = {item} nights = {nights} query = {query} />
                            )
                        })) : ''
                    }
                    
                    {/* Если выбраны фильтры */}
                    {
                        filtersOn && filteredItems.length ? (

                            filteredItems.map((item, index) => {
                            return (
                                <Search_hotel_item key = {index} item = {item} nights = {nights} />
                            )
                        })) : ''
                    }
                </div>
            </section>
        </>
    )
}