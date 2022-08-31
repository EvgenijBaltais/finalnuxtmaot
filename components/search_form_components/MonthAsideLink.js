

export default function MonthAsideLink (props) {

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
        >{props.item}</a>
    )
}