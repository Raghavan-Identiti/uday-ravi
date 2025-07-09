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
            question: "Can fissures be cured permanently?",
            answer: "As per studies and fissure specialists, surgery is considered to be the permanent cure for anal fissures. Dr. Uday Ravi fissure specialist doctor usually perform a procedure called lateral internal sphincterotomy (LIS) for permanent healing of the fissure.",
        },
        {
            question: "What is laser treatment for fissures?",
            answer: "In Laser Sphincterotomy, Dr. Uday Ravi, Fissure specialist in Bangalore, uses the laser to create an incision. This helps to relax the tight anal sphincter muscles thereby helping in the healing of the fissure.",
        },
        {
            question: "How can anal fissures be prevented after treatment?",
            answer: `<ul>
                        <li>Keeping the affected area clean.</li>
                        <li>Using mild soap and warm water to clean</li>
                        <li>Consuming fibrous food and plenty of water</li>
                        <li>Regular exercises to avoid constipation</li>
                        <li>Treating diarrhea or constipation immediately</li>
                    </ul>`,
        },
        {
            question: "What is the difference between hemorrhoids (piles) and anal fissures?",
            answer: "Anal fissures are small tears or cuts on the skin inside the anus. Whereas, piles, also known as hemorrhoids are swollen veins and surrounding tissue around the anus or anal canal",
        },
        {
            question: "Are anal fistula and anal fissure the same?",
            answer: "Anal fistula and anal fissure are two different anorectal diseases. An abnormal tunnel-like connection between the bowel and perianal skin is the anal fistula. Whereas an anal fissure is a tear or paper-like cut in the lining of the anus.",
        },
        {
            question: "What can happen if anal fissures are left untreated?",
            answer: "If anal fissures are left untreated, they can cause severe constipation, fecal impaction, pain in the anal area, sentinel pile, difficulty to do daily activities, and can form an anal fistula. To avoid these, you should not delay the anal fissure treatment.",
        },
         {
            question: " How long does it take to recover after anal fissure laser surgery?",
            answer: "Recovering to normal life after laser fissure surgery should not take more than 3 days. Most individuals can go back to work and their normal routine 1 to 2 weeks after surgery. It will assumably take about 6 weeks for your anus to completely heal. Most individuals get better without any issues.",
        },
    ];

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className={`${styles.Section4}`} >
            <div className={`${styles.Section4container} container`}>
                <div className={` row ${styles.Section4Row}`}>
                    <div className={`col-lg-6 col-12 ${styles.Section4colmd6} ${styles.Section4colmd6Right}`} >
                        {/* <button className={`${styles.Section4Button} btn`}>INSIGHTS</button> */}
                        <h1 className={`${styles.Section4Title}`}>
                            FAQ for Fissure
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
