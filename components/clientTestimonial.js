"use client";
import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import Slider from "react-slick";

const ClientTestimonial = () => {
  const sliderRef = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [activeSlides, setActiveSlides] = useState([]);

  const updateActiveSlides = useCallback((currentIndex, slidesToShow) => {
    const active = [];
    for (let i = currentIndex; i < currentIndex + slidesToShow; i++) {
      active.push(i);
    }
    setActiveSlides(active);
  }, []);

  const settings = {
    afterChange: (current) => {
      const slidesToShow = sliderRef.current?.props.slidesToShow || 3;
      updateActiveSlides(current, slidesToShow);
    },
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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

  useEffect(() => {
    if (sliderRef.current) {
      setNav1(sliderRef.current);
      const slidesToShow = sliderRef.current.props.slidesToShow || 3;
      updateActiveSlides(0, slidesToShow);
    }
  }, [updateActiveSlides]);

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
      <div className="bg-[#F6FDFF] py-16 2xl:py-24">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <h2 className="text-xl font-normal tracking-tight text-[#04102A] sm:text-3xl mt-0 mb-10 text-center">
            <FadeUpOneByOneAnimation>
              What our clients say
             </FadeUpOneByOneAnimation>
          </h2>
          <div className="bg-[#C6E8FF] flex rounded-lg">
            <div className="w-[78%] 2xl:w-[82%] border-r border-r-[#B2B2B2] py-12 px-10">
              {/* <div className="flex justify-between mx-[-3%]"> */}
              <Slider
                {...settings}
                asNavFor={nav1}
                // ref={(slider) => {setSlider1(slider);sliderRef}}
                // ref={(slider) => {
                //   setSlider1(slider);
                //   sliderRef.current = slider;
                // }}
                ref={sliderRef}
                // ref={sliderRef}
              >
                {sliderItem.map((item, index) => {
                  return (
                    <div
                      key={index}
                      // className={currentSlide === index ? "active" : null}
                    >
                      <FadeUpOneByOneAnimation
                        className={`px-[30px] ${
                          activeSlides.includes(index) ? "border-r " : ""
                        } border-r-[#B2B2B2]`}
                      >
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
                      </FadeUpOneByOneAnimation>
                    </div>
                  );
                })}
              </Slider>
              {/* </div> */}
            </div>
            <div className="w-[22%] 2xl:w-[18%] p-10 text-center">
              <FadeUpOneByOneAnimation className="text-[22px] font-normal">Average Rating</FadeUpOneByOneAnimation>
              <FadeUpOneByOneAnimation className="my-3 text-6xl font-semibold block">4.9</FadeUpOneByOneAnimation>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/images/icons/stars.png"
                  width={100}
                  height={22}
                  alt="Ratings"
                />
              </div>
              <FadeUpOneByOneAnimation className="mt-2 max-w-[80%] mx-auto block">
                (30+) Customer review
              </FadeUpOneByOneAnimation>
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
                  className="p-4 m-2 rounded-full bg-[#E3E3E3] hover:bg-[#A0CDEC] outline-0"
                >
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
