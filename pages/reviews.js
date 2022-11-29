import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'

import Search_hotel_item from "../components/search_results/Search_hotel_item"
import styles from "../styles/search_results/Search_results.module.css"

export default function Hotels () {

    const router = useRouter()
    const { query } = useRouter()

    const [loadedItems, setLoadedItems] = useState([])
    const [loadedItemsMinMax, setLoadedItemsMinMax] = useState([])
    const [loadedItemsMaxMin, setLoadedItemsMaxMin] = useState([])
    const [filteredItems, setFilteredItems] = useState(false)
    const [isResearch, setIsResearch] = useState(false)
    const [nights, setNights] = useState(0)
    const [sliderMin, setSliderMin] = useState(0)
    const [sliderMax, setSliderMax] = useState(0)
    const [nodataText, setNodataText] = useState('')
    const elementsOnPage = 15
    const [itemsPerPage, setItemsPerPage] = useState(elementsOnPage)
    const foodTypes = ['Все включено', 'Без питания', 'Только завтрак', 'Завтрак + обед или ужин включены', 'Завтрак, обед и ужин включены']
    const [choosingFilters, setChoosingFilters] = useState(false)
    const [checkBoxesResearch, setCheckBoxesResearch] = useState(false)

    const [reloadComponent, setReloadComponent] = useState(0)

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

                res.data.map((el) => {

                    delete el.hotel.coordinates
                    delete el.hotel.crm_id
                    delete el.hotel.description
                    delete el.hotel.type_id
                    delete el.rates[0].images
                    delete el.rates[0].cancellation_penalties
                    delete el.rates[0].description
                    //delete el.rates[0].room_info

                    return formatServices(el)
                })

                
                setLoadedItems(res.data)
                setFilteredItems(false)

                // Отсортировать сразу выборку по порядку цен, чтобы вставить значения в слайдер 
                //и в дальнейшем использовать в фильтрах, чтобы потом опять не фильтровать и не вешать страницу лишний раз
                
                let minMax = res.data.length ? res.data.slice() : [] // скопировать массив
                let maxMin = res.data.length ? res.data.slice() : [] // скопировать массив

                minMax.sort((a, b) => {
                    return +a.rates[0].price - +b.rates[0].price
                })

                maxMin.sort((a, b) => {
                    return +b.rates[0].price - +a.rates[0].price
                })

                setLoadedItemsMinMax(minMax)
                setLoadedItemsMaxMin(maxMin)

                setSliderMin(minMax.length ? +minMax[0].rates[0].price : 0)
                setSliderMax(maxMin.length ? +maxMin[0].rates[0].price : 0)

                setReloadComponent(reloadComponent => reloadComponent += 1)

                res.data.length == 0 ? setNodataText('Нет подходящих вариантов') : setNodataText('')
          })

    }, [query])


    function resetFilters () {


    }
    


    return (
        <>
        <Head>
            <title>Отзывы</title>
        </Head>
            <section className = {styles["search-result-title"]}>
                Отзывы
            </section>
            <section className = {styles["search-result-w"]}>
                <div className = {styles["search-result-left"]}>
                    <div className = {styles["search-result-left-w"]}>
                        <div className = {`${styles["aside-block"]} ${styles["direction-aside-form"]}`}>
                            <h3 className = "aside-block-title">Поиск по названию отеля</h3>

                        </div>

                        <div className = {styles["aside-block"]}>
                            <h3 className = "aside-block-title">Сортировать по цене</h3>
                            <div className="aside-cheap-w">
                                <div className="aside-cheap-block-w">
                                    <div className="aside-block-clickarea" onClick = {startReDraw}></div>
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
                                    <div className="aside-block-clickarea" onClick = {startReDraw}></div>
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


                        <div className = "aside-block-link-w">
                            <a className = "aside-block-link" onClick = {resetFilters}>Сбросить фильтры</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}