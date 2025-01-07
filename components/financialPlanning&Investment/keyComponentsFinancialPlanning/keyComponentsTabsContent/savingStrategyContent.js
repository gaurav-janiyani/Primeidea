import Image from "next/image";

const SavingStrategyContent = () => {
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row p-6 border-b border-[#FFFFFF40]">
        <h2 className="text-white text-2xl xl:text-3xl text-center lg:text-left w-full lg:w-[370px] leading-[130%] mb-4">
          Saving Strategies
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
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%] text-[#ffffff]">
              Emergency  <br /> Fund
            </h3>
            <p className="text-base xl:text-lg font-normal text-[#ffffff]">
              Build a financial cushion of 3-6 months of living expenses to cover unforeseen emergencies like job loss or medical expenses.
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
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%] text-[#ffffff]">
            Automatic <br /> Savings
            </h3>
            <p className="text-base xl:text-lg font-normal text-[#ffffff]">
              Automate monthly transfers to a savings account to ensure consistent and disciplined contributions toward achieving your financial goals.
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
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%] text-[#ffffff]">
              High-Interest <br /> Savings Accounts
            </h3>
            <p className="text-base xl:text-lg font-normal text-[#ffffff]">
              Use accounts offering competitive interest rates to maximize returns on your emergency funds or other short-term savings.
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
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%] text-[#ffffff]">
              Saving for  <br /> Specific Goals
            </h3>
            <p className="text-base xl:text-lg font-normal text-[#ffffff]">
              Identify future needs, such as vacations, education, or homeownership, and allocate dedicated funds to achieve these objectives.
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
            <h3 className="mb-3 text-lg xl:text-xl font-semibold leading-[130%] text-[#ffffff]">
              Cutting <br/> Expenses
            </h3>
            <p className="text-base xl:text-lg font-normal text-[#ffffff]">
              Track spending patterns, identify non-essential expenses, and create a realistic budget to free up money for savings or investments.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SavingStrategyContent;
