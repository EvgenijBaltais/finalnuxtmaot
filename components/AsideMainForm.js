import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Aside_search_hotel_input from './aside_search_form_components/Aside_search_hotel_input'
import Aside_search_form_datein from './aside_search_form_components/Aside_search_form_datein'
import Aside_search_form_guests from './aside_search_form_components/Aside_search_form_guests'

const AsideMainForm = ({popularHotels, popularWays, setNodataText, setLoadedItems, setFilteredItems, setIsResearch}) => {

    const router = useRouter()
    const { query } = useRouter()
    const [searchResult, setSearchResult] = useState({id: '', name: '', hotel: false, region: false})
    const [dateIn, setDateIn] = useState(query.datein || setToday())
    const [dateOut, setDateOut] = useState(query.dateout || setTomorrow())
    const [adults, setAdults] = useState(query.adults || 2)
    const [childrenAges, setChildrenAges] = useState(query.children_ages || [])


    // Обновить данные по мере загрузки Router
    useEffect(() => {

        if (!router.isReady) return

        setDateIn(query.datein || setToday())
        setDateOut(query.dateout || setTomorrow())
        setAdults(query.adults || 2)
        Number.isInteger(+query.children_ages) ? setChildrenAges([query.children_ages]) : setChildrenAges(query.children_ages || [])
    }, [query])


    const changeSearchResult = (value) => {
        setSearchResult(value)
    }
    const changeDateIn = (value) => {
        setDateIn(value)
    }
    const changeDateOut = (value) => {
        setDateOut(value)
    }
    const changeAdults = (value) => {
        setAdults(value)
    }
    const changeChildrenAges = (value) => {
        setChildrenAges(value)
    }

    function setToday () {

        let today = new Date();
            today.setTime(today.getTime());

        return addNullToDate(today.getDate()) + "." + addNullToDate((today.getMonth() + 1)) + "." + today.getFullYear()
    }

    function setTomorrow () {
        var tomorrow = new Date()
            tomorrow.setTime(tomorrow.getTime() + 24 * 60 * 60 * 1000)

            return addNullToDate(tomorrow.getDate()) + "." + addNullToDate((tomorrow.getMonth() + 1)) + "." + tomorrow.getFullYear()
    }

    function addNullToDate(num) {
        return num < 10 ? '0' + num : num
    }


    function checkForm () {

        // Обнулить фильтры

        setIsResearch(false)
        setFilteredItems([])

        setNodataText('Загрузка подходящих вариантов...')

        let ages = []
        for (let i = 0; i < childrenAges.length; i++) {
            ages.push(parseInt(childrenAges[i]))
        }
        
        let obj = {
            datein: dateIn,
            dateout: dateOut,
            adults: adults,
            children_ages: ages,
            region_id: query.region_id,
            region_name: query.region_name
        }

        searchResult.region ? obj.region_id = searchResult.region : ''
        searchResult.region_name ? obj.region_name = searchResult.region_name : ''

        setLoadedItems([])

        //console.log(obj)

        router.push({
            pathname: '/hotels',
            query: obj
        })

    }

    return (
        <section className = "aside-main-form">
            <form action="" name = "aside-direction-form" className = "aside-selection-form aside-direction-form" id = "aside-direction-form">
                <div className = "aside-direction-form__inside">
                    <Aside_search_hotel_input
                        popularHotels = {popularHotels}
                        popularWays = {popularWays}
                        searchResult = {searchResult}
                        changeSearchResult = {changeSearchResult}
                    />
                    <Aside_search_form_datein 
                        dateIn = {dateIn}
                        dateOut = {dateOut}
                        changeDateIn = {changeDateIn}
                        changeDateOut = {changeDateOut}
                    />
                    <Aside_search_form_guests
                        adults = {adults}
                        childrenAges = {childrenAges}
                        changeAdults = {changeAdults}
                        changeChildrenAges = {changeChildrenAges}
                    />
                    <div className = "aside-direction-form-block aside-direction-form-submit">
                        <button type = "button" className = "aside-direction-form-btn" onClick = {checkForm}>Найти</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default AsideMainForm