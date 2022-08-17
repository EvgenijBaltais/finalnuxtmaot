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

                <section className = {styles["article-content"]}>
                    <div className = {styles["article-left"]}>
                        <div className = {styles["article-left-nav"]}>
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


                    <div className = {styles["article-right"]}>

                        
                        <h2 className="single-block-title">
                            Бани и сауны в домах отдыха Подмосковья
                        </h2>
                        <p className = {styles["article-page-content__text"]}>
                        Уже давно и прочно в российскую действительность вошло понятие сауны. Посещение ее, 
                        также как посещение русской бани, стало неотъемлемой частью любого отдыха. Ведь воздействие 
                        горячего пара положительно сказывается на самочувствии человека, улучшается цвет кожи, в том 
                        числе она становится упругой, успокаивает нервную систему человека. Кроме того, организм избавляется 
                        от шлаков, нормализируется работа дыхательных путей, сердечно-сосудистой системы, терморегуляции, 
                        пищеварительной системы, лечит простудные заболевания. Вот почему во многих домах отдыха в Подмосковье 
                        предоставляются услуги банного комплекса.
                        Оздоровительные процедуры в банном комплексе будут проходить эффективнее, если парная построена из подходящего 
                        дерева - оно должно быть качественным и прочным. Липа имеет свойство при нагревании распространять удивительно 
                        приятный аромат меда, он успокаивает и создает ощущение комфорта. Часто стены и потолки в парной выполняют из ели, 
                        сосны или кедра. Эти деревья практически не выделяют смолы и обладают едва уловимым запахом. Самый экономичный 
                        вариант - мазонит, который представляет собой спрессованную стружку дерева, обычно из него изготовляют части потолка, 
                        невидимые человеческому глазу. И, пожалуй, самый подходящий материал для строительства сауны или бани это, конечно же, 
                        осина. Даже при самом сильном нагревании она не выделяет смолы, влагоустойчива и обладает дурманящим голову ароматом. 
                        Хоть пиво и считается традиционным напитком, который следует употреблять в бане, большую пользу организму принесет чай. 
                        Горячий чай восстановит потерю влаги в организме, а еще лучше, если он будет заварен на полезных травах. Подойдет мята, 
                        шиповник, липа и многие другие травы, которые мы завариваем для профилактики и лечения простудных заболеваний. 
                        Ложка меда, добавленная в напиток, произведет на организм тонизирующее действие. 
                        Также особенное удовольствие доставит Вам правильно приготовленный зеленый чай.
                        </p>

                        <div className = {styles["content-subscribe"]}>
                            <h2 className = "single-block-title">Подпишитесь на лучшие предложения</h2>
                            <div className = {styles["content-s-w"]}>
                                <form action="" name = {styles["content-subscribe-form"]}>
                                    <div className = {styles["content-subscribe-form"]}>
                                        <div className={styles["content-subscribe-form-inside"]}>
                                            <input type="text" name = "get-content-subscribe" id = "get-content-subscribe" className = {styles["get-content-subscribe"]} placeholder = "Укажите свою электронную почту" />
                                            <div className = {styles["get-content-suscribe-btn"]}>
                                                <button className = {styles["get-content-suscribe__submit"]}>Подписаться</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "subscribe-agree">
                                        <input type="checkbox" id="subscribe-checkbox-1" className = "stylized" /> <label htmlFor="subscribe-checkbox-1">
                                            Хочу получать акции и спецпредложения для своих путешествий</label>
                                    </div>
                                </form>
                            </div>
                            <h2 className = "single-block-title">Подпишитесь на наши соц. сети</h2>
                            <div className={styles["content-subscribe-socials"]}>
                                <a className = {styles["content-social-tg-rus"]}>Лучшие отели России</a>
                                <a className = {styles["content-social-tg-pdmsk"]}>Лучшие отели Подмосковья</a>
                                <a className = {styles["content-social-vk"]}>Все о качественном и доступном отдыхе в Подмосковье</a>
                            </div>
                        </div>
                    </div>

		        </section>

            </>
        )
    }
}

export default Articles