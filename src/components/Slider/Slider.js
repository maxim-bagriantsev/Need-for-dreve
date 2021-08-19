import React from "react";
import './slider.css'
import VectorLeft from '../../assets/icons/Vector left.svg'
import VectorRigth from '../../assets/icons/Vector rigth.svg'

export const Slider = () => {

    return (
        <div className='slider'>
            <button className='slider-btn-column'>
                <img src={VectorLeft} height='18'/>
            </button>
            <div className='slider-content'>
                <div className='slider-content-items'>
                    <h1>Бесплатная парковка</h1>
                    <h2>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в
                        аэропортах.</h2>
                    <button className='slider-btn'>
                        <span>Подробнее</span>
                    </button>
                </div>
                <div className='slider-dots'>
                    <div className='item-dot-active'></div>
                    <div className='item-dot'></div>
                    <div className='item-dot'></div>
                    <div className='item-dot'></div>
                </div>
            </div>
            <button className='slider-btn-column'>
                <img src={VectorRigth} height='18'/>
            </button>
        </div>
    )
}