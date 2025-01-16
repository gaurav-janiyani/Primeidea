import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const HelpWealthCreation = () => {
  return (
    <section>
      <div className="py-8 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
        <h2 className="text-2xl xl:text-3xl mb-6 font-medium">
          <FadeUpOneByOneAnimation>
            How we help in Financial Planning?
            </FadeUpOneByOneAnimation>
        </h2>
        <div className="flex justify-between flex-col md:flex-row mx-[-15px]">
          <div className="w-full md:w-1/2 px-[15px] mb-6 md:mb-0">
            <FadeUpOneByOneAnimation className="text-lg xl:text-xl mb-4 text-[#171717]">
                We don&apos;t just recommend the right investments; we help you take
                action and manage your portfolio. From investing to performance
                analysis and rebalancing,
            </FadeUpOneByOneAnimation>
            <Image
              src="/images/financial-planning/wealth-creation.png"
              width={638}
              height={517}
              alt="Financial Planning"
            />
          </div>
          <div className="w-full md:w-1/2 px-[15px] md:max-h-[660px] md:overflow-x-hidden md:overflow-y-scroll">
            <ul >
                <li className="pl-6 ml-2 sm:ml-6 relative before:absolute before:left-0 before:top-[38px] before:w-[1px] before:h-[100%] before:bg-black before:content-[''] ">
                      <span className="font-bold text-[#479AD2] text-xl absolute left-[-5px] top-[38px] w-[30px] h-[30px] bg-[#F6FDFF]">1</span>
                      <h2 className="flex items-center text-[20px] xl:text-2xl font-semibold">
                        <FadeUpOneByOneAnimation>
                          <Image src="/images/financial-planning/icons/asset-allocation.png" width={100} height={100} alt="Asset Allocation"  className="mr-4 xl:mr-6 w-[90px] xl:w-[100px]"/>
                        </FadeUpOneByOneAnimation >
                        <FadeUpOneByOneAnimation>
                          <span>Asset Allocation</span>
                        </FadeUpOneByOneAnimation>
                      </h2>
                      <FadeUpOneByOneAnimation>
                          Asset allocation is the process of dividing your investments among different asset classes, like stocks, bonds, and cash, to balance risk and reward. It&apos;s essential in financial planning, as it helps reduce risk by diversifying your portfolio and should be regularly adjusted to align with your goals and market changes.
                      </FadeUpOneByOneAnimation>
                </li>
                <li className="pl-6 ml-2 sm:ml-6 relative before:absolute before:left-0 before:top-[38px] before:w-[1px] before:h-[100%] before:bg-black before:content-[''] ">
                    <span className="font-bold text-[#479AD2] text-xl absolute left-[-5px] top-[38px] w-[30px] h-[30px] bg-[#F6FDFF]">2</span>
                    <h2 className="flex items-center text-[20px] xl:text-2xl font-semibold">
                      <FadeUpOneByOneAnimation>
                        <Image src="/images/financial-planning/icons/diversify.png" width={100} height={100} alt="Diversification"  className="mr-4 xl:mr-6 w-[90px] xl:w-[100px]"/>
                      </FadeUpOneByOneAnimation>
                      <FadeUpOneByOneAnimation>
                        <span>Diversification</span>
                      </FadeUpOneByOneAnimation>
                    </h2>
                    <FadeUpOneByOneAnimation>
                      <p>
                          Asset allocation is the process of dividing your investments among different asset classes, like stocks, bonds, and cash, to balance risk and reward. It’s essential in financial planning, as it helps reduce risk by diversifying your portfolio and should be regularly adjusted to align with your goals and market changes.
                      </p>
                    </FadeUpOneByOneAnimation>
                </li>
                <li className="pl-6 ml-2 sm:ml-6 relative before:absolute before:left-0 before:top-[38px] before:w-[1px] before:h-[100%] before:bg-black before:content-[''] ">
                    <span className="font-bold text-[#479AD2] text-xl absolute left-[-5px] top-[38px] w-[30px] h-[30px] bg-[#F6FDFF]">3</span>
                    <h2 className="flex items-center text-[20px] xl:text-2xl font-semibold">
                      <FadeUpOneByOneAnimation> 
                        <Image src="/images/financial-planning/icons/goal-based-planning.png" width={100} height={100} alt="Goal Based Planning"  className="mr-4 xl:mr-6 w-[90px] xl:w-[100px]"/>
                      </FadeUpOneByOneAnimation> 
                      <FadeUpOneByOneAnimation> 
                        <span>Goal Based Planning</span>
                      </FadeUpOneByOneAnimation>
                    </h2>
                    <FadeUpOneByOneAnimation> 
                      <p>
                          Asset allocation is the process of dividing your investments among different asset classes, like stocks, bonds, and cash, to balance risk and reward. It’s essential in financial planning, as it helps reduce risk by diversifying your portfolio and should be regularly adjusted to align with your goals and market changes.
                      </p>
                    </FadeUpOneByOneAnimation> 
                </li>
                <li className="pl-6 ml-2 sm:ml-6 relative before:absolute before:left-0 before:top-[38px] before:w-[1px] before:h-[100%] before:bg-black before:content-[''] ">
                    <span className="font-bold text-[#479AD2] text-xl absolute left-[-5px] top-[38px] w-[30px] h-[30px] bg-[#F6FDFF]">4</span>
                    <h2 className="flex items-center text-[20px] xl:text-2xl font-semibold">
                        <FadeUpOneByOneAnimation> 
                          <Image src="/images/financial-planning/icons/goal-based-planning.png" width={100} height={100} alt="Portfolio Creation"  className="mr-4 xl:mr-6 w-[90px] xl:w-[100px]"/>
                        </FadeUpOneByOneAnimation>
                        <FadeUpOneByOneAnimation> 
                          <span>Portfolio Creation</span>
                        </FadeUpOneByOneAnimation>
                    </h2>
                    <FadeUpOneByOneAnimation> 
                      <p>
                          Asset allocation is the process of dividing your investments among different asset classes, like stocks, bonds, and cash, to balance risk and reward. It’s essential in financial planning, as it helps reduce risk by diversifying your portfolio and should be regularly adjusted to align with your goals and market changes.
                      </p>
                    </FadeUpOneByOneAnimation>
                </li>
                <li className="pl-6 ml-6 relative">
                    <span className="font-bold text-[#479AD2] text-xl absolute left-[-5px] top-[38px] w-[30px] h-[30px] bg-[#F6FDFF]">5</span>
                    <h2 className="flex items-center text-[20px] xl:text-2xl font-semibold">
                        <FadeUpOneByOneAnimation> 
                          <Image src="/images/financial-planning/icons/goal-based-planning.png" width={100} height={100} alt="Quaterly Revision"  className="mr-4 xl:mr-6 w-[90px] xl:w-[100px]"/>
                        </FadeUpOneByOneAnimation>
                        <FadeUpOneByOneAnimation> 
                          <span>Quaterly Revision</span>
                        </FadeUpOneByOneAnimation>
                    </h2>
                    <FadeUpOneByOneAnimation> 
                    <p>
                        Asset allocation is the process of dividing your investments among different asset classes, like stocks, bonds, and cash, to balance risk and reward. It’s essential in financial planning, as it helps reduce risk by diversifying your portfolio and should be regularly adjusted to align with your goals and market changes.
                    </p>
                    </FadeUpOneByOneAnimation>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpWealthCreation;
