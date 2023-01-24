import React from "react";

const Hero = () => {
  return (
    <div className="sm:pb-60">
      <video
        className=""
        src="/video/davos.mp4"
        alt=""
        autoPlay
        loop
        muted
        // controls-
      />
      <div className="px-[89px] w-[800px] h-[400px] absolute z-1 top-[400px] sm:top-[200px] sm:px-0 sm:left-4 sm:right-5 sm:w-[459px] sm:h-[256px] ">
        <div className="bg-[#0370AD] px-[32px] py-[102px] shadow-md rounded-md text-white flex flex-col space-y-[26px]">
          <h3 className="text-[48px] leading-[48px] hover:text-[#15011d] sm:text-[32px] sm:leading-[40px]">
            FUTURE | IMPACT
          </h3>
          <p className="text-base leading-[24px]">Join us in Davos</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
