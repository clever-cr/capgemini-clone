import React from "react";
import Btn from "./Btn";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { VscCircleFilled } from "react-icons/vsc";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
const Report = () => {
  return (
    <div className="relative">
      <div className="flex pt-[128px] sm:pt-[84px] sm:flex-col-reverse ">
        <div className="bg-[#2B0A3D] flex-1 text-white pl-[112px] space-y-[32px] sm:space-y-[8px] pt-[48px] sm:px-[30px] sm:pb-[19px]">
          <h3 className="text-[32px] leading-[40px] sm:text-2xl sm:leading-[32px]">
            Integrated Annual Report 2021
          </h3>
          <p className="text-2xl leading-8 max-w-lg sm:max-w-sm sm:text-lg sm:leading-6">
            Discover a year of innovation, sustainability, diverse talent, and
            more
          </p>
          <div className="pt-[131px] group">
            <Btn
              style={
                "bg-[#2B0A3D] text-white border-white  group-hover:bg-[#00E6E3]  duration-300 group-hover:scale-110 group-hover:border-none "
              }
              style2={"text-white group-hover:text-[#2B0A3D]"}
              style3={"group-hover:text-[#2B0A3D]"}
              text={"Read Our report"}
            />
          </div>
        </div>
        <div className="flex-1">
          <picture>
            <img src="/images/AR2022.jpeg" alt="" />
          </picture>
        </div>
      </div>

      <div
        className="w-[299px] h-[80px] sm:w-[200px] sm:h-[55px] rounded-full flex justify-center items-center bg-white absolute bottom-4 left-[650px] sm:left-32 sm:top-[370px]
      "
      >
        <IoIosArrowBack />

        <RiCheckboxBlankCircleFill />
        <RiCheckboxBlankCircleLine />
        <RiCheckboxBlankCircleLine />
        <RiCheckboxBlankCircleLine />
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Report;
