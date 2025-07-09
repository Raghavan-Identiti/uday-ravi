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
            question: "Which surgery is the best for gallstones?",
            answer: `For Gallstone treatment "Laparoscopic/Robotic cholecystectomy" is the best surgical method for removal of the gallbladder. In this procedure, the patient has minimum pain, early recovery, and less scarring.`,
        },
        {
            question: "Can gallstones be prevented?",
            answer: `Gallstones cannot be prevented. However, you can decrease your risk factors by following healthy lifestyle tips. It is important to maintain a healthy weight through exercise and a balanced diet`,
        },
        {
            question: "Can I have gallstones more than once?",
            answer: `Yes. If you have experienced a gallstone attack once, it is more likely that you will have them again.`,
        },
        {
            question: " What are the risk factors for the formation of cholesterol gallstones?",
            answer: `
                <p>
                    Risk factors for the appearance of cholesterol gallstones include the following:
                </p>
                <ul>
                    <li>
                        Females
                    </li>
                    <li>
                        Being overweight
                    </li>
                    <li>
                        Fast weight loss on a starvation diet, or Taking certain medicines such as
                        birth control pills or cholesterol-reducing drugs
                    </li>
                </ul>
            `,
        },
        {
            question: "Why not delay Gall bladder stone treatment?",
            answer: `
                <p>
                    Gallstones are the most ordinary reason for acute and chronic cholecystitis.
                    Treatment for gallstones should be done as soon as possible because it can lead
                    to difficulties such as:
                </p>
                <ul>
                    <li>
                        Acute cholecystitis
                    </li>
                    <li>
                        Chronic cholecystitis
                    </li>
                    <li>
                        Acute pancreatitis
                    </li>
                </ul>
            `,
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
                            FAQ for GALLBLADDER STONES
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
