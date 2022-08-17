import styles from "../styles/Reviews.module.css"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

const Reviews = (props) => {

    return (

		<section className = {styles["our-reviews"]}>
			<h2 className = "section-title icon-item icon-item-reviews">Отзывы о нашей работе</h2>

			<div className = {styles["our-reviews-slider"]}>

				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
						bulletClass: `reviews-pagination-bullet`
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className={`reviews-slider ${styles["reviews-slider"]}`}
				>
					{props.reviews.map((item, index) => {
						return (
							<SwiperSlide className={styles["reviews-slider-item"]} key = {index}>
								<p className={styles["reviews-slider-name"]}>{item.author}</p>
								<div className={styles["reviews-slider-description"]}>
									{item.content}
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</section>
    )
}

export default Reviews