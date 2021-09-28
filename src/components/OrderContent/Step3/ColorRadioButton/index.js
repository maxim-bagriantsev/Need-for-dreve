import React from "react";
import {radioBtnColor} from "./const";
import {ItemRadioButton} from "./ItemRadioButton/ItemRadioButton";

export const ColorRadioButton = () => {

    const radioButtonColor = radioBtnColor.map((btn, id) => {

        return (
            <ItemRadioButton
                id={btn.id}
                text={btn.text}
            />
            // <label>
            //     <input id={btn.id}
            //            type="radio"
            //            name="radioColor"
            //            value="1"
            //            className="real-radio-btn" checked/>
            //     <span className="custom-radio-btn"/>
            //     {btn.text}
            // </label>
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
