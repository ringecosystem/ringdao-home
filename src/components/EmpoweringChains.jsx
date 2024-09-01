import React from "react";
import useWidth from "../hooks/useWidth";

const EmpoweringChains = () => {
  return (
    <div className="px-[20px] relative pb-[50px] sm:px-[100px] border-[1px] border-[#585858] border-t-[transparent] 3xl:p-[100px]">
      <div className="hidden 2xl:block w-[15px] h-[15px] bg-white absolute top-0 left-0"></div>
      <h3 className="font-[300] text-[40px] leading-[50.72px] text-white sm:leading-[90px] 3xl:text-[60px]">
        EMPOWERING CHAINS TO COMMUNICATE
        <span className="font-[700] text-[40px] leading-[50.72px] text-white italic block sm:leading-[90px] 3xl:text-[60px]">
          POWERING ABSTRACTION TO INNOVATE
        </span>
      </h3>
      <div className="flex items-center justify-center my-[40px] sm:justify-start">
        <div className="w-[60px] h-[6px] bg-white"></div>
      </div>
      <p className="font-[300] tracking-[1px] leading-[20.29px] text-[16px] text-white opacity-50 sm:text-[20px] sm:leading-[25.36px]">
        Governed by all the RING token holders, this decentralized entity
        directs the Darwinia chain, Msgport protocol, and XAPI's oracle service
      </p>
    </div>
  );
};

export default EmpoweringChains;
