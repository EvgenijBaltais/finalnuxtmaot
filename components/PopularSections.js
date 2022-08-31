import styles from "../styles/PopularSections.module.css"
import Link from "next/link"

const PopularSections = ({popularHotels, popularWays}) => {

    return (
		<section className = {styles["popular-sections"]}>
			<div className = {styles["popular-hotels"]}>
				<h2 className = "section-title icon-item icon-item-hotel">Популярные отели России</h2>
				<div className = {styles["popular-items"]}>
					{popularHotels.data.map((item, index) => 
						<div className = {styles["popular-item"]} key = {index}>
							<Link href = {{ pathname: 'hoteldetail', query: {'hotel-id': item.id}}}>
								<a className = {styles["popular-item__name"]}>{item.name}</a>
							</Link>
							<span className = {styles["popular-item__price"]}>от {item.price} &#8381;</span>
						</div>
					)}
				</div>
			</div>
			<div className = {styles["popular-ways"]}>
				<h2 className = "section-title icon-item icon-item-direction">Популярные направления</h2>
				<div className = {styles["popular-items"]}>
					{popularWays.data.map((item, index) => 
						<div className = {styles["popular-item"]} key = {index}>
							<a href="" className = {styles["popular-item__name"]}>{item.name}</a>
							<span className = {styles["popular-item__price"]}>от {item.price} &#8381;</span>
						</div>
					)}
				</div>
			</div>
		</section>
    )
}

export default PopularSections