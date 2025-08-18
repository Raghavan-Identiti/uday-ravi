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
            question: "Can bariatric surgery cure my diabetes?",
            answer: "Upto 95% of patients who undergo bariatric surgery see improvement or even resolution in their type 2 diabetes. How long you have had diabetes, the type of bariatric procedure used, and how accomplished your surgeon is are significant variables that can influence the results.",
        },
        {
            question: "What is the effect of bariatric surgery on pregnancy?",
            answer: "Bariatric Surgery has significant positive effects on the pregnancy. Bariatric surgery by resolving PCOS and hormonal imbalances increases the chances of conception. It also prevents obesity-related complications like gestational diabetes during pregnancy. Bariatric surgery makes pregnancy a pleasant experience by avoiding unnecessary complications.",
        },
        {
            question: "Can bariatric surgery cure my PCOD?",
            answer: "PCOD (Polycystic Ovary Syndrome) is cured in almost every patient after bariatric surgery. If you are severely obese and suffering from PCOS, you must seriously look into the option of bariatric surgery by the best bariatric surgeon.",
        },
        {
            question: "Which is better- Liposuction or Bariatric surgery?",
            answer: "In short, liposuction is not a weight loss tool. It is a surgical technique that will remove fat beneath the skin of troubled areas, especially the abdomen or belly area. What liposuction will never do is make you lose weight, as it is a body contouring surgery that produces minimal weight loss. The only thing that makes a lasting difference in body weight is bariatric surgery.",
        },
        {
            question: "What are the chances of weight regain following bariatric surgery?",
            answer: "If you are adherent to post-surgery lifestyle changes, eat well (even after the recommended diet stages), and exercise reasonably regularly, the chances of weight regain are almost negligible. Regular follow-up with healthcare providers, keeping yourself motivated, and following the recommendations are ways to prevent weight restoration.",
        },
        {
            question: "Do I need to stop alcohol after bariatric surgery?",
            answer: "You must be very careful with alcohol consumption following bariatric surgery. Once you are a few months post bariatric surgery, then you can consume alcohol, but in restricted quantities. Excessive consumption can lead to nutritional deficiencies and weight gain. You must consult your surgeon, who is the best person to guide you regarding the intake of alcohol.",
        },
        {
            question: "How does bariatric surgery affect my sexual life?",
            answer: "Bariatric surgery can dramatically have a positive impact on your sexual life. Reduced obesity levels and hormonal changes can improve libido or sexual desire. Bariatric surgery improves sexual performance by reducing weight and increasing confidence levels",
        },
        {
            question: "Will I feel fragile and lethargic after weight loss surgery?",
            answer: "Contrary to the popular belief of reduced stamina levels after bariatric surgery, bariatric surgery can significantly increase your staminal levels. Reduction in weight increases your stamina and energy levels dramatically, and you can easily carry out routine activities.",
        },
        {
            question: "Will my scars be visible after weight loss surgery?",
            answer: "Weight loss surgery is performed either laparoscopically or with robotic technology. As a result, it is almost scarless, with very tiny 3-4 incisions. We also offer single-port bariatric surgeries in selected individuals, which don’t produce any visible scars.",
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
