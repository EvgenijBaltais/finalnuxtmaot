import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Search_hotel_input from './hoteldetail_form_components/Search_hotel_input'
import Search_form_datein from './hoteldetail_form_components/Search_form_datein'
import Search_form_guests from './hoteldetail_form_components/Search_form_guests'

const Hoteldetail_form = ({popularHotels, popularWays, hotelName}) => {

    const [searchResult, setSearchResult] = useState({id: '', name: '', hotel: false, region: false})
    const [dateIn, setDateIn] = useState(setToday())
    const [dateOut, setDateOut] = useState(setTomorrow())
    const [adults, setAdults] = useState(2)
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

        let ages = []
        let obj = {}
        let link = ''
        for (let i = 0; i < childrenAges.length; i++) {
            ages.push(parseInt(childrenAges[i]))
        }

        obj.datein = dateIn
        obj.dateout = dateOut
        obj.adults = adults
        obj.children_ages = ages


        searchResult.region ? obj.region_id = searchResult.region : ''
        searchResult.region_name ? obj.region_name = searchResult.region_name : ''
        searchResult.hotel ? obj.hotel_id = searchResult.hotel : ''

        searchResult.hotel ? link = '/hoteldetail' : '' // Если отель то на страницу отеля, если регион то на страницу подбора
        searchResult.region ? link = '/hotels' : ''

        // Если не введены данные по направлению
        if (document.querySelector('.hoteldetail-form-way-input').value == '') {
            obj.region_id = '965825039'
            obj.region_name = 'Подмосковье'
            link = '/hotels'
        }
    }

    return (
        <section className = "hoteldetail-form">
            <div className = "selection-form-item">
                <form action="" name = "hoteldetail-direction-form" className = "selection-form hoteldetail-direction-form" id = "hoteldetail-direction-form">
                    <div className = "hoteldetail-direction-form-w">
                        <div className = "hoteldetail-direction-form__inside">
                            <Search_hotel_input
                                popularHotels = {popularHotels}
                                popularWays = {popularWays}
                                searchResult = {searchResult}
                                changeSearchResult = {changeSearchResult}
                                name = {hotelName}
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
                        </div>
                        <div className = "hoteldetail-direction-form-block hoteldetail-direction-form-submit">
                            <button type = "button" className = "hoteldetail-direction-form-btn" onClick = {checkForm}>Найти</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Hoteldetail_form