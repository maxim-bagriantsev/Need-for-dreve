import React, {useMemo} from "react";
import {allModel,sport,superEconomy,luxury,name, economyClass, premiumClass} from "./itemClassCarRarioButton.constans";
import {ItemClassCarRadioButton} from "./ItemClassCarRadioButton/ItemClassCarRadioButton";
import './radioButton.scss';


export const RadioButton = () => {

    return (
        <>
            <div className='button-radio'>
                <div className="form-group">
                    <ItemClassCarRadioButton text={allModel} id={1}/>
                    <ItemClassCarRadioButton text={sport} id={2}/>
                    <ItemClassCarRadioButton text={superEconomy} id={3}/>
                    <ItemClassCarRadioButton text={luxury} id={4}/>
                    <ItemClassCarRadioButton text={name} id={5}/>
                    <ItemClassCarRadioButton text={economyClass} id={6}/>
                    <ItemClassCarRadioButton text={premiumClass} id={7}/>
                </div>
            </div>
        </>
    )
}