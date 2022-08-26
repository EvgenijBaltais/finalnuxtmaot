import { useState, useRef, useEffect } from 'react'

//import ReactDatePicker, { registerLocale } from 'react-datepicker';

import Datepicker from './Datepicker';

/*
function useOutsideAlerter(ref, func) {
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                func(0)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref])
}
*/
export default function Search_form_datein() {


    const [datepickerVisibility, setDatepickerVisibility] = useState(0)
    const [visibleDateIn, setVisibleDateIn] = useState(0)
    const [visibleDateInValue, setVisibleDateInValue] = useState('Заезд')

    // Клик по ссылке вне

    //const wrapperRef = useRef(null)
    //useOutsideAlerter(wrapperRef, setVisibleDateIn)

    // Клик по ссылке вне, конец

    return (
        <>

        <button type = "button" onClick = {() => setTest(test => !test)}>Button</button>

        {datepickerVisibility ? <Datepicker /> : ""}


        <div className = "direction-form-block direction-form-in">

            <input type="text" 
                    readOnly = "readonly"
                    className = "form-way-input form-way-input-period"
                    placeholder = {visibleDateInValue}
                    onClick = { () => setDatepickerVisibility(datepickerVisibility => !datepickerVisibility) }
            />
        </div>

        <div className = "direction-form-block direction-form-out">

            <input type="text"
                    readOnly = "readonly" 
                    className = "form-way-input"
                    placeholder = {visibleDateInValue}
                    onClick = { () => setDatepickerVisibility(datepickerVisibility => !datepickerVisibility) }
            />
        </div>

        {/*
            <div className = "direction-form-block direction-form-in">
                <ReactDatePicker
                locale="ru"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd-MM-yyyy"
                    name="choose-in"
                    monthsShown={1}
                    className = "form-way-input form-way-input-period"
                    onCalendarOpen={ () => event.target.classList.add('direction-form-in-active') }
                    onCalendarClose={ () => event.target.classList.remove('direction-form-in-active') }
                    onFocus={e => e.target.blur()}
                    calendarStartDay={1}
                    minDate={today}
                >
                    <div className="datepicker-month-list">
                        {monthsRU.map((item, index) => {
                            return(
                                <div key = {index} className = "datepicker-month-list__item">{item}</div>
                            )
                        })}
                    </div>
                </ReactDatePicker>
            </div>
            <div className = "direction-form-block direction-form-out">
                <ReactDatePicker
                locale="ru"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd-MM-yyyy"
                    name="choose-out"
                    monthsShown={1}
                    className = "form-way-input"
                    onCalendarOpen={ () => event.target.classList.add('direction-form-in-active') }
                    onCalendarClose={ () => event.target.classList.remove('direction-form-in-active') }
                    onFocus={e => e.target.blur()}
                    calendarStartDay={1}
                    minDate={tomorrow}
                />
                    </div>*/}
</>
    )
}