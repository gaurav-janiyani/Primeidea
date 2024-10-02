import Image from "next/image";
import Header from "../header";

const BannerSection = () => {
  return (
    <section>
      <div className="banner-section relative h-[100vh] max-h-[800px]">
        <div className="image-section h-[100vh] max-h-[800px] w-full relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:bg-[url('/images/about-us/bg-overlay.png')] before:bg-no-repeat before:bg-[length:100%_100%] before:bg-center before:opacity-75">
          <Image
            src="/images/about-us/banner-bg.png"
            width={1601}
            height={726}
            alt="Banner"
            className="h-full w-full object-cover"
          />
          <div className="main-section mx-auto 2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] flex justify-between absolute w-full top-[30%] left-[50%] translate-x-[-50%]">
            <div className="flex items-center">
              <Image
                src="/images/icons/p-light.png"
                width={165}
                height={157}
                alt="PrimeIdea Ventures"
                className=" mr-12 max-w-[150px]"
              />
              <div className="max-w-[700px]">
                <h1 className="text-4xl text-white font-medium mb-3 leading-[130%]">
                  Empowering Your Financial Future with Expertise and Integrity
                </h1>
                <p className="text-xl font-medium text-white">
                  At Prime Idea, we blend deep market insights with personalized
                  strategies to help you achieve lasting wealth and security.
                  Our mission is to turn your financial aspirations into
                  reality, guiding you every step of the way.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="text-center text-white text-xl">FOLLOW <br/> US</h4>
                <span className="w-[1px] h-[30px] my-2 bg-white inline-block"></span>
                <ul className="flex flex-col items-center">
                    <li className="m-2">
                        <a href="">
                            <Image src="/images/icons/social-media/facebook.png" width={40} height={40} alt="Facebook" />
                        </a>
                    </li>
                    <li className="m-2">
                        <a href="">
                            <Image src="/images/icons/social-media/instagram.png" width={40} height={40} alt="Instagram" />
                        </a>
                    </li>
                    <li className="m-2">
                        <a href="">
                            <Image src="/images/icons/social-media/linkedin.png" width={40} height={40} alt="LinkedIn" />
                        </a>
                    </li>
                    <li className="m-2">
                        <a href="">
                            <Image src="/images/icons/social-media/whatsapp.png" width={40} height={40} alt="WhatsApp" />
                        </a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        <Header />
      </div>
    </section>
  );
};

export default BannerSection;
