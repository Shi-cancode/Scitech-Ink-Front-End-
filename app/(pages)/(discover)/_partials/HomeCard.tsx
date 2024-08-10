import React from "react";

import moment from "moment";
import { Button } from "@/components/ui/Button";
import { CiLocationOn } from "react-icons/ci";
import { FiCalendar } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";

type Props = {
  item: UpcommingEventType;
};
const HomeCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col gap-[9px] bg-[#D9D9D9]/30 rounded-xl overflow-hidden">
      {/* image container */}
      <div className="h-[231px] bg-[#585757]"></div>
      {/* content container */}
      <div className="px-[15px] pb-[15px] flex flex-col gap-[22px]">
        <div className="flex flex-col gap-3.5">
          <h2 className="font-semibold text-2xl leading-[30px]">
            {item.title}
          </h2>
          <div className="flex items-center gap-1">
            <CiLocationOn width={19} height={19} className="text-text" />
            <h2 className="text-text text-xs leading-[15px] font-bold">
              {item.venue}
            </h2>
          </div>
          <div className="flex items-center gap-1">
            <FiCalendar width={19} height={19} className="text-text" />
            <h2 className="text-text text-xs leading-[15px] font-bold">
              {moment(item.date, "DD/MM/YYYY").format("DD /MM/ YYYY")}
            </h2>
          </div>
          <div className="flex items-center gap-1">
            <FaRegClock width={19} height={19} className="text-text" />
            <h2 className="text-text text-xs leading-[15px] font-bold">
              {moment(item.date, "DD/MM/YYYY HH:mm").format("h:mm A")}
            </h2>
          </div>
        </div>
        <Button className="bg-secondary text-xs font-bold leading-[15px] text-white">
          View details
        </Button>
      </div>
    </div>
  );
};

export default HomeCard;
