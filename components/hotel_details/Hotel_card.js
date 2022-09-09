
import { useState, useEffect} from 'react'
import Link from "next/link"
import styles from "../../styles/Hoteldetail.module.css"

const Hotel_card = ({props}) => {

    const [visibleNav, setVisibleNav] = useState(0)

    const [ toDos, setToDos ] = useState(1)
    
    if (!toDos) {
            return (
                <div className={styles["select-noresults__item"]}>
                    <h3>К сожалению свободные номера на ваши Даты закончились</h3>
                    <p>Попробуйте указать другие даты</p>
                    <span>или</span>
                    <p>Выбрать другой отель в том же регионе из списка ниже</p>
                </div>
                )
        }

    return (

        <div className={styles["select-results__item"]}>

            <div className={styles["select-results__item-pic"]}></div>

            <div className={styles["select-results__item-content"]}>

                <a href=""className={styles["select-item-title"]}>4 местный 23-24 Коттедж с возможностью подселить незнакомых людей</a>

                <div className = {styles["select-item-info"]}>
                    <div className = {visibleNav ? `${styles["serv-item__block"]} ${styles["active-serv-list"]}` : styles["serv-item__block"]}>
                        <span>Двуспальная кровать</span>
                        <span>Питание</span>
                        <span>Для некурящих</span>
                        <span>Балкон</span><span>Двуспальная кровать</span>
                        <span>Питание</span>
                        <span>Для некурящих</span>
                        <span>Балкон</span><span>Двуспальная кровать</span>
                        <span>Питание</span>
                        <span>Для некурящих</span>
                        <span>Балкон</span><span>Двуспальная кровать</span>
                        <span>Питание</span>
                        <span>Для некурящих</span>
                        <span>Балкон</span>
                    </div>
                    <div className = {styles["serv-item__btn"]} onClick = {() => setVisibleNav(visibleNav => !visibleNav)}>
                         {visibleNav ? <span className = {styles["serv-active-btn"]}>Скрыть подробное&nbsp;описание</span> : 
                         <span className = {styles["serv-passiv-btn"]}>Подробнее&nbsp;о&nbsp;номере</span>}
                    </div>
                </div>

                <div className={styles["select-results__item-price"]}>
                    <div className={styles["select-results-info"]}>
                        <div className={styles["select-results-guest-info"]}>
                            <span className = {styles["select-results-adults"]}>2</span>&nbsp;
                            <span>взрослых,</span>&nbsp;
                            <span className = {styles["select-results-child"]}>1</span>&nbsp;
                            <span>ребенок</span>
                        </div>
                        <div className = {styles["select-results-from"]}>
                            <span className = {styles["select-from-value"]}>97 000</span>&nbsp;
                            <span className = {styles["select-from-currency"]}>&#8381;</span>
                        </div>
                        <div className = {styles["select-results-from-info"]}>
                            <span>цена за</span>&nbsp;
                            <span className = {styles["select-results-nights"]}>3</span>&nbsp;
                            <span>ночь</span>
                        </div>
                    </div>
                    <Link href = {"/hotelbooking"}>
                        <a className = {styles["select-results-bron"]}>Забронировать</a>
                    </Link>
                </div>

            </div>

            <div className={styles["select-results__item-text"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor accusantium maiores molestiae, 
                itaque atque ratione ipsam quam rem totam magni esse nesciunt, a nostrum harum unde, facere eum deserunt?
            </div>
        </div>
    )
}

export default Hotel_card