
export default function DayLink (props) {


    let formatedDate = ''

    function sendDate(event) {

        if (props.prefix) return false

        formatedDate = addNullToDate(parseInt(event.target.innerText)) + '/' + 
            addNullToDate(parseInt(event.target.getAttribute('data-month')) + 1) + '/'
            + event.target.getAttribute('data-year')

        props.closeFuncdateIn ? props.closeFuncdateIn(0, formatedDate) : ''
        props.closeFuncdateOut ? props.closeFuncdateOut(0, formatedDate) : ''
        
    }

    function addNullToDate(num) {
        return num < 10 ? '0' + num : num
    }

    let date = new Date()

    return (
        <a onClick = {event => sendDate(event)}
            data-month = {props.month}
            data-year = {props.year}
            className = {
                `date-link${
                    props.item < props.dayNumber && props.month == 0 ? ' date-disable' : ''
                }${
                    props.item == props.dayNumber && props.month == 0 ? ' date-now' : ''
                }${
                    props.prefix ? ' date-prefix' : ''
                }${
                    props.item == date.getDate() && props.month == date.getMonth() ? ' date-today' : ''
                }`
            }>
            {props.item}
        </a>
    )
}