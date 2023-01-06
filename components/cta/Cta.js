import React from "react";
import styles from "../../styles/Home.module.css";

const cta = () => {
  return (
    <>
      <section className="mx-5 lg:mx-16 border-1 rounded-lg ">
        {" "}
        <div className={styles.CTA_bg}>
          <div className="container  md:px-16 py-16 mx-auto flex items-center md:flex-row flex-col">
            <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
              <h2 className="text-[12px] text-black tracking-widest font-medium title-font mb-1">
                Request Early Access to Get Started
              </h2>
              <h1 className="md:text-[24px] text-2xl font-bold title-font text-gray-900">
                Register today & start exploring the endless possiblities.
              </h1>
            </div>
            <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
              <button className="bg-black inline-flex py-3 px-5 rounded-[40px] items-center hover:bg-gray-200 focus:outline-none">
                <span className="ml-4 flex text-white hover:text-black  items-start flex-col leading-none">
                  <span className="title-font font-medium">Get Started</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default cta;
