import { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/search_form_components/Search_hotel_ways.module.css'


export default function Search_hotel_ways ({setTextData}) {

const [active_block, setActive_block] = useState(1)

function clickHandler(event) {

    event.preventDefault()
    setTextData(event.target.innerText)
}

    return (

        <div className={styles["search-results-w"]}>
            <div className = {styles["search-results__hotels"]}>
                <div className={styles["search-results__header"]}>
                    Направления
                </div>
                <div className={styles["search-results__body"]}>
                    <div className={styles["search-results__item"]}>
                        <Link href = "">
                            <a className={styles["search-results__link"]} onClick = {clickHandler}>
                                Подмосковье
                            </a>
                        </Link>
                    </div>
                    <div className={styles["search-results__item"]}>
                        <Link href = "">
                            <a className={styles["search-results__link"]} onClick = {clickHandler}>
                                Сочи
                            </a>
                        </Link>
                    </div>
                    <div className={styles["search-results__item"]}>
                        <Link href = "">
                            <a className={styles["search-results__link"]} onClick = {clickHandler}>
                                Крым
                            </a>
                        </Link>
                    </div>
                    <div className={styles["search-results__item"]}>
                        <Link href = "">
                            <a className={styles["search-results__link"]} onClick = {clickHandler}>
                                Абхазия
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className = {styles["search-results__ways"]}>
                <div className={styles["search-results__header"]}>
                    Отели
                </div>
                <div className={styles["search-results__body"]}>
                    <div className={styles["search-results__item"]}>
                        <Link href = "">
                            <a className={styles["search-results__link"]} onClick = {clickHandler}>
                                Солнечный
                            </a>
                        </Link>
                    </div>
                    <div className={styles["search-results__item"]}>
                        <Link href = "">
                            <a className={styles["search-results__link"]} onClick = {clickHandler}>
                                Лес арт резорт
                            </a>
                        </Link>
                    </div>
                    <div className={styles["search-results__item"]}>
                        <Link href = "">
                            <a className={styles["search-results__link"]} onClick = {clickHandler}>
                                Кантри Резорт
                            </a>
                        </Link>
                    </div>
                    <div className={styles["search-results__item"]}>
                        <Link href = "">
                            <a className={styles["search-results__link"]} onClick = {clickHandler}>
                                Ялта Интурист
                            </a>
                        </Link>
                    </div>
                    <div className={styles["search-results__item"]}>
                        <Link href = "">
                            <a className={styles["search-results__link"]} onClick = {clickHandler}>
                                Заря
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}