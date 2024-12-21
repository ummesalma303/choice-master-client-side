import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'> 
            <div className='text-center'>
                <h2 className='text-4xl font-semibold'>Page Not Found</h2><br />
                <NavLink to="/"> <button className='btn btn-accent text-white'>Go Home Page</button></NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;