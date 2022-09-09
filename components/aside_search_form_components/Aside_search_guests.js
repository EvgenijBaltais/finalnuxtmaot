import { useState } from 'react'

export default function Aside_search_guests (props) {

    const childAges = ['до 1 года', '1 год', '2 года', '3 года', '4 года', '5 лет', '6 лет', '7 лет', '8 лет', '9 лет', '10 лет', '11 лет', '12 лет',
                        '13 лет', '14 лет', '15 лет', '16 лет', '17 лет']

    const [visibleChildren, setVisibleChildren] = useState(0)    // Раскрытие блока с детьми

    console.log(props.childrenAges)

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

        props.changeChildrenAges(current => [...current, index])
        setVisibleChildren(visibleChildren => !visibleChildren)
    }

    return (

        <div className = "aside-guests-block-w">
            <div className="aside-search-results-guests__header">
                Укажите количество гостей
            </div>
            <div className="aside-search-results-guests__body">
                <div className = "aside-search-results-adults">
                    <div className = "aside-search-results__left">
                        <p className = "aside-search-results__title">Взрослые</p>
                        <span className="aside-search-results__subtitle">от 18 лет</span>
                    </div>
                    <div className = "aside-search-results__right">
                        <div className = "aside-search-results__minus" onClick = {minusAdults}>—</div>
                        <div className = "aside-search-results__value">{props.adults}</div>
                        <div className = "aside-search-results__plus" onClick = {plusAdults}>+</div>
                    </div>
                </div>

                <div className = "aside-search-results-children">
                    {(props.childrenAges || []).map((item, index) => {
                        return (
                            <div className = "aside-search-results-children__item" key = {index}>
                                <div className = "aside-search-results__left">
                                    <p className = "aside-search-results__title">Ребенок</p>
                                </div>
                                <div className = "aside-search-results__right aside-search-results__age">
                                    <div className = "aside-search-age-num">{childAges[item]}</div>
                                    <div className = "aside-search-age-remove" onClick = {() => removeChildAge(index)}></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className = {visibleChildren ? "aside-search-results-add-child" : "aside-search-results-add-child aside-search-results-add-child-closed"}>
                    <p className = "aside-search-results-add__title">
                        <a className="aside-search-results-add__link" onClick = {() => setVisibleChildren(visibleChildren => !visibleChildren)}>Добавить ребенка</a>
                    </p>
                    {visibleChildren ? 
                        <div className = "aside-search-results-add__block">
                            {childAges.map((item, index) => {
                                return (
                                    <div className = "aside-search-results-add__item" key = {index} onClick = {() => {addChildAge(index)}}>
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