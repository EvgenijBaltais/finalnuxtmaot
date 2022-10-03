import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"

import styles from "../styles/Payment.module.css"

const PaymentNav = () => {

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

        <div className = {styles["pay-left-nav"]} onClick = {() => setVisibleList(visibleList => !visibleList)} >
            <h2 className="single-block-title left-block-bedroom">
                Навигация
            </h2>
            <div className = {visibleList ? `${styles["left-nav-block"]} ${styles["active-list"]}` : styles["left-nav-block"]} ref={rootEl}>
                <span className = {styles["top-nav-title"]}>Выберите статью</span>
                    <div className = {styles["left-ul-nav-list"]}>
                    <ul className = {styles["left-nav-list"]}>
                        <li className = {styles["left-nav-item"]}>
                            <span className = {styles["left-nav-link"]} href="">Платежи. Оплата банковской картой онлайн</span>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="">Гарантии Безопасности</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="">Безопасность Онлайн Платежей</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="">Возврат Товаров</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="">Конфиденциальность</a>
                            <ul className={styles["left-nav-list__sub"]}>
                                <li className = {styles["left-nav-item"]}>
                                    <a href="" className = {styles["left-nav-link"]}>Определения</a>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a href="" className = {styles["left-nav-link"]}>Использование информации</a>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a href="" className = {styles["left-nav-link"]}>Ссылки</a>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a href="" className = {styles["left-nav-link"]}>Ограничение ответственности</a>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a href="" className = {styles["left-nav-link"]}>Контакты</a>
                                </li>
                            </ul>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="">Проведение операции оплаты товаров/услуг в сети интернет</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="">Отмена операции оплаты товаров/услуг в интернете</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="">Операция возврата товара (отказа от услуг), оплаченных картой в сети интернет.</a>
                        </li>
                        <li className = {styles["left-nav-item"]}>
                            <a className = {styles["left-nav-link"]} href="">Юридическое лицо</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PaymentNav