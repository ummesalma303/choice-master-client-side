import React from 'react';
// import Home from '../Pages/Home';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const MainLayout = () => {
    const navigation = useNavigation()
    // console.log(navigation)
    return (
        <div>
            <Navbar></Navbar>
            {/* <div className="max-w-7xl mx-auto"> */}
            {
                navigation.state === 'loading'?<Loader/>: <Outlet></Outlet>
            }
           
            {/* </div> */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;