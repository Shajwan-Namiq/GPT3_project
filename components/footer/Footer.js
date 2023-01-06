import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#031B34]">
        <header class="flex justify-center px-4 text-white">
          <div class="container px-6  py-10 lg:py-32">
            <h1 class="font-bold text-center lg:leading-[75px] text-[32px] lg:text-[62px]">
              <span className={styles.footer_text}>
                {" "}
                Do you want to step in to the <br />
                future before others
              </span>
            </h1>

            <div class="flex flex-col justify-center mx-auto mt-4 lg:mt-16 space-y-3 md:space-y-0 md:flex-row">
              <button class="w-full border-2 text-[18px] border-white px-6 py-4 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none   hover:bg-gray-500  focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Request Early Access
              </button>
            </div>
          </div>
        </header>

        <div class="container px-10 lg:px-24 py-5 mx-auto">
          <div class="lg:flex">
            <div class="w-full -mx-6 lg:w-2/5">
              <div class="px-6">
                <div>
                  <Link
                    href="/"
                    class="text-2xl font-bold text-gray-800  hover:text-white    "
                  >
                    <Image
                      src={"/logo.svg"}
                      alt="logo"
                      width={118}
                      height={16.02}
                    />
                  </Link>
                </div>

                <p class="max-w-[168px] text-[12px] mt-5 text-white ">
                  Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                </p>
              </div>
            </div>

            <div class="mt-6 lg:mt-0 lg:flex-1">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <div>
                  <h3 class="text-white font-bold uppercase dark:text-white">
                    Links
                  </h3>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-white  hover:underline leading-[35px]"
                  >
                    Overons
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-white  hover:underline leading-[35px]"
                  >
                    Social Media
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-white  hover:underline leading-[35px]"
                  >
                    Counters
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-white  hover:underline leading-[35px]"
                  >
                    Contact
                  </a>
                </div>

                <div>
                  <h3 class="text-white font-bold uppercase ">Company</h3>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-white  hover:underline leading-[35px]"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-white  hover:underline leading-[35px]"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    class="block mt-2 text-sm text-white  hover:underline leading-[35px]"
                  >
                    Contact
                  </a>
                </div>

                <div>
                  <h3 class="text-white font-bold uppercase ">Get in touch</h3>
                  <span class="block mt-2 text-sm text-white  hover:underline leading-[35px]">
                    Crechterwoord K12 182 DK Alknjkcb
                  </span>
                  <span class="block mt-2 text-sm text-white  hover:underline leading-[35px]">
                    085-132567
                  </span>
                  <span class="block mt-2 text-sm text-white  hover:underline leading-[35px]">
                    info@payme.net
                  </span>
                </div>
              </div>
            </div>
          </div>

 
          <div>
            <p class="text-center text-white mt-20">
              © 2022 GPT-3. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
