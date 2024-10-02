import Image from "next/image";

const ProtectingFinanceFuture = () => { 
    return (
        <section>
        <div className="bg-[#F6FDFF] py-16">
          <div className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-2">
            <div className="flex justify-between">
              <div className="w-[46%]">
                <Image
                  src="/images/insurance/financial-future.png"
                  width={565}
                  height={643}
                  alt="Financial Future"
                  className="w-full"
                />
              </div>
              <div className="w-[50%]">
                <h2 className="text-3xl font-semibold leading-[130%] mb-3">
                  Protecting Your Financial Future <br /> Beyond the Claim
                </h2>
                <p className="text-xl mb-4">
                  Filing an insurance claim is just the first step toward
                  financial protection. At Prime Idea, we believe that how you
                  manage your claim payout is equally crucial. Many people
                  mistakenly misuse or mismanage their funds, leading to
                  long-term financial issues. Here are common pitfalls and how
                  to avoid them.
                </p>
                <ul className="text-lg mb-4 list-disc pl-[20px]">
                  <li className="mb-3">
                    <strong>Misuse of Funds:</strong> Avoid spending on
                    non-essential items; focus on covering the intended loss.
                  </li>
                  <li className="mb-3">
                    <strong>Neglecting Financial Stability:</strong> Prioritize
                    paying off debts and boosting emergency savings with your
                    payout.
                  </li>
                  <li className="mb-3">
                    <strong>Overlooking Future Protection:</strong> Regularly
                    update your insurance coverage to stay protected after a
                    claim.
                  </li>
                  <li className="mb-3">
                    <strong>Ignoring Tax Implications:</strong> Be aware of any
                    tax liabilities associated with your insurance payout.
                  </li>
                  <li className="mb-3">
                    <strong>Improper Reinvestment:</strong> Reinvest your funds
                    wisely to support long-term financial goals.
                  </li>
                </ul>
                <a
                  href=""
                  className="bg-[#479AD2] text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
                >
                  Know More
                  <Image
                    src="/images/icons/arrow-square-right.png"
                    width={21}
                    height={21}
                    alt="Read All"
                    className="ml-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
 }

 export default ProtectingFinanceFuture;