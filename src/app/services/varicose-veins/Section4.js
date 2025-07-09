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
            question: "Who is more at risk males or females?",
            answer: `Generally females are more at risk of varicose veins due to hormonal changes during the menstrual period, pregnancy and menopause. The female to male ratio is approximately 60:40`,
        },
        {
            question: "How to prevent varicose veins from happening?",
            answer: `
            <ul>
                    <li>
                        Avoid wearing heels
                    </li>
                    <li>
                        Don’t sit or stand in one position for a long time
                    </li>
                    <li>
                        Eat high fibre diet
                    </li>
                    <li>
                        Exercise regularly
                    </li>
                    <li>
                        Have a check on weight
                    </li>
                </ul>`,
        },
        {
            question: "Why do varicose veins need to be treated?",
            answer: `If left untreated, varicose veins can lead to health problems like skin blackening, nonhealing ulcers/open wounds and infection(sepsis), superficial thrombophlebitis further causing deep vein thrombosis or pulmonary thrombophlebitis, excessive bleeding from the veins causing medical emergency.`,
        },
        {
            question: "Is varicose veins treatment painful?",
            answer: "No. Varicose veins surgery is performed under the influence of anesthesia which makes the procedure completely minimal pain.",
        },
        {
            question: "How long does I have to stay at the hospital after varicose veins surgery?",
            answer: "Advanced varicose veins surgery is performed on the outpatient basis. Once the procedure is completed and anesthesia wears off you can go home on the same day. The whole procedure usually takes 1-2 hours depending on the type of technique used for varicose veins surgery",
        },
        {
            question: "Is it safe to undergo laser varicose veins treatment?",
            answer: "Yes. Laser treatment for varicose veins is safe and effective as it is a minimally invasive procedure that closes the damaged veins",
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
                            FAQ for Appendicitis
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
