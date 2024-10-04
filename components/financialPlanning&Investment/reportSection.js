import Image from "next/image";

const ReportSection = () => { 
    return (
        <section>
        <div className="bg-[#479AD2] pt-12">
          <div className=" 2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
            <div className="flex justify-between items-end">
              <div className="max-w-[72%]">
                <div className="w-full flex justify-between">
                  <div className="max-w-[45%] w-full">
                    <h2 className="font-normal text-white text-[42px] mb-[40px] leading-[120%]">
                      Here&#39;s what your
                      <span className="font-semibold block">
                        personalized <br /> financial report
                      </span>{" "}
                      will look like
                    </h2>
                    <ul className="flex flex-col">
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-extrabold hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                        Goal Settings
                      </li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                        Financial Analysis
                      </li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                        Retirement Income Needs
                      </li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                        Risk Management
                      </li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                        Review & Monitoring
                      </li>
                    </ul>
                  </div>
                  <div className="max-w-[55%]">
                    <div className="mt-[80px] mb-[-130px] ml-[-20px]">
                      <Image
                        src="/images/financial-planning/financial-planning-report-tab.png"
                        alt="Financial Planning"
                        width={615}
                        height={771}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="max-w-[28%]">
                <Image
                  src="/images/financial-planning/financial-advisor-people.png"
                  alt="Finacial Advisor"
                  width={477}
                  height={496}
                  className="w-full flex items-end"
                />
              </div> */}
              <div className="max-w-[28%] flex flex-col items-center mb-16">
                <Image
                    src="/images/financial-planning/financial-advisor-people.png"
                    alt="Financial Planning & Investment Advisor"
                    width={477}
                    height={496}
                    className="w-full flex items-end"
                />
                <a href=""
                className="bg-[#293C7D] text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center justify-center w-full "
                >Get your personalized now 
                <Image
                    src="/images/icons/arrow-square-right.png"
                    width={21}
                    height={21}
                    alt="Get your personalized now "
                    className="ml-2"
                    />
                </a>
            </div>
            </div>
          </div>
        </div>
      </section>
    )
 }

 export default ReportSection;