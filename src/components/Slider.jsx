import React from 'react';
import { Link } from 'react-router-dom';

const Slider = ({banner}) => {
    return (
      <div>
      <img className='relative h-[70vh] w-full' src={banner} alt="" />
     <div className="inset-0 absolute flex justify-center items-center bg-gradient-to-tr from-[#0000008b] to-[#0000002d]">
     <div className=" w-2/3 mx-auto text-center space-y-4">
        <h2 className=' text-3xl font-semibold text-white'>Choice Master</h2>
        <p className='text-white'>Discover the Best Keyboards: High Quality, Durability, and Superior Typing Experience from Top Brands Recommended by Experts.</p>
        <Link to='/queries'><button className='btn bg-black text-white hover:text-black border-transparent'>Query And Recommendation</button></Link>
        
      </div>
     </div>
      </div>
    );
};

export default Slider;