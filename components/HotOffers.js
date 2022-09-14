import styles from "../styles/HotOffers.module.css"
import HotOfferItem from "./HotOfferItem"

const HotOffers = () => {

    const hotOffers = [
        {'id': 'san_ray_hotel'}, {'id': 'san_ray_hotel'}, {'id': 'san_ray_hotel'}, {'id': 'san_ray_hotel'}, {'id': 'san_ray_hotel'}, {'id': 'san_ray_hotel'}, {'id': 'san_ray_hotel'}, {'id': 'san_ray_hotel'}
    ]

    return (
        <section className = {styles["hot-deals"]}>
            <h2 className = "section-title icon-item icon-item-flame">Горящие предложения</h2>
            <div className = {styles["hot-deals-section"]}>

                {hotOffers.map((item, index) => <HotOfferItem item = {item} key = {index} />)}

            </div>
        </section>
    )
}

export default HotOffers