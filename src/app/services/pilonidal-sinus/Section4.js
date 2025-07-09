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
            question: "Why not delay Pilonidal Sinus treatment?",
            answer: "The recovery of the gynecomastia surgery varies from person to person mostly patients return to work after a week light exercising can be resumed after two weeks of the surgery and more strenuous activities after four to six weeks of surgery.",
        },
        {
            question: "Is pilonidal sinus curable?",
            answer: `Pilonidal sinus is curable as well as preventable. If the cyst is infected then it can be cured via an advanced laser method.`,
        },
        {
            question: "What are the treatment options for pilonidal sinus?",
            answer: `Exercise can reduce some excess stored fat from the chest, but it does not affect glandular tissues causing gynecomastia it does not matter, how hard you exercise but it doesn’t leave any effect on the enlarged breasts.`,
        },
        {
            question: "What are the treatment options for pilonidal sinus?",
            answer: "The check-ups will be continued after the surgery. There are only two to three checkups after the surgery and no further control is required. Dr. Uday Ravi is a professional in the field of gynecomastia. Patients are well satisfied with his service in hospitality, he has expertise in the field of gynecomastia surgery.",
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
                            FAQ for Pilonidal Sinus
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
