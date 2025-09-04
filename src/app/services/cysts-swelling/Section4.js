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
            question: "Can lipomas be dangerous?",
            answer: `
            <p>Lipomas are generally not dangerous. However, lipomas that are rapidly growing must be removed immediately and sent for biopsy to assess if they are cancerous. If the lipomas are small and not increasing in size, they are usually harmless.</p>
            
            `,
        },
        {
            question: "Can lipomas grow back at the same site?",
            answer: `Proper and completely excised lipomas do not grow back in the same place. Lipomas that are large or hard in consistency when removed by liposuction can result in incomplete removal of lipomas, resulting in recurrence.`,
        },
        {
            question: "Can lipomas dissolve on their own?",
            answer: `
                Lipomas can never disappear on their own. However, significantly reducing weight and maintaining a healthy lifestyle might reduce the size of lipomas to a certain extent.

            `,
        },
        {
            question: "Are sebaceous cysts cancerous?",
            answer: "Sebaceous cysts are typically benign and not cancerous. They are sac-like structures filled with keratin and usually develop in hair follicles. Removal may be necessary for cosmetic or discomfort reasons.",
        },
        {
            question: "Can Sebaceous Cysts go away on their own without treatment?",
            answer: "Sebaceous cysts may persist or even grow larger without treatment. They often do not resolve on their own and typically require medical intervention such as drainage or surgical removal.",
        },
        {
            question: "Are foot corns or calluses contagious?",
            answer: "No, foot corns or calluses are not contagious.",
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
