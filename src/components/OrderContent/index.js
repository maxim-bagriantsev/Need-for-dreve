import React, {Fragment} from "react";
import icons from "../../assets/icons.svg";
import {NavLink} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Header} from "../Main/Header";
import {Step1} from "./Step1";
import {Step2} from "./Step2";
import {Step3} from "./Step3";
import {Step4} from "./Step4";
import {InfoOrder} from "./InfoOrder";
import {itemMenu} from "./const";
import './orderContent.scss'
import {AppRouter} from "../AppRouter/Router";
import {StepRouter} from "./StepRouter";


export const OrderContent = () => {

    const stepsMenu = itemMenu.map((item, id) => {
        return (
            <Fragment key={id}>
                <li>
                    <NavLink key={id} to={item.link}>{item.text}</NavLink>
                </li>
                <svg className='icon-play-button' width='8' height='10'>
                    <use xlinkHref={`${icons}#Play-button`}/>
                </svg>
            </Fragment>
        )
    })

    return (
        <div className='order-content'>
            <Header/>
            <div className='steps-menu'>
                <section>
                    <ul>
                        {stepsMenu}
                    </ul>
                </section>
            </div>
            <div className='step-settings'>
                <StepRouter/>
                <InfoOrder/>
            </div>

        </div>
    )
}




