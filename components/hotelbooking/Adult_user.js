import styles from "/styles/hotelbooking/Adult_user.module.css"
import { useEffect } from "react";
import Inputmask from "inputmask";

export default function Adult_user ({number}) {

    useEffect(() => {

        if (!document.querySelectorAll('.hotel-bron-input-phone').length) return

        let im = new Inputmask("+7 (999) 999-99-99")

        document.querySelectorAll('.hotel-bron-input-phone').forEach((item) => {
            im.mask(item)
        })
    }, [])

    function chooseData () {

        console.log(event.target)

        event.target.parentElement.parentElement.classList.contains('opened-list') && event.target.classList.contains('hotel-bron-clickarea') ?
        event.target.parentElement.parentElement.classList.remove('opened-list') :
        event.target.parentElement.parentElement.classList.add('opened-list')
    }

    function chooseVariant () {
        console.log(event.target.innerText)
        event.target.parentElement.querySelector('.hotel-bron-inside__default').innerText = event.target.innerText
        event.target.parentElement.parentElement.parentElement.classList.remove('opened-list')
    }

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
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]} hotel-bron-citizenship`} onClick = {chooseData}>
                    <div className={`${styles["hotel-bron-block"]} ${styles["hotel-bron-input-citizenship"]} hotel-bron-input-citizenship`}>
                        <div className={`${styles["hotel-bron-clickarea"]} hotel-bron-clickarea`}></div>
                        <div className={`${styles["hotel-bron-input-arrow"]} hotel-bron-input-arrow`}></div>
                        <div className={styles["hotel-bron-inside"]}>
                            <div className = {`${styles["hotel-bron-inside__item"]} ${styles["hotel-bron-inside__default"]} hotel-bron-inside__default`}>Гражданство</div>
                            <div className={`${styles["hotel-bron-inside__item"]} hotel-bron-inside__item`} onClick = {chooseVariant}>Российская Федерация</div>
                            <div className={`${styles["hotel-bron-inside__item"]} hotel-bron-inside__item`} onClick = {chooseVariant}>Иное</div>
                        </div>
                    </div>
                </div>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]} hotel-bron-sex`} onClick = {chooseData}>
                    <div className={`${styles["hotel-bron-block"]} ${styles["hotel-bron-input-sex"]} hotel-bron-input-sex`}>
                        <div className={`${styles["hotel-bron-clickarea"]} hotel-bron-clickarea`}></div>
                        <div className={`${styles["hotel-bron-input-arrow"]} hotel-bron-input-arrow`}></div>
                        <div className={styles["hotel-bron-inside"]}>
                            <div className = {`${styles["hotel-bron-inside__item"]} ${styles["hotel-bron-inside__default"]} hotel-bron-inside__default`}>Пол</div>
                            <div className={styles["hotel-bron-inside__item"]} onClick = {chooseVariant}>Мужской</div>
                            <div className={styles["hotel-bron-inside__item"]} onClick = {chooseVariant}>Женский</div>
                        </div>
                    </div>
                </div>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]}`}>
                    <input type="text" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-phone"]} hotel-bron-input-phone`} placeholder = "Телефон" />
                </div>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]} ${styles["hotel-bron-necessarily-wrong"]}`}>
                    <input type="text" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-email"]}`} placeholder = "Email" />
                </div>
            </div>
        </div>
    )
}