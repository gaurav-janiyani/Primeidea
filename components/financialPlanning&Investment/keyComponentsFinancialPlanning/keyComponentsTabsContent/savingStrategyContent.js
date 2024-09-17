import Image from "next/image";

const SavingStrategyContent = () => {
  return (
    <>
      <div className="flex justify-between p-6 border-b border-[#FFFFFF40]">
        <h2 className="text-white text-3xl w-[370px] leading-[130%]">
          Savings Strategies
        </h2>
        <p className="text-white text-lg max-w-[770px] mx-auto">
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
        <ul className="flex justify-between">
          <li className="text-white w-[17%]">
            <Image
              src="/images/financial-planning/icons/track-income-expense.png"
              width={78}
              height={78}
              alt="Identifying Potential Risks"
              className="mb-4"
            />
            <h3 className="mb-3 text-xl font-semibold leading-[130%]">
              Track Income & <br /> Expense
            </h3>
            <p className="text-lg font-normal">
              Begin by meticulously recording all sources of income and
              expenditure to gain a comprehensive view of your financial
              situation.
            </p>
          </li>
          <li className="text-white w-[17%] pl-4 border-l border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/categorised-spending.png"
              width={78}
              height={78}
              alt="Tailored Insurance Solutions"
              className="mb-4"
            />
            <h3 className="mb-3 text-xl font-semibold leading-[130%]">
              Categorised <br /> Spending
            </h3>
            <p className="text-lg font-normal">
              Organize your expenses into categories like housing,
              transportation, and entertainment to spot areas for adjustment.
            </p>
          </li>
          <li className="text-white w-[17%] pl-4 border-l border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/set-realistic.png"
              width={78}
              height={78}
              alt="Mitigating Financial Loss"
              className="mb-4"
            />
            <h3 className="mb-3 text-xl font-semibold leading-[130%]">
              Set Realistic <br /> Goal
            </h3>
            <p className="text-lg font-normal">
              Define clear and achievable financial objectives that align with
              your income and expenses, ensuring they are measurable and
              time-bound.
            </p>
          </li>
          <li className="text-white w-[17%] pl-4 border-l border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/adjust-regulary.png"
              width={78}
              height={78}
              alt="Ongoing Risk Assessment"
              className="mb-4"
            />
            <h3 className="mb-3 text-xl font-semibold leading-[130%]">
              Adjust <br /> Regulary
            </h3>
            <p className="text-lg font-normal">
              Flexibility is key; be prepared to modify your budget as
              circumstances change, allowing for ongoing optimisation and
              improvement.
            </p>
          </li>
          <li className="text-white w-[17%] pl-4 border-l border-l-[#fff]">
            <Image
              src="/images/financial-planning/icons/review-consistently.png"
              width={78}
              height={78}
              alt="Crisis Management"
              className="mb-4"
            />
            <h3 className="mb-3 text-xl font-semibold leading-[130%]">
              Review <br /> Consistently
            </h3>
            <p className="text-lg font-normal">
              Regularly assess your budget to track progress, evaluate adherence
              to financial targets, and make informed decisions for future
              adjustments.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SavingStrategyContent;
