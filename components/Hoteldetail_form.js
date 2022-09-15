import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Search_hotel_input from './hoteldetail_form_components/Search_hotel_input'
import Search_form_datein from './hoteldetail_form_components/Search_form_datein'
import Search_form_guests from './hoteldetail_form_components/Search_form_guests'

const Hoteldetail_form = ({popularHotels, hotel_name, setRoomsData, hotel_id}) => {

    const [searchResult, setSearchResult] = useState({id: hotel_id, hotel_name: hotel_name, hotel: true})
    const [dateIn, setDateIn] = useState('')
    const [dateOut, setDateOut] = useState('')
    const [adults, setAdults] = useState(2)
    const [childrenAges, setChildrenAges] = useState([])
    const { query } = useRouter()

    useEffect(() => {

        setDateIn(query.datein)
        setDateOut(query.dateout)
        setAdults(query.adults)
        setChildrenAges(query.children_ages || [])
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

    function checkForm (event) {

        // Запрос доступных номеров

        let datein = dateIn.slice(6, 10) + '-' + dateIn.slice(3, 5) + '-' + dateIn.slice(0, 2)
        let dateout = dateOut.slice(6, 10) + '-' + dateOut.slice(3, 5) + '-' + dateOut.slice(0, 2)
        let link = 'https://maot-api.bokn.ru/api/hotels/search-rooms?'

        link += 'start_date=' + datein
        link += '&end_date=' + dateout
        link += '&adults=' + adults
        
        if (childrenAges.length > 0) {
            for (let i = 0; i < childrenAges.length; i++) {
                link += `&childs[${i}]=` + childrenAges[i]
            }
        }

        link += '&id=' + searchResult.id

        fetch(link)
        .then((result) => result.json())
        .then((result) => {
            console.log(link)
            setRoomsData(result.data)
        })
    }

    return (
        <section className = "hoteldetail-form">
            <div className = "selection-form-item">
                <form action="" name = "hoteldetail-direction-form" className = "selection-form hoteldetail-direction-form" id = "hoteldetail-direction-form">
                    <div className = "hoteldetail-direction-form-w">
                        <div className = "hoteldetail-direction-form__inside">
                            <Search_hotel_input
                                popularHotels = {popularHotels}
                                searchResult = {searchResult}
                                changeSearchResult = {changeSearchResult}
                                name = {hotel_name}
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
                            <button type = "button" className = "hoteldetail-direction-form-btn" onClick = {event => checkForm(event)}>Найти</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Hoteldetail_form