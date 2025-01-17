import Image from "next/image";

const RiskManagementContent = () => {
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row p-6 border-b border-[#FFFFFF40]">
        <h2 className="text-white text-2xl xl:text-3xl text-center lg:text-left w-full lg:w-[370px] leading-[130%] mb-4">
          Risk Management
        </h2>
        <p className="text-white text-base xl:text-lg w-full lg:max-w-[600px] xl:max-w-[770px] text-center lg:text-left mx-auto">
          Risk management is the process of identify, assessing and controlling potential thrreats to your financial well-being. It&apos;s an essential part of financial planning that helps protect your assets and achieve your financial goals. 
        </p>
      </div>
      <div className="p-6">
        <p className="text-white text-xl mb-6 font-semibold">
          Key benefits of budgeting include:
        </p>
      <div className="flex justify-start lg:justify-between flex-col md:flex-row-reverse">          
        <Image src="/images/financial-planning/icons/risk-management.png" width={500} height={218} alt="Risk Management" className="object-contain mr-6 w-full max-w-[450px] xl:max-w-[500px] mb-6 lg:mb-0 " />
        <ul className="max-w-[600px] list-disc pl-4">
          <li className="mb-3 text-white text-[18px]">
            <strong>Identifying potential risks: </strong> Recognizing threats such as market fluctuations, economic downturns, health issues and natural disasters.
          </li>
          <li className="mb-3 text-white text-[18px]">
            <strong>Assessing the impact of risks: </strong> Evaluting the potential financial consequences of each risk.
          </li>
          <li className="mb-3 text-white text-[18px]">
            <strong>Implementing risk mitigation strategies: </strong> Developing plans to reduce or eliminate risks, such as insurance, Diversification and emergency funds.
          </li>
          <li className="mb-3 text-white text-[18px]">
            <strong>Monitoring and reviewing: </strong> Continiuously assessing your risk exposure and adjusting strategies as needed.
          </li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default RiskManagementContent;

