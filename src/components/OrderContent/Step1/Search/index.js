import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Input} from 'antd';
import './search.scss'

const onChange = e => {
    console.log(e);
};

export const Search = () => {
    return (
        <div className='search'>
            <div className='select-town'>
                <p>Город</p>
                <Input className='input-town' placeholder="Выберите город" allowClear onChange={onChange}/>
                <span
                >

                </span>
            </div>
            <div className='select-town'>
                <p>Пункт выдачи</p>
                <Input className='input-town' placeholder="Начните вводить пункт ..." allowClear onChange={onChange}/>
            </div>
        </div>
    )
}