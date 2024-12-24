import React from 'react';
import logo1 from '../assets/Brand-logo/logo-1.jpg'
import logo2 from '../assets/Brand-logo/logo-2.png'
import logo3 from '../assets/Brand-logo/logo-3.png'
import logo4 from '../assets/Brand-logo/logo-4.png'
import { Fade } from "react-awesome-reveal";

const LogoSec = () => {
    return (
        <div className='w-11/12 mx-auto my-14 '>
            {/* <h2>Logo Section</h2> */}
            <div className=" *:w-60 *:h-48 *:border-2 *:border-[#0000003d] *:rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-9">
            <Fade>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
            </Fade>
            </div>
        </div>
    );
};

export default LogoSec;