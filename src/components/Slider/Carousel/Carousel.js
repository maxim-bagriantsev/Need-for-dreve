import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./carousel.scss";

import free_parking from '../../../assets/imeges/free-parking.png'
import insurance from '../../../assets/imeges/insurance.png'
import gasoline from '../../../assets/imeges/gasoline.png'
import service from '../../../assets/imeges/service.png'

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
                    <div className='slider' style={{backgroundImage: `url(${free_parking})`}}>
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
                        </div>
                        <button className='btn-arrow'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider' style={{backgroundImage: `url(${insurance})`}}>
                        <button className='btn-arrow'/>
                        <div className='slider-content'>
                            <div className='slider-content-item'>
                                <h2>Страховка</h2>
                                <h3>Полная страховка автомобиля</h3>
                                <button className='slider-btn-2'>
                                    <span>Подробнее</span>
                                </button>
                            </div>
                        </div>
                        <button className='btn-arrow'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider' style={{backgroundImage: `url(${gasoline})`}}>
                        <button className='btn-arrow'/>
                        <div className='slider-content'>
                            <div className='slider-content-item'>
                                <h2>Бензин</h2>
                                <h3>Полный бак на любой заправке города за наш счёт</h3>
                                <button className='slider-btn-3'>
                                    <span>Подробнее</span>
                                </button>
                            </div>
                        </div>
                        <button className='btn-arrow'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider' style={{backgroundImage: `url(${service})`}}>
                        <button className='btn-arrow'/>
                        <div className='slider-content'>
                            <div className='slider-content-item'>
                                <h2>Обслуживание</h2>
                                <h3>Автомобиль проходит еженедельное ТО</h3>
                                <button className='slider-btn-4'>
                                    <span>Подробнее</span>
                                </button>
                            </div>
                        </div>
                        <button className='btn-arrow'/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}