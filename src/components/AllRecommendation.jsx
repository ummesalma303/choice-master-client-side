import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import image from '../assets/banner/banner-1.webp'
const AllRecommendation = ({recommendation}) => {
    const {image,title,recommendationName,reason,currentTime,recommenderEmail,recommenderImage,recommenderName,currentDate
    } = recommendation || {}
    // console.log(recommendation)

    return (
      <div className="card border-2 border-[#00000049] p-5 divide-y-[1px] divide-[#00000038] space-y-2">
        <div className="flex-wrap flex md:space-x-3">
          <img referrerPolicy='no-referrer' className='w-14 h-14 rounded-full' src={recommenderImage} alt="" />
          <div className="">
            <h2>Name: {recommenderName}</h2>
          <h2 className='text-wrap'>email:{recommenderEmail}</h2>

          </div>
             <div className="text-xs text-gray-500 font-semibold">
             <h2>Date: {currentDate}</h2>
             <h2>Time: {format(currentTime, "p")}</h2>
             </div>
        </div>
        {/* <div className="border-"></div> */}
        {/* <div className="divider  divider-neutral"></div> */}
       <div className="md:flex md:space-x-3">
       <div className="md:w-72 h-48  mt-3">
          <img className='w-full h-full space-x-4' src={image} alt="" />
        </div>
       <div className=" mt-3 space-y-2">
       <h2 className='text-xl'>Name: {recommendationName}</h2>
       <h2>Title: {title}</h2>
       <p>Reason:{reason}</p>
       </div>
       </div>
      </div>
    );
};


export default AllRecommendation;