export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-[40px] p-[50px_20px] sm:p-[60px] relative border-b-solid border-b-black border-b-[1px]"
    >
      <div className="absolute bg-black w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] top-0 left-0" />
      <h2 className="text-[50px] leading-[64px] text-center sm:text-left font-bold sm:font-normal">
        About <b>RING</b>
      </h2>
      <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-center sm:text-left">
        RING is the governance token of RingDAO. It's widely used in RingDAO
        projects, such as staking for XAPI, gas for the Darwinia Network, and
        payments for Msgport. We use RING to capture value in our decentralized
        system, build decentralized governance, and unite all RING holders to
        collectively advance the entire ecosystem.
      </p>
    </section>
  );
}
