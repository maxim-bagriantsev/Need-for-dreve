import {getAllTowns} from "../api/getData";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const useAllTowns = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getAllTowns()
            .then(response => {
                dispatch({type: 'SET_ALL_TOWNS', payload: response.data.data}) // - action {type: 'GET_ALL_TOWNS', payload: response.data}
            })
    }, [])
}
