"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import Image from "next/image";

const navigation = [
  {
    name: "Wealth Creation",
    href: "#",
    current: true,
    submenus: [
      { name: "Stocks", href: "#" },
      { name: "Mutual Funds", href: "#" },
      { name: "Real Estate", href: "#" },
    ],
  },
  {
    name: "Wealth Preservation",
    href: "#",
    current: false,
    submenus: [
      { name: "Bonds", href: "#" },
      { name: "Savings Accounts", href: "#" },
      { name: "Insurance", href: "#" },
    ],
  },
  { name: "Insurance", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
  { name: "Blogs", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isActiveWealthCreationMenu, setIsActiveWealthCreationMenu] =
    useState(false);
  const [isActiveWealthPreservationMenu, setIsActiveWealthPreservationMenu] =
    useState(false);

  return (
    <>
      <div className="absolute top-0 left-[50%] translate-x-[-50%] w-full  my-[20px] mx-auto max-w-[1320px] px-2 sm:px-6 lg:px-8 bg-[#ABDDFF] shadow-[0_0px_6.034px_0px_rgba(0,0,0,0.25)] rounded-md">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-items-start sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a href="/">
                <Image
                  src="/images/logo-black.png"
                  width={184}
                  height={40}
                  alt="Primeidea Ventures"
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <button
              data-collapse-toggle="mega-menu-full-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-full-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              id="mega-menu-full-cta"
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-auto"
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li className="!ml-2">
                  <button
                    id="mega-menu-full-cta-dropdown-button"
                    data-collapse-toggle="mega-menu-full-cta-dropdown"
                    data-dropdown-placement="bottom"
                    className={`flex items-center justify-between w-full py-5 px-3 font-medium md:w-auto hover:text-[#E40115] ${
                      isActiveWealthCreationMenu ? "active" : ""
                    }`}
                    onMouseEnter={() => setIsActiveWealthCreationMenu(true)}
                    onMouseLeave={() => setIsActiveWealthCreationMenu(false)}
                  >
                    Wealth Creation{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </li>
                <li className="!ml-2">
                  <a
                    href="#"
                    className="block py-5 px-3 font-medium md:w-auto hover:text-[#E40115]"
                  >
                    Wealth Preservation
                  </a>
                </li>
                <li className="!ml-2">
                  <a
                    href="#"
                    className="block py-5 px-3 font-medium md:w-auto hover:text-[#E40115]"
                  >
                    Insurance
                  </a>
                </li>
                <li className="!ml-2">
                  <a
                    href="#"
                    className="block py-5 px-3 font-medium md:w-auto hover:text-[#E40115]"
                  >
                    About Us
                  </a>
                </li>
                <li className="!ml-2">
                  <a
                    href="#"
                    className="block py-5 px-3 font-medium md:w-auto hover:text-[#E40115]"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href=""
              className="rounded-[10px] py-1.5 px-[18px] border border-solid	border-[#1F1F1F] hover:text-white hover:bg-[#E40115] hover:border-[#E40115]"
            >
              Contact Now
            </a>
          </div>
        </div>
        <div
          id="mega-menu-full-cta-dropdown"
          className="mt-1 max-w-[1320px] bg-[#abddff] py-3 hidden"
        >
          <div className="flex justify-between">
            <div className="w-1/2 px-2">
              <div className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040]">
                <Image
                  src="/images/header/wealth-creation/financial-investment-advisory.png"
                  width={621}
                  height={322}
                  alt="Financial Investment Advisory"
                  className="rounded-[12px]"
                />
                <div className="absolute top-0 left-0 p-5">
                  <h2 className="font-bold mb-3">Financial Investment Advisory</h2>
                  <p className="max-w-[240px] text-[14px]">
                    Financial advisors provides expert guidence on investing your money. They analyze market trends, asssess your risk tolerance, and recommend suitable investment options to help you grow your wealth.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-2">
              <div className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040]">
                <Image
                  src="/images/header/wealth-creation/financial-investment-planning.png"
                  width={621}
                  height={322}
                  alt="Financial Investment Planning"
                  className="rounded-[12px]"
                />
                <div className="absolute top-0 left-0 p-5">
                  <h2 className="font-bold mb-3">Financial Investment Planning</h2>
                  <p className="max-w-[240px] text-[14px]">
                    Financial advisors provides expert guidence on investing your money. They analyze market trends, asssess your risk tolerance, and recommend suitable investment options to help you grow your wealth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="mega-menu-full-cta-dropdown"
          className="mt-1 max-w-[1320px] bg-[#abddff] py-3 hidden"
        >
          <div className="flex justify-between">
            <div className="w-1/4 px-2">
              <div className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040]">
                <Image
                  src="/images/header/wealth-preservation/RBWM.png"
                  width={425}
                  height={329}
                  alt="Research Based Wealth Management"
                  className="rounded-[12px] w-full"
                />
                <div className="absolute top-0 left-0 p-5">
                  <h2 className="font-bold mb-3">Research Based Wealth Management</h2>
                  <p className="max-w-[240px] text-[14px]">
                    A customized investment plan from our experts empowers you to grow your wealth strategically, 
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/4 px-2">
              <div className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040]">
                <Image
                  src="/images/header/wealth-preservation/Retirement_PLANING.png"
                  width={282}
                  height={253}
                  alt="Dream Retirement Planning"
                  className="rounded-[12px] w-full"
                />
                <div className="absolute top-0 left-0 p-5">
                  <h2 className="font-bold mb-3">Dream Retirement Planning</h2>
                  <p className="max-w-[240px] text-[14px]">
                    A customized investment plan from our experts empowers you to grow your wealth strategically, 
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/4 px-2">
              <div className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040]">
                <Image
                  src="/images/header/wealth-preservation/legacy.png"
                  width={289}
                  height={253}
                  alt="legacy & Inheritance Planning"
                  className="rounded-[12px] w-full"
                />
                <div className="absolute top-0 left-0 p-5">
                  <h2 className="font-bold mb-3">legacy & Inheritance Planning</h2>
                  <p className="max-w-[240px] text-[14px]">
                    A customized investment plan from our experts empowers you to grow your wealth strategically, 
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/4 px-2">
              <div className="relative rounded-[12px] shadow-[0_0_5px_0_#00000040]">
                <Image
                  src="/images/header/wealth-preservation/tax-planning.png"
                  width={284}
                  height={254}
                  alt="Tax Planning & Savings"
                  className="rounded-[12px] w-full"
                />
                <div className="absolute top-0 left-0 p-5">
                  <h2 className="font-bold mb-3">Tax Planning & Savings</h2>
                  <p className="max-w-[240px] text-[14px]">
                    A customized investment plan from our experts empowers you to grow your wealth strategically, 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
