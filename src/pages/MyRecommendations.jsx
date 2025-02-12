import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import MyRecommendTable from '../components/MyRecommendTable';
import useAxiosSecure from '../hooks/UseAxiosSecure';
// import MyRecommandTable from '../components/MyRecommendTable';

const MyRecommendations = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    // console.log(user?.email)
      const [recommendations,setRecommendations] =useState()
    
    // console.log(user)
    
 useEffect(()=>{
  if(user?.email){
    fetchAllRecommendations()
  }
   },[user])
   const fetchAllRecommendations = () => {
    axiosSecure.get(`https://b10a11-server-side-ummesalma303.vercel.app/myRecommends/${user?.email}`)
    .then(res=>{
      console.log(res?.data,user?.email)
    setRecommendations(res?.data)
    })
    .catch(err=>console.log(err))
   }
   
    return (
        <div className='h-[70vh] max-w-7xl mx-auto my-24'>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Product Name</th>
      </tr>
    </thead>
    <tbody>
     {
        recommendations?.map((recommend,i)=><MyRecommendTable key={i} i={i} fetchAllRecommendations={fetchAllRecommendations} recommend={recommend}></MyRecommendTable>)
     }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyRecommendations;