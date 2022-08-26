import Month from "./Month";

export default function Datepicker (value) {

    let months = [0,1,2,3,4,5,6,7,8,9,10,11],
        monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        

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
                {monthName.map((item, index) => {
                    return (
                        <div className="month-aside__item" key = {index}>{item}</div>
                    )
                })}  
            </div>
            <div className="datepicker-body">
                {months.map((item, index) => {
                    return(
                        <Month month = {item} key = {index} />
                    )
                })}  
            </div>
        </div>
    )
    
}