import React from 'react'
import { useState, useEffect, useRef } from 'react'
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


    function scrollToSection () {

        event.preventDefault()
        
        document.getElementById(event.target.getAttribute('href').slice(1)).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    useEffect(() => {

        if (!document.querySelector('.left-nav-fixed')) return false
        if (!document.querySelector('.footer')) return false

        let top = document.querySelector('.left-nav-fixed').offsetTop
        let footerTop = document.querySelector('.footer').offsetTop
        let blockHeight = document.querySelector('.left-nav-fixed').clientHeight

        /*function scrollingOptions () {

            if (window.pageYOffset <= top) {

                document.querySelector('.left-nav-fixed').removeAttribute('style')
            }

            if (window.pageYOffset > top) {

                document.querySelector('.left-nav-fixed').style.position = "fixed"
                document.querySelector('.left-nav-fixed').style.top = 0
            }

            if (window.pageYOffset > top && (window.pageYOffset >= footerTop - blockHeight + 225)) {

                document.querySelector('.left-nav-fixed').style.position = "absolute"
                document.querySelector('.left-nav-fixed').style.top = footerTop - blockHeight + 225 + 'px'
            }
        }*/

        //window.addEventListener('scroll', scrollingOptions)

        return () => {
            //window.removeEventListener('scroll', scrollingOptions)
        }
    }, [])

    return (

        <div className = {`${styles["pay-left-nav"]} left-nav-fixed`} onClick = {() => setVisibleList(visibleList => !visibleList)} >
                <h2 className="single-block-title left-block-bedroom">
                    Навигация
                </h2>
                <div className = {visibleList ? `${styles["left-nav-block"]} ${styles["active-list"]}` : styles["left-nav-block"]} ref={rootEl}>
                    <span className = {styles["top-nav-title"]}>Выберите статью</span>
                        <div className = {styles["left-ul-nav-list"]}>
                        <ul className = {styles["left-nav-list"]}>
                            <li className = {styles["left-nav-item"]}>
                                <a className = {styles["left-nav-link"]}
                                    href="#payment_by_credit_card_online"
                                    onClick={scrollToSection}
                                >Платежи. Оплата банковской картой онлайн</a>
                            </li>
                            <li className = {styles["left-nav-item"]}>
                                <a className = {styles["left-nav-link"]}
                                    href="#security_guarantees"
                                    onClick={scrollToSection}
                                >Гарантии Безопасности</a>
                            </li>
                            <li className = {styles["left-nav-item"]}>
                                <a className = {styles["left-nav-link"]}
                                    href="#online_payment_security"
                                    onClick={scrollToSection}
                                >Безопасность Онлайн Платежей</a>
                            </li>
                            <li className = {styles["left-nav-item"]}>
                                <a className = {styles["left-nav-link"]}
                                    href="#return_of_goods"
                                    onClick={scrollToSection}
                                >Возврат Товаров</a>
                            </li>
                            <li className = {styles["left-nav-item"]}>
                                <a className = {styles["left-nav-link"]}
                                    href="#confidentiality"
                                    onClick={scrollToSection}
                                >Конфиденциальность</a>
                                <ul className={styles["left-nav-list__sub"]}>
                                    <li className = {styles["left-nav-item"]}>
                                        <a
                                            href="#definitions"
                                            onClick={scrollToSection}
                                            className = {styles["left-nav-link"]}
                                        >Определения</a>
                                    </li>
                                    <li className = {styles["left-nav-item"]}>
                                        <a
                                            href="#use_of_information"
                                            onClick={scrollToSection}
                                            className = {styles["left-nav-link"]}
                                        >Использование информации</a>
                                    </li>
                                    <li className = {styles["left-nav-item"]}>
                                        <a
                                            href="#links"
                                            onClick={scrollToSection}
                                            className = {styles["left-nav-link"]}
                                        >Ссылки</a>
                                    </li>
                                    <li className = {styles["left-nav-item"]}>
                                        <a
                                            href="#disclaimer"
                                            onClick={scrollToSection} 
                                            className = {styles["left-nav-link"]}
                                        >Ограничение ответственности</a>
                                    </li>
                                    <li className = {styles["left-nav-item"]}>
                                        <a
                                            href="#l_contacts"
                                            className = {styles["left-nav-link"]}
                                            onClick={scrollToSection}
                                        >Контакты</a>
                                    </li>
                                </ul>
                            </li>
                            <li className = {styles["left-nav-item"]}>
                                <a
                                    className = {styles["left-nav-link"]}
                                    href="#carrying_out_payment_transaction"
                                    onClick={scrollToSection}
                                >Проведение операции оплаты товаров/услуг в сети интернет</a>
                            </li>
                            <li className = {styles["left-nav-item"]}>
                                <a
                                    className = {styles["left-nav-link"]}
                                    href="#cancel_operation"
                                    onClick={scrollToSection}
                                >Отмена операции оплаты товаров/услуг в интернете</a>
                            </li>
                            <li className = {styles["left-nav-item"]}>
                                <a
                                    className = {styles["left-nav-link"]}
                                    href="#return_operation"
                                    onClick={scrollToSection}
                                >Операция возврата товара (отказа от услуг), оплаченных картой в сети интернет.</a>
                            </li>
                            <li className = {styles["left-nav-item"]}>
                                <a
                                    className = {styles["left-nav-link"]}
                                    href="#legal_entity"
                                    onClick={scrollToSection}
                                >Юридическое лицо</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default PaymentNav