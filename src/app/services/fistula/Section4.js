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
            question: "Which doctor is best for fistula?",
            answer: "Dr. Uday Ravi is one of the best fistula specialists in Bangalore. He is an expert in all treatment modalities but has a special interest in minimally invasive surgeries and laser treatment.",
        },
        {
            question: "Which surgery is best for fistula?",
            answer: "The fistula Treatment Laser Procedure (FiLAC technique) is the best surgery having numerous advantages. Dr. Uday Ravi fistula Specialist mostly recommended the Laser technique for the fistula treatment.",
        },
        {
            question: "Is Fistula Surgery painful?",
            answer: "Fistula surgery isn’t more painful. You won’t be experiencing pain during this process because you will be under the effect of anesthesia. Also, Laser procedures minimize the pain",
        },
        {
            question: "What are the alternatives for Fistula Surgery?",
            answer: `
                    <p>Fistula Surgery is the only effective way to treat severe fistulas. Some alternatives to Fistula Surgery are: </p>
                    <ul>
                        <li>Medicines</li>
                        <li>Fibrin glue</li>
                    </ul>
            `,
        },
        {
            question: "What are the advantages of Fistula Surgery?",
            answer: `
                    <p>Some of the advantages of Fistula Surgery are: </p>
                    <ul>
                        <li>Reduces pain</li>
                        <li>No sphincter damage</li>
                        <li>No longer infection in the anus</li>
                        <li>Shorter healing time</li>
                        <li>Prevents the drainage from the fistulas</li>
                    </ul>
            `,
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
                            FAQ for Fistula
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
