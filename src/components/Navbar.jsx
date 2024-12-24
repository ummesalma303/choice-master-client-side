import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
const Navbar = () => {
    const {user,signOutUser} = useContext(AuthContext);
    // console.log(user)
    const link = <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/queries'>Queries</NavLink>
   {
    user&& <NavLink to='/recommendationsForMe'>Recommendations For Me</NavLink>
   }
    {
      user&&<NavLink to='/myQueries'>My Queries</NavLink>
    }
    {
      user&&<NavLink to='/myRecommendations'>My recommendations</NavLink>
    }
    </>
    return (
        <div className="bg-blue-950 text-white ">
            <div className="max-w-7xl bg- mx-auto navbar ">
            <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            <li>{ link}</li>
              
            </ul>
          </div>
          <img src={logo} alt="" />
          <a className="btn btn-ghost text-xl">Choice Master</a>
        </div>
        
                  <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 text-white"> 
            {link}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          {
            user? <div className='flex justify-center items-center space-x-3'><button className="btn" onClick={signOutUser}>Log Out</button> <img referrerPolicy='no-referrer' title={user?.displayName} className='w-12 h-12 rounded-full' src={user?.photoURL
            } alt="" /></div>:<NavLink to='/login'><button className='btn'>Log In</button></NavLink>
            }
            
            
        </div>
       </div>
      </div>
    );
};

export default Navbar;