import Image from "next/image";

const FinancialPlanning = () => {
  return (
    <section>
      <div className="max-w-[1320px] mx-auto px-2 py-16">
        <h2 className="text-3xl text-center mb-12">
          Why have a financial plan?
        </h2>
        <div className="flex justify-between max-w-[1020px] mx-auto mb-12">
          <div className="w-[45%] px-2 flex justify-center">
            <Image
              src="/images/financial-planning/without-plan.png"
              width="397"
              height="285"
              alt="Without Plan"
              className="w-full"
            />
          </div>
          <div className="w-[45%] px-2 flex justify-center">
            <Image
              src="/images/financial-planning/with-plan.png"
              width="397"
              height="285"
              alt="With Plan"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-between max-w-[1020px] mx-auto">
            <div className="w-[70%]">
                <p className="text-[19px] font-normal mb-3">
                    At Prime Idea, we create personalized investment strategies to help you achieve your financial goals, whether it&apos;s retirement, education savings, or wealth building.
                </p>
                <p className="text-[19px] font-normal mb-3">
                    Our expert advisors offer comprehensive guidance, ensuring your investments align with your aspirations. Trust Prime Idea to navigate the complexities of India&apos;s investment landscape with transparency and long-term growth.
                </p>
            </div>
            <div className="w-[30%] flex justify-end items-baseline">
            <Image
                src="/images/icons/p.png"
                width={110}
                height={105}
                alt="PrimeIdea"
            />
            </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialPlanning;
