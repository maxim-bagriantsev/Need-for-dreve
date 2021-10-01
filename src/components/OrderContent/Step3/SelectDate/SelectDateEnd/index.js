import React from 'react';
import {DatePicker, Space} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import 'antd/dist/antd.css';
import './index.css';
import moment from "moment";


export const SelectDateEnd = () => {

    const dispatch = useDispatch()

    const selectedDateEnd = useSelector((state) => {
        return state.reducerData.selectedDateEnd
    })

    const hendleSelectDate = (value) => {
        dispatch({type: 'SELECT_DATE_END', payload: value})
    }
    return (
        <Space direction="vertical" size={12}>
            <div>
                <DatePicker
                    onOk={hendleSelectDate}
                    placeholder='Введите дату и время'
                    showTime={{format: 'HH:mm'}}
                    disabledDate={(current) => {
                        const customDate = moment().format();
                        return current && current < moment(customDate);
                    }}
                    showNow={false}
                    format='DD.MM.YYYY HH:mm'
                    size='small'
                />
            </div>
        </Space>
    )
}


