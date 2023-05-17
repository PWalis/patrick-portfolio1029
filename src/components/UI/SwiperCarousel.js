import React from "react";
import {Swiper} from "swiper/react"
import "swiper/css"

const SwiperCarousel = (props) => {

    return (
        <>
            <Swiper>
                {props.children}
            </Swiper>
        </>
    )
}

export default  SwiperCarousel