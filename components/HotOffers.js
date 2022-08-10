import styles from "../styles/HotOffers.module.css"
import HotOfferItem from "./HotOfferItem"

const HotOffers = () => {

    const hotOffers = [
        {}, {}, {}, {}, {}, {}, {}
    ]

    return (
        <section className = {styles["hot-deals"]}>
            <h2 className = "section-title icon-item icon-item-flame">Горящие предложения</h2>
            <div className = {styles["hot-deals-section"]}>

                {hotOffers.map((item, index) =>  <HotOfferItem items = {item} key = {index} />)}

            </div>
        </section>
    )
}

export default HotOffers