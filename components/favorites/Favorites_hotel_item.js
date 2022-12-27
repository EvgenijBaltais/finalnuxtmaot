import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import styles from "../../styles/favorites/Favorites_hotel_item.module.css"
import "swiper/css"

const Favorites_hotel_item = ({hotel, rates, nights}) => {
    const [view, changeView] = useState(0)
    const [isFavorite, setIsFavorite] = useState(false)
    const [moreThan1040, setMoreThan1040] = useState(0)

    useEffect(() => {

        setMoreThan1040(window.screen.width > 1040)

        window.addEventListener('resize', () => {
            setMoreThan1040(window.screen.width > 1040)
        })

        let arr = []

        localStorage.getItem('hotels') ? arr = JSON.parse(localStorage.getItem('hotels')) : ''

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].hotel.id == hotel.id) {
                setIsFavorite(true)
            }
        }
    }, [])
    
    function addBackgroundImage (slider) {
        slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
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

    // Ссылка на отель

    function getDate(date) {

    	var dd = date.getDate();
    	if (dd < 10) dd = '0' + dd;

    	var mm = date.getMonth() + 1;
    	if (mm < 10) mm = '0' + mm;

    	var yy = date.getFullYear();
    	if (yy < 10) yy = '0' + yy;

    	return dd + '.' + mm + '.' + yy;
    }

    let date = new Date()
    let today = getDate(date)
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1)
        tomorrow = getDate(tomorrow)

    let url = `/hoteldetail?datein=${today}&dateout=${tomorrow}&adults=2&hotel_id=${hotel.id}`

    function checkFavorite () {

        let arr = []

        localStorage.getItem('hotels') ? arr = JSON.parse(localStorage.getItem('hotels')) : ''

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].hotel.id == hotel.id) {
                setIsFavorite(false)
                arr.splice(i, 1)
                localStorage.setItem('hotels', JSON.stringify(arr))
                return false
            }
        }

        setIsFavorite(true)

            let obj = {}

            obj.hotel = hotel

            // Удалить лишние ненужные поля, чтобы не сохранять в localstorage огромные массивы с лишней инфой
            obj == removeUnnecessaryFields (obj)

            arr.push(obj)
            localStorage.setItem('hotels', JSON.stringify(arr))

            if (!setMoreThan1040) return false   // Если менее 1040, то в меню не добавляется уведомление

            // Вставить всплывающее окно, что отель добавлен в Избранное
            
            let menuFavorite = document.querySelectorAll('.nav-link')[document.querySelectorAll('.nav-link').length - 1]

            new Promise(res => {
                menuFavorite.insertAdjacentHTML('beforeend',
                    `<div class='favorite-info'>
                            <a class='favorite-info-link'>Отель ${hotel.name}</a>
                            <p class='favorite-info-text'>Добавлен в Избранное</p>
                        </div>
                    `
                    )
                    res()
                }).then(() => {
                    setTimeout(() => {
                        menuFavorite.querySelector('.favorite-info').remove()
                    }, 1200)
                })

    }

    function removeUnnecessaryFields (item) {

        // Удалить лишние ненужные поля, чтобы не сохранять в localstorage огромные массивы с лишней инфой
        delete item.hotel.address
        delete item.hotel.coordinates
        delete item.hotel.crm_id
        delete item.hotel.description
        delete item.hotel.services
        delete item.hotel.star_rating
        delete item.hotel.type_id
        
        return item
    }

    return (
        <div className={view ? `${styles[`select-results__item`]} ${styles["select-results__item-active"]} select-results__item select-results__item-active` : `${styles["select-results__item"]} select-results__item`}>
            <a className = {isFavorite ? `add-to-favorite add-to-favorite-active` : `add-to-favorite`} onClick = {checkFavorite}></a>
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
                    {hotel.images.map((item, index) => {
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
                    
                <a href = {url} target = "_blank" className={styles["select-item-title"]}>{hotel.name}</a>

                <div className = {styles["select-item-info"]}>
                    <div className = {view ? `${styles["serv-item__block"]} ${styles["active-serv-list"]}` : styles["serv-item__block"]}>
                        {hotel.servicesMain.map((item, index) => {
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
                        {hotel.servicesMain.length > 4 && !view ? (<span className = {`${styles["serv-item__more-services"]}`}>Еще {returnServices(hotel.servicesMain.length - 4)}</span>) : ('')}
                    </div>
                    <div className = {view ? `${styles["serv-item__btn"]} ${styles["serv-item__btn-active"]}` : styles["serv-item__btn"]} onClick = {() => changeView(view => !view)}>
                         {view ? <span className = {styles["serv-active-btn"]}>Скрыть подробное&nbsp;описание</span> : 
                         <span className = {styles["serv-passiv-btn"]}>Подробнее&nbsp;о&nbsp;номере</span>}
                    </div>
                    <div>
                        <div className = {view ? `${styles["serv-item__block"]} ${styles["active-serv-list"]}` : styles["serv-item__block"]}>
                            {hotel.servicesMain.map((item, index) => {
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

                    </div>
                    <a href = {url} target = "_blank" className = {styles["select-results-bron"]}>Выбрать</a>
                </div>
            </div>
            {hotel.servicesDop.length > 8 ?
                <div className={styles["select-results__item-text"]}>
                        {hotel.servicesDop.map((item2, index) => {
                            if (index <= 8) return ('')

                            if (!view) {
                                if (index > 18) return false
                                if (index == 18 && hotel.servicesDop.length > 18) {
                                    return <span key = {index} className = {`${styles["serv-item__more-services-dop"]} ${styles["serv-item__more-span"]}`}
                                        onClick = {() => changeView(view => !view)}>
                                        еще {returnServices(hotel.servicesDop.length - 18)}
                                    </span>
                                }
                            }
                            return (
                                <span className = {styles["serv-item__more-services-dop"]} key = {index}>{item2}</span>
                            )
                        })}
                </div> : ''
            }
        </div>
    )
}

export default Favorites_hotel_item