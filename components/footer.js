import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1995AD] relative">
        <div className="">
          <span className="absolute bottom-0 right-40 z-[999]">
            <img src="/images/footer/shape1.png" alt="Shape" />
          </span>
          <span className="absolute right-0 top-10 z-[999]">
            <img src="/images/footer/shape2.png" alt="Shape" />
          </span>
        </div>
        <div className="relative z-[9999] border border-solid border-[#B4B4B4]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="pb-20 pt-12 w-full px-4 lg:max-w-[400px] relative">
                  <button className="absolute top-[50%] right-[-3.2rem] text-white border border-solid border-white flex py-[1px] px-[13px] bg-[#178EA5] rotate-[270deg] rounded-2xl">
                    GOUP
                    <Image
                      width="24"
                      height="24"
                      src="/images/footer/icons/arrow-right.png"
                      alt="Arrow Up"
                      className="ml-2"
                    />
                  </button>
                <div className="absolute top-0 right-0 bg-[#178EA5] w-[400%] h-[100%] border-r border-solid border-[#B4B4B4] z-[-1]">
                </div>
                <div className="mb-10 w-full">
                  <a href="/#" className="mb-6 inline-block max-w-[320px]">
                    <img
                      src="/images/logo-white.png"
                      alt="Primeidea Ventures"
                      className="max-w-full dark:hidden"
                    />
                  </a>
                </div>
              </div>
              <div className=" pb-20 pt-12 w-full pl-14 pr-10 sm:w-1/2 lg:w-4/12">
                <LinkGroup header="Wealth Creation">
                  <NavLink link="/#" label="Financial Investment Advisory" />
                  <NavLink link="/#" label="Financial & Investment Planning" />
                </LinkGroup>
                <LinkGroup header="Wealth Preservation">
                  <NavLink link="/#" label="Research Based Wealth Management" />
                  <NavLink link="/#" label="Dream Retirement Planning" />
                  <NavLink link="/#" label="Legacy & Inheritance Planning" />
                  <NavLink link="/#" label="Setting Tax Planning & Savings" />
                </LinkGroup>
              </div>

              <div className=" pb-20 pt-12 w-full px-4 sm:w-1/2 lg:w-3/12">
                <div className="mb-10 w-full">
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    <a href="">Insurance</a>
                  </h4>
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    <a href="">About Us</a>
                  </h4>
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    <a href="">Blogs</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto">
            <div className="-mx-4">
              <ul className="flex py-6 w-full lg:max-w-[400px] relative">
                <li className="absolute top-0 right-0 bg-[#178EA5] w-[400%] h-[100%] border-r border-solid border-[#B4B4B4] z-0"></li>
                <li className="mr-8 relative z-1">
                  <a href="">
                    <Image
                      src="/images/footer/icons/facebook.svg"
                      alt="Facebook"
                      width={32}
                      height={32}
                    />
                  </a>
                </li>
                <li className="mr-8 relative z-1">
                  <a href="">
                    <Image
                      src="/images/footer/icons/linkedin.svg"
                      alt="LinkedIn"
                      width={32}
                      height={32}
                    />
                  </a>
                </li>
                <li className="mr-8 relative z-1">
                  <a href="">
                    <Image
                      src="/images/footer/icons/instagram.svg"
                      alt="Instagram"
                      width={32}
                      height={32}
                    />
                  </a>
                </li>
                <li className="relative z-1">
                  <a href="">
                    <Image
                      src="/images/footer/icons/twitter.svg"
                      alt="Twitter"
                      width={32}
                      height={32}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      {/* <div className="mb-10 w-full"> */}
      <h4 className="mb-4 text-lg font-semibold text-white">{header}</h4>
      <ul className="space-y-3 mb-6 last:mb-0">{children}</ul>
      {/* </div> */}
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a href={link} className="inline-block text-lg leading-tight	text-white">
        {label}
      </a>
    </li>
  );
};
