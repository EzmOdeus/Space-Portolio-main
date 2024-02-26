import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex  flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className=" absolute top-0 brightness-50  h-full w-full left-0 z-[-1] object-cover "
      >
        <source src="/sung-jin-woo-darkness-solo-leveling-moewalls-com.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
