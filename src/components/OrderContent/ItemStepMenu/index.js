import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import icons from "../../../assets/icons.svg";

export const ItemStepMenu = (props) => {

    return (
        <Fragment>
            <li className='step-menu-text'>
                <NavLink exact to={props.link}>{props.lable}</NavLink>
            </li>
            <svg className='icon-play-button' width='8' height='10'>
                <use xlinkHref={`${icons}#Play-button`}/>
            </svg>
        </Fragment>
    );
};

