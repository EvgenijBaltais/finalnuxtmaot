import React from "react"

import styles from "../styles/Hotelbooking.module.css"

class Hotelbooking extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        document.querySelector('.wrapper').classList.add('hotel-bron-page')
    }

    componentWillUnmount() {
        document.querySelector('.wrapper').classList.remove('hotel-bron-page')
    }

    render() {

        return (
            <>
                <h1 className = "secondary-h1">Бронирование</h1>

                <div className = {styles["hotel-book-w"]}>

                        <div className={styles["hotel-slider"]}>
                            <div class = {styles["arrow-left"]}></div>
                            <div class = {styles["arrow-right"]}></div>
                        </div>
                        <div className={styles["hotel-info"]}>
                            <a href=""className={styles["hotel-item-title"]}>4 местный коттедж №34 VIP с балконом и ванной. Площадь 62 метра</a>
                            <div>
                                <p className={styles["hotel-info-text"]}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                 elit. Sed dicta aliquam voluptatem, quo itaque repellat molestias vel voluptatum 
                                 debitis totam consequatur ex provident possimus quaerat eos. Obcaecati molestiae atque vel!</p>
                            </div>
                        </div>
                        <div className={styles["hotel-details"]}>
                            <div className = {styles["hotel-details-in-w"]}>
                                <span className={styles["hotel-details-in__bold"]}>Заезд:</span>&nbsp;<span className={styles["hotel-details-in"]}>16.07.2022</span>
                            </div>
                            <div className = {styles["hotel-details-adults-w"]}>
                                <span className={styles["hotel-details-adults__bold"]}>Взрослых:</span>&nbsp;<span className={styles["hotel-details-adults"]}>2</span>
                            </div>
                            <div className = {styles["hotel-details-out-w"]}>
                                <span className = {styles["hotel-details-out__bold"]}>Выезд:</span>&nbsp;<span className={styles["hotel-details-out"]}>18.08.2022</span>
                            </div>
                            <div className = {styles["hotel-details-children-w"]}>
                                <span className = {styles["hotel-details-children__bold"]}>Детей:</span>&nbsp;<span className={styles["hotel-details-children"]}>1</span>
                            </div>

                            <div className = {styles["hotel-details-result"]}>
                                <p className = {styles["hotel-details-result__p"]}>Итоговая цена:</p>
                                <p className = {styles["hotel-details-result__num"]}>83 600 &#8381;</p>
                            </div>
                            <div className = {styles["hotel-details-nights"]}>
                                2 ночи
                            </div>
                        </div>
                </div>


                <div className = {styles["hotel-book-bron"]}>
                    <h2 className="single-block-title">Ваши личные данные</h2>
                    <form action="" className = {styles["hotel-book-form"]}>
                        <div className = {styles["book-bron-l"]}>
						    <input 
                                type="text" 
                                name = "book-bron-name" 
                                className = {`${styles["book-bron-form__input"]} ${styles["book-bron-form__name"]}`} 
                                placeholder="Имя"
                            />
						    <input
                                type="text"
                                name = "book-bron-company"
                                className = {`${styles["book-bron-form__input"]} ${styles["book-bron-form__company"]}`}
                                placeholder="Название компании"
                            />
						    <input
                                type="text"
                                name = "book-bron-email"
                                className = {`${styles["book-bron-form__input"]} ${styles["book-bron-form__email"]}`}
                                placeholder="Email"
                            />
						    <input
                                type="text"
                                name = "book-bron-phone"
                                className = {`${styles["book-bron-form__input"]} ${styles["book-bron-form__phone"]}`}
                                placeholder="Телефон"
                            />
                        </div>
                        <div className = {styles["book-bron-r"]}>
                            <textarea name="book-bron-textarea" className = {styles["book-bron__textarea"]} placeholder="Комментарий"></textarea>
                        </div>
                        <div className = {styles["hotel-book-btn-area"]}>
                            <div className = "subscribe-agree">
                                <input type="checkbox" id="subscribe-checkbox-1" className = "stylized" checked /> <label htmlFor="subscribe-checkbox-1">
                                Соглашаюсь с политикой конфиденциальности</label>
                            </div>
							<button className = {styles["book-bron-send-btn"]}>Далее</button>
						</div>
                    </form>
                </div>
            </>
        )
    }
}

export default Hotelbooking