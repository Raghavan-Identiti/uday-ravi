"use client";
import styles from './Section1.module.css';
import Navbar from '../../Navbar/Navbar'; // Adjust the path as necessary
import HydroceleBannerImg from '../../assets/HydroceleBannerImg.png'
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">
        <div className="row mx-3 align-items-center">
          <div className={`col-lg-6 col-12 ${styles.HeroSectionText}`}>
            <h1 className={`${styles.heroTitle}`} data-aos="fade-right">
               Genito-Urinary & <br/>Men’s Health
            </h1>
            <p className={`${styles.HeroSectionPara}`} data-aos="fade-right" data-aos-delay="300">
              Specialized laser and minimally invasive treatments for kidney stones, hydrocele, varicocele, and reproductive health issues, ensuring safe and effective solutions.
            </p>
          </div>
          <div className={`col-lg-6 col-12 ${styles.HeroSectionImgdiv}`} data-aos="fade-left">
            {/* <div className={styles.HeroSectionImageWrapper}> */}
            <Image
              src={HydroceleBannerImg}
              alt="HydroceleBannerImg"
              className={styles.HeroSectionImg}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
