import MainHeading from "@/components/common/MainHeading";
import React from "react";
import TalesCarousel from "./TalesCarousel";

const TalesHomeSection = () => {
  return (
    <section>
      <MainHeading
        title="Tales"
        subTitle="The latest stories in industries, technology and  resources"
        heading="Narrating Stories for You"
      />
      <TalesCarousel/>
    </section>
  );
};

export default TalesHomeSection;
