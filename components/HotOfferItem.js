import Link from "next/link"
import Image from 'next/image'
import styles from "../styles/HotOffersItem.module.css"

import GoldStarImg from '/public/images/star.svg'
import GreyStarImg from '/public/images/grey-star.svg'

const HotOfferItem = () => {

    return (
        <Link href = {"/hoteldetail"}>
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