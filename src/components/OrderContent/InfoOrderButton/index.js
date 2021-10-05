import React, {useState} from 'react';
import {Modal} from 'antd';
import './button.scss';
import 'antd/dist/antd.css';
import './index.css';
import {selectModel, additionally, inTotal, toOrder, toCancel} from './ItemInfoOrderButton/itemInfoOrderButton.constans'
import {ItemInfoOrderButton} from "./ItemInfoOrderButton";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";


export const InfoOrderButton = () => {

    //===============================Состояние кнопки в компоненте InfoOrder================================//
    // Новый способ ES2015
    const {
        streetAndHouse,
        car,
        selectedTariff,
        color,
        selectedDateStart,
        selectedDateEnd,
        activePage

    } = useSelector((state) => {
        return {
            streetAndHouse: state.reducerData.selectedStreetAndHouse,
            car: state.reducerData.selectedCar,
            selectedTariff: state.reducerData.selectedTariff,
            color: state.reducerData.selectedColor,
            selectedDateStart: state.reducerData.selectedDateStart,
            selectedDateEnd: state.reducerData.selectedDateEnd,
            activePage: state.reducerData.activePage
        }
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
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
        // return <NavLink to={'/orderFinish/'}/>


        // window.location.assign('/orderFinish/')
        // window.location.assign('/orderFinish/')
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    //===============================================================================//
    const isInTotalDisabled = !selectedTariff || !color || !selectedDateStart || !selectedDateEnd

    return (
        <>
            <NavLink to={'/orderPage/step2'}>
                <ItemInfoOrderButton lable={selectModel} disabled={!streetAndHouse} type={'link'}
                                     isVisible={activePage === 'SELECT_LOCATION'}/>
            </NavLink>
            <NavLink to={'/orderPage/step3'}>
                <ItemInfoOrderButton lable={additionally} disabled={!car} type={'link'}
                                     isVisible={activePage === 'SELECT_MODEL_CAR'}/>
            < /NavLink>
            <NavLink to={'/orderPage/step4'}>
                <ItemInfoOrderButton lable={inTotal} disabled={isInTotalDisabled} type={'link'}
                                     isVisible={activePage === 'SELECT_ADDITIONAL'}/>
            </NavLink>

            <ItemInfoOrderButton lable={toOrder} onClick={showModal} disabled={!selectedTariff}
                                 isVisible={activePage === 'TOTAL'}/>
            <div className='btn-cancel'>
                <ItemInfoOrderButton lable={toCancel} onClick={showModal} disabled={!selectedTariff}
                                     isVisible={activePage === 'CANCEL'}/>
            </div>


            <NavLink to={'/orderFinish/'}>
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
            </NavLink>
        </>
    )
}