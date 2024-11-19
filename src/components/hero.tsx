export default function Hero() {
  return (
    <section className="flex items-center justify-center gap-[40px] p-[60px] relative border-b-solid border-b-black border-b-[1px]">
      <div className="absolute bg-black w-[25px] h-[25px] top-0 left-0" />
      <video
        src="/videos/hero.mp4"
        muted
        autoPlay
        loop
        className="w-[496px] h-[496px]"
      />
      <div className="flex flex-col">
        <h2 className="text-[30px] font-[300] leading-[38px]">
          Empowering Chains to
        </h2>
        <h1 className="text-[60px] font-bold  leading-[77px] mb-[20px]">
          Communicate
        </h1>
        <p className="text-[16px] leading-[25.6px]">
          RingDAO is a decentralized community focused on the latest innovations
          in the cross-chain field within the web3 world. Our mission is to
          empower existing and future applications to interact seamlessly with
          multiple blockchain networks.
        </p>
      </div>
    </section>
  );
}
