import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Modal} from 'antd';
import './button.scss';
import 'antd/dist/antd.css';
import './index.css';
import {selectModel, additionally, inTotal, toOrder, toCancel} from './ItemInfoOrderButton/itemInfoOrderButton.constans'
import {ItemInfoOrderButton} from "./ItemInfoOrderButton";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {postOrder} from "../../../api/api";

export const InfoOrderButton = () => {

    let history = useHistory();

    const {
        selectedStreetAndHouse,
        selectedTariff,
        selectedDateStart,
        selectedDateEnd,
        activePage,
        selectedStreetAndHouseId,
        selectedTownId,
        selectedCarId,
        selectedCar,
        selectedColor,
        selectedClassCar,
        priceMax,
        selectedFullTank,
        selectedBabyChair,
        selectedRightDrive,
    } = useSelector((state) => {
        // return {
        //     selectedStreetAndHouse: state.reducerData.selectedStreetAndHouse,
        //     selectedTariff: state.reducerData.selectedTariff,
        //     selectedDateStart: state.reducerData.selectedDateStart,
        //     selectedDateEnd: state.reducerData.selectedDateEnd,
        //     activePage: state.reducerData.activePage,
        //     selectedTownId: state.reducerData.selectedTownId,
        //     selectedCar: state.reducerData.selectedCar,
        //     selectedColor: state.reducerData.selectedColor,
        //     selectedClassCar: state.reducerData.selectedClassCar,
        //     priceMax: state.reducerData.priceMax,
        //     selectedStreetAndHouseId: state.reducerData.selectedStreetAndHouseId,
        //     selectedFullTank: state.reducerData.selectedFullTank,
        //     selectedBabyChair: state.reducerData.selectedBabyChair,
        //     selectedRightDrive: state.reducerData.selectedRightDrive,
        // }
        return state.reducerData
    })

    //======================================================================================================//

    //===============================Модальное окно================================//
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const dispatch = useDispatch()

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        dispatch({type: 'SET_CURRENT_ORDER_PAGE', payload: 'CANCEL'})

        const order = {
            orderStatusId: {
                "name": "Новые",
                "id": "5e26a191099b810b946c5d89"
            },
            cityId: {id: selectedTownId.id},
            pointId: {id: selectedStreetAndHouseId.id},
            carId: selectedCarId,
            color: {type: selectedColor},
            dateFrom: {selectedDateStart},
            dateTo: {selectedDateEnd},
            rateId: {selectedClassCar},
            price: {priceMax},
            isFullTank: selectedFullTank,
            isNeedChildChair: selectedBabyChair,
            isRightWheel: selectedRightDrive
        }

        postOrder(order)
            .then(response => {
                dispatch({type: 'GET_ORDER', payload: response.data})
                history.push(`/orderFinish/${response.data.data.id}`);
            })
    }

    const isDisabled = () => {
        window.location.assign('/orderPage/step1')
    }

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    //===============================================================================//
    const isInTotalDisabled = !selectedTariff || !selectedColor || !selectedDateStart || !selectedDateEnd

    return (
        <>
            <NavLink to={'/orderPage/step2'}>
                <ItemInfoOrderButton lable={selectModel}
                                     disabled={!selectedStreetAndHouse}
                                     type={'link'}
                                     isVisible={activePage === 'SELECT_LOCATION'}
                />
            </NavLink>
            <NavLink to={'/orderPage/step3'}>
                <ItemInfoOrderButton lable={additionally}
                                     disabled={!selectedCar}
                                     type={'link'}
                                     isVisible={activePage === 'SELECT_MODEL_CAR'}
                />
            < /NavLink>
            <NavLink to={'/orderPage/step4'}>
                <ItemInfoOrderButton lable={inTotal}
                                     disabled={isInTotalDisabled}
                                     type={'link'}
                                     isVisible={activePage === 'SELECT_ADDITIONAL'}
                />
            </NavLink>

            <ItemInfoOrderButton lable={toOrder}
                                 onClick={showModal}
                                 disabled={!selectedTariff}
                                 isVisible={activePage === 'TOTAL'}
            />

            <div className='btn-cancel'>
                <ItemInfoOrderButton lable={toCancel}
                                     onClick={isDisabled}
                                     isVisible={activePage === 'CANCEL'}
                />
            </div>

            <Modal showModal={showModal}
                   visible={visible}
                   onOk={handleOk}
                   onCancel={handleCancel}
                   confirmLoading={confirmLoading}
                   width='auto'
                   height='500px'
                   closeIcon={false}
                   okText='Подтвердить'
                   cancelText='Вернуться'
            >
                <p>Подвердить заказ</p>
            </Modal>
        </>
    )
}