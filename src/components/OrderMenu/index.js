import React, {useState} from "react";
import {Header} from "../Main/Header";
import './orderMenu.scss'
import icons from "../../assets/icons.svg";

import {Map, Placemark, YMaps} from "react-yandex-maps";

const itemMenu = [
    {
        id: 1,
        text: 'Местоположение',
    },
    {
        id: 2,
        text: 'Модель',
    },
    {
        id: 3,
        text: 'Дополнительно',
    },
    {
        id: 4,
        text: 'Итого',
    }
]


export const OrderMenu = () => {
    const [towns,setTowns] = useState([])


    const stepsMenu = itemMenu.map((item, id) => {
        return (
            <>
                <li key={id}>{item.text}</li>
                <svg className='icon-play-button' width='8' height='10'>
                    <use xlinkHref={`${icons}#Play-button`}/>
                </svg>
            </>
        )
    })

    return (
        <div className='order-content'>
            <Header/>
            <div className='steps-menu'>
                <ul>
                    {stepsMenu}
                </ul>
            </div>
            <div className='step-settings'>
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
                <div className='info-order'>
                    <p>Ваш заказ:</p>
                    <button className='info-order-btn'>
                        <p>Выбрать модель</p>
                    </button>
                </div>
            </div>
        </div>
    )
}