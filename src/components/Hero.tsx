export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center gap-[40px] p-[100px_20px] sm:p-[60px] relative border-b-solid border-b-black border-b-[1px]">
      <div className="absolute bg-black w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] top-0 left-0" />
      <video
        src="/videos/hero.mp4"
        muted
        autoPlay
        loop
        className="w-[346px] h-[346px] sm:w-[300px] sm:h-[300px] lg:w-[496px] lg:h-[496px]"
      />
      <div className="flex flex-col items-center sm:items-start">
        <h2 className="text-[24px] lg:text-[30px] font-[300] leading-[30px] sm:leading-[38px]">
          Venture DAO focusing on
        </h2>
        <h1 className="text-[40px] lg:text-[60px] font-bold leading-[51px] sm:leading-[77px] mb-[20px]">
          DeFi and DAO Applications
        </h1>
        <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25.6px] text-center sm:text-left">
          RingDAO is a Venture DAO dedicated to DeFi and DAO Applications, driven by AI and Chain Abstraction Technologies. Its contributors and community form a decentralized network focused on the latest innovations in cross-chain and chain abstraction, originating from Darwinia Network.
        </p>
      </div>
    </section>
  );
}