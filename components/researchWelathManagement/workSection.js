import Image from "next/image";

const WorkSection = () => { 
    return (
        <section>
        <div className="bg-[#F6FDFF] pt-16">
          <div className="max-w-[1320px] mx-auto px-2">
            <div className="flex justify-between">
              <div className="w-[50%]">
                <h2 className="text-[32px] font-medium mb-6 text-[#04102A]">
                    Why Idle Savings Aren&apos;t Working for You ?
                </h2>
                <p className="text-lg font-light mb-2">
                    Many people have money sitting in savings accounts or low-yield investments, believing they are being safe and secure. However, these idle savings are often not working to their full potential.                
                </p>
                <p className="text-lg font-light mb-2">
                    By keeping your money stagnant, you’re missing out on opportunities for significant growth that active investments can provide.
                </p>
              </div>
              <div className="w-[50%] flex justify-end items-baseline">
                <Image
                  src="/images/research-wealth-management/work.png"
                  width={425}
                  height={312}
                  alt="Work"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F6FDFF] pt-8 pb-16">
          <div className="max-w-[1320px] mx-auto px-2">
            {/* <div className="max-w-[652px]">
              <h2 className="text-[32px] font-light mb-1 text-[#04102A]">
                The Role of Insurance in Wealth Management
              </h2>
              <p className="text-lg font-light mb-4">
                Insurance is more than just a safeguard; it's a key components
                in managing and preserving your wealth, Here's why it's
                essential
              </p>
            </div> */}
            <ul className="flex justify-between mx-[-10px]">
              <li className="px-[10px] w-[33.33%]">
                <div className="shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                  <Image
                    src="/images/research-wealth-management/oppotunity.png"
                    width={387}
                    height={159}
                    alt="Opportunity Cost"
                    className="w-full"
                  />
                  <h3 className="my-[10px] text-xl font-bold text-center">
                    Opportunity Cost
                  </h3>
                  <p className="text-base font-normal text-center mb-2">
                    When your money remains idle, it misses out on growth opportunities. Every day your savings sit untouched is a day of potential returns lost.                  
                  </p>
                  <p className="text-base font-normal text-center mb-2">
                    Active investments, such as stocks, bonds, and diversified portfolios, can transform idle savings into assets that generate returns.
                  </p>
                </div>
              </li>
              <li className="px-[10px] w-[33.33%]">
                <div className="shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                  <Image
                    src="/images/research-wealth-management/inflation.png"
                    width={387}
                    height={159}
                    alt="Inflation Impact"
                  />
                  <h3 className="my-[10px] text-xl font-bold text-center">
                    Inflation Impact
                  </h3>
                  <p className="text-base font-normal text-center mb-2">
                    Idle savings are susceptible to inflation, which erodes the purchasing power of your money over time. What you can buy with your savings today may be worth less in the future.
                  </p>
                  <p className="text-base font-normal text-center mb-2">
                    Investing your money can help protect against inflation and maintain your purchasing power.
                  </p>
                </div>
              </li>
              <li className="px-[10px] w-[33.33%]">
                <div className="shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                  <Image
                    src="/images/research-wealth-management/potential.png"
                    width={387}
                    height={159}
                    alt="3"
                  />
                  <h3 className="my-[10px] text-xl font-bold text-center">
                    Potential of Growth
                  </h3>
                  <p className="text-base font-normal text-center mb-2">
                    Turning your idle savings into investments opens up avenues for substantial growth.
                  </p>
                  <p className="text-base font-normal text-center mb-2">
                    By reallocating your funds into strategically chosen investments, you can enhance your financial future and achieve your financial goals faster.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
 }

 export default WorkSection;