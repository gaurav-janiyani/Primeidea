"use client";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

const ClientTestimonial = () => {
  const sliderRef = useRef(null);

  var settings = {
    speed: 500,
    autoPlay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  const sliderItem = [
    {
      imageUrl: "/images/icons/comma.png",
      title: "Mark Henry",
      subtitle: "Developer, Oklavery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      imageUrl: "/images/icons/comma.png",
      title: "Mark Henry",
      subtitle: "Developer, Oklavery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      imageUrl: "/images/icons/comma.png",
      title: "Mark Henry",
      subtitle: "Developer, Oklavery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      imageUrl: "/images/icons/comma.png",
      title: "Mark Henry",
      subtitle: "Developer, Oklavery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      imageUrl: "/images/icons/comma.png",
      title: "Mark Henry",
      subtitle: "Developer, Oklavery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];

  return (
    <section>
      <div className="bg-[#F6FDFF] py-16 sm:py-24">
        <div className="max-w-[1320px] mx-auto px-2">
          <h2 className="text-xl font-normal tracking-tight text-[#04102A] sm:text-3xl mt-0 mb-10 text-center">
            What our clients say
          </h2>
          <div className="bg-[#C6E8FF] flex rounded-lg">
            <div className="w-[82%] border-r border-r-[#B2B2B2] py-12 px-10">
              {/* <div className="flex justify-between mx-[-3%]"> */}
              <Slider ref={sliderRef} {...settings}>
                {sliderItem.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className=" px-[30px] border-r border-r-[#B2B2B2]">
                        <Image
                          src={item.imageUrl}
                          width={61}
                          height={43}
                          alt="Commas"
                          className="mb-6"
                        />
                        <p className="mb-10 text-lg">{item.description}</p>
                        <div>
                          <h3 className="font-bold text-2xl mb-1">
                            {item.title}
                          </h3>
                          <h4 className="font-normal text-lg">
                            {item.subtitle}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
              {/* </div> */}
            </div>
            <div className="w-[18%] p-10 text-center">
              <div className="text-[22px] font-normal">Average Rating</div>
              <span className="my-3 text-6xl font-semibold block">4.9</span>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/images/icons/stars.png"
                  width={100}
                  height={22}
                  alt="Ratings"
                />
              </div>
              <span className="mt-2 max-w-[80%] mx-auto block">
                (30+) Customer review
              </span>
              <span className="bg-[#B2B2B2] h-[1px] w-full block my-[30px] "></span>

              <div className="flex">
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className="p-4 m-2 rounded-full bg-[#E3E3E3] hover:bg-[#A0CDEC] outline-0"
                >
                  <Image
                    src="/images/icons/arrow-s-left.png"
                    width={31}
                    height={31}
                    alt="Left"
                  />
                </button>
                <button 
                onClick={() => sliderRef.current.slickNext()}
                className="p-4 m-2 rounded-full bg-[#E3E3E3] hover:bg-[#A0CDEC] outline-0">
                  <Image
                    src="/images/icons/arrow-s-right.png"
                    width={31}
                    height={31}
                    alt="Right"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;
