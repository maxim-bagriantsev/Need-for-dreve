import React from "react";

import './orderMenu.scss'
import icons from "../../assets/icons.svg";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Step1} from "./Step1";
import {Header} from "../Main/Header";
import {Step2} from "./Step2";

const itemMenu = [
    {
        id: 1,
        text: 'Местоположение',
        link: '/order'
    },
    {
        id: 2,
        text: 'Модель',
        link: '/model'
    },
    {
        id: 3,
        text: 'Дополнительно',
        link: '/moreprops'
    },
    {
        id: 4,
        text: 'Итого',
        link: '/result'
    }
]

export const OrderMenu = () => {

    const stepsMenu = itemMenu.map((item, id) => {
        return (
            <>
                <li>
                    <Link key={id} to={item.link}>{item.text}</Link>
                </li>
                <svg className='icon-play-button' width='8' height='10'>
                    <use xlinkHref={`${icons}#Play-button`}/>
                </svg>
            </>
        )
    })

    return (
        <div className='order-content'>
            <Header/>
            <Router>
                <div className='steps-menu'>
                    <ul>
                        {stepsMenu}
                    </ul>
                </div>
                <div className='step-settings'>
                    <Route path="/order" children={<Step1/>}/>
                    <Route path="/model" children={<Step2/>}/>
                  {/*  <Route path="/moreprops" children={<Step3/>}/>
                    <Route path="/result" children={<Step4/>}/>*/}
                    <div className='info-order'>
                        <p>Ваш заказ:</p>
                        <button className='info-order-btn'>
                            <p>Выбрать модель</p>
                        </button>
                    </div>
                </div>
            </Router>

        </div>
    )
}




