"use client"
import Image from "next/image";
import Slider from "react-slick";

const PrimeIdeaHelps = () => {

  var settings = {
    infinite: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="py-16 bg-[#232D63]">
        <div className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-2">
          <div className="flex justify-between mb-10">
            <div className="w-[50%]">
              <h2 className="text-[32px] font-light mb-1 text-[#ffffff]">
                Insurance Solutions for Financial Security
              </h2>
              <p className="text-lg font-light text-[#ffffff]">
                At Prime Idea, we understand that insurance plays a crucial role
                in a comprehensive wealth management plan. Our expert insurance
                solutions are designed to safeguard your wealth, protect your
                family, and ensure your financial goals are achieved, regardless
                of life&apos;s uncertainties.
              </p>
            </div>
            <div className="w-[50%] flex justify-end items-baseline">
              <Image
                src="/images/icons/p-light.png"
                width={110}
                height={105}
                alt="PrimeIdea"
              />
            </div>
          </div>
          {/* <ul className="flex items-baseline"> */}
            <Slider {...settings}>
            <div className="pr-8">
              <div className="text-[#479AD2] text-lg font-bold">Step 1</div>
              <span className="w-full h-[0.6px] text-white my-6 inline-block relative bg-white before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:content-[''] before:w-[12px] before:h-[12px] before:z-[99] before:rounded-full before:bg-[#ED3237]"></span>
              <h4 className="text-white text-[22px] leading-[140%] font-medium mb-3">
                Comprehensive Analysis Techniques
              </h4>
              <p className="text-white text-base font-normal">
                We use both fundamental and technical analysis for a range of
                financial instruments, including stocks, derivatives, and
                commodities, to provide thorough market insights.
              </p>
            </div>
            <div className="pr-8">
              <div className="text-[#479AD2] text-lg font-bold">Step 2</div>
              <span className="w-full h-[0.6px] text-white my-6 inline-block relative bg-white before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:content-[''] before:w-[12px] before:h-[12px] before:z-[99] before:rounded-full before:bg-[#ED3237]"></span>
              <h4 className="text-white text-[22px] leading-[140%] font-medium mb-3">
                Quantitative <br/> Analytics
              </h4>
              <p className="text-white text-base font-normal">
                For mutual fund portfolios, we focus on advanced quantitative
                analytics, such as analyzing fund overlaps and correlation
                coefficients, which help in understanding fund interactions and
                potential redundancies.
              </p>
            </div>
            <div className="pr-8">
              <div className="text-[#479AD2] text-lg font-bold">Step 3</div>
              <span className="w-full h-[0.6px] text-white my-6 inline-block relative bg-white before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:content-[''] before:w-[12px] before:h-[12px] before:z-[99] before:rounded-full before:bg-[#ED3237]"></span>
              <h4 className="text-white text-[22px] leading-[140%] font-medium mb-3">
                Risk and Return <br/> Analysis
              </h4>
              <p className="text-white text-base font-normal">
                Our analysis includes examining the skewness of portfolio returns and rolling returns to gauge the consistency of the portfolio managers&apos; performance over time.
              </p>
            </div>
            <div className="pr-8">
              <div className="text-[#479AD2] text-lg font-bold">Step 4</div>
              <span className="w-full h-[0.6px] text-white my-6 inline-block relative bg-white before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:content-[''] before:w-[12px] before:h-[12px] before:z-[99] before:rounded-full before:bg-[#ED3237]"></span>
              <h4 className="text-white text-[22px] leading-[140%] font-medium mb-3">
                Advanced Statistical  <br/> Measures
              </h4>
              <p className="text-white text-base font-normal">
                We utilize metrics like the Sharpe ratio, Sortino ratio, standard deviation, and Value at Risk (VAR) to assess risk-adjusted returns and overall portfolio volatility.
              </p>
            </div>
            <div className="pr-8">
              <div className="text-[#479AD2] text-lg font-bold">Step 5</div>
              <span className="w-full h-[0.6px] text-white my-6 inline-block relative bg-white before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:content-[''] before:w-[12px] before:h-[12px] before:z-[99] before:rounded-full before:bg-[#ED3237]"></span>
              <h4 className="text-white text-[22px] leading-[140%] font-medium mb-3">
                Customized Risk  <br/> Assessment
              </h4>
              <p className="text-white text-base font-normal">
                We utilize metrics like the Sharpe ratio, Sortino ratio, standard deviation, and Value at Risk (VAR) to assess risk-adjusted returns and overall portfolio volatility.
              </p>
            </div>
            <div className="pr-8">
              <div className="text-[#479AD2] text-lg font-bold">Step 6</div>
              <span className="w-full h-[0.6px] text-white my-6 inline-block relative bg-white before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:content-[''] before:w-[12px] before:h-[12px] before:z-[99] before:rounded-full before:bg-[#ED3237]"></span>
              <h4 className="text-white text-[22px] leading-[140%] font-medium mb-3">
                Wide Fund <br/> Section
              </h4>
              <p className="text-white text-base font-normal">
                We utilize metrics like the Sharpe ratio, Sortino ratio, standard deviation, and Value at Risk (VAR) to assess risk-adjusted returns and overall portfolio volatility.
              </p>
            </div>
            </Slider>
          {/* </ul> */}
        </div>
      </div>
    </section>
  );
};

export default PrimeIdeaHelps;
