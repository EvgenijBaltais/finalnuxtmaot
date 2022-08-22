import styles from '../../styles/search_form_components/Search_guests.module.css'


export default function Search_guests () {

    const childAges = ['до 1 года', '1 год', '2 года', '3 года', '4 года', '5 лет', '6 лет', '7 лет', '8 лет', '9 лет', '10 лет', '11 лет', '12 лет',
                        '13 лет', '14 лет', '15 лет', '16 лет', '17 лет']

    return (

        <div className = {styles["guests-block-w"]}>
                <div className={styles["search-results__header"]}>
                    Укажите количество гостей
                </div>
                <div className={styles["search-results__body"]}>
                    <div className = {styles["search-results-adults"]}>
                        <div className = {styles["search-results__left"]}>
                            <p className = {styles["search-results__title"]}>Взрослые</p>
                            <span className={styles["search-results__subtitle"]}>от 18 лет</span>
                        </div>
                        <div className = {styles["search-results__right"]}>
                            <div className = {styles["search-results__minus"]}>—</div>
                            <div className = {styles["search-results__value"]}>2</div>
                            <div className = {styles["search-results__plus"]}>+</div>
                        </div>
                    </div>
                    <div className = {styles["search-results-children"]}>
                        <div className = {styles["search-results-children__item"]}>
                            <div className = {styles["search-results__left"]}>
                                <p className = {styles["search-results__title"]}>Ребенок</p>
                            </div>
                            <div className = {`${styles["search-results__right"]} ${styles["search-results__centered"]}`}>
                                7 лет
                            </div>
                        </div>
                    </div>

                    <div className = {styles["search-results-add-child"]}>
                        <p className = {styles["search-results-add__title"]}>Добавить ребенка</p>
                        <div className = {styles["search-results-add__block"]}>
                            {childAges.map((item, index) => {
                                return (
                                    <div className = {styles["search-results-add__item"]} key = {index}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
        </div>
    )
}