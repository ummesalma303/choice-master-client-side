import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="bg-errorBanner w-full h-screen bg-no-repeat bg-cover">

        <div className='flex justify-center items-center h-screen '> 
            <div className='text-center backdrop-blur-md bg-white/30 px-20 py-8'>
                <h2 className='text-4xl font-semibold'>Page Not Found</h2><br />
                <NavLink to="/"> <button className='btn bg-black text-white'>Go Home Page</button></NavLink>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;