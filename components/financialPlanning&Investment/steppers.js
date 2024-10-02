"use client";
import React from "react";

const StepperSection = () => {
  const steps = [
    {
      id: '01',
      title: "Getting to know you.",
      content:
        "We begin the financial planning process by understanding your unique needs, goals, and existing assets and liabilities. We also pay close attention to the crucial details that impact your financial plan.",
    },
    {
      id: '02',
      title: "Finding the right investments",
      content:
        "We use our expertise and AI-driven Robo Advisor to match investment avenues with your goals, covering retirement and tax planning for a complete financial solution.",
    },
    {
      id: '03',
      title: "Recommending the best plan",
      content:
        "We recommend investments and manage your portfolio, including performance analysis and rebalancing, to help you achieve your financial goals.",
    },
  ];

  return (
    <section>
      <div className="bg-[#F6FDFF] py-16">
        <div className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Steps for Financial Planning
          </h2>
          <div className="flex flex-col items-center justify-center pt-8 px-8">
            <div className="relative flex justify-between items-baseline w-full 2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] mb-8">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center w-1/3 text-center relative before:absolute before:top-[21px] before:left-[50%] before:w-full before:h-[1px] before:bg-[#3A414D80] before:content-[''] last:before:hidden after:absolute after:top-[11px] after:right-0 after:bg-[url('/images/icons/right.png')] last:after:hidden after:bg-no-repeat after:bg-contain	after:bg-center	after:w-[20px] after:h-[20px]">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full relative font-medium z-10 bg-[#232D63] text-white after:absolute after:top-[50%] after:left-[50%] after:w-[calc(100%-6px)] after:h-[calc(100%-6px)] after:bg-[url('/images/icons/circle.png')] after:bg-no-repeat after:bg-contain after:bg-center after:translate-x-[-50%] after:translate-y-[-50%] after:z-[999] after:content-['']`}
                    >
                      {step.id}
                    </div>
                    <h3 className="text-2xl font-semibold mt-4 max-w-[220px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-lg max-w-[270px] font-medium">
                      {step.content}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepperSection;
