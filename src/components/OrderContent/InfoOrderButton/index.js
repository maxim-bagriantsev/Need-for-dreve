import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Button, Modal} from 'antd';
import './button.scss'

export const InfoOrderButton = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <button className='info-order-btn' type="primary" onClick={showModal}>
                <p>Выбрать модель</p>
            </button>
            <Modal showModal={showModal}
                   visible={isModalVisible}
                   onOk={handleOk}
                   onCancel={handleCancel}
                   width='auto'
                   height='500px'
                   closeIcon={false}
                   wrapClassName='modal-window'
                   okText='Подтвердить'
                   cancelText='Вернуться'
            >
                <p>Подтвердить заказ</p>
            </Modal>
        </>
    )
}