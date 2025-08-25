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
            question: "How much time gynecomastia surgery takes for recovery?",
            answer: `<p>Time duration for gyenecomastia surgery is around 90 to 120 min. <br/>The recovery of the gynecomastia surgery varies from person to person mostly patients return to work after a week light exercising can be resumed after two weeks of the surgery and more strenuous activities after four to six weeks of surgery.</p>`,
        },
        {
            question: "Is gynecomastia surgery long term surgery?",
            answer: `Mostly the gynecomastia surgery is long-term, but weight gain steroid or excessive intake of drugs use a hormone fluctuation that may lead to a reoccurrence of gynecomastia`,
        },
        {
            question: "Can exercise help in reducing gynecomastia?",
            answer: `Exercise can reduce some excess stored fat from the chest, but it does not affect glandular tissues causing gynecomastia it does not matter, how hard you exercise but it doesn’t leave any effect on the enlarged breasts.`,
        },
        {
            question: "Will the check-ups be continued after the surgery?",
            answer: "The check-ups will be continued after the surgery. There are only two to three checkups after the surgery and no further control is required. Dr. Uday Ravi is a professional in the field of gynecomastia. Patients are well satisfied with his service in hospitality, he has expertise in the field of gynecomastia surgery.",
        },
        {
            question: "What is the recovery period for liposuction surgery?",
            answer: "It is an outpatient procedure. The recovery time is relatively fast compared to any other cosmetic surgery. Many patients even start working after 3 to 10 days of recovery and start their normal routine after 2 to 5 weeks.",
        },
        {
            question: "Is liposuction surgery permanent?",
            answer: "Liposuction is permanent fat removal surgery, but weight gain can cause the surgery to fail and need to be done again.",
        },
        {
            question: "What are the side effects of liposuction surgery?",
            answer: "Side effects are like any other surgery, for example, hematoma, infection, irregular contouring, ARDS, fat embolus, cardiopulmonary injury, etc. Because of the latest advances in techniques and anaesthesia, now these complications are very rare.",
        },
        {
            question: "How is abdominoplasty different from liposuction?",
            answer: "Abdominoplasty simply called tummy tuck is done to make the abdomen thinner and firmer it involves the removal of excess sagging skin and muscles through the process of Incision and tightening of the muscle and fascia of the abdominal wall whereas liposuction simply called lipoplasty is a type of plastic surgery done for fat removal from various parts of the body like thighs, hips, neck, Buttock one to look free from obesity and elegant.",
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
                            FAQ for Resconstructive Surgery
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
