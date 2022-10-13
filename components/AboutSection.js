import styles from "../styles/AboutSection.module.css"

const AboutSection = () => {

    return (

		<section className = {styles["about-section"]}>
			<div className = {styles["about-company"]}>
				<h2 className = "section-title icon-item icon-item-business">О компании</h2>
				<div className = {styles["about-company__info"]}>
				Компания «Магазин Отдыха», специализирующаяся на внутреннем туризме, была основана в 2004 году.
				 За годы работы на рынке услугами компании воспользовались сотни тысяч людей по всей России.
				  Огромное количество ежедневных обращений говорит о том, что мы выбрали правильное направление развития.
				   А большое количество постоянных клиентов – лучший показатель профессионализма сотрудников, 
				   которые удовлетворяют желания даже самых требовательных клиентов.
				</div>
				<a href="" className = {styles["about-company__link"]}>Вы можете связаться с нами по вопросам отдыха</a>
			</div>
			<div className = {styles["working-for-you"]}>
				<h2 className = "section-title icon-item icon-item-people">Работаем для вас</h2>
				<div className = {styles["about-company__working"]}>
					<div className = {styles["about-company__item"]}>
						<p className = {styles["about-company__subtitle"]}>Подбор индивидуального тура</p>
						<span>
						С Вами будет работать ПЕРСОНАЛЬНЫЙ менеджер, который поможет с выбором тура, чтобы отдых соответствовал Вашим ожиданиям.
						</span>
					</div>
					<div className = {styles["about-company__item"]}>
						<p className = {styles["about-company__subtitle"]}>Подбор индивидуального тура</p>
						<span>Наши цены Вас приятно удивят. Система скидок и постоянные акции не оставят равнодушным ни одного клиента.</span>
					</div>
					<div className = {styles["about-company__item"]}>
						<p className = {styles["about-company__subtitle"]}>Подбор индивидуального тура</p>
						<span>Мы заботимся о каждом клиенте, полное сопровождение от начала оформления заявки и до заселения.</span>
					</div>
				</div>
			</div>
		</section>
    )
}

export default AboutSection