import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
// import logo from '../assets/logo.png'
import { MdOutlineQueryStats } from 'react-icons/md';
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
    <NavLink to='/contact'>Contact Us</NavLink>
    </>
    return (
        <div className=" bg-gradient-to-r from-blue-600 to-[#0a1124] text-white fixed top-0 z-30 w-full">
            <div className="w-11/12  mx-auto navbar ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow  z-20 text-black">
                            <li>{ link}</li>
              
            </ul>
          </div>
          {/* <img src={logo} alt="" /> */}
         <h2 className='border-2 border-yellow-300 p-2 rounded-full'> <MdOutlineQueryStats size={25}/></h2>
          <a className="btn btn-ghost text-xl hidden md:flex">Choice Master</a>
        </div>
        
                  <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 text-white"> 
            {link}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          {
            user? <div className='flex justify-center items-center space-x-3'><button className="btn" onClick={signOutUser}>Log Out</button> <img referrerPolicy='no-referrer' title={user?.displayName} className='w-12 h-12 rounded-full' src={user?.photoURL
            } alt="" /></div>:<Link  to='/login'><button className='btn'>Log In</button></Link>
            }
            
            
        </div>
       </div>
      </div>
    );
};

export default Navbar;