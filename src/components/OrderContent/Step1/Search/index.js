import React from 'react';
import {Input} from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import './search.scss';
import {AutoComplete} from 'antd';


// Выпадающий список городов
const optionsTowns = [
    {
        value: 'Ульяновск',
    },
    {
        value: 'Москва',
    },
    {
        value: 'Казань',
    },
];

// Выпадающий список улиц
const optionsStrits = [
    {
        value: 'Пример 1',
    },
    {
        value: 'Пример 2',
    },
    {
        value: 'Пример 3',
    },
];


export const Search = () => {

    return (
        <div className='search'>
            <div className='select-town'>
                <p>Город</p>

                <AutoComplete
                    allowClear={true}
                    options={optionsTowns}
                    placeholder="Название города"
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />
            </div>
            <div className='select-town'>
                <p>Пункт выдачи</p>
                <AutoComplete
                    allowClear={true}
                    options={optionsStrits}
                    placeholder="Начните вводить пункт ..."
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />
            </div>
        </div>
    )
}