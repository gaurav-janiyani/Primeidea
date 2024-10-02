"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const TaxPlanning = () => {
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
        <div className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-2">
          <div ref={stickyHeaderRef} className="sticky-header">
            <h2 className="text-[32px] leading-[140%] font-normal mb-6 text-[#04102A]">
              How to save Tax in India with the <br /> help of Tax Planning ?
            </h2>
          </div>
          <div ref={scrollContainerRef} className="scroll-container">
            <div className="content-wrapper">
              <div className="text-[#317CAF] w-[900px] pr-[30px] pb-6 mr-[30px] border-r border-r-[#222222] ">
                <div className="flex justify-between items-end mb-8">
                  <div className="w-[60%] pb-[40px]">
                    <h3 className="text-[28px] font-semibold mb-3">
                      Invest in Tax-Saving Instruments
                    </h3>
                    <p className="text-lg mb-1 text-black">
                      Investing in tax-saving instruments is a smart strategy to
                      reduce your taxable income while growing your wealth.
                      <br />
                      These instruments, recognized under various sections of
                      the Income Tax Act, offer tax deductions and incentives,
                      making them an essential part of financial planning in
                      India.
                    </p>
                    {/* <p className="text-lg mb-1 text-black">
                      These instruments, recognized under various sections of the
                      Income Tax Act, offer tax deductions and incentives, making
                      them an essential part of financial planning in India.
                    </p> */}
                  </div>
                  <div className="w-[37%]">
                    <Image
                      src="/images/tax-planning/1.png"
                      width="331"
                      height="198"
                      alt="1"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-5 text-black ">
                  Key Feature
                </h3>
                <ul className="flex justify-between mx-[-10px] ">
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/tax-planning/invest-tax-saving/elss.png"
                        width={387}
                        height={159}
                        alt="1"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Equity-Linked Savings Scheme (ELSS)
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        ELSS funds are equity-based mutual funds with a 3-year
                        lock-in, offering high returns and tax deductions up to
                        ₹1.5 lakh under Section 80C.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/tax-planning/invest-tax-saving/ppf.png"
                        width={387}
                        height={159}
                        alt="2"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Public Provident Fund (PPF)
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
                        src="/images/tax-planning/invest-tax-saving/nps.png"
                        width={387}
                        height={159}
                        alt="3"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        National Pension System (NPS)
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
              <div className="text-[#317CAF] w-[900px] pr-[30px] pb-6 mr-[30px] border-r border-r-[#222222] ">
                <div className="flex justify-between items-end mb-8">
                  <div className="w-[60%] pb-[40px]">
                    <h3 className="text-[28px] font-semibold mb-3">
                      Claim Deductions for expenses
                    </h3>
                    <p className="text-lg mb-1 text-black">
                      Claiming deductions for various expenses helps reduce your
                      taxable income, leading to lower tax liability. By
                      leveraging eligible deductions under different sections of
                      the Income Tax Act, you can maximize your savings while
                      covering essential costsu
                    </p>
                  </div>
                  <div className="w-[37%]">
                    <Image
                      src="/images/tax-planning/1.png"
                      width="331"
                      height="198"
                      alt="1"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-5 text-black ">
                  Key Feature
                </h3>
                <ul className="flex justify-between mx-[-10px] ">
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/tax-planning/invest-tax-saving/elss.png"
                        width={387}
                        height={159}
                        alt="1"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Health Insurance Premiums (Section 80D)
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        Deduct up to ₹25,000 for premiums paid for self, spouse,
                        and children, and ₹50,000 for senior citizen parents.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/tax-planning/invest-tax-saving/ppf.png"
                        width={387}
                        height={159}
                        alt="2"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Education Loan Interest (Section 80E)
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        Deduct the entire interest paid on an education loan for
                        higher studies, with no upper limit, for up to 8 years.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/tax-planning/invest-tax-saving/nps.png"
                        width={387}
                        height={159}
                        alt="3"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        National Pension System (NPS)
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
              <div className="text-[#317CAF] w-[900px] pr-[30px] pb-6 mr-[30px] border-r border-r-[#222222] ">
                <div className="flex justify-between items-end mb-8">
                  <div className="w-[60%] pb-[40px]">
                    <h3 className="text-[28px] font-semibold mb-3">
                      Opt for Tax-Exempt Allowances
                    </h3>
                    <p className="text-lg mb-1 text-black">
                      Investing in tax-saving instruments is a smart strategy to
                      reduce your taxable income while growing your wealth.
                    </p>
                    <p className="text-lg mb-1 text-black">
                      These instruments, recognized under various sections of
                      the Income Tax Act, offer tax deductions and incentives,
                      making them an essential part of financial planning in
                      India.
                    </p>
                  </div>
                  <div className="w-[37%]">
                    <Image
                      src="/images/tax-planning/1.png"
                      width="331"
                      height="198"
                      alt="1"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-5 text-black ">
                  Key Feature
                </h3>
                <ul className="flex justify-between mx-[-10px] ">
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/tax-planning/invest-tax-saving/elss.png"
                        width={387}
                        height={159}
                        alt="1"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Equity-Linked Savings Scheme (ELSS)
                      </h3>
                      <p className="text-base font-normal text-[#222222]">
                        ELSS funds are equity-based mutual funds with a 3-year
                        lock-in, offering high returns and tax deductions up to
                        ₹1.5 lakh under Section 80C.
                      </p>
                    </div>
                  </li>
                  <li className="px-[10px] w-[33%]">
                    <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                      <Image
                        src="/images/tax-planning/invest-tax-saving/ppf.png"
                        width={387}
                        height={159}
                        alt="2"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        Public Provident Fund (PPF)
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
                        src="/images/tax-planning/invest-tax-saving/nps.png"
                        width={387}
                        height={159}
                        alt="3"
                      />
                      <h3 className="my-[10px] text-lg text-[#222222] font-bold">
                        National Pension System (NPS)
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

export default TaxPlanning;
