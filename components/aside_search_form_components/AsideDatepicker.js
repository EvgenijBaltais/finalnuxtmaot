import AsideMonth from "./AsideMonth"
import { useEffect } from "react"
import smoothscroll from 'smoothscroll-polyfill'

export default function AsideDatepicker (value) {

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

        useEffect(() => {

            smoothscroll.polyfill()
            let position = 0
            let documentCached = document
            let links = document.querySelectorAll(".month-aside__link")

            const addLinkEvents = (event, i) => {
                event.preventDefault()
                position = documentCached.getElementById(`month-calendar-${i}`).offsetTop
                documentCached.querySelector('.datepicker-body').scrollTo({top: position, behavior: 'smooth'})
            }

            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener('click', () => addLinkEvents(event, i))
            }

            return () => {
                for (let i = 0; i < links.length; i++) {
                    links[i].removeEventListener('click', () => addLinkEvents(event, i))
                }
            }
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
                        <AsideMonthLink key = {index} index = {index} item = {item} />
                    )
                })}  
            </div>
            <div className="datepicker-body">
                {monthArray.map((item, index) => {
                    return(
                        <AsideMonth 
                            monthId = {index}
                            monthName = {item}
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