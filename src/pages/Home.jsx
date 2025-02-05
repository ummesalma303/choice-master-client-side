// import React from 'react';
// import Navbar from '../components/Navbar';
import axios from 'axios'
import RecentQueries from '../components/RecentQueries';
import Slider from '../components/Slider';
import { useLoaderData } from 'react-router-dom';
import LogoSec from '../components/LogoSec';
import CommunitySec from '../components/CommunitySec';
import ContactSec from '../components/ContactSec';
import Banner from '../components/Banner';

const Home = () => {
    const queries = useLoaderData()
   
    return (
        <div>
          <Banner></Banner>
             {/* logos */}
             <LogoSec></LogoSec>
           {/* Recent Queries section */}
           <div className="w-11/12 mx-auto my-14">
           <RecentQueries queries={queries}></RecentQueries>
           </div>
         
           {/* community sec */}
           <ContactSec></ContactSec>
        </div>
    );
};

export default Home;