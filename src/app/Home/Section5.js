"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Section5.module.css';
import Image from 'next/image';
// import { Carousel } from 'react-bootstrap';
import Ellipse1 from '../assets/Ellipse 8.png'; // Replace with your actual image
import Ellipse22 from '../assets/Ellipse 9.png'; // Replace with your actual image
import Ellipse3 from '../assets/Ellipse 10.png'; // Replace with your actual image
import Ellipse4 from '../assets/Ellipse 11.png'; // Replace with your actual image
import Googlelogo from '../assets/GoogleLogo.png'; // Replace with your actual image
import customer1 from '../assets/customer-1.png'; // Replace with your actual image
import customer2 from '../assets/customer-2.png'; // Replace with your actual image
import customer3 from '../assets/customer-3.png'; // Replace with your actual image
import customer4 from '../assets/customer-4.png'; // Replace with your actual image
import LeftArrow from '../assets/LeftArrow.png'; // Replace with your actual image
import RightArrow from '../assets/RightArrow.png'; // Replace with your actual image
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useRef } from 'react';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1200 },
        items: 4,
        slidesToSlide: 1,
    },
    desktop: {
        breakpoint: { max: 1200, min: 992 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 992, min: 768 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const cardData = [
    {
        author: "Rahul K",
        feedback: "Dr. Uday Ravi stands out as a highly skilled and compassionate general surgeon. Patients value his calm approach and clear",
        authorImg: customer1, // Replace with actual image path
        rating: 5,
    },
    {
        author: "Naveen Rakhi",
        feedback: "Dr. Uday Ravi sir is incredibly knowledgeable and took the time to answer all my questions. Highly recommend!",
        authorImg: customer2, // Replace with actual image path
        rating: 5,
    },
    {
        author: "Nagaraj K V",
        feedback: "...we had shown in many clinics and hospitals but the wound was not healing. Then Dr. Uday did debridement surgery the wound almost healed",
        authorImg: customer3, // Replace with actual image path
        rating: 5,

    },
    {
        author: "Shiva Kumar",
        feedback: "Dr. Uday  is one of the finest Doctors I have ever come across in my 60 years life. His humble nature in treating the patients is impeccable.",
        authorImg: customer4, // Replace with actual image path
        rating: 5,
    },
    {
        author: "Ramakrishna",
        feedback: "I came in contact with Dr. Uday Ravi who is an expert laparoscopic and varicose veins surgeon. This was the best thing which I did",
        authorImg: "", // Replace with actual image path
        rating: 5,
    },
    {
        author: "RaviKumar B",
        feedback: "Dr. Uday Ravi is the best Laparoscopic surgeon in India. The way he handled the patient is very good",
        authorImg: "", // Replace with actual image path
        rating: 5,
    },

];


export default function Section5() {
    const carouselRef = useRef();
        const MAX_LENGTH = 150;


    return (
        <section className={`${styles.Section5}`}>
            <div className={`${styles.Section5container} container`}>
                <button className={`${styles.Section5Button}`} data-aos="fade-up" data-aos-delay="100">WHAT CLIENTS SAY</button>
                <div className={` row ${styles.Section5Row}`}>
                    <div className={`col-lg-6 col-12 ${styles.Section5colmd6}`} data-aos="fade-up" data-aos-delay="200">
                        <h1 className={`${styles.Section5Title}`}>
                            Trusted by Thousands. Proven by Results.
                        </h1>
                        <p className={`${styles.Section5Para}`}>
                            Real experiences from people whose lives have been transformed through Dr. Ravi&rsquo; s care. Their stories reflect our commitment to exceptional results with outstanding care.
                        </p>
                    </div>
                    <div className={`col-md-6 col-12 d-flex flex-row ${styles.Section5colmd6} ${styles.Section5secondcolmd6} align-items-center `} data-aos="fade-up" data-aos-delay="300">
                        <div>
                            <Image src={Ellipse1} alt="Image" className={`${styles.Section5Image} d-inline-block`} />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <Image src={Googlelogo} alt="Image" className={`${styles.Section5Image2} d-inline-block`} data-aos="fade-down" data-aos-delay="300"/>
                            <p className={`${styles.Section5Para2} text-center`}>
                                Based on 218 5 star reviews<br />
                                <span>Excellent</span>
                            </p>
                        </div>
                        <div className={`${styles.Section5eclipseContainer} d-flex flex-column align-items-center`}>
                            {/* <div className={`${styles.Section5eclipse4} d-flex flex-column align-items-center`}> */}
                            <Image src={Ellipse4} alt="Image" className={`${styles.face2}`} data-aos="fade-up" data-aos-delay="300"/>
                            {/* </div> */}
                            {/* <div className={`${styles.Section5eclipse2} d-flex flex-column align-items-center`}> */}
                            <Image src={Ellipse22} alt="Image" className={`${styles.face3}`} data-aos="fade-down" data-aos-delay="300"/>

                            {/* </div> */}
                            {/* <div className={`${styles.Section5eclipse3} d-flex flex-column align-items-center`}> */}
                            <Image src={Ellipse3} alt="Image" className={`${styles.face4}`} data-aos="fade-up" data-aos-delay="300"/>

                            {/* </div> */}
                        </div>

                    </div>
                </div>
                <div className={`row position-relative ${styles.customCarouselContainer}`} >
                        <Carousel
                        ref={carouselRef}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        keyBoardControl={true}
                        containerClass={`carousel-container`}
                        removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop"]}
                        dotListClass="custom-dot-list-style"
                        itemClass={`carousel-item-padding-40-px ${styles.customCarouselContainer}`}
                    >
                        {cardData.map((card, index) => {
                            const isTruncated = card.feedback.length > MAX_LENGTH;
                            const truncatedText = isTruncated ? card.feedback.slice(0, MAX_LENGTH) : card.feedback;

                            return (
                                <div key={index} className={`${styles.Section5card}`} data-aos="fade-up" data-aos-delay="300">
                                    <h1 className={styles.Section5cardHeading}>“</h1>
                                    <div className={styles.Section5cardpara}>
                                        {truncatedText}
                                        
                                    </div>

                                    <div className={`d-flex align-items-center ${styles.Section5cardbody}`}>
                                        {card.authorImg ? (
                                            <Image
                                                src={card.authorImg}
                                                alt={card.author}
                                                className={styles.Section5customerImage}
                                                width={40}
                                                height={40}
                                            />
                                        ) : (
                                            <div className={styles.fallbackAvatar}>
                                                {card.author.charAt(0).toUpperCase()}
                                            </div>
                                        )}

                                        <div className="ms-2">
                                            <h5 className={`${styles.Section5cardtitle}`}>{card.author}</h5>
                                            <div className={styles.rating}>{'★'.repeat(card.rating)}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                    <div className={styles.arrowContainer}>
                        <button className={styles.customArrow} onClick={() => carouselRef.current?.previous()}>
                           <Image src={RightArrow} alt="Left Arrow" className={styles.arrowIcon} />
                        </button>
                        <button className={styles.customArrow} onClick={() => carouselRef.current?.next()}>
                           <Image src={LeftArrow} alt="Left Arrow" className={styles.arrowIcon} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
