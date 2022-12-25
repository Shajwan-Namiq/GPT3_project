 

import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

 import {Footer , Blog , Possibility , Features , WhatGPT3 , Header } from '../containers';
 import {CTA , Brand , Navbar} from '../components';




export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.gradient_bg}>
        <Navbar />
       <div className='-mt-14'> <Header /></div>
       </div>
     
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
