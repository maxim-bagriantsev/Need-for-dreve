import {getAllTowns} from "../api/getData";
import {useDispatch} from "react-redux";

export const useAllTowns = () => {

    const dispatch = useDispatch()

    getAllTowns()
        .then(response => {
            dispatch({type: 'GET_ALL_TOWNS', payload: response.data.data}) // - action {type: 'GET_ALL_TOWNS', payload: response.data}
        })
}
