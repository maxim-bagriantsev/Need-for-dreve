import React, {useState} from "react";
import './sidebar.scss';
import {MenuOutlined} from "@ant-design/icons";
import {HumburgerMenu} from "./HumburgerMenu/HumburgerMenu";
import {constItems} from './constItems'


export const Sidebar = () => {

    const [menuActive, setMunuActive] = useState(false)

    return (
        <div className='sidebar'>
            <div className='humburger-box'>
                <MenuOutlined onClick={() => setMunuActive(!menuActive)}/>
                <HumburgerMenu active={menuActive} setMunuActive={setMunuActive} items={constItems}/>
            </div>
            <span className='language'>Eng</span>
        </div>
    )
}