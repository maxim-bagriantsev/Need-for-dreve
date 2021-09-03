import React from "react";
import {Header} from "../Main/Header";
import './orderMenu.scss'
import {Select} from 'antd';
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

const {Option} = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}


export const OrderMenu = () => {
    const stepsMenu = itemMenu.map((item, id) => {
        return (
            <>
                <li key={id}>{item.text}</li>
                <svg className='icon-play-button' width='8' height='10'>
                    <use xlinkHref={`${icons}#Play-button`}/>
                </svg>
            </>
        )
    })

    return (
        <div className='order-content'>
            <Header/>
            <div className='steps-menu'>
                <ul>
                    {stepsMenu}
                </ul>
            </div>

            <div className='order-settings'>
                <div className='setting-search'>
                    <div className='input-town'>
                        <p className='input-town-title'>Город</p>
                    </div>
                    <p>Пункт выдачи</p>
                    <p>Выбор на карте</p>
                    <img src="" alt=""/>
                </div>
                <div className='info-order'>
                    Ваш заказ
                </div>
            </div>
        </div>
    )
}