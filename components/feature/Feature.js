import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import Link from "next/link";
import FeatureSection from "./FeatureSection"

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const feature = () => {
  return (
    <>
      <div className="mt-20">
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col  lg:flex-row ">
            <div className="max-w-[426px] mx-auto lg:pr-16  mb-10">
              <h5 className="mb-6 text-[34px] font-bold leading-[45px] text-white">
                <span className={styles.feature_text}>
                  The Future is Now and You Just Need To Realize It. Step into
                  Future Today & Make it Happen.
                </span>
              </h5>
              <p className="mb-6 pt-5 text-[#FF8A71]">
                Request Early Access to Get Started
              </p>
            </div>
            <div className="sm:px-10 grid gap-5 row-gap-5 sm:grid-cols-2 items-center">
              {featuresData.map((item, index) => (
                <FeatureSection
                  title={item.title}
                  text={item.text}
                  key={item.title + index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default feature;
