import React from "react";
import Btn from "./Btn";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { VscCircleFilled } from "react-icons/vsc";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
const Client = () => {
  return (
    <div className="pt-[91px] space-y-6">
      <h3 className="text-[32px] leading-[40px] text-[#15011d] px-[112px] sm:px-5 sm:text-2xl sm:leading-8">
        Recent client stories
      </h3>
      <div className="">
        <div className="bg-[url('/images/image002.png')] sm:bg-none py-28 object-cover w-full flex items-end gap-x-6 sm:flex-col relative">
          <div>
            <img
              className="hidden sm:block"
              src="/images/image002.png"
              alt="img"
            />
          </div>
          <div className=" bg-white ml-36  -mb-40  w-[663px] sm:w-[400px] h-[352px]- px-[32px] py-[24px] shadow-lg">
            <div className="space-y-[16px]">
              <h3 className="text-[#15011d] text-2xl leading-8">
                Harnessing the power of AI to combat River Blindness
              </h3>
              <p className="text-[#15011d] text-base leading-6">
                Capgemini partners with the University Hospital Bonn to bring an
                end to River Blindness. As part of this effort, they launch the
                fifth Global Data Science Challenge focused on developing an AI
                solution to help with diagnosis and the development of new
                treatments for the disease
              </p>
            </div>
            <div className="flex- justify-end pt-[117px] ">
              <Btn
                text={"Read More"}
                style={
                  "  hover:bg-[#00E6E3]  duration-500 group-hover:scale-110"
                }
              />
            </div>
          </div>
          <div
            className="w-[299px] h-[80px] rounded-full flex justify-center items-center bg-white -mb-24 sm:mb-0 sm:absolute sm:top-[345px] shadow-lg sm:right-20
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
      </div>
    </div>
  );
};

export default Client;
