import React from "react"

import Hotel_search_result from "../components/hotel_details/Hotel_search_result"
import Rooms_info from "../components/hotel_details/Rooms_info"
import Hotel_rooms_all from "../components/hotel_details/Hotel_rooms_all"  
import styles from "../styles/hoteldetail.module.css"

class Hoteldetail extends React.Component {


    render () {

        const blockVisibility = 2

        return (
            <>
                <section className = {styles["single-hotel"]}>
                    <div className = {styles["title-block"]}>
                        <h1 className = "hotel-title">Курорт-парк Союз (МИД)</h1>
                        <p className = {styles["hotel-adress"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
                            veniam facere dolores fugit cumque illo? Enim laborum consequuntur, 
                            ullam voluptas consectetur quis? Aliquid eius quis, consectetur molestiae ipsam id vero?
                        </p>
                    </div>
                    <div className = {styles["hotel-rate-info"]}>
                        <ul className = {styles["hotel-rate__list"]}>
                            <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                            <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                            <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                            <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                            <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-grey"]}`}></li>
                        </ul>
                        <span className = {styles["hotel-rate__reviews"]}>18 отзывов</span>
                        <div className={styles["add-to-favorite"]}>
                            <a href="" className={styles["add-to-favorite__link"]}>добавить в избранное</a>
                        </div>
                    </div>

                    <div className = {styles["map-slider"]}>
                        <div className={styles["hotel-slider"]}>
                            <div className = {styles["hotel-slider__main"]}></div>
                            <div className = {styles["hotel-slider__items"]}>
                                <div className = {styles["hotel-slider__w"]}>
                                    <div className = {styles["hotel-slider__item active"]}></div>
                                    <div className = {styles["hotel-slider__item"]}></div>
                                    <div className = {styles["hotel-slider__item"]}></div>
                                    <div className = {styles["hotel-slider__item"]}></div>
                                    <div className = {styles["hotel-slider__item"]}></div>
                                </div>
                            </div>
                        </div>
                        <div className = {styles["hotel-map"]}>
                            <div className = {styles["hotel-map__place"]}>
                                <span>Координаты: </span>
                                <a href="" className = {styles["hotel-map__coordinates"]}>55.922899, 38.129345</a>
                            </div>
                        </div>
                    </div>
                </section>

                    <section className = {styles["select-dates-content"]}>
                    <div className = {styles["select-dates-form-block"]}>
                        <h2 className = {styles["hotel-title-h2"]}>Номера на&nbsp;
                            <span className = {styles["select-dates-in"]}>16</span>&nbsp;
                            -&nbsp;
                            <span className = {styles["select-dates-in"]}>18</span>&nbsp;
                            <span className = {styles["select-dates-month"]}>июля</span>&nbsp;
                            для &nbsp;
                            <span className = {styles["select-dates-adults"]}>2</span>&nbsp;
                            взрослых и&nbsp;
                            <span className = {styles["select-dates-children"]}>ребенка</span>&nbsp;
                        </h2>

                        <form action="">
                            <div className = {styles["select-dates-form"]}>
                                <div className = {styles["select-dates-form__form"]}>
                                    <div className = {styles["select-form-items"]}>
                                        <div className = {styles["select-form-input-w"]}>
                                            <input type="text" name = "select-form-name" className = {`${styles["select-form-input"]} ${styles["select-form-name"]}`} placeholder="Курорт-парк Союз(МИД)" />
                                        </div>
                                        <div className = {styles["select-form-input-w"]}>
                                            <input type="text" name = "select-form-in" className = {`${styles["select-form-input"]} ${styles["select-form-in"]}`} placeholder="16 июля" />
                                        </div>
                                        <div className = {styles["select-form-input-w"]}>
                                            <input type="text" name = "select-form-out" className = {`${styles["select-form-input"]} ${styles["select-form-out"]}`} placeholder="18 июля"/>
                                        </div>
                                        <div className = {styles["select-form-input-w"]}>
                                            <input type="text" name = "select-form-guests" className = {`${styles["select-form-input"]} ${styles["select-form-guests"]}`} placeholder="3 гостя" />
                                        </div>
                                    </div>
                                </div>
                                <button type = "button" className = {styles["select-dates-form__btn"]}>Найти</button>
                            </div>
                        </form>


                        {blockVisibility == 1 ? <Hotel_search_result /> : ''}
                        {blockVisibility == 2 ? <Rooms_info /> : ''}
                        {blockVisibility == 3 ? <Hotel_rooms_all /> : ''}

                    </div>

                    <div className = {styles["select-dates-nav"]}>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" className = {`${styles["select-dates-link"]} ${styles["select-dates-link-active"]}`}>Поиск номеров</a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" className = {styles["select-dates-link"]}>Описание отеля</a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" className = {styles["select-dates-link"]}>Номера</a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" className = {styles["select-dates-link"]}>Инфраструктура</a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" className = {styles["select-dates-link"]}>Развлечения</a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" className = {styles["select-dates-link"]}>Контакты</a>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Hoteldetail