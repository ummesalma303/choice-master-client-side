import React from 'react';
// import Home from '../Pages/Home';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <div className="max-w-7xl mx-auto"> */}
            <Outlet></Outlet>
            {/* </div> */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;