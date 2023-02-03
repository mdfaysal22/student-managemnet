import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import SideBar from '../Components/SideBar/SideBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;