import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const  axiosSecure = axios.create({
    baseURL: 'https://b10a11-server-side-ummesalma303.vercel.app',
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
     
      if (err.response.status === 401 || err.response.status === 403) {
        // return
        // console.log(err.response.data.message )
          Swal.fire({
              icon: "error",
              title: `${err.response.data.message }`,
              text: "Something went wrong!",
            });
        // signOutUser()
        // navigate('/login')
      }
    })
  },[signOutUser,navigate])
    return  axiosSecure
};

export default useAxiosSecure;