import React from "react";
import './radioButton.scss'
import {radioBtn} from "./const";


export const RadioButton = () => {

    const radioButtonAll = radioBtn.map((btn, id) => {
        return (
            <label htmlFor={btn.htmlFor} key={id}>
                <input onChange={()=>console.log(btn.id)} id={btn.id} type="radio" name="radioCar" value="1" className="real-radio-btn" checked/>
                <span className="custom-radio-btn"/>
                {btn.text}
            </label>
        )
    })

    return (
        <>
            <div className='button-radio'>
                <div className="form-group">
                    {radioButtonAll}
                </div>
            </div>
        </>
    )
}