"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Section7.module.css';
import Image from 'next/image';
import PhoneIconsection7 from '../assets/PhoneIconSection7.png'; // Replace with your actual image
import MailIconsection7 from '../assets/MailIconSection7.png'; // Replace with your actual image
import Map from '../assets/Map.png'; // Replace with your actual image
import Map2 from '../assets/Map2.png'; // Replace with your actual image
import Map3 from '../assets/Map3.png'; // Replace with your actual image
import Map4 from '../assets/Map4.png'; // Replace with your actual image
import Link from 'next/link';

const locationData = [
    {
        location: "Yelahanka",
        address: "Prima diagnostics 93, 1st A Main Rd, Sector A, Yelahanka Satellite Town, Bengaluru  - 560064",
        mapLink: "https://www.google.com/maps?q=Prima+diagnostics,+Yelahanka+Satellite+Town"
    },
    {
        location: "Kodigehalli",
        address: "Medstar speciality hospital 641/17/1/3, Kodigehalli Main Rd, Shanthivana, Sahakarnagar, Bengaluru",
        mapLink: "https://www.google.com/maps?q=Medstar+speciality+hospital,+Kodigehalli"
    },
    {
        location: "Rajaji Nagar",
        address: "Spectrum diagnostics, Tejas Arcade, #9/1, 1st Main Road, Dr Rajkumar Rd, Subramanyanagar, Bengaluru",
        mapLink: "https://www.google.com/maps?q=Spectrum+diagnostics,+Rajaji+Nagar"
    },
    {
        location: "T Dasarhalli",
        address: "Lakshmi nursing home Chokkasandra Main Rd, Chokkasandra, Peenya, Bengaluru",
        mapLink: "https://www.google.com/maps?q=Lakshmi+nursing+home,+T+Dasarhalli"
    },
];

export default function Section7() {
    return (
        <section id="get-in-touch" className={`${styles.Section7}`}>
            <div className={`${styles.Section7container} container`}>
                <button className={`${styles.Section7Button}`} data-aos="fade-up" data-aos-delay="100">CONVENIENCE</button>
                <div className={` row ${styles.Section7Row}`}>
                    <div className={`col-lg-6 ${styles.Section7colmd6}`} data-aos="fade-up" data-aos-delay="200">
                        <h1 className={`${styles.Section7Title}`}>
                            4 Convenient Locations. <br />One Trusted Name.
                        </h1>
                        <p className={`${styles.Section7Para}`}>
                            Choose the clinic closest to you and experience<br />world-class care wherever you are.
                        </p>
                    </div>
                    <div className={`col-lg-6 ${styles.Section7secondcolmd6}`} data-aos="fade-up" data-aos-delay="200">
                        <div className={styles.Section7Card}>
                            <div className={styles.Section7Cardleft}>
                                <Image src={PhoneIconsection7} alt="Phone" className={styles.Section7Cardicon} width={32} height={32} />
                                <Link href="tel:+917353530505" className={styles.Section7Cardphone}>
                                <p className={styles.Section7Cardphone}>+91 73535 30505</p>
                                </Link>
                            </div>
                            <div className={styles.Section7Cardright}>
                                <Image src={MailIconsection7} alt="Mail" className={styles.Section7Cardicon} width={32} height={32} />
                                <div className={styles.Section7CardemailText}>
                                    {/* <p>info@drudayravi.in</p>
                                    <p>contact@drudayravi.in</p> */}
                                    <Link href="mailto:drudayravi487@gmail.com" >
                                        drudayravi487@gmail.com
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`row ${styles.Section7Row2}`} data-aos="fade-up" data-aos-delay="300">
                        {locationData.map((card, index) => (
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4 d-flex flex-row justify-content-center" key={index}>
                            <a
                                href={card.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.Section7Row2card} ${styles.Section7Row2cardlast} mb-sm-3`}
                                style={{ textDecoration: 'none', color: 'inherit' ,width: '100%',height: '230px'}}
                            >
                                <div className={styles.Section7Row2cardinner}>
                                    <h5 className={styles.Section7Row2cardtitle}>{card.location}</h5>
                                    <p className={styles.Section7Row2cardpara}>{card.address}</p>
                                </div>
                                <div className={styles.Section7Row2cardlastImage}>
                                    <Image
                                        src={index === 0 ? Map2 : index === 1 ? Map3 : index === 2 ? Map : Map4}
                                        alt="Map"
                                        className={styles.Section7Row2cardlastImage}
                                    />
                                </div>
                            </a>
                    </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
