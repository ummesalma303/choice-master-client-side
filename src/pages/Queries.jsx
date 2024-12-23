import axios from 'axios';
import React, { useState } from 'react';
import QueryCard from '../components/queryCard';
import { useLoaderData } from 'react-router-dom';

const Queries = () => {
    // const [queries,setQueries] = useState([])
//     axios.get('http://localhost:5000/allQueries')
//   .then(res=>setQueries(res.data))
//   console.log(queries)
const queries = useLoaderData()
    return (
        <div>
            {/* <h2>All Queries</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {
          queries?.map(query => <QueryCard key={query?._id} query={query}></QueryCard>)
         }
        </div>
        </div>
    );
};

export default Queries;