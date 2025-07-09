"use client"
import Footer from "../../Footer/Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section6 from "./Section6";
import styles from './Section1.module.css';
import Navbar from '../../Navbar/Navbar'; // Adjust the path as necessary
import PopupForm from '@/app/PopupModal/popupmodal';
import { useState } from "react";


export default function Serivces() {
  const [showPopup, setShowPopup] = useState(false);
  
  return (  
    <section className={styles.sectionOneWrapper}>
      <div className={`${styles.navOverlayWrapper} container pt-lg-5`}>
        <Navbar setShowPopup={setShowPopup}/>
      </div>
      <Section1/>
      <Section2 setShowPopup={setShowPopup}/>
      <Section6/>
      <Footer/>

      <PopupForm showPopup={showPopup} setShowPopup={setShowPopup} />
    
    </section>
  );
}
