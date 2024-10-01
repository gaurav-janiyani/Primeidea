import Image from "next/image";

const TypesOfInsurance = () => {
  return (
    <section>
      <div className="bg-[#232D63] py-12 bg-[url('/images/insurance/risk-management/bg.png')]  bg-no-repeat bg-contain bg-top w-full ">
        <div className="max-w-[1320px] mx-auto px-2">
          <h2 className="text-[32px] font-light mb-4 text-[#fff] text-center">
            Explore the Essential Types of Insurance for <br /> Comprehensive
            Protection
          </h2>
          <ul className="flex justify-between mb-5">
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/life-insurance.png"
                width={146}
                height={101}
                alt="Life Insurance"
                className="object-contain h-full"
              />
              <h4 className="text-white text-lg text-center">Life Insurance</h4>
            </li>
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/health-insurance.png"
                width={150}
                height={150}
                alt="Health Insurance"
                className="object-contain h-full"
              />
              <h4 className="text-white text-lg text-center">
                Health Insurance
              </h4>
            </li>
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/auto-insurance.png"
                width={105}
                height={111}
                alt="Auto Insurance"
                className="object-contain h-full"
              />
              <h4 className="text-white text-lg text-center">Auto Insurance</h4>
            </li>
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/home-insurance.png"
                width={122}
                height={132}
                alt="Home Insurance"
                className="object-contain h-full"
              />
              <h4 className="text-white text-lg text-center">Home Insurance</h4>
            </li>
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/disability-insurance.png"
                width={132}
                height={132}
                alt="Disability Insurance"
                className="object-contain h-full"
              />
              <h4 className="text-white text-lg text-center">
                Disability Insurance
              </h4>
            </li>
            <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center w-[15.4%]">
              <Image
                src="/images/insurance/insurance-type/business-insurance.png"
                width={96}
                height={103}
                alt="Business Insurance"
                className="object-contain h-full"
              />
              <h4 className="text-white text-lg text-center">
                Business Insurance
              </h4>
            </li>
          </ul>
          <div className="border border-[#717171] rounded-xl bg-[#223494]">
            <div className="flex justify-between p-6 border-b border-[#717171]">
              <h2 className="text-white text-3xl w-[370px] leading-[130%]">
                Comprehensive <br />
                Risk Management
              </h2>
              <p className="text-white text-lg max-w-[770px] mx-auto">
                At Prime Idea, effective risk management is key to a solid
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
              <ul className="flex justify-between">
                <li className="text-white w-[18%]">
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
                  <p className="text-lg font-light">
                    <strong className="font-medium">
                      Analyze Vulnerabilities:
                    </strong>{" "}
                    We help you identify the risks that could impact your
                    assets, from market fluctuations to life events.
                  </p>
                </li>
                <li className="text-white w-[18%]">
                  <Image
                    src="/images/insurance/risk-management/2.png"
                    width={61}
                    height={61}
                    alt="Tailored Insurance Solutions"
                    className="mb-4"
                  />
                  <h3 className="mb-3 text-lg font-semibold leading-[130%]">
                    Tailored Insurance Solutions
                  </h3>
                  <p className="text-lg font-light">
                    <strong className="font-medium">
                      Customized Coverage:
                    </strong>{" "}
                    We offer insurance plans tailored to your unique needs,
                    ensuring comprehensive protection against identified risks.
                  </p>
                </li>
                <li className="text-white w-[18%]">
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
                  <p className="text-lg font-light">
                    <strong className="font-medium">
                      Strategic Safeguards:
                    </strong>{" "}
                    Implement strategies that minimize financial loss in case of
                    unexpected events, such as critical illness, accidents, or
                    natural disasters.
                  </p>
                </li>
                <li className="text-white w-[18%]">
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
                  <p className="text-lg font-light">
                    <strong className="font-medium">Regular Reviews:</strong> We
                    continuously assess and adjust your coverage as your
                    financial situation and life circumstances evolve.
                  </p>
                </li>
                <li className="text-white w-[18%]">
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
                  <p className="text-lg font-light">
                    <strong className="font-medium">Preparedness:</strong> In
                    the event of a crisis, our team is ready to assist with
                    claim processing and financial guidance to help you navigate
                    the aftermath.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesOfInsurance;
