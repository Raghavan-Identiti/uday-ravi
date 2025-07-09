"use client";
import styles from './Section1.module.css';
import Image from 'next/image';
import gallbladderBannerImg from '../../assets/gallbladderBannerImg.png'

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">
        <div className="row mx-3 align-items-center">
          <div className={`col-lg-6 col-12 ${styles.HeroSectionText}`}>
            <h1 className={`${styles.heroTitle}`} data-aos="fade-right">
              Gastroenterology & <br/> GI Surgery
            </h1>
            <p className={`${styles.HeroSectionPara}`} data-aos="fade-right" data-aos-delay="300">
              Precision laparoscopic surgeries for gallstones, <br/> reflux, hernias, and GI cancers.
            </p>
          </div>
          <div className={`col-lg-6 col-12 ${styles.HeroSectionImgdiv}`} data-aos="fade-left">
            <Image src={gallbladderBannerImg} alt="gallbladderBannerImg" className={styles.HeroSectionImg}/>
          </div>
        </div>
      </div>
    </section>
  );
}
