import styles from "../../styles/search_results/Search_hotel_item.module.css"

import Link from "next/link"


export default function Search_hotel_item (props) {

    return (

        <div className={styles["search-item"]}>
            <div className = {styles["search-item-pic"]}></div>
            <div className = {styles["search-item__content"]}>
                <Link href={"/hoteldetail"}>
                    <a className = {styles["search-item__title"]}>{props.item.name}</a>
                </Link>
                <div className = {styles["search-item__rate"]}>
                    <ul className={styles["search-rate__list"]}>
                        <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                        <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                        <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                        <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                        <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-grey"]}`}></li>
                    </ul>
                    <span className = {styles["search-rate__reviews"]}>18 отзывов</span>
                    {props.item.is_all_inclusive ?
                        <span className = {styles["search-rate__foodtype"]}>Все включено</span> : ''
                    }
                </div>
                <ul className = {styles["search-item__list"]}>
                    {props.item.services.map((item, index) => {
                        return (
                            <li key = {index} className = {styles["search-item__item"]}>{item.group_name}</li>
                        )
                    })}
                </ul>
                <div className = {styles["search-item__adress"]}>
                    В 30 км. от МКАД по Симферопольскому шоссе, поворот налево, потом направо, потом налево
                </div>
            </div>
            <div className = {styles["search-item__broninfo"]}>
                <div className = {styles["search-item__price"]}>
                    <span className = {styles["search-item__price-from"]}>от</span>
                    <span className = {styles["search-item__price-number"]}>30 000</span>
                    <span className = {styles["search-item__price-currency"]}>&#8381;</span>
                </div>
                <p className = {styles["search-item__nights"]}>цена за <span className = {styles["search-item__nights-number"]}>1</span> ночь</p>
                <button className = {styles["search-item__bron"]}>Выбрать</button>
            </div>
        </div>
    )
}