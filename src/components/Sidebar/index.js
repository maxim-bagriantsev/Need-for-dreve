import React, {useState} from 'react';
import {Hamburger} from './Hamburger';
import {LanguageSelector} from './LanguageSelector';
import {Menu} from './Menu';
import './sidebar.scss';

export const Sidebar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = (open) => {
        setIsMenuOpen(open);
    }

    return (
        <div className='sidebar'>
            <Hamburger isMenuOpen={isMenuOpen} openMenu={openMenu}/>
            <Menu isMenuOpen={isMenuOpen} openMenu={openMenu}/>
            <LanguageSelector/>
        </div>
    )
}


