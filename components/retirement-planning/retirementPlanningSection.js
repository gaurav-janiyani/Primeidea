"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const RetirementPlanningSection = () => {
  const scrollContainerRef = useRef(null);
  const stickyHeaderRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const stickyHeader = stickyHeaderRef.current;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft > 0) {
        stickyHeader.classList.add("sticky");
      } else {
        stickyHeader.classList.remove("sticky");
      }
    };

    const handleWheel = (e) => {
      const containerScrollLeft = scrollContainer.scrollLeft;
      const containerScrollWidth = scrollContainer.scrollWidth;
      const containerOffsetWidth = scrollContainer.offsetWidth;
      
      if (
        (containerScrollLeft === 0 && e.deltaY < 0) || 
        (containerScrollLeft + containerOffsetWidth >= containerScrollWidth && e.deltaY > 0)
      ) {
        // At the start or end of horizontal scroll, allow vertical scrolling
        return;
      }
      
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="py-8 bg-[#F6FDFF]  ">
      <div className="border-b border-b-[#222222] px-1">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <div ref={stickyHeaderRef} className="sticky-header">
            <h2 className="text-[28px] md:text-[32px] leading-[140%] font-normal mb-6 text-[#04102A]">
              <FadeUpOneByOneAnimation>
                Types of <br className="hidden md:block" /> <strong>Retirement Planning?</strong>
              </FadeUpOneByOneAnimation>
            </h2>
          </div>
          <div ref={scrollContainerRef} className="scroll-container">
            <div className="content-wrapper">
              <div className="text-[#317CAF] w-[900px] pr-[30px] pb-6 mr-[30px] border-r border-r-[#222222] ">
                <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-end mb-8">
                  <div className="w-full md:w-[60%] pb-[40px]">
                    <h3 className="text-[22px] md:text-[28px] font-semibold mb-3">
                        Early Retirement
                    </h3>
                    <p className="text-lg mb-1 text-black">
                      Early Retirement refers to the strategic planning and financial management that allows individuals to retire before the traditional retirement age, often in their 50s or even earlier.                    
                        <br />
                      This approach is ideal for those who wish to pursue personal interests, travel, or embark on new ventures without the constraints of a full-time job.
                    </p>
                  </div>
                  <div className="w-full md:w-[37%] max-w-[300px] md:max-w-full">
                    <Image
                      src="/images/retirement-planning/services/serviceMain1.png"
                      width="331"
                      height="198"
                      alt="Early Retirement"
                      className="max-h-[260px] object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[20px] md:text-2xl font-medium mb-5 text-black ">
                  Key Feature
                </h3>
                <ul className="flex justify-between mx-[-10px] ">
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/retirement-planning/services/service11.png"
                        width={387}
                        height={159}
                        alt="Aggressive Savings & Investments"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Aggressive Savings & Investments
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        Early retirement needs disciplined saving and investing in retirement accounts, real estate, and a diversified portfolio.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/retirement-planning/services/service12.png"
                        width={387}
                        height={159}
                        alt="Lifestyle Planning"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Lifestyle Planning
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        This includes considering the cost of healthcare, lifestyle expenses, and potential inflation over a longer retirement period.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/retirement-planning/services/service13.png"
                        width={387}
                        height={159}
                        alt="Financial Independence"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Financial Independence
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        The goal is to achieve financial independence, where passive income and savings can sustain the retiree’s lifestyle without the need for active employment.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-[#317CAF] w-[900px] pr-[30px] pb-6 mr-[30px] border-r border-r-[#222222] ">
                <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-end mb-8">
                  <div className="w-full md:w-[60%] pb-[40px]">
                    <h3 className="text-[22px] md:text-[28px] font-semibold mb-3">
                      Ideal Retirement
                    </h3>
                    <p className="text-lg mb-1 text-black">
                      Ideal Retirement is a well-balanced approach that targets retirement at the traditional age, typically around 60-65, allowing individuals to enjoy their golden years with financial security and peace of mind.
                      <br/>
                      It’s about maintaining a comfortable lifestyle without financial worries.
                    </p>
                  </div>
                  <div className="w-full md:w-[37%] max-w-[300px] md:max-w-full">
                    <Image
                      src="/images/retirement-planning/services/serviceMain2.png"
                      width="331"
                      height="198"
                      alt="Ideal Retirement"
                      className="max-h-[260px] object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[20px] md:text-2xl font-medium mb-5 text-black ">
                  Key Feature
                </h3>
                <ul className="flex justify-between mx-[-10px] ">
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/retirement-planning/services/service21.png"
                        width={387}
                        height={159}
                        alt="Balanced Investment Strategy"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Balanced Investment Strategy
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        A mix of growth-oriented and income-generating investments that align with the client’s risk tolerance and retirement goals.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/retirement-planning/services/service22.png"
                        width={387}
                        height={159}
                        alt="Comprehensive Planning"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Comprehensive Planning
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        This includes detailed planning for healthcare, travel, hobbies, and family support, ensuring that all aspects of retirement life are covered.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/retirement-planning/services/service23.png"
                        width={387}
                        height={159}
                        alt="Sustainable Income"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Sustainable Income
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        Ensuring a steady income stream through pensions, annuties, and savings that can support the retiree throughout their retirement years.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-[#317CAF] w-[900px] pr-[30px] pb-6 mr-[30px] border-r border-r-[#222222] ">
                <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-end mb-8">
                  <div className="w-full md:w-[60%] pb-[40px]">
                    <h3 className="text-[22px] md:text-[28px] font-semibold mb-3">
                      Gurantee Fixed Income
                    </h3>
                    <p className="text-lg mb-1 text-black">
                      Guranteed Fixed income is a retirement plan designed for those who prioritise financial stability and predictability in their retirement years.
                    </p>
                    <p className="text-lg mb-1 text-black">
                      This option ensures a steady, reliable income stream, often through annuties or pension plans, regardless of market fluctuations.
                    </p>
                  </div>
                  <div className="w-full md:w-[37%] max-w-[300px] md:max-w-full">
                    <Image
                      src="/images/retirement-planning/services/serviceMain3.png"
                      width="331"
                      height="198"
                      alt="Gurantee Fixed Income"
                      className="max-h-[260px] object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[20px] md:text-2xl font-medium mb-5 text-black ">
                  Key Feature
                </h3>
                <ul className="flex justify-between mx-[-10px] ">
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/retirement-planning/services/service31.png"
                        width={387}
                        height={159}
                        alt="Low-Risk Investments"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Low-Risk Investments
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        Emphasis on low-risk, income-generating investments such as government bonds, fixed deposits, and insurance products offer guaranteed returns.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/retirement-planning/services/service32.png"
                        width={387}
                        height={159}
                        alt="Fixed Annuties"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Fixed Annuties
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        PPF is a 15-year savings scheme with a fixed interest
                        rate, offering tax benefits under Section 80C. Interest
                        earned and maturity are tax-free.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/retirement-planning/services/service33.png"
                        width={387}
                        height={159}
                        alt="Budget-Friendly"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Budget-Friendly
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        NPS is a government-backed pension scheme offering tax
                        benefits under Section 80C and an extra ₹50,000
                        deduction under Section 80CCD(1B).
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .sticky-header {
          position: sticky;
          top: 0;
          background: #F6FDFF;
          z-index: 10;
          transition: all 0.3s ease;
        }
        .sticky-header.sticky {
      
        }
        .scroll-container {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .scroll-container::-webkit-scrollbar {
          height: 5px;
        }
        .scroll-container::-webkit-scrollbar-track {
          background: #f1f1f1; 
        }
        
        .scroll-container::-webkit-scrollbar-thumb {
          background: #abddff; 
        }

        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: #555; 
        }
        .content-wrapper {
          display: flex;
          width: 2900px;
        }
      `}</style>
    </section>
  );
};

export default RetirementPlanningSection;
