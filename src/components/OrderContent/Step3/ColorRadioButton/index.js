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
        )
    })
    return (
        <React.Fragment>
            <div className='button-radio'>
                <div className="form-group">
                    {radioButtonColor}
                </div>
            </div>
        </React.Fragment>
    )
}
