import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './search.scss';
import {AutoComplete, Spin} from 'antd';
import {useSelector} from "react-redux";

export const Search = () => {

// вытаскиваем данные городов из store
    const towns = useSelector((state) => {
        return state.reducerData.townData
    })

    // вытаскиваем данные адресов из store
    const address = useSelector((state) => {
        return state.reducerData.addressData

    })

// если данные не загружены показываем спиннер
    if (!towns) {
        return <Spin/>
    }
// если данные не загружены показываем спиннер
    if (!address) {
        return <Spin/>
    }

    const optionsTowns = towns.map(town => {
        return {
            value: town.name
        }
    })

    const optionsStrits = address.map(item => {
        return {
            value: item.address
        }
    })

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