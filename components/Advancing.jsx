import React from "react";
import Btn from "./Btn";

const Advancing = () => {
  return (
    <div className="relative flex justify-end px-[99px] pt-[90px] group">
      <div className="absolute bg-white z-10 left-16 bottom-8 w-[864px] h-[279px] px-[32px] py-[24px] shadow-lg">
        <div className="space-y-[16px]">
          <h3 className="text-[#15011d] text-2xl leading-8">
            Advancing through headwinds
          </h3>
          <p className="text-[#15011d] text-base leading-6">
            Where are organizations investing in 2023?
          </p>
        </div>
        <div className="flex justify-end pt-[117px]">
          <Btn
            text={"Read More"}
            style={"  hover:bg-[#00E6E3]  duration-500 group-hover:scale-110"}
          />
        </div>
      </div>
      <div className="overflow-hidden ">
        <picture>
          <img
            className="w-[549px] h-[349px] group-hover:scale-110  duration-500"
            src="/images/banner.jpeg"
            alt=""
          />
        </picture>
      </div>
    </div>
  );
};

export default Advancing;
