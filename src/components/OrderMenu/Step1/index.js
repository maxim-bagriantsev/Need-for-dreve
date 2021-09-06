import React from "react";
import './step1.scss'
import {Map, Placemark, YMaps} from "react-yandex-maps";

export const Step1 = () => {

    return (
        <>
            <div className='step-one'>
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
                            <Placemark
                                defaultGeometry={[55.75, 37.57]}
                                properties={{
                                    balloonContentBody:
                                        'Москва',
                                }}
                            />
                            <Placemark
                                defaultGeometry={[53.2001, 50.15]}
                                properties={{
                                    balloonContentBody:
                                        'Самара',

                                }}
                            />
                            <Placemark
                                defaultGeometry={[54.3282, 48.3866]}
                                properties={{
                                    hintContent: 'Ульяновск',
                                    balloonContentBody:
                                        'Ульяновск',
                                }}
                            />
                            <Placemark
                                defaultGeometry={[55.83043, 49.06608]}
                                properties={{
                                    hintContent: 'Казань',
                                    balloonContentBody:
                                        'Казань',
                                }}
                            />
                            <Placemark
                                defaultGeometry={[56.3287, 44.002]}
                                properties={{
                                    hintContent: 'Нижний Новогород',
                                    balloonContentBody:
                                        'Нижний Новогород',
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </>
    )
}