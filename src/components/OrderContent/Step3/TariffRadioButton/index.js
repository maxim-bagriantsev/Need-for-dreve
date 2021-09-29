import React from "react";
import {radioBtnTariff} from "./const";
import {ItemRadioButton} from "./ItemRadioButton";
import './radioButtonTariff.scss';

export const TariffRadioButton = () => {

    const radioButtonTariff = radioBtnTariff.map((btn, id) => {

        return (
            <ItemRadioButton
                id={btn.id}
                text={btn.text}
            />
        )
    })
    return (
        <React.Fragment>
            <div className='button-radio-tariff'>
                <div className="form-group-tariff">
                    {radioButtonTariff}
                </div>
            </div>
        </React.Fragment>
    )
}
