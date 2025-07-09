"use client";
import styles from './Section1.module.css';
import Navbar from '../../Navbar/Navbar'; // Adjust the path as necessary
import WeightLossBannerImg from '../../assets/WeightLossBannerImg.png'
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">
        <div className="row mx-3 align-items-center">
          <div className={`col-lg-6 col-12 ${styles.HeroSectionText}`}>
            <h1 className={`${styles.heroTitle}`} data-aos="fade-right">
               Weight Loss &  <br/>Bariatric Surgery
            </h1>
            <p className={`${styles.HeroSectionPara}`} data-aos="fade-right" data-aos-delay="300">
              Safe weight loss solutions including gastric balloon and bypass surgery for lasting results.
            </p>
          </div>
          <div className={`col-lg-6 col-12 ${styles.HeroSectionImgdiv}`} data-aos="fade-left">
            {/* <div className={styles.HeroSectionImageWrapper}> */}
            <Image
              src={WeightLossBannerImg}
              alt="WeightLossBannerImg"
              className={styles.HeroSectionImg}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
