import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import styles from "../../styles/search_results/Search_hotel_item.module.css"
import "swiper/css"

const Hotel_card = ({item, rates, nights, query}) => {
    const [view, changeView] = useState(0)
    const [servicesMain, setServicesMain] = useState([])
    const [servicesDop, setServicesDop] = useState([])

    //console.log(rates[0])


    useEffect(() => {

        // Заполнить главные услуги
        let servicesArr = []
        let dopServicesArr = []

        rates[0].meal ? servicesArr.push(['meal', rates[0].meal[0]]) : ''          // Питание

        // Добавить в главные услуги из объекта общих отельных услуг

        for (let i = 0; i < item.services.length; i++) {
            if (item.services[i].group_name == "Интернет") {
                for (let k = 0; k < item.services[i].amenities.length; k++) {
                    item.services[i].amenities[k].indexOf('Wi-Fi') + 1 ||
                    item.services[i].amenities[k].indexOf('wi-fi') + 1 || 
                    item.services[i].amenities[k].indexOf('WI-FI') + 1 ? 
                    servicesArr.push(['internet', item.services[i].amenities[k]]) : ''
                }
                continue
            }
            if (item.services[i].group_name == "В номерах") {
                for (let k = 0; k < item.services[i].amenities.length; k++) {
                    item.services[i].amenities[k].indexOf('Холодильник') + 1 ? 
                    servicesArr.push(['fridge', item.services[i].amenities[k]]) : ''
                }
                continue
            }

            if (item.services[i].group_name == "Общее") {
                for (let k = 0; k < item.services[i].amenities.length; k++) {
                    item.services[i].amenities[k].indexOf('Кондиционер') + 1 ? 
                    servicesArr.push(['conditioner', item.services[i].amenities[k]]) : ''
                }
                continue
            }
        }

        for (let i = 0; i < item.services.length; i++) {
            for (let k = 0; k < item.services[i].amenities.length; k++) {
                dopServicesArr.push(item.services[i].amenities[k])
            }
        }

        rates[0].room_info.bathroom ? servicesArr.push(['bathroom', rates[0].room_info.bathroom]) : ''                      // Ванна
        rates[0].room_info.bed ? servicesArr.push(['bed', rates[0].room_info.bed]) : ''                                     // Кровать
        rates[0].room_amenities.nonSmoking ? servicesArr.push(['nonSmoking', rates[0].room_amenities.nonSmoking]) : ''      // Для некурящих
        rates[0].room_amenities.window ? servicesArr.push(['window', rates[0].room_amenities.window]) : ''                  // Окно
        
        console.log(servicesArr)

        setServicesMain(servicesArr)
        setServicesDop(dopServicesArr)
    }, [item])
    
    function addBackgroundImage (slider) {
        slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
    }

    function returnServices (num) {

        let text = '',
            a = [1, 21, 31, 41, 51, 61, 71, 81, 91, 101],
            b = [2,3,4,22,23,24],
            c = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,26,27,28,29,30]

        a.forEach(element => {
            num == element ? text = ' услуга...' : ''
        })

        b.forEach(element => {
            num == element ? text = ' услуги...' : ''
        })

        c.forEach(element => {
            num == element ? text = ' услуг...' : ''
        })

        return num + text
    }

    function nightsRightText (nights) {

        let text = nights + ' ночей'

        nights == 1 ? text = nights + ' ночь' : ''
        nights == 2 || nights == 3 || nights == 4 ? text = nights + ' ночи' : ''
        return text
    }


    // Ссылка на отель

    let obj = {
        datein: query.datein || 0,
        dateout: query.dateout || 0,
        adults: query.adults || 0,
        hotel_id: item.id
    }

    let url = '/hoteldetail?'

    for (let key in obj) {
        key == "datein" ? url += (key + "=" + obj[key]) : url += ('&' + key + "=" + obj[key])
    }

    // Дети
    if (query.children_ages && Number.isInteger(+query.children_ages)) {
        url += '&children_ages=' + query.children_ages
    }

    if (query.children_ages && Array.isArray(query.children_ages)) {
        for (let i = 0; i < query.children_ages.length; i++) {
            url += '&children_ages=' + query.children_ages[i]
        }
    }

    return (
        <div className={view ? `${styles[`select-results__item`]} ${styles["select-results__item-active"]}` : styles["select-results__item"]}>
            <div className={view ? `${styles["select-results__item-pic"]} ${styles["select-results__item-pic-big"]}` : styles["select-results__item-pic"]}>
                <div className = "slider-show-hide" onClick = {() => changeView(view => !view)}></div>
                <Swiper
                    onSlideChange = {slider => addBackgroundImage(slider)}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop = {true}
                    pagination={{
                        clickable: true,
                        bulletClass: `reviews-pagination-bullet`
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className='select-search-item-pics'
                >
                    {item.images.map((item, index) => {
                        if (index > 7) return false
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
            </div>
            <div className={styles["select-results__item-content"]}>
                    
                <a href = {url} target = "_blank" className={styles["select-item-title"]}>{item.name}</a>

                <div className = {styles["select-item-info"]}>
                    <div className = {view ? `${styles["serv-item__block"]} ${styles["active-serv-list"]}` : styles["serv-item__block"]}>
                        {servicesMain.map((item, index) => {
                            if (!view) {
                                if (index > 3) return false
                                return (
                                    <span
                                        className = {`${styles["serv-item__more-services"]} ${"serv-item__more-services"} ${"serv-item__block_" + item[0]}`}
                                        key = {index}>
                                        {item[1][0].toUpperCase() + item[1].slice(1)}
                                    </span>)
                            }
                        })}
                        {servicesMain.length > 4 && !view ? (<span className = {`${styles["serv-item__more-services"]}`}>Еще {returnServices(servicesMain.length - 4)}</span>) : ('')}
                    </div>
                    <div className = {view ? `${styles["serv-item__btn"]} ${styles["serv-item__btn-active"]}` : styles["serv-item__btn"]} onClick = {() => changeView(view => !view)}>
                         {view ? <span className = {styles["serv-active-btn"]}>Скрыть подробное&nbsp;описание</span> : 
                         <span className = {styles["serv-passiv-btn"]}>Подробнее&nbsp;о&nbsp;номере</span>}
                    </div>
                    <div>
                        <div className = {view ? `${styles["serv-item__block"]} ${styles["active-serv-list"]}` : styles["serv-item__block"]}>
                            {servicesMain.map((item, index) => {
                                if (view) {
                                    return (
                                        <span
                                            className = {`${styles["serv-item__more-services"]} ${"serv-item__more-services"} ${"serv-item__block_" + item[0]}`}
                                            key = {index}>
                                            {item[1][0].toUpperCase() + item[1].slice(1)}
                                        </span>)
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles["select-results__item-price"]}>
                    <div className={styles["select-results-info"]}>
                        <div className={styles["select-results-guest-info"]}>
                            <span className = {styles["select-results-from"]}>от</span>
                        </div>
                        <div className = {styles["select-results-from"]}>
                            <span className = {styles["select-from-value"]}>{(+rates[0].price).toLocaleString('ru')}</span>&nbsp;
                            <span className = {styles["select-from-currency"]}>&#8381;</span>
                        </div>
                        <div className = {styles["select-results-from-info"]}>
                            <span>цена за</span>&nbsp;
                            <span className = {styles["select-results-nights"]}>{nightsRightText(nights)}</span>
                        </div>
                    </div>
                    <a href = {url} target = "_blank" className = {styles["select-results-bron"]}>Забронировать</a>
                </div>
            </div>
            {servicesDop.length > 8 ?
                <div className={styles["select-results__item-text"]}>
                        {servicesDop.map((item, index, arr) => {
                            if (index <= 8) return ('')

                            if (!view) {
                                if (index > 18) return false
                                if (index == 18 && servicesDop.length > 18) {
                                    return <span key = {index} className = {`${styles["serv-item__more-services-dop"]} ${styles["serv-item__more-span"]}`}>еще {returnServices(servicesDop.length - 18)}</span>
                                }
                            }
                            return (
                                <span className = {styles["serv-item__more-services-dop"]} key = {index}>{item}</span>
                            )
                        })}
                </div> : ''
            }
        </div>
    )
}

export default Hotel_card








/*

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

import { useRouter } from "next/router"

import styles from "../../styles/search_results/Search_hotel_item.module.css"
import "swiper/css"

export default function Search_hotel_item ({item, rates, nights}) {

    const { query } = useRouter()

    function nightsRightText (nights) {

        let text = nights + ' ночей'

        nights == 1 ? text = nights + ' ночь' : ''
        nights == 2 || nights == 3 || nights == 4 ? text = nights + ' ночи' : ''
        return text
    }

    function addBackgroundImage (slider) {
        slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
    }

    // Ссылка на отель

    let obj = {
        datein: query.datein || 0,
        dateout: query.dateout || 0,
        adults: query.adults || 0,
        hotel_id: item.id
    }

    let url = '/hoteldetail?'

    for (let key in obj) {
        key == "datein" ? url += (key + "=" + obj[key]) : url += ('&' + key + "=" + obj[key])
    }

    // Дети
    if (query.children_ages && Number.isInteger(+query.children_ages)) {
        url += '&children_ages=' + query.children_ages
    }

    if (query.children_ages && Array.isArray(query.children_ages)) {
        for (let i = 0; i < query.children_ages.length; i++) {
            url += '&children_ages=' + query.children_ages[i]
        }
    }

    return (

        <div className={styles["search-item"]}>

                <Swiper
                    onSlideChange = {slider => addBackgroundImage(slider)}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop = {true}
                    pagination={{
                        clickable: true,
                        bulletClass: `reviews-pagination-bullet`
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className='search-item-pics'
                >
                    {item.images.slice(0, 6).map((item, index) => {
                        return (
                            <SwiperSlide
                                className={styles["search-item-pic"]}
                                key = {index}
                                data-pic = {item}
                                style = {index == 0 ? {backgroundImage: `url(${item})`} : {}}
                            ></SwiperSlide>
                        )
                    })}
                </Swiper>

            <div className = {styles["search-item__content"]}>
                <a href = {url} target = "_blank" className = {styles["search-item__title"]}>{item.name}</a>
                <ul className = {styles["search-item__list"]}>
                    {item.services.map((item, index) => {
                        return (
                            <li key = {index} className = {styles["search-item__item"]}>{item}</li>
                        )
                    })}
                </ul>
                {item.address ?
                    <div className = {styles["search-item__adress"]}>
                        {item.address}
                    </div> : ''
                }
            </div>
            <div className = {styles["search-item__broninfo"]}>
                <div className = {styles["search-item__price"]}>
                    <span className = {styles["search-item__price-from"]}>от</span>
                    <span className = {styles["search-item__price-number"]}>{(+rates[0].price).toLocaleString('ru')}</span>
                    <span className = {styles["search-item__price-currency"]}>&#8381;</span>
                </div>
                <p className = {styles["search-item__nights"]}>цена за <span className = {styles["search-item__nights-number"]}>{nightsRightText(nights)}</span></p>
                <a href = {url} target = "_blank" className = {styles["search-item__bron"]}>Выбрать</a>
            </div>
        </div>
    )
}
*/