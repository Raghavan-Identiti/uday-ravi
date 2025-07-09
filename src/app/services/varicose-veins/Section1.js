"use client";
import styles from './Section1.module.css';
import Navbar from '../../Navbar/Navbar';
import Image from 'next/image';
import VaricoseVeinsBannerImg from '../../assets/VaricoseVeinsBannerImg.png'

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">
        <div className="row mx-3 align-items-center">
          <div className={`col-lg-6 col-12 ${styles.HeroSectionText}`}>
            <h1 className={styles.heroTitle} data-aos="fade-right">
              Vascular <br/>Surgeries 
            </h1>
            <p className={styles.HeroSectionPara} data-aos="fade-right" data-aos-delay="300">
              Advanced laser and RFA treatments for varicose veins and arterial bypass procedures.
            </p>
          </div>
          <div className={`col-lg-6 col-12 ${styles.HeroSectionImgdiv}`} data-aos="fade-left">
            {/* <div className={styles.HeroSectionImageWrapper}> */}
            <Image
              src={VaricoseVeinsBannerImg}
              alt="VaricoseVeinsBannerImg"
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
