import Image from "next/image";

const ExpertiseSection = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto px-2 py-16">
        <div className="flex justify-between">
          <div className="w-[50%]">
            <h2 className="text-[32px] font-light mb-1 text-[#04102A]">
              Our Expertise
            </h2>
            <p className="text-lg font-light">
              Prime Idea offers a comprehensive range of wealth management
              services designed to meet your unique financial needs. From
              personalized financial planning to strategic investment advisory,
              we provide the expertise you need to achieve your financial goals.
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
      <div className="max-w-[1320px] mx-auto px-2">
        <h2 className="text-[32px] font-light mb-2 text-black">Services</h2>
        <div className="flex mx-[-12px]">
          <div className="px-[12px] w-[20%]">
            <div className="shadow-[_0_0_4px_0_#00000040] bg-white rounded-[20px] p-4 h-full">
              <Image
                src="/images/landing/icons/financial-planning.png"
                width={87}
                height={103}
                alt="Financial Planning"
                className="w-[85px] h-[100px] object-contain my-4"
              />
              <h2 className="text-xl font-bold mb-2">Financial Planning</h2>
              <p className="font-normal text-black">
                Tailored strategies that align with your unique financial goals.
                Prime Idea creates detailed plans to guide you toward long-term
                success.
              </p>
            </div>
          </div>
          <div className="px-[12px] w-[20%]">
            <div className="shadow-[_0_0_4px_0_#00000040] bg-white rounded-[20px] p-4 h-full">
              <Image
                src="/images/landing/icons/investment-advisory.png"
                width={100}
                height={103}
                alt="Investment Advisory"
                className="w-[85px] h-[100px] object-contain my-4"
              />
              <h2 className="text-xl font-bold mb-2">Investment Advisory</h2>
              <p className="font-normal text-black">
                We use research-driven strategies to maximize returns and
                minimize risk, keeping your portfolio optimized for growth.
              </p>
            </div>
          </div>
          <div className="px-[12px] w-[20%]">
            <div className="shadow-[_0_0_4px_0_#00000040] bg-white rounded-[20px] p-4 h-full">
              <Image
                src="/images/landing/icons/wealth-preservation.png"
                width={109}
                height={116}
                alt="Wealth preservation"
                className="w-[85px] h-[100px] object-contain my-4"
              />
              <h2 className="text-xl font-bold mb-2">Welath Preservation</h2>
              <p className="font-normal text-black">
                We protect your wealth for future generations with strategies
                that guard against market volatility and economic changes.
              </p>
            </div>
          </div>

          <div className="px-[12px] w-[20%]">
            <div className="shadow-[_0_0_4px_0_#00000040] bg-white rounded-[20px] p-4 h-full">
              <Image
                src="/images/landing/icons/risk-management.png"
                width={94}
                height={103}
                alt="Risk Management"
                className="w-[85px] h-[100px] object-contain my-4"
              />
              <h2 className="text-xl font-bold mb-2">Risk Management</h2>
              <p className="font-normal text-black">
                We identify and manage risks to secure your financial future,
                ensuring steady growth of your wealth.
              </p>
            </div>
          </div>

          <div className="px-[12px] w-[20%]">
            <div className="shadow-[_0_0_4px_0_#00000040] bg-white rounded-[20px] p-4 h-full">
              <Image
                src="/images/landing/icons/retirement-planning.png"
                width={94}
                height={103}
                alt="Retirement Planning"
                className="w-[85px] h-[100px] object-contain my-4"
              />
              <h2 className="text-xl font-bold mb-2">Retirement Planning</h2>
              <p className="font-normal text-black">
                We design retirement plans for a comfortable, secure future,
                providing steady income and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertiseSection;
