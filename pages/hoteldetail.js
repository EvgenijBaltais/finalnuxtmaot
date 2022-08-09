import styles from "../styles/hoteldetail.module.css"

const hoteldetail = () => {

    return (
        <>
            <section className = {styles["single-hotel"]}>
                <div className = {styles["title-block"]}>
                    <h1 className = "hotel-title">Курорт-парк Союз (МИД)</h1>
                    <p className = {styles["hotel-adress"]}>>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
                        veniam facere dolores fugit cumque illo? Enim laborum consequuntur, 
                        ullam voluptas consectetur quis? Aliquid eius quis, consectetur molestiae ipsam id vero?
                    </p>
                </div>
                <div className = {styles["hotel-rate-info"]}>
                    <ul className = {styles["hotel-rate__list"]}>
                        <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                        <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                        <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                        <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-yellow"]}`}></li>
                        <li className={`${styles["hotel-rate__item"]} ${styles["hotel-rate__item-grey"]}`}></li>
                    </ul>
                    <span className = {styles["hotel-rate__reviews"]}>18 отзывов</span>
                    <div className={styles["add-to-favorite"]}>
                        <a href="" className={styles["add-to-favorite__link"]}>добавить в избранное</a>
                    </div>
                </div>

                <div className = {styles["map-slider"]}>
                    <div className={styles["hotel-slider"]}>
                        <div className = {styles["hotel-slider__main"]}></div>
                        <div className = {styles["hotel-slider__items"]}>
                            <div className = {styles["hotel-slider__w"]}>
                                <div className = {styles["hotel-slider__item active"]}></div>
                                <div className = {styles["hotel-slider__item"]}></div>
                                <div className = {styles["hotel-slider__item"]}></div>
                                <div className = {styles["hotel-slider__item"]}></div>
                                <div className = {styles["hotel-slider__item"]}></div>
                            </div>
                        </div>
                    </div>
                    <div className = {styles["hotel-map"]}>
                        <div className = {styles["hotel-map__place"]}>
                            <span>Координаты: </span>
                            <a href="" className = {styles["hotel-map__coordinates"]}>55.922899, 38.129345</a>
                        </div>
                    </div>
                </div>
            </section>

                <section className = {styles["select-dates-content"]}>
                <div className = {styles["select-dates-form-block"]}>
                    <h2 className = {styles["hotel-title-h2"]}>Номера на 
                        <span className = {styles["select-dates-in"]}>16</span>
                        -
                        <span className = {styles["select-dates-in"]}>18</span>
                        <span className = {styles["select-dates-month"]}>июля</span>
                        для
                        <span className = {styles["select-dates-adults"]}>2</span>
                        взрослых и 
                        <span className = {styles["select-dates-children"]}>ребенка</span>
                    </h2>

                    <form action="">
                        <div className = {styles["select-dates-form"]}>
                            <div className = {styles["select-dates-form__form"]}>
                                <div className = {styles["select-form-items"]}>
                                    <div className = {styles["select-form-input-w"]}>
                                        <input type="text" name = "select-form-name" className = {`${styles["select-form-input"]} ${styles["select-form-name"]}`} placeholder="Курорт-парк Союз(МИД)" />
                                    </div>
                                    <div className = {styles["select-form-input-w"]}>
                                        <input type="text" name = "select-form-in" className = {`${styles["select-form-input"]} ${styles["select-form-in"]}`} placeholder="16 июля" />
                                    </div>
                                    <div className = {styles["select-form-input-w"]}>
                                        <input type="text" name = "select-form-out" className = {`${styles["select-form-input"]} ${styles["select-form-out"]}`} placeholder="18 июля"/>
                                    </div>
                                    <div className = {styles["select-form-input-w"]}>
                                        <input type="text" name = "select-form-guests" className = {`${styles["select-form-input"]} ${styles["select-form-guests"]}`} placeholder="3 гостя" />
                                    </div>
                                </div>
                            </div>
                            <button type = "button" className = {styles["select-dates-form__btn"]}>Найти</button>
                        </div>
                    </form>

                    <div className = {styles["select-results"]}>

                        <div className={styles["select-results__item"]}>
                            <div className={styles["select-results__item-pic"]}></div>
                            <div className={styles["select-results__item-content"]}>
                                <a href=""className={styles["select-item-title"]}>4 местный 23-24 коттедж</a>
                                <div className = {styles["select-item-info"]}>
                                    <div className = "select-item__block select-item__in">
                                        <span className = {styles["select-item__text"]}>Заезд:</span>
                                        <span className = {`${styles["select-item__value"]} ${styles["select-item__in"]}`}>16.07.2022</span>
                                    </div>
                                    <div className = {`${styles["select-item__block"]} ${styles["select-item__adults"]}`}>
                                        <span className = {styles["select-item__text"]}>Взрослых:</span>
                                        <span className = {`${styles["select-item__value"]} ${styles["select-item__adults"]}`}>2</span>
                                    </div>
                                    <div className = "select-item__block select-item__out">
                                        <span className = {styles["select-item__text"]}>Выезд:</span>
                                        <span className = {`${styles["select-item__value"]} ${styles["select-item__out"]}`}>18.07.2022</span>
                                    </div>
                                    <div className = "select-item__block select-item__children">
                                        <span className = {styles["select-item__text"]}>Детей:</span>
                                        <span className = {`${styles["select-item__value"]} ${styles["select-item__children"]}`}>1</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["select-results__item-price"]}>
                                <div className={styles["select-results-price-info"]}>
                                    <span className = {styles["select-results-price"]}>90 000</span>&nbsp;
                                    <span className = {styles["select-results-currency"]}>&#8381;</span>&nbsp;
                                    <span>за</span>&nbsp;
                                    <span className = {styles["select-results-nights"]}>3</span>&nbsp;
                                    <span>ночи</span>
                                </div>
                                <div className = {styles["select-results-from"]}>
                                    <span>от</span>
                                    <span className = {styles["select-from-value"]}>30 000</span>
                                    <span className = {styles["select-from-currency"]}>&#8381;</span>
                                </div>
                                <div className = {styles["select-results-from-info"]}>
                                    <span>цена за</span>
                                    <span className = {styles["select-results-nights"]}>1</span>
                                    <span>ночь</span>
                                </div>
                                <button className = {styles["select-results-bron"]}>Забронировать</button>
                            </div>
                            <div className={styles["select-results__item-text"]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor accusantium maiores molestiae, 
                                itaque atque ratione ipsam quam rem totam magni esse nesciunt, a nostrum harum unde, facere eum deserunt?
                            </div>
                        </div>
                    </div>

                    <div className={styles["result-description"]}>

                        <h2 className = {styles["hotel-title-h2"]}>Курорт-парк Союз (МИД)</h2>
                        <div className = {`${styles["hotel-title-section"]} ${styles["hotel-title-descr"]}`}>
                            <p>Отель «Respect Hall Resort & SPA» – комплекс премиум-класса, который расположен на Южном берегу Крыма в поселке Кореиз в 16 км от Ялты.</p>
                            <p>На закрытой, охраняемой, парковой территории комплекса расположены два корпуса - 19-этажная «Башня» и 15-этажный «Парус», представляющие собой единый архитектурный ансамбль.</p>
                            <p>«Башня» оборудована панорамным лифтом с видом на море. Любой номер гостиницы дает возможность любоваться морскими рассветами и закатами, все открытые террасы построены только с видом на море. В «Парусе» располагается трех уровневый СПА-центр (1-й этаж), массажные кабинеты и тренажерный зал (2-й этаж) , салон красоты (3-й этаж).</p>
                            <p>Курортный комплекс «Respect Hall Resort&SPA» предоставляет номера различного класса: от Econom до Apartment "VIP". Все номера оформлены в едином стиле «минималистической роскоши», обставлены элегантной мебелью итальянского производства. В каждом: ванная комната (тапочки, наборы мини-парфюмерии, фен, биде, душевая кабина), сейф, мини-бар, LCD-телевизор. Кроме категории Economy, есть открытая терраса или балкон.</p>
                            <p>К услугам гостей два бассейна (открытый и крытый), в летний период работает бассейн для детей, прекрасно оборудованный теннисный корт, детский клуб.</p>
                            <p>СПА-услуги отеля отличаются большим разнообразием - девять банных культур: русская баня, турецкая (хамам), финская сауна, римская, марокканская, японская, корейская бани, инфракрасная кабина, сенная парная. Оборудованы солярий и соляная пещера с кристаллами Мертвого моря. Центр массажных технологий предложит стоунтерапию, восточные массажные техники и классический массаж. Открыт тренажерный зал
                            (с оборудованием STAR TRAC), центр аюрведы и Beaty салон, предоставляющий лучшие эксклюзивные марки профессиональной косметики (VIE, Leonor, Grey Phytomer), диагностику волос и тела, аппаратные методики, арома- и талассотерапию, гидромассажные ванны и другое.</p>
                            <p>На территории отеля действуют несколько ресторанов, лобби-бар, гриль-бар, Music Sport Bar и фито-бар, предлагающий полезное СПА-меню.</p>
                            <p>«Respect Hall Resort & SPA» имеет соединенный с отелем видовой канатной дорогой пляж. Галечный пляж находится в курортной зоне Мисхорского парка и оборудован всем необходимым для отдыха. В распоряжении гостей удобные деревянные шезлонги, матрасы и зонтики, душевые кабины, детский уголок и джакузи, взрослый и детские бассейны с морской водой.</p>
                            <p>Кроме всего вышеперечисленного можно воспользоваться самым широким спектром дополнительных услуг: консьерж-сервис, организация экскурсий, заказ авиабилетов, заказ билетов в любые развлекательные центры Ялты, заказ такси; прачечная; крестины и венчание в часовне, расположенной на территории отеля; проведение и организация конференций, мероприятий и многое другое.</p>
                        </div>

                        <div className = {`${styles["hotel-title-section"]} ${styles["hotel-title-descr"]}`}>
                            <div className = {styles["hotel-title-section"]}>
                                <h3>Услуги отеля</h3>
                                <p>Отель «Respect Hall Resort & SPA» – комплекс премиум-класса, который расположен на Южном берегу Крыма в поселке Кореиз в 16 км от Ялты. На закрытой, охраняемой, парковой территории комплекса расположены два корпуса - 19-этажная «Башня» и 15-этажный «Парус», представляющие собой единый архитектурный ансамбль.</p>
                                <p>«Башня» оборудована панорамным лифтом с видом на море. Любой номер гостиницы дает возможность любоваться морскими рассветами и закатами, все открытые террасы построены только с видом на море. В «Парусе» располагается трех уровневый СПА-центр (1-й этаж), массажные кабинеты и тренажерный зал (2-й этаж) , салон красоты (3-й этаж).</p>
                            </div>

                            <div className = {styles["hotel-title-section"]}>
                                <h3>Корпоративным клиентам</h3>
                                <p>Отель «Respect Hall Resort & SPA» – комплекс премиум-класса, который расположен на Южном берегу Крыма в поселке Кореиз в 16 км от Ялты. На закрытой, охраняемой, парковой территории комплекса расположены два корпуса - 19-этажная «Башня» и 15-этажный «Парус», представляющие собой единый архитектурный ансамбль.</p>
                                <p>«Башня» оборудована панорамным лифтом с видом на море. Любой номер гостиницы дает возможность любоваться морскими рассветами и закатами, все открытые террасы построены только с видом на море. В «Парусе» располагается трех уровневый СПА-центр (1-й этаж), массажные кабинеты и тренажерный зал (2-й этаж) , салон красоты (3-й этаж).</p>
                            </div>

                            <div className = {styles["hotel-title-section"]}>
                                <h3>Детям</h3>
                                <p>Отель «Respect Hall Resort & SPA» – комплекс премиум-класса, который расположен на Южном берегу Крыма в поселке Кореиз в 16 км от Ялты. На закрытой, охраняемой, парковой территории комплекса расположены два корпуса - 19-этажная «Башня» и 15-этажный «Парус», представляющие собой единый архитектурный ансамбль.</p>
                                <p>«Башня» оборудована панорамным лифтом с видом на море. Любой номер гостиницы дает возможность любоваться морскими рассветами и закатами, все открытые террасы построены только с видом на море. В «Парусе» располагается трех уровневый СПА-центр (1-й этаж), массажные кабинеты и тренажерный зал (2-й этаж) , салон красоты (3-й этаж).</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles["result-rooms"]}>
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
                </div>

                <div className = {styles["select-dates-nav"]}>
                    <div className = {styles["select-dates-item"]}>
                        <a href="" className = "select-dates-link active">Поиск номеров</a>
                    </div>
                    <div className = {styles["select-dates-item"]}>
                        <a href="" className = {styles["select-dates-link"]}>Описание отеля</a>
                    </div>
                    <div className = {styles["select-dates-item"]}>
                        <a href="" className = {styles["select-dates-link"]}>Номера</a>
                    </div>
                    <div className = {styles["select-dates-item"]}>
                        <a href="" className = {styles["select-dates-link"]}>Инфраструктура</a>
                    </div>
                    <div className = {styles["select-dates-item"]}>
                        <a href="" className = {styles["select-dates-link"]}>Развлечения</a>
                    </div>
                    <div className = {styles["select-dates-item"]}>
                        <a href="" className = {styles["select-dates-link"]}>Контакты</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default hoteldetail