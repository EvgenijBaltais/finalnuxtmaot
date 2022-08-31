import Link from 'next/link'

import Search_hotel_input from './search_form_components/Search_hotel_input'
import Search_form_datein from './search_form_components/Search_form_datein'
import Search_form_guests from './search_form_components/Search_form_guests'

const MainForm = (props) => {

    const searchByClick = (event) => {
        event.preventDefault()
        event.target.parentElement.parentElement.querySelector('.form-way-input').value = event.target.innerText
    } 

    return (
        <section className = "main-form">
            <div className = "selection-forms">
                <div className = "selection-form-item">
                    <form action="" name = "direction-form" className = "selection-form direction-form" id = "direction-form">
                        <div className = "direction-form-w">
                            <div className = "direction-form__inside">
                                <Search_hotel_input popularHotels = {props.popularHotels} popularWays = {props.popularWays} />
                                <Search_form_datein />
                                <Search_form_guests />
                                <div className = "direction-form-block direction-form-submit">
                                    <Link href = "/hoteldetail">
                                        <button type = "button" className = "direction-form-btn">Найти</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className = "direction-ways">
                            <a className = "direction-way" onClick = {searchByClick}>Подмосковье</a>
                            <a className = "direction-way" onClick = {searchByClick}>Сочи</a>
                            <a className = "direction-way" onClick = {searchByClick}>Крым</a>
                            <a className = "direction-way" onClick = {searchByClick}>Абхазия</a>
                            <span className = "direction-way dont-know-way">
                                <a>Я не знаю, куда хочу поехать</a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default MainForm 