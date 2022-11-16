import styles from "../../styles/Hoteldetail.module.css"

const Hotel_service = ({services}) => {
    return (
        <div className={`${styles["result-description"]} block-scrolling-item`} id = "hotel-service">
            <h2 className = "section-title icon-item icon-item-serv">Услуги</h2>
            <div className = {`${styles["hotel-title-section"]} ${styles["hotel-serv-descr"]}`}>
                {services.map((item, index) => {
                    return item.amenities.length > 0 ? (
                        <div key = {index}className={styles["serv-type-section"]}>
                            <h3>{item.group_name}</h3>
                            <ul className={styles["serv-list"]}>
                                {item.amenities.map((item2, index2) => {
                                    return (
                                        <li key = {index2}>{item2}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    ) : ('')
                })}
            </div>
        </div>
    )
}

export default Hotel_service