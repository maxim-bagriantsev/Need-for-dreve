import React from 'react';
import './index.css'
import {Button} from "antd";

export const ItemInfoOrderButton = (props) => {

    if (!props.isVisible) {
        return null
    }

    return (
        <Button
            className='info-order-btn'
            onClick={props.onClick}
            disabled={props.disabled} // доступна или не доступна кнопка
        >
            <p>{props.lable}</p>
        </Button>
    );
};

