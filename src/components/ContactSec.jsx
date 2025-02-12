import React, { useRef, useState } from 'react';
import contact from '../assets/lottie/contact.json'
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
// import React, { useRef } from "react";
// import { useWindowSize } from 'react-use'
// import Confetti from 'react-confetti'
import Swal from "sweetalert2";

const ContactSec = () => {
  // const { width, height } = useWindowSize()

  // const [success,setSuccess]= useState(false)
  // console.log(import.meta.env.VITE_TEMPLATES_ID);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATES_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          // setSuccess(true)

          Swal.fire({
                           title: "Success",
                           text: "Your Message Successfully Send",
                           icon: "success"
                         });
          // toast('Wow so easy !')
          // toast.success("Thanks for Send Message.");
        },
        (error) => {
          console.log("FAILED...");
          Swal.error({
            title: "Success",
            text: "Your message Successfully",
            icon: "success"
          });
          // toast.error(error.text);
        }
      );
  };
    return (
         <div className=' mx-auto mb-16 md:mb-0'>
            
        <div className="md:flex flex-col lg:flex-row-reverse justify-between items-center">
        {/* <div className="hero-content flex-col lg:flex-row-reverse gap-x-6"> */}
          <div className="text-center lg:text-left md:w-1/2 ">
          <Lottie animationData={contact} />
          </div>
          <div className="card w-full max-w-lg  border-[1px] border-gray-900/5  shadow-xl bg-white dark:bg-gray-800 rounded-lg">
            <form ref={form} onSubmit={sendEmail} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  name="name" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
              <label className="border-[1px] input-bordered flex items-center gap-2">
                {/* <FaRegMessage className='absolute top-4 left-4'/> */}

                <textarea
                  // rows="6"
                  className="grow p-2 rounded-md"
                  placeholder="Message"
                  name="message" required
                />
              </label>
              </div>
              <div className="form-control mt-6">
                
                <button className="btn bg-black text-white hover:text-black bg-[rgba(132,94,194,1)] dark:hover:text-white">Contact Us</button>
                {/* {
                  success && <Confetti
                 wind={0.1}
                />
                } */}
              </div>
            </form>
          </div>
        {/* </div> */}
      </div>
         </div>
    );
};

export default ContactSec;