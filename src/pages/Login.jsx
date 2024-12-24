import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {
  const { loginWithGoogle,loginUser } = useContext(AuthContext);
  const from = location?.state || '/'
  const navigate =useNavigate()

  const handleLogin =e=>{
    e.preventDefault()
    const form = e.target
    
    const email =form.email.value
    const password =form.password.value
  //  console.log(email,password)
    loginUser(email,password)
    .then(res => {
     
      Swal.fire({
        title: "Success",
        text: "Signin Successful",
        icon: "success"
      });
      navigate(from, { replace: true })
    })
    .catch(err=>{
      Swal.fire({
        icon: "error",
        title: `${err.message}`,
        text: "Something went wrong!",
      });
      // console.log(err)
    })
  }

  // google login
  const handleGoogle = () => {
    const navigate = useNavigate()
    loginWithGoogle()
      .then(res => {
        
        Swal.fire({
          title: "Success",
          text: "Signin Successful",
          icon: "success"
        });
        navigate(from, { replace: true })
      })
    .catch(err=>{
      Swal.fire({
        icon: "error",
        title: `${err.message}`,
        text: "Something went wrong!",
      });
      // console.log(err)
    })
  }
  
    return (
        <div>
            {/* form */}
          
  <div className=" flex-col ">
            {/* google login button */}
            <div className="flex justify-center items-center">
            <button onClick={handleGoogle} className='btn'>Login With Google</button>
            </div>
            <div className="divider">OR</div>
    <div className=" flex justify-center items-center my-9">
           <div className="card bg-base-100 w-full max-w-xl border border-[#00000033]">
             <form onSubmit={handleLogin} className="card-body ">
               
              
                   {/* email */}
               <div className="form-control">
                 <label className="label">
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
                     If you are a new.Please <Link
                       to="/register"
                       className="text-blue-600 link link-hover"
                     > Register
                     </Link>
                   </p>
                 </label>
               </div>
               <div className="form-control mt-6">
                 <button type="submit" className="btn btn-accent">
                   Log in
                 </button>
               </div>
             </form>
           </div>
         </div>
  </div>
</div>
     
    );
};

export default Login;