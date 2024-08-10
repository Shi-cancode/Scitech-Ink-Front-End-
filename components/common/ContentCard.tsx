import moment from "moment";
import React from "react";
import { BsDot } from "react-icons/bs";
import arrowup from "@/public/images/arrow.svg";
import Image from "next/image";

type Props = {
  writer: string;
  createdAt: Date;
  title: string;
  subtitle: string;
};
const ContentCard: React.FC<Props> = ({
  writer,
  createdAt,
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col gap-[21px]">
      {/* image container */}
      <div className="flex justify-center items-center rounded-[20px] h-[277px] bg-bg_secondary overflow-hidden"></div>
      {/* content writer */}
      <div className="flex flex-col gap-[17px] pl-[3px]">
        {/* name and date */}
        <div className="flex items-center gap-1">
          <h2 className="text-xs font-semibold leading-[15.22px]">{writer}</h2>
          <BsDot />
          <h2 className="text-xs font-semibold leading-[15.22px]">
            {moment(createdAt).format("DD MMM YYYY")}
          </h2>
        </div>
        <div className="flex items-center justify-between pr-5">
          <h2 className="text-2xl leading-[30px] font-semibold">{title}</h2>
          <Image src={arrowup} alt="arrow-right" />
        </div>
      </div>
      <p className="font-medium text-sm leading-[17.48px] text-text_black">
        {subtitle}
      </p>
    </div>
  );
};

export default ContentCard;
