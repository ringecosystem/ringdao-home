import { useState } from "preact/hooks";
import React from "react";
import menuData from "../data/menu.json";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (index) => {
    if (openMenu === index) {
      setOpenMenu(null); // Close the menu if it's already open
    } else {
      setOpenMenu(index);
    }
  };
  return (
    <header className="flex items-center justify-between px-[20px] py-[23px] border-[1px] border-[#585858] w-full relative sm:px-[100px] sm:py-[102px]">
      <img
        src="/images/logo.png"
        alt="Ring Logo"
        className="w-[86.07px] h-[20px] sm:w-[128px] sm:h-[29.63px]"
      />
      <nav className="hidden sm:flex items-center gap-[40px]">
        {menuData.menu.map((menu, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => handleMenuClick(index)}
              className="text-white font-[600] tracking-[1px] text-[16px] leading-[25.6px] flex items-center gap-[5px]"
            >
              <span>{menu.name}</span>
              <img src="/icons/Rectangle.svg" alt="Rectangle" />
            </button>
            {openMenu === index && (
              <div className="absolute top-full right-0 mt-[19px] z-30 bg-[#00000081] min-w-[375px] border-[1px] border-[#606364] p-[20px] ">
                <ul>
                  {menu.lists.map((item, idx) => (
                    <li>
                      <a
                        target="_blank"
                        href={item.link}
                        className={
                          "text-[12px] leading-[19.2px] tracking-[1px] text-white " +
                          (idx === 0
                            ? "opacity-50 font-[300]"
                            : "opacity-100 font-[600]")
                        }
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>
      <button
        className="bg-[url('/icons/hamburger.svg')] bg-cover w-[17.11px] h-[14px] sm:hidden"
        onClick={() => {
          setMenu(!menu);
        }}
      ></button>

      <nav
        className={
          "sm:hidden absolute top-[60px] left-0 w-full transition-transform duration-500 bg-black z-30 " +
          (menu ? "translate-x-0" : "translate-x-[100%]")
        }
      >
        <ul className="flex flex-col gap-[20px] p-[20px] border-b-[1px] border-b-[#585858]">
          <li>
            <a
              href="#"
              className="text-[12px] leading-[19.2px] tracking-[1px] font-[300] opacity-50 text-white"
            >
              Developers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-[600] text-[16px] leading-[25.6px] tracking-[1px]"
            >
              Darwinia Guide
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-[600] text-[16px] leading-[25.6px] tracking-[1px]"
            >
              Msgport Guide
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="text-white font-[600] text-[16px] leading-[25.6px] tracking-[1px]"
            >
              Bug Bounty
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-[20px] p-[20px] border-b-[1px] border-b-[#585858]">
          <li>
            <a
              href="#"
              className="text-[12px] leading-[19.2px] tracking-[1px] font-[300] opacity-50 text-white"
            >
              Community
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-[600] text-[16px] leading-[25.6px] tracking-[1px]"
            >
              Discussion
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-[600] text-[16px] leading-[25.6px] tracking-[1px]"
            >
              RFP
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-[20px] p-[20px] border-b-[1px] border-b-[#585858]">
          <li>
            <a
              href="#"
              className="text-[12px] leading-[19.2px] tracking-[1px] font-[300] opacity-50 text-white"
            >
              Vote
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-[600] text-[16px] leading-[25.6px] tracking-[1px]"
            >
              Vote
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
