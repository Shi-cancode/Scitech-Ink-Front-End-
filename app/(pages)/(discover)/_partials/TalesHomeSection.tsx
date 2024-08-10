import MainHeading from "@/components/common/MainHeading";
import React from "react";
import TalesCarousel from "./TalesCarousel";

const TalesHomeSection = () => {
  return (
    <div>
      <MainHeading
        title="Tales"
        subTitle="The latest stories in industries, technology and  resources"
        heading="Narrating Stories for You"
      />
      <TalesCarousel/>
    </div>
  );
};

export default TalesHomeSection;
