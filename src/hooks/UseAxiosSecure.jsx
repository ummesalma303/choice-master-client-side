import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const  axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true 
  });


const useAxiosSecure = () => {
  const {signOutUser} = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(()=>{
    axiosSecure.interceptors.response.use(response=>{
      return response
    },err=>{
      if (err.response.status===401 || err.response.status===403) {
        // return
        // console.log('forbidden')
        signOutUser()
        navigate('/login')
      }
    })
  },[])
    return  axiosSecure
};

export default useAxiosSecure;