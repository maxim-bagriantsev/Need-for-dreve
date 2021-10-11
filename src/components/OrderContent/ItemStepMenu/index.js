import React from 'react';
import {NavLink} from "react-router-dom";
import icons from "../../../assets/icons.svg";

export const ItemStepMenu = (props) => {

    let className = 'step-menu-text';

    if (props.isEnabled) {
        className = 'step-menu-text-enabled'
    }
    if (props.isActive) {
        className = 'step-menu-text-active'
    }

    return (
        <>
            <li className={className}>
                <NavLink to={props.link}>{props.lable}</NavLink>
            </li>
            <svg className='icon-play-button' width='8' height='10'>
                <use xlinkHref={`${icons}#Play-button`}/>
            </svg>
        </>
    );
}


