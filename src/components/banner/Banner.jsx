import React from 'react';
import bannerImg from '../../assets/banner-main.png'
const Banner = () => {
  return (
    <div className="background mt-8 flex justify-center items-center space-y-4 text-center flex-col">
      <img src={bannerImg} alt="" />
      <h2 className="font-bold text-4xl text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <p className="font-medium text-2xl text-[#FFFFFF]">
        Beyond Boundaries Beyond Limits
      </p>
      <button className="banner-btn ">
        <span className="text-[#131313] font-bold">Claim Free Credit</span>
      </button>
    </div>
  );
};

export default Banner;