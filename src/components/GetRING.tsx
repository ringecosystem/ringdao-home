export default function GetRING() {
    return (
      <>
        <div
          id="get-ring"
          className="p-[50px_20px] sm:p-[60px] relative border-b-solid border-b-black border-b-[1px]"
        >
          <div className="absolute bg-black w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] top-0 left-0" />
          <h2 className="text-[50px] leading-[64px] font-bold">Get RING</h2>
        </div>
        <div className="sm:flex gap-[60px] border-b-solid border-b-[1px] border-b-black p-[60px]">
          <div className="flex flex-coljustify-center">
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
                href="https://www.tally.xyz/gov/ringdao"
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
      </>
    );
  }
  