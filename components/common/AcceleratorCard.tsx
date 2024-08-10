import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { cn } from "@/utils/tw-merge";
import { FaArrowRight } from "react-icons/fa6";


const AcceleratorCard = ({ variant }: { variant: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-[46px] py-[55px] px-8 md:px-10 rounded-xl",
        variant === "primary" ? "bg-[#858585]" : "bg-[#ABABAB]"
      )}
    >
      <div className="flex flex-col gap-[22px]">
        <h2 className="font-normal text-[22px] leading-[27px] text-white">
          Lorem
        </h2>
        <h2 className="font-semibold text-3xl md:text-[36px] leading-[45px] text-white max-w-[197px]">
          Accelerate your digital arts
        </h2>
      </div>
      <Button
        className={cn(
          "flex relative items-center gap-[7px] w-fit h-[66px] py-2 rounded-full",
          variant === "primary" ? "bg-white" : "bg-[#252525]"
        )}
      >
        <h2
          className={cn(
            "text-lg font-semibold leading-[22px]",
            variant === "primary" ? "text-[#252525]" : "text-[#FFFFFF]"
          )}
        >
          Lorem ipsum
        </h2>
        <div
          className={cn(
            "w-9 h-9 rounded-full flex items-center justify-center",
            variant === "primary" ? "bg-[#252525]" : "bg-white"
          )}
        >
          <FaArrowRight className={cn(
              "-rotate-45",
              variant === "primary" ? "text-white" : "text-[#252525]"
            )} />
          
        </div>
      </Button>
    </div>
  );
};

export default AcceleratorCard;
