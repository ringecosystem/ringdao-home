import { useState } from "react";
import data from "../data/header.json";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <section className="flex items-center justify-between p-[20px] sm:p-[60px] border-b-[1px] border-b-solid border-b-black">
      <img
        src="/images/logo.svg"
        alt="Ring DAO"
        className="w-[86px] h-[20px] s:w-[129px] sm:h-[30px] object-contain"
      />
      <div className="hidden sm:flex items-center sm:gap-[20px] lg:gap-[40px] text-[14px]">
        {data.menu.map((item: any, index: number) => (
          <a key={item.name + item.url + "menu"} href={item.url}>
            <p>{item.name}</p>
          </a>
        ))}
        <button
          onClick={() =>
            window.open("https://gov.ringdao.com", "_blank")
          }
          className="bg-black text-white h-[38px] rounded-[19px] px-[15px]"
        >
          Submit Proposals
        </button>
      </div>
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="flex sm:hidden flex-col gap-[3px]"
      >
        <div className="w-[17px] h-[3px] bg-black" />
        <div className="w-[17px] h-[3px] bg-black" />
        <div className="w-[17px] h-[3px] bg-black" />
      </div>
      <div
        className={`fixed sm:hidden top-[62px] right-0 h-[calc(100vh-61px)] w-[100vw] py-[20px] flex flex-col items-center gap-[20px] bg-white z-[1000] duration-500 ${
          showMenu ? "translate-x-0" : "translate-x-[100vw]"
        }`}
      >
        <div className="flex flex-grow flex-col items-center justify-center gap-[68px]">
          {data.menu.map((item: any, index: number) => (
            <a key={item.name + item.url + "menu"} href={item.url}>
              <p className="text-[16px] leading-[26px] font-[600]">
                {item.name}
              </p>
            </a>
          ))}
          <button
            onClick={() =>
              window.open("https://gov.ringdao.com", "_blank")
            }
            className="bg-black text-white h-[38px] rounded-[19px] px-[15px]"
          >
            Submit Proposals
          </button>
        </div>
        <div className="flex justify-end gap-[20px] mb-[20px] flex-shrink-0">
          <a
            href="https://x.com/ringecosystem"
            className="w-[30px] h-[30px] block bg-[url('/icons/x.svg')] bg-center bg-no-repeat bg-contain"
          />
          <a
            href="https://t.me/ringecosystem"
            className="w-[30px] h-[30px] block bg-[url('/icons/telegram.svg')] bg-center bg-no-repeat bg-contain"
          />
          <a
            href="https://github.com/ringecosystem/"
            className="w-[30px] h-[30px] block bg-[url('/icons/github.svg')] bg-center bg-no-repeat bg-contain"
          />
          <a
            href="https://discord.gg/BhNbKWWfGV"
            className="w-[30px] h-[30px] block bg-[url('/icons/discord.svg')] bg-center bg-no-repeat bg-contain"
          />
        </div>
      </div>
    </section>
  );
}