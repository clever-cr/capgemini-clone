import React from "react";
import Btn from "./Btn";

const News = () => {
  const data = [
    {
      header: "Corporate news",
      title:
        "Capgemini reinforces its focus on global industries and sustainability services with top leadership appointments",
      date: "10 Jan 2023",
    },
    {
      header: "Corporate news",
      title:
        "Capgemini reinforces its focus on global industries and sustainability services with top leadership appointments",
      date: "10 Jan 2023",
    },
    {
      header: "Corporate news",
      title:
        "Capgemini reinforces its focus on global industries and sustainability services with top leadership appointments",
      date: "10 Jan 2023",
    },
  ];
  return (
    <div className="pt-[112px] pb-[36px]">
      <div>
        <h3 className="text-[32px] leading-[40px] text-primary px-[112px] sm:px-2 sm:text-2xl sm:leading-8 ">
          Latest news
        </h3>
        <div className="flex  gap-x-[88px] pt-[56px] sm:flex-col px-6 sm:pt-[24px]">
          <div>
            <div className="space-y-[8px] pl-[144px] sm:pl-0 sm:border-b sm:pb-[17px]">
              <div className="flex items-center gap-2 ">
                <h3 className="bg-black w-5 h-[1.5px]"></h3>
                <p className="text-base leading-[23px] text-primary">Reports</p>
              </div>
              <h3 className="text-2xl leading-[32px] text-primary max-w-xs sm:max-w-lg sm:text-lg sm:leading-6">
                Where are organizations investing in 2023? Supply chains and
                tech are top of the list
              </h3>
              <p className="text-base leading-6 text-primary max-w-lg sm:hidden">
                According to a new report by the Capgemini Research Institute,
                in the face of economic headwinds, organizations are taking a
                cautious approach to investment. Disruption in the supply chain
                is seen as the top risk to business growth for 89% of
                organizations, ahead of rising raw material prices and the
                energy crisis. Supply chain resilience is a key priority with
                43% of businesses planning to increase investment here, while
                39% intend to increase investment in technology to reduce costs
                and drive business transformation. Sustainability will be
                prioritized by organizations in the US and China, less so in
                Europe.
              </p>
              <p className="text-sm leading-6">16 Jan 2023</p>
            </div>
            <div className="pt-[35px] pl-[112px] sm:hidden">
              <Btn
                style={
                  "hover:bg-[#00E6E3]  duration-500 hover:scale-110 hover:border-none"
                }
                text={"See all news"}
              />
            </div>
          </div>

          <div className="space-y-[8px] sm:pt-[8px]">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="space-y-[8px] pr-[112px] sm:pr-0 border-b pb-[17px]"
                >
                  <div className="flex items-center gap-2 ">
                    <h3 className="bg-black w-5 h-[1.5px]"></h3>
                    <p className="text-base leading-6 text-primary">
                      {item.header}
                    </p>
                  </div>
                  <h3 className="text-2xl leading-8 text-primary sm:text-lg sm:leading-6 sm:max-w-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-primary">{item.date}</p>
                </div>
              );
            })}
          </div>
          <div className="pt-[35px] pl-[112px] hidden sm:block">
            <Btn
              style={
                "hover:bg-[#00E6E3]  duration-500 hover:scale-110 hover:border-none"
              }
              text={"See all news"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
