import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.init";
import { updateProfile } from "firebase/auth";

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
            alert("user successfully sign up")

             console.log(res.user)
            
             updateProfile(auth.currentUser, updateData)
             .then(res => {
                setUser({...user,...updateData})
                console.log(res)})
                .catch(err=>console.log(err))
                
            })
            
            //  form.reset()
             navigate('/')
              
        .catch(err=>console.log(err))
       
        // console.log(user)
    }
  return (
    <div>
      {/* form */}
      {/* <div className="hero "> */}
      <div className=" flex justify-center items-center my-9">
        <div className="card bg-base-100 w-full max-w-xl border border-[#00000033]">
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
                  If you have already an account.Ple <Link
                    to="/login"
                    className="text-blue-600 link link-hover"
                  > login
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
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
