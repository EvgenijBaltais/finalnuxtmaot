import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"

import styles from "../styles/Articles.module.css"

const ArticleNav = () => {

    const router = useRouter()

    const [visibleList, setVisibleList] = useState(0)

    const rootEl = useRef(null)

    function WindowOutClick() {
        useEffect(() => {
          const onClick = e => rootEl.current.contains(e.target) || setVisibleList(false)

          document.addEventListener('click', onClick)
          return () => document.removeEventListener('click', onClick)
        }, [])
    }

    WindowOutClick()

    return (
        <div className = {styles["article-left-nav"]} onClick = {() => setVisibleList(visibleList => !visibleList)}>
            <h2 className="single-block-title left-block-bedroom">
                Навигация
            </h2>
            <div className = {visibleList ? `${styles["left-nav-block"]} ${styles["active-list"]}` : styles["left-nav-block"]} ref={rootEl}>
                <span className = {styles["top-nav-title"]}>Выберите статью</span>
                <div className = {styles["left-ul-nav-list"]}>
                    <ul className = {styles["left-nav-list"]}>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_1">Бани и сауны в домах отдыха Подмосковья</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_2">ГЕЛИОПАРК Кантри Резорт</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_3">Детский отдых в Подмосковье</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_4">Корпоративный отдых в Подмосковье</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_5">Питание в отелях Подмосковья</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_6">Отдых в Подмосковье около водоемов, рыбалка в Подмосковье с проживанием</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_7">Фореста Фестиваль Парк</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_8">Эммаус Волга Клаб</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_9">Пейнтбол в Подмосковье, перечень пейнтбольных клубов</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_10">Конные прогулки в Подмосковье</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_11">Недорогой отдых в Подмосковье</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_12">Конференц-залы в Подмосковье</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_13">Активный отдых в Подмосковье</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="#art_14">Элитный отдых в Подмосковье, VIP-отдых</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ArticleNav