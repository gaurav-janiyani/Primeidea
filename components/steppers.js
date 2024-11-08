"use client";
import React from "react";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const StepperSection = (props) => {

  // const steps = [
  //   {
  //     id: '01',
  //     title: "Assess Your Income and Tax Liability",
  //     content:
  //       "Evaluate your total income and calculate your tax liability based on current slabs.",
  //   },
  //   {
  //     id: '02',
  //     title: "Maximize Section 80C Deductions",
  //     content:
  //       "Invest in ELSS, PPF, and insurance to claim ₹1.5 lakh deductions under Section 80C and reduce taxable income.",
  //   },
  //   {
  //     id: '03',
  //     title: "Utilize Additional Deductions",
  //     content:
  //       "Use deductions under Sections 80D, 24(b), and 80E to lower your tax liability.",
  //   },
  //   {
  //     id: '04',
  //     title: "Tax-Exempt & Income Splitting",
  //     content: "Use HRA, LTA, and split income to leverage lower tax brackets.",
  //   },
  // ];

  return (
    <section>
      <div className="py-16">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <FadeUpOneByOneAnimation> 
              Steps for Tax Planning & Savings
            </FadeUpOneByOneAnimation>
          </h2>
          <div className="flex flex-col items-center justify-center pt-8 px-8">
            <div className="relative flex justify-between items-baseline w-full 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] px-4 mb-8">
              {props.steps?.map((step, index) => (
                <React.Fragment key={step.id}>
                  <FadeUpOneByOneAnimation className="flex flex-col items-center w-1/4 text-center relative before:absolute before:top-[21px] before:left-[50%] before:w-full before:h-[1px] before:bg-[#3A414D80] before:content-[''] last:before:hidden after:absolute after:top-[11px] after:right-0 after:bg-[url('/images/icons/right.png')] last:after:hidden after:bg-no-repeat after:bg-contain	after:bg-center	after:w-[20px] after:h-[20px]">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full relative font-medium z-10 bg-[#232D63] text-white after:absolute after:top-[50%] after:left-[50%] after:w-[calc(100%-6px)] after:h-[calc(100%-6px)] after:bg-[url('/images/icons/circle.png')] after:bg-no-repeat after:bg-contain after:bg-center after:translate-x-[-50%] after:translate-y-[-50%] after:z-[999] after:content-['']`}
                    >
                      {step.id}
                    </div>
                    <h3 className="text-2xl font-semibold mt-4 max-w-[240px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-lg max-w-[270px] font-medium">
                      {step.content}
                    </p>
                  </FadeUpOneByOneAnimation>
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
