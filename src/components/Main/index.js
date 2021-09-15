import React from 'react';
import './main.scss';

import {Header} from './Header/';
import {Footer} from './Footer';
import {NavLink} from "react-router-dom";

export const Main = () => {
    return (
        <div className='main'>
            <Header/>
            <div className='main-content'>
                <h1 className='without_class'>Каршеринг</h1>
                <h2 className='without_class'>Need for drive</h2>
                <h3 className='without_class'>Поминутная аренда авто твоего города</h3>
                <NavLink to='/orderPage/step1' style={{width: '100%'}}>
                    <button className='button'>
                        <span>Забронировать</span>
                    </button>
                </NavLink>
            </div>
            <Footer/>
        </div>
    )
}
