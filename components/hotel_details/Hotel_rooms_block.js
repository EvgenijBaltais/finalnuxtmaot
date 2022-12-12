import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import Link from "next/link"
import styles from "../../styles/Hoteldetail.module.css"
import "swiper/css"

const Hotel_rooms_block = ({item, hotelInfo, bronPageLink}) => {
    const [view, changeView] = useState(0)
    const [servicesMain, setServicesMain] = useState([])
    const [servicesDop, setServicesDop] = useState([])

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

    bronPageLink += '&room=' + item.room_name

    let data_arr = bronPageLink.split('&')

    let adults = 0,
        children = [],
        start_date = '',
        end_date = '',
        nights = 1

    for (let i = 0; i < data_arr.length; i++) {
        
        data_arr[i].indexOf('adults') != -1 ? adults = data_arr[i].slice(data_arr[i].indexOf('=') + 1) : ''
        data_arr[i].indexOf('start_date') != -1 ? start_date = data_arr[i].slice(data_arr[i].indexOf('=') + 1) : ''
        data_arr[i].indexOf('end_date') != -1 ? end_date = data_arr[i].slice(data_arr[i].indexOf('=') + 1) : ''
        data_arr[i].indexOf('children_ages') != -1 ? children.push(data_arr[i].slice(data_arr[i].indexOf('=') + 1)) : ''
    }

    start_date = new Date(start_date)
    end_date = new Date(end_date)
    nights = (end_date - start_date) / (60 * 60 * 24 * 1000)

    useEffect(() => {

        // Заполнить главные услуги
        let servicesArr = []
        let dopServicesArr = []

        item.meal ? servicesArr.push(['meal', item.meal[0]]) : ''          // Питание

        // Добавить в главные услуги из объекта общих отельных услуг

        for (let i = 0; i < hotelInfo.services.length; i++) {
            if (hotelInfo.services[i].group_name == "Интернет") {
                for (let k = 0; k < hotelInfo.services[i].amenities.length; k++) {
                    hotelInfo.services[i].amenities[k].indexOf('Wi-Fi') + 1 ||
                    hotelInfo.services[i].amenities[k].indexOf('wi-fi') + 1 || 
                    hotelInfo.services[i].amenities[k].indexOf('WI-FI') + 1 ? 
                    servicesArr.push(['internet', hotelInfo.services[i].amenities[k]]) : ''
                }
                continue
            }
            if (hotelInfo.services[i].group_name == "В номерах") {
                for (let k = 0; k < hotelInfo.services[i].amenities.length; k++) {
                    hotelInfo.services[i].amenities[k].indexOf('Холодильник') + 1 ? 
                    servicesArr.push(['fridge', hotelInfo.services[i].amenities[k]]) : ''
                }
                continue
            }

            if (hotelInfo.services[i].group_name == "Общее") {
                for (let k = 0; k < hotelInfo.services[i].amenities.length; k++) {
                    hotelInfo.services[i].amenities[k].indexOf('Кондиционер') + 1 ? 
                    servicesArr.push(['conditioner', hotelInfo.services[i].amenities[k]]) : ''
                }
                continue
            }
        }

        for (let i = 0; i < hotelInfo.services.length; i++) {
            for (let k = 0; k < hotelInfo.services[i].amenities.length; k++) {
                dopServicesArr.push(hotelInfo.services[i].amenities[k])
            }
        }

        item.room_info.bathroom ? servicesArr.push(['bathroom', item.room_info.bathroom]) : ''                      // Ванна
        item.room_info.bed ? servicesArr.push(['bed', item.room_info.bed]) : ''                                     // Кровать
        item.room_amenities.nonSmoking ? servicesArr.push(['nonSmoking', item.room_amenities.nonSmoking]) : ''      // Для некурящих
        item.room_amenities.window ? servicesArr.push(['window', item.room_amenities.window]) : ''                  // Окно
        
        setServicesMain(servicesArr)
        setServicesDop(dopServicesArr)
    }, [item])
    
    function addBackgroundImage (slider) {
        slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
    }

    function returnAdults (num) {

        let text = ' взрослых',
            a = [1, 21, 31, 41, 51, 61, 71, 81, 91, 101]

        a.forEach(element => {
            num == element ? text = ' взрослый' : ''
        })

        return num + text
    }

    function returnChildren (num) {

        let text = '',
            a = [1, 21, 31, 41, 51, 61, 71, 81, 91, 101],
            b = [2,3,4,22,23,24],
            c = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,26,27,28,29,30]

        a.forEach(element => {
            num == element ? text = ' ребенок' : ''
        })

        b.forEach(element => {
            num == element ? text = ' ребенка' : ''
        })

        c.forEach(element => {
            num == element ? text = ' детей' : ''
        })

        return num + text
    }

    function returnServices (num) {

        let text = '',
            a = [1, 21, 31, 41, 51, 61, 71, 81, 91, 101],
            b = [2,3,4,22,23,24,32,33,34,42,43,44,52,53,54,62,63,64,72,73,74,82,83,84,92,93,94,102,103,104],
            c = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,26,27,28,29,30,35,36,37,38,39,40,45,46,47,48,49,50,55,56,57,58,59,60,65,66,67,68,69,70,75,76,77,78,79,80,85,86,87,88,89,90,95,96,97,98,99,100]

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

    return (
        <div className={view ? `${styles[`select-results__item`]} ${styles["select-results__item-active"]}` : styles["select-results__item"]}>
            <div className={view ? `${styles["select-results__item-pic"]} ${styles["select-results__item-pic-big"]}` : styles["select-results__item-pic"]}>
                {isDesktop ?
                    <div className = "slider-show-hide" onClick = {() => changeView(view => !view)}></div> : ''
                }
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
                <Link href = {`${'/hotelbooking?' + bronPageLink}`}>
                    <a className={styles["select-item-title"]}>{item.room_name}</a>
                </Link>
                <div className = {styles["select-item-info"]}>
                    <div className = {view ? `${styles["serv-item__block"]} ${styles["active-serv-list"]}` : styles["serv-item__block"]}>
                        {servicesMain.map((item, index) => {
                            if (!view) {
                                if (index > 4) return false
                                return (
                                    <span
                                        className = {`${styles["serv-item__more-services"]} ${"serv-item__more-services"} ${"serv-item__block_" + item[0]}`}
                                        key = {index}>
                                        {item[1][0].toUpperCase() + item[1].slice(1)}
                                    </span>)
                            }
                        })}
                        {servicesMain.length > 5 && !view ? (<span className = {`${styles["serv-item__more-services"]}`}>Еще {returnServices(servicesMain.length - 5)}</span>) : ('')}
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
                            <span className = {styles["select-results-adults"]}>{returnAdults(adults)}</span>
                            {children.length ? 
                                <span className = {styles["select-results-child"]}>, {returnChildren(children.length)}</span>
                                : ''
                            }
                        </div>
                        <div className = {styles["select-results-from"]}>
                            <span className = {styles["select-from-value"]}>{(+item.price).toLocaleString('ru')}</span>&nbsp;
                            <span className = {styles["select-from-currency"]}>&#8381;</span>
                        </div>
                        <div className = {styles["select-results-from-info"]}>
                            <span>цена за</span>&nbsp;
                            <span className = {styles["select-results-nights"]}>{nightsRightText(nights)}</span>
                        </div>
                    </div>
                    <Link href = {`${'/hotelbooking?' + bronPageLink}`}>
                        <a className = {styles["select-results-bron"]}>Забронировать</a>
                    </Link>
                </div>
            </div>
            {servicesDop.length > 8 ?
                <div className={styles["select-results__item-text"]}>
                        {servicesDop.map((item, index, arr) => {
                            if (index <= 8) return ('')

                            if (!view) {
                                if (index > 18) return false
                                if (index == 18 && servicesDop.length > 18) {
                                    return <span key = {index} className = {`${styles["serv-item__more-services-dop"]} ${styles["serv-item__more-span"]}`}
                                    onClick = {() => changeView(view => !view)}
                                    >еще {returnServices(servicesDop.length - 18)}</span>
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

export default Hotel_rooms_block