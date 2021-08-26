import React from 'react';
import './hamburger.scss';

export const Hamburger = ({openMenu, isMenuOpen}) => {

    const onClick = (event) => {
        event.preventDefault();
        openMenu(!isMenuOpen);
    }

    return (
        <button
            className={isMenuOpen ? 'hamburger-is-open' : 'hamburger'}
            onClick={(event) => onClick(event)}>
            <div className='hamburger-box'>
                <div className='hamburger-inner'/>
            </div>
        </button>
    )
}

