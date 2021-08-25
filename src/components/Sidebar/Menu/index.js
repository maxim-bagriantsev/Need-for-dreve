import React from 'react';
import './menu.scss';
import icons from '../../../assets/icons.svg';

export const Menu = ({isMenuOpen, openMenu}) => {

    const onClick = (e) => {
        e.preventDefault();
        openMenu(!isMenuOpen);
    };

    return (
        <div>
            <div className={isMenuOpen ? 'menu' : 'menu_hidden'}>
                <li className='menu-list'>
                    <ul>ПАРКОВКА</ul>
                    <ul>СТРАХОВКА</ul>
                    <ul>БЕНЗИН</ul>
                    <ul>ОБСЛУЖИВАНИЕ</ul>
                </li>
                <div className='menu-social-icons'>
                    <svg className='menu-social-icon' width='32' height='32'>
                        <use xlinkHref={`${icons}#Telegram`}></use>
                    </svg>
                    <svg className='menu-social-icon' width='32' height='32'>
                        <use xlinkHref={`${icons}#Facebook`}></use>
                    </svg>
                    <svg className='menu-social-icon' width='32' height='32'>
                        <use xlinkHref={`${icons}#Instagram`}></use>
                    </svg>
                </div>
            </div>
            <div
                className={isMenuOpen ? 'reveal-menu' : 'reveal-menu_hidden'}
                onClick={(e) => onClick(e)}
            ></div>
        </div>
    )
}

