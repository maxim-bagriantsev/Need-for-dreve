import React from "react";
import {radioBtnTariff} from "./const";
import './radioButtonTariff.scss'

export const TariffRadioButton = () => {
    const radioButtonTariff = radioBtnTariff.map((btn, id) => {
        return (
            <label htmlFor={btn.htmlFor} key={id}>
                <input onChange={()=>console.log(btn.id)} id={btn.id} type="radio" name="radioTariff" value="1" className="real-radio-btn" checked/>
                <span className="custom-radio-btn"/>
                {btn.text}
            </label>
        )
    })
    return (
        <>
            <div className='button-radio-tariff'>
                <div className="form-group-tariff">
                    {radioButtonTariff}
                </div>
            </div>
        </>
    )
}
