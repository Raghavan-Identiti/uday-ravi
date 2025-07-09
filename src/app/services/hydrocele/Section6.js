"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Section6.module.css';
import Image from 'next/image';
import { FaStar, FaHeartbeat, FaAward, FaGraduationCap, FaUserShield, FaHandHoldingHeart } from 'react-icons/fa';
import tableicon1 from '../../assets/Group.png'
import tableicon2 from '../../assets/Group 109.png'
import tableicon3 from '../../assets/Group 112.png'
import tableicon4 from '../../assets/Group 111.png'
import tableicon5 from '../../assets/Group 110.png'
import tableicon6 from '../../assets/Group 113.png'
import PhoneSVG from '../../assets/PhoneIcon.png'; // Use your actual SVG or PNG
import { useState } from 'react';
import PopupForm from '@/app/PopupModal/popupmodal';


const featuresData = [
    {
        icon: tableicon1,
        title: "Multi-Specialty Mastery",
        description: "Comprehensive expertise across multiple surgical disciplines for even the most complex conditions.",
    },
    {
        icon: tableicon2,
        title: "Minimally Invasive. Maximum Comfort.",
        description: "Cutting-edge techniques ensuring smaller incisions, reduced pain, and faster recovery.",
    },
    {
        icon: tableicon3,
        title: "Personalized Treatment Journey",
        description: "Care tailored to your unique needs with thorough consultations and customized plans.",
    },
    {
        icon: tableicon4,
        title: "Academic Leadership",
        description: "Continuous integration of the latest surgical innovations and evidence-based practices.",
    },
    {
        icon: tableicon5,
        title: "Proven Excellence",
        description: "Over 5,000 satisfied patients through consistently superior surgical outcomes.",
    },
    {
        icon: tableicon6,
        title: "Comprehensive Support",
        description: "Continuous care from consultation through recovery—you never face health challenges alone.",
    },
];


export default function Section6() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <section className={`${styles.Section6}`} >
            <div className={`${styles.Section6container} container`}>
                <div className={` row ${styles.Section6Row}`}>
                    <div className={`col-md-12 ${styles.Section6colmd7}`}>
                        <button className={`${styles.Section6Button} `}>WHY Dr. RAVI</button>
                        <h1 className={`${styles.Section6Title}`} >
                            What Sets <br />Dr. Ravi Apart
                        </h1>
                        <div className={`container ${styles.featuresSection}`}>
                            <div className="row">
                                {featuresData.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className={`col-md-6 col-12 ${styles.cell} ${idx % 2 === 0 ? styles.rightBorder : ""
                                            } ${idx < 4 ? styles.bottomBorder : ""}`} // fix bottom border on last row
                                    >
                                        <div className="d-flex align-items-start p-3">
                                            <div className={`me-3 ${styles.featureIconWrapper}`}>
                                                <Image
                                                    src={feature.icon}
                                                    alt="Feature Icon"
                                                    className={`${styles.featureIcon}`}
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                            <div>
                                                <h5>{feature.title}</h5>
                                                <p>{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row g-0' >
                    <div className={styles.ctaContainer}>
                        <div className={styles.content}>
                            <div className={styles.textSection}>
                                <h2>Expert Care, <br />Personalized for You</h2>
                            </div>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={PhoneSVG}
                                    alt="Phone Hand"
                                    fill
                                    className={styles.illustration}
                                />
                            </div>
                            <button type="button" className={`${styles.ctaButton}`}
                                onClick={() => {
                                    setShowPopup(true);
                                }}
                            >
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <PopupForm showPopup={showPopup} setShowPopup={setShowPopup} />

        </section>
    );
}
