import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import RecommendationMeTable from './RecommendationMeTable';
import useAxiosSecure from '../hooks/UseAxiosSecure';

const RecommendationsForMe = () => {
  const axiosSecure = useAxiosSecure()
    const [ recommendations,setRecommendations] = useState([])
    // const [recommendations,setRecommendations] = useState([])
    const {user} = useContext(AuthContext)
    // console.log(user?.email)
    useEffect(()=>{
      if (user?.email){
        fetchAllQueries()
      }

     },[user])
     const fetchAllQueries = () => {
      axiosSecure.get(`/myRecommendations/${user?.email}`)
      .then(res=>{
        // console.log(res.data)
        setRecommendations(res.data)
      // setQueries(res.data)
      })
      .catch(err=>console.log(err))
     }
    return (
      <div className="h-[70vh] max-w-7xl mx-auto my-14">
          <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
           {
              recommendations?.map((recommend,i)=><RecommendationMeTable key={i} recommend={recommend} i={i}></RecommendationMeTable>)
           }
           
           
          </tbody>
        </table>
      </div>
      </div>
    );
};

export default RecommendationsForMe;