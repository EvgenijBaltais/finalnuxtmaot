
import Link from "next/link"
import styles from "../../styles/Hoteldetail.module.css"

const Hotel_card = ({props}) => {

    return (
        <div className={styles["select-results__item"]}>
            <div className={styles["select-results__item-pic"]}></div>
            <div className={styles["select-results__item-content"]}>
                <a href=""className={styles["select-item-title"]}>4 местный 23-24 коттедж</a>
                <div className = {styles["select-item-info"]}>
                    <div className = {`${styles["select-item__block"]} ${styles["select-item__in"]}`}>
                        <span className = {styles["select-item__text"]}>Заезд:</span>&nbsp;
                        <span className = {`${styles["select-item__value"]} ${styles["select-item__in"]}`}>16.07.2022</span>
                    </div>
                    <div className = {`${styles["select-item__block"]} ${styles["select-item__adults"]}`}>
                        <span className = {styles["select-item__text"]}>Взрослых:</span>&nbsp;
                        <span className = {`${styles["select-item__value"]} ${styles["select-item__adults"]}`}>2</span>
                    </div>
                    <div className = {`${styles["select-item__block"]} ${styles["select-item__out"]}`}>
                        <span className = {styles["select-item__text"]}>Выезд:</span>&nbsp;
                        <span className = {`${styles["select-item__value"]} ${styles["select-item__out"]}`}>18.07.2022</span>
                    </div>
                    <div className = {`${styles["select-item__block"]} ${styles["select-item__children"]}`}>
                        <span className = {styles["select-item__text"]}>Детей:</span>&nbsp;
                        <span className = {`${styles["select-item__value"]} ${styles["select-item__children"]}`}>1</span>
                    </div>
                </div>
            </div>
            <div className={styles["select-results__item-price"]}>
                <div className={styles["select-results-price-info"]}>
                    <span className = {styles["select-results-price"]}>90 000</span>&nbsp;
                    <span className = {styles["select-results-currency"]}>&#8381;</span>&nbsp;
                    <span>за</span>&nbsp;
                    <span className = {styles["select-results-nights"]}>3</span>&nbsp;
                    <span>ночи</span>
                </div>
                <div className = {styles["select-results-from"]}>
                    <span>от</span>&nbsp;
                    <span className = {styles["select-from-value"]}>30 000</span>&nbsp;
                    <span className = {styles["select-from-currency"]}>&#8381;</span>
                </div>
                <div className = {styles["select-results-from-info"]}>
                    <span>цена за</span>&nbsp;
                    <span className = {styles["select-results-nights"]}>1</span>&nbsp;
                    <span>ночь</span>
                </div>
                <Link href = {"/hotelbooking"}>
                    <a className = {styles["select-results-bron"]}>Забронировать</a>
                </Link>
            </div>
            <div className={styles["select-results__item-text"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor accusantium maiores molestiae, 
                itaque atque ratione ipsam quam rem totam magni esse nesciunt, a nostrum harum unde, facere eum deserunt?
            </div>
        </div>
    )
}

export default Hotel_card