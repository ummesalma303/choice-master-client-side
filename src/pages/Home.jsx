// import React from 'react';
// import Navbar from '../components/Navbar';
import axios from 'axios'
import RecentQueries from '../components/RecentQueries';
import Slider from '../components/Slider';
import { useLoaderData } from 'react-router-dom';
import LogoSec from '../components/LogoSec';
import CommunitySec from '../components/CommunitySec';

const Home = () => {
    const queries = useLoaderData()
   
    return (
        <div>
           <Slider></Slider>
           {/* Recent Queries section */}
           <div className="w-11/12 mx-auto my-14">
           <RecentQueries queries={queries}></RecentQueries>
           </div>
           {/* logos */}
           <LogoSec></LogoSec>
           {/* community sec */}
           <CommunitySec></CommunitySec>
        </div>
    );
};

export default Home;