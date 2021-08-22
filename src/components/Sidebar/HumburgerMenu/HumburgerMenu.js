import React from "react";
import './humburgerMenu.scss'
import telegramIcon from '../HumburgerMenu/icons/telegram.svg';
import facebookIcon from '../HumburgerMenu/icons/facebook.svg';
import instagramIcon from '../HumburgerMenu/icons/instagram.svg';
import {CloseOutlined} from "@ant-design/icons";

export const HumburgerMenu = ({items, active, setMunuActive}) => {

    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setMunuActive(false)}>
            <div className='menu-content'>
                <div className='menu-content-left'>
                    <div className='humburger-box-close'>
                        <CloseOutlined/>
                    </div>
                    <ul onClick={e => e.stopPropagation()}>
                        {items.map(item =>
                            <li>
                                <a href={item.href}>{item.value}</a>
                            </li>)}
                    </ul>
                    <div className='humburger-menu-icons' onClick={e => e.stopPropagation()}>
                        <div className='icons-items' >
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
                <div className='menu-content-rigth'></div>
            </div>
        </div>
    )
}