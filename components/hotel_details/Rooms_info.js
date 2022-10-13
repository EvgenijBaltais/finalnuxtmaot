import styles from "../../styles/Hoteldetail.module.css"

const Rooms_info = ({hotelData}) => {

    let description = document.createElement("div")
        description.innerHTML = hotelData.description

    return (

        <div className={styles["result-description"]}>

            <h2 className = "section-title icon-item icon-item-hotel-w">Об отеле</h2>

            <div className = {`${styles["hotel-title-section"]} ${styles["hotel-title-descr"]}`}>
                <div className = {styles["hotel-main-descr"]}>
                    <h3>Расположение</h3>
                    <p>{hotelData.address}</p>
                    {hotelData.description ? 
                    <>
                        <h3>У нас вы найдете</h3>
                        <p className = {styles["hotel-description-text"]}>{description.textContent}</p>
                    </>
                    : ''}
                </div>
                {/*hotelData.facts ? 
                <div className = {styles["hotel-fact-section"]}>
                    <h3>Факты об отеле</h3>
                    
                    <span>Год постройки</span>
                    <p>1999 г.</p>
                    <span>Год реновации</span>
                    <p>2020</p>
                    <span>Тип розетки</span>
                    <p>Европейская 
                       220&nbsp;В&nbsp;/&nbsp;50&nbsp;Гц 
                       Европейская (с&nbsp;заземлением) 
                       220&nbsp;В&nbsp;/&nbsp;50&nbsp;Гц</p>
                    <span>Количество номеров</span>
                    <p>90 номеров</p>
                    <span>Интернет</span>
                    <p>Wi-Fi</p>
                </div>
                : ''*/}

            </div>

        </div>
    )
}

export default Rooms_info