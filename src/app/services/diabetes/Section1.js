"use client";
import styles from './Section1.module.css';
import Image from 'next/image';
import DiabetesNewHeroImg from '../../assets/DiabetesNewHeroImg.png'

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">
        <div className="row mx-3 align-items-center">
          <div className={`col-lg-6 col-12 ${styles.HeroSectionText}`}>
            <h1 className={styles.heroTitle} data-aos="fade-right">
              Diabetic Foot & Chronic Wound Management
            </h1>
            <p className={styles.HeroSectionPara} data-aos="fade-right" data-aos-delay="300">
              Specialized wound care using VAC therapy and grafting for faster healing.
            </p>
          </div>
          <div className={`col-lg-6 col-12 ${styles.HeroSectionImgdiv}`} data-aos="fade-left">
            {/* <div className={styles.HeroSectionImageWrapper}> */}
            <Image
              src={DiabetesNewHeroImg}
              alt="DiabetesNewHeroImg"
              className={styles.HeroSectionImg}
            />
            {/* </div> */}
          </div>

          {/* <div className="col-lg-1 d-none d-lg-block"></div> */}
        </div>
      </div>
    </section>
  );
}
