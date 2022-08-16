import Hotel_card from "./Hotel_card"
import styles from "../../styles/Hoteldetail.module.css"

const Hotel_search_result = ({ items }) => {

    return (
        <div className = {styles["select-results"]}>

            <Hotel_card />
        </div>
    )
}

export default Hotel_search_result