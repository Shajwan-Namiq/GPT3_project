import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
 import Link from "next/link";

const Navbar = () => {
 
  const [flyer, setFlyer] = useState(false);
 
 
  return (
    <div className="lg:p-5  sm:p-0 m-0">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            {/* Logo */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">Logo</span>
                <Image
                  src={"/logo.svg"}
                  alt="logo"
                  width={62.56}
                  height={16.02}
                />
              </Link>
            </div>

            <div className="-mr-2 -my-2 lg:hidden">
              <button
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                onClick={() => setFlyer(!flyer)}
              >
                {flyer ? (
                  <svg width="25" height="25" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            <nav className="hidden lg:flex space-x-10">
              <Link href="/" className="  text-[18px] font-normal text-white">
                Home
              </Link>
              <Link
                href="/GPT_Information"
                className=" text-[18px] font-normal  text-white"
              >
                What is GPT?
              </Link>
              <Link
                href="/openAI"
                className=" text-[18px] font-normal text-white "
              >
                Open AI
              </Link>
              <Link
                href="/case_studies"
                className=" text-[18px] font-normal text-white "
              >
                Case Studies
              </Link>
              <Link
                href="/library"
                className=" text-[18px] font-normal text-white "
              >
                Library
              </Link>
            </nav>
            <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
              <Link
                href="/sign_in"
                className="ml-8 w-[152px] h-[58px] whitespace-nowrap inline-flex items-center justify-center px-4   border border-transparent rounded-[5px] shadow-sm text-[18px] font-normal text-white hover:bg-[#FF4820] hover:text-white  "
              >
                Sign in
              </Link>
              <Link
                href="/sign_up"
                className="ml-8 w-[152px] h-[58px] whitespace-nowrap inline-flex items-center justify-center px-4   border border-transparent rounded-[5px] shadow-sm text-[18px] font-normal text-white bg-[#FF4820] hover:bg-white hover:text-[#FF4820]"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>

        {/*
    Mobile menu, show/hide based on mobile menu state.
 
  */}

        <div
          onMouseLeave={() => setFlyer(false)}
          className={
            flyer
              ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10  mt-0 transform   lg:w-0  w-screen px-5   "
              : " opacity-0 translate-y-1 absolute z-10    transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:right-1/2 lg:-translate-x-1/2"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-white ring-opacity-5 overflow-hidden">
            <div className="relative grid bg-[#040C18] p-3  ">
              <Link
                href="/"
                className="text-[18px] font-normal  text-white hover:bg-[#8988881f] rounded-md p-3"
              >
                Home
              </Link>
              <Link
                href="/GPT_Information"
                className="text-[18px] font-normal  text-white hover:bg-[#8988881f] rounded-md p-3"
              >
                What is GPT?
              </Link>
              <Link
                href="/openAI"
                className="text-[18px] font-normal text-white hover:bg-[#8988881f] rounded-md p-3 "
              >
                Open AI
              </Link>
              <Link
                href="/case_studies"
                className="text-[18px] font-normal text-white hover:bg-[#8988881f] rounded-md p-3 "
              >
                Case Studies
              </Link>
              <Link
                href="/library"
                className="text-[18px] font-normal text-white hover:bg-[#8988881f] rounded-md p-3 "
              >
                Library
              </Link>
            </div>

            <div className="px-5 py-5 bg-[#040C18] space-y-6 sm:flex  sm:space-y-0 sm:space-x-10 sm:px-8">
              <div className="flow-root ">
                <Link
                  href="/sign_in"
                  className="flex justify-center text-center  border border-gray-700  p-3  rounded-md text-[18px] font-normal text-white hover:bg-[#FF4820] hover:text-white  "
                >
                  <span className="ml-3 ">Sign in</span>
                </Link>
              </div>
              <div className="flow-root">
                <Link
                  href="/sign_up"
                  className="flex justify-center text-center items-center p-3   rounded-md text-[18px]  font-normal text-white bg-[#FF4820] hover:bg-white hover:text-[#FF4820]"
                >
                  {/* Heroicon name: outline/phone */}

                  <span className="ml-3">Sign up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
