import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect } from 'react';

const AllRecommendation = ({recommendation}) => {
    const {image,title,recommendationName,reason,currentTime} = recommendation || {}
    // console.log(recommendation)

    return (
        <div className="card flex border-[1px] border-[#0000003d] bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image?image:''}
            alt={recommendationName}
            className="w-full rounded-xl aspect-video object-cover" />
        </figure>
        <div className="card-body ">
            {/* <div className="flex justify-between items-center"> */}
                {/* <h2>{currentDate}</h2> */}
                {/* <h2>{currentTime}</h2> */}
                <h2>Time: {format(currentTime, "pp	")}</h2>
            {/* </div> */}
          <h2 className="card-title">Recommendation Name: {recommendationName}</h2>
          <h3>Title:{title}</h3>
          {/* <div>
                <h2>User Name: {userName}</h2>
                <h2>User Email:{email}</h2>
            </div> */}
          <p>Details: {reason?.substr(0,150)}</p>
          {/* <h3>Recommendation Count: {recommendationCount}</h3> */}
          <div className="card-actions">
          {/* <NavLink to={`/queryDetails/${_id}`}> <button className="btn btn-primary">Recommend</button></NavLink> */}
            {/* <button className="btn btn-primary"></button> */}
          </div>
        </div>
      </div>
    );
};

export default AllRecommendation;