import React from 'react';
import contact from '../assets/lottie/contact.json'
import Lottie from "lottie-react";

const ContactSec = () => {
    return (
         <div className='w-11/12 mx-auto mb-6 md:mb-0'>
            
        <div className=" flex-col lg:flex-row-reverse justify-center items-center gap-x-">
        {/* <div className="hero-content flex-col lg:flex-row-reverse gap-x-6"> */}
          <div className="text-center lg:text-left md:w-1/2">
          <Lottie animationData={contact} />
          </div>
          <div className="card w-full max-w-lg h-full border-2 border-[#00000071]">
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number:</span>
                </label>
                <input type="number" placeholder="Phone number" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black text-white hover:text-black">Contact Us</button>
              </div>
            </form>
          </div>
        {/* </div> */}
      </div>
         </div>
    );
};

export default ContactSec;