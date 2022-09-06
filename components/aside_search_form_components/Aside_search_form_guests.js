import { useState, useRef, useEffect } from 'react'
import Aside_search_guests from './Aside_search_guests'

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

export default function Aside_search_form_guests(props) {

    const [visibleGuests, setVisibleGuests] = useState(0)

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

        val ? document.querySelector('.aside-form-guests-input-out').classList.add('aside-direction-form-in-active') :
        document.querySelector('.aside-form-guests-input-out').classList.remove('aside-direction-form-in-active')

        setVisibleGuests(val)
    }

    // Клик по ссылке вне

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef, makeActive)

    // Клик по ссылке вне, конец

    return (
        <div className = "aside-direction-form-block aside-direction-form-people" ref={wrapperRef}>

            <input
                type="text"
                name="aside-choose-people"
                className = {`aside-form-way-input aside-form-guests-input aside-form-guests-input-out${visibleGuests ? ' aside-direction-form-in-active' : ''}`}
                defaultValue={returnGuests(+props.adults + +props.childrenAges.length)}
                readOnly = "readonly"
                onClick={ () => setVisibleGuests(visibleGuests => !visibleGuests)}
            />
            { visibleGuests ? <Aside_search_guests 
                                    adults = {props.adults}
                                    childrenAges = {props.childrenAges}
                                    changeAdults = {props.changeAdults}
                                    changeChildrenAges = {props.changeChildrenAges}
                                /> : '' }
        </div>
    )
}