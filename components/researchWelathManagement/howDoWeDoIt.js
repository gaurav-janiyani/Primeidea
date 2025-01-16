import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";

const HowDoWeDoIt = () => {

  const data = [
    {
      "title": "Comprehensive Analysis Techniques",
      "content": "We use both fundamental and technical analysis for a range of financial instruments, including stocks, derivatives, and commodities, to provide thorough market insights.",
      "imagePath": "/images/research-wealth-management/how-do-we-do/1.png"
    },
    {
      "title": "Quantitative Analysis",
      "content": "For mutual fund portfolios, we focus on advanced quantitative analytics,  such as analyzing fund overlaps and correlation coefficients, which help in understanding fund interactions and potential redundancies.",
      "imagePath": "/images/research-wealth-management/how-do-we-do/2.png"
    },
    {
      "title": "Risk and Return Analysis",
      "content": "Our analysis includes examining the skewness of portfolio returns and rolling returns to gauge the consistency of the portfolio managers’ performance over time.",
      "imagePath": "/images/research-wealth-management/how-do-we-do/3.png"
    },
    {
      "title": "Advanced Statistical Measures",
      "content": "We utilize metrics like the Sharpe ratio, Sortino ratio, standard deviation, and Value at Risk (VAR) to assess risk-adjusted returns and overall portfolio volatility.",
      "imagePath": "/images/research-wealth-management/how-do-we-do/4.png"
    },
    {
      "title": "Customized Risk Assessment",
      "content": "Recognizing that each client has unique risk tolerances and investment goals, we ensure our strategies reflect individual risk profiles and life stages, differing significantly for clients in various age groups",
      "imagePath": "/images/research-wealth-management/how-do-we-do/5.png"
    },
    {
      "title": "Wide Fund Selection",
      "content": "With access to over 2,000 mutual funds, we provide tailored investment strategies, avoiding the common pitfalls of selecting funds merely based on popularity or recent performance.",
      "imagePath": "/images/research-wealth-management/how-do-we-do/6.png"
    }
  ]

  return (
    <section>
      <div className="bg-[#293C7D] pt-16 md:py-16">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <div className="max-w-[830px] mx-auto mb-8">
            <h2 className="text-[28px] xl:text-3xl font-semibold leading-[130%] mb-3 text-white text-center">
              Strategic Wealth Analysis
            </h2>
            <p className="text-white  text-center">
              Our wealth management services are built on a foundation of strategic analysis and planning. We use a combination of traditional and modern techniques to provide you with the most accurate and valuable insights.
            </p>
          </div>
          {data.map((item, index) => {
            return (<div className={`flex flex-col md:flex-row md:justify-between items-center max-w-[1046px] mx-auto py-4 ${(index % 2 == 1) ? 'md:flex-row-reverse'	:  '' }`}  key={index}>
              <FadeUpOneByOneAnimation className="w-full md:w-[46%] max-w-[400px] md:max-w-full mb-6 md:mb-0">
                <Image
                  src={item?.imagePath}
                  width={565}
                  height={643}
                  alt="Comprehensive Analysis"
                  className="w-full"
                />
              </FadeUpOneByOneAnimation>
              <FadeUpOneByOneAnimation className="w-full md:w-[46%]">
                <h2 className="text-2xl xl:text-[28px] font-semibold leading-[130%] mb-3 text-white">
                  {item?.title}
                </h2>
                <p className="text-md mb-4 text-white">
                  {item?.content}
                </p>
              </FadeUpOneByOneAnimation>
            </div>)
          })}
        </div>
      </div>
    </section>
  )
}

export default HowDoWeDoIt;