import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'antd';
import './button.scss';
import 'antd/dist/antd.css';
import './index.css';
import {selectModel, additionally, inTotal, toOrder} from './ItemInfoOrderButton/itemInfoOrderButton.constans'
import {ItemInfoOrderButton} from "./ItemInfoOrderButton";
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";
import {ItemStepMenu} from "../ItemStepMenu";

export const InfoOrderButton = () => {

    //===============================Состояние кнопки в компоненте InfoOrder================================//
    // Новый способ ES2015
    const {
        streetAndHouse,
        car,
        selectedTariff

    } = useSelector((state) => {
        return {
            streetAndHouse: state.reducerData.selectedStreetAndHouse,
            car: state.reducerData.selectedCar,
            selectedTariff: state.reducerData.selectedTariff
        }
    })
    //======================================================================================================//

    //===============================Модальное окно================================//
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
        window.location.assign('orderFinish/')
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    //===============================================================================//
    const [state, setState] = useState(false)

    const onChange = () => {
        return setState(state(true))
    }


    return (
        <>
            <NavLink to={'/orderPage/step2'}>
                <ItemInfoOrderButton lable={selectModel} disabled={!streetAndHouse} />
            </NavLink>

            <NavLink to={'/orderPage/step3'}>
                 <ItemInfoOrderButton lable={additionally} disabled={!car}/>
            </NavLink>

            <NavLink to={'/orderPage/step4'}>
                <ItemInfoOrderButton lable={inTotal} disabled={!selectedTariff}/>
            </NavLink>

            <ItemInfoOrderButton
                lable={toOrder} onClick={showModal} disabled={!selectedTariff}/>

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