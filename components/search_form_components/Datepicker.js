import Month from "./Month";
import { useEffect } from "react";
import smoothscroll from 'smoothscroll-polyfill';

export default function Datepicker (value) {

    let monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

        // Определить следующие 12 месяцев

        let date = new Date(),
            month = date.getMonth()

        let monthArray = getNextMonths(monthName, month)

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

        // Активный класс

        function setActiveItem (event) {

            event.target.parentElement.querySelector('.month-aside__link-active').classList.remove('month-aside__link-active')
            event.target.classList.add('month-aside__link-active')
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
              };
        })

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
                        <a className={
                            `month-aside__link${
                                index == 0 ? ' month-aside__link-active' : ''
                            }`
                        } key = {index}
                        onClick = {setActiveItem}
                        >{item}</a>
                    )
                })}  
            </div>
            <div className="datepicker-body">
                {monthArray.map((item, index) => {
                    return(
                        <Month 
                            month = {index}
                            key = {index}
                            closeFuncdateIn = {value.closeFuncdateIn}
                            closeFuncdateOut = {value.closeFuncdateOut}
                        />
                    )
                })}  
            </div>
        </div>
    )
}