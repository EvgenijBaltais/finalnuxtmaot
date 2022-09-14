import DayLink from './DayLink'

export default function Month (value) {

    let date = new Date(),
	    month = date.getMonth() + value.monthId,
	    year = date.getFullYear(),
        days = [],
        prefixDays = []

        let getMonthDays = (index) => {
                
            let lastDay = new Date(year, month + 1, 0).getDate()

                for (let i = 1; i <= lastDay; i++) {
                    days.push(addNullToDate(i) + '.' + '' + addNullToDate(month) + '.' + addNullToDate(year))
                }

            return days
        }

        let getprefixDays = (index) => {

            let lastmonthLastday = new Date(year, month, 0).getDate(),  // Последний день предыдущего месяца
                monthPrefix = new Date(year, month, 0).getDay()        // Номер дня недели, с которого начинается этот месяц

                for (let i = 0; i < monthPrefix; i++) {
                    prefixDays.push(addNullToDate(lastmonthLastday - monthPrefix + (i + 1)) + '.' + addNullToDate(month) + '.' + addNullToDate(year))
                }

            return prefixDays
        }

        function addNullToDate(num) {
            return num < 10 ? '0' + num : num
        }

        prefixDays = getprefixDays(value.monthId)
        days = getMonthDays(value.monthId)

    return (

        <div id={`month-calendar-${value.monthId}`} className = "month-calendar">
            <a className="month-name">{value.monthName}</a>
            <div className="days">
                {prefixDays.map((item, index) => {
                    return (
                        <DayLink
                            prefix = {1}
                            key = {index}
                            item = {item}
                            mindate = {value.mindate}
                        />
                    )
                })}
                {days.map((item, index) => {
                    return (
                        <DayLink
                            closeFuncdateIn = {value.closeFuncdateIn}
                            closeFuncdateOut = {value.closeFuncdateOut}
                            key = {index}
                            item = {item}
                            mindate = {value.mindate}
                        />
                    )
                })}
            </div>
        </div>
    )
    
}