import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const brand = () => {
  return (
    <>
      <section>
        <div className="  lg:max-w-[670px]  px-5 py-20 mx-auto">
          <div className="flex flex-wrap m-4 text-center items-center">
            <div className="p-4 sm:w-1/5 w-1/2">
              <Image src={"/google.png"} width={71.1} height={24.15} />
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <Image src={"/slack.png"} width={71.1} height={24.15} />{" "}
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <Image src={"/atlassian.png"} width={71.1} height={24.15} />
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <Image src={"/dropbox.png"} width={71.1} height={24.15} />{" "}
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <Image src={"/shopify.png"} width={71.1} height={24.15} />
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
  
};

export default brand;
