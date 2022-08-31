import { useEffect } from 'react'

import DayLink from './DayLink'

export default function Month (value) {


    let date = new Date(),
        dayNumber = date.getDate(),
	    month = date.getMonth() + value.monthId,
	    year = date.getFullYear(),
        days = [],
        prefixDays = []

        let getMonthDays = (index) => {
                
            let lastDay = new Date(year, month + 1, 0).getDate()

                for (let i = 1; i <= lastDay; i++) {
                    days.push(i)
                }

            return days
        }

        let getprefixDays = (index) => {

            let lastmonthLastday = new Date(year, month, 0).getDate(),  // Последний день предыдущего месяца
                monthPrefix = new Date(year, month, 0).getDay()        // Номер дня недели, с которого начинается этот месяц

                for (let i = 0; i < monthPrefix; i++) {
                    let u = lastmonthLastday - monthPrefix + (i + 1)
                    prefixDays.push(u)
                }
            return prefixDays
        }

        prefixDays = getprefixDays(value.monthId)
        days = getMonthDays(value.monthId)

    return (

        <div id={`month-calendar-${value.monthId}`} className = "month-calendar">
            <a className="month-name">{value.monthName}</a>
            <div className="days">
                {prefixDays.map((item, index) => {
                    return (
                        <DayLink
                            prefix = {1}
                            key = {index}
                            item = {item}
                        />
                    )
                })}
                {days.map((item, index) => {
                    return (
                        <DayLink
                            closeFuncdateIn = {value.closeFuncdateIn}
                            closeFuncdateOut = {value.closeFuncdateOut}
                            key = {index}
                            item = {item}
                            month = {month}
                            year = {year}
                        />
                    )
                })}
            </div>
        </div>
    )
    
}