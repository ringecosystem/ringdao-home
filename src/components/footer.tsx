export default function Footer() {
  return (
    <section className="flex items-center justify-between gap-[40px] p-[60px] relative border-b-solid border-b-black border-b-[1px]">
      <div className="absolute bg-black w-[25px] h-[25px] top-0 left-0" />
      <h2 className="text-[30px] leading-[38px] font-bold">
        Looking forward to
        <br /> collaborating with you
      </h2>
      <div className="flex flex-col items-end">
        <div className="flex justify-end gap-[20px] mb-[10px]">
          <a
            href="/"
            className="w-[48px] h-[48px] block bg-[url('/icons/x.svg')] bg-center bg-no-repeat bg-contain"
          />
          <a
            href="/"
            className="w-[48px] h-[48px] block bg-[url('/icons/telegram.svg')] bg-center bg-no-repeat bg-contain"
          />
          <a
            href="/"
            className="w-[48px] h-[48px] block bg-[url('/icons/github.svg')] bg-center bg-no-repeat bg-contain"
          />
          <a
            href="/"
            className="w-[48px] h-[48px] block bg-[url('/icons/discord.svg')] bg-center bg-no-repeat bg-contain"
          />
        </div>
        <p className="text-[16px] leading-[26px]">2024 powered by RingDAO</p>
      </div>
    </section>
  );
}
