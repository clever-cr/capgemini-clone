import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiGlassdoor } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-[#ECECEC] mt-[96px] sm:mt-[56px]">
      <div className="grid grid-cols-3 pl-[112px] pt-[48px] sm:px-0 sm:grid-cols-1">
        <div>
          <picture>
            <img className="sm:px-6" src="/images/logo.svg" alt="" />
          </picture>
          <div className="pt-[96px] sm:hidden">
            <p>Our Brands:</p>
            <div className="flex flex-col space-y-[24px] pt-[32px]">
              <picture>
                <img src="/images/Logo_Capgemini_Engineering.svg" alt="" />
              </picture>
              <picture>
                <img src="/images/Logo_Capgemini_Invent.svg" alt="" />
              </picture>
              <picture>
                <img src="/images/Logo_Sogeti.svg" alt="" />
              </picture>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] pt-[18px] sm:gap-[8px] sm:pt-[24px] sm:px-5">
          {[
            "Insights",
            "Industries",
            "Services",
            "Careers",
            "News",
            "About us",
            "Contact Us",
          ].map((item, index) => {
            return (
              <Link
                className="hover:text-[#0070ad]  group relative w-fit"
                href="#"
                key={index}
              >
                {item}
                <span className="absolute w-0 h-[1px] group-hover:w-full bg-[#0070ad] left-0 bottom-1 transition-all ease-in duration-300" />
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-[18px] pt-[18px] sm:gap-[8px] sm:pt-[8px] sm:px-5">
          {[
            "Investors",
            "Terms of use",
            "Accessibility",
            "Privacy notice",
            "Security vulnerability notification",
            "Cookie settings",
            "Cookie policy",
          ].map((i, index) => {
            return (
              <Link
                className="hover:text-[#0070ad] w-fit group relative hover:underline- transition hover:ease-in"
                href="#"
                key={index}
              >
                {i}{" "}
                <span className="absolute w-0 h-[1px] group-hover:w-full bg-[#0070ad] left-0 bottom-1 transition-all ease-in duration-300" />
              </Link>
            );
          })}
        </div>
        <div className="sm:pt-[32px]">
          <div className="pt-[96px] sm:pt-[25px] hidden sm:block border-t border-gray-500 sm:px-5">
            <p>Our Brands:</p>
            <div className="flex flex-col space-y-[24px] sm:space-y-[16px] pt-[32px]  sm:pt-[16px]">
              <picture>
                <img src="/images/Logo_Capgemini_Engineering.svg" alt="" />
              </picture>
              <picture>
                <img src="/images/Logo_Capgemini_Invent.svg" alt="" />
              </picture>
              <picture>
                <img src="/images/Logo_Sogeti.svg" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[112px] pt-[64px] py-[24px] sm:px-0 sm:pt-[25px]">
        <div className="flex items-center justify-between  border-t border-gray-500 pt-[33px] sm:flex-col-reverse sm:gap-[28px]">
          <p>2022 Capgemini. All rights reserved.</p>
          <div className="flex gap-[16px] flex-wrap sm:px-[75px]">
            <div className="border border-black w-10 h-10 flex flex-col hover:bg-[#01CFCE] hover:border-none justify-center items-center rounded-full  duration-300 hover:scale-110">
              <FaFacebookF className=" border-w-12" />
            </div>
            <div className="border border-black w-10 h-10 flex flex-col hover:bg-[#01CFCE] hover:border-none justify-center items-center rounded-full duration-300 hover:scale-110">
              <BsTwitter />
            </div>
            <div className="border border-black w-10 h-10 flex flex-col hover:bg-[#01CFCE] hover:border-none justify-center items-center rounded-full duration-300 hover:scale-110">
              <BsInstagram />
            </div>
            <div className="border border-black w-10 h-10 flex flex-col hover:bg-[#01CFCE] hover:border-none justify-center items-center rounded-full duration-300 hover:scale-110">
              <FaLinkedinIn />
            </div>
            <div className="border border-black w-10 h-10 flex flex-col hover:bg-[#01CFCE] hover:border-none justify-center items-center rounded-full duration-300 hover:scale-110">
              <BsYoutube />
            </div>
            <div className="border border-black w-10 h-10 flex flex-col hover:bg-[#01CFCE] hover:border-none justify-center items-center rounded-full duration-300 hover:scale-110">
              <SiGlassdoor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
