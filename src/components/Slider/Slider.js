import React from "react";

import './slider.scss'
import VectorLeft from '../../assets/icons/Vector left.svg'
import VectorRigth from '../../assets/icons/Vector rigth.svg'

export const Slider = () => {
    return (
        <div className='slider'>
            <div>
                <button className='slider-btn-column'></button>
                <img className='slider-bnt-left' src={VectorLeft} height='20'/>
            </div>

            <div className='slider-content'>
                <div className='slider-content-items'>
                    <h2>Бесплатная парковка</h2>
                    <h3>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в
                        аэропортах.</h3>
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
            <div>
                <button className='slider-btn-column'></button>
                <img className='slider-bnt-rigth' src={VectorRigth} height='20'/>
            </div>

        </div>
    )
}
