import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./carousel.scss";

//Импорт стандартных компонентов из подключенной библиотеки swiper
import SwiperCore, {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard
} from 'swiper';

//Картинки к слайдеру
import free_parking from "../../../assets/imeges/free-parking.png";
import insurance from "../../../assets/imeges/insurance.png";
import gasoline from "../../../assets/imeges/gasoline.png";
import service from "../../../assets/imeges/service.png";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const slides = [
    {
        id: 1,
        img: free_parking,
        title: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        classNameButton: 'slider-btn-1'
    },
    {
        id: 2,
        img: insurance,
        title: 'Страховка',
        text: 'Полная страховка страховка автомобиля',
        classNameButton: 'slider-btn-2'
    },
    {
        id: 3,
        img: gasoline,
        title: 'Бензин',
        text: 'Полный бак на любой заправке города за наш счёт.',
        classNameButton: 'slider-btn-3'
    },
    {
        id: 4,
        img: service,
        title: 'Обслуживание',
        text: 'Автомобиль проходит еженедельное ТО',
        classNameButton: 'slider-btn-4'
    }
]

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
