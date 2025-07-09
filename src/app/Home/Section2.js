"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Section2.module.css';
import Image from 'next/image';
import sideImage from '../assets/Group 124.png'; // Replace with your actual image
import tick from '../assets/Group 49.png'; // Replace with your actual image
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Section2() {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // 1 second animation
            once: false,     // 👈 run animation every time element is in view
        });
    }, []);

    return (
        <section className={`${styles.Section2}`}>
            <div className={`${styles.Section2container} container`} >
                <div className={` row ${styles.Section2Row}`}>
                    <div className={`col-12 col-xl-8 ${styles.Section2colmd7}`} >
                        <h1 className={`${styles.Section2Title}`}  data-aos="fade-up" >
                            Expert Surgical Care Across Specialties in Bangalore
                        </h1>
                        <p className={`${styles.Section2Para}`}  data-aos="fade-up" data-aos-delay="300">
                            Precision-driven, minimally invasive treatments for faster recovery and superior outcomes.
                        </p>
                        <div className={`row m-0 ${styles.Section2List}`} data-aos="fade-up" data-aos-delay="300">
                            <div className="col-lg-6 col-12 ">
                                <ul className="list-unstyled" >
                                    <li className={`${styles.Section2ListItem} mb-2`}>
                                        <Image src={tick} alt="Icon" className={`${styles.Section2ListIcon} me-2`} />
                                        Institute for Laser & Laparoscopic Surgery
                                    </li>
                                    <li className={`${styles.Section2ListItem} mb-2`}>
                                        <Image src={tick} alt="Icon" className={`${styles.Section2ListIcon} me-2`} />
                                        Advanced Hernia & Gastrointestinal Surgery
                                    </li>
                                    <li className={`${styles.Section2ListItem} mb-2`}>
                                        <Image src={tick} alt="Icon" className={`${styles.Section2ListIcon} me-2`} />
                                        Vascular & Varicose Vein Treatment Center
                                    </li>
                                    <li className={`${styles.Section2ListItem} mb-2`}>
                                        <Image src={tick} alt="Icon" className={`${styles.Section2ListIcon} me-2`} />
                                        Diabetic Foot & Wound Care Clinic
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-6 col-12 ">
                                <ul className={`list-unstyled`}>
                                    <li className={`${styles.Section2ListItem} mb-2`}>
                                        <Image src={tick} alt="Icon" className={`${styles.Section2ListIcon} me-2`} />
                                        Men’s Health & Urology Center
                                    </li>
                                    <li className={`${styles.Section2ListItem} mb-2`}>
                                        <Image src={tick} alt="Icon" className={`${styles.Section2ListIcon} me-2`} />
                                        Plastic & Reconstructive Surgery
                                    </li>
                                    <li className={`${styles.Section2ListItem} mb-2`}>
                                        <Image src={tick} alt="Icon" className={`${styles.Section2ListIcon} me-2`} />
                                        Bariatric & Metabolic Surgery Unit
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className={`${styles.btnPrimary} ${styles.Section2Button} btn`} data-aos="fade-up" data-aos-delay="300">View All Specialties</button>
                    </div>
                    <div className={`col-12 col-xl-4 ${styles.Section2colmd5}`}>
                        <Image src={sideImage} alt="Image" className="d-inline-block" />
                    </div>
                </div>
            </div>
        </section>
    );
}
