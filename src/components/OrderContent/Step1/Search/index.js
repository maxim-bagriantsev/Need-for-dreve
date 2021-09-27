import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './search.scss';
import {AutoComplete} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {Spiner} from "../../../../Tools/Spiner/Spiner";

export const Search = () => {

    const dispatch = useDispatch()

    const selectedStreetAndHouse = useSelector((state) => {
        return state.reducerData.selectedStreetAndHouse
    })
// вытаскиваем данные городов из store
    const towns = useSelector((state) => {
        return state.reducerData.townData
    })

    // вытаскиваем данные адресов из store
    const address = useSelector((state) => {
        return state.reducerData.addressData
    })

    //вытаскиваем выбранный город в input из store
    const selectedTown = useSelector((state) => {
        return state.reducerData.selectedTown
    })

// если данные не загружены показываем спиннер
    if (!towns) {
        return <Spiner/>
    }
// если данные не загружены показываем спиннер
    if (!address) {
        return <Spiner/>
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
                    onClear={() => {
                        dispatch({type: 'SELECT_TOWN', payload: ''})
                        dispatch({type: 'SELECT_STREET_AND_HOUSE', payload: ''})
                    }}
                    allowClear={true}
                    options={optionsTowns}
                    placeholder="Название города"
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onSelect={(event, newSelecteTown) => {
                        dispatch({type: 'SELECT_TOWN', payload: newSelecteTown.value})
                    }}
                />
            </div>
            <div className='select-town'>
                <p>Пункт выдачи</p>
                <AutoComplete
                    onClear={() => {
                        dispatch({type: 'SELECT_STREET_AND_HOUSE', payload: ''})
                    }}
                    disabled={!selectedTown} // вкл/откл поля
                    allowClear={true}
                    value={selectedStreetAndHouse}
                    options={optionsStrits}
                    placeholder="Начните вводить пункт ..."
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onSelect={(event, newSelecteAddress) => {
                        dispatch({type: 'SELECT_STREET_AND_HOUSE', payload: newSelecteAddress.value})
                    }}
                />
            </div>
        </div>
    )
}