import styles from "../styles/AboutSection.module.css"

const AboutSection = () => {

    return (

		<section className = {styles["about-section"]}>
			<div className = {styles["about-company"]}>
				<h2 className = {styles["section-title"]}>О компании</h2>
				<div className = {styles["about-company__info"]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut quaerat sint minus dolorum inventore error autem voluptatem beatae eaque blanditiis libero, adipisci deleniti magni fugit debitis a eos? Cupiditate. Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Officia quam corrupti aspernatur alias non minus error animi vitae impedit doloribus porro delectus inventore, laudantium ex nesciunt. Molestias culpa sunt inventore.</div>
				<a href="" className = {styles["about-company__link"]}>Вы можете связаться с нами по вопросам отдыха</a>
			</div>
			<div className = {styles["working-for-you"]}>
				<h2 className = {styles["section-title"]}>Работаем для вас</h2>
				<div className = {styles["about-company__working"]}>
					<div className = {styles["about-company__item"]}>
						<p className = {styles["about-company__subtitle"]}>Подбор индивидуального тура</p>
						<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsum cupiditate officiis enim voluptatem deserunt magni obcaecati a beatae, incidunt sunt suscipit sint soluta aperiam dignissimos et distinctio veritatis! Quia.</span>
					</div>
					<div className = {styles["about-company__item"]}>
						<p className = {styles["about-company__subtitle"]}>Подбор индивидуального тура</p>
						<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsum cupiditate officiis enim voluptatem deserunt magni obcaecati a beatae, incidunt sunt suscipit sint soluta aperiam dignissimos et distinctio veritatis! Quia.</span>
					</div>
					<div className = {styles["about-company__item"]}>
						<p className = {styles["about-company__subtitle"]}>Подбор индивидуального тура</p>
						<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsum cupiditate officiis enim voluptatem deserunt magni obcaecati a beatae, incidunt sunt suscipit sint soluta aperiam dignissimos et distinctio veritatis! Quia.</span>
					</div>
				</div>
			</div>
		</section>
    )
}

export default AboutSection