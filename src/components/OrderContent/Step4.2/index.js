import React from 'react';
import {Step4} from "../Step4";
import './confirmOrder.scss'

export const ConfirmOrder = () => {
    return (
        <div className='confirm-page'>
            <div>
                <Step4/>
            </div>
            <div className='confirm-order-menu'>
                <h3 className='confirm-title'>Подтвердить заказ</h3>
                <div className='confirm-'>
                    <button className='confirm-btn'>
                        <p className='confirm-btn-title'>Подтвердить</p>
                    </button>
                    <button className='return-btn'>
                        <p className='return-btn-title'>Вернуться</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

