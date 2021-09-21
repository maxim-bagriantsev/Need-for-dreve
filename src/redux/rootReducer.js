import {combineReducers} from "redux";
import {locationsReducer} from "./locations/locationsReducer";


export const rootReducer = combineReducers({
    location: locationsReducer,
/*    car: carReducer,*/
})

