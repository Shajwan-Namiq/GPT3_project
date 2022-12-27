import React from 'react'
import styles from "../../styles/Home.module.css";

const FeatureSection = ({title, text}) => {
  return (
    <>
      <div className="lg:mb-5 lg:max-w-[182px] mx-auto">
        <div className={styles.liner_gradient}></div>

        <p className="text-[18px] text-white leading-[24px]">{title} </p>
      </div>

      <div className="mb-5 max-w-[334px] mx-auto">
        <p className="text-[14px] text-[#81AFDD] leading-[24px]">{text}</p>
      </div>
    </>
  );
}

export default FeatureSection