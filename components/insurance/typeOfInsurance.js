import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";

const TypesOfInsurance = () => {
  return (
    <section>
      <div className="bg-[#232D63] py-12 bg-[url('/images/insurance/risk-management/bg.png')]  bg-no-repeat bg-contain bg-top w-full ">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[130%] font-light mb-4 text-[#fff] text-center">
            <FadeUpOneByOneAnimation>
              Explore the Essential Types of Insurance for <br className="hidden xl:inline-block" /> Comprehensive Protection
            </FadeUpOneByOneAnimation>
          </h2>
          <FadeUpOneByOneAnimation>
          <ul className="flex justify-center xl:justify-between flex-wrap xl:flex-nowrap mb-5">
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center m-[1%] xl:m-0 w-[calc(48%-1%)] sm:w-[30%] lg:w-[20%] xl:w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/life-insurance.png"
                width={146}
                height={101}
                alt="Life Insurance"
                className="object-contain h-full mb-2 max-h-[100px] max-w-[100px]"
              />
              <h4 className="text-white text-base xl:text-lg text-center leading-[130%]">Life Insurance</h4>
            </li>
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center m-[1%] xl:m-0 w-[calc(48%-1%)] sm:w-[30%] lg:w-[20%] xl:w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/health-insurance.png"
                width={150}
                height={150}
                alt="Health Insurance"
                className="object-contain h-full mb-2 max-h-[100px] max-w-[100px]"
              />
              <h4 className="text-white text-base xl:text-lg text-center leading-[130%]">
                Health Insurance
              </h4>
            </li>
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center m-[1%] xl:m-0 w-[calc(48%-1%)] sm:w-[30%] lg:w-[20%] xl:w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/auto-insurance.png"
                width={105}
                height={111}
                alt="Auto Insurance"
                className="object-contain h-full mb-2 max-h-[100px] max-w-[100px]"
              />
              <h4 className="text-white text-base xl:text-lg text-center leading-[130%]">Auto Insurance</h4>
            </li>
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center m-[1%] xl:m-0 w-[calc(48%-1%)] sm:w-[30%] lg:w-[20%] xl:w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/home-insurance.png"
                width={122}
                height={132}
                alt="Home Insurance"
                className="object-contain h-full mb-2 max-h-[100px] max-w-[100px]"
              />
              <h4 className="text-white text-base xl:text-lg text-center leading-[130%]">Home Insurance</h4>
            </li>
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center m-[1%] xl:m-0 w-[calc(48%-1%)] sm:w-[30%] lg:w-[20%] xl:w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/disability-insurance.png"
                width={132}
                height={132}
                alt="Disability Insurance"
                className="object-contain h-full mb-2 max-h-[100px] max-w-[100px]"
              />
              <h4 className="text-white text-base xl:text-lg text-center leading-[130%]">
                Disability Insurance
              </h4>
            </li>
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center m-[1%] xl:m-0 w-[calc(48%-1%)] sm:w-[30%] lg:w-[20%] xl:w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/business-insurance.png"
                width={96}
                height={103}
                alt="Business Insurance"
                className="object-contain h-full mb-2 max-h-[100px] max-w-[100px]"
              />
              <h4 className="text-white text-base xl:text-lg text-center leading-[130%]">
                Business Insurance
              </h4>
            </li>
          </ul>
          </FadeUpOneByOneAnimation>
          <FadeUpOneByOneAnimation className="border border-[#717171] rounded-xl bg-[#223494]">
            <div className="flex flex-col md:flex-row sm:justify-center md:justify-between p-6 border-b border-[#717171]">
              <h2 className="text-white text-2xl xl:text-3xl md:w-[370px] leading-[130%] text-center md:text-left mb-2 md:mb-0">
                Comprehensive <br className="hidden md:inline-block" />
                Risk Management
              </h2>
              <p className="text-white text-base xl:text-lg md:max-w-[500px] xl:max-w-[770px] mx-auto text-center md:text-left">
                At Primeidea, effective risk management is key to a solid
                financial strategy. Insurance isn&apos;t just about protection—it&apos;s
                about anticipating risks and being prepared. Our tailored
                solutions minimize threats to your wealth and ensure financial
                stability.
              </p>
            </div>
            <div className="p-6">
              <p className="text-white text-lg mb-6">
                Key component for Risk Management
              </p>
              <ul className="flex flex-wrap lg:flex-nowrap justify-start sm:justify-center lg:justify-between">
                <li className="text-white w-full max-w-[300px] sm:max-w-full sm:w-[50%] md:w-[33%] lg:w-[18%] px-0 sm:p-4">
                  <Image
                    src="/images/insurance/risk-management/1.png"
                    width={61}
                    height={61}
                    alt="Identifying Potential Risks"
                    className="mb-4"
                  />
                  <h3 className="mb-3 text-lg font-semibold leading-[130%]">
                    Identifying <br /> Potential Risks
                  </h3>
                  <p className="text-base xl:text-lg font-light">
                    <strong className="font-medium">
                      Analyze Vulnerabilities:
                    </strong>{" "}
                    We help you identify the risks that could impact your
                    assets, from market fluctuations to life events.
                  </p>
                </li>
                <li className="text-white w-full max-w-[300px] sm:max-w-full sm:w-[50%] md:w-[33%] lg:w-[18%] px-0 sm:p-4">
                  <Image
                    src="/images/insurance/risk-management/2.png"
                    width={61}
                    height={61}
                    alt="Tailored Insurance Solutions"
                    className="mb-4"
                  />
                  <h3 className="mb-3 text-lg font-semibold leading-[130%]">
                    Tailored Insurance <br/> Solutions
                  </h3>
                  <p className="text-base xl:text-lg font-light">
                    <strong className="font-medium">
                      Customized Coverage:
                    </strong>{" "}
                    We offer insurance plans tailored to your unique needs,
                    ensuring comprehensive protection against identified risks.
                  </p>
                </li>
                <li className="text-white w-full max-w-[300px] sm:max-w-full sm:w-[50%] md:w-[33%] lg:w-[18%] px-0 sm:p-4">
                  <Image
                    src="/images/insurance/risk-management/3.png"
                    width={61}
                    height={61}
                    alt="Mitigating Financial Loss"
                    className="mb-4"
                  />
                  <h3 className="mb-3 text-lg font-semibold leading-[130%]">
                    Mitigating <br /> Financial Loss
                  </h3>
                  <p className="text-base xl:text-lg font-light">
                    <strong className="font-medium">
                      Strategic Safeguards:
                    </strong>{" "}
                    Implement strategies that minimize financial loss in case of
                    unexpected events, such as critical illness, accidents, or
                    natural disasters.
                  </p>
                </li>
                <li className="text-white w-full max-w-[300px] sm:max-w-full sm:w-[50%] md:w-[33%] lg:w-[18%] px-0 sm:p-4">
                  <Image
                    src="/images/insurance/risk-management/4.png"
                    width={61}
                    height={61}
                    alt="Ongoing Risk Assessment"
                    className="mb-4"
                  />
                  <h3 className="mb-3 text-lg font-semibold leading-[130%]">
                    Ongoing Risk <br /> Assessment
                  </h3>
                  <p className="text-base xl:text-lg font-light">
                    <strong className="font-medium">Regular Reviews:</strong> We
                    continuously assess and adjust your coverage as your
                    financial situation and life circumstances evolve.
                  </p>
                </li>
                <li className="text-white w-full max-w-[300px] sm:max-w-full sm:w-[50%] md:w-[33%] lg:w-[18%] px-0 sm:p-4">
                  <Image
                    src="/images/insurance/risk-management/5.png"
                    width={61}
                    height={61}
                    alt="Crisis Management"
                    className="mb-4"
                  />
                  <h3 className="mb-3 text-lg font-semibold leading-[130%]">
                    Crisis <br /> Management
                  </h3>
                  <p className="text-base xl:text-lg font-light">
                    <strong className="font-medium">Preparedness:</strong> In
                    the event of a crisis, our team is ready to assist with
                    claim processing and financial guidance to help you navigate
                    the aftermath.
                  </p>
                </li>
              </ul>
            </div>
          </FadeUpOneByOneAnimation>
        </div>
      </div>
    </section>
  );
};

export default TypesOfInsurance;
