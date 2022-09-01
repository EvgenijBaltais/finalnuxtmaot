import styles from "../../styles/Hoteldetail.module.css"

const Hotel_service = () => {

    return (

        <div className={styles["result-description"]}>

            <h2 className = "section-title icon-item icon-item-serv">Услуги</h2>

            <div className = {`${styles["hotel-title-section"]} ${styles["hotel-serv-descr"]}`}>

                <div className={styles["serv-type-section"]}>

                    <h3>Общее</h3>
                
                    <ul className={styles["serv-list"]}>
                        <li>Терраса</li>
                        <li>Стойка регистрации</li>
                    </ul>

                </div>


                <div className={styles["serv-type-section"]}>

                    <h3>Персонал говорит</h3>
                
                    <ul className={styles["serv-list"]}>
                        <li>на английском</li>
                        <li>на русском</li>
                    </ul>
                </div>


                <div className={styles["serv-type-section"]}>

                    <h3>Туризм</h3>
                
                    <ul className={styles["serv-list"]}>
                        <li>Экскурсии
                            <i> оплачивается отдельно</i>
                        </li>
                    </ul>
                </div>
                
                <div className={styles["serv-type-section"]}>

                    <h3>Развлечения</h3>
                </div>

                <div className={styles["serv-type-section"]}>

                    <h3>Питание</h3>

                    <ul className={styles["serv-list"]}>
                        <li>на английском</li>
                        <li>на русском</li>
                    </ul>
                </div>

                <div className={styles["serv-type-section"]}>
                    <h3>Услуги и удобства</h3>

                    <ul className={styles["serv-list"]}>
                        <li>на английском</li>
                        <li>на русском</li>
                    </ul>
                </div>

                <div className={styles["serv-type-section"]}>
                    <h3>В номерах</h3>
                </div>

                <div className={styles["serv-type-section"]}>
                    <h3>Санитарные меры</h3>
                </div>
            </div>

        </div>
    )
}

export default Hotel_service