
import { useState, useEffect} from 'react'
import { Router } from 'next/router'

import Head from 'next/head'

import Hotel_search_result from "../components/hotel_details/Hotel_search_result"
import Rooms_info from "../components/hotel_details/Rooms_info"
import Hotel_rooms_all from "../components/hotel_details/Hotel_rooms_all"  
import styles from "../styles/Hoteldetail.module.css"

function Hoteldetail (props) {

   // const [post, setPost] = useState(serverPost)

    const hotel = useState(props.hotel)
    const hotelData = hotel[0].data

    const [active_block, setActive_block] = useState(1)

    const changeBlock = e => {

        e.preventDefault()
        setActive_block(e.target.getAttribute('data-value'))
    }

        return (
            <>
                <Head>
                    <title>  - СКИДКИ! доставка путевок, онлайн-бронирование - {hotelData.rus_name} - Магазин отдыха</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <section className = {styles["single-hotel"]}>
                    <div className={styles["titles-top"]}>
                        <div className = {styles["title-block"]}>
                            {hotelData.rus_name ? <h1 className = "hotel-title">{hotelData.rus_name}</h1> : ''}
                            {hotelData.adress ? <p className = {styles["hotel-adress"]}>{hotelData.adress}</p> : ''}
                        </div>
                        <div className = {styles["hotel-rate-info"]}>
                            <ul className = {styles["hotel-rate__list"]}>
                                <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                                <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                                <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                                <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                                <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-grey"]}`}></li>
                            </ul>
                            <span className = {styles["hotel-rate__reviews"]}>{hotelData.reviews.length} отзывов</span>
                            <div className={styles["add-to-favorite"]}>
                                <a className={styles["add-to-favorite__link"]}>добавить в избранное</a>
                            </div>
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
                            {hotelData.latitude && hotelData.longitude ?
                                <div className = {styles["hotel-map__place"]}>
                                    <span>Координаты: </span>
                                    <a className = {styles["hotel-map__coordinates"]}>{hotelData.latitude}, {hotelData.longitude}</a>
                                </div> : ''
                            }
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
                                            <input 
                                                type="text"
                                                name = "select-form-name"
                                                className = {`${styles["select-form-input"]} ${styles["select-form-name"]}`}
                                                placeholder={hotelData.rus_name}
                                                defaultValue={hotelData.rus_name}
                                            />
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


                        {active_block == 1 ? <Hotel_search_result /> : ''}
                        {active_block == 2 ? <Rooms_info /> : ''}
                        {active_block == 3 ? <Hotel_rooms_all /> : ''}

                    </div>

                    <div className = {styles["select-dates-nav"]}>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" 
                                data-value = "1" 
                                onClick={changeBlock} 
                                className = {`${styles["select-dates-link"]} ${active_block == 1 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Поиск номеров
                            </a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" 
                                data-value = "2" 
                                onClick={changeBlock} 
                                className = {`${styles["select-dates-link"]} ${active_block == 2 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Описание отеля
                            </a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href="" 
                                data-value = "3" 
                                onClick={changeBlock} 
                                className = {`${styles["select-dates-link"]} ${active_block == 3 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Номера
                            </a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href=""
                                data-value = "4"
                                onClick={changeBlock}
                                className = {`${styles["select-dates-link"]} ${active_block == 4 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Инфраструктура
                            </a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href=""
                                data-value = "5"
                                onClick={changeBlock}
                                className = {`${styles["select-dates-link"]} ${active_block == 5 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Развлечения
                            </a>
                        </div>
                        <div className = {styles["select-dates-item"]}>
                            <a href=""
                                data-value = "6"
                                onClick={changeBlock}
                                className = {`${styles["select-dates-link"]} ${active_block == 6 ? styles["select-dates-link-active"] : ''}`}
                            >
                                Контакты
                            </a>
                        </div>
                    </div>
                        </section>
            </>
        )
}

export const getServerSideProps = async ({ query, req }) => {

    if (!req) {
        return {
            hotel: null
        }
    }

    const response = await fetch(`http://hotelsystem.local/api/load?id=${ query['hotel-id'] }`)
    const hotel = await response.json()

    return {
        props: {
            hotel
        },
    }
}

export default Hoteldetail