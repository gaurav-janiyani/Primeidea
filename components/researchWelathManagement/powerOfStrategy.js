import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";

const PowerOfStrategy = () => {
  return (
    <section>
      {/* <div className="bg-[url('/images/research-wealth-management/power-of-strategy.png')] bg-no-repeat bg-contain bg-center w-full h-full"> */}
      <div className="relative">
        <Image
          src="/images/research-wealth-management/power-of-strategy.png"
          width={1600}
          height={1089}
          alt="Power Of Strategy"
          className="w-full"
        />
        <div className="absolute top-0 left-0 w-full h-[62%] bg-gradient-to-b from-[#000] to-[#00000000]"></div>
        <div className="absolute top-0 left-[50%] translate-x-[-50%] w-full max-w-[750px] pt-14">
            <h2 className="text-white text-center mb-6 text-3xl font-medium">
              <FadeUpOneByOneAnimation> 
                The Power Behind Our Strategies
              </FadeUpOneByOneAnimation>
            </h2>
            <FadeUpOneByOneAnimation> 
              <p className="text-white text-center text-xl mb-3">
                  At the heart of our wealth management approach lies a robust framework of analytics and research tools designed to optimize your portfolio.
              </p>
              <p className="text-white text-center text-xl mb-3">
                  Each tool plays a crucial role in crafting an investment strategy that is not only tailored to your financial goals but also resilient in the face of market dynamics.
              </p>
            </FadeUpOneByOneAnimation>
        </div>
      </div>
    </section>
  );
};

export default PowerOfStrategy;
