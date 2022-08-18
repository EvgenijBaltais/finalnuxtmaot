import styles from "../styles/SpecialOffers.module.css"

const specialOffers = () => {

    const sales = [
        {
            id: 1,
            title: "Бесплатная доставка",
            description: `Воспользуйтесь уникальным предложением. Оставьте сегодня заявку на нашем сайте и получите бесплатную доставку уже завтра!`,
            style: {
                backgroundImage: 'url(/images/sales/1.jpg)'
            }
        },
        {
            id: 2,
            title: "Отдых в выходные",
            description: `Хотите провести выходные с надлежащим комфортом, 
            тогда вы обратились по адресу. Оставьте заявку на сайте, наш 
            менеджер перезвонит с вам в течении 60 секунд и расскажет об
             актуальных акциях и спецпредложениях, а также о дополнительных 
             возможностях и индивидуальных предложениях.`,
             style: {
                backgroundImage: 'url(/images/sales/2.jpg)'
            }
        },
        {
            id: 3,
            title: "Корпоративным клиентам",
            description: `Для корпоративных клиентов мы предлагаем уникальную систему скидок! Подробнее уточняйте у менеджеров.`,
            style: {
                backgroundImage: 'url(/images/sales/3.jpg)'
            }
        },
        {
            id: 4,
            title: "Выходные по цене будней!",
            description: `При бронировании путевки от 5 дней стоимость размещения на выходные рассчитывается по цене буднего дня.`,
            style: {
                backgroundImage: 'url(/images/sales/4.jpg)'
            }
        }
    ]

    return (

        <section className = {styles["special-offers"]}>
            <h2 className = "section-title icon-item icon-item-sales">Акции и спецпредложения</h2>
            <div className = {styles["sales-wrapper"]}>

                {sales.map((item, index) => {
                    return (
                        <div className={styles["sales-item"]} key = {index} >
                            <div className={styles["sales-item__pic"]} style={item.style}></div>
                            <div className = {styles["sales-item__content"]}>
                                <p className = {styles["sales-item__title"]}>{item.title}</p>
                                <p className = {styles["sales-item__text"]}>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
)
}

export default specialOffers