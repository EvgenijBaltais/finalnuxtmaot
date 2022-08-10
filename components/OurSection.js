import styles from "../styles/OurSection.module.css"

const OurSection = () => {

    return (

		<section className = {styles["our-reviews"]}>
			<h2 className = "section-title icon-item icon-item-reviews">Отзывы о нашей работе</h2>
			<div className = {styles["reviews-slider"]}></div>
		</section>
    )
}

export default OurSection