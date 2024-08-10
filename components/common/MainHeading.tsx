import React from "react";
import quotes from "@/public/images/textQ.svg";
import Image from "next/image";

type Props = {
  heading: string;
  title: string;
  subTitle: string;
};
const MainHeading: React.FC<Props> = ({ heading, title, subTitle }) => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-8 px-8">
        <div className="flex items-center justify-center flex-col gap-4">
          <h2 className="text-lg leading-[22.68px] font-semibold text-text_black">
            {title}
          </h2>
          <div className="relative flex items-center justify-center w-fit">
            <h2 className="relative font-semibold text-2xl sm:text-3xl md:text-[46px] leading-[58px] text-text_black text-center">
              {heading}
              <Image
                src={quotes}
                className="absolute -top-3 -right-7 md:-right-9"
                alt=""
                width={31.64}
              />
            </h2>
          </div>
        </div>
        <h2 className="font-medium text-lg leading-[22px] text-text text-center">
          {subTitle}
        </h2>
      </div>
    </div>
  );
};

export default MainHeading;
