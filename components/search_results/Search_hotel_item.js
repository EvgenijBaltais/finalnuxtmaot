import Link from "next/link"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

import styles from "../../styles/search_results/Search_hotel_item.module.css"
import "swiper/css"

export default function Search_hotel_item ({item, nights}) {

    function nightsRightText (nights) {

        let text = nights + ' ночей'

        nights == 1 ? text = nights + ' ночь' : ''
        nights == 2 || nights == 3 || nights == 4 ? text = nights + ' ночи' : ''
        return text
    }

    // Округлить цену, умножить на ночи, разбить на разряды
    function makePriceGreatAgain (price, nights) {
        return (Math.round(parseInt(price)) * nights).toLocaleString()
    }

    function addBackgroundImage (slider) {
        slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
    }

    return (

        <div className={styles["search-item"]}>

                <Swiper
                    onSlideChange = {slider => addBackgroundImage(slider)}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        clickable: true,
                        bulletClass: `reviews-pagination-bullet`
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={`search-item-pics ${styles["search-item-pics"]}`}
                >
                    {item.images.map((item, index) => {
                        if (index > 7) return false
                        return (
                            <SwiperSlide
                                className={styles["search-item-pic"]}
                                key = {index}
                                data-pic = {item}
                            ></SwiperSlide>
                        )
                    })}
                </Swiper>

            <div className = {styles["search-item__content"]}>
                <Link href={"/hoteldetail"}>
                    <a className = {styles["search-item__title"]}>{item.name}</a>
                </Link>
                <div className = {styles["search-item__rate"]}>
                    <ul className={styles["search-rate__list"]}>
                        {
                            [...Array(item.star_rating)].map((e, i) => <li key = {i} className={`${styles["search-rate__item"]} ${styles["search-rate__item-yellow"]}`}></li>)
                        }
                        {
                            [...Array(5 - item.star_rating)].map((e, i) => <li key = {i} className={`${styles["search-rate__item"]} ${styles["search-rate__item-grey"]}`}></li>)
                        }
                    </ul>
                    <span className = {styles["search-rate__reviews"]}>18 отзывов</span>
                    {item.is_all_inclusive ?
                        <span className = {styles["search-rate__foodtype"]}>Все включено</span> : ''
                    }
                </div>
                <ul className = {styles["search-item__list"]}>
                    {item.services.map((item, index) => {
                        return (
                            <li key = {index} className = {styles["search-item__item"]}>{item.group_name}</li>
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
                    <span className = {styles["search-item__price-number"]}>{makePriceGreatAgain(item.daily_price, nights)}</span>
                    <span className = {styles["search-item__price-currency"]}>&#8381;</span>
                </div>
                <p className = {styles["search-item__nights"]}>цена за <span className = {styles["search-item__nights-number"]}>{nightsRightText(nights)}</span></p>
                <button className = {styles["search-item__bron"]}>Выбрать</button>
            </div>
        </div>
    )
}