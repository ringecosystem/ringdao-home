export default function Collaboration() {
  return (
    <>
      <div
        id="collaboration"
        className="p-[50px_20px] sm:p-[60px] relative border-b-solid border-b-black border-b-[1px]"
      >
        <div className="absolute bg-black w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] top-0 left-0" />
        <h2 className="text-[50px] leading-[64px] font-bold">Collaboration</h2>
      </div>
      <div className="sm:flex gap-[60px] border-b-solid border-b-[1px] border-b-black p-[60px]">
        <video
          src="/videos/program1.mp4"
          autoPlay
          muted
          loop
          className="w-[300px] h-[300px] lg:w-[436px] lg:h-[436px]"
        />
        <div className="flex flex-col gap-[20px] justify-center">
          <h2 className="text-[30px] leading-[38px] font-[600]">
            Decentralized Governance
          </h2>
          <p className="text-[16px] leading-[26px]">
          Transparency and decentralization are fundamental to RingDAO's success. 
          All decisions and actions are governed by RING token holders.
          To ensure open governance, we have integrated GitHub for forum discussions and 
          OpenZeppelin's Governor contract to manage proposals and on-chain voting. 
          RING token holders can submit proposals and participate in voting, shaping the future of the ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px]">
            <a
              href="https://github.com/orgs/ringecosystem/discussions"
              target="_blank"
              className="cs-buttonHover text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
            >
              Forum Discussion
              <span className="block w-[24px] h-[24px] rounded-full border-black border-[1px] border-solid leading-[22px] text-center">
                {">"}
              </span>
            </a>
            <a
              href="https://gov.ringdao.com"
              target="_blank"
              className="cs-buttonHover text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
            >
              Proposal or Vote
              <span className="block w-[24px] h-[24px] rounded-full border-black border-[1px] border-solid leading-[22px] text-center">
                {">"}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row  gap-[60px] border-b-solid border-b-[1px] border-b-black p-[60px]">
        <div className="flex flex-col gap-[20px] justify-center">
          <h2 className="text-[30px] leading-[38px] font-[600]">Ecosystem Workgroup</h2>
          <p className="text-[16px] leading-[26px]">
          We strongly believe that collaboration drives the best applications for 
          communities. To support this vision, the Ecosystem Workgroup (WG) is 
          committed to efficiently allocating resources and fostering collaboration. 
          Governed by RingDAO, it sponsors projects in two key categories: Grants and Service Providers.
          </p>
          <a
            href="https://github.com/ringecosystem/collaboration"
            target="_blank"
            className="cs-buttonHover text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
          >
            Apply Now
            <span className="block w-[24px] h-[24px] rounded-full border-black border-[1px] border-solid leading-[22px] text-center">
              {">"}
            </span>
          </a>
        </div>
        <video
          src="/videos/program3.mp4"
          autoPlay
          muted
          loop
          className="w-[300px] h-[300px] lg:w-[436px] lg:h-[436px]"
        />
      </div>
      <div className="sm:flex gap-[60px] border-b-solid border-b-[1px] border-b-black p-[60px]">
        <video
          src="/videos/program2.mp4"
          autoPlay
          muted
          loop
          className="w-[300px] h-[300px] lg:w-[436px] lg:h-[436px]"
        />
        <div className="flex flex-col gap-[20px] justify-center">
          <h2 className="text-[30px] leading-[38px] font-[600]">Bug Bounty </h2>
          <p className="text-[16px] leading-[26px]">
            Web3 space is complex and vulnerable to hacking. We take
            security very seriously. In addition to regular security audits, we
            have integrated with Immunefi and rely on external security
            researchers to find vulnerabilities in our system and keep it and
            our assets safe.
          </p>
          <a
            href="https://immunefi.com/bug-bounty/ringdao/information/"
            target="_blank"
            className="cs-buttonHover text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
          >
            View Immunefi
            <span className="block w-[24px] h-[24px] rounded-full border-black border-[1px] border-solid leading-[22px] text-center">
              {">"}
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
