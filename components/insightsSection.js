import Image from "next/image";

const InsightsSection = (props) => { 
    return (
        <section className={`${props.bgColor ? props.bgColor : ''}`}>
        <div className="py-6 sm:py-12">
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
                    insights and strategies to keep your financial game strong
                    and up-to-date.
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
                            Writtern by{" "}
                            <span className="text-xl font-bold">
                              Prime Idea
                            </span>
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
                              How can I start planning for retirement if I'm in
                              my 30s ?
                            </h2>
                            <p>
                              Starting your retirement planning in your 30s is a
                              smart move. Begin by assessing your current
                              financial situation and setting clear retirement
                              goals. Contribute regularly to retirement accounts
                              like a 401(k) or IRA, and consider diversifying
                              your investments to build a robust portfolio.
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
                            Writtern by{" "}
                            <span className="text-xl font-bold">
                              Prime Idea
                            </span>
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
                              How can I start planning for retirement if I'm in
                              my 30s ?
                            </h2>
                            <p>
                              Starting your retirement planning in your 30s is a
                              smart move. Begin by assessing your current
                              financial situation and setting clear retirement
                              goals. Contribute regularly to retirement accounts
                              like a 401(k) or IRA, and consider diversifying
                              your investments to build a robust portfolio.
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
                            Writtern by{" "}
                            <span className="text-xl font-bold">
                              Prime Idea
                            </span>
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
                              How can I start planning for retirement if I'm in
                              my 30s ?
                            </h2>
                            <p>
                              Starting your retirement planning in your 30s is a
                              smart move. Begin by assessing your current
                              financial situation and setting clear retirement
                              goals. Contribute regularly to retirement accounts
                              like a 401(k) or IRA, and consider diversifying
                              your investments to build a robust portfolio.
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
        </div>
    </section>
    )
 }

 export default InsightsSection;