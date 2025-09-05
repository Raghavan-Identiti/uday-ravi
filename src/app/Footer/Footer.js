// components/Footer.js
"use client";
import styles from "./Footer.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../../public/FooterLogo.svg"; // Replace with actual logo path
import Link from "next/link";
import PopupForm from "../PopupModal/popupmodal";
import { useState } from "react";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.topSection}>
        <Container>
          <Row className="gy-4 align-items-start">
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.brandBlock}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <Link className="" href="/">
                    <Image src={Logo} alt="Dr. Uday Ravi" className={styles.FooterLogo} />
                  </Link>
                  {/* <h5 className="text-white mb-0">Dr. Uday Ravi</h5> */}
                </div>
                <p className={`${styles.footerpara} text-white-50`}>
                  Dr. Uday Ravi delivers precision-driven, minimally invasive surgical care
                  with advanced laser, laparoscopic, and robotic techniques, ensuring faster
                  recovery and exceptional outcomes
                </p>
                <div>
                  <button type="button" className={`${styles.bookBtn}`}
                    onClick={() => {
                      setShowPopup(true);
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} data-aos="fade-up" data-aos-delay="250">
              <div className={`${styles.brandBlock} d-flex align-items-start`}>
                <h6 className={`${styles.footerlinkheadings} fw-bold mb-3`}>Quick Links</h6>
                <ul className={`list-unstyled text-white-50   ${styles.listquickLinks}`}>

                  <li><Link href={'/'}>Home</Link></li>
                  <li> <Link href={'/#about-doctor'}>About Me</Link></li>
                  <li><Link href={'#'}>Services</Link></li>
                  <li>
                    <Link
                      href="/#get-in-touch"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('get-in-touch')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get in Touch
                    </Link>
                  </li>
                  {/* <li>Blog</li> */}
                  <li></li>
                </ul>
              </div>
            </Col>
            <Col md={5} sm={6} data-aos="fade-up" data-aos-delay="300">
              <div className={`${styles.brandBlock} `}>

                <h6 className={`${styles.footerlinkheadings} fw-bold`}>Specialities</h6>
                <ul className={`list-unstyled text-white-50 ${styles.listLinks}`}>

                  <li>
                    <Link href={'/services/piles'} target="__blank">Piles</Link>
                  </li>
                  <li>
                    <Link href={'/services/appendicitis'} target="__blank">Appendicitis</Link>
                  </li>
                  <li>
                    <Link href={'/services/fissure'} target="__blank">Fissures</Link>
                  </li>
                  <li>
                    <Link href={'/services/circumcision'} target="__blank">Circumcision</Link>
                  </li>

                  <li>
                    <Link href={'/services/fistula'} target="__blank">Fistulas</Link>
                  </li>
                  <li>
                    <Link href={'/services/breast-disease'} target="__blank">Breast Dieases</Link>
                  </li>
                  <li>
                    <Link href={'/services/pilonidal-sinus'} target="__blank">Pilonidal Sinus</Link>
                  </li>
                  <li>
                    <Link href={'/services/hernia'} target="__blank">Hernia Surgeries</Link>
                  </li>
                  <li>
                    <Link href={'/services/thyroid'} target="__blank">Thyroid Surgeries</Link>
                  </li>
                  


                  <li>
                    <Link href={'/services/cysts-swelling'} target="__blank">Cysts & Swellings</Link>
                  </li>

                  <li>
                    <Link href={'/services/diabetes'} target="__blank">Diabetic Wound Care</Link>
                  </li>

                  <li>
                    <Link href={'/services/reconstructive-surgery'} target="__blank">Reconstructive Surgery</Link>
                  </li>
                  <li>
                    <Link href={'/services/weight-loss'} target="__blank">Weight Loss & Bariatric Surgery </Link>
                  </li>
                  <li>
                    <Link href={'/services/gastroenterology-and-gi-surgery'} target="__blank">Gastroenterology & GI Surgery</Link>

                  </li>
                  <li>
                    <Link href={'/services/hydrocele'} target="__blank">Genito-Urinary & Men’s Health</Link>
                  </li>
                  <li>
                    <Link href={'/services/varicose-veins'} target="__blank">Vascular and Varicose Veins Surgeries</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.bottomBar} >
        <Container>
          <Row className="justify-content-between align-items-center text-center text-md-start row-gap-2">
            <Col md={5} className="text-white-50">
              © 2025 | Dr. Uday Ravi. All rights Reserved.
            </Col>
            <Col md={4} className="text-white-50 small">
              <span className="me-3">Privacy Policy</span>
              <span className="me-3">Terms of Use</span>
              <span>Sitemap</span>
            </Col>
            <Col md={3} className="text-white-50 small">
              Digital Partner: <span className="text-white"><Link className="text-decoration-none text-white" href={"http://identitidesign.com/"} target="__blank">identitidesign</Link></span>
            </Col>
          </Row>
        </Container>
      </div>
      <PopupForm showPopup={showPopup} setShowPopup={setShowPopup} />

    </footer>
  );
}
