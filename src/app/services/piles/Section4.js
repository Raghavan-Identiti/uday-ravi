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
            question: "What happens if you don't treat your piles?",
            answer: `<p>
                        Internal hemorrhoids that go untreated might cause bleeding. External hemorrhoids can cause thrombosis (blood clotting), leading to hemorrhoidal strangulation and extreme pain. It could indicate thrombosed hemorrhoids if you know you have hemorrhoids and are experiencing acute and severe anal pain.
                    </p>`
        },
        {
            question: "Is surgery the only option to treat piles?",
            answer: "Without surgery, the pain of thrombosed hemorrhoids should go away in 7 to 10 days. Hemorrhoids that aren’t infected should decrease in a week. It could take a few weeks for the lump to disappear completely. But if the condition worsens, surgical removal is the only option left.",
        },
        {
            question: "Can Piles Burst?",
            answer: "Thrombosed hemorrhoids can occur in both external and internal hemorrhoids. A blood clot forms inside the vein as a result of this. Hemorrhoids that have thrombosed are not harmful, but they can cause a lot of pain and inflammation. Hemorrhoids can burst if they become too full of blood.",
        },
        {
            question: "Can stress cause piles?",
            answer: "Constipation and diarrhea can cause hemorrhoids to flare up, and stress can create digestive difficulties. When people are agitated, their sphincter muscles tighten, and the rectum is compressed. Hemorrhoids might flare up as a result of this pressure.",
        },
        {
            question: "Is piles 100% curable?",
            answer: "Piles can be effectively treated and managed, but a complete cure may vary depending on the individual case and the severity of the condition.",
        },
    ];

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className={`${styles.Section4}`} >
            <div className={`${styles.Section4container} container`}>
                <div className={` row ${styles.Section4Row}`}>
                    <div className={`col-lg-6 col-12 ${styles.Section4colmd6} ${styles.Section4colmd6Right}`}  >
                        {/* <button className={`${styles.Section4Button} btn`}>INSIGHTS</button> */}
                        <h1 className={`${styles.Section4Title}`}>
                            FAQ for piles
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
