import React from 'react';
import {OrderMenu} from "../../components/OrderMenu";
import {Sidebar} from "../../components/Sidebar";
import './orderPage.scss';


export const OrderPage = () => {
    return (
        <div className='order'>
            <div className='wrapper'>
                <Sidebar/>
            </div>
            <OrderMenu/>
        </div>
    )
}