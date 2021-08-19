import React from "react";
import './sidebar.css';
import {MenuOutlined} from "@ant-design/icons";

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='icon'>
                <MenuOutlined style={{fontSize: '26px', color: '#FFFFFF',}}/>
            </div>
            <span className='language'>Eng</span>
        </div>
    )
}