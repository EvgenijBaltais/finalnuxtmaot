import Image from 'next/image'
import styles from "../styles/HotOffersItem.module.css"

import GoldStarImg from '../assets/images/star.svg'
import GreyStarImg from '../assets/images/grey-star.svg'

const HotOfferItem = () => {

    return (
        <div className = {styles["hot-deal-item"]}>
            <div className = {styles["hot-deal-pic"]}></div>
            <div className = {styles["hot-deal-content"]}>
                <div>
                    <p className = {styles["hot-deal-title"]}>Heliopark thalasso</p>
                    <p className = {styles["hot-deal-text"]}>Новорижское шоссе, 7 км</p>
                    <div className = {styles["hot-deal-rating"]}>
                        <Image src={GoldStarImg} className = {styles["hot-deal-star"]} />
                        <Image src={GoldStarImg} className = {styles["hot-deal-star"]} />
                        <Image src={GoldStarImg} className = {styles["hot-deal-star"]} />
                        <Image src={GoldStarImg} className = {styles["hot-deal-star"]} />
                        <Image src={GoldStarImg} className = {styles["hot-deal-star"]} />
                    </div>
                </div>
                <div className = {styles["hot-deal-price"]}>
                    от <span className = {styles["hot-deal-number"]}>5800</span> руб/сутки
                </div>
            </div>
        </div>
    )
}

export default HotOfferItem