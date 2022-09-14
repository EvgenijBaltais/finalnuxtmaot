export default function MonthAsideLink (props) {

    const date = new Date()

    // Активный класс

    function setActiveItem (event) {
        event.target.parentElement.querySelector('.month-aside__link-active').classList.remove('month-aside__link-active')
        event.target.classList.add('month-aside__link-active')
    }

    return (
        <a onClick = {setActiveItem}
            className={
            `month-aside__link${
                props.index == 0 ? ' month-aside__link-active' : ''
            }`
        }
        >
        {props.item == 'Январь' ? 
            <span className="month-aside__link-year">{date.getFullYear() + 1}</span> : ''
        }
            {props.item}</a>
    )
}