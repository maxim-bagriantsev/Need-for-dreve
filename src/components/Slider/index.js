import React from 'react';
import './slider.scss';
import icons from '../../assets/icons.svg';
import free_parking from '../../assets/imeges/free-parking.png'
import insurance from '../../assets/imeges/insurance.png'
import gasoline from '../../assets/imeges/gasoline.png'
import service from '../../assets/imeges/service.png'
import {Carousel} from "./Carousel/Carousel";


const slides = [
    {
        img: free_parking,
        title: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.'
    },
    {
        img: insurance,
        title: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.'
    },
    {
        img: gasoline,
        title: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.'
    },
    {
        img: service,
        title: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.'
    }
]


export const Slider = () => {

    return <Carousel/>

}


/*
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
</div>*/
