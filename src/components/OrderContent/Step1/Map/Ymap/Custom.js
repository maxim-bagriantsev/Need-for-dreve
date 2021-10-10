import React, {useEffect, useRef, useState} from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import {useSelector} from "react-redux";
import {OrderData} from "./OrderData";
import ellipse from './ellipse.svg';
import './yMap.scss'

const styleIcons = {
    iconLayout: 'default#image',
    iconImageHref: ellipse,
    iconImageSize: [14, 14],
};
const modules = ['geocode', 'Placemark'];

export const YMapContainer = () => {
    const ymaps = useRef(null);
    const [orderInfo, setOrderInfo] = useState(OrderData)
    const [coordsOfAllPoints, setCoordsOfAllPoints] = useState([])

    const {
        streets,
        selectedTown,
        selectedStreetAndHouse,
    } = useSelector((state) => {

        return {
            streets: state.reducerData.streets,
            selectedTown: state.reducerData.selectedTown,
            selectedStreetAndHouse: state.reducerData.selectedStreetAndHouse,
        }
    })

    const [defaultStateCity, setDefaultStateCity] = useState({
        center: [54.3187, 48.3978],
        zoom: 12,
    })

    function getCoordByCityNameAndSetToDefaultStateCity(city) {
        ymaps.current.geocode(city, {result: 1}).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            const coordsCity = firstGeoObject.geometry.getCoordinates();
            setDefaultStateCity((prev) => ({
                ...prev,
                center: coordsCity,
                zoom: 11,
            }));
        });
    }

    useEffect(() => {
        if (selectedTown && ymaps.current) {
            getCoordByCityNameAndSetToDefaultStateCity(selectedTown);
        }
    }, [selectedTown]);

    async function getGeo(points) {
        const temp = [];
        for (const point of points) {
            await ymaps.current
                .geocode(`${point.cityId?.name}, ${point.address}`, {
                    result: 1,
                })
                .then(async (res) => {
                    const firstGeoObject = await res.geoObjects.get(0);
                    const coordsPoint = await firstGeoObject.geometry.getCoordinates();

                    temp.push({
                        point: point.name,
                        lat: coordsPoint[0],
                        long: coordsPoint[1],
                    });
                })

                .catch((error) => console.log('getGeo', error));
        }
        setCoordsOfAllPoints([...temp]);
    }

    useEffect(async () => {
        if (ymaps.current) {
            getGeo(streets);
        }
    }, [streets]);


    useEffect(() => {
        if (selectedStreetAndHouse && coordsOfAllPoints.length > 0) {
            const pointNow = coordsOfAllPoints.find(
                (item) => item.point === selectedStreetAndHouse,
            );

            setDefaultStateCity((prev) => ({
                ...prev,
                center: [pointNow.lat, pointNow.long],
                zoom: 15,
            }));
        }
    }, [orderInfo.location.point]);

    const onClickHandler = async (point) => {
        setOrderInfo((prev) => ({
            ...prev,
            location: {...prev.location, point},
        }));
    };

    return (

        <YMaps
            query={{
                apikey: 'af28acb6-4b1c-4cd1-8251-b2f67a908cac',
            }}
        >
            <Map
                className='size'
                defaultState={defaultStateCity}
                state={defaultStateCity}
                modules={modules}
                onLoad={(api) => {
                    ymaps.current = api;
                }}
            >
                {coordsOfAllPoints?.map((item) => (
                    <Placemark
                        className='placemark'
                        key={item.point}
                        geometry={[item.lat, item.long]}
                        options={styleIcons}
                        onClick={() => onClickHandler(item.point)}
                    />
                ))}
            </Map>
        </YMaps>
    );
}
