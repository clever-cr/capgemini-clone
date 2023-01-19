import React from "react";
import Inside from "./Inside";

const Stories = () => {
  return (
    <div className="px-[112px]">
      <h3 className="text-[32px] leading-[40px] text-primary">
        Inside Stories
      </h3>
      <div className="flex gap-[24px]">
        <Inside
          img={"/images/meeting.jpeg"}
          style={"w-[856px] h-[481px]"}
          header={"Environment"}
          title={"Turning ambition into action"}
          description={"Embedding net zero targets at Capgemini UK"}
        />
        <div className="flex flex-col gap-y-[32px]">
          <Inside
            img={"/images/waste.jpeg"}
            style={"w-[416px] h-[ 234px]"}
            header={"Environment"}
            title={"Value from waste"}
            description={
              "How our teams created an app to boost plastic waste recycling in South East Asia"
            }
          />
          <Inside
            img={"/images/sustaining.jpeg"}
            style={"w-[416px] h-[ 234px]"}
            header={"Environment"}
            title={"Sustaining a national wonder with AI"}
            description={"Using AI to protect the Mojave Desert"}
          />
        </div>
      </div>
    </div>
  );
};

export default Stories;
