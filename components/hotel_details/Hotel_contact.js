import styles from "../../styles/Hoteldetail.module.css"

const Hotel_contact = () => {

    return (

        <div className={styles["result-description"]}>

            <h2 className = "section-title icon-item icon-item-contact">Контакты</h2>

            <div className = {`${styles["hotel-contact-section"]} ${styles["hotel-serv-descr"]}`}>


                <p><b>На машине:</b> от МКАД по Минскому шоссе (трасса М1) следовать до 
                указателей — «Дорохово-Верея» (85 км), повернуть по указателю на «Дорохово» налево 
                и следовать до отеля 700 метров.</p>
            
                <p><b>На электричке:</b> с Белорусского вокзала до станции «Дорохово».</p>


            </div>

        </div>
    )
}

export default Hotel_contact