"use client";
import Image from "next/image";
import doctorImg from "../../assets/ServicepageAboutModel.png"; // replace with your actual image path
import styles from "./Section5.module.css";

export default function SectionAbout() {
    return (
        <section className={`container ${styles.Section5}`} >
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
                            Dr. Uday Ravi is a highly skilled professional with a vast experience of 15 years. He brings a wealth of knowledge to ensure that your weight loss journey is guided by expertise at every step.
                        </p>
                        <p className="text-white mb-3">
                            Dr Ravi offers a state-of-the-art program to monitor and track your weight loss journey. This
                            program provides real-time insights and personalized recommendations to optimize your
                            results and help you achieve the best results.
                        </p>
                        <p className="text-white mb-0">
                            A best weight loss program, requires a multidisciplinary approach to achieve the best results.
                            Dr Ravi has designed a highly professional team of nutritionists, physicians, and
                            endocrinologists. They synchronize to tailor the best treatment plan to your unique needs
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
