import { useState, useEffect, useRef} from 'react'

export default function Search_guests ({getGuests}) {

    const childAges = ['до 1 года', '1 год', '2 года', '3 года', '4 года', '5 лет', '6 лет', '7 лет', '8 лет', '9 лет', '10 лет', '11 лет', '12 лет',
                        '13 лет', '14 лет', '15 лет', '16 лет', '17 лет']

    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)

    const plusAdults = () => {
        let ads = adults,
            chld = children

        if (ads > 29) return false
            ads++
            setAdults(ads)
            getGuests(ads + chld)
    }

    const minusAdults = () => {
        let ads = adults,
            chld = children

        if (ads <= 1) return false
            ads--
            setAdults(ads)
            getGuests(ads + chld)
    }

    // Раскрытие блока с детьми

    const [visibleChildren, setVisibleChildren] = useState(0)

    const showList = event => {
        setVisibleChildren(prevVisibleChildren => !prevVisibleChildren)
        console.log(visibleChildren)
    }

    return (

        <div className = "guests-block-w">
                <div className="search-results-guests__header">
                    Укажите количество гостей
                </div>
                <div className="search-results-guests__body">
                    <div className = "search-results-adults">
                        <div className = "search-results__left">
                            <p className = "search-results__title">Взрослые</p>
                            <span className="search-results__subtitle">от 18 лет</span>
                        </div>
                        <div className = "search-results__right">
                            <div className = "search-results__minus" onClick = {minusAdults}>—</div>
                            <div className = "search-results__value">{adults}</div>
                            <div className = "search-results__plus" onClick = {plusAdults}>+</div>
                        </div>
                    </div>
                    <div className = "search-results-children">
                        <div className = "search-results-children__item">
                            <div className = "search-results__left">
                                <p className = "search-results__title">Ребенок</p>
                            </div>
                            <div className = "search-results__right search-results__centered">
                                7 лет
                            </div>
                        </div>
                    </div>
                    <div className = "search-results-add-child search-results-add-child-closed">
                        <p className = "search-results-add__title" onClick = {showList}>Добавить ребенка</p>
                        <div className = "search-results-add__block">
                            {childAges.map((item, index) => {
                                return (
                                    <div className = "search-results-add__item" key = {index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
        </div>
    )
}