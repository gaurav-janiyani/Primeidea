import Image from "next/image";

const ExpertiseSection = () => {
  return (
    <section>
      <div className="pt-20 mx-auto bg-[url('/images/icons/p-vector.png')] bg-no-repeat bg-left-bottom">        
        <div className="max-w-[1120px] mx-auto px-2">
          <div className="flex justify-between items-center mx-[-15px]">
            <div className="w-1/2 px-[15px]">
              <Image
                src="/images/about-us/founder.png"
                width={485}
                height={509}
                alt="Founder"
              />
            </div>
            <div className="w-1/2 px-[15px]">
              <h2 className="text-[40px] leading-[120%] font-medium mb-6 text-black">
                30+ Years of Expertise in <br /> Wealth Management
              </h2>
              <p className="text-xl mb-3 font-medium text-black">
                We are dedicated to guiding you on your financial journey with expertise, integrity and a personalized approach. we’re highly dedicated to financial journey. Business we operate in is like an intricate keep score with money.
              </p>
              <p className="text-xl mb-6 font-medium text-black">
                Working with Primeidea gives you a peace of mind in real-time, and that your taxes are filed and paid on schedule.
              </p>
              <a
                href=""
                className="bg-[#293C7D] text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
              >
                Get in touch
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
  );
};

export default ExpertiseSection;
