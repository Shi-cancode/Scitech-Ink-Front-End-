"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaBars, FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";

import Logo from "@/public/logo.svg";
import { Button } from "./ui/Button";
import { cn } from "@/utils/tw-merge";

const navLinks = [
  {
    name: "Discover",
    link: "/",
  },
  {
    name: "Aviations",
    link: "/aviations",
  },
  {
    name: "Tales",
    link: "/tales",
  },
  {
    name: "Artworks",
    link: "/",
  },
];
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();
  console.log(pathname);
  // opening and closing the sidebar
  const handleSidebarOpenClose = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <nav className="relative flex flex-col py-[14px] px-10 z-50">
      {/* nav content */}
      <div className="flex items-center justify-between">
        <div className=" flex justify-between w-full lg:w-[55%]">
          {/* navlinks */}
          <div className=" hidden lg:flex items-end justify-between gap-[60px]">
            {navLinks.map((navlink, idx) => (
              <Link
                key={idx}
                href={navlink.link}
                className="text-text_black font-semibold text-base leading-[20.16px]"
              >
                {navlink.name}
              </Link>
            ))}
          </div>
          {/* logo */}
          <div className="flex items-center justify-center">
            <Image src={Logo} alt="image" className="object-cover" />
          </div>
        </div>
        {/* join button */}
        <div className="flex items-center justify-center gap-4">
          <Button variant={"outline"} className="px-[34px] py-[10px]">
            <Link href={"#"}>Join</Link>
          </Button>
          <Button
            variant={"outline"}
            className="block lg:hidden"
            onClick={handleSidebarOpenClose}
          >
            <FaBars fontSize={16} />
          </Button>
        </div>
      </div>
      
      {/* back button */}
      <div className="flex items-center justify-center w-fit">
        <Button variant={"ghost"} className="flex items-center gap-2 !px-0">
          <FaArrowLeft fontSize={16}/>
          <Link href={"#"}>Back</Link>
        </Button>
      </div>

      <div
        onClick={() => setSidebarOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/70 backdrop-blur-[2px] transition-colors duration-300 lg:hidden",
          sidebarOpen ? "block" : "hidden"
        )}
      ></div>
      {/* sidebar contents */}
      <div
        className={cn(
          "flex flex-col lg:hidden fixed inset-x-0 top-0 rounded-b-xl h-fit bg-white p-5  transition-all duration-300",
          sidebarOpen ? "top-0" : "-top-[100%]"
        )}
      >
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center justify-center">
            <Image src={Logo} alt="image" className="object-cover" />
          </div>
          <Button
            variant={"outline"}
            className="block lg:hidden"
            onClick={handleSidebarOpenClose}
          >
            <FaXmark fontSize={16} />
          </Button>
        </div>
        <div className="lg:hidden flex flex-col justify-between gap-[10px] mt-5">
          {navLinks.map((navlink, idx) => (
            <Link
              key={idx}
              href={navlink.link}
              className="text-text_black font-semibold text-base leading-[20.16px]"
            >
              {navlink.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
