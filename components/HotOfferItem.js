import Link from "next/link"
import styles from "../styles/HotOffersItem.module.css"

const HotOfferItem = ({item}) => {

    let stars = []

    for (let i = 0; i < item.star_rating; i++) {
        stars.push(i)
    }

    return (
        <Link href = {`/hoteldetail?hotel-id=${item.id}`}>
            <a className = {styles["hot-deal-item"]}>
                <div className = {styles["hot-deal-pic"]} style = {{'backgroundImage': `url(${item.image})`}}></div>
                <div className = {styles["hot-deal-content"]}>
                    <div>
                        <p className = {styles["hot-deal-title"]}>{item.name}</p>
                        <p className = {styles["hot-deal-text"]}>{item.adress}</p>

                        <div className = {styles["hot-stars-container-w"]}>
                            {stars.map((item, index) => {
                                return (
                                    <div key = {index} src = "/public/images/star.svg" className = {`${styles["hot-deal-star"]} ${styles["hot-deal-star-gold"]}`}></div>
                                )
                            })}
                        </div>
                    </div>
                    <div className = {styles["hot-deal-price"]}>
                        от <span className = {styles["hot-deal-number"]}>{item.price}</span> руб/сутки
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default HotOfferItem