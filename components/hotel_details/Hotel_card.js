
import Link from "next/link"
import styles from "../../styles/Hoteldetail.module.css"

const Hotel_card = ({props}) => {

    return (
        <div className={styles["select-results__item"]}>

            <div className={styles["select-results__item-pic"]}></div>

            <div className={styles["select-results__item-content"]}>

                <a href=""className={styles["select-item-title"]}>4 местный 23-24 Коттедж с возможностью подселить незнакомых людей</a>

                <div className = {styles["select-item-info"]}>
                    <div className = {styles["serv-item__block"]}>
                        <p>Двуспальная кровать</p>
                        <p>Питание</p>
                        <p>Для некурящих</p>
                        <p>Балкон</p>
                    </div>
                    <div className = {styles["serv-item__btn"]}>
                        Подробнее&nbsp;о&nbsp;номере
                    </div>
                </div>

                <div className={styles["select-results__item-price"]}>
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