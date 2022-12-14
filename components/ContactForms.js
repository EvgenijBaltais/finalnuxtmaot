import React from "react"
import styles from "../styles/ContactForm.module.css"

class ContactForms extends React.Component {

	constructor(props) {
		super(props)
		this.state = { checked: 1, isMobile: 0 }
	}

	componentDidMount() {
		let im = new Inputmask("+7 (999) 999-99-99")

		document.querySelectorAll('input[name = "contacts-phone"]').forEach((item) => {
			im.mask(item)
		})

		this.setState({
			isMobile: window.screen.width < 480
		})
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
									<input type="checkbox" id="subscribe-checkbox-2" className = {styles["konfstylized"]} defaultChecked = {this.state.checked} /> 
									<label htmlFor="subscribe-checkbox-2">
									Я соглашаюсь с политикой конфиденциальности
									</label>
								</div>
								<button className = {styles["contacts-send-btn"]}>Отправить</button>
								<div className = "anim-blick__submit-bg second-anim">
                                    <div className ="anim-blick__submit-obj"></div>
                                </div>
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
									<input type="text"
										name = "get-contacts-subscribe"
										id = "get-contacts-subscribe"
										className = {styles["get-contacts-subscribe"]}
										placeholder = "Укажите свой Email"
										defaultChecked = "true"
									/>
									<div className = {styles["get-contacts-suscribe-btn"]}>
										<button className = {styles["get-contacts-suscribe__submit"]}>
                                            {
												this.state.isMobile
													? <span className={styles["icon-subscribe-inside"]}></span>
													: <span>Подписаться</span>
                                            }
                                        </button>
                                        <div className = "anim-blick__submit-bg">
                                            <div className ="anim-blick__submit-obj"></div>
                                        </div>
									</div>
								</div>
							</div>
							<div className = "subscribe-agree">
								<input type="checkbox" id="subscribe-checkbox-1" className = "substylized" defaultChecked = {this.state.checked} /> 
								<label htmlFor="subscribe-checkbox-1">
								Хочу получать акции и спецпредложения для своих путешествий</label>
							</div>
						</form>
					</div>
					<h2 className = {styles["contacts-callback__title"]}>Подпишитесь на наши соц. сети</h2>
					<div className={styles["contacts-s-w"]}>
						<a className = {styles["contacts-social-tg-rus"]}>Лучшие отели России</a>
						<a className = {styles["contacts-social-tg-pdmsk"]}>Лучшие отели Подмосковья</a>
						<a className = {styles["contacts-social-vk"]}>Все о качественном и доступном отдыхе в&nbsp;Подмосковье</a>
					</div>
					<span className = {styles["contacts-copyright"]}>&#169; 2004-2022. Магазин Отдыха - продажа горящих путевок</span>
				</div>
			</section>
		)
	}
}

export default ContactForms