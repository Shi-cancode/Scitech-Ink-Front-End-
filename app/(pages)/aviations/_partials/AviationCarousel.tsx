import ContentCarousel from "@/components/common/ContentCarousel";
import { carouselData } from "@/constants/CarouselData";
import React from "react";

const AviationCarousel = () => {
  return (
    <div>
      <div className="mt-[70px] px-8 lg:px-[60px] xl:px-0 max-w-screen-xl mx-auto">
        <ContentCarousel items={carouselData} />
      </div>
    </div>
  );
};

export default AviationCarousel;
