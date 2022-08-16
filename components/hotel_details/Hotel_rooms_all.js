import styles from "../../styles/Hoteldetail.module.css"

const Hotel_rooms_all = () => {

    return (
        <div className={styles["result-rooms__items"]}>
            <div className={styles["result-rooms__item"]}>
                <div className={styles["result-rooms__item-pic"]}>
                    <div className={styles["result-rooms-details"]}>
                        <span>от</span>
                        <span className = {styles["result-rooms-details__num"]}>30 000</span>
                        <span>&#8381;</span>
                        <div className = {styles["result-rooms-details__dop"]}>цена за <span className = {styles["result-rooms-details__nights"]}>1</span> ночь</div>
                    </div>
                </div>
                <a href=""className={styles["result-rooms__title"]}>4 местный 23-24 коттедж</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum tenetur molestias aliquid 
                    modi quos molestiae eius excepturi rerum ducimus. Sequi officiis consequatur, facilis tenetur dolores omnis magni corporis ut?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo in delectus excepturi porro natus dicta cumque alias perferendis, 
                consectetur impedit mollitia recusandae quo nam distinctio quibusdam, ratione corporis sint minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum tenetur molestias aliquid 
                    modi quos molestiae eius excepturi rerum ducimus. Sequi officiis consequatur, facilis tenetur dolores omnis magni corporis ut?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo in delectus excepturi porro natus dicta cumque alias perferendis, 
                consectetur impedit mollitia recusandae quo nam distinctio quibusdam, ratione corporis sint minima!</p>
            </div>
            </div>
    )
}

export default Hotel_rooms_all