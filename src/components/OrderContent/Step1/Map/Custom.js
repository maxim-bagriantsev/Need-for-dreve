/*

import React from "react";
import {useState} from "react";
import {Map, ObjectManager, Placemark, YMaps} from "react-yandex-maps";
import './map.scss'
import geoObjects from "./geoObjects.json";

export const Custom = (props) => {



    const mapState = {
        center: [54.3187, 48.3978],
        zoom: 12,
        controls: ['zoomControl', 'fullscreenControl'],
    };

    return (
        <div className='map'>
            <p>Выбор на карте:</p>
            <YMaps
                query={{ // для подключения апи ключа. load: 'package.full' - используем все пакеты
                    ns: 'use-load-option',
                    apikey: 'af28acb6-4b1c-4cd1-8251-b2f67a908cac',
                    load: 'package.full'
                }}
            >
                <Map
                    state={mapState}
                    width={"100%"}
                    defaultState={{
                        center: [54.3187, 48.3978],
                        zoom: 12,
                        controls: ['zoomControl', 'fullscreenControl'],
                    }}
                    modules={["geolocation", "geocode"]}
                >
                    <ObjectManager
                        options={{
                            clusterize: true,
                            gridSize: 32,
                        }}
                        objects={{
                            openBalloonOnClick: true,
                            preset: 'islands#greenDotIcon',
                        }}
                        clusters={{
                            preset: 'islands#redClusterIcons',
                        }}
                        filter={object => object.id % 2 === 0}
                        defaultFeatures={geoObjects.features}
                        modules={[
                            'objectManager.addon.objectsBalloon',
                            'objectManager.addon.objectsHint',
                        ]}
                    />
                    <Placemark
                        geometry={{
                            type: 'Point',
                            coordinates: 'Самара',
                        }}
                        properties={{
                            iconContent: ''
                        }}
                        options={{
                            preset: 'islands#blackStretchyIcon',
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    )
};*/
