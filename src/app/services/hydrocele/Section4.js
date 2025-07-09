"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Section4.module.css';
import Image from 'next/image';
import FaqsSideImage from '../../assets/Servicepage_faqsImg.png'; // Replace with your actual image
import { useState } from 'react';

export default function Section4() {
    const [openIndex, setOpenIndex] = useState(0);
    const FAQDatas = [
        {
            question: "How is hydrocele diagnosed?",
            answer: `
                    <p>Hydrocele can be diagnosed on the basis of:</p>
                    <ul>
                        <li>Patient complaints and history of the swelling</li>
                        <li>Clinical examination</li>
                        <li>Ultrasound testes</li>
                        <li>Sometimes, an MRI scan of the testes./li>
                    </ul>
            `,
        },
        {
            question: "What happens during hydrocele surgery?",
            answer: "Anaesthesia is given before starting the procedure. A small incision is made on the sac, the fluid is drained, the inner lining of the sac is tied or removed, and the sac is then sutured and dressing is placed.",
        },
        {
            question: "How long is the recovery period after surgery?",
            answer: "One can resume daily activities within a week of the surgery, and complete recovery can take upto 2-3 months",
        },
        {
            question: "Can hydrocele recur after treatment?",
            answer: "If the cause of the hydrocele is not treated, like an infection filariasis or some kind of lymph obstruction, then a hydrocele can recur after treatment.",
        },
        {
            question: "Is laser surgery for hydrocele Painful?",
            answer: "Hydrocele laser surgery is a painless operation. Surgery is done under local anaesthesia, so the patient feels neither pain or discomfort during the laser operation. Aside from being a painless treatment, laser hydrocele surgery does not require stitches and results in no bleeding. The surgery takes 30 min to 1 hour and same-day discharge from the hospital.",
        },
        {
            question: "What can happen if a hydrocele is not treated?",
            answer: "If a communicating hydrocele does not resolve on its own and is not treated, it might lead to an inguinal hernia. In this disorder, a part of the intestine pushes through a groin region.",
        },
    ];

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className={`${styles.Section4}`} >
            <div className={`${styles.Section4container} container`}>
                <div className={` row ${styles.Section4Row}`}>
                    <div className={`col-lg-6 col-12 ${styles.Section4colmd6} ${styles.Section4colmd6Right}`}>
                        {/* <button className={`${styles.Section4Button} btn`}>INSIGHTS</button> */}
                        <h1 className={`${styles.Section4Title}`}>
                            FAQ for Hydrocele
                        </h1>
                        <div className={`row ${styles.Section4ImageRow}`}>
                            {FAQDatas.map((data, index) => (
                                <div
                                    key={index}
                                    className={`${styles.faqCard} ${openIndex === index ? styles.active : ""}`}
                                >
                                    <div className={styles.faqHeader} onClick={() => toggleIndex(index)}>
                                        <h5 className="mb-0">{data.question}</h5>
                                        <span className={styles.plus}>
                                            {openIndex === index ? "-" : "+"}
                                        </span>
                                    </div>
                                    <div
                                        className={styles.faqBodyWrapper}
                                        style={{
                                            maxHeight: openIndex === index ? "500px" : "0px",
                                            opacity: openIndex === index ? 1 : 0,
                                            overflow: "hidden",
                                            transition: "max-height 1s ease, opacity 0.5s ease",
                                        }}

                                    >
                                        <p className={styles.faqBody}>{data.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`col-lg-6 col-12  ${styles.Section4colmd6}`}>
                        <Image
                            src={FaqsSideImage}
                            alt="FAQs Side Image"
                            className={`${styles.Section4Image} img-fluid`}
                            
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
