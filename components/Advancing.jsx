import React from "react";
import Btn from "./Btn";

const Advancing = () => {
  return (
    <div className="relative flex justify-end px-[99px] sm:px-0 pt-[90px] group sm:mb-24">
      <div className="absolute bg-white z-10 left-16 sm:left-8 bottom-8 sm:-bottom-32 w-[864px]  sm:w-[440px]  h-[279px] px-[32px] py-[24px] shadow-lg">
        <div className="space-y-[16px]">
          <h3 className="text-[#15011d] text-2xl leading-8">
            Advancing through headwinds
          </h3>
          <p className="text-[#15011d] text-base leading-6">
            Where are organizations investing in 2023?
          </p>
        </div>
        <div className="flex justify-end pt-[117px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 hidden sm:block`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>

          <Btn
            text={"Read More"}
            style={
              " sm:hidden hover:bg-[#00E6E3]  duration-500 group-hover:scale-110"
            }
          />
        </div>
      </div>
      <div className="overflow-hidden ">
        <picture>
          <img
            className="w-[549px] h-[349px] sm:w-[459px] sm:h-[343px] group-hover:scale-110  duration-500"
            src="/images/banner.jpeg"
            alt=""
          />
        </picture>
      </div>
    </div>
  );
};

export default Advancing;
