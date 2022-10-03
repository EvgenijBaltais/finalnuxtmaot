const Footer = () => {
    
    return (
		<footer className = "footer">
			<div className = "footer-col footer-col-1">
				<h3 className = "footer-col-title">Контакты с нами</h3>
				<div className = "footer-phones">
					<div className = "footer-phones__item">
						<a href="+74956486711" className = "footer-phone">+7 495 648 67 11</a>
						<span className = "footer-phone-info"> Для&nbsp;частных&nbsp;лиц</span>
					</div>
					<div className = "footer-phones__item">
						<a href="+74956624928" className = "footer-phone">+7 495 662 49 28</a>
						<span className = "footer-phone-info"> Корпоративный&nbsp;отдел</span>
					</div>
				</div>
				<div className = "working-time">
					<h3 className = "footer-title-small">Мы работаем</h3>
					<p className = "footer-title-p">по будням с 9:00 до 21:00</p>
					<p className = "footer-title-p">по выходным с 11:00 до 18:00</p>
				</div>
				<div className = "footer-address">
					<h3 className = "footer-title-small">Адрес</h3>
					<p className="footer-title-p">г.&nbsp;Москва, ул.&nbsp;Бауманская д.6с2. Бизнес-центр Виктория Плаза, 8&nbsp;этаж, 804&nbsp;офис</p>
				</div>
			</div>
			<div className = "footer-col footer-col-2">
				<h3 className = "footer-col-title">Наши офисы</h3>
				<div className = "footer-places">
					<a href="" className = "footer-place-item">Москва</a>
					<a href="" className = "footer-place-item">Санкт-Петербург</a>
					<a href="" className = "footer-place-item">Ростов-на-Дону</a>
					<a href="" className = "footer-place-item">Краснодар</a>
					<a href="" className = "footer-place-item">Тула</a>
				</div>
			</div>
			<div className = "footer-col footer-col-3">
				<h3 className = "footer-col-title">Соц. сети</h3>
				<div className = "footer-social-items">
					<a href="" className = "footer-social-item">Лучшие отели России</a>
					<a href="" className = "footer-social-item">Лучшие отели Подмосковья</a>
					<a href="" className = "footer-social-item">Все о качественном и доступном отдыхе в&nbsp;Подмосковье</a>
				</div>
			</div>
			<div className = "footer-col footer-col-4">
				<h3 className = "footer-col-title">Оплата</h3>

				<div className = "payment-methods">
					<div className = "payment-method payment-method-visa"></div>
					<div className = "payment-method payment-method-vmp"></div>
					<div className = "payment-method payment-method-prom"></div>
				</div>
			</div>

			<div className = "footer-copyright">&#169; 2004-2022 МАОТ</div>
		</footer>
    )
}

export default Footer