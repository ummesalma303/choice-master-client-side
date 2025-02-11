import React, { useContext, useEffect, useState } from 'react';
// import banner from '../assets/banner-1.avif'
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../provider/AuthProvider';
import QueryCard from '../components/queryCard';
import MyQueryCard from '../components/MyQueryCard';
import useAxiosSecure from '../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
// import UseAxiosSecure from '../hooks/UseAxiosSecure';

const MyQueries = () => {
  const {user} =useContext(AuthContext)
  const axiosSecure = useAxiosSecure()
  console.log(user?.email)

  const [queries,setQueries] =useState([])
console.log(queries)
  
 useEffect(()=>{
  if(user?.email){
    fetchAllQueries()
  }
 },[user])
 const fetchAllQueries = () => {
  axiosSecure.get(`https://b10a11-server-side-ummesalma303.vercel.app/myQueries/${user?.email}`)
  .then(res=>{
    console.log(res.data)
  setQueries(res.data)
  })
  .catch(err=>{
      // Swal.fire({
      //               title: "Error",
      //               text: `${err.message}`,
      //               icon: "err"
      //             });
  })
 }

 if (queries.length ===0) {
  return (
  <div className='flex justify-center items-center h-[70vh]'>
    <div className="text-center space-y-4">
    <h2 className='text-3xl'>No relevant queries found.</h2>
    <button className='btn btn-accent'><Link to='/addQueries'> Add Query</Link></button>
    </div>
  </div>)
 }
    return (
       
         <div className="">
          {/* Add Query Banner */}
           <div className="relative bg-banner w-full h-screen bg-no-repeat bg-cover bg-center">
            {/*  */}
             <div className='absolute flex justify-center items-center bg-gradient-to-t from-[#0000004a] to-[#00000083] inset-0'>
               <div className="text-center mx-auto w-1/2">
               <h2 className='text-xl text-white text '>  Evaluating the Impact of Modern Technology  on the Performance and Efficiency of  Retail Businesses in Today's Market</h2>
              <NavLink to='/addQueries'> <button className='btn mt-7'>Add Query </button></NavLink>
               </div>
               {/*  */}
                 </div>
          </div>
          {/* my queries */}
         <div className="w-11/12 mx-auto my-14">
         <h2 className='text-xl font-semibold my-6'>My Queries</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          queries?.map(query => <MyQueryCard key={query?._id} query={query} fetchAllQueries={fetchAllQueries}></MyQueryCard>)
         }
        </div>
         </div>
         </div>
    );
};

export default MyQueries;