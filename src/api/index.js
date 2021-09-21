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
        .then(response => {
            debugger
            return response.data
        })
}



