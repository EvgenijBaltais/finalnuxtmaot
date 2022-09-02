import React from 'react'
import { useState, useEffect, useRef} from 'react'
import MediaQuery from 'react-responsive'
import MainForm from "../components/MainForm"
import styles from "../styles/Articles.module.css"

import Image from "next/image"

import Article1 from '/public/images/article-1.jpg'
import Article2 from '/public/images/article-2.jpg'


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
                            <div className = " left-nav-block">
                                <ul className = "left-nav-list">
                                    <li className = "left-nav-item">
                                        <a className = {styles["left-nav-link"]} href="">Платежи. Оплата банковской картой онлайн</a>
                                    </li>
                                    <li className = "left-nav-item">
                                        <a className = {styles["left-nav-link"]} href="">Гарантии Безопасности</a>
                                    </li>
                                    <li className = "left-nav-item">
                                        <a className = {styles["left-nav-link"]} href="">Безопасность Онлайн Платежей</a>
                                    </li>
                                    <li className = "left-nav-item">
                                        <a className = {styles["left-nav-link"]} href="">Возврат Товаров</a>
                                    </li>
                                    <li className = "left-nav-item">
                                        <a className = {styles["left-nav-link"]} href="">Конфиденциальность</a>
                                        <ul className={styles["left-nav-list__sub"]}>
                                            <li className = "left-nav-item">
                                                <a href="" className = {styles["left-nav-link"]}>Определения</a>
                                            </li>
                                            <li className = "left-nav-item">
                                                <a href="" className = {styles["left-nav-link"]}>Использование информации</a>
                                            </li>
                                            <li className = "left-nav-item">
                                                <a href="" className = {styles["left-nav-link"]}>Ссылки</a>
                                            </li>
                                            <li className = "left-nav-item">
                                                <a href="" className = {styles["left-nav-link"]}>Ограничение ответственности</a>
                                            </li>
                                            <li className = "left-nav-item">
                                                <a href="" className = {styles["left-nav-link"]}>Контакты</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className = "left-nav-item">
                                        <a className = {styles["left-nav-link"]} href="">Проведение операции оплаты товаров/услуг в сети интернет</a>
                                    </li>
                                    <li className = "left-nav-item">
                                        <a className = {styles["left-nav-link"]} href="">Отмена операции оплаты товаров/услуг в интернете</a>
                                    </li>
                                    <li className = "left-nav-item">
                                        <a className = {styles["left-nav-link"]} href="">Операция возврата товара (отказа от услуг), оплаченных картой в сети интернет.</a>
                                    </li>
                                    <li className = "left-nav-item">
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

                        <div className = {styles["article-style-elem"]}></div>

                        <Image src = {Article1} className = {styles["article-icons__items"]} alt="" />

                        <p className = {styles["article-page-content__text"]}>
                        Чтобы эффект сауны на состоянии кожи был более действенным, косметологи рекомендуют перед тем как попариться, 
                        сделать маску для лица. Тогда поры кожи лица расширятся, что усилит потоотделение. Дома отдыха Подмосковья 
                        предлагают своим гостям самые разные виды саун, бань, парилок. Например, не так давно в парк-отеле «Тропикана» 
                        построили Инфракрасную сауну, которая уже пользуется огромным успехом у любителей горячего пара. Такой вариант 
                        парной издревле используются в Японии, и вот теперь европейцы оценили по достоинству его преимущества. Инфракрасное 
                        излучение лучше всего воздействует на организм человека, проникая на 5 см в тело. В такой сауне интенсивно потеешь, 
                        следовательно, избавляешься от избыточного веса и шлаков, а ИК-излучения убивают микробы, которые могут вызвать 
                        различные заболевания.
                        </p>

                        <div className = {styles["article-style-elem"]}></div>

                        <Image src = {Article2} className = {styles["article-icons__items"]} alt="" />

                        <p className = {styles["article-page-content__text"]}>
                        Банный комплекс подмосковного отеля «ГЕЛИОПАРК Талассо» включает финскую сауну, римскую баню и инфракрасную сауну. 
                        В римской бане воздух прогревается до температуры не выше 45 градусов, что создает высокую влажность. Традиционно 
                        в воду, которая потом превращается в пар, добавляются целебные травы, которые распространяя приятный запах, создают 
                        эффект фитотерапии. Кроме того, отличие римской бани от других в том, что стены построены из специальных камней, 
                        а не из дерева, как мы привыкли. Камни эти обладают целебными свойствами.
                        </p>


                        <div className = {styles["content-subscribe"]}>
                            <h2 className = "single-block-title">Подпишитесь на лучшие предложения</h2>
                            <div className = {styles["content-s-w"]}>
                                <form action="" name = {styles["content-subscribe-form"]}>
                                    <div className = {styles["content-subscribe-form"]}>
                                        <div className={styles["content-subscribe-form-inside"]}>
                                            <input type="text" name = "get-content-subscribe" id = "get-content-subscribe" className = {styles["get-content-subscribe"]} placeholder = "Укажите свою электронную почту" />
                                            <div className = {styles["get-content-suscribe-btn"]}>
                                                <button className = {styles["get-content-suscribe__submit"]}>
                                                    <MediaQuery maxWidth={420}>
                                                        {(matches) =>
                                                            matches
                                                              ? <span className={styles["icon-subscribe-inside"]}></span>
                                                              : <span>Подписаться</span>
                                                          }
                                                    </MediaQuery>
                                                </button>
                                                <div className = "anim-blick__submit-bg">
                                                    <div className ="anim-blick__submit-obj"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "subscribe-agree">
                                        <input type="checkbox" id="subscribe-checkbox-1" className = "substylized" /> <label htmlFor="subscribe-checkbox-1">
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
