import React from 'react';
import { NavLink } from 'react-router-dom';

const MyQueryCard = ({query}) => {
    const {imageUrl,productName,title,boycottingDetails,currentDate,currentTime,email,userName,_id} = query || {}
    console.log(query)
    return (
        <div className="card bg-base-100  shadow-xl">
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
          <div>
                <h2>User Name: {userName}</h2>
                <h2>User Email:{email}</h2>
            </div>
          <p>Boycotting Details: {boycottingDetails?.substr(0,17)}...</p>
         
          <div className="card-actions">
           <NavLink to={`/queryDetails/${_id}`}> <button className="btn btn-primary">View Details</button></NavLink>
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-primary">Delete </button>
          </div>
        </div>
      </div>
    );
};

export default MyQueryCard;