import Footer from "@/components/footer";

import Header from "@/components/header";
import MainHomeSection from "@/components/home";
import Image from "next/image";

export default function Home() {
  const people = [
    {
      name: "Retirement Calculator",
      content:
        "Estimates retirement savings needed based on current savings, contributions, and retirement age.",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Investment Calculators",
      content:
        "Estimates retirement savings needed based on current savings, contributions, and retirement age.",
      imageUrl: "/images/financial-planning/finance-calculators.png",
    },
    {
      name: "SIP Calculator",
      content:
        "Estimates retirement savings needed based on current savings, contributions, and retirement age.",
      imageUrl: "/images/financial-planning/finance-calculators.png",
    },
    {
      name: "Goal Calculator",
      content:
        "Estimates retirement savings needed based on current savings, contributions, and retirement age.",
      imageUrl: "/images/financial-planning/finance-calculators.png",
    },
  ];
  return (
    <div>
      {/* <MainHomeSection /> */}
      <section>
        <div className="banner-section relative h-[100vh]">
          <div className="image-section h-[100vh] w-full">
            <Image
              src="/images/banner.jpeg"
              width={1920}
              height={1280}
              alt="Banner"
              className="h-full w-full object-cover"
            />
          </div>
          <Header />
        </div>
      </section>

      <section>
        <div className="py-16">
          <div className="container mx-auto">
            <h2 className="text-center text-3xl leading-[130%] font-normal mb-8">
              Types of <br /> Financial Planning
            </h2>
            <ul className="flex justify-between border-y py-2 border-[#C5C5C7] ">
              <li className="w-[20%] pt-3 pb-12 px-3 border-r border-[#C5C5C7]">
                <span className="text-[12px] mb-4 inline-block font-bold">
                  01
                </span>
                <h3 className="text-xl text-[#3A414D] font-bold mb-4">
                  Savings
                </h3>
                <p className="text-sm font-light mb-8 max-w-[70%] text-[#3A414D]">
                  Setting aside money for future needs and emergencies.
                </p>
                <a href="" className="text-[13px] font-semibold text-[#054D73]">
                  Read More
                </a>
              </li>
              <li className="w-[20%] pt-3 pb-12 px-3 border-r border-[#C5C5C7]">
                <span className="text-[12px] mb-4 inline-block font-bold">
                  02
                </span>
                <h3 className="text-xl text-[#3A414D] font-bold mb-4">
                  Investments
                </h3>
                <p className="text-sm font-light mb-8 max-w-[70%] text-[#3A414D]">
                  Setting aside money for future needs and emergencies.
                </p>
                <a href="" className="text-[13px] font-semibold text-[#054D73]">
                  Read More
                </a>
              </li>
              <li className="w-[20%] pt-3 pb-12 px-3 border-r border-[#C5C5C7]">
                <span className="text-[12px] mb-4 inline-block font-bold">
                  03
                </span>
                <h3 className="text-xl text-[#3A414D] font-bold mb-4">
                  Debt Management
                </h3>
                <p className="text-sm font-light mb-8 max-w-[70%] text-[#3A414D]">
                  Setting aside money for future needs and emergencies.
                </p>
                <a href="" className="text-[13px] font-semibold text-[#054D73]">
                  Read More
                </a>
              </li>
              <li className="w-[20%] pt-3 pb-12 px-3 border-r border-[#C5C5C7]">
                <span className="text-[12px] mb-4 inline-block font-bold">
                  04
                </span>
                <h3 className="text-xl text-[#3A414D] font-bold mb-4">
                  Risk Management
                </h3>
                <p className="text-sm font-light mb-8 max-w-[70%] text-[#3A414D]">
                  Setting aside money for future needs and emergencies.
                </p>
                <a href="" className="text-[13px] font-semibold text-[#054D73]">
                  Read More
                </a>
              </li>
              <li className="w-[20%] pt-3 pb-12 px-3 border-r border-[#C5C5C7] last:border-r-0">
                <span className="text-[12px] mb-4 inline-block font-bold">
                  05
                </span>
                <h3 className="text-xl text-[#3A414D] font-bold mb-4">
                  Estate Planning
                </h3>
                <p className="text-sm font-light mb-8 max-w-[70%] text-[#3A414D]">
                  Setting aside money for future needs and emergencies.
                </p>
                <a href="" className="text-[13px] font-semibold text-[#054D73]">
                  Read More
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="pb-16">
          <div className="container mx-auto">
            <h2 className="text-center text-3xl leading-[130%] font-normal mb-8">
              We work for better growing <br /> result step by step
            </h2>
            <ul className="flex justify-between py-2">
              <li className="w-[25%] p-4">
                <span className="text-[12px] mb-5 inline-block font-bold">
                  Step-01
                </span>
                <h3 className="text-[24px] leading-[120%] text-[#04102A] font-medium mb-4 min-h-[58px]">
                  Getting to know <br /> you
                </h3>
                <p className="text-sm font-normal text-[#04102A]">
                  Investment is personal, so we begin by understanding you, your
                  goals, and your financial situation, including all relevant
                  details.
                </p>
              </li>
              <li className="w-[25%] p-4">
                <span className="text-[12px] mb-5 inline-block font-bold">
                  Step-02
                </span>
                <h3 className="text-[24px] leading-[120%] text-[#04102A] font-medium mb-4 min-h-[58px]">
                  Income & Expense <br /> Analysis
                </h3>
                <p className="text-sm font-normal text-[#04102A]">
                  Investment is personal, so we begin by understanding you, your
                  goals, and your financial situation, including all relevant
                  details.
                </p>
              </li>
              <li className="w-[25%] p-4">
                <span className="text-[12px] mb-5 inline-block font-bold">
                  Step-03
                </span>
                <h3 className="text-[24px] leading-[120%] text-[#04102A] font-medium mb-4 min-h-[58px]">
                  Risk <br /> Management
                </h3>
                <p className="text-sm font-normal text-[#04102A]">
                  Investment is personal, so we begin by understanding you, your
                  goals, and your financial situation, including all relevant
                  details.
                </p>
              </li>
              <li className="w-[25%] p-4">
                <span className="text-[12px] mb-5 inline-block font-bold">
                  Step-04
                </span>
                <h3 className="text-[24px] leading-[120%] text-[#04102A] font-medium mb-4 min-h-[58px]">
                  Networth
                </h3>
                <p className="text-sm font-normal text-[#04102A]">
                  Investment is personal, so we begin by understanding you, your
                  goals, and your financial situation, including all relevant
                  details.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#1995AD] py-12">
          <div className="container mx-auto">
            <div className="flex justify-between">
              <div className="max-w-[72%]">
                <div className="w-full flex justify-between">
                  <div className="max-w-[40%]">
                    <h2 className="font-normal text-white text-4xl mb-6 leading-[120%]">
                      Here&#39;s what your
                      <span className="font-semibold inline-block">
                        personalized <br /> financial report
                      </span>{" "}
                      will look like
                    </h2>
                    <ul className="flex flex-col">
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-extrabold hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">Assumptions</li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">Net Worth Analysis</li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">Prime Idea Recommends</li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">Goal Analysis</li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">Retirement Planning</li>
                    </ul>
                  </div>
                  <div className="max-w-[60%]">
                    
                  </div>
                </div>
              </div>
              <div className="max-w-[28%]"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] flex justify-between">
          <div className="max-w-[460px]">
            <Image
              src="/images/financial-planning/finance-calculators.png"
              width={170}
              height={98}
              alt="Financial Calculators"
            />
            <h2 className="text-xl font-normal tracking-tight my-6 text-[#04102A] sm:text-3xl">
              Financial Calculators
            </h2>
            <p className="mb-3 text-base font-semibold leading-6 text-[#4D4D4D]">
              Our easy-to-use financial calculators help you make informed
              decisions about your future.
            </p>
            <p className="mb-3 text-base font-semibold leading-6 text-[#4D4D4D]">
              Quickly and accurately plan for retirement, evaluate investments,
              calculate mortgage payments, estimate taxes, and project SIP
              returns.
            </p>
            <p className="mb-3 text-base font-semibold leading-6 text-[#4D4D4D]">
              Empower yourself with the insights needed to achieve your
              financial goals.
            </p>
          </div>
          <ul
            role="list"
            className="max-w-[45%] w-full flex justify-between flex-wrap bg-[#F6F6F6] rounded-[26px]"
          >
            {people.map((person) => (
              <li
                className="px-6 py-8 w-[50%] odd:border-r odd:border-[#D9D9D9] first:border-b first:border-[#D9D9D9] [&:nth-child(2)]:border-b [&:nth-child(2)]:border-[#D9D9D9]"
                key={person.name}
              >
                <div className="">
                  <img
                    alt=""
                    src="/images/financial-planning/finance-calculators.png"
                    className="h-16 w-16"
                  />
                  <div>
                    <h3 className="max-w-[80px] text-[23px] font-medium leading-[120%] tracking-tight text-[#4D4D4D] my-4">
                      {person.name}
                    </h3>
                    <p className="text-base font-light leading-6 text-[#4D4D4D]">
                      {person.content}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
