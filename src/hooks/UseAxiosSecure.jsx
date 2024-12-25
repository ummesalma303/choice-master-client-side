import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
      // console.log(err.response.data.message)
      // console.log(err.message)
      // console.log(err)
      //  Swal.fire({
      //         icon: "error",
      //         title: `${err.message}`,
      //         text: "Something went wrong!",
      //       });
      if (err.response.status===401 || err.response.status===403) {
        // return
        // console.log('forbidden')
        signOutUser()
        navigate('/login')
      }
    })
  },[signOutUser,navigate])
    return  axiosSecure
};

export default useAxiosSecure;