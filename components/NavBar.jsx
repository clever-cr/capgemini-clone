import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./button";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const whenIsScrolled = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", whenIsScrolled);
  });
  //   useEffect(() => {
  //     document.addEventListener("click", MenuOpen);
  //   });
  return (
    <div className="group- relative">
      <div
        className={`absolute- z-10 w-full px-[48px] sm:px-3  sm:pt-2 group-hover:bg-white space-y-[10px] fixed ${
          isScrolled
            ? "bg-white pt-[32px] duration-500 sm:bg-transparent-"
            : "duration-500"
        }`}
      >
        {!isScrolled && (
          <div className="flex justify-end  pt-[18px] group-hover:text-black space-x-[24px] text-white sm:hidden">
            {["Contact Us", "Investors", "Global|EN"].map((item, index) => {
              return (
                <Link href="#" key={index}>
                  {item}
                </Link>
              );
            })}
          </div>
        )}
        <div className="flex  justify-between items-center- ">
          {!isScrolled ? (
            <picture>
              <img src="/images/logowhite.svg" alt="logo" />
            </picture>
          ) : (
            <picture>
              <img src="/images/logo.svg" alt="" />
            </picture>
          )}
          <div className=" text-white flex space-x-[24px]- gap-x-[24px] sm:hidden group-hover:text-black pb-[32px] items-center-">
            {["Insights", "Industries", "Services", "Careers", "News"].map(
              (item, index) => {
                return (
                  <Link
                    href="#"
                    key={index}
                    className={`${isScrolled ? "text-black" : "text-white"}`}
                  >
                    {item}
                  </Link>
                );
              }
            )}
          </div>
          <div
            className={`flex gap-x-[24px] sm:gap-x-[10px] items-center- group-hover:text-black ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <p className="sm:hidden">Search</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            {!isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-8 h-8 hidden sm:block border-l pl-[10px] hover:cursor-pointer"
                onClick={MenuOpen}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:cursor-pointer"
                onClick={MenuOpen}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-[#F2F2F2] absolute- z-10 w-full fixed top-[59px] hidden h-[720px] sm:block pr-5 space-y-3 pt-5 ">
          <div className="">
            {[
              "insights",
              "Industries",
              "Services",
              "Careers",
              "News",
              "About us",
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pl-5 py-5 pb-2 hover:bg-[#15011d] group"
                >
                  <Link className="group-hover:text-white" href={"#"}>
                    {item}
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
          <Button text={"Investors"} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
