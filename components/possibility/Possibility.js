import React from "react";
import Image from "next/image";
 import styles from "../../styles/Home.module.css";



const Possibility = () => {
  return (
    <>
      <section>
        <div class="container py-24 px-5">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="possibility"
              class="lg:w-1/2 w-full object-cover object-center rounded"
              src={"/possibility.png"}
              width={500}
              height={500}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-32">
              <h2 class="text-[16px] title-font text-[#71E5FF] tracking-widest ">
                Request Early Access to Get Started
              </h2>
              <div className={styles.text_possibility}>
                <h1 class=" text-[34px] title-font font-medium mb-1">
                  The possibilities are beyond your imagination
                </h1>
              </div>

              <p class="leading-relaxed text-[#81AFDD] text-[16px] py-5">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </p>
              <h2 class="text-[16px] title-font text-[#FF8A71] tracking-widest">
                Request Early Access to Get Started
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Possibility;
