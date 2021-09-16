import React from 'react';
import {Sidebar} from "../../Sidebar";
import {OrderContent} from "../index";
import {Header} from "../../Main/Header";
import {StepRouter} from "../StepRouter";
import {InfoOrder} from "../InfoOrder";
import {StepBackwardOutlined} from "@ant-design/icons";
import i30N from "../../../assets/imeges/i30.png";

export const OrderFinish = () => {
    return (
        <div className='order'>
            <div className='wrapper'>
                <Sidebar/>
            </div>
            return (
            <div className='order-content'>
                <Header/>
                <div className='total-order'>
                    <div>
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
                <div className='step-settings'>
                    <StepRouter/>
                    <InfoOrder/>
                </div>

            </div>
        </div>
    );
};

