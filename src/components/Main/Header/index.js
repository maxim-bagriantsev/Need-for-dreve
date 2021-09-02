import React from 'react'
import icons from '../../../assets/icons.svg';
import './header.scss'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className='main-header'>
            <NavLink to='/' style={{textDecoration: 'none'}}>
                <h2 className='without_class'>Need for drive</h2>
            </NavLink>
            <div className='location'>
                <svg className='location-icon' width='18' height='20'>
                    <use xlinkHref={`${icons}#Location`}/>
                </svg>
                <span>
                    <a>Ульяновск</a>
                </span>
            </div>
        </div>
    )
}