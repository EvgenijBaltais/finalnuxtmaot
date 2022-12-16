import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper"

import 'swiper/css'

export default function ContactSLider ({setActiveCity, cities}) {

    const sliderChange = (e) => {
        setActiveCity(e.$el[0].swiper.realIndex)
    }

    return (
        <>

            <Swiper
                    slidesPerView={5}
                    centeredSlides={true}
                    slideToClickedSlide = {true}
                    loop = {true}
                    speed= {400}
                    onSlideChange={(e) => sliderChange(e)}
                    navigation={true}
                    modules={[Navigation]}
                    className="map-swiper"
                >
                {cities.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} item = "index">
                        {slideContent}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}