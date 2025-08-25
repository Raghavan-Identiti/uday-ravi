"use client";
import styles from './Section1.module.css';
import Navbar from '../../Navbar/Navbar';
import Image from 'next/image';
import reconstructiveSurgeryCover from '../../assets/reconstructiveSurgeryCoverNew.png'

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">
        <div className="row mx-3 align-items-center">
          <div className={`col-lg-6 col-12 ${styles.HeroSectionText}`}>
            <h1 className={styles.heroTitle} data-aos="fade-right">
              Plastic & Reconstructive Surgery
            </h1>
            <p className={styles.HeroSectionPara}data-aos="fade-right" data-aos-delay="300">
              Expert body contouring, gynecomastia correction, and breast procedures for natural results.
            </p>
          </div>
          <div className={`col-lg-6 col-12 ${styles.HeroSectionImgdiv}`} data-aos="fade-left">
            {/* <div className={styles.HeroSectionImageWrapper}> */}
            <Image
              src={reconstructiveSurgeryCover}
              alt="reconstructiveSurgeryCover"
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
