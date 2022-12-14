import Month from "./Month"
import MonthAsideLink from "./MonthAsideLink"
import { useEffect } from "react"
import smoothscroll from 'smoothscroll-polyfill'

export default function Datepicker (value) {

    let monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        date = new Date(),
        month = date.getMonth()

        // Массив с названием следующих 12 месяцев
        let monthArray = getNextMonths(monthName, month)

        // Определить следующие 12 месяцев
        function getNextMonths (monthNameArray, month) {
            let res = [],
                arr = []
                month += 1
            
            for (let q = month; q < month + 12; ++q) {
              res.push((q-1) % 12)
            }

            for (let i = 0; i < res.length; i++) {
                arr.push(monthNameArray[res[i]])
            }
            return arr
        }

        function leftMonthActivate (element, a, b, arr, monthsAside, i) {

            if (element.scrollTop > a && element.scrollTop < b) {

                if (monthsAside[i].classList.contains('month-aside__link-active')) return false

                document.querySelector('.month-aside__link-active').classList.remove('month-aside__link-active')
                monthsAside[i].classList.add('month-aside__link-active')
                return
            }
        }

        function scrollAction () {
                
            let monthPlace = []
            let monthsAside = document.querySelectorAll('.month-aside__link')

            for (let i = 0; i < document.querySelectorAll('.month-calendar').length; i++) {
                monthPlace.push(document.querySelectorAll('.month-calendar')[i].offsetTop - 100)
            }

            monthPlace.push(100000) // последний элемент

            for (let i = 0; i < monthPlace.length; i++) {
                leftMonthActivate (event.target, monthPlace[i], monthPlace[i + 1], monthPlace, monthsAside, i)
            }
        }

        useEffect(() => {

            smoothscroll.polyfill() // для плавной прокрутки на сафари

            document.querySelector('.datepicker-body').addEventListener('mouseenter', event => {
                event.target.addEventListener("scroll", scrollAction, true)
            })
          
            document.querySelector('.datepicker-body').addEventListener('mouseleave', event => {
                event.target.removeEventListener("scroll", scrollAction, true)
            })
        }, [])

    return (
        <div className="datepicker-w">
            <div className="datepicker-header">
                <div className="datepicker-header__title">Месяц</div>
                <ul className="days-list">
                    {daysName.map((item, index) => {
                        return (
                            <li className={index == 5 || index == 6 ? "days-list__item days-list__weekend" : "days-list__item" } key = {index}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="month-aside">
                {monthArray.map((item, index) => {
                    return (
                        <MonthAsideLink 
                            key = {index}
                            index = {index}
                            item = {item}
                            mindate = {value.mindate}
                        />
                    )
                })}  
            </div>
            <div className="datepicker-body">
                {monthArray.map((item, index) => {
                    return(
                        <Month 
                            monthId = {index}
                            monthName = {item}
                            dateIn = {value.dateIn}
                            key = {index}
                            closeFuncdateIn = {value.closeFuncdateIn}
                            closeFuncdateOut = {value.closeFuncdateOut}
                            mindate = {value.mindate}
                        />
                    )
                })}  
            </div>
        </div>
    )
}