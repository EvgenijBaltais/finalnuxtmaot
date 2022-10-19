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

    // Округлить цену, умножить на ночи, разбить на разряды
    function makePriceGreatAgain (price, nights) {
        return (Math.round(parseInt(price)) * nights).toLocaleString()
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
/*
    useEffect(() => {


        // Заполнить главные услуги
        let neededServices = ["Питание", "Интернет", "В номерах", "Общее"]   // Услуги, которые добавляем в список
        let servicesArr = []
        let services = []
        let someItem

        services = item.services.filter(function (n) {
            someItem = 0
            for (let i = 0; i < neededServices.length; i++) {
                if (n.group_name == neededServices[i]) {
                    someItem = n
                    break
                }
            }
            return someItem != 0 ? someItem : '' 
        })

        // Массив необходимых сервисов neededServices -> в нем перебираем все услуги -> в нем берем первые 3.
        // Цикл запускается каждый раз заново, чтобы сохранить порядок как в массиве neededServices 
        // Если Питание, то отдельный цикл

        for (let i = 0; i < services.length; i++) {
            if (services[i].group_name == "Питание") {
                for (let k = 0; k < services[i].amenities.length; k++) {
                    services[i].amenities[k].indexOf('Завтрак') + 1 ? 
                    servicesArr.push([services[i].amenities[k]]) : ''

                    services[i].amenities[k].indexOf('Бар') + 1 ? 
                    servicesArr.push([services[i].amenities[k]]) : ''

                    services[i].amenities[k].indexOf('Кафе') + 1 ? 
                    servicesArr.push([services[i].amenities[k]]) : ''

                    services[i].amenities[k].indexOf('пансион') + 1 ? 
                    servicesArr.push([services[i].amenities[k]]) : ''
                }
                break
            }
        }

        for (let q = 1; q < neededServices.length; q++) {
            for (let i = 0; i < services.length; i++) {
                if (services[i].group_name == neededServices[q]) {
                    for (let k = 0; k < services[i].amenities.length; k++) {
                        servicesArr.push(services[i].amenities[k])
                        if (k == 2) break
                    }
                }
            }
        }

        setServicesMain(servicesArr)
    }, [item])
*/
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
                    <span className = {styles["search-item__price-number"]}>{makePriceGreatAgain(rates[0].daily_price, nights)}</span>
                    <span className = {styles["search-item__price-currency"]}>&#8381;</span>
                </div>
                <p className = {styles["search-item__nights"]}>цена за <span className = {styles["search-item__nights-number"]}>{nightsRightText(nights)}</span></p>
                <a href = {url} target = "_blank" className = {styles["search-item__bron"]}>Выбрать</a>
            </div>
        </div>
    )
}