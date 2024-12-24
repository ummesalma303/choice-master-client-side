import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QueryCard from '../components/queryCard';
import { useLoaderData } from 'react-router-dom';

const Queries = () => {
    const [queries,setQueries] = useState([])
    const [search,setSearch]= useState('')
    const [column,setColumn]= useState(3)
    useEffect(()=>{
    axios.get(`http://localhost:5000/allQueries?search=${search}`)
  .then(res=>setQueries(res.data))
  console.log(queries)
    },[search])
// console.log(search)
// const queries = useLoaderData()
const changeColumns=(num)=>{
    setColumn(num)
}
    return (
        <div className='max-w-7xl mx-auto '>
            {/* <h2>All Queries</h2> */}
            <div className=" mx-auto flex justify-center mt-8 space-x-3">
            <input onChange={(e)=> setSearch(e.target.value)} value={search} type="text" placeholder="Search Here....." className="input input-bordered w-full max-w-xs"  />
            {/* <button type='submit' className='btn btn-accent text-white'>Search</button> */}
            </div>

            <div className=" space-x-3">
                <button className='btn btn-accent' onClick={()=>changeColumns(3)}> column 3 </button>
                <button className='btn btn-accent'  onClick={()=>changeColumns(2)}> column 2 </button>
                <button className='btn btn-accent'  onClick={()=>changeColumns(1)}> column 1 </button>
            </div>


            <div className={`grid grid-cols-1 md:grid-cols-2 ${column === 3 &&"lg:grid-cols-3"} ${column === 2 &&"lg:grid-cols-2"} ${column === 1 &&"lg:grid-cols-1"}`}>
        {
          queries?.map(query => <QueryCard key={query?._id} query={query}></QueryCard>)
         }
        </div>
        </div>
    );
};

export default Queries;