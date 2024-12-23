import React from 'react';

const RecommendationForm = () => {
    const handleQueryForm = e =>{
        e.preventDefault()
        const form = e.target
        const recommendationName =form.recommendationName.value
        const image =form.image.value
        const title =form.title.value
        const reason =form.reason.value
        console.log(image,title,reason,recommendationName)
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
    }
//     return (
// {/* <div className="">
//     <h2 className='text-xl font-semibold underline'>Recommendation</h2>
    
// <div className=" flex justify-center items-center my-9">
//           <div className="card bg-base-100 w-full border border-[#00000033]">
//             <form onSubmit={handleQueryForm} className="card-body ">
//               {/* Recommended product Name  */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Recommended product Name:</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="recommendationName"
//                   placeholder="Product NameRecommended product Name "
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//                 {/* Recommended Product Image  */}
//                 <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Recommended Product Image:</span>
//                 </label>
//                 <input
//                   type="url"
//                   name="image"
//                   placeholder="Recommended Product Image "
//                   className="input input-bordered"
//                   required
//                 />
//               </div>

                
//               {/*Recommendation Title */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Recommendation Title:</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   placeholder="Query TItle"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
              
//               {/* Recommendation reason*/}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Recommendation reason:</span>
//                 </label>

//                 <textarea  className='input input-bordered' name="reason"  placeholder="Recommendation reason:" id=""></textarea>
//               </div>
//               <div className="form-control mt-6">
//                 <button type="submit" className="btn btn-primary">
//                   Add Query
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
// </div> */}
     
//     );
};

export default RecommendationForm;