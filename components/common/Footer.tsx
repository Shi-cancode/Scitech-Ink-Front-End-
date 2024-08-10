import React from "react";
import Image from "next/image";

import { Button } from "../ui/Button";
import logo from "@/public/logo.svg";
import footerLogo from "@/public/images/footerLogo.svg"

const Footer = () => {
  return (
    <section className="flex flex-col py-5 max-w-screen-2xl">
      <div className="w-full px-[32px]">
        {/* upper footer */}
        <div className="bg-[#F2F2F2] rounded-[20px] px-8 md:px-[36px] flex flex-col md:flex-row">
          <div className=" py-7 md:py-[47px] flex flex-col gap-[46px] w-full md:w-1/2">
            <Image
              src={logo}
              alt="logo"
              width={91}
              height={35}
              className="object-cover"
            />
            <div className="flex flex-col">
              <h2 className=" text-2xl md:text-[30px] font-semibold text-text_black leading-[37px] w-full md:max-w-[402px]">
                How SciTech Work ghjihk lorem ipsum
              </h2>
            </div>
            <div className="flex flex-col">
              <Button className="!p-0  h-[59px] !px-[30px] bg-secondary text-white w-fit rounded-full">
                Lorem Ipsum
              </Button>
            </div>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="flex flex-col justify-between p-5 md:p-0 md:px-9 md:py-[35px] sm:border-l-2 sm:border-l-[#E9E9E9]">
              <div className="flex flex-col gap-[18px]">
                <h2 className="font-semibold text-sm leading-[17px] text-text">
                  Lorem
                </h2>
                <h2 className="font-semibold text-lg text-text_black">
                  Marketplace
                </h2>
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-sm leading-[17px] text-text">
                  PRIVACY POLICY
                </h2>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 md:p-0 md:px-9 md:py-[35px] sm:border-l-2 sm:border-l-[#E9E9E9]">
              <div className="flex flex-col gap-[18px]">
                <h2 className="font-semibold text-sm leading-[17px] text-text">
                  Lorem
                </h2>
                <h2 className="font-semibold text-lg text-text_black">
                  Marketplace
                </h2>
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-sm leading-[17px] text-text">
                  PRIVACY POLICY
                </h2>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 md:p-0 md:px-9 md:py-[35px] sm:border-l-2 sm:border-l-[#E9E9E9]">
              <div className="flex flex-col gap-[18px]">
                <h2 className="font-semibold text-sm leading-[17px] text-text">
                  Lorem
                </h2>
                <h2 className="font-semibold text-lg text-text_black">
                  Marketplace
                </h2>
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-sm leading-[17px] text-text">
                  PRIVACY POLICY
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        <Image src={footerLogo} alt="logoImage" className="w-full"/>
      </div>
    </section>
  );
};

export default Footer;
