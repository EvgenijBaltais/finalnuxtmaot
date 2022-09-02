import { useState, useEffect }  from 'react'
import styles from "../styles/PopularSections.module.css"
import Link from "next/link"

const PopularSections = ({popularHotels, popularWays}) => {

    const [ toDos, setToDos ] = useState()
    const [isLoading, setIsLoading] = useState(false)
/*
    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!toDos) {
        return <p>No List to show</p>
    }
*/
    return (
		<section className = {styles["popular-sections"]}>
			<div className = {styles["popular-hotels"]}>
				<h2 className = "section-title icon-item icon-item-hotel">Популярные отели России</h2>
				<div className = {styles["popular-items"]}>
					{popularHotels.data.map((item, index) => 
						
                	<div className = {styles["popular-item"]} key = {index}>
                		<div className = {styles["popular-item-pic"]}></div>
                		<div className = {styles["popular-item-content"]}>
							<Link href = {{ pathname: 'hoteldetail', query: {'hotel-id': item.id}}}>
								<a className = {styles["popular-item__name"]}>{item.name}</a>
							</Link>
							<p className = {styles["popular-item__adress"]}>от Республика Крым, г. Ялта, пгт. Отрадное, ул. М. Тореза, 8 Б.{item.adress}</p>
						</div>
					</div>
					)}
				</div>
			</div>
			<div className = {styles["popular-ways"]}>
				<h2 className = "section-title icon-item icon-item-direction">Популярные направления</h2>
				<div className = {styles["popular-way-items"]}>
					{popularWays.data.map((item, index) => 
						<div className = {styles["popular-way-item"]} key = {index}>

                			<div className = {styles["popular-way-pic"]}></div>
                			<div className = {styles["popular-way-content"]}>
								<a href="" className = {styles["popular-item__name"]}>{item.name}</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
    )
}

export default PopularSections