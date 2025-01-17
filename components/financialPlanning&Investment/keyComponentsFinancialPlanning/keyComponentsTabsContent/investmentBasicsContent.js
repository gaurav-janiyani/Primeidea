import Image from "next/image";

const InvestmentBasicsContent = () => {
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row p-6 border-b border-[#FFFFFF40]">
        <h2 className="text-white text-2xl xl:text-3xl text-center lg:text-left w-full lg:w-[370px] leading-[130%] mb-4">
          Investment Basics
        </h2>
        <p className="text-white text-base xl:text-lg w-full lg:max-w-[600px] xl:max-w-[770px] text-center lg:text-left mx-auto">
          Investing is the process of allocating money with the expectation of generating a return, whether it&apos;s in the form of income or capital appreciation. It&apos;s crucial component of financial planning that helps individuals and businesses achieve their long-term financial goals.
        </p>
      </div>
      <div className="p-6">
        <p className="text-white text-xl mb-6 font-semibold">
          Key benefits of budgeting include:
        </p>
        <ul className="flex justify-start lg:justify-between flex-wrap lg:flex-nowrap">
          <li className="text-white max-w-[300px] md:max-w-[unset] w-full sm:w-[50%] md:w-[30%] mb-4 lg:mb-0 lg:w-[18%] xl:w-[17%] py-4 sm:p-4">
            <Image
              src="/images/financial-planning/icons/stocks.png"
              width={78}
              height={78}
              alt="Stocks"
              className="mb-4"
            />
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%] text-[#ffffff]">
              Stocks
            </h3>
            <p className="text-base xl:text-lg font-normal text-[#ffffff]">
              Begin by meticulously recording all sources of income and expenditure to gain a comprehensive view of your financial situation.
            </p>
          </li>
          <li className="text-white max-w-[300px] md:max-w-[unset] w-full sm:w-[50%] md:w-[30%] mb-4 lg:mb-0 lg:w-[18%] xl:w-[17%] py-4 sm:p-4 lg:pl-4 lg:border-l lg:border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/bond.png"
              width={78}
              height={78}
              alt="Bond"
              className="mb-4"
            />
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%] text-[#ffffff]">
              Bond
            </h3>
            <p className="text-base xl:text-lg font-normal text-[#ffffff]">
              Organize your expenses into categories like housing, transportation, and entertainment to spot areas for adjustments.
            </p>
          </li>
          <li className="text-white max-w-[300px] md:max-w-[unset] w-full sm:w-[50%] md:w-[30%] mb-4 lg:mb-0 lg:w-[18%] xl:w-[17%] py-4 sm:p-4 lg:pl-4 lg:border-l lg:border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/mutual-funds.png"
              width={78}
              height={78}
              alt="Mutual Funds"
              className="mb-4"
            />
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%] text-[#ffffff]">
              Mutual Funds
            </h3>
            <p className="text-base xl:text-lg font-normal text-[#ffffff]">
              Define clear and achievable financial objectives that align with your income and expenses, ensuring they are measurable and time-bound.
            </p>
          </li>
          <li className="text-white max-w-[300px] md:max-w-[unset] w-full sm:w-[50%] md:w-[30%] mb-4 lg:mb-0 lg:w-[18%] xl:w-[17%] py-4 sm:p-4 lg:pl-4 lg:border-l lg:border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/real-estate.png"
              width={78}
              height={78}
              alt="Real Estate"
              className="mb-4"
            />
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%] text-[#ffffff]">
              Real Estate
            </h3>
            <p className="text-base xl:text-lg font-normal text-[#ffffff]">
              Flexibility is key; be prepared to modify your budget as circumstances change, allowing for ongoing optimisation and improvement.
            </p>
          </li>
          <li className="text-white max-w-[300px] md:max-w-[unset] w-full sm:w-[50%] md:w-[30%] mb-4 lg:mb-0 lg:w-[18%] xl:w-[17%] py-4 sm:p-4 lg:pl-4 lg:border-l lg:border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/retirement.png"
              width={78}
              height={78}
              alt="Retirement Account"
              className="mb-4"
            />
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%] text-[#ffffff]">
              Retirement Account
            </h3>
            <p className="text-base xl:text-lg font-normal text-[#ffffff]">
              Regularly assess your budget to track progress, evaluate adherence to financial targets, and make informed decisions for future adjustments.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InvestmentBasicsContent;
