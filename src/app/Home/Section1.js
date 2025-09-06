"use client";
import styles from './Section1.module.css';
import Image from 'next/image';
import doctorImage from '../assets/raviNew.png'; // Replace with your actual image
import OldParents from '../assets/Model-2alt.png'; // Replace with your actual image
import doctorImage2 from '../assets/Model-3alt.png'; // Replace with your actual image
import bubble1 from '../assets/Group 41.png'; // Replace with your actual image
import bubble2 from '../assets/Group 40.png'; // Replace with your actual image
import bubble3 from '../assets/Group 39.png'; // Replace with your actual image
import bubble4 from '../assets/Vector.svg'; // Replace with your actual image
import bubble5 from '../assets/Vector-2.svg'; // Replace with your actual image
import { FaChevronDown } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar'; // Adjust the path as necessary
import LeftArrow from '../assets/LeftArrow.png'; // Replace with your actual image
import RightArrow from '../assets/RightArrow.png'; // Replace with your actual image
import { useEffect, useState } from 'react';
import PopupForm from '../PopupModal/popupmodal';

export default function Section1() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
      const carousel1 = document.querySelector('#heroCarousel');
      if (carousel1) {
        new bootstrap.Carousel(carousel1, {
          interval: 5000,
          pause: 'hover',
        });
      }

      const carousel2 = document.querySelector('#heroCarouselIndicator');
      if (carousel2) {
        new bootstrap.Carousel(carousel2, {
          interval: 5000,
          pause: 'hover',
        });
      }
    });
  }, []);

  return (
    <section className={`${styles.heroSection} pt-lg-5`}>
      <div className="container">
        {/* Navbar */}
        <Navbar setShowPopup={setShowPopup} />
        {/* Hero Section Title */}
        {/* Carousel */}
        {/*Mobile View */}
        <div id="heroCarouselIndicator" className={`carousel slide ${styles.carouselMobile}`} data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row align-items-center flex-column-reverse flex-md-row mx-4">
                <div className={`col-sm-12 col-md-6  ${styles.HeroSectionText}`}>
                  <h1 className={`${styles.heroTitle}`}>
                    World-Class Surgical Precision Compassion & Care.
                  </h1>
                  <p className={`${styles.HeroSectionPara}`} >
                    Discover the difference when precision meets empathy.Dr. Uday Ravi delivers advanced surgical care with superior outcomes and personalized support.
                  </p>
                  {/* <div className="d-none d-lg-flex align-items-center mt-4">

                    <div className={styles.selectWrapper}>
                      <select
                        className={`${styles.HeroSectiondropdown} form-select w-auto`}
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        <option value="">Select Location</option>
                        <option value="Yelahanka">Yelahanka</option>
                        <option value="Kodigehalli">Kodigehalli</option>
                        <option value="Rajaji Nagar">Rajaji Nagar</option>
                        <option value="T Dasarhalli">T Dasarhalli</option>
                      </select>

                      <span className={styles.customIcon}>
                        <FaChevronDown />
                      </span>
                    </div>
                    <button
                      className={`${styles.btnPrimary} ${styles.Herobtn}`}
                      onClick={() => setShowPopup(true)}
                    >
                      Book Appointment
                    </button>
                  </div> */}

                </div>
                <div className="col-sm-12 col-md-6 text-center mt-4 mt-md-0 position-relative" >
                  <Image src={doctorImage} alt="Dr. Uday Ravi" className={`${styles.HeroSectionImage} img-fluid`} />
                  <h1 className={`${styles.bgText}`}>
                    care
                  </h1>
                  <div className={`${styles.infoBubble}  ${styles.topRight} ${styles.Slide1topRight}`}>
                    <Image src={bubble1} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    15+ Years Of <br /> Surgical Expertise</div>
                  <div className={`${styles.infoBubble} ${styles.bottomLeft} ${styles.Slide1bottomLeft}`}>
                    <Image src={bubble2} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Pioneering Laser<br /> & Laparoscopy</div>
                  <div className={`${styles.infoBubble} ${styles.bottomRight} ${styles.Slide1bottomRight}`}>
                    <Image src={bubble3} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Trusted By<br /> 5,000+ Patients</div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row align-items-center flex-column-reverse flex-md-row mx-4">
                <div className={`col-sm-12 col-md-5  ${styles.HeroSectionText}`}>
                  <h1 className={`${styles.heroTitle}`}>
                    Your Health Journey,Personally Guided.
                  </h1>
                  <p className={`${styles.HeroSectionPara}`}>
                    Experience care that extends beyond the operating room with personalized treatment plans, expert guidance, and ongoing support for your complete well-being.
                  </p>
                  {/* <div className="d-none d-lg-flex align-items-center mt-4 ">
                    <div className={styles.selectWrapper}>
                      <select
                        className={`${styles.HeroSectiondropdown} form-select w-auto`}
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        <option value="">Select Location</option>
                        <option value="Yelahanka">Yelahanka</option>
                        <option value="Kodigehalli">Kodigehalli</option>
                        <option value="Rajaji Nagar">Rajaji Nagar</option>
                        <option value="T Dasarhalli">T Dasarhalli</option>
                      </select>

                      <span className={styles.customIcon}>
                        <FaChevronDown />
                      </span>
                    </div>
                    <button
                      className={`${styles.btnPrimary} ${styles.Herobtn}`}
                      onClick={() => setShowPopup(true)}
                    >
                      Book Appointment
                    </button>
                  </div> */}
                </div>
                <div className={`col-sm-12 col-md-7 text-center mt-4 mt-md-0 position-relative ${styles.HeroSectionImgdiv} `}>
                  <Image src={doctorImage2} alt="Dr. Uday Ravi" className={`${styles.HeroSectionImage} ${styles.HeroSectionImagealt} img-fluid`} />
                  <h1 className={`${styles.bgText}`}>
                    care
                  </h1>
                  {/* <div className={`${styles.infoBubble} ${styles.topRight}`}>
                    <Image src={bubble1} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    15+ Years Of <br /> Surgical Expertise</div> */}
                  <div className={`${styles.infoBubble} ${styles.bottomLeft} ${styles.Slide2bottomLeft}`}>
                    <Image src={bubble4} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Personalized <br /> Treatment Plans</div>
                  <div className={`${styles.infoBubble} ${styles.bottomRight} ${styles.Slide2bottomRight}`}>
                    <Image src={bubble5} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Compassionate <br />Care at Every Step</div>
                </div>
              </div>
            </div>


            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="row align-items-center flex-column-reverse flex-md-row mx-4">
                <div className={`col-sm-12 col-md-6  ${styles.HeroSectionText}`}>
                  <h1 className={`${styles.heroTitle}`}>
                    Leading-Edge Laparoscopic & Laser Techniques
                  </h1>
                  <p className={`${styles.HeroSectionPara}`}>
                    Benefit from minimally invasive surgery with less pain, faster healing, and better results.
                  </p>
                  {/* <div className="d-none d-lg-flex  align-items-center mt-4 ">
                    <div className={styles.selectWrapper}>
                      <select
                        className={`${styles.HeroSectiondropdown} form-select w-auto`}
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        <option value="">Select Location</option>
                        <option value="Yelahanka">Yelahanka</option>
                        <option value="Kodigehalli">Kodigehalli</option>
                        <option value="Rajaji Nagar">Rajaji Nagar</option>
                        <option value="T Dasarhalli">T Dasarhalli</option>
                      </select>

                      <span className={styles.customIcon}>
                        <FaChevronDown />
                      </span>
                    </div>
                    <button
                      className={`${styles.btnPrimary} ${styles.Herobtn}`}
                      onClick={() => setShowPopup(true)}
                    >
                      Book Appointment
                    </button>
                  </div> */}

                </div>
                <div className=" col-sm-12 col-md-6 text-center mt-4 mt-md-0 position-relative">
                  <Image src={OldParents} alt="Dr. Uday Ravi" className={`${styles.HeroSectionImage}  ${styles.HeroSectionImagealt2} img-fluid`} />
                  <h1 className={`${styles.bgText} ${styles.bgText2}`}>
                    moder
                  </h1>

                  <div className={`${styles.infoBubble} ${styles.bottomLeft} ${styles.Slide3bottomLeft}`}>
                    <Image src={bubble2} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Minimally Invasive.<br />Faster Recovery</div>
                  <div className={`${styles.infoBubble} ${styles.bottomRight} ${styles.Slide3bottomRight}`}>
                    <Image src={bubble1} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Cutting-Edge Techniques, <br />Superior Outcomes</div>
                </div>
              </div>
            </div>
            {/* Add more <div className="carousel-item"> for other slides */}
          </div>
          <div>
          </div>

        </div>
        <div>
          <button className={`carousel-control-prev d-md-none ${styles.carouselControlPrevCustom}`} type="button" data-bs-target="#heroCarouselIndicator" data-bs-slide="prev">
            <Image src={RightArrow} alt="Left Arrow" className={styles.arrowIcon} />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className={`carousel-control-next d-md-none ${styles.carouselControlNextCustom}`} type="button" data-bs-target="#heroCarouselIndicator" data-bs-slide="next">
            <Image src={LeftArrow} alt="Right Arrow" className={styles.arrowIcon} />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Laptop View Carousel */}
        <div id="heroCarousel" className={`carousel slide ${styles.carouselLaptop}`} data-bs-ride="carousel">
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row align-items-center flex-column-reverse flex-md-row mx-4">
                <div className={`col-md-6  ${styles.HeroSectionText}`} style={{ position: "relative", zIndex: 10 }} data-aos="fade-right" data-aos-delay="300">
                  <h1 className={`${styles.heroTitle}`} >
                    World-Class<br />Surgical Precision<br />Compassion & Care.
                  </h1>
                  <p className={`${styles.HeroSectionPara}`} >
                    Discover the difference when precision meets empathy.<br />
                    Dr. Uday Ravi delivers advanced surgical care with superior outcomes and personalized support.
                  </p>
                  {/* <div className="d-none d-lg-flex align-items-center mt-4">
                    <div className={styles.selectWrapper}>
                      <select
                        className={`${styles.HeroSectiondropdown} form-select`}
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        <option value="">Select Location</option>
                        <option value="Yelahanka">Yelahanka</option>
                        <option value="Kodigehalli">Kodigehalli</option>
                        <option value="Rajaji Nagar">Rajaji Nagar</option>
                        <option value="T Dasarhalli">T Dasarhalli</option>
                      </select>

                      <span className={styles.customIcon}>
                        <FaChevronDown />
                      </span>
                    </div>
                    <button
                      className={`${styles.btnPrimary} ${styles.Herobtn}`}
                      onClick={() => setShowPopup(true)}
                    >
                      Book Appointment
                    </button>
                  </div> */}

                </div>
                <div className="col-md-6 text-center mt-4 mt-md-0 position-relative" >
                  <Image src={doctorImage} alt="Dr. Uday Ravi with surgical expertise" className={`${styles.HeroSectionImage} img-fluid`} data-aos="fade-left" />
                  <h1 className={`${styles.bgText}`} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                    care
                  </h1>
                  <div className={`${styles.infoBubble}  ${styles.topRight} ${styles.Slide1topRight}`} data-aos="fade-left">
                    <Image src={bubble1} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    15+ Years Of <br /> Surgical Expertise</div>
                  <div className={`${styles.infoBubble} ${styles.bottomLeft}  ${styles.Slide1bottomLeft}`} data-aos="fade-left">
                    <Image src={bubble2} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Pioneering Laser<br /> & Laparoscopy</div>                      
                  <div className={`${styles.infoBubble} ${styles.bottomRight} ${styles.Slide1bottomRight}`} data-aos="fade-left">
                    <Image src={bubble3} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Trusted By<br /> 5,000+ Patients</div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row align-items-center flex-column-reverse flex-md-row mx-4">
                <div className={`col-md-5  ${styles.HeroSectionText} `} data-aos="fade-right" data-aos-delay="300">
                  <h1 className={`${styles.heroTitle}`} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                    Your Health <br />Journey, <br />Personally Guided.
                  </h1>
                  <p className={`${styles.HeroSectionPara}`}>
                    Experience care that extends beyond the operating room with personalized treatment plans, expert guidance, and ongoing support for your complete well-being.
                  </p>
                  {/* <div className="d-none d-lg-flex align-items-center mt-4 ">
                    <div className={styles.selectWrapper}>
                      <select
                        className={`${styles.HeroSectiondropdown} form-select w-auto`}
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        <option value="">Select Location</option>
                        <option value="Yelahanka">Yelahanka</option>
                        <option value="Kodigehalli">Kodigehalli</option>
                        <option value="Rajaji Nagar">Rajaji Nagar</option>
                        <option value="T Dasarhalli">T Dasarhalli</option>
                      </select>

                      <span className={styles.customIcon}>
                        <FaChevronDown />
                      </span>
                    </div>
                    <button
                      className={`${styles.btnPrimary} ${styles.Herobtn}`}
                      onClick={() => setShowPopup(true)}
                    >
                      Book Appointment
                    </button>
                  </div> */}
                </div>
                <div className={` col-md-7 text-center mt-4 mt-md-0 position-relative ${styles.HeroSectionImgdiv} `}>
                  <Image src={doctorImage2} alt="Dr. Uday Ravi" className={`${styles.HeroSectionImage} ${styles.HeroSectionImagealt} img-fluid`} data-aos="fade-left" />
                  <h1 className={`${styles.bgText}`}>
                    care
                  </h1>
                  {/* <div className={`${styles.infoBubble} ${styles.topRight}`}>
                    <Image src={bubble1} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    15+ Years Of <br /> Surgical Expertise</div> */}
                  <div className={`${styles.infoBubble} ${styles.bottomLeft} ${styles.Slide2bottomLeft}`}>
                    <Image src={bubble4} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Personalized <br /> Treatment Plans</div>
                  <div className={`${styles.infoBubble} ${styles.bottomRight} ${styles.Slide2bottomRight}`}>
                    <Image src={bubble5} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Compassionate <br />Care at Every Step</div>
                </div>
              </div>
            </div>


            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="row align-items-center flex-column-reverse flex-md-row mx-4">
                <div className={`col-md-6  ${styles.HeroSectionText} ${styles.fadeinright}`} data-aos="fade-right" data-aos-delay="300" >
                  <h1 className={`${styles.heroTitle}`}>
                    Leading-Edge <br />Laparoscopic & <br />Laser Techniques
                  </h1>
                  <p className={`${styles.HeroSectionPara}`}>
                    Benefit from minimally invasive surgery with less pain, faster healing, and better results.
                  </p>
                  {/* <div className="d-none d-lg-flex  align-items-center mt-4 ">
                    <div className={styles.selectWrapper}>
                      <select
                        className={`${styles.HeroSectiondropdown} form-select w-auto`}
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        <option value="">Select Location</option>
                        <option value="Yelahanka">Yelahanka</option>
                        <option value="Kodigehalli">Kodigehalli</option>
                        <option value="Rajaji Nagar">Rajaji Nagar</option>
                        <option value="T Dasarhalli">T Dasarhalli</option>
                      </select>

                      <span className={styles.customIcon}>
                        <FaChevronDown />
                      </span>
                    </div>
                    <button
                      className={`${styles.btnPrimary} ${styles.Herobtn}`}
                      onClick={() => setShowPopup(true)}
                    >
                      Book Appointment
                    </button>
                  </div> */}

                </div>
                <div className="col-md-6 text-center mt-4 mt-md-0 position-relative">
                  <Image src={OldParents} alt="Dr. Uday Ravi" className={`${styles.HeroSectionImage} img-fluid`} data-aos="fade-left" />
                  <h1 className={`${styles.bgText} ${styles.bgText2}`} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    moder
                  </h1>

                  <div className={`${styles.infoBubble} ${styles.bottomLeft} ${styles.Slide3bottomLeft}`}>
                    <Image src={bubble2} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Minimally Invasive.<br />Faster Recovery</div>
                  <div className={`${styles.infoBubble} ${styles.bottomRight} ${styles.Slide3bottomRight}`}>
                    <Image src={bubble1} alt="Logo" className={`${styles.logoImage} img-fluid`} />
                    Cutting-Edge Techniques, <br />Superior Outcomes</div>
                </div>
              </div>
            </div>
            {/* Add more <div className="carousel-item"> for other slides */}
          </div>

          {/* Carousel Indicators */}
          <div className={`carousel-indicators mt-lg-4 ${styles.carouselIndicators}`}>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        </div>
      </div>
      <PopupForm
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        selectedLocation={selectedLocation}
      />

    </section>
  );
}
