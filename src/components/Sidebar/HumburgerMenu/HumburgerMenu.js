import React from "react";
import './humburgerMenu.css'
import telegramIcon from '../HumburgerMenu/icons/telegram.svg';
import facebookIcon from '../HumburgerMenu/icons/facebook.svg';
import instagramIcon from '../HumburgerMenu/icons/instagram.svg';



export const HumburgerMenu = ({items, active, setActive}) => {

    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className='menu-content'>
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>)}
                </ul>
                <div className='humburger-menu-icons'>
                    <div className='icons-items'>
                        <img className='icon-item' src={telegramIcon}/>
                    </div>
                    <div className='icons-items'>
                        <img className='icon-item' src={facebookIcon}/>
                    </div>
                    <div className='icons-items'>
                        <img className='icon-item' src={instagramIcon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}