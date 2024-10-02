import Image from "next/image";

const AboutInsurance = () => { 
    return (
        <section>
        <div className="bg-[#F6FDFF] py-16">
          <div className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-2">
            <div className="flex justify-between">
              <div className="w-[50%]">
                <h2 className="text-[32px] font-light mb-1 text-[#04102A]">
                  Insurance Solutions for Financial Security
                </h2>
                <p className="text-lg font-light">
                  At Prime Idea, we understand that insurance plays a crucial
                  role in a comprehensive wealth management plan. Our expert
                  insurance solutions are designed to safeguard your wealth,
                  protect your family, and ensure your financial goals are
                  achieved, regardless of life&apos;s uncertainties.
                </p>
              </div>
              <div className="w-[50%] flex justify-end items-baseline">
                <Image
                  src="/images/icons/p.png"
                  width={110}
                  height={105}
                  alt="PrimeIdea"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F6FDFF] pt-8 pb-16">
          <div className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-2">
            <div className="max-w-[652px]">
              <h2 className="text-[32px] font-light mb-1 text-[#04102A]">
                The Role of Insurance in Wealth Management
              </h2>
              <p className="text-lg font-light mb-4">
                Insurance is more than just a safeguard; it&apos;s a key components
                in managing and preserving your wealth, Here&apos;s why it&apos;s
                essential
              </p>
            </div>
            <ul className="flex justify-between mx-[-10px]">
              <li className="px-[10px]">
                <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                  <Image
                    src="/images/insurance/wealth-management/image.jpg"
                    width={387}
                    height={159}
                    alt="1"
                  />
                  <h3 className="my-[10px] text-2xl font-bold">
                    Mitigate Risks
                  </h3>
                  <p className="text-lg font-normal">
                    Protect yourself from financial losses due to unforeseen
                    events, ensuring that your wealth remains intact.
                  </p>
                </div>
              </li>
              <li className="px-[10px]">
                <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                  <Image
                    src="/images/insurance/wealth-management/image1.jpg"
                    width={387}
                    height={159}
                    alt="2"
                  />
                  <h3 className="my-[10px] text-2xl font-bold">
                    Preserve Wealth
                  </h3>
                  <p className="text-lg font-normal">
                    Secure your assets and investments, enabling you to continue
                    growing your wealth without interruptions.
                  </p>
                </div>
              </li>
              <li className="px-[10px]">
                <div className=" shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg h-full">
                  <Image
                    src="/images/insurance/wealth-management/image3.jpg"
                    width={387}
                    height={159}
                    alt="3"
                  />
                  <h3 className="my-[10px] text-2xl font-bold">
                    Gain Peace of Mind
                  </h3>
                  <p className="text-lg font-normal">
                    With comprehensive coverage, you can confidently focus on
                    your financial goals, knowing you’re protected.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
 }

 export default AboutInsurance;