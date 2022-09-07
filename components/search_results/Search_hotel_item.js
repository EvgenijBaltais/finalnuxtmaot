import styles from "../../styles/search_results/Search_hotel_item.module.css"

import Link from "next/link"


export default function Search_hotel_item ({item, nights}) {

    function nightsRightText (nights) {

        let text = nights + ' ночей'

        nights == 1 ? text = nights + ' ночь' : ''
        nights == 2 || nights == 3 || nights == 4 ? text = nights + ' ночи' : ''
        return text
    }

    // Округлить цену, умножить на ночи, разбить на разряды
    function makePriceGreatAgain (price, nights) {
        return (Math.round(parseInt(price)) * nights).toLocaleString()
    }

    return (

        <div className={styles["search-item"]}>
            <div className = {styles["search-item-pics"]}>
                <div className = {styles["search-item-pic"]} style = {{backgroundImage: `url(${item.images[0]})`}}></div>
            </div>
            <div className = {styles["search-item__content"]}>
                <Link href={"/hoteldetail"}>
                    <a className = {styles["search-item__title"]}>{item.name}</a>
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
                    {item.is_all_inclusive ?
                        <span className = {styles["search-rate__foodtype"]}>Все включено</span> : ''
                    }
                </div>
                <ul className = {styles["search-item__list"]}>
                    {item.services.map((item, index) => {
                        return (
                            <li key = {index} className = {styles["search-item__item"]}>{item.group_name}</li>
                        )
                    })}
                </ul>
                {item.address ?
                    <div className = {styles["search-item__adress"]}>
                        {item.address}
                    </div> : ''
                }
            </div>
            <div className = {styles["search-item__broninfo"]}>
                <div className = {styles["search-item__price"]}>
                    <span className = {styles["search-item__price-from"]}>от</span>
                    <span className = {styles["search-item__price-number"]}>{makePriceGreatAgain(item.daily_price, nights)}</span>
                    <span className = {styles["search-item__price-currency"]}>&#8381;</span>
                </div>
                <p className = {styles["search-item__nights"]}>цена за <span className = {styles["search-item__nights-number"]}>{nightsRightText(nights)}</span></p>
                <button className = {styles["search-item__bron"]}>Выбрать</button>
            </div>
        </div>
    )
}