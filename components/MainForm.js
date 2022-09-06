import { React, useState } from 'react'
import { useRouter } from 'next/router'

import Search_hotel_input from './search_form_components/Search_hotel_input'
import Search_form_datein from './search_form_components/Search_form_datein'
import Search_form_guests from './search_form_components/Search_form_guests'

const MainForm = (props) => {

    const [searchResult, setSearchResult] = useState({id: '', name: '', hotel: false, region: false})
    const [dateIn, setDateIn] = useState(setToday())
    const [dateOut, setDateOut] = useState(setTomorrow())
    const [guests, setGuests] = useState('')
    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)
    const [childrenAges, setChildrenAges] = useState([])

    const router = useRouter()
    
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

    const searchByClick = (event) => {
        event.preventDefault()

        let obj = {
            name: event.target.innerText,
            hotel: event.target.getAttribute('data-info') == 'hotel',
            region: event.target.getAttribute('data-info') == 'region'
        }

        changeSearchResult(obj)

        event.target.parentElement.parentElement.querySelector('.form-way-input').value = event.target.innerText
    }

    function checkForm () {

        let ages = []
        for (let i = 0; i < childrenAges.length; i++) {
            ages.push(parseInt(childrenAges[i]))
        }

        let obj = {
            datein: dateIn,
            dateout: dateOut,
            adults: adults,
            children_ages: ages
        }

        console.log(searchResult)

        searchResult.hotel ? obj.hotel_id = searchResult.hotel : ''
        searchResult.region ? obj.region_id = searchResult.region : ''
        searchResult.hotel_name ? obj.hotel_name = searchResult.hotel_name : ''
        searchResult.region_name ? obj.region_name = searchResult.region_name : ''

        router.push({
            pathname: '/hotels',
            query: obj
        })
    }

    return (
        <section className = "main-form">
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
                            <Search_form_guests
                                adults = {adults}
                                childrenAges = {childrenAges}
                                changeAdults = {changeAdults}
                                changeChildrenAges = {changeChildrenAges}
                            />
                            <div className = "direction-form-block direction-form-submit">
                                <button type = "button" className = "direction-form-btn" onClick = {checkForm}>Найти</button>
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
        </section>
    )
}

export default MainForm 