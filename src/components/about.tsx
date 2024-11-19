export default function About() {
  return (
    <section className="flex flex-col gap-[40px] p-[60px] relative border-b-solid border-b-black border-b-[1px]">
      <div className="absolute bg-black w-[25px] h-[25px] top-0 left-0" />
      <h2 className="text-[50px] leading-[64px]">
        About <b>RING</b>
      </h2>
      <p className="text-[16px] leading-[26px]">
        RING is the governance token of RingDAO. It's widely used in RingDAO
        projects, such as staking for XAPI, gas for the Darwinia Network, and
        payments for Msgport. We use RING to capture value in our decentralized
        system, build decentralized governance, and unite all RING holders to
        collectively advance the entire ecosystem.
      </p>
    </section>
  );
}
