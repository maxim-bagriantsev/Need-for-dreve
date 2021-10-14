import React from "react";
import {radioBtnColor} from "./const";
import {ItemRadioButton} from "./ItemRadioButton/ItemRadioButton";
import {useSelector} from "react-redux";

export const ColorRadioButton = () => {

    const {
        colorsCar
    } = useSelector((state) => {
        return state.reducerData
    })

    const radioButtonColor = colorsCar.map((btn, id) => {

        return (
            <ItemRadioButton
                key={id}
                id={btn.id}
                text={btn}
            />
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
