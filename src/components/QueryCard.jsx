import React from 'react';
import { format } from 'date-fns';
import { NavLink } from 'react-router-dom';

const QueryCard = ({query}) => {
    const {imageUrl,productName,title,boycottingDetails,currentDate,currentTime,recommendationCount,email,userName,_id} = query
    // console.log(query)

  //  const time = currentTime.toLocaleTimeString()
  //   console.log(time)
    return (
        <div className="card border-[1px] border-gray-900/5 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ">
        <figure className="px-2 pt-2">
          <img
            src={imageUrl?imageUrl:''}
            alt={productName}
            className="rounded-xl aspect-video object-cover w-full" />
        </figure>
        <div className="space-y-3 ">
            <div className="flex justify-between items-center mt-2">
                <h2>{currentDate}</h2>
                {/* <h2>{currentTime}</h2> */}
                <h2>{format(currentTime, "pp	")}</h2>
            </div>
          <h2 className="card-title dark:text-white">Product Name: {productName}</h2>
          <h3><span className='font-bold dark:text-gray-200'>Title:</span>{title}</h3>
          {/* <div>
                <h2>User Name: {userName}</h2>
                <h2>User Email:{email}</h2>
            </div> */}
            {/* from-[rgba(132,94,194,1)] to-[rgba(75,255,237,1)] */}
            {/*background-image: radial-gradient( circle 341px at 10% 20%,  rgba(132,94,194,1) 0%, rgba(196,243,251,1) 90% );
 */}
          <p><span className='font-bold dark:text-gray-300'>Boycotting Details:</span> {boycottingDetails?.substr(0,28)}...</p>
          <h3>Recommendation Count: {recommendationCount}</h3>
          <div className="card-actions">
          <NavLink to={`/queryDetails/${_id}`}> <button className="btn bg-gradient-to-tl from-blue-600 to-[#0a1124] text-white mt-5 dark:bg-gradient-to-tl from-[ rgba(132,94,194,1)] to-[rgba(75,255,237,1)]">Query details</button></NavLink>
            {/* <button className="btn btn-primary"></button> */}
          </div>
        </div>
      </div>
    );
};

export default QueryCard;