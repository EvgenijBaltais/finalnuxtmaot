import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Search_hotel_input from './hoteldetail_form_components/Search_hotel_input'
import Search_form_datein from './hoteldetail_form_components/Search_form_datein'
import Search_form_guests from './hoteldetail_form_components/Search_form_guests'

const Hoteldetail_form = ({hotel_name, setRoomBlocks, setBronPageLink, hotel_id}) => {

    hotel_id == 'golden_tulip_roza_khutor' ? hotel_id += '_' : ''
    const [searchResult, setSearchResult] = useState({id: hotel_id, hotel_name: hotel_name, hotel: true})
    const [dateIn, setDateIn] = useState('')
    const [dateOut, setDateOut] = useState('')
    const [adults, setAdults] = useState(2)
    const [childrenAges, setChildrenAges] = useState([])
    const { query } = useRouter()

    const [isMobile, setIsMobile] = useState(0)
    const [isTablet, setIsTablet] = useState(0)
    const [isDesktop, setIsDesktop] = useState(0)

    useEffect(() => {
        setIsMobile(window.screen.width <= 480)
        setIsTablet(window.screen.width >= 480 && window.screen.width <= 860)
        setIsDesktop(window.screen.width > 860)

        window.addEventListener('resize', () => {
            setIsMobile(window.screen.width <= 480)
            setIsTablet(window.screen.width >= 480 && window.screen.width <= 860)
            setIsDesktop(window.screen.width > 860)
        })
    }, [])

    useEffect(() => {

        setDateIn(query.datein)
        setDateOut(query.dateout)
        setAdults(query.adults)
        // Если одно значение, то приходит не массив, а число. Поэтому создаем массив

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
    
    function checkForm (event) {

        // Запрос доступных номеров

        let datein = dateIn.slice(6, 10) + '-' + dateIn.slice(3, 5) + '-' + dateIn.slice(0, 2)
        let dateout = dateOut.slice(6, 10) + '-' + dateOut.slice(3, 5) + '-' + dateOut.slice(0, 2)
        let link = 'https://maot-api.bokn.ru/api/hotels/search?'
        let bronPageLink = ''

        link += 'start_date=' + datein
        bronPageLink +=  'start_date=' + datein
        link += '&end_date=' + dateout
        bronPageLink += '&end_date=' + dateout
        link += '&adults=' + adults
        bronPageLink += '&adults=' + adults
        
        if (childrenAges.length > 0) {
            for (let i = 0; i < childrenAges.length; i++) {
                link += `&childs[${i}]=` + childrenAges[i]
                bronPageLink += '&children_ages=' + childrenAges[i]
            }
        }

        link += '&id=' + searchResult.id
        bronPageLink += '&id=' + searchResult.id

        setRoomBlocks(0)
        setBronPageLink(bronPageLink)

        fetch(link)
        .then((result) => result.json())
        .then((result) => {
            console.log(link)
            result.data.error == 1 || result.data.length == 0 ? setRoomBlocks([]) : setRoomBlocks(result.data[0].rates)
        })
    }

    function openMobileNav () {

        event.target.parentElement.classList.contains('opened') ?
        event.target.parentElement.classList.remove('opened') :
        event.target.parentElement.classList.add('opened')
    }

    function scrollToSection () {

        event.preventDefault()

        event.target.parentElement.parentElement.parentElement.classList.remove('opened')
        
        document.getElementById(event.target.getAttribute('href').slice(1)).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    function closeMenuByClick () {

        if (!event.target.classList.contains('hoteldetail-navigation-menu__item')) {
            event.target.parentElement.parentElement.classList.remove('opened')
        }
    }

    function mobileNavToggle () {

        event.target.parentElement.classList.contains('opened') ?
        event.target.parentElement.classList.remove('opened') :
        event.target.parentElement.classList.add('opened')
    }

    return (
        <section className = "hoteldetail-form">
            <div className = "selection-form-item">
                <form action="" name = "hoteldetail-direction-form" className = "selection-form hoteldetail-direction-form" id = "hoteldetail-direction-form">
                    <div className = "hoteldetail-direction-form-w">
                        <div className = "hoteldetail-direction-form__inside">
                            <Search_hotel_input
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
                        {!isDesktop ?
                            <div className = "hoteldetail-navigation-top">
                                <div className = "hoteldetail-navigation-info">Навигация по странице</div>
                                <div className="hoteldetail-navigation-pic" onClick = {mobileNavToggle}></div>
                                <div className="hoteldetail-navigation-inside" onClick = {openMobileNav}></div>
                                <div className="hoteldetail-navigation-menu">
                                    <div className="hoteldetail-navigation-menu__w" onClick = {closeMenuByClick}>
                                        <a className="hoteldetail-navigation-menu__item active"
                                            href="#all-rooms"
                                            onClick={scrollToSection}
                                            data-value = "1">Поиск номеров</a>
                                    </div>

                                    <div className="hoteldetail-navigation-menu__w">
                                        <a className="hoteldetail-navigation-menu__item"
                                            href="#rooms-info"
                                            onClick={scrollToSection}
                                            data-value = "2" >Об отеле</a>
                                    </div>

                                    <div className="hoteldetail-navigation-menu__w">
                                        <a
                                            className="hoteldetail-navigation-menu__item"
                                            href="#hotel-service"
                                            onClick={scrollToSection}
                                            data-value = "3">Услуги</a>
                                    </div>

                                    <div className="hoteldetail-navigation-menu__w">
                                        <a className="hoteldetail-navigation-menu__item"
                                            href="#contacts"
                                            onClick={scrollToSection}
                                            data-value = "4">Контакты</a>
                                    </div>
                                </div>
                            </div>
                        :''}
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