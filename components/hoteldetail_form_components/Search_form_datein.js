import { useState, useRef, useEffect } from 'react'
import Datepicker from './Datepicker'

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

export default function Search_form_datein(props) {

    let [dateInOpened, setDateInOpened] = useState(0),
        [dateOutOpened, setDateOutOpened] = useState(0)


    function closeDateIn (value, date) {
        setDateInOpened(value)
        setDateOutOpened(1)
        props.changeDateIn(date)
        props.changeDateOut(nextDay(date))
    }

    function closeDateOut (value, date) {
        setDateOutOpened(value)
        props.changeDateOut(date)
    }

    function checkOpenClose (event) {
        if (event.target.classList.contains('hoteldetail-form-way-input-in')) {
            setDateOutOpened(0)
            setDateInOpened(1)
            return false
        }

        setDateOutOpened(1)
        setDateInOpened(0) 
    }

    function nextDay (str) {
        const [day, month, year] = str.split('.')
        const date = new Date(year, parseInt(month) - 1, day)
        const next = new Date(date)
        next.setDate(date.getDate() + 1)

        return addNullToDate(next.getDate()) + "." + addNullToDate(next.getMonth() + 1) + "." + next.getFullYear()
    }

    function addNullToDate(num) {
        return num < 10 ? '0' + num : num
    }

    // Клик по ссылке вне

    const wrapperRef = useRef(null)
    useOutsideAlerterIn(wrapperRef, setDateInOpened, setDateOutOpened)
    // Клик по ссылке вне, конец

    return (
        <div className = "hoteldetail-search-dates" ref={wrapperRef}>
            <div className = "hoteldetail-direction-form-block hoteldetail-direction-form-in" >
                <input type="text" 
                        readOnly = "readonly"
                        className = {`hoteldetail-form-way-input hoteldetail-form-way-input-period hoteldetail-form-way-input-in${
                            dateInOpened == 1 ? ' hoteldetail-direction-form-in-active' : ''
                        }`}
                        value = {props.dateIn}
                        onClick = { checkOpenClose }
                />
                {dateInOpened ? <Datepicker closeFuncdateIn = {closeDateIn} mindate = {props.dateIn} dateIn = {props.dateIn} /> : ""}
            </div>
            <div className = "hoteldetail-direction-form-block hoteldetail-direction-form-out" >
                <input type="text"
                        readOnly = "readonly" 
                        className = {`hoteldetail-form-way-input hoteldetail-form-way-input-period hoteldetail-form-way-input-out${
                            dateOutOpened == 1 ? ' hoteldetail-direction-form-in-active' : ''
                        }`}
                        value = {props.dateOut}
                        onClick = { checkOpenClose }
                />
                {dateOutOpened ? <Datepicker closeFuncdateOut = {closeDateOut} mindate = {props.dateOut} dateIn = {props.dateIn} /> : ""}
            </div>
        </div>
    )
}