import React, {useMemo} from 'react';
import {Checkbox} from "antd";
import {useDispatch} from "react-redux";
import {fullTank} from '../additionalServices.constans'

export const FullTankCheckbox = () => {

    const dispatch = useDispatch()

    const hendleSelectFullTank = (event) => {
        dispatch({type: 'SELECT_FULL_TANK', payload: event.target.checked})
    }

    return (
        <div className="form-group">
            <Checkbox onChange={hendleSelectFullTank}>{fullTank}</Checkbox>
        </div>
    );
};

