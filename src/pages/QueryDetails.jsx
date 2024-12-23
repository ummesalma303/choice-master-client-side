import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QueryDetails = () => {
    const {imageUrl,productName,title,boycottingDetails,currentDate,currentTime,email,userName,_id,
        recommendationCount,userImage} =useLoaderData()
    // const  = query || {}
    // console.log(queries);

    return (
        <div className='max-w-7xl mx-auto my-14 md:flex'>
            {/* query details */}
            <div className="md:w-1/2 card bg-base-100 shadow-xl border-2 border-[#0008]">
        <figure className="px-10 pt-10">
          <img
            src={imageUrl}
            alt={productName}
            className="rounded-xl aspect-video object-cover" />
        </figure>
        <div className="card-body ">
            <div className="flex justify-between items-center">
                <h2>{currentDate}</h2>
                <h2>{currentTime}</h2>
            </div>
          <h2 className="card-title">Product Name: {productName}</h2>
          <h3>Title:{title}</h3>
          <div className='flex justify-between my-4'>
               <div className="">
               <h2>User Name: {userName}</h2>
               <h2>User Email:{email}</h2>
               </div>
                <img className='w-12 h-12 rounded-full' src={userImage} alt="" />
            </div>
          <p>Boycotting Details: {boycottingDetails}...</p>
          <p>Recommendation Count: {recommendationCount}</p>
         
          <div className="card-actions">
           {/* <NavLink to={`/queryDetails/${_id}`}> <button className="btn btn-primary">View Details</button></NavLink> */}
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-primary">Delete </button>
          </div>
        </div>
      </div>
{/* recommendation form */}
        </div>
    );
};

export default QueryDetails;