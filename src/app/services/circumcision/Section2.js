
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css'; 
import { FaChevronDown } from 'react-icons/fa'; // Custom icon
import FaShieldAlt from '../../assets/Group158.png'; // Use your actual SVG or PNG
import CircumcisionImg1 from '../../assets/Circumcision-service-img1.jpg'; // Use your actual SVG or PNG
import CircumcisionImg2 from '../../assets/Circumcision-service-img2.jpg'; // Use your actual SVG or PNG
import Section4 from "./Section4";
import Section5 from "./Section5";
import PopupForm from '@/app/PopupModal/popupmodal';
import Link from 'next/link';
import AOS from 'aos';             // Import AOS
import 'aos/dist/aos.css';        // Import AOS styles

export default function Section2() {
  const [activeId, setActiveId] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
    const tocItems = [
    { id: 'circumcision', label: 'Circumcision',type:"heading" },
    { id: 'benefits', label: 'Benefits',type:"subheading" },
    { id: 'conditions', label: 'Conditions',type:"subheading" },
    { id: 'diagnosis', label: 'Diagnosis',type:"subheading" },
    { id: 'treatment', label: 'Treatment',type:"subheading" },
    { id: 'advantages', label: 'Advantages',type:"subheading" },
  ];


    // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,      // animation duration in ms (adjust as needed)
      once: false,        // allow animation to happen every time you scroll into view
      mirror: true        // animate elements out while scrolling past them
    });
  }, []);

  // Optional: refresh AOS on route change or if content changes dynamically
  useEffect(() => {
    AOS.refresh();
  });

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 992); // Bootstrap lg breakpoint
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentId = '';
      tocItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const middle = window.innerHeight / 2;
          if (rect.top <= middle && rect.bottom >= middle) {
            currentId = id.trim(); // <== in case spaces sneak in again
          }
        }

      });
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Circumcision (Laser & Stapler Techniques)";
};

  return (
    <section className={styles.Section2}>
      <div className="container">
        {/* Header */}
        <div className="row" data-aos="fade-up">
          <div className="col-12 px-5">
            <p className={styles.Section2Header}>
              <Link className='text-decoration-none text-dark' href={"/"}>Home</Link><Link className='text-decoration-none text-dark' href={"/services"}>&gt; Services</Link> &gt; <span>{getBreadcrumbLabel(activeId)}</span>
            </p>
          </div>
        </div>

        <div className="row d-flex flex-lg-row flex-column-reverse">
          {/* Left Content */}
          <div className="col-lg-9 col-md-12 mb-4 px-lg-5 px-3">
            <div className={styles.Section2content}>
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Circumcision Treatment in Bangalore</h1>
              <div id="circumcision" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >Circumcision</h2>
                <p>{"The sleeve of skin and mucosal tissue that covers the glans (head) of the penis is surgically removed. The foreskin is a double layer that is sometimes referred to as the foreskin. Circumcision is a prevalent practice in many regions of the globe. Circumcision practice is followed for many beneficial reasons like personal hygiene to lower the risk of disease. Circumcision is a religious ritual that is carried in several parts of the world."}</p>
                <p><strong>Foreskin: </strong>{"It is a piece of skin that covers the penis’s circular tip. The foreskin is entirely attached to the penis when an infant is born. The foreskin separates from the tip of the penis over time and can be retracted."}</p>
                <p>Dr. Uday Ravi is one of the <strong> best doctor for circumcision treatment in Bangalore. </strong> We provide the most advanced and painless circumcision surgery in Bangalore.</p>
                <div className={`${styles.Section2Question1Imgdiv} d-flex flex-column align-items-center`}>
                  <Image src={CircumcisionImg1} alt='Circumcision' className={styles.Section2CircumcisionImg1}/>
                  <p className='mt-3'>Fig 1. Circumcision</p>
                </div>
              </div>
              <div id="benefits" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5">Benefits of Circumcision Treatment</h2>
                <p>The most common symptom of diabetic foot ulcers is black tissue surrounding the ulcer, which forms because of the absence of healthy blood flow to the area around the ulcer. Also, you might see partial or complete tissue death due to infection around the affected area, causing pain, numbness, and pus discharge. However, some other signs and symptoms of diabetic foot ulcers are :</p>
                <ul className="">
                  <li>
                    <p>{"Circumcision makes it easier to clean the penis (Easier hygiene)."}</p>
                  </li>
                  <li>
                    <p>{"Urinary tract infections chances are reduced."}</p>
                  </li>
                  <li>
                    <p>{"Risks of sexually transmitted infections are reduced."}</p>
                  </li>
                  <li>
                    <p>{"Penile problem prevention."}</p>
                  </li>
                  <li>
                    <p>{"Penile cancer risk is reduced."}</p>
                  </li>
                </ul>
              </div>
              <div id="conditions" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">Conditions where Circumcision is needed</h2>
                
                <ul className={`${styles.sublistAlphabets}`}>
                  <li>
                    <p>{"Phimosis- Tight foreskin that is painful and difficult to pull back from the penis head"}</p>
                  </li>
                  <li>
                    <p>{"Paraphimosis- The foreskin will be trapped behind its initial position, cutting blood flow to the penile tissues."}</p>
                  </li>
                  <li>
                    <p>{"Balanitis- Inflammation of the glans or the penile head."}</p>
                  </li>
                  <li>
                    <p>{"Posthitis- Inflammation of the penis foreskin."}</p>
                  </li>
                  <li>
                    <p>{"Balanoposthitis- Inflammation of the glans as well as the foreskin of the penis."}</p>
                  </li>
                  <li>
                    <p>{"Lichen sclerosis- Thin white patches on the foreskin indicate a chronic inflammatory condition."}</p>
                  </li>
                  <li>
                    <p>{"Religious reasons"}</p>
                  </li>
                </ul>
              </div>
              <div id="diagnosis" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">Diagnosis for Circumcision</h2>
                <p>During the diagnosis, the doctor will ask a few questions about the patient’s medical history and any prior infections or injuries to the penis, that would help for circumcision surgery. The doctor additionally inquires whether the patient’s sexual life has been impacted by foreskin-related issues such as phimosis, balanitis, paraphimosis, etc. Doctor then does a thorough physical examination of the foreskin and penis. To rule out the presence of urinary tract infections, the doctor may additionally order urine tests or a swab from the foreskin.</p>
                <div className='d-flex flex-column align-items-center'>
                    <Image src={CircumcisionImg2} alt="Phimosis" className={styles.Section2CircumcisionImg2} />
                    <p>Fig 2. Phimosis</p>
                  </div>
              </div>
              <div id="treatment" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">Treatment</h2>
                <strong>Laser Circumcision in Bangalore</strong>
                <ul className={`${styles.sublistAlphabets}`}>
                  <li>
                    <p><strong>Precision:</strong> Laser technology is extremely precise and doesn’t affect normal surrounding skin and tissues.
                      Reduced bleeding: Laser procedure seals the blood vessels more efficiently and minimizes formation of blood clots or hematoma.</p>
                  </li>
                   <li>
                    <p><strong>Faster Healing: </strong>Due to better precision and reduced bleeding, it promotes faster healing of wound.</p>
                  </li>
                   <li>
                    <p><strong>educed Infection: </strong>RLaser procedures are found to have significantly reduced chances of infection.</p>
                  </li>
                   <li>
                    <p><strong>Minimized Pain:</strong> Laser circumcision is associated with less pain due to reduced nerve stimulation.</p>
                  </li>
                </ul>
                <strong>Stapler Circumcision in Bangalore</strong>
                <p>
                  Stapler circumcision surgery is performed under local anaesthetic. The foreskin is folded back over the first rubber ring to make it work. The second, larger, sharper-edged ring is then placed on top. The blood supply is gradually cut off as the two rings are closed, and the tissue dies and falls off. No sutures are required, but the patient must wear the rings for seven days to close properly. This technique is quick, painless, and results in minimal bleeding. It is a day-care procedure, and the patient can be discharged on the same day.
                </p>
              </div>
              <div id="advantages" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Advantages of Stapler Circumcision Treatment</h2>
                <ul className="">
                  <li>
                    <p>Most advanced, effective, and painless treatment.</p>
                  </li>
                  <li>
                    <p>The procedure takes only 30 min.</p>
                  </li>
                  <li>
                    <p>Fertility is unaffected.</p>
                  </li>
                  <li>
                    <p>After the next day, you should be able to resume your normal routine.</p>
                  </li>
                  <li>
                    <p>After the operation, there is no wound or scar</p>
                  </li>
                </ul>
                <p>
                  Book an appointment with Dr. Uday Ravi if you are looking for the best treatment for circumcision
                </p>
              </div>
            </div>
          </div>
          {/* Sticky Right Sidebar */}
          <div className="col-lg-3 col-md-12" data-aos="fade-up">
            {isMobile ? (
  <div className={styles.Section2dropdownContainer}>
    <div className={styles.Section2dropdownWrapper}>
      <select
        className={styles.Section2dropdownSelect}
        onChange={(e) => {
          const id = e.target.value;
          const section = document.getElementById(id);
          if (section) {
            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;
            const stickyOffset = 80;

            const scrollTo =
              section.offsetTop - (viewportHeight / 2 - sectionHeight / 2) - stickyOffset;

            window.scrollTo({
              top: scrollTo,
              behavior: "smooth",
            });

            // force update activeId so dropdown reflects change
            setActiveId(id);
          }
        }}
        value={activeId || "placeholder"}  // 👈 fallback placeholder
      >
        <option value="placeholder" disabled>
          Select a section
        </option>
        {tocItems.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </select>
      <FaChevronDown className={styles.Section2dropdownIcon} />
    </div>
  </div>
): (
              // Sticky Wrapper for TOC + Card
              <div className={styles.stickyWrapper}>
                <div className={styles.Section2sidebar}>
                  <div className={`${styles.Section2sidebarHeader} d-flex justify-content-center align-items-center`}>
                    <h5 className={styles.Section2sidebarTitle}>Table Of Contents</h5>
                  </div>
                  <ul className={styles.Section2tocList}>
                      {tocItems.map(({ id, label, type }) => (
                        <li key={id} className={type === 'heading' ? styles.tocHeading : styles.tocSubheading}>
                          <a
                            href={`#${id}`}
                            className={activeId === id ? styles.active : ''}
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                </div>

                <div className={styles.Section2cardContainer}>
                  <div className={styles.Section2iconWrapper}>
                    <Image src={FaShieldAlt} alt="Shield Icon" className={styles.Section2icon} />
                  </div>
                  <h4 className={styles.Section2Cardtitle}>
                    Don&apos;t Suffer in Silence<br />
                    <span className={styles.Section2highlight}>Get Relief Today</span>
                  </h4>
                  <p className={styles.Section2description}>
                    If you&apos;re dealing with piles, fissures, fistulas, or other anorectal issues,
                    schedule a consultation with Dr. Uday Ravi and explore safe, scar-free,
                    laser-based solutions.
                  </p>
                  <button type="button" className={`${styles.Section2button}`}
                    onClick={() => {
                      setShowPopup(true);
                    }}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
      <section id='faqs' className={styles.Section2FAQs}>
        <Section4 />
      </section>
      <section id='about-doctor' className={styles.Section2AboutDoctor}>
        <Section5 />
      </section>
      <PopupForm showPopup={showPopup} setShowPopup={setShowPopup} />

    </section>
  );
}