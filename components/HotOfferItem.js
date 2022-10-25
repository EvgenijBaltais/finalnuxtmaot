import Link from "next/link"
import styles from "../styles/HotOffersItem.module.css"

const HotOfferItem = ({item}) => {

    return (
        <Link href = {`/hoteldetail?hotel-id=${item.id}`}>
            <a className = {styles["hot-deal-item"]}>
                <div className = {styles["hot-deal-pic"]} style = {{'backgroundImage': `url(${item.image})`}}></div>
                <div className = {styles["hot-deal-content"]}>
                    <div>
                        <p className = {styles["hot-deal-title"]}>{item.name}</p>
                        <p className = {styles["hot-deal-text"]}>{item.adress}</p>
                        <div>

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