import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import MyRecommendTable from '../components/MyRecommendTable';
// import MyRecommandTable from '../components/MyRecommendTable';

const MyRecommendations = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email)
      const [recommendations,setRecommendations] =useState()
    
    // console.log(user)
    
 useEffect(()=>{
    fetchAllRecommendations()
   },[user])
   const fetchAllRecommendations = () => {
    axios.get(`http://localhost:5000/myRecommends/${user?.email}`)
    .then(res=>{
      console.log(res.data)
    setRecommendations(res.data)
    })
    .catch(err=>console.log(err))
   }
   
    return (
        <div className='h-[70vh] max-w-7xl mx-auto my-14'>
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