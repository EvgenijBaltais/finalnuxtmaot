import styles from "../styles/VacancyBanner.module.css"

const VacancyBanner = () => {

    return (

		<section className = {styles["vacancy-banner"]}>
			<div className = {styles["vacancy-banner__info"]}>
				<h2 className = {styles["vacancy-title"]}>Работа в сфере туризма!</h2>
				<p className = {styles["vacancy-subtitle"]}>Мы ищем менеджера по продажам во внутреннем туризме.</p>
			</div>
			<div className = {styles["vacancy-banner__btn"]}>
				<p className = {styles["vacancy-banner__p"]}>Никаких холодных звонков, клиенты звонят сами!</p>
			</div>
		</section>
    )
}

export default VacancyBanner