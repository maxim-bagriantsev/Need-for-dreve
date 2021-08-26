import React from 'react';
import './slider.scss';
import icons from '../../assets/icons.svg';

export const Slider = () => {
    return (
        <div className='slider'>
            <button className='btn-arrow'>
                <svg className='btn-arrow-icon' width='10' height='20'>
                    <use xlinkHref={`${icons}#Arrow-Left`}/>
                </svg>
            </button>
            <div className='slider-content'>
                <div className='slider-content-item'>
                    <h2>Бесплатная парковка</h2>
                    <h3>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в
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
            <button className='btn-arrow'>
                <svg className='btn-arrow-icon' width='10' height='20'>
                    <use xlinkHref={`${icons}#Arrow-Right`}/>
                </svg>
            </button>
        </div>
    )
}


