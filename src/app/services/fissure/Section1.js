"use client";
import styles from './Section1.module.css';
import Navbar from '../../Navbar/Navbar'; // Adjust the path as necessary
import FissureBannerImg from '../../assets/FissureBannerImg.png'
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">

        <div className="row mx-3 align-items-center">
          <div className={`col-lg-6 col-12 ${styles.HeroSectionText}`} >
            <h1 className={`${styles.heroTitle}`} data-aos="fade-right">
              Proctology <br/> (Fissures)
            </h1>
            <p className={`${styles.HeroSectionPara}`} data-aos="fade-right" data-aos-delay="300">
              Stitch-free laser treatments forfissures with fast, painless recovery.
            </p>
          </div>
          <div className={`col-lg-6 col-12 ${styles.HeroSectionImgdiv}`} data-aos="fade-left">
            {/* <div className={styles.HeroSectionImageWrapper}> */}
            <Image
              src={FissureBannerImg}
              alt="FissureBannerImg"
              className={styles.HeroSectionImg}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
