import { useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import Search_hotel_ways from './search_form_components/Search_hotels_ways'
import Search_guests from './search_form_components/Search_guests'
import styles from "../styles/MainForm.module.css"

const MainForm = () => {

    // Поиск
    const [searchValue, setSearchValue] = useState('')
    const [visibleSearch, setVisibleSearch] = useState(0)

    // Дата заезда
    const [visibleDateIn, setVisibleDateIn] = useState(0)
    const [visibleDateInValue, setVisibleDateInValue] = useState('Заезд')

    // Дата выезда
    const [visibleDateOut, setVisibleDateOut] = useState(0)
    const [visibleDateOutValue, setVisibleDateOutValue] = useState('Выезд')

    // Гости
    const [visibleGuests, setVisibleGuests] = useState(0)
    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)


    const setValue = event => {
        setSearchValue(event.target.value)
        event.target.value == '' ? setVisibleSearch(0) : setVisibleSearch(1)
    }

    const setTextData = text => {
        setSearchValue(text)
        setVisibleSearch(0)
    }

    return (
        <section className = {styles["main-form"]}>
            <div className = {styles["selection-forms"]}>
                <div className = {styles["selection-form-item"]}>
                    <form action="" name = "direction-form" className = {`${styles["selection-form"]} ${styles["direction-form"]}`} id = "direction-form">
                        <div className = {styles["direction-form-w"]}>
                            <div className = {styles["direction-form__inside"]}>
                                <div className = {`${styles["direction-form-block"]} ${styles["direction-form-way"]}`}>
                                    <input type="text"
                                            name="choose-way"
                                            className = {styles["form-way-input"]}
                                            value = {searchValue}
                                            placeholder="Выберите направление"
                                            onChange={setValue}
                                            onClick = {event => setVisibleSearch(1)}
                                    />
                                    { visibleSearch ? <Search_hotel_ways setTextData = {setTextData} /> : '' }
                                </div>
                                <div className = {`${styles["direction-form-block"]} ${styles["direction-form-in"]}`}>
                                    {visibleDateIn ? <div className = {styles["direction-form-in-active"]}>{visibleDateInValue}</div> : ''}
                                    <input type="text"
                                            name="choose-in"
                                            className = {styles["form-way-input"]}
                                            placeholder = {visibleDateInValue}
                                            onClick = { event => setVisibleDateIn(1) }
                                    />
                                </div>
                                <div className = {`${styles["direction-form-block"]} ${styles["direction-form-out"]}`}>
                                    {visibleDateOut ? <div className = {styles["direction-form-out-active"]}>{visibleDateOutValue}</div> : ''}
                                    <input type="text"
                                            name="choose-out"
                                            className = {styles["form-way-input"]}
                                            placeholder = {visibleDateOutValue}
                                            onClick = { event => setVisibleDateOut(1) }
                                    />
                                </div>
                                <div className = {`${styles["direction-form-block"]} ${styles["direction-form-people"]}`}>
                                    {visibleGuests ? <div className = {styles["direction-form-people-active"]}>{adults}</div> : ''}
                                    <input
                                        type="text"
                                        name="choose-people"
                                        className = {styles["form-way-input"]}
                                        placeholder="2 взрослых"
                                        onClick = { event => setVisibleGuests(1) }
                                    />
                                    { visibleSearch ? <Search_guests setTextData = {setTextData} /> : '' }
                                    <Search_guests />
                                </div>
                                <div className = {`${styles["direction-form-block"]} ${styles["direction-form-submit"]}`}>
                                    <button type = "button" className = {styles["direction-form-btn"]}>Найти</button>
                                </div>
                            </div>
                        </div>
                        <div className = {styles["direction-ways"]}>
                            <a className = {styles["direction-way"]} href="">Подмосковье</a>
                            <a className = {styles["direction-way"]} href="">Сочи</a>
                            <a className = {styles["direction-way"]} href="">Крым</a>
                            <a className = {styles["direction-way"]} href="">Абхазия</a>
                            <a className = {`${styles["direction-way"]} ${styles["dont-know-way"]}`} href="">Я не знаю, куда хочу поехать</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default MainForm 