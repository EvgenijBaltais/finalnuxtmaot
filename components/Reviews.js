import styles from "../styles/Reviews.module.css"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

const Reviews = () => {

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
					<SwiperSlide className={styles["reviews-slider-item"]}>
						<p className={styles["reviews-slider-name"]}>Александр</p>
						<div className={styles["reviews-slider-description"]}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos exercitationem amet animi saepe,
							earum excepturi distinctio. Dignissimos ut, ab natus unde aliquam odio veritatis inventore maxime rem esse itaque.
						</div>
					</SwiperSlide>
					<SwiperSlide className={styles["reviews-slider-item"]}>
						<p className={styles["reviews-slider-name"]}>Николай</p>
						<div className={styles["reviews-slider-description"]}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos exercitationem amet animi saepe,
							earum excepturi distinctio. Dignissimos ut, ab natus unde aliquam odio veritatis inventore maxime rem esse itaque.
						</div>
					</SwiperSlide>
					<SwiperSlide className={styles["reviews-slider-item"]}>
						<p className={styles["reviews-slider-name"]}>Елена Ивановна Сидорова</p>
						<div className={styles["reviews-slider-description"]}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos exercitationem amet animi saepe,
							earum excepturi distinctio. Dignissimos ut, ab natus unde aliquam odio veritatis inventore maxime rem esse itaque.
							earum excepturi distinctio. Dignissimos ut, ab natus unde aliquam odio veritatis inventore maxime rem esse itaque.
							earum excepturi distinctio. Dignissimos ut, ab natus unde aliquam odio veritatis inventore maxime rem esse itaque.
							earum excepturi distinctio. Dignissimos ut, ab natus unde aliquam odio veritatis inventore maxime rem esse itaque.
							earum excepturi distinctio. Dignissimos ut, ab natus unde aliquam odio veritatis inventore maxime rem esse itaque.
							earum excepturi distinctio. Dignissimos ut, ab natus unde aliquam odio veritatis inventore maxime rem esse itaque.
						</div>
					</SwiperSlide>
				</Swiper>
			</div>

		</section>
    )
}

export default Reviews