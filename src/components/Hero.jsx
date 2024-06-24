import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center flex-col gap-[40px] px-[20px] relative sm:px-[100px] border-[1px] border-[#585858] border-b-[transparent]">
      <div className="w-[15px] h-[15px] bg-white absolute top-0 left-0"></div>
      <video src="/ring.mp4" autoPlay muted loop className="w-full"></video>
    </div>
  );
};

export default Hero;
