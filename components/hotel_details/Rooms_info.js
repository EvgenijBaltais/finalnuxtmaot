import styles from "../../styles/Hoteldetail.module.css"

const Rooms_info = ({hotelData}) => {

    let description = document.createElement("div")
        description.innerHTML = hotelData.description

    return (

        <div className={`${styles["result-description"]} block-scrolling-item`} id = "rooms-info">
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
            </div>
        </div>
    )
}

export default Rooms_info