import React from "react";
import { carouselData } from "@/constants/CarouselData";
import ContentCarousel from "@/components/common/ContentCarousel";

const TalesCarousel = () => {

  return (
    <div className="px-[65px] mt-[70px]">
      <ContentCarousel
        items={carouselData}
      />
    </div>
  );
};

export default TalesCarousel;
