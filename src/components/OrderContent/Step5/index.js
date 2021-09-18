import React from 'react';
import {Header} from "../../Main/Header";
import {InfoOrder} from "../InfoOrder";
import i30N from "../../../assets/imeges/i30.png";
import {Sidebar} from "../../Sidebar";
import './orderFinish.scss';

export const OrderFinish = () => {

    return (
        <div className='order'>
            <div className='wrapper'>
                <Sidebar/>
            </div>
            <div className='order-content'>
                <Header/>
                <div className='steps-menu'>
                    <section>
                        <ul>
                            Заказ номер RU58491823
                        </ul>
                    </section>
                </div>
                <div className='step-settings'>
                    <div className='total-order'>
                        <div className='total-order-content'>
                            <h2>Ваш заказ подтверждён</h2>
                            <h3>Hyndai, i30 N</h3>
                            <p className='car-number'>K 761 HA 73</p>
                            <p>
                                <strong>Топливо </strong>
                                100%
                            </p>
                            <p>
                                <strong>Доступна с </strong>
                                12.06.2019 12:00
                            </p>
                        </div>
                        <div>
                            <img className='total-car-img' src={i30N}/>
                        </div>
                    </div>
                    <InfoOrder/>
                </div>
            </div>
        </div>
    )
};

