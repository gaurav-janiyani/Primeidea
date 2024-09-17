import Image from "next/image";

const HelpWealthCreation = () => {
  return (
    <section>
      <div className="py-8 max-w-[1320px] mx-auto px-2">
        <h2 className="text-3xl mb-6 font-medium">
          How we help in wealth creation?
        </h2>
        <div className="flex justify-between mx-[-15px]">
          <div className="w-1/2 px-[15px] ">
            <p className="text-xl mb-4">
              We don't just recommend the right investments; we help you take
              action and manage your portfolio. From investing to performance
              analysis and rebalancing,
            </p>
            <Image
              src="/images/financial-planning/wealth-creation.png"
              width={638}
              height={517}
              alt="Wealth Creation"
            />
          </div>
          <div className="w-1/2 px-[15px] max-h-[660px] overflow-x-hidden overflow-y-scroll">
            <ul className="">
                <li className="pl-6 ml-6 relative before:absolute before:left-0 before:top-[38px] before:w-[1px] before:h-[100%] before:bg-black before:content-[''] ">
                    <span className="font-bold text-[#479AD2] text-xl absolute left-[-5px] top-[38px] w-[30px] h-[30px] bg-[#F6FDFF]">1</span>
                    <h2 className="flex items-center text-2xl font-semibold">
                        <Image src="/images/financial-planning/icons/asset-allocation.png" width={100} height={100} alt="Asset Allocation"  className="mr-6"/>
                        <span>Asset Allocation</span>
                    </h2>
                    <p>
                        Asset allocation is the process of dividing your investments among different asset classes, like stocks, bonds, and cash, to balance risk and reward. It’s essential in financial planning, as it helps reduce risk by diversifying your portfolio and should be regularly adjusted to align with your goals and market changes.
                    </p>
                </li>
                <li className="pl-6 ml-6 relative before:absolute before:left-0 before:top-[38px] before:w-[1px] before:h-[100%] before:bg-black before:content-[''] ">
                    <span className="font-bold text-[#479AD2] text-xl absolute left-[-5px] top-[38px] w-[30px] h-[30px] bg-[#F6FDFF]">2</span>
                    <h2 className="flex items-center text-2xl font-semibold">
                        <Image src="/images/financial-planning/icons/diversify.png" width={100} height={100} alt="Diversification"  className="mr-6"/>
                        <span>Diversification</span>
                    </h2>
                    <p>
                        Asset allocation is the process of dividing your investments among different asset classes, like stocks, bonds, and cash, to balance risk and reward. It’s essential in financial planning, as it helps reduce risk by diversifying your portfolio and should be regularly adjusted to align with your goals and market changes.
                    </p>
                </li>
                <li className="pl-6 ml-6 relative before:absolute before:left-0 before:top-[38px] before:w-[1px] before:h-[100%] before:bg-black before:content-[''] ">
                    <span className="font-bold text-[#479AD2] text-xl absolute left-[-5px] top-[38px] w-[30px] h-[30px] bg-[#F6FDFF]">3</span>
                    <h2 className="flex items-center text-2xl font-semibold">
                        <Image src="/images/financial-planning/icons/goal-based-planning.png" width={100} height={100} alt="Goal Based Planning"  className="mr-6"/>
                        <span>Goal Based Planning</span>
                    </h2>
                    <p>
                        Asset allocation is the process of dividing your investments among different asset classes, like stocks, bonds, and cash, to balance risk and reward. It’s essential in financial planning, as it helps reduce risk by diversifying your portfolio and should be regularly adjusted to align with your goals and market changes.
                    </p>
                </li>
                <li className="pl-6 ml-6 relative before:absolute before:left-0 before:top-[38px] before:w-[1px] before:h-[100%] before:bg-black before:content-[''] ">
                    <span className="font-bold text-[#479AD2] text-xl absolute left-[-5px] top-[38px] w-[30px] h-[30px] bg-[#F6FDFF]">4</span>
                    <h2 className="flex items-center text-2xl font-semibold">
                        <Image src="/images/financial-planning/icons/goal-based-planning.png" width={100} height={100} alt="Portfolio Creation"  className="mr-6"/>
                        <span>Portfolio Creation</span>
                    </h2>
                    <p>
                        Asset allocation is the process of dividing your investments among different asset classes, like stocks, bonds, and cash, to balance risk and reward. It’s essential in financial planning, as it helps reduce risk by diversifying your portfolio and should be regularly adjusted to align with your goals and market changes.
                    </p>
                </li>
                <li className="pl-6 ml-6 relative">
                    <span className="font-bold text-[#479AD2] text-xl absolute left-[-5px] top-[38px] w-[30px] h-[30px] bg-[#F6FDFF]">5</span>
                    <h2 className="flex items-center text-2xl font-semibold">
                        <Image src="/images/financial-planning/icons/goal-based-planning.png" width={100} height={100} alt="Quaterly Revision"  className="mr-6"/>
                        <span>Quaterly Revision</span>
                    </h2>
                    <p>
                        Asset allocation is the process of dividing your investments among different asset classes, like stocks, bonds, and cash, to balance risk and reward. It’s essential in financial planning, as it helps reduce risk by diversifying your portfolio and should be regularly adjusted to align with your goals and market changes.
                    </p>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpWealthCreation;
