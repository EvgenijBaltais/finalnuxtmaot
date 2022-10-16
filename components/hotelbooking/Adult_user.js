import styles from "/styles/hotelbooking/Adult_user.module.css"

export default function Adult_user ({number}) {

    return (
        <div className={styles["hotel-bron-ready__guest"]}>
            <p className={styles["guest-text-title"]}>Гость {number} <span>(покупатель)</span></p>
            <div className={styles["hotel-bron-inputs-w"]}>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]}`}>
                    <input type="text" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-surname"]}`} placeholder = "Фамилия" />
                </div> 
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]}`}>
                    <input type="text" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-name"]}`} placeholder = "Имя" />
                </div>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-not-necessarily"]}`}>
                    <input type="text" className={`
                        ${styles["hotel-bron-input"]}
                        ${styles["hotel-bron-input-patronymic"]}`}
                    placeholder = "Отчество" />
                </div>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]}`}>
                    <div className={`${styles["hotel-bron-block"]} ${styles["hotel-bron-input-citizenship"]}`}>
                        <div className={styles["hotel-bron-input-arrow"]}></div>
                        <div className={styles["hotel-bron-inside"]}>
                            <div className = {`${styles["hotel-bron-inside__item"]} ${styles["hotel-bron-inside__default"]}`}>Гражданство</div>
                            <div className={styles["hotel-bron-inside__item"]}>Российская Федерация</div>
                            <div className={styles["hotel-bron-inside__item"]}>Иное</div>
                        </div>
                    </div>
                </div>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]}`}>
                    <div className={`${styles["hotel-bron-block"]} ${styles["hotel-bron-input-sex"]}`}>
                        <div className={styles["hotel-bron-input-arrow"]}></div>
                        <div className={styles["hotel-bron-inside"]}>
                            <div className = {`${styles["hotel-bron-inside__item"]} ${styles["hotel-bron-inside__default"]}`}>Пол</div>
                            <div className={styles["hotel-bron-inside__item"]}>Мужской</div>
                            <div className={styles["hotel-bron-inside__item"]}>Женский</div>
                        </div>
                    </div>
                </div>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]}`}>
                    <input type="text" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-phone"]}`} placeholder = "Телефон" />
                </div>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]} ${styles["hotel-bron-necessarily-wrong"]}`}>
                    <input type="text" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-email"]}`} placeholder = "Email" />
                </div>
            </div>
        </div>
    )
}