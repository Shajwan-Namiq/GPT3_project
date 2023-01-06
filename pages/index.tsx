 import styles from '../styles/Home.module.css'
import {CTA , Brand , Navbar ,Header ,WhatGPT, Article,Footer ,Feature,Possibility} from '../components';




export default function Home() {
  return (
    <> 
    <div className={styles.home}>
    
      <div className={styles.gradient_bg}>
      <Navbar />
      <Header /> 
       </div>

      <Brand /> 
      <WhatGPT />
      <Feature />
      <Possibility />
      <CTA /> 
       <Footer />
    
    </div>
    
    </>
   
  )
}
