"use client";
import styles from './Section1.module.css';
import Image from 'next/image';
import CircumcisionNewHeroImg from '../../assets/CircumcisionNewHeroImg.png'
export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="container">
        <div className="row mx-3 align-items-center">
          <div className={`col-lg-6 col-12 ${styles.HeroSectionText}`}>
            <h1 className={`${styles.heroTitle}`} data-aos="fade-right">
              {"Circumcision (Laser & Stapler Techniques)"}
            </h1>
            <p className={`${styles.HeroSectionPara}`} data-aos="fade-right" data-aos-delay="300">
              Modern laser and stapler circumcision with minimal pain and same-day discharge.
            </p>
          </div>
          <div className={`col-lg-6 col-12 ${styles.HeroSectionImgdiv}`} data-aos="fade-left">
            <Image src={CircumcisionNewHeroImg} alt="CircumcisionNewHeroImg" className={styles.HeroSectionImg}/>
          </div>
        </div>
      </div>
    </section>
  );
}
