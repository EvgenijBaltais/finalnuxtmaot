import { useState, useRef, useEffect } from 'react'
import Datepicker from './Datepicker';

export default function Search_form_datein() {

    let [dateIn, setDateIn] = useState(setToday()),
        [dateOut, setDateOut] = useState(setTomorrow()),
        [dateInOpened, setDateInOpened] = useState(0),
        [dateOutOpened, setDateOutOpened] = useState(0)

    function closeDateIn (value, date) {
        setDateInOpened(value)
        setDateIn(date)
    }

    function closeDateOut (value, date) {
        setDateOutOpened(value)
        setDateOut(date)
    }

    function setToday () {

        let today = new Date();
        today.setTime(today.getTime());

        return addNullToDate(today.getDate()) + "/" + addNullToDate((today.getMonth() + 1)) + "/" + today.getFullYear()
    }

    function setTomorrow () {
        var tomorrow = new Date()
            tomorrow.setTime(tomorrow.getTime() + 24 * 60 * 60 * 1000)

            return addNullToDate(tomorrow.getDate()) + "/" + addNullToDate((tomorrow.getMonth() + 1)) + "/" + tomorrow.getFullYear()
    }

    function addNullToDate(num) {
        return num < 10 ? '0' + num : num
    }


    return (
        <>
            <div className = "direction-form-block direction-form-in">

                <input type="text" 
                        readOnly = "readonly"
                        className = "form-way-input form-way-input-period form-way-input-in"
                        value = {dateIn}
                        onClick = { () => setDateInOpened(dateInOpened => !dateInOpened) }
                />

                {dateInOpened ? <Datepicker closeFuncdateIn = {closeDateIn} /> : ""}
            </div>

            <div className = "direction-form-block direction-form-out">

                <input type="text"
                        readOnly = "readonly" 
                        className = "form-way-input form-way-input-period form-way-input-out"
                        value = {dateOut}
                        onClick = { () => setDateOutOpened(dateOutOpened => !dateOutOpened) }
                />
                {dateOutOpened ? <Datepicker closeFuncdateOut = {closeDateOut} /> : ""}
            </div>
        </>
    )
}