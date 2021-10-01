import React from 'react';
import {Button} from "antd";
import {NavLink} from "react-router-dom";

export const ItemInfoOrderButton = (props) => {


    return (
        <Button
            type="primary"
            className='info-order-btn'
            onClick={props.onClick}
            disabled={props.disabled} // доступна или не доступна кнопка
        >
            <p>{props.lable}</p>
        </Button>
    );
};

