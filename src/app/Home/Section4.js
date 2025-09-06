"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Section4.module.css';
import Image from 'next/image';
import sideImage from '../assets/Rectangle 525.png'; // Replace with your actual image
import sideImage2 from '../assets/Group 137.png'; // Replace with your actual image
// import sideImage3 from '../assets/ravi.png';

export default function Section4() {
    return (
        <section id='about-doctor' className={`${styles.Section4}`}>
            <div className={`${styles.Section4container} container`}>
                <div className={` ${styles.Section4colmd7Heading}`}>
                    <button className={`${styles.Section4Button} btn`} data-aos="fade-up" data-aos-delay="100">ABOUT Dr. RAVI</button>
                    <h1 className={`${styles.Section4Title}`} data-aos="fade-up" data-aos-delay="200">
                        Precision Surgery with Dr. Uday Ravi
                    </h1>
                    <p className={`${styles.Section4Para}`} data-aos="fade-up" data-aos-delay="200">
                        Expert Care, Faster Recovery
                    </p>
                </div>
                <div className={` row ${styles.Section4Row}`}>
                    <div className={`col-lg-6 col-12 ${styles.Section4colmd7}`} data-aos="fade-up" data-aos-delay="200">
                        <h3 className={`${styles.Section4subTitle}`} >
                            Academic
                        </h3>
                        <p>
                            Dr. Uday Ravi, MBBS, MS, FMAS, FIAGES, FISCP, FARIS, FALS, DMAS (France), is a highly accomplished General, Laser, Laparoscopic, Robotic, and Bariatric Surgeon with over 15 years of surgical experience. He completed his MBBS from VIMS, Bellary, and went on to pursue his MS in General Surgery from the prestigious Bangalore Medical College (BMC), Bangalore. His passion for advancing surgical care led him to earn multiple fellowships in minimally invasive, advanced laparoscopic, and robotic surgery, including international training in France.
                        </p>
                        <h3 className={`${styles.Section4subTitle}`}>
                            Specialization
                        </h3>
                        <p>
                            Dr. Uday Ravi specializes in laser procedures for varicose veins and proctology conditions (piles, fissure, fistula, pilonidal sinus), minimally invasive laparoscopic surgeries for gallbladder, hernia, and appendicitis, and robotic-assisted surgeries that ensure precision, safety, and faster recovery. He is also an expert in bariatric and weight-loss procedures, offering advanced solutions such as intragastric ballooning and sleeve gastrectomy. His practice further extends to thyroid and breast surgeries, diabetic foot and wound management, as well as excision of cysts, swellings, corns, and lipomas.
                        </p>
                        <h3 className={`${styles.Section4subTitle}`}>
                            Consultancy
                        </h3>
                        <p>
                            As a visiting consultant at leading hospitals including Manipal, Fortis, Apollo, Sparsh, People Tree, BGS Hospital, and several other reputed nursing homes, Dr. Uday Ravi brings world-class expertise to a wide range of patients.
                        </p>
                        <h3 className={`${styles.Section4subTitle}`} >
                            Approach
                        </h3>
                        <p>
                            Renowned for his patient-centered approach, Dr. Uday Ravi combines cutting-edge surgical technology with compassion and precision. His focus on minimally invasive techniques ensures reduced pain, faster healing, minimal scarring, and lasting results—making him one of the most trusted names in modern surgical care.
                        </p>
                    </div>
                    <div className={`col-lg-6 col-12 ${styles.Section4colmd5}`} data-aos="fade-up" data-aos-delay="200">
                        {/* <Image src={sideImage} alt="Image" className={`d-inline-block ${styles.Section4colmd5Image1}`} data-aos="fade-up" data-aos-delay="100"/> */}
                        <Image src={sideImage2} alt="Image" className={`d-inline-block ${styles.Section4colmd5Image2} mb-5`} data-aos="fade-up" data-aos-delay="300" />
                    </div>
                </div>
            </div>
        </section>
    );
}
