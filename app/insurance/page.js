import BannerSection from "@/components/bannerSection";
import Header from "@/components/header";
import InsightsSection from "@/components/insightsSection";
import Image from "next/image";

const InsurancePage = () => {
  return (
    <div>
      <BannerSection 
        mainBannerImage={""}
        mainTitle={"Protect Your Family's Future with Confidence"}
        mainSubTitle={"Expert Assistance in Navigating Insurance Claims and Ensuring Financial Security"}
        mainLinkTitle={"Get Expert Guidance Now"}
        mainLink={""}
        subSectionContent={"Prime Idea creates financial plans that fuel your ambitions today and secure your success for tomorrow, whether you’re starting out or scaling up."}
        subSectionTitle1={"Trusted By Clients"}
        subSectionSubTitle1={"80+"}
        subSectionTitle2={"Years of expertise"}
        subSectionSubTitle2={"12+"}
        subSectionTitle3={"Client Satisfaction"}
        subSectionSubTitle3={"92+"}
      />

      <section>
        <div className="bg-[#F6FDFF] py-16">
          <div className="max-w-[1320px] mx-auto px-2">
            <div className="flex justify-between">
              <div className="w-[50%]">
                <h2 className="text-[32px] font-light mb-1 text-[#04102A]">
                  Insurance Solutions for Financial Security
                </h2>
                <p className="text-lg font-light">
                  At Prime Idea, we understand that insurance plays a crucial
                  role in a comprehensive wealth management plan. Our expert
                  insurance solutions are designed to safeguard your wealth,
                  protect your family, and ensure your financial goals are
                  achieved, regardless of life's uncertainties.
                </p>
              </div>
              <div className="w-[50%] flex justify-end items-baseline">
                <Image
                  src="/images/icons/p.png"
                  width={110}
                  height={105}
                  alt="PrimeIdea"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F6FDFF] pt-8 pb-16">
          <div className="max-w-[1320px] mx-auto px-2">
            <div className="max-w-[652px]">
              <h2 className="text-[32px] font-light mb-1 text-[#04102A]">
                The Role of Insurance in Wealth Management
              </h2>
              <p className="text-lg font-light mb-4">
                Insurance is more than just a safeguard; it's a key components
                in managing and preserving your wealth, Here's why it's
                essential
              </p>
            </div>
            <ul className="flex justify-between mx-[-10px]">
              <li className="px-[10px]">
                <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg">
                  <Image
                    src="/images/insurance/wealth-management/image.jpg"
                    width={387}
                    height={159}
                    alt="1"
                  />
                  <h3 className="my-[10px] text-2xl font-bold">
                    Mitigate Risks
                  </h3>
                  <p className="text-lg font-normal">
                    Protect yourself from financial losses due to unforeseen
                    events, ensuring that your wealth remains intact.
                  </p>
                </div>
              </li>
              <li className="px-[10px]">
                <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg">
                  <Image
                    src="/images/insurance/wealth-management/image1.jpg"
                    width={387}
                    height={159}
                    alt="2"
                  />
                  <h3 className="my-[10px] text-2xl font-bold">
                    Preserve Wealth
                  </h3>
                  <p className="text-lg font-normal">
                    Secure your assets and investments, enabling you to continue
                    growing your wealth without interruptions.
                  </p>
                </div>
              </li>
              <li className="px-[10px]">
                <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg">
                  <Image
                    src="/images/insurance/wealth-management/image3.jpg"
                    width={387}
                    height={159}
                    alt="3"
                  />
                  <h3 className="my-[10px] text-2xl font-bold">
                    Gain Peace of Mind
                  </h3>
                  <p className="text-lg font-normal">
                    With comprehensive coverage, you can confidently focus on
                    your financial goals, knowing you’re protected.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

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
                <h4 className="text-white text-lg text-center">
                  Life Insurance
                </h4>
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
                <h4 className="text-white text-lg text-center">
                  Auto Insurance
                </h4>
              </li>
              <li className="border border-[#717171] p-4 rounded-xl bg-[#223494] flex flex-col justify-between items-center w-[15.4%]">
                <Image
                  src="/images/insurance/insurance-type/home-insurance.png"
                  width={122}
                  height={132}
                  alt="Home Insurance"
                  className="object-contain h-full"
                />
                <h4 className="text-white text-lg text-center">
                  Home Insurance
                </h4>
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
                  financial strategy. Insurance isn't just about protection—it's
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
                      ensuring comprehensive protection against identified
                      risks.
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
                      Implement strategies that minimize financial loss in case
                      of unexpected events, such as critical illness, accidents,
                      or natural disasters.
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
                      <strong className="font-medium">Regular Reviews:</strong>{" "}
                      We continuously assess and adjust your coverage as your
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
                      claim processing and financial guidance to help you
                      navigate the aftermath.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#F6FDFF] py-16">
          <div className="max-w-[1320px] mx-auto px-2">
            <div className="flex justify-between">
              <div className="w-[46%]">
                <Image
                  src="/images/insurance/financial-future.png"
                  width={565}
                  height={643}
                  alt="Financial Future"
                  className="w-full"
                />
              </div>
              <div className="w-[50%]">
                <h2 className="text-3xl font-semibold leading-[130%] mb-3">
                  Protecting Your Financial Future <br /> Beyond the Claim
                </h2>
                <p className="text-xl mb-4">
                  Filing an insurance claim is just the first step toward
                  financial protection. At Prime Idea, we believe that how you
                  manage your claim payout is equally crucial. Many people
                  mistakenly misuse or mismanage their funds, leading to
                  long-term financial issues. Here are common pitfalls and how
                  to avoid them.
                </p>
                <ul className="text-lg mb-4 list-disc pl-[20px]">
                  <li className="mb-3">
                    <strong>Misuse of Funds:</strong> Avoid spending on
                    non-essential items; focus on covering the intended loss.
                  </li>
                  <li className="mb-3">
                    <strong>Neglecting Financial Stability:</strong> Prioritize
                    paying off debts and boosting emergency savings with your
                    payout.
                  </li>
                  <li className="mb-3">
                    <strong>Overlooking Future Protection:</strong> Regularly
                    update your insurance coverage to stay protected after a
                    claim.
                  </li>
                  <li className="mb-3">
                    <strong>Ignoring Tax Implications:</strong> Be aware of any
                    tax liabilities associated with your insurance payout.
                  </li>
                  <li className="mb-3">
                    <strong>Improper Reinvestment:</strong> Reinvest your funds
                    wisely to support long-term financial goals.
                  </li>
                </ul>
                <a
                  href=""
                  className="bg-[#479AD2] text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
                >
                  Know More
                  <Image
                    src="/images/icons/arrow-square-right.png"
                    width={21}
                    height={21}
                    alt="Read All"
                    className="ml-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6FDFF]">
        <InsightsSection bgColor="bg-[#F6FDFF]" />
      </section>
    </div>
  );
};

export default InsurancePage;