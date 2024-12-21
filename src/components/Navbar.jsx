import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const data = useContext(AuthContext);
    console.log(data.theme)
    return (
        <div className='bg-red-400'>
            <p>i am nav</p>
            <NavLink to='/'>Home</NavLink>
        </div>
    );
};

export default Navbar;