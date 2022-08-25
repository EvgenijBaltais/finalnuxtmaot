import { useState, useRef, useEffect } from 'react'

import ReactDatePicker, { registerLocale } from 'react-datepicker';

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


    // Клик по ссылке вне

    //const wrapperRef = useRef(null)
    //useOutsideAlerter(wrapperRef, setVisibleDateIn)

    // Клик по ссылке вне, конец

    let today = new Date()
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(tomorrow);

    const monthsRU = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const daysRU = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    
    registerLocale('ru', {
      localize: {
        month: n => monthsRU[n],
        day: n => daysRU[n]
      }, 
      formatLong:{
        date: () => 'mm/dd/yyyy'
      } 
    });

    return (
        <>
            <div className = "direction-form-block direction-form-in">
                <ReactDatePicker
                locale="ru"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd-MM-yyyy"
                    name="choose-in"
                    monthsShown={2}
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
                    monthsShown={2}
                    className = "form-way-input"
                    onCalendarOpen={ () => event.target.classList.add('direction-form-in-active') }
                    onCalendarClose={ () => event.target.classList.remove('direction-form-in-active') }
                    onFocus={e => e.target.blur()}
                    calendarStartDay={1}
                    minDate={tomorrow}
                />
            </div>
        </>
    )
}