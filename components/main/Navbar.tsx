import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
   
    <div className="md:w-[100px] text-center w-[70px] h-[45%] top-40 fixed right-3 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 pb-3 rounded-2xl flex flex-col items-center justify-between m-auto ">
        <div className=" md:w-[350px] w-[300px] h-full flex flex-col items-center justify-between ">
          <div className="flex flex-col items-center justify-between w-[25%] h-full border border-[#7042f861] bg-[#0300145e] mb-[15px] py-[20px]  p-[5px] rounded-2xl text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 max-md:flex-col ">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
    
  );
};

export default Navbar;
