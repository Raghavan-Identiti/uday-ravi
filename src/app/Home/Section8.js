"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Section8.module.css';
import Image from 'next/image';
import Section8image1 from '../assets/Section8image1.png'; // Replace with your actual image
import Section8image2 from '../assets/Section8image2.png'; // Replace with your actual image
import Section8image3 from '../assets/Section8image3.png'; // Replace with your actual image
import Section8image4 from '../assets/Section8image4.png'; // Replace with your actual image
import { useState } from 'react';
import Link from 'next/link';





export default function Section8() {
  const cardData = [
    {
      title: "Laser",
      feedback: "Walk Out Pain-Free After 30-Minute Laser Haemorrhoid Treatment",
      authorImg: Section8image1, // Replace with actual image path
      date: "May 12, 2025",
      link : "/services/piles"
    },
    {
      title: "Laproscopy",
      feedback: "Return to Work in 48 Hours After Laparoscopic Hernia Repair",
      authorImg: Section8image2, // Replace with actual image path
      date: "Jan 06, 2025",
      link : "/services/hernia"
    },
    {
      title: "Varicose",
      feedback: "Show Off Your Legs Again After Varicose Vein Therapy",
      authorImg: Section8image3, // Replace with actual image path
      date: "April 07, 2025",
      link : "/services/varicose-veins"
    },
    {
      title: "Laproscopy",
      feedback: "Breathe Easy After Laparoscopic Gallbladder Surgery",
      authorImg: Section8image4, // Replace with actual image path
      date: "June 22, 2025",
      link : "/services/gastroenterology-and-gi-surgery"
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const FAQDatas = [
    {
      question: "How painful are minimally invasive procedures, and what is the recovery time?",
      answer: "Dr. Ravi's minimally invasive techniques significantly reduce pain compared to traditional surgery. Most patients experience only mild discomfort that can be managed with regular pain medication. Recovery times vary by procedure, but many patients return to light activities within 24-48 hours and resume normal routines within 1-2 weeks—considerably faster than conventional surgery.",
    },
    {
      question: "Will my insurance cover laser and laparoscopic procedures?",
      answer: "Most insurance plans cover medically necessary minimally invasive procedures. Our office team verifies your coverage before treatment and provides clear information about any potential out-of-pocket expenses. We also offer flexible payment options for procedures not fully covered by insurance.",
    },
    {
      question: "How do I know if I'm a candidate for minimally invasive surgery instead of traditional open surgery?",
      answer: "Most patients qualify for minimally invasive options, but factors like your medical history, previous surgeries, and specific condition determine eligibility. During your consultation, Dr. Ravi thoroughly evaluates your case and discusses all appropriate treatment options, explaining the benefits and limitations of each approach for your unique situation.",
    },
    {
      question: "What kind of post-operative care and follow-up can I expect?",
      answer: "Minimally invasive procedures typically cause less pain and offer faster recovery. Most patients resume normal activities within a few days.",
    },
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className={`${styles.Section8}`}>
      <div className={`${styles.Section8container} container`}>
        <div className={` row ${styles.Section8Row}`}>
          <div className={`col-lg-6 col-12  ${styles.Section8colmd6}`}>
            {/* <button className={`${styles.Section8Button} btn`} data-aos="fade-up" data-aos-delay="50">INSIGHTS</button> */}
            <h1 className={`${styles.Section8Title}`} data-aos="fade-up" data-aos-delay="50">
              Popular<br />Treatments
            </h1>
            <div className={`row ${styles.Section8}`} data-aos="fade-up" data-aos-delay="200">
              <div className={`${styles.Section8row1Card} col-md-12`}>
                {cardData.map((card, index) => (
                  <Link key={index} className='text-decoration-none text-dark' href={card?.link} target='__blank'>
                  <div className={`d-flex align-items-center ${styles.Section8row1cardContainer}`}>
                    <div className={styles.Section8row1imageWrapper}>
                      <Image
                        src={card.authorImg}
                        alt="Author"
                        className={`img-fluid ${styles.Section8row1image}`}
                      />
                    </div>
                    <div className={`${styles.Section8row1textwrapper} ms-3`}>
                      <small className="text-muted">{card.title} • {card.date}</small>
                      <h5 className={`fw-bold mt-1 mb-0 ${styles.Section8row1cardTitle}`}>
                        {card.feedback}
                      </h5>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={`col-lg-6 col-12 ${styles.Section8colmd6} ${styles.Section8colmd6Right}`} data-aos="fade-up" data-aos-delay="500">
            {/* <button className={`${styles.Section8Button} btn`}>INSIGHTS</button> */}
            <h1 className={`${styles.Section8Title}`}>
              Medical<br />FAQs
            </h1>
            <div className={`row ${styles.Section8}`}>
              {FAQDatas.map((data, index) => (
                <div
                  key={index}
                  className={`${styles.faqCard} ${openIndex === index ? styles.active : ""}`}
                >
                  <div className={styles.faqHeader} onClick={() => toggleIndex(index)}>
                    <h5 className="mb-0">{data.question}</h5>
                    <span className={styles.plus}>+</span>
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
                    <p className={styles.faqBody}>{data.answer}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
