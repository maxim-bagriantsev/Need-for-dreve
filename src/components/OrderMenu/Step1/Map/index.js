import React from "react";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import './map.scss'
import {placeMark} from './const'

export const Maps = () => {

    const maps = placeMark.map((map, id) => {

        return (
            <Placemark key={id}
                       defaultGeometry={map.defaultGeometry}
                       properties={{
                           balloonContentBody:
                           map.balloonContentBody
                       }}
            />
        )
    })

    return (
        <div className='map'>
            <p>Выбор на карте:</p>
            <YMaps
                query={{
                    ns: 'use-load-option',
                    load:
                        'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
                }}
            >
                <Map
                    width={"100%"}
                    defaultState={{
                        center: [55.75, 37.57],
                        zoom: 5,
                        controls: ['zoomControl', 'fullscreenControl'],
                    }}
                >
                    {maps}
                </Map>
            </YMaps>
        </div>
    )
}
