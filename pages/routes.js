import styles from "../styles/routes.module.css"

const Routes = () => {

    return (
        <>

            <section className = {styles["search-result-title"]}>
                Результаты поиска
            </section>

            <section className = {styles["search-result-w"]}>
                <div className = {styles["search-result-left"]}>
                    <div className = {styles["search-result-left-w"]}>
                        <div className = {`${styles["aside-block"]} ${styles["direction-aside-form"]}`}>
                                <h3 className = "aside-block-title">Направление</h3>
                            <div className = {styles["aside-form-input-w"]}>
                                <input type="text" className = {`${styles["aside-form-input"]} ${styles["aside-form__name"]}`} placeholder="Подмосковье" />
                            </div>
                            <div className = {`${styles["aside-form-input-w"]} ${styles["aside-form-input-small"]}`}>
                                <input type="text" className = {`${styles["aside-form-input"]} ${styles["aside-form__in"]}`} placeholder="16 июля" />
                            </div>
                            <div className = {`${styles["aside-form-input-w"]} ${styles["aside-form-input-small"]}`}>
                                <input type="text" className = {`${styles["aside-form-input"]} ${styles["aside-form__out"]}`} placeholder="18 июля" />
                            </div>
                            <div className = {styles["aside-form-input-w"]}>
                                <input type="text" className = {`${styles["aside-form-input"]} ${styles["aside-form__guests"]}`} placeholder="3 гостя" />
                            </div>
                            <button type = "button" className = {styles["aside-form__btn"]}>Найти</button>
                        </div>
                        <div className = {styles["aside-block"]}>
                            <h3 className = "aside-block-title">Тип питания</h3>
                            <a className={styles["aside-close"]}>Свернуть</a>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                        </div>
                        <div className = {styles["aside-block"]}>
                            <h3 className = "aside-block-title">Дополнительные условия</h3>
                            <a className={styles["aside-close"]}>Свернуть</a>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {styles["search-result-right"]}>
                    <div className={styles["search-item"]}>
                        <div className = {styles["search-item-pic"]}></div>
                        <div className = {styles["search-item__content"]}>
                            <a className = {styles["search-item__title"]}>Отель Солнечный Park Hotel</a>
                            <div className = {styles["search-item__rate"]}>
                                <ul className={styles["search-rate__list"]}>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-grey"]}`}></li>
                                </ul>
                                <span className = {styles["search-rate__reviews"]}>18 отзывов</span>
                                <span className = {styles["search-rate__foodtype"]}>Все включено</span>
                            </div>
                            <ul className = {styles["search-item__list"]}>
                                <li className = {styles["search-item__item"]}>Ресторан</li>
                                <li className = {styles["search-item__item"]}>SPA</li>
                                <li className = {styles["search-item__item"]}>Боулинг</li>
                                <li className = {styles["search-item__item"]}>Бильярд</li>
                                <li className = {styles["search-item__item"]}>Прокат</li>
                                <li className = {styles["search-item__item"]}>Бассейн</li>
                                <li className = {styles["search-item__item"]}>Бар</li>
                                <li className = {styles["search-item__item"]}>Тренажерный зал</li>
                                <li className = {styles["search-item__item"]}>WI-FI</li>
                                <li className = {styles["search-item__item"]}>Анимация</li>
                                <li className = {styles["search-item__item"]}>Конференц-зал</li>
                                <li className = {styles["search-item__item"]}>Детская площадка</li>
                                <li className = {styles["search-item__item"]}>Спортивная площадка</li>
                                <li className = {styles["search-item__item"]}>Сауна</li>
                                <li className = {styles["search-item__item"]}>Водоем</li>
                            </ul>
                        </div>
                        <div className = {styles["search-item__broninfo"]}>
                            <div className = {styles["search-item__price"]}>
                                <span className = {styles["search-item__price-from"]}>от</span>
                                <span className = {styles["search-item__price-number"]}>30 000</span>
                                <span className = {styles["search-item__price-currency"]}>&#8381;</span>
                            </div>
                            <p className = {styles["search-item__nights"]}>цена за <span className = {styles["search-item__nights-number"]}>1</span> ночь</p>
                            <button className = {styles["search-item__bron"]}>Выбрать</button>
                        </div>
                    </div>
                    <div className={styles["search-item"]}>
                        <div className = {styles["search-item-pic"]}></div>
                        <div className = {styles["search-item__content"]}>
                            <a className = {styles["search-item__title"]}>Отель Солнечный Park Hotel</a>
                            <div className = {styles["search-item__rate"]}>
                                <ul className={styles["search-rate__list"]}>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-grey"]}`}></li>
                                </ul>
                                <span className = {styles["search-rate__reviews"]}>18 отзывов</span>
                                <span className = {styles["search-rate__foodtype"]}>Все включено</span>
                            </div>
                            <ul className = {styles["search-item__list"]}>
                                <li className = {styles["search-item__item"]}>Ресторан</li>
                                <li className = {styles["search-item__item"]}>SPA</li>
                                <li className = {styles["search-item__item"]}>Боулинг</li>
                                <li className = {styles["search-item__item"]}>Бильярд</li>
                                <li className = {styles["search-item__item"]}>Прокат</li>
                                <li className = {styles["search-item__item"]}>Бассейн</li>
                                <li className = {styles["search-item__item"]}>Бар</li>
                                <li className = {styles["search-item__item"]}>Тренажерный зал</li>
                                <li className = {styles["search-item__item"]}>WI-FI</li>
                                <li className = {styles["search-item__item"]}>Анимация</li>
                                <li className = {styles["search-item__item"]}>Конференц-зал</li>
                                <li className = {styles["search-item__item"]}>Детская площадка</li>
                                <li className = {styles["search-item__item"]}>Спортивная площадка</li>
                                <li className = {styles["search-item__item"]}>Сауна</li>
                                <li className = {styles["search-item__item"]}>Водоем</li>
                            </ul>
                        </div>
                        <div className = {styles["search-item__broninfo"]}>
                            <div className = {styles["search-item__price"]}>
                                <span className = {styles["search-item__price-from"]}>от</span>
                                <span className = {styles["search-item__price-number"]}>30 000</span>
                                <span className = {styles["search-item__price-currency"]}>&#8381;</span>
                            </div>
                            <p className = {styles["search-item__nights"]}>цена за <span className = {styles["search-item__nights-number"]}>1</span> ночь</p>
                            <button className = {styles["search-item__bron"]}>Выбрать</button>
                        </div>
                    </div>
                    <div className={styles["search-item"]}>
                        <div className = {styles["search-item-pic"]}></div>
                        <div className = {styles["search-item__content"]}>
                            <a className = {styles["search-item__title"]}>Отель Фореста Парк с очень длинным названием</a>
                            <div className = {styles["search-item__rate"]}>
                                <ul className={styles["search-rate__list"]}>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>
                                    <li className={`${styles["search-rate__item"]} ${styles["search-rate__item-grey"]}`}></li>
                                </ul>
                                <span className = {styles["search-rate__reviews"]}>18 отзывов</span>
                                <span className = {styles["search-rate__foodtype"]}>Все включено</span>
                            </div>
                            <ul className = {styles["search-item__list"]}>
                                <li className = {styles["search-item__item"]}>Ресторан</li>
                                <li className = {styles["search-item__item"]}>SPA</li>
                                <li className = {styles["search-item__item"]}>Боулинг</li>
                                <li className = {styles["search-item__item"]}>Бильярд</li>
                                <li className = {styles["search-item__item"]}>Прокат</li>
                                <li className = {styles["search-item__item"]}>Бассейн</li>
                                <li className = {styles["search-item__item"]}>Бар</li>
                            </ul>
                            <div className = {styles["search-item__adress"]}>
                                В 30 км. от МКАД по Симферопольскому шоссе, поворот налево, потом направо, потом налево
                            </div>
                        </div>
                        <div className = {styles["search-item__broninfo"]}>
                            <div className = {styles["search-item__price"]}>
                                <span className = {styles["search-item__price-from"]}>от</span>
                                <span className = {styles["search-item__price-number"]}>30 000</span>
                                <span className = {styles["search-item__price-currency"]}>&#8381;</span>
                            </div>
                            <p className = {styles["search-item__nights"]}>цена за <span className = {styles["search-item__nights-number"]}>1</span> ночь</p>
                            <button className = {styles["search-item__bron"]}>Выбрать</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Routes