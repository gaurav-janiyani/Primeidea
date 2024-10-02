"use client";
import { useState } from "react";
import Image from "next/image";
import BudgetingContent from "./keyComponentsTabsContent/budgetingContent";
import SavingStrategyContent from "./keyComponentsTabsContent/savingStrategyContent";
import InvestmentBasicsContent from "./keyComponentsTabsContent/investmentBasicsContent";
import RiskManagementContent from "./keyComponentsTabsContent/riskmanagementContent";

const KeyComponentsOfFinancialPlanning = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index === activeTab ? -1 : index);
  };
  return (
    <section>
      <div className="py-16 bg-[#293C7D] bg-[url('/images/financial-planning/key-component-bg.png')] bg-no-repeat bg-cover bg-center">
        <div className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-2">
          <h2 className="text-3xl text-white mb-8 text-center font-medium">
            Key Components for Financial Planning
          </h2>
          <ul className="flex justify-between mb-5">
            <li
              className={`w-1/2 h-[54px] text-2xl px-4 py-2 text-center text-white border-b cursor-pointer hover:font-bold ${
                activeTab === 0 ? "font-bold border-b-[#fff]" : "border-b-transparent"
              }`}
              onClick={() => handleTabClick(0)}
            >
              Budgeting
            </li>
            <li
              className={`w-1/2 h-[54px] text-2xl px-4 py-2 text-center text-white border-b cursor-pointer hover:font-bold ${
                activeTab === 1 ? "font-bold border-b-[#fff]" : "border-b-transparent"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Savings Strategies
            </li>
            <li
              className={`w-1/2 h-[54px] text-2xl px-4 py-2 text-center text-white border-b cursor-pointer hover:font-bold ${
                activeTab === 2 ? "font-bold border-b-[#fff]" : "border-b-transparent"
              }`}
              onClick={() => handleTabClick(2)}
            >
              Investment Basics
            </li>
            <li
              className={`w-1/2 h-[54px] text-2xl px-4 py-2 text-center text-white border-b cursor-pointer hover:font-bold ${
                activeTab === 3 ? "font-bold border-b-[#fff]" : "border-b-transparent"
              }`}
              onClick={() => handleTabClick(3)}
            >
              Risk Management
            </li>
          </ul>
          <div className={`border border-[#717171] rounded-xl bg-[#479AD2]`}>
            {activeTab === 0 && <BudgetingContent />}
            {activeTab === 1 && <SavingStrategyContent />}
            {activeTab === 2 && <InvestmentBasicsContent />}
            {activeTab === 3 && <RiskManagementContent />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyComponentsOfFinancialPlanning;
