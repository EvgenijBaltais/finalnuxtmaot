import Head from "next/head"
import Script from "next/script"
import { useState, useEffect } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"

import { useRouter } from 'next/router'

import styles from "../styles/Hotelbooking.module.css"

import Adult_user from "../components/hotelbooking/Adult_user"

let myMap

const Hotelbooking = () => {

    const [mapReady, setMapReady] = useState(0)
    const router = useRouter()
    const { query } = useRouter()
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [hotelData, setHotelData] = useState(0)
    const [guests, setGuests] = useState([])
    const [children, setChildren] = useState([])
    const [dateInValue, setDateInValue] = useState('')
    const [dateOutValue, setDateOutValue] = useState('')
    const [actualRoom, setActualRoom] = useState(0)
    const [servicesMain, setServicesMain] = useState([])
    const [servicesDop, setServicesDop] = useState([])
    const [formState, setFormState] = useState(0)
    const [servicesState, setServicesState] = useState(0)

    const [sendingForm, setSendingForm] = useState(0)

    const [mapState, setMapState] = useState(0)

    const [isMobile, setIsMobile] = useState(0)
    const [isTablet, setIsTablet] = useState(0)
    const [isDesktop, setIsDesktop] = useState(0)

    useEffect(() => {
        setIsMobile(window.screen.width <= 480)
        setIsTablet(window.screen.width >= 480 && window.screen.width <= 860)
        setIsDesktop(window.screen.width > 860)

        window.addEventListener('resize', () => {
            setIsMobile(window.screen.width <= 480)
            setIsTablet(window.screen.width >= 480 && window.screen.width <= 860)
            setIsDesktop(window.screen.width > 860)
        })
    }, [])

    let guestsArr = []

    const childAges = ['до 1 года', '1 год', '2 года', '3 года', '4 года', '5 лет', '6 лет', '7 лет', '8 лет', '9 лет', '10 лет', '11 лет', '12 лет',
    '13 лет', '14 лет', '15 лет', '16 лет', '17 лет']

    useEffect(() => {

        if (!router.isReady) return
        if (!query.start_date || !query.start_date || !query.adults || !query.id) return

            for (let i = 0; i < query.adults; i++) {
                guestsArr.push(i)     
            }
            setGuests(guestsArr)

            let children_arr = (Number.isInteger(+query.children_ages) ? [query.children_ages] : query.children_ages || [])

            setChildren(children_arr)
            setDateInValue(query.start_date.slice(8, 10) + '.' + query.start_date.slice(5, 7) + '.' + query.start_date.slice(0, 4))
            setDateOutValue(query.end_date.slice(8, 10) + '.' + query.end_date.slice(5, 7) + '.' + query.end_date.slice(0, 4))

            // Запрос инфы по отелю и доступных номеров

            let datein = query.start_date.slice(0, 4) + '-' + query.start_date.slice(5, 7) + '-' + query.start_date.slice(8, 10)
            let dateout = query.end_date.slice(0, 4) + '-' + query.end_date.slice(5, 7) + '-' + query.end_date.slice(8, 10)
            let adults = query.adults || 2
            let link = 'https://maot-api.bokn.ru/api/hotels/search?'

            link += 'start_date=' + datein
            link += '&end_date=' + dateout
            link += '&adults=' + adults
            
            if (children_arr) {
                for (let i = 0; i < children_arr.length; i++) {
                    link += `&childs[${i}]=` + children_arr[i]
                }
            }

            link += '&id=' + query['id']
            
            console.log(link)

            fetch(link)
            .then((result) => result.json())
            .then((result) => {

                if (result.data.length > 0) {

                    setLatitude(String(result.data[0].hotel.coordinates.latitude).length > 10 ?
                                Number(result.data[0].hotel.coordinates.latitude).toFixed(5) :
                                Number(result.data[0].hotel.coordinates.latitude))

                    setLongitude(String(result.data[0].hotel.coordinates.longitude).length > 10 ?
                                Number(result.data[0].hotel.coordinates.longitude).toFixed(5) :
                                Number(result.data[0].hotel.coordinates.longitude))

                    setHotelData(result.data[0].hotel)
            
                    for (let i = 0; i < result.data[0].rates.length; i++) {
                        if (result.data[0].rates[i].room_name == query.room) {
                            setActualRoom(result.data[0].rates[i])
                            break
                        }
                    }

                    return false
                }
            })
    }, [query])


    useEffect(() => {

        if (actualRoom == 0 || hotelData == 0) return

        // Заполнить главные услуги
        let servicesArr = []
        let dopServicesArr = []

        actualRoom.meal ? servicesArr.push(['meal', actualRoom.meal[0]]) : ''          // Питание

        // Добавить в главные услуги из объекта общих отельных услуг

        for (let i = 0; i < hotelData.services.length; i++) {
            if (hotelData.services[i].group_name == "Интернет") {
                for (let k = 0; k < hotelData.services[i].amenities.length; k++) {
                    hotelData.services[i].amenities[k].indexOf('Wi-Fi') + 1 ||
                    hotelData.services[i].amenities[k].indexOf('wi-fi') + 1 || 
                    hotelData.services[i].amenities[k].indexOf('WI-FI') + 1 ? 
                    servicesArr.push(['internet', hotelData.services[i].amenities[k]]) : ''
                }
                continue
            }
            if (hotelData.services[i].group_name == "В номерах") {
                for (let k = 0; k < hotelData.services[i].amenities.length; k++) {
                    hotelData.services[i].amenities[k].indexOf('Холодильник') + 1 ? 
                    servicesArr.push(['fridge', hotelData.services[i].amenities[k]]) : ''
                }
                continue
            }

            if (hotelData.services[i].group_name == "Общее") {
                for (let k = 0; k < hotelData.services[i].amenities.length; k++) {
                    hotelData.services[i].amenities[k].indexOf('Кондиционер') + 1 ? 
                    servicesArr.push(['conditioner', hotelData.services[i].amenities[k]]) : ''
                }
                continue
            }
        }

        for (let i = 0; i < hotelData.services.length; i++) {
            for (let k = 0; k < hotelData.services[i].amenities.length; k++) {
                dopServicesArr.push(hotelData.services[i].amenities[k])
            }
        }

        actualRoom.room_info.bathroom ? servicesArr.push(['bathroom', actualRoom.room_info.bathroom]) : ''                      // Ванна
        actualRoom.room_info.bed ? servicesArr.push(['bed', actualRoom.room_info.bed]) : ''                                     // Кровать
        actualRoom.room_amenities.nonSmoking ? servicesArr.push(['nonSmoking', actualRoom.room_amenities.nonSmoking]) : ''      // Для некурящих
        actualRoom.room_amenities.window ? servicesArr.push(['window', actualRoom.room_amenities.window]) : ''                  // Окно
        
        setServicesMain(servicesArr)
        setServicesDop(dopServicesArr)
    }, [actualRoom])

    const init = () => {

        myMap = new ymaps.Map("map", {
            center: [latitude, longitude],
            zoom: 11
        })
    
        let myPlacemark = new ymaps.Placemark([latitude, longitude], {
            hintContent: hotelData.name,
            balloonContent: hotelData.address
        })

        myMap.controls.remove('geolocationControl')
        myMap.controls.remove('searchControl')
        myMap.controls.remove('trafficControl')
        myMap.controls.remove('typeSelector')
        myMap.controls.remove('fullscreenControl')
        myMap.geoObjects.add(myPlacemark)
        myMap.setType('yandex#map')
    }

    useEffect(() => {

        if (!isDesktop) {
            return
        }
        if (!mapReady) {
            return
        }
        if (!hotelData) {
            return
        }

        myMap ? myMap.destroy() : ''

        setTimeout(() => {
            try{
                ymaps.ready(init)
            }
            catch(e){}
        }, 100)

    }, [mapReady])

    function nightsRightText (nights) {

        let text = nights + ' ночей'

        nights == 1 ? text = nights + ' ночь' : ''
        nights == 2 || nights == 3 || nights == 4 ? text = nights + ' ночи' : ''
        return text
    }

    function addBackgroundImage (slider) {
        slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
    }

    function diffDates(day_one, day_two) {

        let day_1 = new Date(day_one.slice(0, 4), day_one.slice(5, 7), day_one.slice(8, 10)),
            day_2 = new Date(day_two.slice(0, 4), day_two.slice(5, 7), day_two.slice(8, 10))
            
        return (day_2 - day_1) / (60 * 60 * 24 * 1000)
    }

    function changeCheckbox () {
        event.target.parentElement.querySelector('label').style.color = 'rgb(51,51,51)'
    }

    function checkFormAndContinue () {

        if (sendingForm != 0) return false

        event.target.innerText = 'Отправка...'

        let target = event.target
        let form = target.parentElement.parentElement.querySelector('.hotel-bron-ready-form-item')
        let incorrectFields = 0
        let users = []

        form.querySelectorAll('.hotel-bron-ready__guest').forEach((item, index) => {

            let obj = {}

                // Фамилия
                if (item.querySelector('input[name="surname"]').value.length > 2) {
                    obj.surname = item.querySelector('input[name="surname"]').value
                }
                else {
                    incorrectFields++
                    item.querySelector('input[name="surname"]').parentElement.classList.add('hotel-bron-necessarily-wrong')
                }

                // Имя
                if (item.querySelector('input[name="name"]').value.length > 2) {
                    obj.name = item.querySelector('input[name="name"]').value
                }
                else {
                    incorrectFields++
                    item.querySelector('input[name="name"]').parentElement.classList.add('hotel-bron-necessarily-wrong')
                }

                // Отчество

                item.querySelector('input[name="patronymic"]').value.length > 2 ? obj.patronymic = item.querySelector('input[name="patronymic"]').value : obj.patronymic = ''

                // День Рождения

                if (item.querySelector('input[name="birthday"]').inputmask.isComplete()) {
                    obj.birthday = item.querySelector('input[name="birthday"]').value
                }
                else {
                    incorrectFields++
                    item.querySelector('input[name="birthday"]').parentElement.classList.add('hotel-bron-necessarily-wrong')
                }

                // Если не первый гость, то эти данные не надо собирать
                if (index != 0) {
                    users.push(obj)
                    return
                }

                // Телефон
                if (item.querySelector('input[name="phone"]').inputmask.isComplete()) {
                    obj.phone = item.querySelector('input[name="phone"]').value
                }
                else {
                    incorrectFields++
                    item.querySelector('input[name="phone"]').parentElement.classList.add('hotel-bron-necessarily-wrong')
                }

                // Email
                if (item.querySelector('input[name="email"]').value.indexOf('@') != -1) {
                    obj.email = item.querySelector('input[name="email"]').value
                }
                else {
                    incorrectFields++
                    item.querySelector('input[name="email"]').parentElement.classList.add('hotel-bron-necessarily-wrong')
                }
                users.push(obj)
        })

        if (!document.querySelector('#bron-agree-checkbox-1').checked) {
            document.querySelector('#bron-agree-checkbox-1').parentElement.querySelector('label').style.color = 'red'
            incorrectFields++
        }

        if (incorrectFields) {
            setSendingForm(0)
            event.target.innerText = 'Отправить'
            return false
        }

        let ucomment = '\n'

        // Данные отеля
        
        ucomment += 'Отель: ' + hotelData.name + '\n'
        ucomment += 'Номер: ' + query.room + '\n\n'

        // Данные взрослых гостей
        for (let i = 0; i < users.length; i++) {

            if (i > 0) {
                ucomment += '\n'
            }

            ucomment += `Гость ${(i + 1)}:\n`
            users[i].name ? ucomment += `Имя: ${users[i].name}\n` : ''
            users[i].surname ? ucomment += `Фамилия: ${users[i].surname}\n` : ''
            users[i].patronymic ? ucomment += `Отчество: ${users[i].patronymic}\n` : ''
            users[i].birthday ? ucomment += `Дата рождения: ${users[i].birthday}\n` : ''
        }

        // Данные детей
        for (let i = 0; i < children.length; i++) {
            ucomment += '\n'
            ucomment += `Ребенок ${(i + 1)}, возраст: ${children[i]}:\n`
        }

        ucomment += `\n`

        let str_obj = {
            'uname': users[0].name,
            'email': users[0].email,
            'phone': users[0].phone,
            'ucomment': ucomment,
            'u': document.body.getAttribute('data-u')
        }

        // Отправка строки, с передачей объекта какие-то проблемы
        let str = ''
            str += 'uname=' + users[0].name
            str += '&email=' + (users[0].email || '')
            str += '&phone=' + users[0].phone
            str += '&ucomment=' + ucomment
            str += '&email=' + users[0].email
            str += '&hotel_id=' + 14946
            str += '&source=' + 'maotonline.ru'
            str += '&u=' + document.body.getAttribute('data-u')
            str += '&date_st=' + query.start_date
            str += '&date_end=' + query.end_date
        
        async function sendData () {

            let response = await fetch('https://maot.ru/remote/zayavka_to_knight.php', {
                method: 'POST',
                headers: {  
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
                },
                body: str
            })
    
            let result = await response.json()
            
            if (result.r == 1) {
                target.innerText = 'Успешно!'
                setFormState(1)

                setTimeout(() => {
                    target.innerText = 'Отправить'
                    setSendingForm(0)
                }, 200)
            }

            else {
                setFormState(2)
            }
        }

        sendData()
    }

    // Удалить яндекс карты
    useEffect(() => {
        return () => {
            document.getElementById('y-maps') ? document.getElementById('y-maps').remove() : ''
        }
    }, [])

/*
    if (!query.start_date || !query.end_date || !query.adults || !query.id) {
        return <>
            <div className={styles["no-data-query"]}>
                Недостаточно данных для бронирования
            </div>
        </>
    }
*/

    if (!hotelData) {
        return <>
            <style jsx global>{`
                .main {
                    opacity: 0
                }
            `}</style>
        </>
    }

    return (
        <>
            <Head>
                <title>Бронирование номера</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charset="utf-8" />
            </Head>

            <Script id = "y-maps" src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" strategy="afterInteractive" onReady={() => {
                setMapReady(1)
            }} />
{/*}
            <Script
                src="https://code.jquery.com/jquery-2.2.4.min.js"
                integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
                crossorigin="anonymous" defer />

            <Script src="https://zarya-tour.ru/frontend/web/js/main/u.js" defer />
        */}
            <h1 className = "secondary-h1">Бронирование номера</h1>
            <div className={styles["hotel-bron-top"]}>
                <div className={styles["hotel-bron-slider"]}>
                    {hotelData.images ? 
                        <Swiper
                            onSlideChange = {slider => addBackgroundImage(slider)}
                            slidesPerView={1}
                            spaceBetween={0}
                            navigation={true}
                            modules={[Navigation]}
                            className='select-search-item-pics'
                        >
                            {hotelData.images.map((item, index) => {
                                return (
                                    <SwiperSlide
                                        className={'select-results__item-image'}
                                        key = {index}
                                        data-pic = {item}
                                        style = {index == 0 ? {backgroundImage: `url(${item})`} : {}}
                                    ></SwiperSlide>
                                )
                            })}

                        </Swiper>
                        :''}
                    <div className = {styles["arrow-left"]}></div>
                    <div className = {styles["arrow-right"]}></div>
                </div>
                {isDesktop ? 
                    <div className={styles["hotel-bron-map-w"]}>
                        <div className={styles["hotel-bron-map"]} id = "map" style = {{'display': [mapState ? 'none' : 'block']}}>
                            <div className = {styles["hotel-bron-info"]}>
                                <p className = {styles["hotel-bron-info__title"]}>{hotelData.name}</p>
                                <p>Координаты:&nbsp;
                                    <a className = {styles["hotel-map__coordinates"]}>
                                        {latitude}, {longitude}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className={styles["hotel-bron-way-w"]} style = {{'display': [mapState ? 'block' : 'none']}}>
                            <div className={styles["hotel-bron-way-block"]}>
                                <p className="subtitle-bold">Адрес</p>
                                <p className="hotelData-address">{hotelData.address}</p>
                            </div>
                            {
                            hotelData.howTo ? 
                            (<div>
                                <p className="bold-span">Как проехать</p>
                                <p></p>
                            </div>) : ('')
                            }
                            <div className = {styles["hotel-bron-way-coordinates"]}>Координаты:&nbsp;
                                <a className = {styles["hotel-map__coordinates"]}>
                                    {latitude}, {longitude}
                                </a>
                            </div>
                        </div>
                        <div className = {styles["hotel-bron-map__after"]}>
                            <a className = {`${styles["hotel-bron-map__link"]} hotel-bron-map__link${mapState ? ' active' : ''}`}
                                onClick = {() => setMapState(1)}
                            >Как проехать</a>
                            <a className = {`${styles["hotel-bron-map__link"]} hotel-bron-map__link${mapState ? '' : ' active'}`}
                                onClick = {() => setMapState(0)}
                            >Отель на карте</a>
                        </div>
                    </div>
                : ''}
            </div>
            <div className={styles["hotel-bron-data-title"]}>

                <h3 className={styles["hotel-bron-data-title__h3"]}>Отель <a>{hotelData.name}</a></h3>
                <h4 className={styles["hotel-bron-data-title__h4"]}>Номер <a>{query.room}</a></h4>

                <div className={styles["hotel-bron-services-w"]}>
                    <div className={styles["hotel-bron-services-small"]}>
                        {servicesMain.map((item, index) => {
                            if (index > 3) return false
                            return (
                                <span
                                    className = {`${styles["serv-item__more-services"]} ${"serv-item__more-services"} ${"serv-item__block_" + item[0]}`}
                                    key = {index}>
                                    {item[1][0].toUpperCase() + item[1].slice(1)}
                                </span>)
                        })}
                    </div>
                    <div className={styles["hotel-bron-services-big"]}>
                        {servicesDop.map((item, index) => {
                            if (!servicesState && index > 15) return false
                            return (
                                <div className={styles["hotel-bron-services-big__item"]} key = {index}>
                                    {item}
                                </div>
                            )
                        })}
                        <a className = {styles["hotel-bron-services__more"]} onClick={() => setServicesState(servicesState => !servicesState)}>
                            {servicesState ? 'Свернуть' : 'Показать все услуги'}
                        </a>
                    </div>
                </div>
                <div className={styles["hotel-bron-ready"]}>
                    <div className={`${styles["hotel-bron-ready-item-w"]}`}>
                        <div className={styles["hotel-bron-ready-somediv"]}>
                            <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-in"]}`}>
                                <p className={styles["hotel-bron-ready__title"]}>Заезд</p>
                                <p className={styles["hotel-bron-ready__info"]}>{dateInValue}</p>
                            </div>
                            <div className={`${styles["hotel-bron-ready-next"]}`}></div>
                            <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-out"]}`}>
                                <p className={styles["hotel-bron-ready__title"]}>Выезд</p>
                                <p className={styles["hotel-bron-ready__info"]}>{dateOutValue}</p>
                            </div>
                        </div>
                        <div className={styles["hotel-bron-ready__text"]}>Всего дней отдыха <span>{diffDates(query.start_date, query.end_date)}</span></div>
                    </div>
                    <div className={`${styles["hotel-bron-ready-middle"]}`}></div>
                    <div className={`${styles["hotel-bron-ready-item-w"]}`}>
                        <div className={styles["hotel-bron-ready-somediv"]}>
                            <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-adults"]}`}>
                                <p className={styles["hotel-bron-ready__title"]}>Взрослых</p>
                                <p className={styles["hotel-bron-ready__info"]}>{guests.length}</p>
                            </div>
                            {children.length ?
                            <div className={`${styles["hotel-bron-ready-item"]} ${styles["hotel-bron-ready-childs"]}`}>
                                <p className={styles["hotel-bron-ready__title"]}>Детей</p>
                                <p className={styles["hotel-bron-ready__info"]}>{children.length}</p>
                            </div>
                            : ''}
                        </div>
                        <div className={styles["hotel-bron-ready__text"]}>Всего гостей {guests.length + children.length}<span></span></div>
                    </div>
                    <div className={`${styles["hotel-bron-ready-middle"]}`}></div>

                    <div className={`${styles["hotel-bron-ready-green-w"]}`}>
                        <div className={`${styles["hotel-bron-ready-green"]}`}>
                            <p className={`${styles["hotel-bron-final-price"]}`}>{+actualRoom.price} ₽</p>
                            <p className={`${styles["hotel-bron-final-price__nights"]}`}>за {nightsRightText(diffDates(query.start_date, query.end_date))}</p>
                        </div>
                        <div className={styles["hotel-bron-ready__text"]}>Итоговая цена<span></span></div>
                    </div>
                </div>
                {formState == 0 ? (
                    <div className="bron-step-1">
                        <div className={styles["hotel-bron-contactinfo"]}>
                            <p className={styles["hotel-bron-contactinfo__title"]}>Контактные данные гостей.</p>
                            <p className={styles["hotel-bron-contactinfo__subtitle"]}>Пожалуйста, заполните все поля.</p>
                        </div>

                        <div className={styles["hotel-bron-ready-form"]}>
                            <form action="" name = "hotel-bron-ready-form" className="hotel-bron-ready-form-item">
                                {guests.map((item, index) => {
                                        return <Adult_user key = {index} number = {item + 1} />
                                    }
                                )}
                                {children.length && children.length > 0 ?
                                    <div className={styles["hotel-bron-ready__children"]}>
                                        <p className={styles["guest-text-title"]}>Количество детей {children.length}</p>
                                        <div className={styles["children-age-wrapper"]}>
                                            {children.map((item, index) => {
                                                return (
                                                    <div key = {index} className={`${styles["children-age-block"]} ${styles["hotel-bron-necessarily"]}`}>{childAges[item]}</div>
                                                )
                                            })}
                                        </div>
                                    </div> : ''
                                }
                                <div className={styles["hotel-bron-required-attention-w"]}>
                                    <div className = "subscribe-agree">
                                        <input type="checkbox" id="bron-agree-checkbox-1" className = {styles["broned"]} defaultChecked onChange = {changeCheckbox} /> 
                                        <label htmlFor="bron-agree-checkbox-1">
                                        Я соглашаюсь с политикой конфиденциальности</label>
                                    </div>
                                    <div className = {styles["hotel-bron-required-attention-w"]}>
                                        <span className={styles["hotel-bron-required-attention"]}>*</span> обязательно для заполнения
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={styles["hotel-bron-btn-w"]}>
                        <button className={styles["hotel-bron-btn"]} onClick = {checkFormAndContinue}>Отправить</button>
                    </div>
                    </div>
                    ) : ('')
                }
                {formState == 1 ? (
                    <div className = {styles["bron-success-block"]}>
                        <p className={styles["bron-success-block-title"]}>Спасибо!</p>
                        <p className={styles["bron-success-block-title"]}>Данный этап бронирования успешно пройден.</p>
                        <p className={styles["bron-success-block-text"]}>Сейчас вы будете перенаправлены на страницу оплаты.</p>
                    </div>
                    ) : ('')
                }
                {formState == 2 ? (
                    <div className = {styles["bron-error-block"]}>
                        <p className={styles["bron-success-block-title"]}>Что-то пошло не так!</p>
                        <p className={styles["bron-success-block-title"]}>К сожалению, не получилось пройти данный этап бронирования</p>
                        <p className={styles["bron-success-block-text"]}>Попробуйте обратиться за помощью по телефону <a href = "tel:+74956486711">+7 495 648 67 11</a></p>
                    </div>
                    ) : ('')
                }
            </div>
        </>
    )
}
export default Hotelbooking