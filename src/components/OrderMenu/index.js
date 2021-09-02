import React from "react";
import {Header} from "../Main/Header";
import './orderMenu.scss'

import icons from "../../assets/icons.svg";

const itemMenu = [
    {
        id: 1,
        text: 'Местоположение',
    },
    {
        id: 2,
        text: 'Модель',
    },
    {
        id: 3,
        text: 'Дополнительно',
    },
    {
        id: 4,
        text: 'Итого',
    }
]

export const OrderMenu = () => {
    return (
        <div className='order-content'>
            <Header/>
            <div className='steps-menu'>
                <ul>
                    <li>Местоположение</li>
                    <svg className='icon-play-button' width='8' height='10'>
                        <use xlinkHref={`${icons}#Play-button`}/>
                    </svg>
                    <li>Модель</li>
                    <svg className='icon-play-button' width='8' height='10'>
                        <use xlinkHref={`${icons}#Play-button`}/>
                    </svg>
                    <li>Дополнительно</li>
                    <svg className='icon-play-button' width='8' height='10'>
                        <use xlinkHref={`${icons}#Play-button`}/>
                    </svg>
                    <li>Итого</li>
                </ul>
            </div>
        </div>
    )
}