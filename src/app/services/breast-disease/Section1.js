"use client";
import styles from './Section1.module.css';
import Image from 'next/image';
import fibroadenomaBannerImg from '../../assets/fibroadenomaBannerImg.png'

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection} `}>
      <div className="container">
          <div className="row mx-3 align-items-center">
          <div className={`col-lg-6 col-12 ${styles.HeroSectionText}`}>
            <h1 className={styles.heroTitle} data-aos="fade-right">
              Breast <br/> Diseases
            </h1>
            <p className={styles.HeroSectionPara} data-aos="fade-right" data-aos-delay="300">
              Safe removal of benign breast lumps with minimal scarring and excellent cosmetic results.
            </p>
          </div>
          <div className={`col-lg-6 col-12 ${styles.HeroSectionImgdiv}`} data-aos="fade-left">
            {/* <div className={styles.HeroSectionImageWrapper}> */}
            <Image
              src={fibroadenomaBannerImg}
              alt="fibroadenomaBannerImg"
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
