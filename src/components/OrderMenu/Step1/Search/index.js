import React from 'react';
import './search.scss'

export const Search =()=>{
    return (
        <div className='search'>
            <div className='select-town'>
                <p>Город</p>
                <input className='input-town' type='search' placeholder='Выберите город'/>
            </div>
            <div className='select-town'>
                <p>Пункт выдачи</p>
                <input className='input-town' type='search' placeholder='Начните вводить пункт ...'/>
            </div>
        </div>
    )
}