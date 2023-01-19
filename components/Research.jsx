import React from "react";
import Btn from "./Btn";
const Research = () => {
  return (
    <div className="flex items-center- justify-between pt-8">
      <div className="pl-[112px] space-y-[32px]">
        <div className="bg-[#0070AD] w-[416px] h-[400px] px-8 py-8 text-white">
          <div className="space-y-[16px] pb-[176px]">
            <div className="flex items-center gap-2 ">
              <h3 className="bg-white w-5 h-[1.5px]"></h3>
              <p className="text-[15px] leading-[23px]">
                Capgemini Research Institute
              </p>
            </div>
            <h3>
              A world in balance: Why sustainability ambition is not translating
              into action
            </h3>
          </div>

          <h3>Capgemini RESERCH INSTITUTE</h3>
        </div>
        <Btn
          text={"Read More"}
          style={
            "  hover:bg-[#00E6E3]  duration-500 hover:scale-110 hover:border-none"
          }
        />
      </div>
      <div className="relative flex justify-end pr-[36px] group">
        <div className="absolute bg-white z-10 -left-[180px] top-10 w-[416px] h-[304px] px-[32px] py-[24px] shadow-lg">
          <div className="space-y-[16px]">
            <div className="flex items-center gap-2 ">
              <h3 className="bg-black w-5 h-[1.5px]"></h3>
              <p className="text-[15px] leading-[23px]">
                Capgemini Research Institute
              </p>
            </div>
            <p className="text-[#15011d]  leading-8 text-2xl">
              Total immersion: How immersive experiences and the metaverse
              benefit customer experience and operations
            </p>
          </div>
        </div>
        <div className="overflow-hidden ">
          <picture>
            <img
              className="w-[746px] h-[400px] group-hover:scale-110  duration-500"
              src="/images/immersive.jpeg"
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Research;
