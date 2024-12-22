// import React from 'react';
// import Navbar from '../components/Navbar';
import RecentQueries from '../components/RecentQueries';
import Slider from '../components/Slider';

const Home = () => {
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