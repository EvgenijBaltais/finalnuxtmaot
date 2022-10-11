import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import Link from "next/link"

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

    // Округлить цену, умножить на ночи, разбить на разряды
    function makePriceGreatAgain (price, nights) {
        return (Math.round(parseInt(price)) * nights).toLocaleString()
    }

    function addBackgroundImage (slider) {
        slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
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
                                className={styles["search-item-pic"]}
                                key = {index}
                                data-pic = {item}
                                style = {index == 0 ? {backgroundImage: `url(${item})`} : {}}
                            ></SwiperSlide>
                        )
                    })}
                </Swiper>

            <div className = {styles["search-item__content"]}>
                <Link href = {url}>
                    <a className = {styles["search-item__title"]}>{item.name}</a>
                </Link>
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
                    <span className = {styles["search-item__price-number"]}>{makePriceGreatAgain(rates[0].daily_price, nights)}</span>
                    <span className = {styles["search-item__price-currency"]}>&#8381;</span>
                </div>
                <p className = {styles["search-item__nights"]}>цена за <span className = {styles["search-item__nights-number"]}>{nightsRightText(nights)}</span></p>
                <Link href = {url}>
                    <a className = {styles["search-item__bron"]}>Выбрать</a>
                </Link>
            </div>
        </div>
    )
}