import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <div className="max-w-7xl mx-auto"> */}
            <Outlet></Outlet>
            {/* </div> */}
        </div>
    );
};

export default MainLayout;