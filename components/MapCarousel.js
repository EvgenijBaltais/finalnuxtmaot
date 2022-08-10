import Image from 'next/image'
import YMap from '/public/images/y-map.jpg'

import styles from "../styles/MapCarousel.module.css"

const MapCarousel = () => {

    return (

        <section className = {styles["map"]}>

            <div className = {styles["map-slider-wrapper"]}>
                <ul className = {styles["map-slider-items"]}>
                    <li className={styles["map-slider-item"]}>
                        <a href = "" className = {styles["map-slider-link"]}>Ростов-на-Дону</a>
                    </li>
                    <li className={styles["map-slider-item"]}>
                        <a href = "" className = {styles["map-slider-link"]}>Краснодар</a>
                    </li>
                    <li className={styles["map-slider-item"]}>
                        <a href = "" className = {styles["map-slider-link"]}>Тула</a>
                    </li>
                    <li className={`${styles["map-slider-item"]} ${styles["active"]}`}>
                        <a href = "" className = {`${styles["map-slider-link"]} ${styles["active"]}`}>Москва</a>
                    </li>
                    <li className={styles["map-slider-item"]}>
                        <a href = "" className = {styles["map-slider-link"]}>Санкт-Петербург</a>
                    </li>
                    <li className={styles["map-slider-item"]}>
                        <a href = "" className = {styles["map-slider-link"]}>Ростов-на-Дону</a>
                    </li>
                </ul>
            </div>
            <div className = {styles["map-slider-nav"]}>
                <div className = {styles["our-offices-left"]}></div>
                <div className = {styles["our-offices-info"]}>Наши офисы расположены по всей России</div>
                <div className = {styles["our-offices-right"]}></div>
            </div>

            <div className = {styles["map-section"]}>
                <div className = {styles["map-info"]}>
                    <h2 className = "section-title icon-item icon-item-direction">Как к нам добраться</h2>
                    <div className = {styles["contact-info-block"]}>
                        <p className = "subtitle-bold">Адрес</p>
                        <span className = "block-span">г. Москва, ул. Бауманская д.6с2. Бизнес-центр Виктория Плаза, 8 этаж, 804 офис</span>
                    </div>
                    <div className = {styles["contact-info-block"]}>
                        <p className = "subtitle-bold">Телефоны</p>
                        <div className = {styles["contact-info__phone"]}>
                            <a href="tel:+74956486711" className = {`${styles["contacts-phone"]} ${styles["contacts-chast"]}`}>+7 495 648 67 11</a>
                            <span className = {styles["contacts-phone-info"]}>Для частных лиц</span>
                        </div>
                        <div className = {styles["contact-info__phone"]}>
                            <a href="tel:+74956624928" className = {`${styles["contacts-phone"]} ${styles["contacts-corp"]}`}>+7 495 662 49 28</a>
                            <span className = {styles["contacts-phone-info"]}>Корпоративный отдел</span>
                        </div>
                    </div>
                    <div className = {styles["contact-info-block"]}>
                        <p className = "subtitle-bold">Мы работаем</p>
                        <span className = "block-span">по будням с 9:00 до 21:00,<br/>по выходным с 11:00 до 18:00</span>
                        <div className = {styles["metro-block"]}>
                            <div className = {styles["metro-item"]}>Бауманская</div>
                            <div className = {styles["metro-item"]}>Красносельская</div>
                        </div>
                    </div>
                </div>
                <div className = {styles["map-block"]}>
                    <Image src = {YMap} className = {styles["y-map"]} alt="" />
                </div>
            </div>
        </section>
    )
}

export default MapCarousel