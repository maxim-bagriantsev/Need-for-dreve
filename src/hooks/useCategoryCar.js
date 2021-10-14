import {getAllTowns, getCategory} from "../api/api";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const useCategoryCar = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getCategory()
            .then(response => {
                dispatch({type: 'SET_ALL_CATEGORY', payload: response.data.data})
            })
    }, [])
}
