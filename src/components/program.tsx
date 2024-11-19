export default function Program() {
  return (
    <>
      <div className="p-[60px] relative border-b-solid border-b-black border-b-[1px]">
        <div className="absolute bg-black w-[25px] h-[25px] top-0 left-0" />
        <h2 className="text-[50px] leading-[64px] font-bold">Programs</h2>
      </div>
      <div className="flex gap-[60px] border-b-solid border-b-[1px] border-b-black p-[60px]">
        <video
          src="/videos/program1.mp4"
          autoPlay
          muted
          loop
          className="w-[436px] h-[436px]"
        />
        <div className="flex flex-col gap-[20px] justify-center">
          <h2 className="text-[30px] leading-[38px] font-[600]">
            Decentralized Governance
          </h2>
          <p className="text-[16px] leading-[26px]">
            We believe that transparency and decentralization are key to the
            success of RingDAO. Therefore, all decisions and actions will be
            made by the community. We have integrated with Tally to manage all
            proposals and the voting process. Anyone can submit a proposal and
            vote on it.
          </p>
          <a
            href="/"
            className="text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
          >
            Proposal or Vote
            <span className="block w-[24px] h-[24px] rounded-full border-black border-[1px] border-solid leading-[22px] text-center">
              {">"}
            </span>
          </a>
        </div>
      </div>
      <div className="flex gap-[60px] border-b-solid border-b-[1px] border-b-black p-[60px]">
        <div className="flex flex-col gap-[20px] justify-center">
          <h2 className="text-[30px] leading-[38px] font-[600]">Bug Bounty </h2>
          <p className="text-[16px] leading-[26px]">
            Cross-chain space is complex and vulnerable to hacking. We take
            security very seriously. In addition to regular security audits, we
            have integrated with Immunefi and rely on external security
            researchers to find vulnerabilities in our system and keep it and
            our assets safe.
          </p>
          <a
            href="/"
            className="text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
          >
            View Immunefi
            <span className="block w-[24px] h-[24px] rounded-full border-black border-[1px] border-solid leading-[22px] text-center">
              {">"}
            </span>
          </a>
        </div>
        <video
          src="/videos/program2.mp4"
          autoPlay
          muted
          loop
          className="w-[436px] h-[436px]"
        />
      </div>
      <div className="flex gap-[60px] border-b-solid border-b-[1px] border-b-black p-[60px]">
        <video
          src="/videos/program3.mp4"
          autoPlay
          muted
          loop
          className="w-[436px] h-[436px]"
        />
        <div className="flex flex-col gap-[20px] justify-center">
          <h2 className="text-[30px] leading-[38px] font-[600]">Grant</h2>
          <p className="text-[16px] leading-[26px]">
            We strongly believe that open-source collaboration creates the best
            software. Therefore, we have launched a grant program to provide
            funding support for researching, designing, and developing
            innovations and tools that can help the RingDAO ecosystem grow.
          </p>
          <a
            href="/"
            className="text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
          >
            Apply Now
            <span className="block w-[24px] h-[24px] rounded-full border-black border-[1px] border-solid leading-[22px] text-center">
              {">"}
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
