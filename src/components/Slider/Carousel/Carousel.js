import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./carousel.scss";

import slides from "./const";

//Импорт стандартных компонентов из подключенной библиотеки swiper
import SwiperCore, {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);


export const Carousel = () => {
    const elementSlide = slides.map((slide, id) => {

        return (
            <SwiperSlide key={id}>
                <div className='slider' style={{backgroundImage: `url(${slide.img})`}}>
                    <div className='slider-content'>
                        <div className='slider-content-item'>
                            <div className='swiper-button-prev'/>
                            <h2>{slide.title}</h2>
                            <h3>{slide.text}</h3>
                            <button className={slide.classNameButton}>
                                <span>Подробнее</span>
                            </button>
                            <div className='swiper-button-next'/>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
        )
    })
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
                {elementSlide}
            </Swiper>
        </>
    )
}
