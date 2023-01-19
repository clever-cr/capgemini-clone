import React from "react";

const Btn = ({ text, style }) => {
  return (
    <div>
      {" "}
      <button
        className={`flex items-center w-[237px] h-[48px]  rounded-full px-[17px] justify-between border border-[#15011d] bg-white ${style}`}
      >
        <p className="text-[#15011d]">{text}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Btn;
