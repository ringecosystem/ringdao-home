import data from "../data/header.json";

export default function Header() {
  return (
    <section className="flex items-center justify-between p-[20px] sm:p-[60px] border-b-[1px] border-b-solid border-b-black">
      <img
        src="/images/logo.svg"
        alt="Ring DAO"
        className="w-[86px] h-[20px] s:w-[129px] sm:h-[30px] object-contain"
      />
      <div className="hidden sm:flex items-center gap-[40px] text-[14px]">
        {data.menu.map((item: any, index: number) => (
          <a key={item.name + item.url + "menu"} href={item.url}>
            <p>{item.name}</p>
          </a>
        ))}
        <button className="bg-black text-white h-[38px] rounded-[19px] px-[15px]">
          Submit Proposals
        </button>
      </div>
      <div className="flex sm:hidden flex-col gap-[3px]">
        <div className="w-[17px] h-[3px] bg-black" />
        <div className="w-[17px] h-[3px] bg-black" />
        <div className="w-[17px] h-[3px] bg-black" />
      </div>
    </section>
  );
}
