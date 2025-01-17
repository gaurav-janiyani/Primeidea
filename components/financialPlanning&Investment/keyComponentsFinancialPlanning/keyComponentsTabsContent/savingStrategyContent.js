import Image from "next/image";

const SavingStrategyContent = () => {
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row p-6 border-b border-[#FFFFFF40]">
        <h2 className="text-white text-2xl xl:text-3xl text-center lg:text-left w-full lg:w-[370px] leading-[130%] mb-4">
          Saving Strategies
        </h2>
        <p className="text-white text-base xl:text-lg w-full lg:max-w-[600px] xl:max-w-[770px] text-center lg:text-left mx-auto">
          Savings is the portion of income that remains after expenses are deducted. It&apos;s a fundamental component of financial planning as it serves as a safety net for unforeseen circumstances and a stepping stone for achieving financial goals.
        </p>
      </div>
      <div className="p-6">
        <p className="text-white text-xl mb-6 font-semibold">
          Key benefits of savings include:
        </p>
        <div className="flex justify-start lg:justify-between flex-col md:flex-row">          
          <Image src="/images/financial-planning/icons/savings-benefits.png" width={772} height={450} alt="Savings Benefits" className="object-contain mr-6 w-full max-w-[450px] xl:max-w-[550px] mb-6 lg:mb-0 " />
          <div className="">
            <p className="mt-4 xl:mt-8 mb-4 md:mb-8 xl:mb-14 text-white">
              <strong>Savings: </strong> Allocate a significant portion of income towards savings, emergency funds, investment, and retirement planning to secure financial stability and future goals.
            </p>
            <p className="mt-4 xl:mt-8 mb-4 md:mb-8 xl:mb-14 text-white">
              <strong>Wants: </strong> Discretion spending on non-essential items such as dining out, entertainment & shopping to indulge in personal preferences.
            </p>
            <p className="mt-4 xl:mt-8 mb-4 md:mb-8 xl:mb-14 text-white">
              <strong>Needs: </strong> Essential expenses like rent, utilities & groceries fall under this category to ensure basic living requirement are met.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavingStrategyContent;
