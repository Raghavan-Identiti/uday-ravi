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
            question: "What are the risks associated with an appendix operation?",
            answer: `
            <p>Risks associated with an appendix operation:</p>
            <ul>
                <li>
                    Wound infection
                </li>
                <li>
                    Pus formation inside the gut
                </li>
                <li>
                    Pneumonia
                </li>
                <li>
                    Venous thromboembolism
                </li>
                <li>
                    Anal fistula formation
                </li>
            </ul>
            `,
        },
        {
            question: "Are there any risks involved in laparoscopic appendicectomy?",
            answer: `Laparoscopic appendicectomy is one of the most common surgeries being performed today. It is safe and has a very low difficulty rate`,
        },
        {
            question: "Why laparoscopic appendix surgery?",
            answer: `
                <ul>
                    <li>
                        Painless
                    </li>
                    <li>
                        45 minutes procedure
                    </li>
                    <li>
                        Permanent cure
                    </li>
                    <li>
                        No recurrence of appendicitis
                    </li>
                    <li>
                        High success rate
                    </li>
                    <li>
                        Less risk of infection
                    </li>
                </ul>
            `,
        },
        {
            question: "To delaying appendicitis treatment can cause the appendix to rupture?",
            answer: "Yes. Consult the expert and highly experienced Dr. Uday Ravi in Bangalore to undergo appendix removal surgery through a safe and advanced minimally-invasive Laparoscopic/Robotic procedure",
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
                            FAQ for cysts and swelling
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
