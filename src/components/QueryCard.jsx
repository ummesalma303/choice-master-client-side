import React from 'react';
import { format } from 'date-fns';
import { NavLink } from 'react-router-dom';

const QueryCard = ({query}) => {
    const {imageUrl,productName,title,boycottingDetails,currentDate,currentTime,recommendationCount,email,userName,_id} = query
    // console.log(query)

  //  const time = currentTime.toLocaleTimeString()
  //   console.log(time)
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={imageUrl?imageUrl:''}
            alt={productName}
            className="rounded-xl aspect-video object-cover w-full" />
        </figure>
        <div className="card-body ">
            <div className="flex justify-between items-center">
                <h2>{currentDate}</h2>
                {/* <h2>{currentTime}</h2> */}
                <h2>{format(currentTime, "pp	")}</h2>
            </div>
          <h2 className="card-title">Product Name: {productName}</h2>
          <h3>Title:{title}</h3>
          <div>
                <h2>User Name: {userName}</h2>
                <h2>User Email:{email}</h2>
            </div>
          <p>Boycotting Details: {boycottingDetails?.substr(0,17)}...</p>
          <h3>Recommendation Count: {recommendationCount}</h3>
          <div className="card-actions">
          <NavLink to={`/queryDetails/${_id}`}> <button className="btn bg-gradient-to-tl from-blue-600 to-[#0a1124] text-white">Query details</button></NavLink>
            {/* <button className="btn btn-primary"></button> */}
          </div>
        </div>
      </div>
    );
};

export default QueryCard;