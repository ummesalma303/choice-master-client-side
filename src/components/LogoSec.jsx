import React from 'react';
import logo1 from '../assets/Brand-logo/logo-1.jpg'
import logo2 from '../assets/Brand-logo/logo-2.png'
import logo3 from '../assets/Brand-logo/logo-3.png'
import logo4 from '../assets/Brand-logo/logo-4.png'
import { Fade, Slide } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
const LogoSec = () => {
    return (
        <div className=' my-14 '>
            {/* <h2>Logo Section</h2> */}
            <Marquee  speed={100} className="space-x-10">
            <div className=" *:w-60 *:h-48 *:border-2 *:border-[#0000003d] *:rounded-md grid grid-cols-6 justify-items-center gap-9">
                <img src={logo1} alt="" />
                <img src={logo4} alt="" />
                <img src={logo2} alt="" />
                <img src={logo1} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                {/* alignment */}
            </div>
            </Marquee>
        </div>
    );
};

export default LogoSec;