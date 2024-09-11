import ClientTestimonial from "@/components/clientTestimonial";
import Footer from "@/components/footer";
import Header from "@/components/header";
import InsightsSection from "@/components/insightsSection";
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
      <section>
        <div className="banner-section relative h-[100vh]">
          <div className="image-section h-[100vh] w-full">
            <Image
              src="/images/home/banner.png"
              width={1920}
              height={1280}
              alt="Banner"
              className="h-full w-full object-cover"
            />
          </div>
          <Header />
        </div>
        <div className="bg-[#293C7D] py-10">
          <div className="mx-auto max-w-[1320px] px-2">
            <div className="flex justify-between">
              <div className="w-[45%]">
                <p className="text-white text-xl max-w-[500px]">
                  Prime Idea creates financial plans that fuel your ambitions
                  today and secure your success for tomorrow, whether you’re
                  starting out or scaling up.
                </p>
              </div>
              <div className="w-[55%] flex justify-between">
                <div className="flex flex-col	items-end px-2">
                  <span className="text-white text-[20px] font-bold">
                    Trusted By Clients
                  </span>
                  <h3 className="text-5xl font-extrabold mt-2 text-[#FFC300]">
                    80+
                  </h3>
                </div>
                <div className="flex flex-col	items-end px-2">
                  <span className="text-white text-[20px] font-bold">
                    Years of expertise
                  </span>
                  <h3 className="text-5xl font-extrabold mt-2 text-[#FFC300]">
                    12+
                  </h3>
                </div>
                <div className="flex flex-col	items-end px-2">
                  <span className="text-white text-[20px] font-bold">
                    Client Satisfaction
                  </span>
                  <h3 className="text-5xl font-extrabold mt-2 text-[#FFC300]">
                    92+
                  </h3>
                </div>
              </div>
            </div>
          </div>
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
        <div className="bg-[#1995AD] pt-12">
          <div className="container mx-auto">
            <div className="flex justify-between items-end">
              <div className="max-w-[72%]">
                <div className="w-full flex justify-between">
                  <div className="max-w-[45%] w-full">
                    <h2 className="font-normal text-white text-[42px] mb-[40px] leading-[120%]">
                      Here&#39;s what your
                      <span className="font-semibold block">
                        personalized <br /> financial report
                      </span>{" "}
                      will look like
                    </h2>
                    <ul className="flex flex-col">
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-extrabold hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                        Assumptions
                      </li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                        Net Worth Analysis
                      </li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                        Prime Idea Recommends
                      </li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                        Goal Analysis
                      </li>
                      <li className="w-full text-white px-6 py-4 text-xl cursor-pointer font-medium hover:shadow-[inset_0px_0px_6.641px_0px_rgba(0,0,0,0.25)]">
                        Retirement Planning
                      </li>
                    </ul>
                  </div>
                  <div className="max-w-[55%]">
                    <div className="mt-[80px] mb-[-130px] ml-[-20px]">
                      <Image
                        src="/images/financial-planning/financial-planning-report-tab.png"
                        alt="Financial Planning"
                        width={615}
                        height={771}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[28%]">
                <Image
                  src="/images/financial-planning/financial-advisor-people.png"
                  alt="Finacial Advisor"
                  width={477}
                  height={496}
                  className="w-full flex items-end"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-20 sm:pt-48 sm:pb-28">
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
                    className="h-16"
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

      <InsightsSection />
      {/* <div className="py-6 sm:py-12">
        <div className="border-b border-b-[#222222]">
          <div className="max-w-[1320px] mx-auto px-2 ">
            <div className="flex">
              <div className="w-[38%] pt-4 pr-4">
                <h2 className="text-3xl font-medium mb-5">
                  Insights & Innovations
                </h2>
                <p className="text-lg mb-6">
                  Stay ahead with our latest articles on financial trends,
                  investment strategies, and wealth management tips. Discover
                  insights and strategies to keep your financial game strong and
                  up-to-date.
                </p>
                <a
                  href=""
                  className="bg-[#293C7D] text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
                >
                  Read All
                  <Image
                    src="/images/icons/arrow-square-right.png"
                    width={21}
                    height={21}
                    alt="Read All"
                    className="ml-2"
                  />
                </a>

                <Image
                  src="/images/home/insights/insights.png"
                  width={320}
                  height={450}
                  alt="Insights & Innovations"
                  className="mx-auto mt-6"
                />
              </div>
              <div className="w-[62%] border-l border-l-[#222222]">
                <ul className="">
                  <li className="border-b border-b-[#222222] pb-4 pt-4 pl-8">
                    <div className="flex ">
                      <div className="w-[20%] max-w-[132px] mr-4">
                        <Image
                          src="/images/home/insights/1.png"
                          width={132}
                          height={132}
                          alt="1"
                        />
                        <h3 className="flex flex-col justify-center items-center mt-3 leading-[100%]">
                          Writtern by <span className="text-xl font-bold">Prime Idea</span>
                        </h3>
                      </div>
                      <div className="w-[70%]">
                        <div className="top-section flex items-center ">
                          <div className="bg-[#BCE4FF] text-[#000] px-3 py-1 rounded-md font-normal">
                            Retirement Planning{" "}
                          </div>{" "}
                          <span className="w-[16px] h-[2px] rounded-[5px] bg-[#222222] mx-4"></span>{" "}
                          <div className="text-lg">January 21, 2024</div>
                        </div>
                        <div className="pt-3">
                          <h2 className="text-2xl font-semibold">
                            How can I start planning for retirement if I'm in my
                            30s ?
                          </h2>
                          <p>
                            Starting your retirement planning in your 30s is a
                            smart move. Begin by assessing your current financial
                            situation and setting clear retirement goals.
                            Contribute regularly to retirement accounts like a
                            401(k) or IRA, and consider diversifying your
                            investments to build a robust portfolio. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="border-b border-b-[#222222] pb-4 pt-4 pl-8">
                    <div className="flex ">
                      <div className="w-[20%] max-w-[132px] mr-4">
                        <Image
                          src="/images/home/insights/1.png"
                          width={132}
                          height={132}
                          alt="1"
                        />
                        <h3 className="flex flex-col justify-center items-center mt-3 leading-[100%]">
                          Writtern by <span className="text-xl font-bold">Prime Idea</span>
                        </h3>
                      </div>
                      <div className="w-[70%]">
                        <div className="top-section flex items-center ">
                          <div className="bg-[#BCE4FF] text-[#000] px-3 py-1 rounded-md font-normal">
                            Retirement Planning{" "}
                          </div>{" "}
                          <span className="w-[16px] h-[2px] rounded-[5px] bg-[#222222] mx-4"></span>{" "}
                          <div className="text-lg">January 21, 2024</div>
                        </div>
                        <div className="pt-3">
                          <h2 className="text-2xl font-semibold">
                            How can I start planning for retirement if I'm in my
                            30s ?
                          </h2>
                          <p>
                            Starting your retirement planning in your 30s is a
                            smart move. Begin by assessing your current financial
                            situation and setting clear retirement goals.
                            Contribute regularly to retirement accounts like a
                            401(k) or IRA, and consider diversifying your
                            investments to build a robust portfolio. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="pb-4 pt-4 pl-8">
                    <div className="flex ">
                      <div className="w-[20%] max-w-[132px] mr-4">
                        <Image
                          src="/images/home/insights/1.png"
                          width={132}
                          height={132}
                          alt="1"
                        />
                        <h3 className="flex flex-col justify-center items-center mt-3 leading-[100%]">
                          Writtern by <span className="text-xl font-bold">Prime Idea</span>
                        </h3>
                      </div>
                      <div className="w-[70%]">
                        <div className="top-section flex items-center ">
                          <div className="bg-[#BCE4FF] text-[#000] px-3 py-1 rounded-md font-normal">
                            Retirement Planning{" "}
                          </div>{" "}
                          <span className="w-[16px] h-[2px] rounded-[5px] bg-[#222222] mx-4"></span>{" "}
                          <div className="text-lg">January 21, 2024</div>
                        </div>
                        <div className="pt-3">
                          <h2 className="text-2xl font-semibold">
                            How can I start planning for retirement if I'm in my
                            30s ?
                          </h2>
                          <p>
                            Starting your retirement planning in your 30s is a
                            smart move. Begin by assessing your current financial
                            situation and setting clear retirement goals.
                            Contribute regularly to retirement accounts like a
                            401(k) or IRA, and consider diversifying your
                            investments to build a robust portfolio. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section>
        <div className="bg-[#F6FDFF] py-12 sm:py-20">
          <div className="max-w-[1320px] mx-auto px-2">
            <div className="flex justify-between">
              <div className="w-[45%]">
                <h2 className="text-[170px] font-extrabold leading-[100%] bg-[#2f8d46] bg-[url('/images/home/prime-idea-textbg.png')] bg-repeat bg-clip-text text-transparent">
                  PRIME IDEA{" "}
                  <span className="inline-block w-[70px] h-[70px] bg-[url('/images/home/prime-idea-textbg.png')] rounded-[50%]"></span>
                </h2>
              </div>
              <div className="w-[55%]">
                <h3 className="text-xl font-normal tracking-tight text-[#000] sm:text-3xl mt-0 mb-6">
                  Join the community
                </h3>
                <p className="mb-4 text-lg">
                  Be a part of a dynamic network of like-minded individuals and
                  forward-thinking professionals. At Prime Idea, we’re more than
                  just a financial advisory service; we’re a community dedicated
                  to shared success and growth.
                </p>
                <p className="mb-4 text-lg">Connect with us to:</p>
                <ul className="list-disc pl-[20px]">
                  <li className="mb-3 text-lg">
                    <p className="contents">
                      <strong>Access Exclusive Insights:</strong> Stay updated
                      with the latest financial trends and tips.
                    </p>
                  </li>
                  <li className="mb-3 text-lg">
                    <p className="contents">
                      <strong>Engage in Events:</strong> Participate in
                      workshops, webinars, and networking opportunities.
                    </p>
                  </li>
                  <li className="mb-3 text-lg">
                    <p className="contents">
                      <strong>Receive Personalized Support:</strong> Get
                      tailored advice and resources to achieve your financial
                      goals.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientTestimonial />

      <Footer />
    </div>
  );
}
