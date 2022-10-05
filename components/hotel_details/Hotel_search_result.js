import Hotel_card from "./Hotel_card"
import { useRouter } from 'next/router'
import styles from "../../styles/Hoteldetail.module.css"

const Hotel_search_result = ({ items }) => {

    const { query } = useRouter()
    
    let datein = new Date(query.datein.slice(6, 10), query.datein.slice(3, 5), query.datein.slice(0, 2))
    let dateout = new Date(query.dateout.slice(6, 10), query.dateout.slice(3, 5), query.dateout.slice(0, 2))
    let nights = (dateout - datein) / (60 * 60 * 24 * 1000)

    if (!items) return (
        <div className = {styles["select-results"]}>Загрузка...</div>
    )

    if (items.length > 0) return (
        <div className = {styles["select-results"]}>
            {items.map((item, index) => (
                <Hotel_card key = {index} item = {item} adults = {query.adults || 2} children = {query.children_ages || []} nights = {nights}  />
            ))}
        </div>
    )
{
    if (items.length == 0) return (
        <div className={styles["select-noresults__item"]}>
            <h3>К сожалению свободные номера на ваши Даты закончились</h3>
            <p>Попробуйте указать другие даты</p>
            <span>или</span>
            <p>Выбрать другой отель в том же регионе из списка ниже</p>
        </div>
    )}
}

export default Hotel_search_result