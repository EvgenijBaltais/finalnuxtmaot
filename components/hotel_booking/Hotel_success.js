import React from "react"

import styles from "../../styles/Booking_success.module.css"

class Hotel_success extends React.Component {

    render() {

        return (
            <>
                <h3 className="success-title">Спасибо! Ваша заявка принята.</h3>

                <div className={styles["success-status"]}>
                    <div className={styles["success-status__block"]}>
                        <p className={styles["success-status__bold"]}>Номер заказа</p>
                        <p className={styles["success-status__p"]}>4934575</p>
                    </div>
                    <div className={styles["success-status__block"]}>
                        <p className={styles["success-status__bold"]}>Email адрес</p>
                        <p className={styles["success-status__p"]}>mail@mail.ru</p>
                    </div>
                    <div className={styles["success-status__block"]}>
                        <p className={styles["success-status__bold"]}>Имя</p>
                        <p className={styles["success-status__p"]}>Тест</p>
                    </div>
                    <div className={styles["success-status__block"]}>
                        <p className={styles["success-status__bold"]}>Номер</p>
                        <p className={styles["success-status__p"]}>2-местный 1-комнатный стандартный номер</p>
                    </div>
                    <div className={styles["success-status__block"]}>
                        <p className={styles["success-status__bold"]}>Фамилия</p>
                        <p className={styles["success-status__p"]}>Тестов</p>
                    </div>
                    <div className={styles["success-status__block"]}>
                        <p className={styles["success-status__bold"]}>Телефон</p>
                        <p className={styles["success-status__p"]}>+7 (999) 879-57-84</p>
                    </div>
                    <div className={styles["success-status__full"]}>
                        <p className={styles["success-status__bold"]}>Информация об отеле</p>
                        <p className={styles["success-status__p"]}>г. Сочи, Адлерский район, п. Эсто-Садок, ул. Каменка, д. 1</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Hotel_success