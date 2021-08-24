import React from 'react';
import icon from "../../../assets/icons/location.svg";
import './header.scss'

export const Header =()=>{
    return (
        <div className='main-header'>
            <a href='#' className='logo-header'>Need for drive</a>
            <div className='main-location'>
                <img src={icon}/>
                <span>Ульяновск</span>
            </div>
        </div>
    )
}