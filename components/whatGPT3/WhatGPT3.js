import React from "react";
import { Feature } from "../../components";
import styles from "../../styles/Home.module.css";

const WhatGPT3 = () => {
  return (
    <>
      <div className="container px-5 py-5 mx-auto">
        <div className={styles.gpt3__whatgpt3}>
          <div>
            <section className="px-2 lg:px-10">
              <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col">
                  {" "}
                  <div className={styles.liner_gradient}></div>
                  <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                    <h1 className="sm:w-1/5 text-white font-medium title-font text-[24px] mb-2 sm:mb-0">
                      What is GPT-3
                    </h1>
                    <p className="text-[#81AFDD] sm:w-4/5  text-base text-[16px] leading-[30px] sm:pl-20 pl-0">
                      We so opinion friends me message as delight. Whole front
                      do of plate heard oh ought. His defective nor convinced
                      residence own. Connection has put impossible own
                      apartments boisterous. At jointure ladyship an insisted so
                      humanity he. Friendly bachelor entrance to on by.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                    <h1 className="sm:w-2/5  font-bold text-[34px] mb-2 sm:mb-0">
                      <span className={styles.text_gpt}>
                        The possibilities are beyond your imagination
                      </span>
                    </h1>
                    <p className="sm:w-3/5 flex lg:justify-end text-normal text-[16px] sm:pl-10 pl-0">
                      <span className={styles.text_gpt}>
                        Explore The Library
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                  <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                   
                    <h2 className="text-xl font-medium title-font text-white mt-5">
                      Chatbots
                    </h2>
                    <p className="text-base text-[#81AFDD]  leading-relaxed mt-2">
                      We so opinion friends me message as delight. Whole front
                      do of plate heard oh ought.
                    </p>
                  </div>
                  <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className={styles.liner_gradient}></div>
                    <h2 className="text-xl font-medium title-font text-white mt-5">
                      Knowledgebase
                    </h2>
                    <p className="text-base text-[#81AFDD] leading-relaxed mt-2">
                      At jointure ladyship an insisted so humanity he. Friendly
                      bachelor entrance to on by.
                    </p>
                  </div>
                  <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className={styles.liner_gradient}></div>
                    <h2 className="text-xl font-medium title-font text-white mt-5">
                      Education
                    </h2>
                    <p className="text-base text-[#81AFDD] leading-relaxed mt-2">
                      At jointure ladyship an insisted so humanity he. Friendly
                      bachelor entrance to on by.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatGPT3;
