import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container px-6 max-w-[1279] mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2 ">
              <div className="lg:w-[630px] ">
                <p className="lg:pt-10 text-[62px] leading-[75px] font-normal ">
                  <span className={styles.text_gradient}>
                    Let’s Build Something amazing with GPT-3 OpenAI
                  </span>
                </p>
                <p className="lg:w-[554px] mt-4 text-[#81AFDD] text-[20px] leading-[27px] font-normal">
                  Yet bed any for travelling assistance indulgence unpleasing.
                  Not thoughts all exercise blessing. Indulgence way everything
                  joy alteration boisterous the attachment. Party we years to
                  order allow asked of.
                </p>

                <div className=" flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row ">
                  <input
                    id="email"
                    type="text"
                    className="-mr-4 lg:w-[400px] w-full px-4 py-3 lg:py-4 text-gray-700 bg-[#052D56] border  lg:rounded-bl-[5px] lg:rounded-tl-[5px]  dark:text-gray-300 dark:border-[#052D56] focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Enter Email Address"
                  />

                  <button className=" lg:w-[174px] w-full px-6 py-3 lg:py-4 text-[20px] font-normal tracking-wider text-white   transition-colors duration-300 transform bg-[#FF4820] lg:rounded-tr-[5px]  lg:rounded-br-[5px]  lg:mx-4 hover:bg-white hover:text-[#FF4820] focus:outline-none focus:bg-slate-200 ">
                    Get Started
                  </button>
                </div>

                <div className="lg:w-[777px] flex items-center flex-col mt-8 space-x-3 lg:space-y-0 lg:flex-row ">
                  <Image
                    src={"/people.png"}
                    alt="header image"
                    width={181.79}
                    height={38}
                  />
                  <p className="lg:w-[554px] mt-4 text-white text-[12px]   font-normal">
                    1,600 people requested access a visit in last 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2  mt-6 lg:mt-0 ">
              <Image
                src={"/ai.png"}
                alt="header image"
                width={667}
                height={701}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
