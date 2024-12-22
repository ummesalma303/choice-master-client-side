// import React from 'react';
// import Navbar from '../components/Navbar';
import axios from 'axios'
import RecentQueries from '../components/RecentQueries';
import Slider from '../components/Slider';

const Home = () => {
    axios.get('http://localhost:5000/homeQueries')
    .then(res=>console.log(res.data))
    return (
        <div>
           <Slider></Slider>
           {/* Recent Queries section */}
           <div className="w-11/12 mx-auto my-14">
           <RecentQueries></RecentQueries>
           </div>
        </div>
    );
};

export default Home;