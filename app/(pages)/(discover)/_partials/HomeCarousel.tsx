"use client";

import React from "react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/Carousel";

import Autoplay from "embla-carousel-autoplay";
import { contentType } from "@/types/carouselContent";
import moment from "moment";
import { cn } from "@/utils/tw-merge";

type ContentCarouselProps = {
  items: contentType[];
};

const HomeCarousel = ({ items }: ContentCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="w-full gap-[30px]">
          {items.slice(0, 4).map((item, index) => (
            <CarouselItem
              key={index}
              className="bg-bg_black h-[409px] w-[90%] rounded-[40px] p-8 md:p-[60px]"
            >
              <div className="w-full h-full flex flex-col justify-end">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-[18px] items-center">
                    <h2 className="text-sm font-medium leading-[17.4px] text-white">
                      {item.writer}
                    </h2>
                    <h2 className="text-sm font-medium leading-[17.4px] text-white">
                      {moment(item.createdAt).format("DD MMM YYYY")}
                    </h2>
                  </div>
                  <h2 className="font-semibold text-2xl md:text-[34px] md:leading-[42.82px] text-white">
                    {item.title}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
