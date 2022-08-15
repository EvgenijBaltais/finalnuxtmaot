import styles from "../styles/PopularSections.module.css"

const PopularSections = ({popularHotels, popularWays}) => {

    return (
		<section className = {styles["popular-sections"]}>
			<div className = {styles["popular-hotels"]}>
				<h2 className = "section-title icon-item icon-item-hotel">Популярные отели России</h2>
				<div className = {styles["popular-items"]}>

					{popularHotels.map((index, item) => 
						<div className = {styles["popular-item"]} key = {item}>
							<a href="" className = {styles["popular-item__name"]}>{index.name}</a>
							<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
						</div>
					)}
				</div>
			</div>
			<div className = {styles["popular-ways"]}>
				<h2 className = "section-title icon-item icon-item-direction">Популярные направления</h2>

				<div className = {styles["popular-items"]}>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
                    <div className = {styles["popular-item"]}>
						<a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
						<span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
					</div>
				</div>
			</div>
		</section>
    )
}

export default PopularSections