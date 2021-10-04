import React, {useMemo, useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './search.scss';
import {AutoComplete} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {Spiner} from "../../../../Tools/Spiner/Spiner";


export const Search = () => {

    const dispatch = useDispatch()

    const {
        selectedStreetAndHouse,
        towns,
        streets,
        selectedTown
    } = useSelector((state) => {

        return {
            selectedStreetAndHouse: state.reducerData.selectedStreetAndHouse,
            towns: state.reducerData.townData,
            streets: state.reducerData.streets,
            selectedTown: state.reducerData.selectedTown
        }
    })

    //фильтр улиц в выбранном городе
    const streetFiltered = useMemo(() => {
        if (selectedTown) {
            return streets.filter(street => {
                if (selectedTown === street.cityId.name) {
                    return street.address
                }
            })
        }
        return []
    }, [selectedTown])

// если данные не загружены показываем спиннер
    if (!towns) {
        return <Spiner/>
    }


// если данные не загружены показываем спиннер
    if (!streets) {
        return <Spiner/>
    }

    const optionsTowns = towns.map(town => {
        return {
            value: town.name
        }
    })

    const optionsStrits = streetFiltered.map(item => {
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

                    value={selectedTown}
                    options={optionsTowns}
                    placeholder="Название города"
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onSelect={(event, newSelectTown) => {
                        dispatch({type: 'SELECT_TOWN', payload: newSelectTown.value})
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
                    onSelect={(event, newSelectAddress) => {
                        dispatch({type: 'SELECT_STREET_AND_HOUSE', payload: newSelectAddress.value})
                    }}
                />
            </div>
        </div>
    )
}