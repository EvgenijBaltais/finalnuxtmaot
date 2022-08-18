import React from 'react'
import MediaQuery from 'react-responsive'

import styles from "../styles/Payment.module.css"

import MainForm from "../components/MainForm"

import Image from "next/image"

import Pay1 from '/public/images/pay-1.jpg'
import Pay2 from '/public/images/pay-2.jpg'
import Pay3 from '/public/images/pay-3.jpg'

const Payment = () => {

    return (
        <>
            <h1 className="secondary-h1">Способы оплаты и возврат</h1>

            <MainForm />

            <section className = {styles["pay-content"]}>
                <div className = {styles["pay-left"]}>
                    <div className = {styles["pay-left-nav"]}>
                        <h2 className="single-block-title left-block-bedroom">
                            Навигация
                        </h2>
                        <div className = {styles["left-nav-block"]}>
                            <ul className = {styles["left-nav-list"]}>
                                <li className = {styles["left-nav-item"]}>
                                    <a className = {styles["left-nav-link"]} href="">Платежи. Оплата банковской картой онлайн</a>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a className = {styles["left-nav-link"]} href="">Гарантии Безопасности</a>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a className = {styles["left-nav-link"]} href="">Безопасность Онлайн Платежей</a>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a className = {styles["left-nav-link"]} href="">Возврат Товаров</a>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a className = {styles["left-nav-link"]} href="">Конфиденциальность</a>
                                    <ul className={styles["left-nav-list__sub"]}>
                                        <li className = {styles["left-nav-item"]}>
                                            <a href="" className = {styles["left-nav-link"]}>Определения</a>
                                        </li>
                                        <li className = {styles["left-nav-item"]}>
                                            <a href="" className = {styles["left-nav-link"]}>Использование информации</a>
                                        </li>
                                        <li className = {styles["left-nav-item"]}>
                                            <a href="" className = {styles["left-nav-link"]}>Ссылки</a>
                                        </li>
                                        <li className = {styles["left-nav-item"]}>
                                            <a href="" className = {styles["left-nav-link"]}>Ограничение ответственности</a>
                                        </li>
                                        <li className = {styles["left-nav-item"]}>
                                            <a href="" className = {styles["left-nav-link"]}>Контакты</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a className = {styles["left-nav-link"]} href="">Проведение операции оплаты товаров/услуг в сети интернет</a>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a className = {styles["left-nav-link"]} href="">Отмена операции оплаты товаров/услуг в интернете</a>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a className = {styles["left-nav-link"]} href="">Операция возврата товара (отказа от услуг), оплаченных картой в сети интернет.</a>
                                </li>
                                <li className = {styles["left-nav-item"]}>
                                    <a className = {styles["left-nav-link"]} href="">Юридическое лицо</a>
                                </li>
                            </ul>
                        </div>
                        <h2 className="single-block-title left-block-bedroom">
                            Супер цена!
                        </h2>
                        <div className = "left-nav-block super-prices">
                            <div className={styles["super-prices-item"]}>
                                <div className={styles["super-prices-item__name"]}>
                                    <a href="" className={styles["super-prices-item__link"]}>Bridge Resort(Сочи)</a>
                                </div>
                                <div className={styles["super-prices-item__price"]}>
                                    <p className={styles["super-prices-item__number"]}>
                                        <span>от 4500</span>&nbsp;&#8381;
                                    </p>
                                </div>
                            </div>
                            <div className={styles["super-prices-item"]}>
                                <div className={styles["super-prices-item__name"]}>
                                    <a href="" className={styles["super-prices-item__link"]}>Country Resort</a>
                                </div>
                                <div className={styles["super-prices-item__price"]}>
                                    <p className={styles["super-prices-item__number"]}>
                                        <span>от 4500</span>&nbsp;&#8381;
                                    </p>
                                </div>
                            </div>
                            <div className={styles["super-prices-item"]}>
                                <div className={styles["super-prices-item__name"]}>
                                    <a href="" className={styles["super-prices-item__link"]}>Mriya Resort</a>
                                </div>
                                <div className={styles["super-prices-item__price"]}>
                                    <p className={styles["super-prices-item__number"]}>
                                        <span>от 4500</span>&nbsp;&#8381;
                                    </p>
                                </div>
                            </div>
                            <div className={styles["super-prices-item"]}>
                                <div className={styles["super-prices-item__name"]}>
                                    <a href="" className={styles["super-prices-item__link"]}>Respect Hall</a>
                                </div>
                                <div className={styles["super-prices-item__price"]}>
                                    <p className={styles["super-prices-item__number"]}>
                                        <span>от 4500</span>&nbsp;&#8381;
                                    </p>
                                </div>
                            </div>
                            <div className={styles["super-prices-item"]}>
                                <div className={styles["super-prices-item__name"]}>
                                    <a href="" className={styles["super-prices-item__link"]}>Атлас Парк Отель</a>
                                </div>
                                <div className={styles["super-prices-item__price"]}>
                                    <p className={styles["super-prices-item__number"]}>
                                        <span>от 4500</span>&nbsp;&#8381;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {styles["pay-right"]}>
                    <h2 className="single-block-title">
                        Введение
                    </h2>
                    <div className = {styles["pay-page-content"]}>
                        <p className = {styles["pay-page-content__text"]}>
                            Оплата происходит через авторизационный сервер процессингового центра ПАО «Промсвязьбанк» с использованием банковских карт следующих платежных систем:
                        </p>
                        <div className = {styles["pay-icons"]}>
                            <Image src = {Pay1} className = {styles["pay-icons__items"]} alt="" />
                            <Image src = {Pay2} className = {styles["pay-icons__items"]} alt="" />
                            <Image src = {Pay3} className = {styles["pay-icons__items"]} alt="" />
                        </div>
                        <p className = {styles["pay-page-content__text"]}>
                            При оплате заказа банковской картой обработка информации и платежа происходит на авторизационном сервере
                            процессингового центра Банка. Это значит, что Ваши конфиденциальные данные (реквизиты карты) не
                            поступают в интернет-магазин. Информация по защищенному каналу связи SSL передается в зашифрованном
                            виде напрямую на авторизационный сервер Промсвязьбанка.
                        </p>
                        <p className = {styles["pay-page-content__text"]}>Для передачи информации используются специальные технологии безопасности интернет-платежей Verifed by Visa,
                            MasterCard SecureCode и MIR Accept. Все операции по Вашей карте осуществляются при полном
                            соблюдении требований VISA International, MasterCard Worldwide и МИР. 
                            Безопасность обработки интернет-платежей через Промсвязьбанк гарантирована
                            международным сертификатом безопасности PCI DSS.
                        </p>

                        <h2 className="single-block-title">
                            Платежи. Оплата банковской картой онлайн.
                        </h2>
                        <p className = {styles["pay-page-content__text"]}>Наш сайт подключен к интернет-эквайрингу, и Вы можете оплатить Товар банковской картой Visa или Mastercard. 
                            После подтверждения выбранного Товара откроется защищенное окно с платежной страницей процессингового центра 
                            CloudPayments или ПАО "Промсвязьбанк", где Вам необходимо ввести данные Вашей банковской карты.
                            Для дополнительной аутентификации держателя карты используется протокол 3D Secure. Если Ваш Банк 
                            поддерживает данную технологию, Вы будете перенаправлены на его сервер для дополнительной идентификации.
                            Информацию о правилах и методах дополнительной идентификации уточняйте в Банке, выдавшем Вам банковскую карту.
                        </p>

                        <h2 className="single-block-title">
                            Гарантии Безопасности.
                        </h2>
                        <p className = {styles["pay-page-content__text"]}>Процессинговые центры CloudPayments и ПАО "Промсвязьбанк" защищают и обрабатывают данные Вашей банковской карты по
                            стандарту безопасности PCI DSS 3.0. Передача информации в платежный шлюз происходит с применением 
                            технологии шифрования SSL. Дальнейшая передача информации происходит по закрытым банковским сетям, 
                            имеющим наивысший уровень надежности. CloudPayments и ПАО "Промсвязьбанк" не передают данные Вашей 
                            карты нам и иным третьим лицам. Для дополнительной аутентификации держателя карты используется протокол 
                            3D Secure. В случае, если у Вас есть вопросы по совершенному платежу, 
                            Вы можете обратиться в службу поддержки клиентов по электронной почте support@cloudpayments.ru или support@paykeeper.ru.
                        </p>

                        <h2 className="single-block-title">
                            Безопасность Онлайн Платежей.
                        </h2>
                        <p className = {styles["pay-page-content__text"]}>Предоставляемая Вами персональная информация (имя, адрес, телефон, e-mail, номер кредитной карты) 
                            является конфиденциальной и не подлежит разглашению. Данные Вашей кредитной карты передаются только
                            в зашифрованном виде и не сохраняются на нашем Web-сервере. Все операции с платежными картами происходят
                            в соответствии с требованиями VISA International, MasterCard и других платежных систем. При передаче информации 
                            используется специальные технологии безопасности
                            карточных онлайн-платежей, обработка данных ведется на безопасном высокотехнологичном сервере процессинговой компании.
                        </p>

                        <h2 className="single-block-title">
                            Возврат Товаров
                        </h2>
                        <p className = {styles["pay-page-content__text"]}>Постановление Правительства РФ от 19 января 1998 г. В случае обнаружения недостатков товара,
                            свойства которого не позволяют устранить их (продовольственные товары, парфюмерно-косметические изделия,
                            товары бытовой химии и другие товары), покупатель вправе по своему выбору потребовать замены такого товара
                            товаром надлежащего качества либо соразмерного уменьшения покупной цены. Вместо предъявления указанных
                                требований покупатель вправе отказаться от приобретенного товара и потребовать возврата уплаченной за
                                товар денежной суммы. При этом покупатель по требованию продавца и за его счет должен возвратить 
                                полученный товар ненадлежащего качества.
                        </p>

                        <h2 className="single-block-title">
                            Конфиденциальность
                        </h2>
                        <p className = {styles["pay-page-content__text-bold"]}>Определения</p>
                        <p className = {styles["pay-page-content__text"]}>Интернет проект maot.ru (далее – URL, «мы») серьезно относится к вопросу конфиденциальности информации своих клиентов и
                            посетителей сайта maot.ru (далее – «вы», «посетители сайта»). Персонифицированной мы называем информацию, 
                            содержащую персональные данные (например: ФИО, логин или название компании) посетителя сайта, а 
                            также информацию о действиях совершаемых вами на сайте URL. (например: заказ посетителя сайта
                            с его контактной информацией). Анонимными мы называем данные, которые невозможно однозначно
                            идентифицировать с конкретным посетителем сайта (например: статистика посещаемости сайта).
                        </p>

                        <p className = {styles["pay-page-content__text-bold"]}>Использование информации</p>
                        <p className = {styles["pay-page-content__text"]}>Мы используем персонифицированную информацию конкретного посетителя сайта исключительно для обеспечения
                            ему качественного оказания услуг и их учета. Мы не раскрываем персонифицированных данных одних посетителей сайта URL
                            другим посетителям сайта. Мы никогда не публикуем персонифицированную информацию в открытом доступе и не передаем ее
                            третьим лицам Исключением являются лишь ситуации, когда предоставление такой информации уполномоченным государственным 
                            органам предписано действующим законодательством Российской Федерации. Мы публикуем и распространяем только отчеты, построенные 
                            на основании собранных анонимных данных. При этом отчеты не содержат информацию, по которой было бы возможным идентифицировать 
                            персонифицированные данные пользователей услуг. 
                            Мы также используем анонимные данные для внутреннего анализа, целью которого является развитие продуктов и услуг URL.
                        </p>

                        <p className = {styles["pay-page-content__text-bold"]}>Ссылки</p>
                        <p className = {styles["pay-page-content__text"]}>Сайт maot.ru может содержать ссылки на другие сайты, 
                            не имеющие отношения к нашей компании и принадлежащие третьим лицам. Мы не несем ответственности 
                            за точность, полноту и достоверность сведений, размещенных на сайтах третьих лиц, и не берем на себя никаких 
                            обязательств по сохранению конфиденциальности информации, оставленной вами на таких сайтах.
                        </p>

                        <p className = {styles["pay-page-content__text-bold"]}>Ограничение ответственности</p>
                        <p className = {styles["pay-page-content__text"]}>Мы делаем все возможное для соблюдения настоящей политики конфиденциальности,
                            однако, мы не можем гарантировать сохранность информации в случае воздействия факторов находящихся вне нашего
                            влияния, результатом действия которых станет раскрытие информации. Сайт maot.ru и вся размещенная на
                            нем информация представлены по принципу "как есть” без каких-либо гарантий. Мы не несем ответственности
                                за неблагоприятные последствия, а также за любые убытки, причиненные вследствие ограничения доступа 
                                к сайту URL или вследствие посещения сайта и использования размещенной на нем информации.
                        </p>

                        <p className = {styles["pay-page-content__text-bold"]}>Контакты</p>
                        <p className = {styles["pay-page-content__text"]}>По вопросам, касающимся настоящей политики, просьба обращаться по телефону 8 (800) 555-33-75</p>

                        <div className = {styles["content-subscribe"]}>
                            <h2 className = "single-block-title">Подпишитесь на лучшие предложения</h2>
                            <div className = {styles["content-s-w"]}>
                                <form action="" name = {styles["content-subscribe-form"]}>
                                    <div className = {styles["content-subscribe-form"]}>
                                        <div className={styles["content-subscribe-form-inside"]}>
                                            <input type="text" name = "get-content-subscribe" id = "get-content-subscribe" className = {styles["get-content-subscribe"]} placeholder = "Укажите свою электронную почту" />
                                            <div className = {styles["get-content-suscribe-btn"]}>
                                                <button className = {styles["get-content-suscribe__submit"]}>
                                                    <MediaQuery minWidth={381}>Подписаться</MediaQuery>
                                                    <MediaQuery maxWidth={380}>
                                                        <div className={styles["icon-subscribe-inside"]}></div>
                                                    </MediaQuery>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "subscribe-agree">
                                        <input type="checkbox" id="subscribe-checkbox-1" className = "stylized" /> <label htmlFor="subscribe-checkbox-1">
                                            Хочу получать акции и спецпредложения для своих путешествий</label>
                                    </div>
                                </form>
                            </div>
                            <h2 className = "single-block-title">Подпишитесь на наши соц. сети</h2>
                            <div className={styles["content-subscribe-socials"]}>
                                <a className = {styles["content-social-tg-rus"]}>Лучшие отели России</a>
                                <a className = {styles["content-social-tg-pdmsk"]}>Лучшие отели Подмосковья</a>
                                <a className = {styles["content-social-vk"]}>Все о качественном и доступном отдыхе в Подмосковье</a>
                            </div>
                        </div>

                        <h2 className="single-block-title">
                            Проведение операции оплаты товаров/услуг в сети интернет
                        </h2>
                        <p className = {styles["pay-page-content__text"]}>Держатель карты обращается на сайт Интернет-магазина и формирует заказ на оплату товара/услуг,
                            подтверждает условия оформления заказа 
                            (наименование товаров, способ доставки, выбор средства оплаты, сумма платежа) и выбирает в качестве средства оплаты банковскую карту.</p>

                        <p className = {styles["pay-page-content__text"]}>Проведение операций оплаты товаров/услуг с использованием банковских карт
                            в сети Интернет осуществляется с применением 3DSecure технологий.</p>
                        <p className = {styles["pay-page-content__text"]}>Интернет-магазин обрабатывает заказ и создает запрос в СПЭП на
                            регистрацию заказа Держателя карты. В запросе Интернет-магазина передается набор данных 
                            о заказе – описание заказа, сумма, обратные адреса, на которые необходимо возвращать Держателя
                            карты в случае успешного и в случае неуспешного платежа, и др. В случае успешной регистрации
                            заказа СПЭП возвращает уникальный номер заказа в Интернет-магазин.</p>
                        <p className = {styles["pay-page-content__text"]}>Интернет-магазин осуществляет переадресацию Держателя
                            карты на платежную страницу СПЭП, на которой отображаются параметры платежа, также
                            предлагается ввести реквизиты карты. Держатель карты выбирает тип карты, которой 
                            он будет расплачиваться и вводит информацию о параметрах своей карты:
                        </p>
                        <ul className = {styles["pay-card-list"]}>
                            <li className = {styles["pay-card-item"]}>Тип Карты</li>
                            <li className = {styles["pay-card-item"]}>Номер Карты</li>
                            <li className = {styles["pay-card-item"]}>дату окончания действия карты</li>
                            <li className = {styles["pay-card-item"]}>имя и фамилию, как указано на карте</li>
                            <li className = {styles["pay-card-item"]}>значения CVC и CVVz</li>
                            <li className = {styles["pay-card-item"]}>подтверждает своё согласие оплатить заказ вводом специального пароля</li>
                        </ul>

                        <p className = {styles["pay-page-content__text"]}>Специальный пароль представляет собой цифровую/буквенно-цифровую последовательность,
                            однозначно идентифицирующую клиента как Держателя карты. Проверка специального пароля обеспечивается банком-эмитентом.</p>

                        <p className = {styles["pay-page-content__text"]}>Провайдер услуг проверяет корректность формата вводимых параметров карты и осуществляет 
                            дополнительные процедуры аутентификации Держателя карты
                            в соответствии с международными стандартами (3DSecure) и передает запрос на авторизацию операции в Банк.
                        </p>

                        <p className = {styles["pay-page-content__text"]}>Банк проверяет право Интернет-магазина провести операцию в соответствии с регистрацией и 
                            проводит авторизацию операций в установленном соответствующими международными платежными системами порядке.</p>

                        <p className = {styles["pay-page-content__text"]}>При получении отрицательного результата авторизации Банк отправляет уведомление об отказе в СПЭП, который, 
                            в свою очередь, передает данную информацию Интернет-магазину и Держателю карты, с указанием причин отказа.</p>

                        <p className = {styles["pay-page-content__text"]}>При получении положительного результата авторизации Банк передает в СПЭП подтверждение
                            положительного результата авторизации операции. СПЭП одновременно передает подтверждения положительного результата
                            проводимой авторизации операции в Интернет-магазин и Держателю карты.</p>

                        <p className = {styles["pay-page-content__text"]}>После получения подтверждения о положительном результате авторизации Интернет-магазин оказывает
                            услугу (осуществляет работу, отпускает товар) Держателю карты.</p>

                        <p className = {styles["pay-page-content__text"]}>Обработка успешно авторизованных операций осуществляется автоматически
                            не позднее следующего рабочего дня за днем совершения операции.</p>


                            <div className = {styles["between-populars-items"]}>

                                <h2 className = "section-title left-block-bedroom">Популярные отели России</h2>
                                <div className = {styles["popular-items"]}>
                                    <div className = {styles["popular-item"]}>
                                        <a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
                                        <span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
                                    </div>
                                    <div className = {styles["popular-item"]}>
                                        <a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
                                        <span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
                                    </div>
                                    <div className = {styles["popular-item"]}>
                                        <a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
                                        <span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
                                    </div>
                                    <div className = {styles["popular-item"]}>
                                        <a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
                                        <span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
                                    </div>
                                    <div className = {styles["popular-item"]}>
                                        <a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
                                        <span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
                                    </div>
                                    <div className = {styles["popular-item"]}>
                                        <a href="" className = {styles["popular-item__name"]}>Bridge Resort (Сочи)</a>
                                        <span className = {styles["popular-item__price"]}>от 4 500 &#8381;</span>
                                    </div>
                                </div>
                            </div>

                        <h2 className="single-block-title">
                            Отмена операции оплаты товаров/услуг в интернете
                        </h2>

                        <p className = {styles["pay-page-content__text"]}>В случае если после проведения операции оплаты товара/услуг с использованием 
                            карты в сети Интернет возникла необходимость ее отмены (Держатель карты отказался от заказа и т.п.), 
                            Интернет-магазин может провести отмену операции. Отмена операции осуществляется до проведения Банком 
                            процедуры закрытия дня (до 23:59 часов Московского времени дня совершения операции)
                            в соответствии с «Руководством по использованию аппаратно-программного комплекса электронной коммерции».</p>


                        <p className = {styles["pay-page-content__text"]}>Для отмены операции после проведения Банком процедуры закрытия дня необходимо заполнить
                            «Заявку на отмену операции» по форме Приложения №5 к настоящему
                            Договору и предоставить ее в Банк.</p>

                        <h2 className="single-block-title">
                            Операция возврата товара (отказа от услуг), оплаченных картой в сети интернет.
                        </h2>

                        <p className = {styles["pay-page-content__text"]}>В случае если Держатель карты возвращает товар, Предприятие 
                            проверяет наличие данного заказа по своей базе данных и оформляет Заявление на возврат средств 
                            (Приложения № 4 к настоящему Договору) и предоставляет его в Банк. Заявление должно быть подписано 
                            лицами, имеющими право подписи в соответствии с карточкой с образцами подписей и оттиска печати, и скреплено оттиском печати Предприятия.
                            Банк осуществляет возврат средств по операциям «возврат покупки» на карту, с использованием которой была произведена оплата товара/услуги.
                        </p>

                        <div className = {styles["law-info"]}>

                            <h2 className="single-block-title">
                                Юридическое лицо
                            </h2>
                            <p className = "info-text">
                                <span className = "bold-span">Продавец Магазин Отдыха</span> - продажа горящих путевок
                            </p>
                            <p className = "info-text">
                                <span className = "bold-span">Тел./Факс:</span>	8 (495) 648 - 67 - 11
                            </p>
                            <p className = "info-text">
                                <span className = "bold-span">Юр и факт адрес:</span> ул. Бауманская д.6с2.
                            </p>
                            <p className = "info-text">
                                <span className = "bold-span">Офис:</span> Бизнес-центр Виктория Плаза. 8 этаж. 804 офис
                            </p>
                        </div>
                    </div>
                </div>
		    </section>
        </>
    )
}

export default Payment