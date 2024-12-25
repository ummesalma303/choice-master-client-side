import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
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
      

      axios.delete(`http://localhost:5000/query/${id}`)
      .then(res=>{
        console.log(res.data.deletedCount)
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
                <h2>{format(currentTime, "HH:mm:ss")}</h2>
            </div>
          <h2 className="card-title">Product Name: {productName}</h2>
          <h3>Title:{title}</h3>
          <div>
                <h2>User Name: {userName}</h2>
                <h2>User Email:{email}</h2>
            </div>
            <h3>Recommendation Count: {recommendationCount}</h3>
          <p>Boycotting Details: {boycottingDetails?.substr(0,17)}...</p>
         
          <div className="card-actions">
           <NavLink to={`/queryDetails/${_id}`}> <button className="btn btn-primary">View Details</button></NavLink>
           <NavLink to={`/updateQuery/${_id}`}> <button className="btn btn-primary">Update</button></NavLink>
            {/* <button className="btn btn-primary">Update</button> */}
            <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete </button>
          </div>
        </div>
      </div>
    );
};

export default MyQueryCard;