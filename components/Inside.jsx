import React from "react";

const Inside = ({ img, header, title, description, style }) => {
  return (
    <div className="sm:px-5 ">
      <div className="space-y-[18px]  ">
        <div className="overflow-hidden">
          <picture>
            <img
              className={`hover:scale-110 duration-500 rounded-md ${style}`}
              src={img}
              alt=""
            />
          </picture>
        </div>
        <div className="sm:px-5 sm:bg-white sm:shadow-xl sm:space-y-[8px] pb-3">
          <div className="flex items-center gap-2 ">
            <h3 className="bg-black w-5 h-[1.5px]"></h3>
            <p className="text-base leading-6 text-primary sm:text-sm">
              {header}
            </p>
          </div>
          <h3 className="text-[24px] leading-8 text-primary sm:text-lg sm:leading-6">
            {title}
          </h3>
          <p className="text-base leading-6 text-primary max-w-md">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inside;
