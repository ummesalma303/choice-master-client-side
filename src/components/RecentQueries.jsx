import axios from 'axios';
import React, { useState } from 'react';
import QueryCard from './queryCard';
// import queryCard from './QueryCard';
import { Fade } from "react-awesome-reveal";

const RecentQueries = ({queries}) => {
  // console.log(queries)
  // const [queries,setQueries] = useState([])
  // axios.get('')
  // .then(res=>setQueries(res.data))
  // .catch(err=>console.log(err))
  // console.log()
    return (
        <div className=''>
          <h2 className='text-3xl font-semibold dark:text-white mb-10 '>Recent Queries</h2>
       <Fade>
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9">
        {
          queries?.map(query => <QueryCard key={query?._id} query={query}></QueryCard>)
         }
        </div>
       </Fade>
        </div>
    );
};

export default RecentQueries;