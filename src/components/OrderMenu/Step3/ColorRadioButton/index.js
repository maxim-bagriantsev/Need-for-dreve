import React from "react";
import {radioBtnColor} from "./const";

export const ColorRadioButton = () => {
    const radioButtonColor = radioBtnColor.map((btn, id) => {
        return (
            <label htmlFor={btn.htmlFor} key={id}>
                <input id={btn.id} type="radio" name="radioColor" value="1" className="real-radio-btn" checked/>
                <span className="custom-radio-btn"/>
                {btn.text}
            </label>
        )
    })
    return (
        <>
            <div className='button-radio'>
                <div className="form-group">
                    {radioButtonColor}
                </div>
            </div>
        </>
    )
}
