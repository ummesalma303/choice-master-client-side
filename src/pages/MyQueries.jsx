import React from 'react';
import banner from '../assets/banner-1.avif'
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const MyQueries = () => {
  axios.get('http://localhost:5000/allQueries')
  .then(res=>console.log(res.data))
    return (
       
          <div className="relative bg-banner  w-full h-[80vh] bg-no-repeat bg-cover bg-center ">
             <div className='absolute flex justify-center items-center bg-gradient-to-t from-[#0000004a] to-[#00000083] inset-0'>
               <div className="text-center mx-auto w-1/2">
               <h2 className='text-xl text-white text '>  Evaluating the Impact of Modern Technology  on the Performance and Efficiency of  Retail Businesses in Today's Market</h2>
              <NavLink to='/addQueries'> <button className='btn mt-7'>Add Query </button></NavLink>
               </div>
          </div>
        </div>
    );
};

export default MyQueries;