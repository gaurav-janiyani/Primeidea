"use client"
import { useState } from "react";
import Image from "next/image";

const FaqsSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index === activeTab ? -1 : index);
    };
    return (
        <div className="py-16 sm:py-8">
            <div className="mx-auto max-w-[1320px]">
              <div className="text-center max-w-[767px] px-4 mx-auto">
                <h2 className="text-xl font-normal tracking-tight mb-4 text-[#04102A] sm:text-3xl">
                  Frequently Asked Questions
                </h2>
                <p className="mb-12 text-base font-semibold leading-6 text-[#4D4D4D]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
              <div className="max-w-[1023px] px-4 mx-auto">
                <ul>
                  <li className="bg-[#C6E8FF] p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(0)}>
                    <h2 className="flex items-center justify-between text-[22px] font-semibold text-[#222222]">
                      <span>
                          What should I consider when setting financial goals?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="Arrow" />
                    </h2>
                    <div className={`content mt-4 text-lg max-w-[85%] text-[#222222] ${activeTab === 0 ? 'block' : 'hidden'}`}>
                      <p>
                        When setting financial goals, consider factors such as your income, expenses, risk tolerance, time horizon, and personal values. Goals should be specific, measurable, achievable, relevant, and time-bound (SMART).
                      </p>
                    </div>
                  </li>
                  <li className="bg-[#C6E8FF] p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(1)}>
                    <h2 className="flex items-center justify-between text-[22px] font-semibold text-[#222222]">
                      <span>
                          What should I consider when setting financial goals?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="Arrow" />
                    </h2>
                    <div className={`content mt-4 text-lg max-w-[85%] text-[#222222] ${activeTab === 1 ? 'block' : 'hidden'}`}>
                      <p>
                        When setting financial goals, consider factors such as your income, expenses, risk tolerance, time horizon, and personal values. Goals should be specific, measurable, achievable, relevant, and time-bound (SMART).
                      </p>
                    </div>
                  </li>
                  <li className="bg-[#C6E8FF] p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(2)}>
                    <h2 className="flex items-center justify-between text-[22px] font-semibold text-[#222222]">
                      <span>
                          What should I consider when setting financial goals?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="Arrow" />
                    </h2>
                    <div className={`content mt-4 text-lg max-w-[85%] text-[#222222] ${activeTab === 2 ? 'block' : 'hidden'}`}>
                      <p>
                        When setting financial goals, consider factors such as your income, expenses, risk tolerance, time horizon, and personal values. Goals should be specific, measurable, achievable, relevant, and time-bound (SMART).
                      </p>
                    </div>
                  </li>
                  <li className="bg-[#C6E8FF] p-6 rounded-lg cursor-pointer" onClick={() => handleTabClick(3)}>
                    <h2 className="flex items-center justify-between text-[22px] font-semibold text-[#222222]">
                      <span>
                          What should I consider when setting financial goals?
                      </span>
                      <Image src="/images/icons/circle-down-arrow.png" width={30} height={30} alt="Arrow" />
                    </h2>
                    <div className={`content mt-4 text-lg max-w-[85%] text-[#222222] ${activeTab === 3 ? 'block' : 'hidden'}`}>
                      <p>
                        When setting financial goals, consider factors such as your income, expenses, risk tolerance, time horizon, and personal values. Goals should be specific, measurable, achievable, relevant, and time-bound (SMART).
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
      </div>
    )
 }

 export default FaqsSection;