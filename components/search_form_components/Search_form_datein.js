import { useState, useRef, useEffect } from 'react'
import Datepicker from './Datepicker';

function useOutsideAlerterIn(ref, func1, func2) {
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                func1(0)
                func2(0)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref])
}


export default function Search_form_datein() {

    let [dateIn, setDateIn] = useState(setToday()),
        [dateOut, setDateOut] = useState(setTomorrow()),
        [dateInOpened, setDateInOpened] = useState(0),
        [dateOutOpened, setDateOutOpened] = useState(0)

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

    function closeDateIn (value, date) {
        setDateInOpened(value)
        setDateIn(date)
    }

    function closeDateOut (value, date) {
        setDateOutOpened(value)
        setDateOut(date)
    }

    function checkOpenClose (event) {
        if (event.target.classList.contains('form-way-input-in')) {
            setDateOutOpened(0)
            setDateInOpened(1)
            return false
        }

        setDateOutOpened(1)
        setDateInOpened(0) 
    }

    function addNullToDate(num) {
        return num < 10 ? '0' + num : num
    }

    // Клик по ссылке вне

    const wrapperRef = useRef(null)
    useOutsideAlerterIn(wrapperRef, setDateInOpened, setDateOutOpened)
    // Клик по ссылке вне, конец

    return (
        <div className = "search-dates" ref={wrapperRef}>

            <div className = "direction-form-block direction-form-in" >

                <input type="text" 
                        readOnly = "readonly"
                        className = {`form-way-input form-way-input-period form-way-input-in${
                            dateInOpened == 1 ? ' direction-form-in-active' : ''
                        }`}
                        value = {dateIn}
                        onClick = { checkOpenClose }
                />
                {dateInOpened ? <Datepicker closeFuncdateIn = {closeDateIn} /> : ""}
            </div>

            <div className = "direction-form-block direction-form-out" >
                <input type="text"
                        readOnly = "readonly" 
                        className = {`form-way-input form-way-input-period form-way-input-out${
                            dateOutOpened == 1 ? ' direction-form-in-active' : ''
                        }`}
                        value = {dateOut}
                        onClick = { checkOpenClose }
                />
                {dateOutOpened ? <Datepicker closeFuncdateOut = {closeDateOut} /> : ""}
            </div>
        </div>
    )
}