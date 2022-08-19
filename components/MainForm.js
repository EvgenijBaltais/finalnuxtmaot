import { useState, useEffect} from 'react'

import Link from 'next/link'

import styles from "../styles/MainForm.module.css"

const MainForm = () => {


    const getSearchData = e => {

            console.log(1111)

    }

    return (
        <section className = {styles["main-form"]}>
        <div className={styles["form-titles"]}>
            <a href="" className = {`${styles["form-titles__item"]} ${styles["active"]}`}>Направления</a>
            <a href="" className = {styles["form-titles__item"]}>Отели</a>
        </div>
        <div className = {styles["selection-forms"]}>
            <div className = {styles["selection-form-item"]}>
                <form action="" name = "direction-form" className = {`${styles["selection-form"]} ${styles["direction-form"]}`} id = "direction-form">
                    <div className = {styles["direction-form-w"]}>
                        <div className = {styles["direction-form__inside"]}>
                            <div className = {`${styles["direction-form-block"]} ${styles["direction-form-way"]}`}>
                                <input type="text"
                                        name="choose-way"
                                        className = {styles["form-way-input"]}
                                        placeholder="Выберите направление"
                                        onClick = {getSearchData}
                                        onChange = {getSearchData}
                                />
                                <div className={styles["search-results-w"]}>
                                    <div className={styles["search-results__header"]}>
                                        Выберите из списка или начните вводить название для поиска
                                    </div>
                                    <div className={styles["search-results__body"]}>
                                        <div className={styles["search-results__item"]}>
                                            <Link href = "">
                                                <a className={styles["search-results__link"]}>
                                                    Подмосковье
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={styles["search-results__item"]}>
                                            <Link href = "">
                                                <a className={styles["search-results__link"]}>
                                                    Сочи
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={styles["search-results__item"]}>
                                            <Link href = "">
                                                <a className={styles["search-results__link"]}>
                                                    Крым
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={styles["search-results__item"]}>
                                            <Link href = "">
                                                <a className={styles["search-results__link"]}>
                                                    Абхазия
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={styles["search-results__item"]}>
                                            <Link href = "">
                                                <a className={styles["search-results__link"]}>
                                                    Анапа
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={styles["search-results__item"]}>
                                            <Link href = "">
                                                <a className={styles["search-results__link"]}>
                                                    Беларусь
                                                </a>
                                            </Link>
                                        </div>
                                        <div className={styles["search-results__item"]}>
                                            <Link href = "">
                                                <a className={styles["search-results__link"]}>
                                                    Геленджик
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = {`${styles["direction-form-block"]} ${styles["direction-form-in"]}`}>
                                <input type="text" name="choose-in" className = {styles["form-way-input"]} placeholder="Заезд" />
                            </div>
                            <div className = {`${styles["direction-form-block"]} ${styles["direction-form-out"]}`}>
                                <input type="text" name="choose-out" className = {styles["form-way-input"]} placeholder="Выезд" />
                            </div>
                            <div className = {`${styles["direction-form-block"]} ${styles["direction-form-people"]}`}>
                                <input type="text" name="choose-people" className = {styles["form-way-input"]} placeholder="2 взрослых" />
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