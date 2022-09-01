import Link from 'next/link'

import { React, useState } from 'react'

import Search_hotel_input from './search_form_components/Search_hotel_input'
import Search_form_datein from './search_form_components/Search_form_datein'
import Search_form_guests from './search_form_components/Search_form_guests'

const MainForm = (props) => {

    const [searchResult, setSearchResult] = useState({name: '', hotel: false, region: false})
    const [dateIn, setDateIn] = useState(setToday())
    const [dateOut, setDateOut] = useState(setTomorrow())
    const [guests, setGuests] = useState('')
    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)
    const [childrenAges, setChildrenAges] = useState([])
    
    const changeSearchResult = (value) => {
        setSearchResult(value)
    }
    const changeDateIn = (value) => {
        setDateIn(value)
    }
    const changeDateOut = (value) => {
        setDateOut(value)
    }
    const changeGuests = (value) => {
        setGuests(value)
    }
    const changeAdults = (value) => {
        setAdults(value)
    }
    const changeChildren = (value) => {
        setChildren(value)
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

    const searchByClick = (event) => {
        event.preventDefault()

        let obj = {
            name: event.target.innerText,
            hotel: event.target.getAttribute('data-info') == 'hotel',
            region: event.target.getAttribute('data-info') == 'region'
        }
    
        changeSearchResult(obj)
    } 

    return (
        <section className = "main-form">
            <div className = "selection-forms">
                <div className = "selection-form-item">
                    <form action="" name = "direction-form" className = "selection-form direction-form" id = "direction-form">
                        <div className = "direction-form-w">
                            <div className = "direction-form__inside">
                                <Search_hotel_input
                                    popularHotels = {props.popularHotels}
                                    popularWays = {props.popularWays}
                                    searchResult = {searchResult}
                                    changeSearchResult = {changeSearchResult}
                                />
                                <Search_form_datein 
                                    dateIn = {dateIn}
                                    dateOut = {dateOut}
                                    changeDateIn = {changeDateIn}
                                    changeDateOut = {changeDateOut}
                                />
                                <Search_form_guests />
                                <div className = "direction-form-block direction-form-submit">

                                {/*<Link href = {{pathname: "/hotels", query: { datein: '12-10-1888', dateout: '18-22-2999', hotel: "Солнечный" }}}>Вперед</Link>*/}

                                    <Link href = "/hotels">
                                        <button type = "button" className = "direction-form-btn">Найти</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className = "direction-ways">
                            <a className = "direction-way" onClick = {searchByClick} data-info = "region">Подмосковье</a>
                            <a className = "direction-way" onClick = {searchByClick} data-info = "region">Сочи</a>
                            <a className = "direction-way" onClick = {searchByClick} data-info = "region">Крым</a>
                            <a className = "direction-way" onClick = {searchByClick} data-info = "region">Абхазия</a>
                            <span className = "direction-way dont-know-way">
                                <a>Я не знаю, куда хочу поехать</a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default MainForm 