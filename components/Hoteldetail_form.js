import { React, useState } from 'react'
import { useRouter } from 'next/router'

import Search_hotel_input from './hoteldetail_form_components/Search_hotel_input'
import Search_form_datein from './hoteldetail_form_components/Search_form_datein'
import Search_form_guests from './hoteldetail_form_components/Search_form_guests'

const Hoteldetail_form = (props) => {

    const [searchResult, setSearchResult] = useState({id: '', name: '', hotel: false, region: false})
    const [dateIn, setDateIn] = useState(setToday())
    const [dateOut, setDateOut] = useState(setTomorrow())
    const [adults, setAdults] = useState(2)
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
        if (document.querySelector('.form-way-input').value == '') {
            obj.region_id = '965825039'
            obj.region_name = 'Подмосковье'
            link = '/hotels'
        }

        router.push({
            pathname: link,
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
                </form>
            </div>
        </section>
    )
}

export default Hoteldetail_form