import React, {useState} from 'react';
import {Button, Modal} from 'antd';
import './button.scss';
import 'antd/dist/antd.css';
import './index.css';

export const InfoOrderButton = () => {
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
        window.location.assign('http://localhost:3000/orderFinish/')
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    return (
        <React.Fragment>
            <Button
                type="primary"
                className='info-order-btn'
                onClick={showModal}
                disabled={false} // доступна или не доступна кнопка
            >
                <p>Выбрать модель</p>
            </Button>
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
        </React.Fragment>
    )
}