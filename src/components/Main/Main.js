import React from "react";
import './main.css'

export const Main = () => {
    return (
        <div className='main'>
            <div className='main-header'>
                <a href='#' className='logo-header'>Need for drive</a>
                <div>
                    <svg>!</svg>
                    <span>Ульяновск</span>
                </div>
            </div>
            <div>
                Main - Content
                <h1>Каршеринг</h1>
                <h>Need for drive</h>
                <p>Поминутная аренда авто твоего города</p>
                <button>Забронировать</button>
            </div>
            <div>
                Footer
                <p>
                    © 2016-2019 «Need for drive»
                </p>
                <p>8 (495) 234-22-44</p>
            </div>
        </div>
    )
}