"use client";
import Image from "next/image";
import doctorImg from "../../assets/ServicepageAboutModel.png"; // replace with your actual image path
import styles from "./Section5.module.css";

export default function SectionAbout() {
    return (
        <section className={`container ${styles.Section5}`}>
            <div className={`row align-items-stretch ${styles.fullHeightRow}`}>
                <div className={`col-lg-7 ${styles.colFullHeight}`}>
                    <div className={`${styles.aboutBox} p-5 p-lg-5`}>
                        <h4 className="text-white fw-bold mb-3">ABOUT DR.</h4>
                        <p className="text-white mb-3">
                            Dr. Uday Ravi is a renowned consultant General, Laser,
                            Laparoscopic, Robotic and Bariatric surgeon practising in
                            Bangalore since 15 years. He completed his MBBS from VIMS Bellary
                            and MS from prestigious Bangalore Medical College, Bangalore. He
                            has many fellowships <strong>FARIS, FMAS, FALS, FIAGES, FISCP and DMAS(France)</strong>.
                        </p>
                        <p className="text-white mb-3">
                            Dr. Uday Ravi, combines advanced techniques with a personalized approach to deliver
                            exceptional results. With a reputation built on precision, innovation, and patient-centered
                            care, Dr Ravi ensures that each patient’s journey is nothing short of life-changing. Every
                            effort is made to ensure your comfort and confidentiality, while focusing on helping you
                            achieve your aesthetic goals. Dr Ravi is dedicated to providing you with the finest possible
                            medical services with individualized and personalized care.
                        </p>
                    </div>
                </div>
                <div className="col-lg-5 p-0">
                    <div className={styles.doctorImg}>
                        <Image
                            src={doctorImg}
                            alt="Dr. Uday Ravi"
                            className="img-fluid w-100"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
