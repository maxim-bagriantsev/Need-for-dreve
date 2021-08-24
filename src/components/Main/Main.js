import React from "react";
import '../Main/main.scss'

import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";

export const Main = () => {
    return (
        <div className='main'>
            <Header/>
            <div className='main-content'>
                <h1 className='main-title'>Каршеринг</h1>
                <h2 className='main-title'>Need for drive</h2>
                <h3 className='main-title'>Поминутная аренда авто твоего города</h3>
                <button className='main-btn'>
                    <span className='main-btn-item'>Забронировать</span>
                </button>
            </div>
            <Footer/>
        </div>
    )
}