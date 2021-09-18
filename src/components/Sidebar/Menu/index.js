import React from 'react';
import icons from '../../../assets/icons.svg';
import './menu.scss';

export const Menu = ({isMenuOpen, openMenu}) => {

    const onClick = (e) => {
        e.preventDefault();
        openMenu(!isMenuOpen);
    };

    return (
        <div>
            <div className={isMenuOpen ? 'menu' : 'menu-hidden'}>
                <li className='menu-list'>
                    {['ПАРКОВКА', 'СТРАХОВКА', 'БЕНЗИН', 'ОБСЛУЖИВАНИЕ']
                        .map(i => (
                            <ul key={i}>{i}</ul>))}
                </li>
                <div className='menu-social-icons'>
                    <svg className='menu-social-icon' width='32' height='32'>
                        <use xlinkHref={`${icons}#Telegram`}/>
                    </svg>
                    <svg className='menu-social-icon' width='32' height='32'>
                        <use xlinkHref={`${icons}#Facebook`}/>
                    </svg>
                    <svg className='menu-social-icon' width='32' height='32'>
                        <use xlinkHref={`${icons}#Instagram`}/>
                    </svg>
                </div>
            </div>
            <div
                className={isMenuOpen ? 'reveal-menu' : 'reveal-menu_hidden'}
                onClick={(e) => onClick(e)}
            />
        </div>
    )
}

