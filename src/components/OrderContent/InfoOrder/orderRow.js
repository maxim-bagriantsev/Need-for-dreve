import React from 'react';

export const OrderRow =(props)=>{

    return (
        <div className='model'>
            <div className='model-point'>
                <p>{props.label}</p>
            </div>
            <div className='address-name'>
                <p>{props.value}
                </p>
            </div>
        </div>
    )
}