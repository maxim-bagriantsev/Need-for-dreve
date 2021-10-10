import React from "react";
import './map.scss';
import {YMapContainer} from "./Ymap/Custom";

export const Maps = () => {

    return (
        <div className='map'>
            <p>Выбор на карте:</p>
            <YMapContainer/>
        </div>
    )
}






