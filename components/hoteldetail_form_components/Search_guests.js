import { useState } from 'react'

export default function Search_guests (props) {

    const childAges = ['до 1 года', '1 год', '2 года', '3 года', '4 года', '5 лет', '6 лет', '7 лет', '8 лет', '9 лет', '10 лет', '11 лет', '12 лет',
                        '13 лет', '14 лет', '15 лет', '16 лет', '17 лет']

    const [visibleChildren, setVisibleChildren] = useState(0)    // Раскрытие блока с детьми

    const plusAdults = () => {
        let ads = props.adults

        if (ads > 29) return false
            ads++
            props.changeAdults(ads)
    }

    const minusAdults = () => {
        let ads = props.adults

        if (ads <= 1) return false
            ads--
            props.changeAdults(ads)
    }

    function removeChildAge (index) {

        let array = [...props.childrenAges]

            array.splice(index, 1);
            props.changeChildrenAges(array)
    }

    function addChildAge(index) {

        // ключ возраста в массиве
        props.changeChildrenAges(current => [...current, index])
        setVisibleChildren(visibleChildren => !visibleChildren)
    }

    return (

        <div className = "hoteldetail-guests-block-w">
            <div className="hoteldetail-search-results-guests__header">
                Укажите количество гостей
            </div>
            <div className="hoteldetail-search-results-guests__body">
                <div className = "hoteldetail-search-results-adults">
                    <div className = "hoteldetail-search-results__left">
                        <p className = "hoteldetail-search-results__title">Взрослые</p>
                        <span className="hoteldetail-search-results__subtitle">от 18 лет</span>
                    </div>
                    <div className = "hoteldetail-search-results__right">
                        <div className = "hoteldetail-search-results__minus" onClick = {minusAdults}>—</div>
                        <div className = "hoteldetail-search-results__value">{props.adults}</div>
                        <div className = "hoteldetail-search-results__plus" onClick = {plusAdults}>+</div>
                    </div>
                </div>

                <div className = "hoteldetail-search-results-children">
                    {(props.childrenAges || []).map((item, index) => {
                        return (
                            <div className = "hoteldetail-search-results-children__item" key = {index}>
                                <div className = "hoteldetail-search-results__left">
                                    <p className = "hoteldetail-search-results__title">Ребенок</p>
                                </div>
                                <div className = "hoteldetail-search-results__right hoteldetail-search-results__age">
                                    <div className = "hoteldetail-search-age-num">{childAges[item]}</div>
                                    <div className = "hoteldetail-search-age-remove" onClick = {() => removeChildAge(index)}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className = {visibleChildren ? "hoteldetail-search-results-add-child" : "hoteldetail-search-results-add-child hoteldetail-search-results-add-child-closed"}>
                    <p className = "hoteldetail-search-results-add__title">
                        <a className="hoteldetail-search-results-add__link" onClick = {() => setVisibleChildren(visibleChildren => !visibleChildren)}>Добавить ребенка</a>
                    </p>
                    {visibleChildren ? 
                        <div className = "hoteldetail-search-results-add__block">
                            {childAges.map((item, index) => {
                                return (
                                    <div className = "hoteldetail-search-results-add__item" key = {index} onClick = {() => {addChildAge(index)}}>
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