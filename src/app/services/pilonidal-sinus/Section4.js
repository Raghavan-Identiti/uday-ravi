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
            answer: `As an effect of pilonidal sinus, one can suffer from severe pain, swelling, and pus or blood discharge from the anal area. If left untreated, it can lead to complications such as:
            <ul>
                <li>If left untreated, a pilonidal sinus can lead to serious conditions</li>
                <li>Can be extremely painful and make it challenging to sit or walk.</li>
                <li>If an abscess bursts, it can lead to sepsis, a potentially life-threatening situation.</li>
                <li>Pilonidal sinus conditions can also cause fever, chills, and fatigue.</li>
                <li>Early Treatment for a pilonidal sinus is generally quick and easy, and can usually be done in an outpatient setting.</li>
                <li>Delaying treatment can lead to more serious difficulties that may need hospitalization.</li>
            </ul>
            `,
        },
        {
            question: "Is pilonidal sinus curable?",
            answer: `Pilonidal sinus is curable as well as preventable. If the cyst is infected then it can be cured via an advanced laser method.`,
        },
        {
            question: "What are the treatment options for pilonidal sinus?",
            answer: `
            To relieve your signs, your doctor may suggest one of the following treatments:
            <ul>
                <li>Laser surgery</li>
                <li>Excision: In some cases, the entire pilonidal sinus may need to be surgically removed. This is usually done under general anesthesia and may require a longer recovery time.</li>
                <li>Use of antibiotics, anti-inflammatory drugs, and painkillers</li>
                <li>Open surgery</li>
                <li>Electrocautery</li>
            </ul>
            `,
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
