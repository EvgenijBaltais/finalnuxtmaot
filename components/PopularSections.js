import styles from "../styles/PopularSections.module.css"
import Link from "next/link"

const PopularSections = ({popularHotels, popularWays}) => {

    function setToday () {

        let today = new Date();
            today.setTime(today.getTime());

        return addNullToDate(today.getDate()) + "." + addNullToDate((today.getMonth() + 1)) + "." + today.getFullYear()
    }

    function setTomorrow () {
        var tomorrow = new Date()
            tomorrow.setTime(tomorrow.getTime() + 24 * 60 * 60 * 1000)

            return addNullToDate(tomorrow.getDate()) + "." + addNullToDate((tomorrow.getMonth() + 1)) + "." + tomorrow.getFullYear()
    }

    function addNullToDate(num) {
        return num < 10 ? '0' + num : num
    }

    return (
		<section className = {styles["popular-sections"]}>
			<div className = {styles["popular-hotels"]}>
				<h2 className = "section-title icon-item icon-item-hotel">Популярные отели России</h2>
				<div className = {styles["popular-items"]}>
					{popularHotels.data.map((item, index) => 
                	<div className = {styles["popular-item"]} key = {index}>
                		<div className = {styles["popular-item-pic"]}></div>
                		<div className = {styles["popular-item-content"]}>
							<Link href = {`/hoteldetail?datein=${setToday()}&dateout=${setTomorrow()}&adults=2&hotel_id=${item.id}&region_name=${item.name}`}>
								<a
									className = {styles["popular-item__name"]}>
									{item.name}
								</a>
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
								<Link href = {`/hotels?datein=${setToday()}&dateout=${setTomorrow()}&adults=2&region_id=${item.id}&region_name=${item.name}`}>
									<a 
										className = {styles["popular-item__name"]}>
											{item.name}
									</a>
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
    )
}

export default PopularSections