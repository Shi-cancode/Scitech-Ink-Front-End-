import ContentCard from "@/components/common/ContentCard";
import { carouselData } from "@/constants/CarouselData";
import React from "react";

const TalesSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px] pt-[70px] px-8 lg:px-[60px] xl:px-0 max-w-screen-xl mx-auto">
      {carouselData.map((item) => (
        <ContentCard
          writer={item.writer}
          createdAt={item.createdAt}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </section>
  );
};

export default TalesSection;
