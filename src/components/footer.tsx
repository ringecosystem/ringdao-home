export default function Footer() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-[20px] sm:gap-[40px] p-[50px_20px] sm:p-[60px] relative border-b-solid border-b-black border-b-[1px]">
      <div className="absolute bg-black w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] top-0 left-0" />
      <h2 className="text-[30px] leading-[38px] font-bold text-center sm:text-left">
        Looking forward to
        <br /> collaborating with you
      </h2>
      <div className="flex flex-col items-center sm:items-end">
        <div className="flex justify-end gap-[20px] mb-[20px] sm:mb-[10px]">
          <a
            href="https://x.com/ringecosystem"
            className="w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] block"
          >
            <img
              src="/icons/x-icon.svg"
              alt="ringdao x"
              className="w-full h-full bg-contain"
            />
          </a>
          <a
            href="https://t.me/ringecosystem"
            className="w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] block"
          >
            <img
              src="/icons/telegram-icon.svg"
              alt="ringdao telegram"
              className="w-full h-full bg-contain"
            />
          </a>
          <a
            href="https://github.com/ringecosystem/"
            className="w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] block"
          >
            <img
              src="/icons/github-icon.svg"
              alt="ringdao github"
              className="w-full h-full bg-contain"
            />
          </a>
          <a
            href="https://discord.gg/BhNbKWWfGV"
            className="w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] block"
          >
            <img
              src="/icons/discord-icon.svg"
              alt="ringdao discord"
              className="w-full h-full bg-contain"
            />
          </a>
        </div>
        <p className="text-[16px] leading-[26px]">2024 powered by RingDAO</p>
      </div>
    </section>
  );
}
