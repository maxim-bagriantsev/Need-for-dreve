import React from 'react';
import axios from "axios";
import {urls} from './urls'

// передаем ключ в header
const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    }
});

// получаем список городов
export const getAllTowns = () => {
    return axiosInstance.get(urls.cities())
}

// получаем список машин
export const getAllCars = () => {
    return axiosInstance.get(urls.cars())
}

// получаем список андресов
export const getAddress = () => {
    return axiosInstance.get(urls.address())
}

// подтверждаем заказ
export const getOrderById = () => {
    return axiosInstance.get(urls.orderId())
}






