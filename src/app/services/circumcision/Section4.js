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
            question: "Can newborns be circumcised through a stapler circumcision procedure?",
            answer: "Yes, ZSR stapler comes in various sizes. It is completely safe and provides excellent results in neonates and children. The procedure can be carried out under short GA and children can be discharged on same day",
        },
        {
            question: "Can I get stapler circumcision surgery even if I have an infected foreskin?",
            answer: `The stapler or ZSR circumcision can be done even in infected skin with excellent results. However, patient might need to take antibiotics for a longer period of time.`,
        },
        {
            question: "Do I need to visit a doctor to get the silicone ring removed?",
            answer: `No, you need not visit the doctor for the removal of silicon ring as it automatically comes out within 4-5 days after complete healing takes place. However, in 1% of patient’s silicon ring has to be taken out by the surgeon`,
        },
        {
            question: "Will circumcision affect my sexual drive or performance?",
            answer: "The impact of circumcision on sexual drive is a complex phenomenon and results may vary individually. The findings are not consistent and sexual performance can be influenced by a variety of psychological & emotional factors. In a nutshell, circumcision per say if any has a very modest effect on performance.",
        },
        {
            question: "Is circumcision covered under insurance?",
            answer: "Almost all the insurance companies cover this procedure as a cashless facility. Our clinic is partnered with some of the best hospitals in Bangalore and provides cashless treatment with all the insurance companies.",
        },
        {
            question: "Will I have pain after stapler circumcision surgery?",
            answer: "Stapler circumcision procedure is an almost painless procedure and patients are completely comfortable after the procedure. We advise patients to resume normal activities from the next day of surgery",
        },
        {
            question: "Does it affect penis size?",
            answer: "No, it does not affect penis size. ",
        },
        {
            question: " Does it affect sperm production or overall fertility?",
            answer: "Several studies have been conducted to study the effect of circumcision procedure on sperm parameters like motility, sperm count and morphology. does not affect the overall fertility and neither increases the sperm production. These studies didn’t document any significant change in the sperm parameters between circumcised and non-circumcised patients.",
        },
        {
            question: "What are 3 benefits of male circumcision?",
            answer: "The best benefit of male circumcision is that it increases the hygiene of penis and has a protective effect against three severely sexually transmitted diseases like HIV, Genital Herpes and Human Papilloma Virus. Human papilloma virus is one of the carcinogenic viruses leading to cancer of penis and cervix.",
        },
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
                            FAQ for circumcision
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
