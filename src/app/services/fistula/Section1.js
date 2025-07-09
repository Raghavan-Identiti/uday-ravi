"use client";
import styles from './Section1.module.css';
import Navbar from '../../Navbar/Navbar'; // Adjust the path as necessary
import FistulaBannerImg from '../../assets/FistulaBannerImg.png'
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection} `}>
      <div className="container">
        <div className="row mx-3 align-items-center">
          <div className={`col-lg-6 col-12 ${styles.HeroSectionText}`} >
            <h1 className={`${styles.heroTitle}`} data-aos="fade-right">
              Proctology <br/> (Fistulas)
            </h1>
            <p className={`${styles.HeroSectionPara}`} data-aos="fade-right" data-aos-delay="300">
              Stitch-free laser treatments for fistulas with fast, painless recovery.
            </p>
          </div>
          <div className={`col-lg-6 col-12 ${styles.HeroSectionImgdiv}`} data-aos="fade-left">
            {/* <div className={styles.HeroSectionImageWrapper}> */}
            <Image
              src={FistulaBannerImg}
              alt="FistulaBannerImg"
              className={styles.HeroSectionImg}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
