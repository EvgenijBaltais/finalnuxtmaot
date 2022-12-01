import styles from "/styles/hotelbooking/Adult_user.module.css"
import { useEffect } from "react";
import Inputmask from "inputmask";

export default function Adult_user ({number}) {

    useEffect(() => {

        if (!document.querySelectorAll('.hotel-bron-input-phone').length) return
        if (!document.querySelectorAll('.hotel-bron-input-birthday').length) return

        let elem = document.querySelector(`.hotel-bron-ready__guest-${number}`)

        let im = new Inputmask("+7 (999) 999-99-99")
        let imDate = new Inputmask("99/99/9999")

        elem.querySelectorAll('.hotel-bron-input-phone').forEach((item) => {
            im.mask(item)
        })

        elem.querySelectorAll('.hotel-bron-input-birthday').forEach((item) => {
            imDate.mask(item)
        })
    }, [])

    function chooseData () {

        event.target.parentElement.parentElement.classList.contains('opened-list') && event.target.classList.contains('hotel-bron-clickarea') ?
        event.target.parentElement.parentElement.classList.remove('opened-list') :
        event.target.parentElement.parentElement.classList.add('opened-list')
    }

    function chooseVariant () {
        event.target.parentElement.querySelector('.hotel-bron-inside__default').innerText = event.target.innerText
        event.target.parentElement.parentElement.parentElement.classList.remove('opened-list')
    }

    return (
        <div className={`hotel-bron-ready__guest hotel-bron-ready__guest-${number}`}>
            <p className={styles["guest-text-title"]}>Гость {number} <span>(покупатель)</span></p>
            <div className={styles["hotel-bron-inputs-w"]}>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]}`}>
                    <input type="text" name = "surname" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-surname"]}`} placeholder = "Фамилия" />
                </div> 
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]}`}>
                    <input type="text" name = "name" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-name"]}`} placeholder = "Имя" />
                </div>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-not-necessarily"]}`}>
                    <input type="text" name = "patronymic" className={`
                        ${styles["hotel-bron-input"]}
                        ${styles["hotel-bron-input-patronymic"]}`}
                    placeholder = "Отчество" />
                </div>
                <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]}`}>
                    <input type="text" name = "birthday" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-birthday"]} hotel-bron-input-birthday`} placeholder = "Дата рождения" />
                </div>
                {number == 1 ?
                    <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]}`}>
                        <input type="text" name = "phone" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-phone"]} hotel-bron-input-phone`} placeholder = "Телефон" />
                    </div>
                : ''}
                {number == 1 ?
                    <div className={`${styles["hotel-bron-input-w"]} ${styles["hotel-bron-necessarily"]}`}>
                        <input type="text" name = "email" className={`${styles["hotel-bron-input"]} ${styles["hotel-bron-input-email"]}`} placeholder = "Email" />
                    </div>
                : ''}
            </div>
        </div>
    )
}