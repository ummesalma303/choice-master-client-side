import axios from 'axios';
import React from 'react';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const MyRecommendTable = ({i,recommend,fetchAllRecommendations}) => {

    const {queryUserName
        ,
        queryUserEmail,
        recommendationName,_id} = recommend || {}
console.log(recommend)
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
                
          
                axios.put(`
https://b10a11-server-side-ummesalma303.vercel.app/recommend/${id}`,recommend)
                .then(res=>{
                //   console.log(res.data.deletedCount)
                  if (res.data.deletedCount>0) {
                    console.log(res.data.acknowledged)
                    
                    Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                fetchAllRecommendations()
                  }
                })
                .catch(err=>console.log(err))
                // console.log()
          
               
              }
            });
              }
    return (
        
         <tr className="hover">
        <th>{i+1}</th>
        <td>{queryUserName}</td>
        <td>{
queryUserEmail}</td>
        <td>{recommendationName?.substr(0,17)}...</td>
        <td><button  onClick={()=>handleDelete(_id)} className='text-red-500'><MdDelete size={20}/></button></td>
        </tr>
       
    );
};

export default MyRecommendTable;