import React from "react";

const Footer = () => {
  return (
    <footer className="px-[20px] py-[100px] relative sm:px-[100px] border-[1px] border-[#585858]">
      <div className="w-[15px] h-[15px] bg-white absolute top-0 left-0"></div>
      <p className="text-[16px] leading-[19.2px] text-white font-[300] sm:text-[14px] sm:leading-[22.4px] sm:font-[400] tracking-[1px] ">
        RingDAO is a DAO implemented through the Tally platform. RING serves as
        the governance token for RingDAO, and the upgrades to Darwinia Chain
        will be governed by RingDAO. RING also functions as the Gas Token for
        Darwinia Chain and plays a role in Collator Staking, among other
        aspects. RingDAO also governs other projects, including Msgport and
        SubAPI.
      </p>
      <div className="flex items-center gap-[20px] my-[30px] sm:my-[40px]">
        <img src="/icons/X.svg" alt="X" className="sm:w-[48px] sm:h-[48px]" />
        <img
          src="/icons/Telegram.svg"
          alt="Telegram"
          className="sm:w-[48px] sm:h-[48px]"
        />
        <img
          src="/icons/Github.svg"
          alt="Github"
          className="sm:w-[48px] sm:h-[48px]"
        />
      </div>
      <p className="font-[300] text-[16px] leading-[19.2px] tracking-[1px] text-white">
        2024 powered by RingDAO
      </p>
    </footer>
  );
};

export default Footer;
