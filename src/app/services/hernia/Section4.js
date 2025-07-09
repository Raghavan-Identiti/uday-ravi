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
            question: "Can hernia heal without surgery?",
            answer: "No, hernias do not heal on their own without surgery. Surgical repair is the recommended treatment for inguinal hernias.",
        },
        {
            question: "What is the first-line treatment for hernia?",
            answer: `Surgical repair is the first line of treatment for inguinal hernia.`,
        },
        {
            question: "Is hernia surgery safe?",
            answer: `Hernia surgery is generally considered safe, but like any surgical procedure, it carries some risks. The specific safety and risk factors depend on individual circumstances, and it is best to discuss them with a doctor.`,
        },
        {
            question: "Is there a permanent cure for hernia?",
            answer: "Surgical repair is the most common and effective treatment for hernias, providing a long-term and often permanent solution to the condition",
        },
        {
            question: "What are the possible complications of hernia repair surgery?",
            answer: "Possible complications of hernia repair surgery include infection, bleeding, recurrence of the hernia, pain or discomfort, injury to nearby structures, and reactions to anesthesia",
        },
        {
            question: "How can I reduce my risk of getting a hernia?",
            answer: "To reduce the risk of getting a hernia, it is recommended to maintain a healthy weight, engage in regular exercise to strengthen abdominal muscles and avoid heavy lifting or straining activities.",
        }
    ];

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className={`${styles.Section4}`}>
            <div className={`${styles.Section4container} container`}>
                <div className={` row ${styles.Section4Row}`}>
                    <div className={`col-lg-6 col-12 ${styles.Section4colmd6} ${styles.Section4colmd6Right}`} >
                        {/* <button className={`${styles.Section4Button} btn`}>INSIGHTS</button> */}
                        <h1 className={`${styles.Section4Title}`}>
                            FAQ for Hernia
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
                                        <div className={styles.faqBody}
                                         dangerouslySetInnerHTML={{ __html: data.answer }}
                                         >
                                        </div>
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
