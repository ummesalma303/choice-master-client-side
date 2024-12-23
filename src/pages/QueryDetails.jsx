import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
// import RecommendationForm from '../components/RecommendationForm';
import { AuthContext } from '../provider/AuthProvider';
import { format } from 'date-fns';
import axios from 'axios';
import UpdateQuery from './UpdateQuery';

const QueryDetails = () => {
  const {user} =useContext(AuthContext)

    const {imageUrl,productName,title,boycottingDetails,currentDate,currentTime,email,userName,_id,
        recommendationCount,userImage} =useLoaderData()
  

/* --------------------------- recommendation form -------------------------- */
const handleQueryForm = e =>{
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed)

  const currentTime = today.getTime()
  // console.log(today.toLocaleTimeString())

  e.preventDefault()
  const form = e.target
  const recommendationName =form.recommendationName.value
  const image =form.image.value
  const title =form.title.value
  const reason =form.reason.value
  
  const recommendationData ={
    queryId:_id,
    queryTitle:title,

      queryUserName: userName,
      queryUserEmail: email,
      
      // userImage: user?.photoURL,
      recommenderEmail:user?.email,
      recommenderName:user?.displayName,
      
      image,
      title,
      reason,
      recommendationName,
      currentTime,
      recommendationCount:0,

  }
      console.log(currentTime)
      axios.post('http://localhost:5000/add-recommendation',recommendationData)
      .then(res=>{
          console.log(res.data)
          alert('your data successfully added')
      })
         
      .catch(err=>console.log(err))
}
    
    return (
        <div className='max-w-7xl mx-auto my-14 md:flex justify-between'>
            {/* query details */}
            <div className="md:w-[45%] card bg-base-100 shadow-xl border-2 border-[#0008]">
        <figure className="px-10 pt-10">
          <img
            src={imageUrl}
            alt={productName}
            className="rounded-xl aspect-video object-cover " />
        </figure>
        <div className="card-body ">
            <div className="flex justify-between items-center">
                <h2>{currentDate}</h2>
                <h2>{format(currentTime, "HH:mm:ss")}</h2>
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


     <div className="md:w-1/2">
     <div className="">
    <h2 className='text-xl font-semibold underline'>Recommendation</h2>
    
<div className=" flex justify-center items-center my-9">
          <div className="card bg-base-100 w-full border border-[#00000033]">
            <form onSubmit={handleQueryForm} className="card-body ">
              {/* Recommended product Name  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recommended product Name:</span>
                </label>
                <input
                  type="text"
                  name="recommendationName"
                  placeholder="Product NameRecommended product Name "
                  className="input input-bordered"
                  required
                />
              </div>
                {/* Recommended Product Image  */}
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Recommended Product Image:</span>
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="Recommended Product Image "
                  className="input input-bordered"
                  required
                />
              </div>

                
              {/*Recommendation Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recommendation Title:</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Query TItle"
                  className="input input-bordered"
                  required
                />
              </div>
              
              {/* Recommendation reason*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recommendation reason:</span>
                </label>

                <textarea  className='input input-bordered' name="reason"  placeholder="Recommendation reason:" id=""></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add Recommendation
                </button>
              </div>
            </form>
          </div>
        </div>
</div>
     </div>
      </div>
    );
};

export default QueryDetails;