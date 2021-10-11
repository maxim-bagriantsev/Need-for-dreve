import React from 'react';
import {Checkbox} from "antd";
import {useDispatch} from "react-redux";
import {rightDrive} from '../additionalServices.constans'

export const RightDriveCheckbox = () => {

    const dispatch = useDispatch()

    const hendleSelectRightDrive = (event) => {
        dispatch({type: 'SELECT_RIGHT_DRIVE', payload: event.target.checked})
    }

    return (
        <div className="form-group">
            <Checkbox onChange={hendleSelectRightDrive}>{rightDrive}</Checkbox>
        </div>
    );
};

