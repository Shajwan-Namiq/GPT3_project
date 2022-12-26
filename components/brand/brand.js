import React from "react";
import Image from "next/image";

const brand = () => {
  return (
    <>
      <section>
        <div className="  lg:max-w-[670px]  px-5 py-20 mx-auto">
          <div className="flex flex-wrap m-4 text-center items-center">
            <div className="p-4 sm:w-1/5 w-1/2">
              <Image
                src={"/google.png"}
                alt="google-img"
                width={71.1}
                height={24.15}
              />
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <Image
                src={"/slack.png"}
                alt="slack-img"
                width={71.1}
                height={24.15}
              />{" "}
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <Image
                src={"/atlassian.png"}
                alt="atlassian-img"
                width={71.1}
                height={24.15}
              />
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <Image
                src={"/dropbox.png"}
                alt="dropbox-img"
                width={71.1}
                height={24.15}
              />
            </div>
            <div className="p-4 sm:w-1/5 w-1/2">
              <Image
                src={"/shopify.png"}
                alt="shopify-img"
                width={71.1}
                height={24.15}
              />
               </div>
          </div>
        </div>
      </section>
    </>
  );
  
};

export default brand;
