import {getAllCars} from "../api/getData";
import {useDispatch} from "react-redux";


export const useAllCars = () => {

    const dispatch = useDispatch()

    getAllCars()
        .then(response => {
            dispatch({type: 'GET_ALL_CARS', payload: response.data}) // - action {type: 'GET_ALL_CARS', payload: response.data}
        })
}