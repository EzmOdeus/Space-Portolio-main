"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row text-center h-[100vh] items-center justify-center md:px-20 max-md:py-12 px-6 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[6px] border border-[#4245f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#9ba8ff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Front-End Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-center font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
           Hi I&apos;m
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              {" "}
              E-Seyam{" "}
            </span>
           Web Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Front-End  Developer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
      
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full max-md:hidden h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
