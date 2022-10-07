export default function DayLink (props) {

    const date = new Date()
    const yesterday = new Date(Date.now()-86400000)
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

        event.preventDefault()

        if (props.prefix) return false
        if (event.target.classList.contains('date-disable')) return false

        props.closeFuncdateIn ? props.closeFuncdateIn(0, getActualTextData(day, actualDate.getMonth(), actualDate.getFullYear())) : ''
        props.closeFuncdateOut ? props.closeFuncdateOut(0, getActualTextData(day, actualDate.getMonth(), actualDate.getFullYear())) : ''
    }

    function hoverMode () {
        if (props.closeFuncdateOut) {
            console.log(minDate)
        }
    }

    return (
        <a onMouseEnter={hoverMode}
            onClick = {sendDate}
            className = {
                `date-link${
                    actualDate < yesterday && !props.prefix ? ' date-disable' : ''
                }${
                    props.closeFuncdateOut && actualDate < minDate ? ' date-disable' : '' 
                }${
                    props.prefix ? ' date-prefix' : ''
                }${
                    minDay == day && minMonth == parseInt(actualDate.getMonth()) + 1 && !props.prefix ? ' date-today' : ''
                }${
                    !props.prefix && (actualDate.getDay() == 0 || actualDate.getDay() == 6) ? ' date-weekend' : '' 
                }`
            }>
            {day}
        </a>
    )
}