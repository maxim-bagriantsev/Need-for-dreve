import React from "react";
import './slider.css'

export const Slider = () => {

    return (
        <div className='slider'>
            <button className='slider-btn-column'>
                Left
            </button>
            <div className='slider-content'>
                <h1>Бесплатная парковка</h1>
                <h2>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в
                    аэропортах.</h2>
                <button className='slider-btn'>
                    <span>Подробнее</span>
                </button>
            </div>
            <button className='slider-btn-column'>
                Right
            </button>
        </div>
    )
}