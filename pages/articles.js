import React from 'react'
import MainForm from "../components/MainForm"
import styles from "../styles/Articles.module.css"

class Articles extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        document.querySelector('.wrapper').classList.add('articles-page')
    }

    componentWillUnmount() {
        document.querySelector('.wrapper').classList.remove('articles-page')
    }
    
    render() {

        return (
            <>
                <h1 className = "secondary-h1">Полезные статьи</h1>

                <MainForm />

                <section className = {styles["pay-content"]}>
                    <div className = {styles["pay-left"]}>
                        <div className = {styles["pay-left-nav"]}>
                            <h2 className="single-block-title left-block-bedroom">
                                Навигация
                            </h2>
                            <div className = {styles["left-nav-block"]}>
                                <ul className = {styles["left-nav-list"]}>
                                    <li className = {styles["left-nav-item"]}>
                                        <a className = {styles["left-nav-link"]} href="">Платежи. Оплата банковской картой онлайн</a>
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
		        </section>

            </>
        )
    }
}

export default Articles