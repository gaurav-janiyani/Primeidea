"use client"
import { useState } from "react";
import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const FaqsSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index === activeTab ? -1 : index);
    };
    return (
        <div className="py-16 sm:py-8">
            <div className="mx-auto 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4">
              <FadeUpOneByOneAnimation className="text-center max-w-[767px] px-4 mx-auto">
                <h2 className="text-2xl font-medium tracking-tight mb-6 md:mb-8 text-[#04102A] sm:text-3xl">
                  Frequently Asked Questions
                </h2>
               {/* <p className="mb-12 text-base font-semibold leading-6 text-[#4D4D4D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </p> */}
              </FadeUpOneByOneAnimation>
              <div className="max-w-[1023px] mx-auto">
                <ul>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(0)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        What is financial planning and why is it important?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="Arrow" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 0 ? 'block' : 'hidden'}`}>
                      <p>
                        Financial planning is the process of creating a comprehensive strategy to manage your finances, achieve goals, and secure your financial future. It ensures effective budgeting, saving, and investing for life’s milestones.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(1)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        What does an investment advisory service provide?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="Arrow" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 1 ? 'block' : 'hidden'}`}>
                      <p>
                        Investment advisory services offer expert guidance on managing investments, selecting financial products, and building portfolios aligned with your risk tolerance, goals, and time horizon.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(2)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                      How can financial planning help me achieve my goals?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="Arrow" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 2 ? 'block' : 'hidden'}`}>
                      <p>
                      Financial planning helps by creating a roadmap for saving, investing, and managing debt. It also provides clarity on short-term and long-term goals like buying a home, funding education, or retiring comfortably.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(3)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        How do I choose the right investment options?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="Arrow" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 3 ? 'block' : 'hidden'}`}>
                      <p>
                      The right options depend on factors like your risk tolerance, financial goals, investment horizon, and current financial situation. For more info contact with our advisor.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(4)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        What is the difference between active and passive investing?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="Arrow" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 4 ? 'block' : 'hidden'}`}>
                      <p>
                        Active investing involves frequent trading and aiming to outperform market benchmarks, while passive investing focuses on mimicking market indexes and requires less ongoing management.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                  <li className="bg-[#C6E8FF] p-4 md:p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(5)}>
                    <FadeUpOneByOneAnimation>
                    <h2 className="flex items-center justify-between text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold text-[#222222]">
                      <span>
                        Can financial planning help in managing debt?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="Arrow" className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] ml-2" />
                    </h2>
                    <div className={`content mt-4 text-base md:text-lg max-w-full md:max-w-[85%] text-[#222222] ${activeTab === 5 ? 'block' : 'hidden'}`}>
                      <p>
                        Yes, financial planning can assist in creating strategies to reduce and manage debt effectively, including prioritizing high-interest loans and integrating debt repayment with savings and investments.
                      </p>
                    </div>
                    </FadeUpOneByOneAnimation>
                  </li>
                </ul>
              </div>
            </div>
      </div>
    )
 }

 export default FaqsSection;