import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./carousel.scss";

import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
export const Carousel = () => {

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{clickable: true}}
                mousewheel={true}
                keyboard={true}
                loop={true}
                slidesPerview={0}
                className="slider">
                <SwiperSlide>
                    <div className='slider'>
                        <button className='btn-arrow'/>

                        <div className='slider-content'>
                            <div className='slider-content-item'>
                                <h2>Бесплатная парковка</h2>
                                <h3>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая
                                    ПДД, а также в
                                    аэропортах.</h3>
                                <button className='slider-btn-1'>
                                    <span>Подробнее</span>
                                </button>
                            </div>
                            <div className='slider-dots'>
                                <div className='slider-dot-active'/>
                                <div className='slider-dot'/>
                                <div className='slider-dot'/>
                                <div className='slider-dot'/>
                            </div>
                        </div>
                        <button className='btn-arrow'/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}