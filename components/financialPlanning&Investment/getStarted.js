import Image from "next/image";

const GetStarted = () => {
  return (
    <section>
      <div className="py-16">
        <div className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-2">
          <div className="relative">
            <Image
              src="/images/financial-planning/get-started-bg.png"
              width={1376}
              height={419}
              alt="Get Started"
              className="rounded-[20px] border-[3px] border-[#479AD2] shadow-[0_0_9px_0_#00000040]"  
            />
            <div className="absolute top-[30%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center ">
              <h2 className="text-2xl font-medium text-[#293C7D] mb-2">Grow your wealth with a</h2>
              <h4 className="text-4xl font-semibold text-[#293C7D]">personalised financial plan</h4>
            </div>
            <div className="absolute bottom-0 right-0 flex bg-[#479AD2] pl-12 pr-6 py-5 rounded-tl-[42px] rounded-br-[22px]">
              <Image
                src="/images/retirement-planning/get-start.png"
                width={60}
                height={60}
                alt="Get Started"
                className="mr-4"
              />
              <a href="" className="flex items-center text-white">
                <span className="text-[28px]">Get Started</span>
                <Image
                  src="/images/icons/arrow-right-light.png"
                  width={22}
                  height={12}
                  alt="Arrow Right"                  
                  className="ml-3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
