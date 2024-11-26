import Image from "next/image";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";

const FinancialPlanning = () => {
  return (
    <section>
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4 py-16">
        <h2 className="text-3xl text-center mb-12">
          <FadeUpOneByOneAnimation>
            Why have a financial plan?
          </FadeUpOneByOneAnimation>
        </h2>
        <div className="flex justify-between flex-col md:flex-row items-center md:items-baseline max-w-[1020px] mx-auto mb-6 md:mb-12">
          <FadeUpOneByOneAnimation className="w-full max-w-[350px] md:max-w-[45%] my-4 md:my-0 px-2 flex justify-center">
            <Image
              src="/images/financial-planning/without-plan.png"
              width="397"
              height="285"
              alt="Without Plan"
              className="w-full"
            />
          </FadeUpOneByOneAnimation>
          <FadeUpOneByOneAnimation className="w-full max-w-[350px] md:max-w-[45%] my-4 md:my-0 px-2 flex justify-center">
            <Image
              src="/images/financial-planning/with-plan.png"
              width="397"
              height="285"
              alt="With Plan"
              className="w-full"
            />
          </FadeUpOneByOneAnimation>
        </div>
        <div className="flex justify-between flex-col-reverse md:flex-row max-w-[1020px] mx-auto">
            <FadeUpOneByOneAnimation className="w-full md:w-[70%]">
                <p className="text-[17px] md:text-[19px] font-normal mb-3">
                    At Prime Idea, we create personalized investment strategies to help you achieve your financial goals, whether it&apos;s retirement, education savings, or wealth building.
                </p>
                <p className="text-[17px] md:text-[19px] font-normal mb-3">
                    Our expert advisors offer comprehensive guidance, ensuring your investments align with your aspirations. Trust Prime Idea to navigate the complexities of India&apos;s investment landscape with transparency and long-term growth.
                </p>
            </FadeUpOneByOneAnimation>
            <FadeUpOneByOneAnimation className="w-full max-w-[110px] md:max-w-[30%] mb-4 md:mb-0 flex justify-end items-baseline">
            <Image
                src="/images/icons/p.png"
                width={110}
                height={105}
                alt="PrimeIdea"
            />
            </FadeUpOneByOneAnimation>
        </div>
      </div>
    </section>
  );
};

export default FinancialPlanning;
