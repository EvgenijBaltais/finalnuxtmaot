import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import styles from "../../styles/Hoteldetail.module.css"
import "swiper/css"

import Hotel_rooms_block_item from "./Hotel_rooms_block_item"

const Hotel_rooms_block = ({item, hotelInfo, bronPageLink}) => {

    const [view, changeView] = useState(0)
    const [isDesktop, setIsDesktop] = useState(0)

    useEffect(() => {
        setIsDesktop(window.screen.width > 860)

        window.addEventListener('resize', () => {
            setIsDesktop(window.screen.width > 860)
        })
    }, [])

    
    function addBackgroundImage (slider) {
        slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
    }

    return (
        <div className={view ? `${styles[`select-results__item`]} ${styles["select-results__item-active"]}` : styles["select-results__item"]}>
            <div className = {styles["select-results__item-w"]}>
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
                        {item.room_variants[0].images.map((item, index) => {
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
                    <a className={styles["select-item-title"]}>{item.room_name}</a>
                </div>
            </div>

            {item.room_variants.map((item, index) => {
                return (
                    <Hotel_rooms_block_item hotelInfo = {hotelInfo} item = {item} key = {index} bronPageLink = {bronPageLink} />
                )
            })}
        </div>
    )
}

export default Hotel_rooms_block