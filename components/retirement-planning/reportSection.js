import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import FadeUpOneByOneLeftAnimation from "@/animations/FadeUpOneByOneLeftAnimation";
import FadeUpOneByOneRightAnimation from "@/animations/FadeUpOneByOneRightAnimation";
import Image from "next/image";
import Link from "next/link";

const ReportSection = () => {
  return (
    <section>
      <div className="bg-[#479AD2] pt-12">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <div className="flex justify-between items-end flex-col sm:flex-row">
            <div className="w-full lg:w-[72%]">
              <div className="w-full flex justify-between flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 lg:w-[40%] xl:w-[45%]">
                  <h2 className="font-normal text-white text-[32px] xl:text-[42px] mb-[20px] sm:mb-[40px] leading-[120%]">
                    <FadeUpOneByOneAnimation>
                      Here&#39;s what your&nbsp;
                      <span className="font-semibold inline sm:block text-[#ffffff]">
                        personalized <br className="hidden sm:inline-block" /> financial report
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
                    <li className="w-full text-white px-4 xl:px-6 py-3 xl:py-4 text-lg xl:text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                      <FadeUpOneByOneRightAnimation>
                        Requirement
                      </FadeUpOneByOneRightAnimation>
                    </li>
                    <li className="w-full text-white px-4 xl:px-6 py-3 xl:py-4 text-lg xl:text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                      <FadeUpOneByOneRightAnimation>
                        Retirement Corpus
                      </FadeUpOneByOneRightAnimation>
                    </li>
                    <li className="w-full text-white px-4 xl:px-6 py-3 xl:py-4 text-lg xl:text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                      <FadeUpOneByOneRightAnimation>
                        Projected Post Retirement Cashflow
                      </FadeUpOneByOneRightAnimation>
                    </li>
                  </ul>
                </div>
                <div className="w-[90%] mx-auto sm:mx-0 sm:w-1/2 lg:w-[55%]">
                  <FadeUpOneByOneAnimation className="my-[30px] sm:mt-[80px] sm:mb-[-130px] ml-[-20px]">
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
            <FadeUpOneByOneLeftAnimation className="lg:w-[34%] xl:w-[28%] sm:hidden lg:flex flex-col items-center my-6 mx-auto md:mx-0 md:mb-16">
              <Image
                src="/images/retirement-planning/retirement.png"
                alt="Retirement Planning"
                width={477}
                height={496}
                className="w-full flex items-end"
              />
              <Link href="https://api.whatsapp.com/send?phone=918141027000&text=Hello, I'm interested in learning more about your financial advisory and investment services. Could you please provide me with some details on how I can start planning my investments? Looking forward to hearing from you!"
              className="bg-[#293C7D] text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center justify-center w-full "
              >Get your personalized report 
              <Image
                  src="/images/icons/arrow-square-right.png"
                  width={21}
                  height={21}
                  alt="Get your personalized report "
                  className="ml-2"
                />
              </Link> 
            </FadeUpOneByOneLeftAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;
