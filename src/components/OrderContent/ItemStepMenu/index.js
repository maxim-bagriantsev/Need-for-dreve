import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import icons from "../../../assets/icons.svg";

export const ItemStepMenu = (props) => {

const className = props.isActive ? 'step-menu-text-active' : 'step-menu-text';

return (
    <Fragment>
        <li className={className}>
            <NavLink to={props.link}>{props.lable}</NavLink>
        </li>
        <svg className='icon-play-button' width='8' height='10'>
            <use xlinkHref={`${icons}#Play-button`}/>
        </svg>
    </Fragment>
);
}


