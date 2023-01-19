import React from "react";

const Insights = () => {
  return (
    <div className="pt-[120px]">
      <h3 className="text-[32px] leading-[40px] text-[#15011d]  pb-[32px] pl-[112px]">
        Latest insights
      </h3>
      <div className="flex relative ">
        <div className="overflow-hidden ml-2">
          <picture>
            <img
              className="w-[1158px] h-[384px]  hover:scale-110 duration-500 "
              src="/images/open.jpeg"
              alt=""
            />
          </picture>
        </div>
        <div className="bg-white absolute space-y-3 right-24 w-[526px] h-[304px] pt-[32px] px-[32px] pb-[202px] top-[48px] shadow-2xl">
          <div className="flex items-center gap-2 ">
            <h3 className="bg-black w-5 h-[1.5px]"></h3>
            <p className="text-[15px] leading-[23px]">Report</p>
          </div>
          <h3 className="text-2xl leading-[32px] text-[#15011d]">
            Open data maturity report 2022
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Insights;
