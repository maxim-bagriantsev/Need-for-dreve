import React from "react";
import './sidebar.css';
import {MenuOutlined} from "@ant-design/icons";

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <MenuOutlined className='icon' style={{ fontSize: '26px',color: '#FFFFFF',  }} />
            <span className='language'>Eng</span>
        </div>
    )
}