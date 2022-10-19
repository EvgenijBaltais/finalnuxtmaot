import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import AsideMainForm from "../components/AsideMainForm"

import Search_hotel_item from "../components/search_results/Search_hotel_item"
import styles from "../styles/search_results/Search_results.module.css"

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import Pagination from "../components/Pagination"

export default function Hotels () {

    const router = useRouter()
    const { query } = useRouter()

    const [loadedItems, setLoadedItems] = useState([])
    const [temporaryItems, setTemporaryItems] = useState([])   // копия выборки без деления на страницы для использования в фильтрах
    const [filteredItems, setFilteredItems] = useState([])
    const [isResearch, setIsResearch] = useState(false)
    const [nights, setNights] = useState(0)
    const [popularHotels, setPopularHotels] = useState([])
    const [popularWays, setPopularWays] = useState([])
    const [filtersOn, setFiltersOn] = useState(0)
    const [sliderMin, setSliderMin] = useState(0)
    const [sliderMax, setSliderMax] = useState(0)
    const [nodataText, setNodataText] = useState('')
    const [itemsPerPage, setItemsPerPage] = useState(15)
    const [currentPage, setCurrentPage] = useState(0)
    const [paginationOn, setPagination] = useState(0)
    const foodTypes = ['Завтрак', 'Завтрак и обед', 'Полный пансион', 'Все включено', 'Частичный All inclusive']
    const [choosingFilters, setChoosingFilters] = useState(false)
    const [checkBoxesResearch, setCheckBoxesResearch] = useState(false)

    useEffect(() => {

            // Поиск контента через API

            if (!router.isReady) return

            if (!query.region_id || !query.region_name || query.region_id == '' || query.region_name == '') {
                setNodataText('Некорректные данные отеля для поиска')
                return () => {}
            }

            setFilteredItems([])
            setLoadedItems([])
            setNodataText('Мы загружаем лучшие варианты!')

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

                    res.success ? '' : res.data = []
                
                // Отфильтровать и вывести услуги

                let arr = []

                for (let i = 0; i < res.data.length; i++) {
                    arr.push(setServices(res.data[i]))
                }

                res.data = arr

                setLoadedItems(paginateItems(res.data, itemsPerPage))
                setTemporaryItems(res.data)

                setPagination(res.data.length > itemsPerPage)

                // определить минимум и максимум цен

                let prices = []

                for (let i = 0; i < res.data.length; i++) {
                    prices.push(parseInt(res.data[i].rates[0].price))
                }

                setSliderMin(Number.isInteger(Math.min.apply(null, prices)) ? Math.min.apply(null, prices) : 0)
                setSliderMax(Number.isInteger(Math.max.apply(null, prices)) ? Math.max.apply(null, prices) : 0)
                res.data.length == 0 ? setNodataText('Нет подходящих вариантов') : setNodataText('')
          })

    }, [query])

    // Функция смены страницы

    function changeCurrentPage (value) {
        setCurrentPage(value)
    }

    // Функция для разбивки данных на страницы

    function paginateItems (items, itemsPerPage) {

        let arr = []
        let page = []

        for (let i = 0; i < items.length; i++) {

            page.push(items[i])
            
            if (page.length == itemsPerPage) {
                arr.push(page)
                page = []
                continue
            }

            if (i == items.length - 1) {
                arr.push(page)
            }
        }
        return arr
    }

    // Функция для сортировки услуг и выбора самых востребованых, для показа на странице подбора номеров


    function setServices (item) {

        // Заполнить главные услуги
        let neededServices = ["Питание", "Интернет", "В номерах", "Общее"]
        let servicesArr = []
        let i = item
        let services = i.hotel.services

        // Массив необходимых сервисов neededServices -> в нем перебираем все услуги -> в нем берем первые 3.
        // Цикл запускается каждый раз заново, чтобы сохранить порядок как в массиве neededServices 
        // Если Питание, то отдельный цикл

        for (let i = 0; i < services.length; i++) {
            if (services[i].group_name == "Питание") {
                for (let k = 0; k < services[i].amenities.length; k++) {
                    services[i].amenities[k].indexOf('Завтрак') + 1 ? 
                    servicesArr.push([services[i].amenities[k]]) : ''

                    services[i].amenities[k].indexOf('Бар') + 1 ? 
                    servicesArr.push([services[i].amenities[k]]) : ''

                    services[i].amenities[k].indexOf('Кафе') + 1 ? 
                    servicesArr.push([services[i].amenities[k]]) : ''

                    services[i].amenities[k].indexOf('пансион') + 1 ? 
                    servicesArr.push([services[i].amenities[k]]) : ''
                }
                break
            }
        }

        for (let q = 1; q < neededServices.length; q++) {
            for (let i = 0; i < services.length; i++) {
                if (services[i].group_name == neededServices[q]) {
                    for (let k = 0; k < services[i].amenities.length; k++) {
                        servicesArr.push(services[i].amenities[k])
                        if (k == 2) break
                    }
                }
            }
        }

        i.hotel.services = servicesArr
        return i
    }

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
        setCurrentPage(0)
        let res = applyFilters()

        res.length == 0 ? setNodataText('Не удалось ничего найти. Попробуйте изменить условия поиска') : ''

        setFiltersOn(true)
        setFilteredItems(res)
    }

    // Перерисовка данных при слайдере

    function sliderRedraw () {

        if (isResearch == true) return false
        if (sliderMin == 0 && sliderMax == 0) return

        console.log('startsliderRedraw')

        setIsResearch(true)
        
        showVariants() 

        setIsResearch(false)
        setChoosingFilters(false)
        //console.log('endsliderRedraw')
    }


    function startReDraw () {

        if (isResearch == true) return false
        if (sliderMin == 0 && sliderMax == 0) return

        console.log('startRedraw')

        setIsResearch(true)
        setCheckBoxesResearch(true)
    }

    useEffect(() => {

        if (choosingFilters == true || (choosingFilters == false && isResearch == false)) return

        console.log('checkBoxesResearch')
        
        setChoosingFilters(true)

        setTimeout(() => {
            showVariants() 
        }, 0)

        setTimeout(() => {
            setIsResearch(false)
            setChoosingFilters(false)
            setCheckBoxesResearch(false)
        }, 0)

    }, [checkBoxesResearch])

    function applyFilters() {

        let arr = temporaryItems

        // Минимальная и максимальная цена

        if (sliderMin == 0 && sliderMax == 0) return

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

        //console.log(min)
        //console.log(max)
        //console.log(food)
        //console.log(stars)

        // Проверка на все фильтры

        // Диапазон цен

        arr = arr.filter(function (n) {
            return parseInt(n.rates[0].price) >= min && parseInt(n.rates[0].price) <= max
        })

        console.log(arr)

        // Проверка на тип питания (все включено)

        if (food.length > 0) {

            let el = 0
            arr = arr.filter(n => {

                el = 0

                if (food.includes('Завтрак')) {
                    n.rates[0].meal[0].indexOf('Завтрак') != 0 ||
                    n.rates[0].meal[0].indexOf('Завтрак включён') != 0 ? el = 1 : ''
                }
                if (food.includes('Завтрак и обед')) {
                    n.rates[0].meal[0].indexOf('Завтрак и обед') != -1 ? el = 1 : ''
                }
                if (food.includes('Полный пансион')) {
                    n.rates[0].meal[0].indexOf('Завтрак, обед и ужин включены') != -1 ||
                    n.rates[0].meal[0].indexOf('Полный пансион') != -1 ? el = 1 : ''
                }
                if (food.includes('Все включено')) {
                    n.rates[0].meal[0].indexOf('Все включено') != -1 ? el = 1 : ''
                }

                if (el) return n
            })
        }

        console.log(arr)

        /*
        // Проверка на Звездность
        if (stars.length != 0) {
            for (let k = 0; k < stars.length; k++) {
                if (arr[i].hotel.star_rating == stars[k]) {
                    starsAllow = true
                    break
                }
            }
            if (!starsAllow) continue
        }*/

       // if (arr.length == 0) arr = temporaryItems

        return arr
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

    function pagination(c, m) {
        var current = c,
            last = m,
            delta = 5,
            left = current - delta,
            right = current + delta + 1,
            range = [],
            rangeWithDots = [],
            l;
    
        for (let i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i)
            }
        }
    
        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1)
                } else if (i - l !== 1) {
                    rangeWithDots.push('...')
                }
            }
            rangeWithDots.push(i)
            l = i
        }
        return rangeWithDots
    }

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
                                {sliderMin != 0 ?
                                    <div className="aside-slider-val aside-slider-left">
                                        <input type="text" defaultValue = {'от ' + sliderMin + ' ₽'} onChange = {value => setSliderMin(value)} className="aside-slider-input aside-slider-from" />
                                    </div>
                                : ''}
                                {sliderMax != 0 ?
                                    <div className="aside-slider-val aside-slider-right">
                                        <input type="text" defaultValue = {'до ' + sliderMax + ' ₽'} onChange = {value => setSliderMax(value)} className="aside-slider-input aside-slider-to" />
                                    </div>
                                : ''}
                            </div>
                            {sliderMax != 0 ?
                                <Slider
                                    step = {1}
                                    range
                                    defaultValue={[sliderMin, sliderMax]}
                                    min={0}
                                    max={(sliderMax + 10000)}
                                    onChange={value => renewValues(value)}
                                    onAfterChange = {sliderRedraw}
                                /> :  ''
                            }
                        </div>
                        <div className = {styles["aside-block"]}>
                            <h3 className = "aside-block-title">Типы питания</h3>
                            {foodTypes.map((item, index) => {
                              return (
                                <div key = {index} className = {styles["aside-checkbox"]}>
                                    <input type="checkbox" id={`checkbox-1${index + 1}`} className = "stylized food-checkbox" onChange={() => startReDraw()} /> 
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
                                            <input type="checkbox" id={`checkbox-2${i + 1}`} className = "stylized stars-checkbox" onChange={() => startReDraw()} />
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
                <div className = {`${styles["search-result-right"]} search-result-right`}>

                {nodataText ?
                    <p className = "no-result">
                        {nodataText == "Мы загружаем лучшие варианты!" ? 
                            <img src = "/images/waiting.gif" className = "no-result-image" />
                            : ''
                        }
                        {nodataText}
                    </p>
                 : ''}

                {isResearch ? <div className="waiting-fon"></div>: ''}

                    {/* Вывод по поиску */}
                    {
                        loadedItems.length && !filtersOn ? (
                            loadedItems[currentPage].map((item, index) => {
                            return (
                                <Search_hotel_item key = {index} item = {item.hotel} rates = {item.rates} nights = {nights} query = {query} />
                            )
                        })) : ''
                    }
                    
                    {/* Если выбраны фильтры */}
                    {
                        filteredItems.length && filtersOn ? (
                            filteredItems.map((item, index) => {
                            return (
                                <Search_hotel_item key = {index} item = {item.hotel} rates = {item.rates} nights = {nights} />
                            )
                        })) : ''
                    }

                    {/* Пагинация */}
                    {paginationOn && !filtersOn ? (
                        <div className="search-pages-list">
                            {loadedItems.length && !filtersOn ? 
                                <Pagination
                                    pages = {pagination(currentPage, loadedItems.length)}
                                    currentPage = {currentPage}
                                    changeCurrentPage = {changeCurrentPage}
                                />: ''
                            }
                        </div>
                        ) : ('')
                    }
                </div>
            </section>
        </>
    )
}