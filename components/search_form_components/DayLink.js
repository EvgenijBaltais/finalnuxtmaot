
export default function DayLink (props) {

    let date = new Date()
    const [day, month, year] = props.item.split('.')
    const today = new Date(year, month, day)

    function sendDate(event) {

        if (props.prefix) return false
        if (event.target.classList.contains('date-disable')) return false

        props.closeFuncdateIn ? props.closeFuncdateIn(0, props.item) : ''
        props.closeFuncdateOut ? props.closeFuncdateOut(0, props.item) : ''
    }

    return (
        <a onClick = {sendDate}
            className = {
                `date-link${
                    day < date.getDate() && month == date.getMonth() ? ' date-disable' : ''
                }${
                    props.prefix ? ' date-prefix' : ''
                }${
                    day == date.getDate() && month == date.getMonth() ? ' date-today' : ''
                }${
                    !props.prefix && (today.getDay() == 0 || today.getDay() == 6) ? ' date-weekend' : '' 
                }`
            }>
            {day}
        </a>
    )
}