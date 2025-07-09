"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Section4.module.css';
import Image from 'next/image';
import sideImage from '../assets/Rectangle 525.png'; // Replace with your actual image
import sideImage2 from '../assets/Group 137.png'; // Replace with your actual image

export default function Section4() {
    return (
        <section id='about-doctor' className={`${styles.Section4}`}>
            <div className={`${styles.Section4container} container`}>
                <div className={` row ${styles.Section4Row}`}>
                    <div className={`col-lg-6 col-12 ${styles.Section4colmd7}`}>
                        <button className={`${styles.Section4Button} btn`} data-aos="fade-up" data-aos-delay="100">ABOUT Dr. RAVI</button>
                        <h1 className={`${styles.Section4Title}`} data-aos="fade-up" data-aos-delay="200">
                            Precision Surgery with Dr. Uday Ravi
                        </h1>
                        <p className={`${styles.Section4Para}`} data-aos="fade-up" data-aos-delay="200">
                            Expert Care, Faster Recovery
                        </p>
                        <div className={`row ${styles.Section4List}`} data-aos="fade-up" data-aos-delay="300">
                            <div className="col-md-12 ">
                                <p>
                                    Dr. Uday Ravi combines 15+ years of surgical expertise with cutting-edge techniques to ensure minimally invasive, pain-free, and faster-healing treatments.
                                </p>
                                 <p>
                                    With a focus on laser and laparoscopic procedures, he delivers precision-driven care that helps you recover quickly and return to daily life with minimal disruption.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-6 col-12 ${styles.Section4colmd5}`}>
                        <Image src={sideImage} alt="Image" className={`d-inline-block ${styles.Section4colmd5Image1}`} data-aos="fade-up" data-aos-delay="100"/>
                        <Image src={sideImage2} alt="Image" className={`d-inline-block ${styles.Section4colmd5Image2}`} data-aos="fade-down" data-aos-delay="300"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
