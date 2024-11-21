export default function Project() {
  return (
    <>
      <div
        id="project"
        className="p-[50px_20px] sm:p-[60px] relative border-b-solid border-b-black border-b-[1px]"
      >
        <div className="absolute bg-black w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] top-0 left-0" />
        <h2 className="text-[50px] leading-[64px] font-bold">Project</h2>
      </div>
      <div className="sm:flex border-b-solid border-b-[1px] border-b-black">
        <div className="flex-grow flex-shrink-0 sm:w-[50%] border-b-solid border-b-[1px] sm:border-b-0 border-b-black border-r-0 sm:border-r-[1px] border-r-black border-r-solid p-[100px_20px] sm:p-[60px] h-full self-stretch">
          <div className="py-[15px] mb-[40px]">
            <img
              src="/images/darwinia.svg"
              alt="darwinia"
              className="w-[200px] h-[90px] object-contain"
            />
          </div>
          <h3 className="text-[30px] leading-[38px] mb-[10px] font-bold">
            Darwinia Chain
          </h3>
          <p className="text-[16px] leading-[25px] mb-[124px]">
            One of the earliest parachains in the Polkadot ecosystem, offering
            out-of-the-box cross-chain capabilities to exchange messages with
            other parachains and external Ethereum-compatible chains.
          </p>
          <div className="mt-auto flex justify-end">
            <a
              href="https://darwinia.network/"
              target="_blank"
              className="text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
            >
              View Detail
              <span className="block w-[24px] h-[24px] rounded-full border-black border-[1px] border-solid leading-[22px] text-center">
                {">"}
              </span>
            </a>
          </div>
        </div>
        <div className="flex-grow flex-shrink-0 sm:w-[50%] p-[100px_20px] sm:p-[60px] self-stretch">
          <div className="py-[15px] mb-[40px]">
            <img
              src="/images/paralink.svg"
              alt="paralink"
              className="w-[200px] h-[90px] object-contain"
            />
          </div>
          <h3 className="text-[30px] leading-[38px] mb-[10px] font-bold">
            ParaLink
          </h3>
          <p className="text-[16px] leading-[25px] mb-[74px]">
            A cross-chain asset exchange hub built on the Polkadot XCM
            (Cross-Consensus Messaging) technology stack. It serves users of
            parachains in the Polkadot ecosystem, automatically supporting all
            parachains and assets within the ecosystem. It also provides a
            user-friendly interface to optimize user workflow.
          </p>
          <div className="mt-auto flex justify-end">
            <a
              href="https://para.link/"
              target="_blank"
              className="text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
            >
              View Detail
              <span className="block w-[24px] h-[24px] rounded-full border-black border-[1px] border-solid leading-[22px] text-center">
                {">"}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="sm:flex border-b-solid border-b-[1px] border-b-black">
        <div className="flex-grow flex-shrink-0 sm:w-[50%] border-b-solid border-b-[1px] sm:border-b-0 border-b-black border-r-0 sm:border-r-[1px] border-r-black border-r-solid p-[100px_20px] sm:p-[60px] h-full">
          <div className="py-[15px] mb-[40px]">
            <img
              src="/images/msgport.svg"
              alt="msgport"
              className="w-[200px] h-[90px] object-contain"
            />
          </div>
          <h3 className="text-[30px] leading-[38px] mb-[10px] font-bold">
            Msgport
          </h3>
          <p className="text-[16px] leading-[25px] mb-[74px]">
            A message sending and receiving protocol designed by RingDAO to
            enable arbitrary message exchange between applications running on
            different EVM-compatible chains.
          </p>
          <div className="mt-auto flex justify-end">
            <a
              href="https://msgport.ringdao.com/"
              target="_blank"
              className="text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
            >
              View Detail
              <span className="block w-[24px] h-[24px] rounded-full border-black border-[1px] border-solid leading-[22px] text-center">
                {">"}
              </span>
            </a>
          </div>
        </div>
        <div className="flex-grow flex-shrink-0 sm:w-[50%] p-[100px_20px] sm:p-[60px] h-full">
          <div className="py-[15px] mb-[40px]">
            <img
              src="/images/xapi.svg"
              alt="xapi"
              className="w-[200px] h-[90px] object-contain"
            />
          </div>
          <h3 className="text-[30px] leading-[38px] mb-[10px] font-bold">
            XAPI
          </h3>
          <p className="text-[16px] leading-[25px] mb-[74px]">
            It is a decentralized, permissionless, and programmable oracle
            platform that communicates with target chains via secure chain
            signatures, ensuring reliable and verifiable data transmission.
          </p>
          <div className="mt-auto flex justify-end">
            <a
              href="https://github.com/ringecosystem/xapi-contracts"
              target="_blank"
              className="text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
            >
              View Detail
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
