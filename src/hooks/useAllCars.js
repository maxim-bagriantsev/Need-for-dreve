import {getAllCars} from "../api/api";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const useAllCars = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getAllCars()
            .then(response => {
                dispatch({type: 'SET_ALL_CARS', payload: response.data.data}) // - action {type: 'SET_ALL_CARS', payload: response.data}
            })
    }, [])
}