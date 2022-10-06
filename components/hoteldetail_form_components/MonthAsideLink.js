export default function MonthAsideLink (props) {

    const date = new Date()
    let monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    const scrollToMonth = (event, index) => {

        // Прокрутка месяца

        event.preventDefault()
        let position = event.target.parentElement.parentElement.querySelector(`#month-calendar-${index}`).offsetTop
        event.target.parentElement.parentElement.querySelector('.datepicker-body').scrollTo({top: position, behavior: 'smooth'})

        // Присвоение активного класса

        event.target.parentElement.querySelector('.month-aside__link-active').classList.remove('month-aside__link-active')
        event.target.classList.add('month-aside__link-active')
    }

    // Определить активный класс

    function setClasses(props) {

        let classes = 'month-aside__link'
        let actualMonth = monthName[parseInt(props.mindate.slice(3,5)) - 1]

        props.item == actualMonth ? classes += ' month-aside__link-active' : ''

        return classes
    }

    return (
        <a onClick = {(event, index) => scrollToMonth(event, props.index)}
            className={
                setClasses(props)
        }
        >
        {props.item == 'Январь' ? 
            <span className="month-aside__link-year">{date.getFullYear() + 1}</span> : ''
        }
            {props.item}</a>
    )
}