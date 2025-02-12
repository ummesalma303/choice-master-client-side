import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
const MyQueryCard = ({query,fetchAllQueries}) => {
    const {imageUrl,productName,title,boycottingDetails,currentDate,currentTime,email,userName,_id,
      recommendationCount} = query || {}
    // console.log(query)
    // console.log(currentTime)

    
    const handleDelete = (id)=>{
     
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      

      axios.delete(`
https://b10a11-server-side-ummesalma303.vercel.app/query/${id}`)
      .then(res=>{
        // console.log(res.data.deletedCount)
        if (res.data.deletedCount>0) {
          // console.log(res.data.acknowledged)
          
          Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      fetchAllQueries()
        }
      })
      .catch(err=>console.log(err))
      // console.log()

     
    }
  });
    }
    return (
        <div className="card  border-[1px] border-gray-900/5 bg-white dark:bg-gray-800 rounded-lg">
        <figure className="px-10 pt-10">
          <img
            src={imageUrl}
            alt={productName}
            className="rounded-xl aspect-video object-cover" />
        </figure>
        <div className="card-body ">
            <div className="flex justify-between items-center">
                <h2>{currentDate}</h2>
                <h2>{format(currentTime, "p")}</h2>
            </div>
          <h2 className="card-title dark:text-white">Product Name: {productName}</h2>
          <h3><span className='font-bold dark:text-gray-200'>Title:</span>{title}</h3>
          {/* <div >
                <h2>User Name: {userName}</h2>
                <h2>User Email:{email}</h2>
            </div> */}
            <h3>Recommendation Count: {recommendationCount}</h3>
          <p>Boycotting Details: {boycottingDetails?.substr(0,17)}...</p>
         
          <div className="card-actions">
           <NavLink to={`/queryDetails/${_id}`}> <button className="btn bg-gradient-to-tl from-blue-600 to-[#0a1124] text-white mt-5 dark:bg-gradient-to-tl from-[ rgba(132,94,194,1)] to-[rgba(75,255,237,1)]">
           View Details</button></NavLink>
           <NavLink to={`/updateQuery/${_id}`}> <button className="btn bg-gradient-to-tl from-blue-600 to-[#0a1124] text-white mt-5 dark:bg-gradient-to-tl from-[ rgba(132,94,194,1)] to-[rgba(75,255,237,1)]"><CiEdit />Update</button></NavLink>
            {/* <button className="btn btn-primary">Update</button> */}
            <button onClick={()=>handleDelete(_id)} className="btn bg-gradient-to-tl from-blue-600 to-[#0a1124] text-white mt-5 dark:bg-gradient-to-tl from-[ rgba(132,94,194,1)] to-[rgba(75,255,237,1)]"><MdDeleteForever />
             Delete </button>
          </div>
        </div>
      </div>
    );
};

export default MyQueryCard;