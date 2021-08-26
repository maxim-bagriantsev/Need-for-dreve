import React from 'react'
import icons from '../../../assets/icons.svg';
import './header.scss'

export const Header = () => {
    return (
        <div className='main-header'>
            <h1 className='without_class'>Need for drive</h1>
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