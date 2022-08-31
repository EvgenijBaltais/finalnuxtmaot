import { useState, useRef, useEffect } from 'react'
import Search_guests from './Search_guests'

function useOutsideAlerter(ref, func) {
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                func(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref])
}

export default function Search_form_guests() {

    const [visibleGuests, setVisibleGuests] = useState(0)
    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState([])

    const [guests, setGuests] = useState(2)

    function getGuests(value) {
        let g = returnGuests(value)
        setGuests(g)
    }

    function getAdults(value) {
        let g = value
        setAdults(g)
    }

    function getChildren(value) {
        let g = value
        setChildren(g)
    }

    function returnGuests (num) {

        let text = '',
            a = [1, 21],
            b = [2,3,4,22,23,24],
            c = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,26,27,28,29,30]

        a.forEach(element => {
            num == element ? text = ' гость' : ''
        })

        b.forEach(element => {
            num == element ? text = ' гостя' : ''
        })

        c.forEach(element => {
            num == element ? text = ' гостей' : ''
        })

        return num + text
    }

    // Обновление общего количества гостей

    function makeActive (val) {

        val ? document.querySelector('.form-guests-input-out').classList.add('direction-form-in-active') :
        document.querySelector('.form-guests-input-out').classList.remove('direction-form-in-active')

        setVisibleGuests(val)
    }

    useEffect(() => {
        getGuests(adults + children.length)
    }, [children, adults])


    // Клик по ссылке вне

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef, makeActive)

    // Клик по ссылке вне, конец

    return (
        <div className = "direction-form-block direction-form-people" ref={wrapperRef}>

            <input
                type="text"
                name="choose-people"
                className = "form-way-input form-guests-input form-guests-input-out"
                defaultValue={returnGuests(guests)}
                readOnly = "readonly"
                onClick={ () => makeActive(true) }
            />
            { visibleGuests ? <Search_guests adults = {adults} children = {children} getAdults = {getAdults} getChildren = {getChildren} getGuests = {getGuests} /> : '' }
        </div>
    )
}