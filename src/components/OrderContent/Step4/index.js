import React from "react";
import i30N from "../../../assets/imeges/i30.png";
import './step4.scss';

export const Step4 = () => {
    return (
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
    )
}