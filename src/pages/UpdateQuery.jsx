import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateQuery = () => {
    const {id} =useParams();
    const navigate = useNavigate()
    console.log(id)
    const HandleUpdateQuery = e =>{
        e.preventDefault()
        const form = e.target
        const productName =form.productName.value
        const productBrand =form.productBrand.value
        const imageUrl =form.imageUrl.value
        const title =form.title.value
        const boycottingDetails =form.boycottingDetails.value

        const updateData ={
            productName,
            productBrand,
            imageUrl,
            title,
            boycottingDetails,
            // currentDate,
            // currentTime,
            // recommendationCount:0,

        }
        // console.log(UpdateQueryData)

        axios.put(`http://localhost:5000/updateQuery/${id}`,updateData)
  .then(res=>{
    console.log(res.data)
//   setQueries(res.data)
if (res.data.modifiedCount>0) {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
    navigate('/')
}
  })
  .catch(err=>console.log(err))
    }
    return (
        <div className=" flex justify-center items-center my-9">
          <div className="card bg-base-100 w-full max-w-xl border border-[#00000033]">
            <form onSubmit={HandleUpdateQuery} className="card-body ">
              {/* Product Name  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name:</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name "
                  className="input input-bordered"
                required
                />
              </div>
              {/* Product Brand */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Brand:</span>
                </label>
                <input
                  type="text"
                  name="productBrand"
                  placeholder="Product Brand"
                  className="input input-bordered"
                  required
                />
              </div>

                  {/* Product Image-URL  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image-URL:</span>
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  placeholder="Product Image-URL "
                  className="input input-bordered"
                 required
                />
              </div>
              {/* Query TItle */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Query TItle:</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Query TItle"
                  className="input input-bordered"
                required
                />
              </div>
              
              {/* Boycotting Reason Details */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Boycotting Reason Details:</span>
                </label>

                <textarea  className='input input-bordered' name="boycottingDetails"  placeholder="Boycotting Reason Details:" id="" required></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Update Query
                </button>
              </div>
            </form>
          </div>
        </div>
    );
};

export default UpdateQuery;