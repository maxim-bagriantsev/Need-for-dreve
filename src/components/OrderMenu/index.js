import React from "react";
import icons from "../../assets/icons.svg";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import {Header} from "../Main/Header";
import {Step1} from "./Step1";
import {Step2} from "./Step2";
import {itemMenu} from "./const";
import {Button} from "./Button";
import './orderMenu.scss'


export const OrderMenu = () => {

    const stepsMenu = itemMenu.map((item, id) => {
        return (
            <>
                <li>
                    <NavLink key={id} to={item.link}>{item.text}</NavLink>
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
                    <Route path="/step1" children={<Step1/>}/>
                    <Route path="/step2" children={<Step2/>}/>
                    {/*  <Route path="/step3" children={<Step3/>}/>
                    <Route path="/step4" children={<Step4/>}/>*/}
                    <div className='info-order'>
                        <p>Ваш заказ:</p>
                        <div className='info-order-data'>
                            <div className='address'>
                                <div className='address-point'>
                                    <p>Пункт выдачи</p>
                                </div>
                                <div className='address-name'>
                                    <p>Ульяновск,
                                        Нариманова 42
                                    </p>
                                </div>
                            </div>
                            <div className='model'>
                                <div className='model-point'>
                                    <p>Модель</p>
                                </div>
                                <div className='model-name'>
                                    <p>Hyndai, i30 N </p>
                                </div>
                            </div>
                            <p>Цена: от 8 000 до 12 000 ₽ </p>
                        </div>
                        <Button/>
                    </div>
                </div>
            </Router>
        </div>
    )
}




