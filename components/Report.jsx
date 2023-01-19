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
      <div className="flex pt-[128px] ">
        <div className="bg-[#2B0A3D] flex-1 text-white pl-[112px] space-y-[32px] pt-[48px]">
          <h3 className="text-[32px] leading-[40px]">
            Integrated Annual Report 2021
          </h3>
          <p className="text-2xl leading-8 max-w-lg">
            Discover a year of innovation, sustainability, diverse talent, and
            more
          </p>
          <div className="pt-[131px]">
            <Btn text={"Read Our report"} />
          </div>
        </div>
        <div className="flex-1">
          <picture>
            <img src="/images/AR2022.jpeg" alt="" />
          </picture>
        </div>
      </div>

      <div
        className="w-[299px] h-[80px] rounded-full flex justify-center items-center bg-white absolute bottom-4 left-[650px]
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
