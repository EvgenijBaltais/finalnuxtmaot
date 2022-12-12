import Hotel_card from "./Hotel_card"
import Hotel_rooms_block from "./Hotel_rooms_block"
import styles from "../../styles/Hoteldetail.module.css"

const Hotel_search_result = ({ items, hotelData, bronPageLink, roomBlocks }) => {

    if (!items) return (
        <div className = {`${styles["select-results"]} block-scrolling-item`} id = "all-rooms">
            <img src = "/images/waiting.gif" className = "waiting-hotel-image-small" />
        </div>
    )

    if (items.length > 0) return (
        <div className = {`${styles["select-results"]} block-scrolling-item`} id = "all-rooms">
            {items.map((item, index) => (

                <Hotel_rooms_block
                bronPageLink = {bronPageLink}
                key = {index}
                item = {item}
                hotelInfo = {hotelData}
            />


            ))}
        </div>
    )
{
    if (items.length == 0) return (
        <div className={`${styles["select-noresults__item"]} block-scrolling-item`} id = "all-rooms">
            <h3>К сожалению свободные номера на ваши Даты закончились</h3>
            <p>Попробуйте указать другие даты</p>
            <span>или</span>
            <p>Выбрать другой отель в том же регионе из списка ниже</p>
        </div>
    )}
}

export default Hotel_search_result