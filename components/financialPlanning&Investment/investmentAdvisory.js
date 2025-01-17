import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";

const InvestmentAdvisory = () => { 
    return (
        <section>
        <div className="bg-[#F6FDFF] pt-16 md:pt-40">
          <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
            <div className="flex justify-between items-center flex-col md:flex-row mb-6">
              <h2 className="text-[24px] font-bold mb-4 md:mb-1 text-[#04102A]">
                Investment Advisory
              </h2>
              <button className="bg-[#293C7D] text-md font-bold rounded-[8px] text-white px-10 py-3 ">
                  Start My Investing Journey
              </button>
            </div>
            <ul className="flex justify-center md:justify-between flex-wrap md:flex-nowrap mx-[-10px]">
              <li className="px-[10px] mb-4 w-full max-w-[380px] sm:max-w-full sm:w-1/2 md:w-[33.33%]">
                <div className="shadow-[0_0_5px_0_#00000040] bg-white py-6 px-4 md:p-6 rounded-[27px] h-full">
                  <Image
                    src="/images/financial-planning/icons/foundation-plan.png"
                    width={80}
                    height={92}
                    alt="Foundation Plan"
                    className="max-h-[80px] mb-4 object-contain	"
                  />
                  <h3 className="my-4 text-xl font-semibold text-left">
                    <FadeUpOneByOneAnimation>
                      Foundation Plan
                    </FadeUpOneByOneAnimation>
                  </h3>
                  <FadeUpOneByOneAnimation>
                    <p className="text-base md:text-[18px] leading-[140%] font-normal text-left mb-4 min-h-[138px]">
                    Designed for those who prioritise stability and risk-averse strategies, the Foundation Plan offers secure investment options focused on long-term growth while minimising market volatility.
                    </p>                    
                  </FadeUpOneByOneAnimation>
                  <p className="text-base font-normal text-left mb-1">
                    Suitable for:
                  </p>
                  <button className="bg-[#479AD240] text-black text-[16px] font-[400] rounded-md px-4 py-2 inline-flex items-center">
                    Conservative Investors
                  </button>
                </div>
              </li>
              <li className="px-[10px] mb-4 w-full max-w-[380px] sm:max-w-full sm:w-1/2 md:w-[33.33%]">
                <div className="shadow-[0_0_5px_0_#00000040] bg-white py-6 px-4 md:p-6 rounded-[27px] h-full">
                  <Image
                    src="/images/financial-planning/icons/growth-plan.png"
                    width={80}
                    height={92}
                    alt="Growth Plan"
                    className="max-h-[80px] mb-4 object-contain	"
                  />
                  <h3 className="my-4 text-xl font-semibold text-left">
                    <FadeUpOneByOneAnimation>
                      Growth Plan
                    </FadeUpOneByOneAnimation>
                  </h3>
                  <FadeUpOneByOneAnimation>
                    <p className="text-base md:text-[18px] leading-[140%] font-normal text-left mb-4 min-h-[138px]">
                      The Growth Plan is perfect for individuals who want a balance between risk and return. This plan combines traditional investments with opportunities for higher growth in emerging markets and sectors.
                    </p>                    
                  </FadeUpOneByOneAnimation>
                  <p className="text-base font-normal text-left mb-1">
                    Suitable for:
                  </p>
                  <button className="bg-[#479AD240] text-black text-[16px] font-[400] rounded-md px-4 py-2 inline-flex items-center">
                    Balanced Investors
                  </button>
                </div>
              </li>
              <li className="px-[10px] mb-4 w-full max-w-[380px] sm:max-w-full sm:w-1/2 md:w-[33.33%]">
                <div className="shadow-[0_0_5px_0_#00000040] bg-white py-6 px-4 md:p-6 rounded-[27px] h-full">
                  <Image
                    src="/images/financial-planning/icons/high-gwoth-plan.png"
                    width={80}
                    height={92}
                    alt="High Growth Plan"
                    className="max-h-[80px] mb-4 object-contain	"
                  />
                  <h3 className="my-4 text-xl font-semibold text-left">
                    <FadeUpOneByOneAnimation>
                      High Growth Plan
                    </FadeUpOneByOneAnimation>
                  </h3>
                  <FadeUpOneByOneAnimation>
                    <p className="text-base md:text-[18px] leading-[140%] font-normal text-left mb-4 min-h-[138px]">
                      Designed for those who prioritise stability and risk-averse strategies, the Foundation Plan offers secure investment options focused on long-term growth while minimising market volatility.
                    </p>                    
                  </FadeUpOneByOneAnimation>
                  <p className="text-base font-normal text-left mb-1">
                    Suitable for:
                  </p>
                  <button className="bg-[#479AD240] text-black text-[16px] font-[400] rounded-md px-4 py-2 inline-flex items-center">
                    Aggressive Investors
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
 }

 export default InvestmentAdvisory;