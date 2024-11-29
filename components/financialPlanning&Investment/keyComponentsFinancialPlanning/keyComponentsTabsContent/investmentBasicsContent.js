import Image from "next/image";

const InvestmentBasicsContent = () => {
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row p-6 border-b border-[#FFFFFF40]">
        <h2 className="text-white text-2xl xl:text-3xl text-center lg:text-left w-full lg:w-[370px] leading-[130%] mb-4">
          Investment Basics
        </h2>
        <p className="text-white text-base xl:text-lg w-full lg:max-w-[600px] xl:max-w-[770px] text-center lg:text-left mx-auto">
          Budgeting is essential for effective financial planning. By tracking
          income and categorizing expenses, individuals and businesses can
          understand their financial health, identify savings opportunities, and
          make informed spending decisions.
        </p>
      </div>
      <div className="p-6">
        <p className="text-white text-xl mb-6 font-semibold">
          Key benefits of budgeting include:
        </p>
        <ul className="flex justify-start lg:justify-between flex-wrap lg:flex-nowrap">
          <li className="text-white max-w-[300px] md:max-w-[unset] w-full sm:w-[50%] md:w-[30%] mb-4 lg:mb-0 lg:w-[18%] xl:w-[17%] py-4 sm:p-4">
            <Image
              src="/images/financial-planning/icons/track-income-expense.png"
              width={78}
              height={78}
              alt="Identifying Potential Risks"
              className="mb-4"
            />
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%]">
              Diversification <br /> Investment
            </h3>
            <p className="text-base xl:text-lg font-normal">
              Invest in a mix of assets like stocks, bonds, real estate, and commodities to reduce overall portfolio risk and volatility.
            </p>
          </li>
          <li className="text-white max-w-[300px] md:max-w-[unset] w-full sm:w-[50%] md:w-[30%] mb-4 lg:mb-0 lg:w-[18%] xl:w-[17%] py-4 sm:p-4 lg:pl-4 lg:border-l lg:border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/categorised-spending.png"
              width={78}
              height={78}
              alt="Tailored Insurance Solutions"
              className="mb-4"
            />
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%]">
              Asset <br /> Allocation
            </h3>
            <p className="text-base xl:text-lg font-normal">
              Develop a strategic distribution of assets based on financial goals, time horizon, and risk tolerance to maximize returns.
            </p>
          </li>
          <li className="text-white max-w-[300px] md:max-w-[unset] w-full sm:w-[50%] md:w-[30%] mb-4 lg:mb-0 lg:w-[18%] xl:w-[17%] py-4 sm:p-4 lg:pl-4 lg:border-l lg:border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/set-realistic.png"
              width={78}
              height={78}
              alt="Mitigating Financial Loss"
              className="mb-4"
            />
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%]">
              Compound <br /> Interest
            </h3>
            <p className="text-base xl:text-lg font-normal">
              Reinvest earnings to let your money grow exponentially over time, particularly in long-term investment vehicles like mutual funds.
            </p>
          </li>
          <li className="text-white max-w-[300px] md:max-w-[unset] w-full sm:w-[50%] md:w-[30%] mb-4 lg:mb-0 lg:w-[18%] xl:w-[17%] py-4 sm:p-4 lg:pl-4 lg:border-l lg:border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/adjust-regulary.png"
              width={78}
              height={78}
              alt="Ongoing Risk Assessment"
              className="mb-4"
            />
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%]">
              Risk vs. <br /> Return
            </h3>
            <p className="text-base xl:text-lg font-normal">
              Weigh the potential for higher returns against the likelihood of financial loss to make informed investment decisions.
            </p>
          </li>
          <li className="text-white max-w-[300px] md:max-w-[unset] w-full sm:w-[50%] md:w-[30%] mb-4 lg:mb-0 lg:w-[18%] xl:w-[17%] py-4 sm:p-4 lg:pl-4 lg:border-l lg:border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/review-consistently.png"
              width={78}
              height={78}
              alt="Crisis Management"
              className="mb-4"
            />
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%]">
              Long-Term <br /> Focus
            </h3>
            <p className="text-base xl:text-lg font-normal">
              Commit to staying invested through market fluctuations, focusing on wealth accumulation and financial independence over decades.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InvestmentBasicsContent;
