import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import FadeUpOneByOneLeftAnimation from "@/animations/FadeUpOneByOneLeftAnimation";
import FadeUpOneByOneRightAnimation from "@/animations/FadeUpOneByOneRightAnimation";
import Image from "next/image";

const ReportSection = () => {
  return (
    <section>
      <div className="bg-[#479AD2] pt-12">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto">
          <div className="flex justify-between items-end">
            <div className="w-[72%]">
              <div className="w-full flex justify-between">
                <div className="w-[45%] ">
                  <h2 className="font-normal text-white text-[42px] mb-16 leading-[120%]">
                    <FadeUpOneByOneAnimation>
                      Here&#39;s what your
                      <span className="font-semibold block">
                        personalized <br /> financial report
                      </span>{" "}
                      will look like
                    </FadeUpOneByOneAnimation>
                  </h2>
                  <ul className="flex flex-col">
                    {/* <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-extrabold hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                      Assumptions
                    </li>
                    <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                      Net Worth Analysis
                    </li> */}
                    <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                      <FadeUpOneByOneRightAnimation>
                        Requirement
                      </FadeUpOneByOneRightAnimation>
                    </li>
                    <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                      <FadeUpOneByOneRightAnimation>
                        Retirement Corpus
                      </FadeUpOneByOneRightAnimation>
                    </li>
                    <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                      <FadeUpOneByOneRightAnimation>
                        Projected Post Retirement Cashflow
                      </FadeUpOneByOneRightAnimation>
                    </li>
                  </ul>
                </div>
                <div className="w-[55%]">
                  <FadeUpOneByOneAnimation className="mt-[40px] mb-[-130px] ml-[-20px]">
                    <Image
                      src="/images/financial-planning/financial-planning-report-tab.png"
                      alt="Financial Planning"
                      width={615}
                      height={771}
                      className="w-full"
                    />
                  </FadeUpOneByOneAnimation>
                </div>
              </div>
            </div>
            <FadeUpOneByOneLeftAnimation className="w-[28%] flex flex-col items-center mb-16">
              <Image
                src="/images/retirement-planning/retirement.png"
                alt="Retirement Planning"
                width={477}
                height={496}
                className="w-full flex items-end"
              />
              <a href=""
              className="bg-[#293C7D] text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
              >Get your personalized now 
              <Image
                  src="/images/icons/arrow-square-right.png"
                  width={21}
                  height={21}
                  alt="Get your personalized now "
                  className="ml-2"
                />
              </a>
            </FadeUpOneByOneLeftAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;
