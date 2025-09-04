"use client";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './homesection.module.css';
import Image from "next/image";
import callIcon from '../assets/call-icon.png';

export default function Home() {
  return (
    <div className={styles.HomePage}>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <div className={styles.HomeCallNow}>
        <a href="tel:+919886642222" className={styles.HomeCallLink}>
          <Image src={callIcon} alt="call-icon" className={styles.HomeCallIcon}/>
        </a>
      </div>
    </div>
  );
}
