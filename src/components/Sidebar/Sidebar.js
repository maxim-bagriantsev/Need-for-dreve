import React, {useState} from "react";
import './sidebar.scss';
import {MenuOutlined} from "@ant-design/icons";
import {HumburgerMenu} from "./HumburgerMenu/HumburgerMenu";

export const Sidebar = () => {
    const items = [
        {value: 'ПАРКОВКА', href: '#'},
        {value: 'СТРАХОВКА', href: '#'},
        {value: 'БЕНЗИН', href: '#'},
        {value: 'ОБСЛУЖИВАНИЕ', href: '#'}
    ]

    const [menuActive, setMunuActive] = useState(false)

    return (
        <div className='sidebar'>
            <div className='humburger-box'>
                <MenuOutlined  onClick={() => setMunuActive(!menuActive)}/>
                <HumburgerMenu active={menuActive} setMunuActive={setMunuActive} items={items}/>
            </div>
            <span className='language'>Eng</span>
        </div>
    )
}