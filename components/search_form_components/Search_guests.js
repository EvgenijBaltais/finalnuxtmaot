import { useState } from 'react'

export default function Search_guests ({getGuests, adults, children, getAdults, getChildren}) {

    const childAges = ['до 1 года', '1 год', '2 года', '3 года', '4 года', '5 лет', '6 лет', '7 лет', '8 лет', '9 лет', '10 лет', '11 лет', '12 лет',
                        '13 лет', '14 лет', '15 лет', '16 лет', '17 лет']

    const [visibleChildren, setVisibleChildren] = useState(0)    // Раскрытие блока с детьми

    const plusAdults = () => {
        let ads = adults

        if (ads > 29) return false
            ads++
            getAdults(ads)
    }

    const minusAdults = () => {
        let ads = adults

        if (ads <= 1) return false
            ads--
            getAdults(ads)
    }

    function removeChildAge (index) {

        let array = [...children]

            array.splice(index, 1);
            getChildren(array)
    }

    function addChildAge(item) {

        getChildren(current => [...current, item])
        setVisibleChildren(visibleChildren => !visibleChildren)
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
                    {(children || []).map((item, index) => {
                        return (
                            <div className = "search-results-children__item" key = {index}>
                                <div className = "search-results__left">
                                    <p className = "search-results__title">Ребенок</p>
                                </div>
                                <div className = "search-results__right search-results__age">
                                    <div className = "search-age-num">{item}</div>
                                    <div className = "search-age-remove" onClick = {() => removeChildAge(index)}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className = {visibleChildren ? "search-results-add-child" : "search-results-add-child search-results-add-child-closed"}>
                    <p className = "search-results-add__title">
                        <a className="search-results-add__link" onClick = {() => setVisibleChildren(visibleChildren => !visibleChildren)}>Добавить ребенка</a>
                    </p>
                    {visibleChildren ? 
                        <div className = "search-results-add__block">
                            {childAges.map((item, index) => {
                                return (
                                    <div className = "search-results-add__item" key = {index} onClick = {() => {addChildAge(item)}}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>: ''
                    }
                </div>
            </div>
        </div>
    )
}