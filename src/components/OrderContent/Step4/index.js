import React from "react";
import i30N from "../../../assets/imeges/i30.png";
import './step4.scss';
import {useSelector} from "react-redux";

export const Step4 = () => {

    const {
        car,
        selectedDateStart,
        selectedFullTank,

    } = useSelector((state) => {
        return {
            car: state.reducerData.selectedCar,
            selectedDateStart: state.reducerData.selectedDateStart,
            selectedFullTank: state.reducerData.selectedFullTank,
        }
    })

    return (
        <div className='total-order'>
            <div>
                <h3>{car}</h3>
                <p className='car-number'>K 761 HA 73</p>
                <p>
                    <strong>Топливо </strong>
                    {/*{selectedFullTank}*/}
                </p>
                <p>
                    <strong>Доступна с </strong>
                    {/*{selectedDateStart}*/}
                </p>
            </div>
            <div>
                <img className='total-car-img' src={i30N}/>
            </div>
        </div>
    )
}