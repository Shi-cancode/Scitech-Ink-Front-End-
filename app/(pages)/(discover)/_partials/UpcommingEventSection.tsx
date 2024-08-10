import { UpcomingEventData } from "@/constants/UpcomingEventData";
import React from "react";
import HomeCard from "./HomeCard";

const UpcommingEventSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px] pt-[70px] px-8 max-w-screen-xl mx-auto">
      {UpcomingEventData.map((item, idx) => (
        <HomeCard key={idx} item={item} />
      ))}
    </section>
  );
};

export default UpcommingEventSection;
