import React from "react"
import styles from "../styles/ContactForm.module.css"
import Inputmask from "inputmask";

class ContactForms extends React.Component {

	componentDidMount() {


		let im = new Inputmask("+7 (999) 999-99-99")
			im.mask(document.querySelector('input[name = "contacts-phone"]'))

	}
  
	componentWillUnmount() {
	}

	render() {
		return (
			<section className = {styles["contacts-form"]}>
				<div className = {styles["contacts-callback"]}>
					<h2 className = {styles["contacts-callback__title"]}>Свяжитесь с нами</h2>
					<form action="" name = "contacts-form">
						<div className = {styles["contacts-form-w"]}>
							<input type="text" name = "contacts-name" className = {`${styles["contacts-form__input"]} ${styles["contacts-form__name"]}`} placeholder="Имя" />
							<input type="text" name = "contacts-company" className = {`${styles["contacts-form__input"]} ${styles["contacts-form__company"]}`} placeholder="Название компании" />
							<input type="text" name = "contacts-email" className = {`${styles["contacts-form__input"]} ${styles["contacts-form__email"]}`} placeholder="Email" />
							<input type="text" name = "contacts-phone" className = {`${styles["contacts-form__input"]} ${styles["contacts-form__phone"]}`} placeholder="Телефон" />
							<textarea name="contacts-textarea" className = {styles["contacts-form__textarea"]} placeholder="Сообщение"></textarea>
							<div className = {styles["contacts-btn-area"]}>
								<div className = {styles["contacts-agree"]}>
									Я соглашаюсь с политикой конфиденциальности
								</div>
								<button className = {styles["contacts-send-btn"]}>Отправить</button>
							</div>
						</div>
					</form>
				</div>
				<div className = {styles["contacts-subscribe"]}>
					<h2 className = {styles["contacts-callback__title"]}>Подпишитесь на лучшие предложения</h2>
					<div className = {styles["contacts-s-w"]}>
						<form action="" name = "contacts-subscribe-form">
							<div className = {styles["contacts-subscribe-form"]}>
								<div className={styles["contacts-subscribe-form-inside"]}>
									<input type="text" name = "get-contacts-subscribe" id = "get-contacts-subscribe" className = {styles["get-contacts-subscribe"]} placeholder = "Укажите свою электронную почту" />
									<div className = {styles["get-contacts-suscribe-btn"]}>
										<button className = {styles["get-contacts-suscribe__submit"]}>Подписаться</button>
									</div>
								</div>
							</div>
							<div className = "subscribe-agree">
								<input type="checkbox" id="subscribe-checkbox-1" className = "stylized" /> <label htmlFor="subscribe-checkbox-1">
								Хочу получать акции и спецпредложения для своих путешествий</label>
							</div>
						</form>
					</div>
					<h2 className = {styles["contacts-callback__title"]}>Подпишитесь на наши соц. сети</h2>
					<div className={styles["contacts-s-w"]}>
						<a className = {styles["contacts-social-tg-rus"]}>Лучшие отели России</a>
						<a className = {styles["contacts-social-tg-pdmsk"]}>Лучшие отели Подмосковья</a>
						<a className = {styles["contacts-social-vk"]}>Все о качественном и доступном отдыхе в Подмосковье</a>
					</div>
					<span className = {styles["contacts-copyright"]}>&#169; 2004-2022. Магазин Отдыха - продажа горящих путевок</span>
				</div>
			</section>
		)
	}
}

export default ContactForms