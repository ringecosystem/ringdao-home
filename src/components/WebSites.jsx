import React from "react";

const WebSites = ({ logo, desc, isxapi, alt, link }) => {
  return (
    <div className="relative py-[100px] px-[20px] border-[1px] border-[#585858] sm:px-[100px]">
      <div className="w-[15px] h-[15px] bg-white absolute top-0 left-0"></div>
      {!isxapi && (
        <img
          src={logo}
          alt={alt}
          className={
            alt.includes("msgport")
              ? "w-[199.93px] sm:w-[319.88px]"
              : "w-[246px] sm:w-[410px]"
          }
        />
      )}
      {isxapi && (
        <h2 className="text-[50px] leading-[60.5px] text-white font-[700]">
          XAPI
        </h2>
      )}
      {isxapi && <div className="w-[60px] h-[6px] bg-white mt-[60px]"></div>}
      <p className="text-[16px] leading-[19.2px] tracking-[1px] text-white my-[60px] font-[300] sm:text-[22px] sm:leading-[26.4px]">
        {desc}
      </p>
      <a
        href={link}
        target="_blank"
        className="border-[1px] w-fit cursor-pointer border-[#F6F6F7] flex items-center gap-[10px] p-[8px_10px_8px_15px] rounded-[100px]"
      >
        <span className="font-[300] text-[16px] leading-[25.6px] tracking-[1px] text-white">
          View Detail
        </span>
        <img
          src="/icons/arrow.svg"
          alt="arrow"
          className="w-[24px] h-[24px] "
        />
      </a>
    </div>
  );
};

export default WebSites;
