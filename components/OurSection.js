import styles from "../styles/OurSection.module.css"

const OurSection = () => {

    return (

		<section className = {styles["our-reviews"]}>
			<h2 className = {styles["section-title"]}>Отзывы о нашей работе</h2>
			<div className = {styles["reviews-slider"]}></div>
		</section>
    )
}

export default OurSection