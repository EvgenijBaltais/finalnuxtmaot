import { useEffect } from 'react'

import DayLink from './DayLink'

export default function Month (value) {

	let date = new Date(),
        monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

        date.setMonth(date.getMonth() + value.month)


    let dayNumber = date.getDate(),
	    month = date.getMonth(),
	    year = date.getFullYear(),
        monthDays = new Date(year, month + 1, 0).getDate(),
        days = [],
        monthPrefix = new Date(year, month, 0).getDay()


        if (monthPrefix > 0) {
            for (let i = 1 ; i <= monthPrefix; i++){
                days.push('')
            }
        }

        for (let i = 1; i <= monthDays; i++) {
            days.push(i)
        }

    return (

        <div id={`month-calendar-${value.month}`} className = "month-calendar">
            <a className="month-name">{monthName[month]}</a>
            <div className="days">
                {days.map((item, index) => {
                    return (
                        <DayLink
                            closeFuncdateIn = {value.closeFuncdateIn}
                            closeFuncdateOut = {value.closeFuncdateOut}
                            key = {index}
                            item = {item}
                            dayNumber = {dayNumber}
                            month = {month}
                            year = {year}
                            ></DayLink>
                    )
                })}
            </div>
        </div>
    )
    
}