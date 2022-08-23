import { useState}  from 'react'
import Link from 'next/link'

import Search_hotel_input from './search_form_components/Search_hotel_input'
import Search_guests from './search_form_components/Search_guests'
import Search_form_datein from './search_form_components/Search_form_datein'
import Search_form_dateout from './search_form_components/Search_form_dateout'
import Search_form_guests from './search_form_components/Search_form_guests'

const MainForm = () => {


    return (
        <section className = "main-form">
            <div className = "selection-forms">
                <div className = "selection-form-item">
                    <form action="" name = "direction-form" className = "selection-form direction-form" id = "direction-form">
                        <div className = "direction-form-w">
                            <div className = "direction-form__inside">

                                <Search_hotel_input />
                                <Search_form_datein />
                                <Search_form_dateout />
                                <Search_form_guests />

                                <div className = "direction-form-block direction-form-submit">
                                    <button type = "button" className = "direction-form-btn">Найти</button>
                                </div>
                            </div>
                        </div>
                        <div className = "direction-ways">
                            <a className = "direction-way" href="">Подмосковье</a>
                            <a className = "direction-way" href="">Сочи</a>
                            <a className = "direction-way" href="">Крым</a>
                            <a className = "direction-way" href="">Абхазия</a>
                            <a className = "direction-way dont-know-way" href="">Я не знаю, куда хочу поехать</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default MainForm 