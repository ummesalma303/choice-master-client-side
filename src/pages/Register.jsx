import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.init";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
    const {newUser,setUser,user} = useContext(AuthContext)
  const navigate =useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target
        const name =form.name.value
        const email =form.email.value
        const password =form.password.value
        const photo =form.photo.value

        const updateData ={
            displayName:name,photoURL:photo
        }

        newUser(email,password)
        .then(res =>{
            // alert("user successfully sign up")

            //  console.log(res.user)
            
             updateProfile(auth.currentUser, updateData)
             .then(res => {
                setUser({...user,...updateData})
                Swal.fire({
                  title: "Success",
                  text: "SignUP Successful",
                  icon: "success"
                });
                // navigate(from, { replace: true })
                navigate('/')
              })
                .catch(err=>{
                  // console.log(err)
                  Swal.fire({
                    icon: "error",
                    title: 'text',
                    text: `${err.message}`,
                  });
                })
            })
            
            //  navigate('/')
              
        .catch(err=>{
          Swal.fire({
            icon: "error",
            title: 'text',
            text: `${err.message}`,
          });
          // console.log(err)
        })
       
        // console.log(user)
    }
  return (
    <div>
      {/* form */}
      {/* <div className="hero "> */}
      <div className=" flex justify-center items-center my-9 mt-32">
        {/* dark:bg-gray-800 rounded-lg */}
        <div className="card border-[1px] border-gray-900/5 dark:bg-gray-800 rounded-lg  shadow-xl bg-white  w-full max-w-xl ">
          <form onSubmit={handleSubmit} className="card-body ">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            {/*Photo */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="PhotoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                {/* email */}
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p className="label-text-alt x">
                  If you have already an account.Please <Link
                    to="/login"
                    className="text-blue-600 link link-hover"
                  > login
                  </Link>
                </p>
              </label>
            </div>
            {/* dark:bg-gradient-to-tl from-[ rgba(132,94,194,1)] to-[rgba(75,255,237,1)] */}
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-black text-white hover:text-black bg-[rgba(132,94,194,1)] dark:hover:text-white">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Register;
