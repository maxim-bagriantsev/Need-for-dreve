import React, {Fragment} from "react";
import icons from "../../assets/icons.svg";
import {NavLink} from "react-router-dom";
import {Header} from "../Main/Header";
import {InfoOrder} from "./InfoOrder";
import {itemMenu} from "./const";
import {StepRouter} from "./StepRouter";
import './orderContent.scss';

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




