import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QueryCard from '../components/queryCard';
import { useLoaderData } from 'react-router-dom';

const Queries = () => {
    const [queries,setQueries] = useState([])
    const [search,setSearch]= useState('')
    useEffect(()=>{
    axios.get(`http://localhost:5000/allQueries?search=${search}`)
  .then(res=>setQueries(res.data))
  console.log(queries)
    },[search])
// console.log(search)
// const queries = useLoaderData()
    return (
        <div className='max-w-7xl mx-auto '>
            {/* <h2>All Queries</h2> */}
            <div className=" mx-auto flex justify-center mt-8 space-x-3">
            <input onChange={(e)=> setSearch(e.target.value)} value={search} type="text" placeholder="Search Here....." className="input input-bordered w-full max-w-xs"  />
            {/* <button type='submit' className='btn btn-accent text-white'>Search</button> */}
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {
          queries?.map(query => <QueryCard key={query?._id} query={query}></QueryCard>)
         }
        </div>
        </div>
    );
};

export default Queries;