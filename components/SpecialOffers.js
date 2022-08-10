import styles from "../styles/SpecialOffers.module.css"

const specialOffers = () => {

    return (

        <section className = {styles["special-offers"]}>
            <h2 className = "section-title icon-item icon-item-sales">Акции и спецпредложения</h2>
            <div className = {styles["sales-wrapper"]}>
                <div className={styles["sales-item"]}>
                    <div className={styles["sales-item__pic"]}></div>
                    <div className = {styles["sales-item__content"]}>
                        <p className = {styles["sales-item__title"]}>Бесплатная доставка</p>
                        <p className = {styles["sales-item__text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident vel impedit fuga voluptate, voluptas ullam, rerum ut expedita, eum, dolor repellendus cumque nemo deserunt reprehenderit minus. Nobis, itaque, culpa.</p>
                    </div>
                </div>
                <div className={styles["sales-item"]}>
                    <div className={styles["sales-item__pic"]}></div>
                    <div className = {styles["sales-item__content"]}>
                        <p className = {styles["sales-item__title"]}>Бесплатная доставка</p>
                        <p className = {styles["sales-item__text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident vel impedit fuga voluptate, voluptas ullam, rerum ut expedita, eum, dolor repellendus cumque nemo deserunt reprehenderit minus. Nobis, itaque, culpa.</p>
                    </div>
                </div>
                <div className={styles["sales-item"]}>
                    <div className={styles["sales-item__pic"]}></div>
                    <div className = {styles["sales-item__content"]}>
                        <p className = {styles["sales-item__title"]}>Бесплатная доставка</p>
                        <p className = {styles["sales-item__text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident vel impedit fuga voluptate, voluptas ullam, rerum ut expedita, eum, dolor repellendus cumque nemo deserunt reprehenderit minus. Nobis, itaque, culpa.</p>
                    </div>
                </div>
                <div className={styles["sales-item"]}>
                    <div className={styles["sales-item__pic"]}></div>
                    <div className = {styles["sales-item__content"]}>
                        <p className = {styles["sales-item__title"]}>Бесплатная доставка</p>
                        <p className = {styles["sales-item__text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident vel impedit fuga voluptate, voluptas ullam, rerum ut expedita, eum, dolor repellendus cumque nemo deserunt reprehenderit minus. Nobis, itaque, culpa.</p>
                    </div>
                </div>
            </div>
        </section>
)
}

export default specialOffers