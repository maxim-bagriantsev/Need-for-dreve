import React from 'react';
import {DatePicker, Space} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import moment from 'moment'
import 'antd/dist/antd.css';
import './index.css';

function onChange(value, dateString) {

    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}


export const SelectDateStart = () => {

    const dispatch = useDispatch()

    const selectedDateStart = useSelector((state) => {
        return state.reducerData.selectedDateStart
    })

    const hendleSelectDate = (value) => {
        dispatch({type: 'SELECT_DATE_START', payload: value})
    }

    return (
        <Space direction="vertical" size={12}>
            <div>
                <DatePicker
                    onOk={hendleSelectDate}
                    placeholder='Введите дату и время'
                    showTime={{format: 'HH:mm'}}
                    showNow={false}
                    format='DD.MM.YYYY HH:mm'
                    size='small'
                />
            </div>
        </Space>
    )
}


