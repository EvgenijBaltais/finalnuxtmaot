
export default function DayLink (props) {

    const date = new Date()
    const [day, month, year] = props.item.split('.')
    const actualDate = new Date(year, month, day)
    const [minDay, minMonth, minYear] = props.mindate.split('.')
    const minDate = new Date(minYear, minMonth - 1, minDay)

    function getActualTextData(day, month, year) {
        return day + '.' + addNullToDate(parseInt(month) + 1) + '.' + year
    }

    function addNullToDate(num) {
        return num < 10 ? '0' + num : num
    }

    function sendDate(event) {

        if (props.prefix) return false
        if (event.target.classList.contains('date-disable')) return false

        props.closeFuncdateIn ? props.closeFuncdateIn(0, getActualTextData(day, actualDate.getMonth(), actualDate.getFullYear())) : ''
        props.closeFuncdateOut ? props.closeFuncdateOut(0, getActualTextData(day, actualDate.getMonth(), actualDate.getFullYear())) : ''
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
                    !props.prefix && (actualDate.getDay() == 0 || actualDate.getDay() == 6) ? ' date-weekend' : '' 
                }${
                    minDate > actualDate ? ' date-deactivated' : '' 
                }`
            }>
            {day}
        </a>
    )
}