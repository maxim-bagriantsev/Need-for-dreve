import React from 'react';
import './button.scss'
import {NavLink} from "react-router-dom";

export const Button = ()=> {
    return (

        <NavLink to="/orderPage/confirmOrder">
            <button className='info-order-btn'>
                <p>Выбрать модель</p>
            </button>
        </NavLink>

    )
}