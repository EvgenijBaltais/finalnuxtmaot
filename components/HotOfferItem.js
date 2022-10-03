import Link from "next/link"
import styles from "../styles/HotOffersItem.module.css"

const HotOfferItem = ({item}) => {

    return (
        <Link href = {`/hoteldetail?hotel-id=${item.id}`}>
            <a className = {styles["hot-deal-item"]}>
                <div className = {styles["hot-deal-pic"]}></div>
                <div className = {styles["hot-deal-content"]}>
                    <div>
                        <p className = {styles["hot-deal-title"]}>Heliopark thalasso</p>
                        <p className = {styles["hot-deal-text"]}>Новорижское шоссе, 7 км</p>
                    </div>
                    <div className = {styles["hot-deal-price"]}>
                        от <span className = {styles["hot-deal-number"]}>5800</span> руб/сутки
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default HotOfferItem