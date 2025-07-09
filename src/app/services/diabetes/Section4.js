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
            question: "Can diabetic foot be cured?",
            answer: "There is no cure for diabetic neuropathy. However, there are certain measures you can take to prevent it or slow the progression, which include having antibodies, antibiotics, keeping the ulcer clean and disinfected etc.",
        },
        {
            question: "How can a Diabetic Foot Ulcer Be Prevented?",
            answer: `
                <p>With the following precautions, you can easily prevent diabetic foot ulcers -</p>
                    <ul>
                        <li>Wash your feet daily</li>
                        <li>Don’t walk barefoot</li>
                        <li>Wear shoes that properly fit</li>
                        <li>Eat a proper diet rich in vitamins and minerals such as – zinc, copper, protein, etc.</li>
                        <li>Lastly, check for any irritation or numbness on the feet.</li>
                    </ul>
            `,
        },
        {
            question: "Can I treat a diabetic foot ulcer at home?",
            answer: `
                <p>You can effectively minimize the symptoms of a diabetic foot ulcer at home if it is at the initial stage. The following are the ways how you can do that -</p>
                    <ul>
                        <li>Add zinc to your diet</li>
                        <li>Apply aloevera gel to soothe the inflammation and irritation</li>
                        <li>Use tea tree oil to ward off the infections</li>
                        <li>Use coffee as it stimulates blood flow</li>
                        <li>However, for chronic diabetic ulcers, you must visit a doctor immediately for clinical 
                            assessment, evaluation, proper diagnosis and individualistic treatment plans.
                        </li>
                    </ul>
            `,
        },
        {
            question: "How long does a diabetic foot ulcer last?",
            answer: "Healing a diabetic foot ulcer might take weeks or months to heal. If not healed properly, there might be a chance of amputation.",
        },
        {
            question: "What is the success rate for Diabetic Foot Ulcers treatment?",
            answer: "31% of diabetic ulcers are cured after 20 weeks with proper wound management. Similarly, 24% of diabetic ulcers heal completely after 12 weeks of appropriate treatment.",
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
                            FAQ for Diabetes
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
