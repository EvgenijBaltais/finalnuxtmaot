import { useState, useRef, useEffect } from 'react'
import AsideDatepicker from './AsideDatepicker'

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

export default function Aside_search_form_datein(props) {

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
        if (event.target.classList.contains('aside-form-way-input-in')) {
            setDateOutOpened(0)
            setDateInOpened(1)
            return false
        }

        setDateOutOpened(1)
        setDateInOpened(0) 
    }


    
    useEffect(() => {

        if (!document.querySelector('.search-result-left')) return

        dateInOpened || dateOutOpened ? document.querySelector('.search-result-left').style.maxWidth = '700px' :
                        document.querySelector('.search-result-left').removeAttribute('style')

    }, [dateInOpened])

    useEffect(() => {

        if (!document.querySelector('.search-result-left')) return

        dateInOpened || dateOutOpened ? document.querySelector('.search-result-left').style.maxWidth = '700px' :
                        document.querySelector('.search-result-left').removeAttribute('style')

    }, [dateOutOpened])


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

    // ???????? ???? ???????????? ??????

    const wrapperRef = useRef(null)
    useOutsideAlerterIn(wrapperRef, setDateInOpened, setDateOutOpened)
    // ???????? ???? ???????????? ??????, ??????????

    return (
        <div className = "aside-search-dates" ref={wrapperRef}>
            <div className = "aside-direction-form-block aside-direction-form-in" >
                <input type="text" 
                        readOnly = "readonly"
                        className = {`aside-form-way-input aside-form-way-input-period aside-form-way-input-in${
                            dateInOpened == 1 ? ' aside-direction-form-in-active' : ''
                        }`}
                        value = {props.dateIn}
                        onClick = { checkOpenClose }
                />
                {dateInOpened ? <AsideDatepicker closeFuncdateIn = {closeDateIn} mindate = {props.dateIn} dateIn = {props.dateIn} /> : ""}
            </div>
            <div className = "aside-direction-form-block aside-direction-form-out" >
                <input type="text"
                        readOnly = "readonly" 
                        className = {`aside-form-way-input aside-form-way-input-period aside-form-way-input-out${
                            dateOutOpened == 1 ? ' aside-direction-form-in-active' : ''
                        }`}
                        value = {props.dateOut}
                        onClick = { checkOpenClose }
                />
                {dateOutOpened ? <AsideDatepicker closeFuncdateOut = {closeDateOut} mindate = {props.dateOut} dateIn = {props.dateIn} /> : ""}
            </div>
        </div>
    )
}