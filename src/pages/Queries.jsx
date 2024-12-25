import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QueryCard from '../components/queryCard';
import { useLoaderData } from 'react-router-dom';

const Queries = () => {
    const [queries,setQueries] = useState([])
    const [search,setSearch]= useState('')
    const [column,setColumn]= useState(3)
    useEffect(()=>{
    axios.get(`https://b10a11-server-side-ummesalma303.vercel.app/allQueries?search=${search}`)
  .then(res=>setQueries(res.data))
  console.log(queries)
    },[search])
// console.log(search)
// const queries = useLoaderData()
const changeColumns=(num)=>{
    setColumn(num)
}
    return (
        <div className='w-11/12 mx-auto my-14'>
           

           <div className="flex flex-wrap items-center">
             <div className="">
                
             <h2 className='text-3xl  font-semibold text-center md:text-left'>All Queries</h2>
             </div>

             <div className=" mx-auto  space-x-3 ">
            <input onChange={(e)=> setSearch(e.target.value)} value={search} type="text" placeholder="Search Here....." className="input input-bordered w-full max-w-xs"  />
            {/* <button type='submit' className='btn btn-accent text-white'>Search</button> */}
            </div>
            {/* <h2>Queries</h2> */}
           <div className="*:text-white space-x-3 text-center md:text-left">
                <button className='btn btn-accent' onClick={()=>changeColumns(3)}> column 3 </button>
                <button className='btn btn-accent'  onClick={()=>changeColumns(2)}> column 2 </button>
                <button className='btn btn-accent'  onClick={()=>changeColumns(1)}> column 1 </button>
            </div>
           </div>

                      <div className={`grid grid-cols-1 md:grid-cols-2 ${column === 3 &&"lg:grid-cols-3"} ${column === 2 &&"lg:grid-cols-2"} ${column === 1 &&"lg:grid-cols-1"}`}>

{/* 
            <div className={`grid gap-6 mt-6 lg:grid-cols-3 md:grid-cols-2 ${column === 3 ? 'grid-cols-3 ' : column === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}> */}
        {
          queries?.map(query => <QueryCard key={query?._id} query={query}></QueryCard>)
         }
        </div>
        </div>
    );
};

export default Queries;