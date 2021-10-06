import React from "react";
import {radioBtnColor} from "./const";
import {ItemRadioButton} from "./ItemRadioButton/ItemRadioButton";

export const ColorRadioButton = () => {

    const radioButtonColor = radioBtnColor.map((btn, id) => {

        return (
            <React.Fragment key={id}>
                <ItemRadioButton
                    id={btn.id}
                    text={btn.text}
                />
            </React.Fragment>

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
