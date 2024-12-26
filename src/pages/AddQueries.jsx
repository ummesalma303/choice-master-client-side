import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const AddQueries = () => {
  const navigate = useNavigate()
    const {user} =useContext(AuthContext);

  //  console.log(user)
    // console.log(currentDate,currentTime)




    
    // console.log(user?.photoURL)
    const handleQueries = e =>{
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed)
      // console.log(today)
      const currentDate = today.toLocaleDateString()
      const currentTime = today.getTime()
      
      // console.log(currentDate)
      // console.log(currentTime)
      // const currentTime = today.toLocaleTimeString()


        e.preventDefault()
        const form = e.target
        const productName =form.productName.value
        const productBrand =form.productBrand.value
        const imageUrl =form.imageUrl.value
        const title =form.title.value
        const boycottingDetails =form.boycottingDetails.value

        const queryData ={
            userName: user?.displayName,
            email: user?.email,
            userImage: user?.photoURL,

            productName,
            productBrand,
            imageUrl,
            title,
            boycottingDetails,
            currentDate,
            currentTime,
            recommendationCount:0,

        }
        // console.log(queryData);
        // console.log(user)

        axios.post('https://b10a11-server-side-ummesalma303.vercel.app/add-queries',queryData)
        .then(res=>{
            // console.log(res.data)
            // alert('your data successfully added')
            Swal.fire({
              title: "Success",
              text: "Your query successfully added",
              icon: "success"
            });
            navigate('/myQueries')
        })
           
        .catch(err=>{
          Swal.fire({
            icon: "error",
            title: 'unsuccess added',
            text: `${err.message}`,
          });
          // console.log(err)
        })
        
    }
    return (
        <div>
        {/* form */}
        {/* <div className="hero "> */}
        <div className=" flex justify-center items-center my-9">
          <div className="card bg-base-100 w-full max-w-xl border border-[#00000033]">
            <form onSubmit={handleQueries} className="card-body ">
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

                <textarea  className='input input-bordered' name="boycottingDetails"  placeholder="Boycotting Reason Details:" id=""></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddQueries;