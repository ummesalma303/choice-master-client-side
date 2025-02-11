import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import RecommendationForm from '../components/RecommendationForm';
import { AuthContext } from '../provider/AuthProvider';
import { format } from 'date-fns';
import axios from 'axios';
import UpdateQuery from './UpdateQuery';
import AllRecommendation from '../components/AllRecommendation';
import {  useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const QueryDetails = () => {
  const {user} =useContext(AuthContext)
  const queryClient = useQueryClient()
  // console.log(user?.photoURL)
  // const [recommendations,setRecommendations] = useState([])
    const {imageUrl,productName,title,boycottingDetails,currentDate,currentTime,email,userName,_id,
        userImage} =useLoaderData()
  


        const {mutateAsync} = useMutation({
          mutationFn: async recommendationData => {
            await axios.post('https://b10a11-server-side-ummesalma303.vercel.app/add-recommendation',recommendationData) 
            // return axios.post('/todos', newTodo)
          },
          onSuccess: () => {
            // console.log('data saved')

              Swal.fire({
                          title: "Success",
                          text: "Your recommendation successfully added",
                          icon: "success"
                        });
            queryClient.invalidateQueries({ queryKey: ['recommendations'] })
          },
          onError: err => {
            Swal.fire({
              icon: "error",
              title: 'unsuccess added',
              text: `${err.message}`,
            });
          },
        })

/* --------------------------- recommendation form -------------------------- */
const handleQueryForm = async e =>{
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed)
 
  const currentDate = today.toLocaleDateString()
  console.log(currentDate)
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
      recommenderImage:user?.photoURL,
      
      image,
      title,
      reason,
      recommendationName,
      currentDate,
      currentTime,
      // recommendationCount:0,

  }
      

      try {
        await mutateAsync(recommendationData)
        form.reset()
      } catch (err) {
       Swal.fire({
                    icon: "error",
                    title: `${err.message }`,
                    text: "Something went wrong!",
                  });
        
      }
}


/* --------------------------- all recommendation --------------------------- */
// useEffect(()=>{
  
//     .then(res=>setRecommendations(res.data))
//     .catch(err=>console.log(err))
//    },[])
   const {data:recommendations} = useQuery({queryKey: ['recommendations'], queryFn: async()=>{
        const {data} = await   axios.get(`https://b10a11-server-side-ummesalma303.vercel.app/recommendations/${_id}`)
        return data
   }})
    return (
       <div className="w-11/12 mx-auto my-14 space-y-11 my-24">
         <div className='  md:flex justify-between'>
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
                <h2>{format(currentTime, "p")}</h2>
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
          {/* <p>Recommendation Count: {recommendationCount}</p> */}
         
          <div className="card-actions">
           {/* <NavLink to={`/queryDetails/${_id}`}> <button className="btn btn-primary">View Details</button></NavLink> */}
            {/* <button className="btn btn-primary">Update</button>
            <button className="btn btn-primary">Delete </button> */}
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
                  placeholder="Product Name "
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
                  placeholder="Recommendation TItle"
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
         {/* all recommendation */}
      <div className="">
        <h2 className='text-2xl my-4 font-semibold'>Recommendations:</h2>
      <div className="grid grid-cols-1  gap-10  border-[1px] border-[#0000003f] p-5 rounded-lg">
     {
      recommendations?.map(recommendation=><AllRecommendation key={recommendation._id} recommendation={recommendation}></AllRecommendation>)
     }
     
      </div>
      </div>
       </div>
    );
};

export default QueryDetails;


// const QueryDetails = () => {
//   const {id} = useParams()
//   const {user} =useContext(AuthContext);
//   const [queries,setQueries] =useState({})
// useEffect(()=>{
//   fetchQueryData()
// },[id])
// const fetchQueryData=async()=>{
//   const {data} = await axios.get(`https://b10a11-server-side-ummesalma303.vercel.app/allQueries/${id}`)
//   setQueries(data) 
// }