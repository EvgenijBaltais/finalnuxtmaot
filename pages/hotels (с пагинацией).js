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
    const [filteredItems, setFilteredItems] = useState(false)
    const [isResearch, setIsResearch] = useState(false)
    const [nights, setNights] = useState(0)
    const [popularHotels, setPopularHotels] = useState([])
    const [popularWays, setPopularWays] = useState([])
    const [sliderMin, setSliderMin] = useState(0)
    const [sliderMax, setSliderMax] = useState(0)
    const [nodataText, setNodataText] = useState('')
    const [itemsPerPage, setItemsPerPage] = useState(15)
    const [currentPage, setCurrentPage] = useState(0)
    const [paginationOn, setPagination] = useState(0)
    const foodTypes = ['Все включено', 'Без питания', 'Только завтрак', 'Завтрак + обед или ужин включены', 'Завтрак, обед и ужин включены']
    const [choosingFilters, setChoosingFilters] = useState(false)
    const [checkBoxesResearch, setCheckBoxesResearch] = useState(false)

    useEffect(() => {

            // Поиск контента через API

            if (!router.isReady) return

            if (!query.region_id || !query.region_name || query.region_id == '' || query.region_name == '') {
                setNodataText('Некорректные данные отеля для поиска')
                return () => {}
            }

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

                let children_arr = (Number.isInteger(+query.children_ages) ? [query.children_ages] : query.children_ages || [])

                for (let i = 0; i < children_arr.length; i++) {
                    link += `&childs[${i}]=` + children_arr[i]
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
                setFilteredItems(false)

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

        // Вариант на случай сброса всех фильтров. В этом случае возвращается первоначальная выборка с пагинацией
        if (res == 0) {
            setFilteredItems(0)
        }

        // Если после фильтров не осталось вариантов для отображения
        if (res.length == 0) {
            setNodataText('Не удалось ничего найти. Попробуйте изменить условия поиска')
            setFilteredItems([])
        }

        // Если после фильтров есть варианты
        if (res.length > 0) {
            setFilteredItems(res)
        }
    }

    // Перерисовка данных при слайдере

    function sliderRedraw () {

        if (isResearch == true) return false
        if (sliderMin == 0 && sliderMax == 0) return

        setIsResearch(true)
        
        showVariants() 

        setIsResearch(false)
        setChoosingFilters(false)
    }


    function startReDraw () {

        if (isResearch == true) return false
        if (sliderMin == 0 && sliderMax == 0) return

        if (event.target.classList.contains('aside-food-target')) {
        
            event.target.parentElement.classList.contains('active') ?
                event.target.parentElement.classList.remove('active') :
                event.target.parentElement.classList.add('active')
        }

        if (event.target.classList.contains('aside-block-clickarea')) {

            let isThisActive = event.target.parentElement.classList.contains('active')

            document.querySelectorAll('.aside-block-clickarea').forEach(el => {
                el.parentElement.classList.remove('active')
            })

            isThisActive ? '' : event.target.parentElement.classList.add('active')
        }

        setIsResearch(true)
        setCheckBoxesResearch(true)
    }

    function resetFilters () {

        setFilteredItems(0)
        setIsResearch(false)
        setChoosingFilters(false)
        setCheckBoxesResearch(false)

        document.querySelectorAll('.aside-food-block').forEach(el => {
            el.classList.remove('active')
        })

        document.querySelectorAll('.stars-checkbox').forEach(elem => {
            elem.checked = false
        })

        document.querySelectorAll('.aside-cheap-block-w').forEach(el => {
            el.classList.remove('active')
        })
    }

    useEffect(() => {

        if (choosingFilters == true || (choosingFilters == false && isResearch == false)) return

        setChoosingFilters(true)

        showVariants() 

        setIsResearch(false)
        setChoosingFilters(false)
        setCheckBoxesResearch(false)
    }, [checkBoxesResearch])
    
    function applyFilters() {

        let arr = temporaryItems,
            check = 0,
            el

        // Минимальная и максимальная цена

        let min = parseInt(document.querySelector('.aside-slider-from').value.match(/\d+/)),
            max = parseInt(document.querySelector('.aside-slider-to').value.match(/\d+/)),
            food = [],
            stars = [],
            fromTo = 0

        // От большего к меньшему или наоборот

        document.querySelector('.aside-cheap-first').parentElement.classList.contains('active') ? fromTo = 1 : ''
        document.querySelector('.aside-cheap-last').parentElement.classList.contains('active') ? fromTo = 2 : ''

        // Выбранные типы питания

        document.querySelectorAll('.aside-food-block-inside').forEach(el => {
            el.parentElement.classList.contains('active') ? food.push(el.innerText) : ''
        })

        // Выбранные типы звездности

        for (let i = 0; i < document.querySelectorAll('.stars-checkbox').length; i++) {
            document.querySelectorAll('.stars-checkbox')[i].checked ? 
            stars.push(i + 1) : ''
        }

        // Проверка на все фильтры

        arr = arr.filter(n => {

            el = n.rates[0]

            // Если значения слайдера изменились, то учитывать их. Если не изменились, то пропустить
            if (min != sliderMin || max != sliderMax) {

                if (+el.price < min || +el.price > max) {
                    return false
                }
            }

            // Проверка на тип питания (все включено)

            if (food.length > 0) {

                check = 0
                
                if (food.includes('Все включено')) {
                    el.all_inclusive ? check = 1 : ''
                }

                if (!check && food.includes('Без питания')) {
                    el.meal[0] == 'Питание не включено' ||
                    el.meal[0] == 'Без питания' ? check = 1 : ''
                }

                if (!check && food.includes('Только завтрак')) {
                    el.meal[0] == 'Завтрак' ||
                    el.meal[0] == 'Завтрак в номер' ||
                    el.meal[0] == 'Завтрак включён' ? check = 1 : ''
                }

                if (!check && food.includes('Завтрак + обед или ужин включены')) {
                    el.meal[0] == 'полупансион' ||
                    el.meal[0] == 'Полупансион' ? check = 1 : ''
                }

                if (!check && food.includes('Завтрак, обед и ужин включены')) {
                    el.meal[0] == 'Завтрак, обед и ужин включены' ||
                    el.meal[0] == 'Полный пансион' ? check = 1 : ''
                }

                if (!check) return false
            }

            // Проверка на Звездность

            if (stars.length > 0) {

                check = 0

                for (let i = 0; i < stars.length; i++) {
                    +n.hotel.star_rating == +stars[i] ? check = 1 : ''
                }

                if (!check) return false
            }

            return true
        })

        // Если включен фильтр по возрастанию или убыванию

        if (fromTo) {
            arr.sort((a, b) => {
                return (fromTo == 1 ? +a.rates[0].price - +b.rates[0].price : +b.rates[0].price - +a.rates[0].price)
            })
        }

        // Если все фильтры в изначальном состоянии то вернуть обычный вид
        if (food.length == 0 && stars.length == 0 && (min == sliderMin && max == sliderMax) && !fromTo) {
            arr = 0
        }

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
                            <h3 className = "aside-block-title">Сортировать по цене</h3>
                            <div className="aside-cheap-w">
                                <div className="aside-cheap-block-w">
                                    <div className="aside-block-clickarea" onClick = {() => startReDraw()}></div>
                                    <div className="aside-cheap-block aside-cheap-first">
                                        <svg width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="aside-cheap-svg">
                                            <path d="M0 11C0 10.4477 0.447715 10 1 10H7.4C7.95228 10 8.4 10.4477 8.4 11C8.4 11.5523 7.95228 12 7.4 12H1C0.447715 12 0 11.5523 0 11Z" fill="#D9D9D9"/>
                                            <path d="M0 6C0 5.44772 0.447715 5 1 5H4.6C5.15229 5 5.6 5.44772 5.6 6C5.6 6.55228 5.15228 7 4.6 7H0.999999C0.447714 7 0 6.55228 0 6Z" fill="#D9D9D9"/>
                                            <path d="M0 1C0 0.447715 0.447715 0 1 0H1.8C2.35229 0 2.8 0.447715 2.8 1C2.8 1.55228 2.35228 2 1.8 2H0.999999C0.447714 2 0 1.55228 0 1Z" fill="#D9D9D9"/>
                                            <path d="M0 16C0 15.4477 0.447715 15 1 15H10.2C10.7523 15 11.2 15.4477 11.2 16C11.2 16.5523 10.7523 17 10.2 17H0.999999C0.447714 17 0 16.5523 0 16Z" fill="#D9D9D9"/>
                                            <path d="M0 21C0 20.4477 0.447715 20 1 20H13.7C14.2523 20 14.7 20.4477 14.7 21C14.7 21.5523 14.2523 22 13.7 22H0.999999C0.447714 22 0 21.5523 0 21Z" fill="#D9D9D9"/>
                                            <path d="M0 26C0 25.4477 0.447715 25 1 25H16.5C17.0523 25 17.5 25.4477 17.5 26C17.5 26.5523 17.0523 27 16.5 27H1C0.447715 27 0 26.5523 0 26Z" fill="#D9D9D9"/>
                                            <path d="M0 31C0 30.4477 0.447715 30 1 30H20C20.5523 30 21 30.4477 21 31C21 31.5523 20.5523 32 20 32H1C0.447715 32 0 31.5523 0 31Z" fill="#D9D9D9"/>
                                        </svg>
                                        <span>По возрастанию цены</span>
                                    </div>
                                </div>
                                <div className="aside-cheap-block-w">
                                    <div className="aside-block-clickarea" onClick = {() => startReDraw()}></div>
                                    <div className="aside-cheap-block aside-cheap-last">
                                        <svg width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="aside-cheap-svg">
                                            <path d="M0 21C0 21.5523 0.447715 22 1 22H7.4C7.95228 22 8.4 21.5523 8.4 21C8.4 20.4477 7.95228 20 7.4 20H1C0.447715 20 0 20.4477 0 21Z" fill="#D9D9D9"/>
                                            <path d="M0 26C0 26.5523 0.447715 27 1 27H4.6C5.15229 27 5.6 26.5523 5.6 26C5.6 25.4477 5.15228 25 4.6 25H0.999999C0.447714 25 0 25.4477 0 26Z" fill="#D9D9D9"/>
                                            <path d="M0 31C0 31.5523 0.447715 32 1 32H1.8C2.35229 32 2.8 31.5523 2.8 31C2.8 30.4477 2.35228 30 1.8 30H0.999999C0.447714 30 0 30.4477 0 31Z" fill="#D9D9D9"/>
                                            <path d="M0 16C0 16.5523 0.447715 17 1 17H10.2C10.7523 17 11.2 16.5523 11.2 16C11.2 15.4477 10.7523 15 10.2 15H0.999999C0.447714 15 0 15.4477 0 16Z" fill="#D9D9D9"/>
                                            <path d="M0 11C0 11.5523 0.447715 12 1 12H13.7C14.2523 12 14.7 11.5523 14.7 11C14.7 10.4477 14.2523 10 13.7 10H0.999999C0.447714 10 0 10.4477 0 11Z" fill="#D9D9D9"/>
                                            <path d="M0 6C0 6.55228 0.447715 7 1 7H16.5C17.0523 7 17.5 6.55228 17.5 6C17.5 5.44772 17.0523 5 16.5 5H1C0.447715 5 0 5.44772 0 6Z" fill="#D9D9D9"/>
                                            <path d="M0 1C0 1.55228 0.447715 2 1 2H20C20.5523 2 21 1.55228 21 1C21 0.447715 20.5523 0 20 0H1C0.447715 0 0 0.447715 0 1Z" fill="#D9D9D9"/>
                                        </svg>
                                        <span>По убыванию цены</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = {styles["aside-block"]}>
                            <h3 className = "aside-block-title">Питание</h3>
                            <div className="aside-food-w">
                                {foodTypes.map((item, index) => {
                                    return (
                                        <div className={`aside-food-block aside-food-w-${index + 1}`} onClick = {() => startReDraw()} key = {index}>
                                            <div className="aside-food-target"></div>
                                            <div className="aside-food-block-inside">
                                                {item}
                                            </div>
                                            <div className="aside-food-info">?
                                                <div className="aside-food-info-text">
                                                    {item}
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                }   
                            </div>
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
                        <div className = "aside-block-link-w">
                            <a className = "aside-block-link" onClick = {resetFilters}>Сбросить фильтры</a>
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
                        loadedItems.length && !filteredItems ? (
                            loadedItems[currentPage].map((item, index) => {
                            return (
                                <Search_hotel_item key = {index} item = {item.hotel} rates = {item.rates} nights = {nights} query = {query} />
                            )
                        })) : ''
                    }
                    
                    {/* Если выбраны фильтры */}
                    {
                        filteredItems && filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => {
                            return (
                                <Search_hotel_item key = {index} item = {item.hotel} rates = {item.rates} nights = {nights} />
                            )
                        })) : ''
                    }

                    {/* Пагинация */}
                    {paginationOn ? (
                        <div className="search-pages-list">
                            {loadedItems.length && !filteredItems ? 
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