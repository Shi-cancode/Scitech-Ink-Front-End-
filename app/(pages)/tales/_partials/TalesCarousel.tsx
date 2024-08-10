import React from "react";
import { carouselData } from "@/constants/CarouselData";
import ContentCarousel from "@/components/common/ContentCarousel";

const TalesCarousel = () => {

  return (
    <div className="mt-[70px] px-8 lg:px-[60px] xl:px-0 max-w-screen-xl mx-auto">
      <ContentCarousel
        items={carouselData}
      />
    </div>
  );
};

export default TalesCarousel;
