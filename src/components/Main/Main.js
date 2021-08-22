import React from "react";
import '../Main/main.scss'
import icon from '../../assets/icons/location.svg'

export const Main = () => {
    return (
        <div className='main'>
            <div className='main-header'>
                <a href='#' className='logo-header'>Need for drive</a>
                <div className='main-location'>
                    <img src={icon}/>
                    <span>Ульяновск</span>
                </div>
            </div>
            <div className='main-content'>
                <h1 className='main-title'>Каршеринг</h1>
                <h2 className='main-title'>Need for drive</h2>
                <h3 className='main-title'>Поминутная аренда авто твоего города</h3>
                <button className='main-btn'>
                    <span className='main-btn-item'>Забронировать</span>
                </button>
            </div>
            <div className='main-footer'>
                <span className='copyright'> © 2016-2019 «Need for drive»</span>
                <a className='main-tel' href='tel: +74952342244'>8 (495) 234-22-44</a>
            </div>
        </div>
    )
}