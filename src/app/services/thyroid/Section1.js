"use client";
import styles from './Section1.module.css';
import Navbar from '../../Navbar/Navbar';
import Image from 'next/image';
import ThyroidBannerImg from '../../assets/ThyroidBannerImg.png'

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">
        <div className="row mx-3 align-items-center">
          <div className={`col-lg-6 col-12 ${styles.HeroSectionText}`}>
            <h1 className={styles.heroTitle} data-aos="fade-right">
              Thyroid <br/> Surgery
            </h1>
            <p className={styles.HeroSectionPara} data-aos="fade-right" data-aos-delay="300">
              Advanced thyroidectomy and breast procedures with precision treatment and aesthetic care.
            </p>
          </div>
          <div className={`col-lg-6 col-12 ${styles.HeroSectionImgdiv}`} data-aos="fade-left">
            {/* <div className={styles.HeroSectionImageWrapper}> */}
            <Image
              src={ThyroidBannerImg}
              alt="ThyroidBannerImg"
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
