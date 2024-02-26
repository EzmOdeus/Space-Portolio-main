import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    const times = new Date()
    const year= times.getFullYear()
  return (
      <div className="w-full h-full shadow-[#2A0E61]/50 bg-[#03001425]  text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          
            <div className="mb-[20px] text-[15px] text-center">
                  &copy; E-SEYAM -{year}
            </div>
        </div>
    </div>
  )
}

export default Footer