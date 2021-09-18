import React from 'react';
import {OrderContent} from "../../components/OrderContent";
import {Sidebar} from "../../components/Sidebar";
import './orderPage.scss';

export const OrderPage = () => {
    return (
        <div className='order'>
            <div className='wrapper'>
                <Sidebar/>
            </div>
            <OrderContent/>
        </div>
    )
}