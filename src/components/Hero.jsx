import React from "react";

const Hero = ({ className }) => {
  return (
    <div
      className={
        "flex items-center flex-col gap-[40px] px-[20px] relative sm:px-[100px] border-[1px] border-[#585858] border-b-[transparent] 2xl:border-none 2xl:ml-[-30%] 2xl:min-w-[900px] 3xl:ml-[-15%] 4xl:ml-0 4xl:min-w-[1000px] 2xl:mt-[100px] 3xl:mt-[94px]  " +
        className
      }
    >
      <div className="w-[15px] h-[15px] bg-white absolute top-0 left-0"></div>
      <video
        src="/ring.mp4"
        autoPlay
        muted
        loop
        className="w-full"
        preload="auto"
        poster="/images/poster.png"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
