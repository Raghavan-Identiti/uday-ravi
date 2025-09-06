"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Section3.module.css';
import Image from 'next/image';
import card1 from '../assets/Rectangle 552.png'; // Replace with your actual image
import card2 from '../assets/Rectangle 555.png'; // Replace with your actual image
import card3 from '../assets/Rectangle 557.png'; // Replace with your actual image
import card4 from '../assets/Rectangle 559.png'; // Replace with your actual image
import card5 from '../assets/Rectangle 562.png'; // Replace with your actual image
import card6 from '../assets/Rectangle 556.png'; // Replace with your actual image
import card7 from '../assets/Rectangle 571.png'; // Replace with your actual image
import card8 from '../assets/section3lastimage.png'; // Replace with your actual image
import card9 from '../assets/Rectangle 565.png'; // Replace with your actual image
import card10 from '../assets/Rectangle 568.png'; // Replace with your actual image
import card11 from '../assets/Rectangle 569.png'; // Replace with your actual image
import card12 from '../assets/Rectangle 600.jpg'; // Replace with your actual image
import card13 from '../assets/Rectangle 601.jpg'; // Replace with your actual image
import Link from 'next/link';
import { useEffect, useState } from 'react';

const cardData = [
    {
        title: "Piles",
        text: "Minimally invasive laser surgery for piles, fissures, and fistulas - quick, painless, and stitch-free.",
        img: card1, // Replace with actual image path
        link: "/services/piles"
    },
    {
        title: "Say Goodbye to Hernias",
        text: "Laparoscopic hernia surgery for long-term relief, minimal scarring, and quick healing.",
        img: card2,
        link: "/services/hernia"
    },
    {
        title: "Digestive & Stomach Surgery",
        text: "Keyhole surgery for gallstones, acid reflux, and digestive issues - fast relief, faster recovery.",
        img: card3,
        link: "/services/appendicitis"
    },
    {
        title: "Weight Loss & Metabolic Surgery",
        text: "Surgical and non-surgical weight loss solutions to help you lose weight and regain confidence.",
        img: card4,
        link: "/services/weight-loss"
    },
    {
        title: "Cosmetic & Reconstructive Surgery",
        text: "Sculpt your body with liposuction, tummy tucks, and gynecomastia treatment for a confident look.",
        img: card5,
        link: "/services/reconstructive-surgery"
    },
    {
        title: "Men's Health & Urology",
        text: "Safe, advanced treatments for kidney stones, hydrocele, and reproductive health issues.",
        img: card6,
        link: "/services/hydrocele"
    },
    {
        title: "Varicose Veins and Vascular Surgery",
        text: "Laser treatment to remove varicose veins, restore circulation, and help you walk pain-free.",
        img: card9,
        link: "/services/varicose-veins"

    },
    {
        title: "Diabetic Foot, Wound Care and Podiatry",
        text: "Specialized care for diabetic wounds and ulcers to prevent complications and promote healing.",
        img: card10,
        link: "/services/diabetes"
    },
    {
        title: "Removal of Lumps, Cysts & Growths",
        text: "Quick, safe removal of lipomas, cysts, and skin growths for a healthier you.",
        img: card11,
        link: "/services/cysts-swelling"
    },
    {
        title: "Gallbladder Stones",
        text: "Precision laparoscopic surgeries for gallstones, reflux, hernias, and GI cancers",
        img: card12,
        link: "/services/gastroenterology-and-gi-surgery"
    },
    {
        title: "Breast Diseases",
        text: "Safe removal of benign breast lumps with minimal scarring and excellent cosmetic results.",
        img: card13,
        link: "/services/breast-disease"
    },
    {
        title: "Thyroid Health",
        text: "Expert surgery for thyroid conditions and breast health, ensuring early diagnosis and care.",
        img: card7,
        link: "/services/thyroid"
    },
];

export default function Section3() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // initial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className={`${styles.Section3}`}>
            <div className={`${styles.Section3container} container`}>
                <button className={`${styles.Section3Button}`} data-aos="fade-up" >OUR SERVICES</button>
                <div className={` row ${styles.Section3Row}`}>
                    <div className={`col-md-8 ${styles.Section3colmd7} `}>
                        <h1 className={`${styles.Section3Title}`} data-aos="fade-up" data-aos-delay="100">
                            Advanced Surgical Solutions for Better Living
                        </h1>
                        <p className={`${styles.Section3Para}`} data-aos="fade-up" data-aos-delay="200">
                            Dr. Uday Ravi offers comprehensive surgical care using minimally invasive techniques across multiple specialties. Our patient-focused approach means less pain, faster recovery, and better outcomes for all your surgical needs.
                        </p>
                    </div>
                </div>
                <div className={` row ${styles.Section3Row}`} data-aos="fade-up" data-aos-delay="300">
                    {cardData.map((card, index) => (
                        <div className={`col-xl-4 col-lg-6 col-12 mb-4`} key={index} data-aos="fade-up" data-aos-delay="300">
                            <div className={`${styles.Section3card} d-flex flex-column h-100`}>
                                <div className={`${styles.Section3cardImgWrapper}`}>
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        className={`${styles.Section3cardImg}`}
                                    />
                                </div>
                                <div className={`card-body d-flex flex-column flex-grow-1 ${styles.Section3cardbody}`}>
                                    <h5 className={`card-title text-primary ${styles.Section3cardtitle}`}>{card.title}</h5>
                                    <p className={`card-text ${styles.Section3cardpara} flex-grow-1`}>{card.text}</p>
                                    <div className="mt-auto">
                                        <Link href={card.link || "#"} target="_blank">
                                            <button className={`${styles.Section3cardbtn}`}>Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`row ${styles.Section3Row} mt-3`} data-aos="fade-up" data-aos-delay="300">
                    {/* <div className={`col-xl-4 col-lg-12 col-12 mb-4`}>
                        <div className={` ${styles.Section3card}`}>
                            <Image src={card7} className={`${styles.Section3cardImg} card-img-top`} alt={"title"} />
                            <div className={`card-body ${styles.Section3cardbody}`}>
                                <h5 className={`card-title text-primary ${styles.Section3cardtitle}`}>{"Thyroid Health"}</h5>
                                <p className={`card-text  ${styles.Section3cardpara}`}>{"Expert surgery for thyroid conditions and breast health, ensuring early diagnosis and care."}</p>
                                <div>
                                    <Link href={'/services/thyroid'} >
                                        <button className={` ${styles.Section3cardbtn} `}>Learn More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className={`col-xl-8 col-12 d-flex  ${styles.Section3Row4}`}>
                        <div className={`row mb-4`}>
                            <div className='row'>
                                <div
                                    className={`col-md-6 col-12 ${styles.Section3Row3firstcolmd6}`}
                                    data-aos={isMobile ? "fade-down" : "fade-right"}
                                    data-aos-delay="100"
                                >
                                    <Image src={card8} className={`${styles.Section3Row3cardImge} card-img-top`} alt="title" />
                                </div>
                                <div
                                    className={`col-md-6 col-12 ${styles.Section3Row3colmd6} d-flex flex-column justify-content-center`}
                                    data-aos={isMobile ? "fade-up" : "fade-left"}
                                    data-aos-delay="100"
                                >
                                    <div className={`${styles.Section3Row3cardbody} `}>
                                        <div className=''>
                                            <h5 className={`card-title text-primary ${styles.Section3Row3cardtitle}`}>OUR APPROACH</h5>
                                            <p className={`card-text ${styles.Section3Row3cardpara}`}>We use advanced, minimally invasive techniques to provide effective, results-focused care with less pain and faster recovery.</p>
                                            <p className={`card-text ${styles.Section3Row3cardpara}`}>Every patient receives personalized treatment tailored to their condition, lifestyle, and recovery goals, making expert surgical care straightforward and accessible.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
