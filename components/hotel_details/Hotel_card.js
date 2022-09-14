import { useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import Link from "next/link"
import styles from "../../styles/Hoteldetail.module.css"
import "swiper/css"

const Hotel_card = ({item, adults, children, nights}) => {
    const [view, changeView] = useState(0)
    
    function addBackgroundImage (slider) {
        slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
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
            b = [2,3,4,22,23,24],
            c = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,26,27,28,29,30]

        a.forEach(element => {
            num == element ? text = ' услуга' : ''
        })

        b.forEach(element => {
            num == element ? text = ' услуги' : ''
        })

        c.forEach(element => {
            num == element ? text = ' услуг' : ''
        })

        return num + text
    }

    function nightsRightText (nights) {

        let text = nights + ' ночей'

        nights == 1 ? text = nights + ' ночь' : ''
        nights == 2 || nights == 3 || nights == 4 ? text = nights + ' ночи' : ''
        return text
    }

    console.log(view)

    return (
        <div className={styles[`select-results__item`]}>
            <div className={view ? `${styles["select-results__item-pic"]} ${styles["select-results__item-pic-big"]}` : styles["select-results__item-pic"]}>
                <div className = "slider-show-hide" onClick = {() => changeView(view => !view)}></div>
                <Swiper
                    onSlideChange = {slider => addBackgroundImage(slider)}
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                        bulletClass: `reviews-pagination-bullet`
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className='search-item-pics'
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
                <a className={styles["select-item-title"]}>{item.name}</a>
                <div className = {styles["select-item-info"]}>
                    <div className = {view ? `${styles["serv-item__block"]} ${styles["active-serv-list"]}` : styles["serv-item__block"]}>
                        {item.services.map((item, index) => {
                            if (index > 4) return false
                            if (index > 3) {
                                return <span className = {styles["serv-item__more-services"]}>еще {returnServices(item.services.length - index)}...</span>
                            }
                            return (
                                <span key = {index}>{item}</span>
                            )
                        })}
                    </div>
                    <div className = {styles["serv-item__btn"]} onClick = {() => changeView(view => !view)}>
                         {view ? <span className = {styles["serv-active-btn"]}>Скрыть подробное&nbsp;описание</span> : 
                         <span className = {styles["serv-passiv-btn"]}>Подробнее&nbsp;о&nbsp;номере</span>}
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
                            <span className = {styles["select-from-value"]}>{parseFloat(item.price)}</span>&nbsp;
                            <span className = {styles["select-from-currency"]}>&#8381;</span>
                        </div>
                        <div className = {styles["select-results-from-info"]}>
                            <span>цена за</span>&nbsp;
                            <span className = {styles["select-results-nights"]}>{nightsRightText(nights)}</span>
                        </div>
                    </div>
                    <Link href = {"/hotelbooking"}>
                        <a className = {styles["select-results-bron"]}>Забронировать</a>
                    </Link>
                </div>
            </div>
            {item.description ?
                <div className={styles["select-results__item-text"]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor accusantium maiores molestiae, 
                    itaque atque ratione ipsam quam rem totam magni esse nesciunt, a nostrum harum unde, facere eum deserunt?
                </div> : ''
            }
        </div>
    )
}

export default Hotel_card