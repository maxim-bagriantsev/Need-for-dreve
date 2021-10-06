import React from "react";
import {radioBtnTariff} from "./const";
import {ItemRadioButton} from "./ItemRadioButton";
import './radioButtonTariff.scss';

export const TariffRadioButton = () => {

    const radioButtonTariff = radioBtnTariff.map((btn, id) => {

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
            <div className='button-radio-tariff'>
                <div className="form-group-tariff">
                    {radioButtonTariff}
                </div>
            </div>
        </>
    )
}
