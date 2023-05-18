import React from 'react';
import bannerBg from '../../assets/eduBanner.jpg';
import bannerImage from '../../assets/geography.jpg';
import bannerImage2 from '../../assets/chemistry.jpg';

import { FaLongArrowAltRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bannerBg}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,4))`,
                backgroundBlendMode: "overlay",
            }}
            className="bg-cover bg-center text-white px-4 h-[550px] flex items-center justify-center"
        >
            <div className="px-5 lg:px-0 lg:w-2/5 w-1/2 text-left">
                <h2 className="text-white text-4xl lg:text-6xl leading-tight tracking-tighter font-bold">
                    <span className="text-fuchsia-700">EDUJOY</span>TOY
                </h2>
                <p className="text-white py-7 text-xl">
                Building Blocks of Knowledge: Unleashing Potential with Our Educational Kits!
                </p>
                <button className="bg-fuchsia-700 text-white px-6 py-2 rounded-md hover:bg-fuchsia-800 text-xl">
                    Start Shopping{" "}
                    <FaLongArrowAltRight className="inline-block"></FaLongArrowAltRight>{" "}
                </button>
            </div>
            <div className='w-1/2'>
                <img className='rounded-3xl' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;