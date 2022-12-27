import React, { useEffect, useState } from "react"
import Head from 'next/head'

import Favorites_hotel_item from "../components/favorites/Favorites_hotel_item"
import styles from "../styles/favorites/Favorites_results.module.css"

export default function Hotels () {

    const [loadedItems, setLoadedItems] = useState([])
    const [isResearch, setIsResearch] = useState(false)
    const [choosingFilters, setChoosingFilters] = useState(false)
    const [checkBoxesResearch, setCheckBoxesResearch] = useState(false)
    const [noDataText, setNoDataText] = useState('')
    const [noData, setNoData] = useState(0)
    const [checked, setChecked] = useState(true)
    const [regions, setRegions] = useState([])

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

        let hotels_arr = []
        localStorage.getItem('hotels') ? hotels_arr = JSON.parse(localStorage.getItem('hotels')) : ''
        setLoadedItems(hotels_arr)

        if (hotels_arr.length == 0) {
            setNoDataText('В избранном пока нет сохраненных отелей')
            setNoData(1)
        }

        // Регионы
        let reg_set = new Set()

        for (let i = 0; i < hotels_arr.length; i++) {
            reg_set.add(hotels_arr[i].hotel.region.name)
        }

        let obj = {},
            regions_arr = [],
            num = 0

        for (const item of reg_set.values()) {

            num = 0
            obj = {}

            for (let i = 0; i < hotels_arr.length; i++) {
                if (item == hotels_arr[i].hotel.region.name) {
                    num++
                }
            }

            obj.name = item
            obj.num = num
            regions_arr.push(obj)
        }
        setRegions(regions_arr)
    }, [])


    useEffect(() => {

        /* Когда по клику на чекбокс меняется переменная checkBoxesResearch, то происходит перерисовка: */

        if (choosingFilters == true || (choosingFilters == false && isResearch == false)) return

        setChoosingFilters(true)

        showVariants() 

        setIsResearch(false)
        setChoosingFilters(false)
        setCheckBoxesResearch(false)
    }, [checkBoxesResearch])


    function startReDraw () {

        if (isResearch == true) return false

        setIsResearch(true)
        setCheckBoxesResearch(true)
    }

    function showVariants () {

        setNoDataText('')
        let res = applyFilters()  // Сбор данных со всех фильтров и применение их

        // Если после фильтров не осталось вариантов для отображения
        if (res.length == 0) {
            setNoDataText('Не удалось ничего найти. Попробуйте изменить условия поиска')
        }

        setLoadedItems(res)
    }

    function applyFilters() {

        let arr = JSON.parse(localStorage.getItem('hotels')),
            regions = []

        // Выбранные регионы, заполнить массив

        for (let i = 0; i < document.querySelectorAll('.regions-checkbox').length; i++) {
            document.querySelectorAll('.regions-checkbox')[i].checked ? 
            regions.push(document.querySelectorAll('.regions-checkbox')[i].getAttribute('data-text')) : ''
        }

        // Проверка на все фильтры

        // Регион

        arr = arr.filter(n => {
            return regions.includes(n.hotel.region.name)
        })

        return arr
    }

    // Функция для определения количества ночей для дат в формате гг-мм.дд

    if (noData == 1) {
        return (
            <div className= {styles["no-data-wrapper"]}>
                {noDataText}
            </div>
        )  
    }

    return (
        <>
        <Head>
            <title>Избранное</title>
        </Head>
            <section className = {styles["search-result-title"]}>
                Избранные отели{`: ` + loadedItems.length}
            </section>
            <section className = {styles["search-result-w"]}>
                <div className = {styles["search-result-left"]}>
                    <div className = {styles["search-result-left-w"]}>
                        <h3 className="aside-block-title">
                            Направление (регион)
                        </h3>
                        <div className="aside-fiters-w">
                            <div className={styles["checkbox-items-block"]}>
                                <form>
                                    {regions.map((item, index) => {
                                        return (
                                            <div className = {styles["aside-checkbox"]} key = {index}>
                                                <input type="checkbox"
                                                        name = {`f-checkbox-${index}`}
                                                        id={`checkbox-${index}`}
                                                        className = "stylized regions-checkbox"
                                                        onChange={startReDraw}
                                                        data-text = {item.name}
                                                        defaultChecked={checked}
                                                    />
                                                <label className = {styles["aside-stars-label"]} htmlFor={`checkbox-${index}`}>{item.name} ({item.num})</label>
                                            </div>
                                        )
                                    })}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {`${styles["search-result-right"]} search-result-right`}>
                {isResearch ? <div className="waiting-fon"></div>: ''}
                    {
                        loadedItems.length ? (
                            loadedItems.map((item, index) => {
                            return (
                                <Favorites_hotel_item
                                    key = {index}
                                    hotel = {item.hotel}
                                    rates = {item.rates}
                                    nights = {1}
                                />
                            )
                        })) : 'Не удалось ничего найти. Попробуйте изменить условия поиска'
                    }
                </div>
            </section>
        </>
    )
}