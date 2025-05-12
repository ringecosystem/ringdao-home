export default function Partner() {
  return (
    <>
      <div
        id="partner"
        className="p-[50px_20px] sm:p-[60px] relative border-b-solid border-b-black border-b-[1px]"
      >
        <div className="absolute bg-black w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] top-0 left-0" />
        <h2 className="text-[50px] leading-[64px] font-bold">Partner</h2>
      </div>
      <div className="sm:flex sm:h-[630px] lg:h-[600px] border-b-solid border-b-[1px] border-b-black">
        <div className="flex-grow flex flex-col self-stretch flex-shrink-0 sm:w-[50%] border-b-solid border-b-[1px] sm:border-b-0 border-b-black border-r-0 sm:border-r-[1px] border-r-black border-r-solid p-[100px_20px] sm:p-[60px]">
          <div className="h-[120px] flex items-center mb-[40px]">
            <img
              src="/images/ktondao.svg"
              alt="ktondao"
              className="w-[200px] h-[90px] object-contain object-left"
            />
          </div>
          <h3 className="text-[30px] leading-[38px] mb-[10px] font-bold">
            KtonDAO
          </h3>
          <p className="text-[16px] leading-[25px] mb-[20px]">
            The DAO governed by KTON tokens.
          </p>
          <div className="mt-auto flex justify-end">
            <a
              href="https://gov.ktondao.xyz"
              target="_blank"
              className="cs-buttonHover text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
            >
              View Detail
              <span className="block w-[24px] h-[24px] rounded-full border-black border-[1px] border-solid leading-[22px] text-center">
                {">"}
              </span>
            </a>
          </div>
        </div>
        <div className="flex-grow flex flex-col flex-shrink-0 sm:w-[50%] p-[100px_20px] sm:p-[60px]">
          <div className="h-[120px] flex items-center mb-[40px]">
            <img
              src="/images/rcg.svg"
              alt="rcg"
              className="w-[300px] h-[120px] object-contain object-left"
            />
          </div>
          <h3 className="text-[30px] leading-[38px] mb-[10px] font-bold">
            RCG
          </h3>
          <p className="text-[16px] leading-[25px] mb-[20px]">
            The RingDAO Community Guild welcomes you to our active community.
          </p>
          <div className="mt-auto flex justify-end">
            <a
              href="https://guild-gov.ringdao.com"
              target="_blank"
              className="cs-buttonHover text-[16px] flex justify-center items-center gap-[10px] w-fit leading-[42px] pl-[15px] pr-[10px] h-[42px] rounded-[21px] border-[1px] border-solid border-black"
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