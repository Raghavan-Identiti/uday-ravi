
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import hydrocele1 from '../../assets/hydrocele-1.jpg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Custom icon
import FaShieldAlt from '../../assets/Group158.png'; // Use your actual SVG or PNG
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
            currentId = id;
          }
        }
      });
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const tocItems = [
    { id: 'hydrocele', label: 'Hydrocele',type:"heading" },
    { id: 'types', label: 'Types',type:"subheading" },
    { id: 'causes', label: 'Causes',type:"subheading" },
    { id: 'symptoms', label: 'Symptoms',type:"subheading" },
    { id: 'treatment', label: 'Treatment',type:"subheading" },
  ];
    
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Hydrocele";
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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Hydrocele Treatment in Bangalore</h1>
              <div id="hydrocele" className={styles.Section2Question1} data-aos="fade-up">
                <h2>What is Hydrocele?</h2>
                <p>{"Hydrocele is an accumulation of fluid in the testes, which can be pus, blood, or serious fluid and cause a painless swelling. It can occur in both men and children and can often resolve on its own. However, when it persists for a long time, it can affect the testis and fertility and needs to be drained and the underlying cause treated."}</p>
                <div className={`d-flex flex-column flex-lg-row justify-content-center gap-5 ${styles.Section2PilesImgdiv}`}>
                  <Image src={hydrocele1} alt="hydrocele" className={styles.Section2hydrocele1} />
                </div>
                <div className='d-flex flex-column align-items-center mt-4'>
                  <p>
                    Fig 1. Hydrocele
                  </p>
                </div>
              </div>
              <div id="types" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5">Types of Hydrocele</h2>
                <p>There are two types of hydrocele:</p>
                <ul className="">
                  <li>
                    <p>Non-communicating hydrocele: It occurs when the sac closes, but the body does not absorb the fluid. Within a year, the residual fluid is absorbed by the body.</p>
                  </li>
                  <li>
                    <p>Communicating hydrocele: It occurs when the sac enclosing your testicle does not entirely seal, this allows liquids to move in and out of the sac.</p>
                  </li>
                </ul>
              </div>
              <div id="causes" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">What are the Causes of Hydrocele?</h2>
                <p>
                  There are several reasons why a hydrocele can arise :
                </p>
                <ul className="">
                  <li>
                    <p>
                      {"Trauma to the testis or injury of the testis, which can lead to accumulation of blood in the sac."}
                    </p>
                  </li>
                  <li>
                    <p>{"Infection in the testicular sac or of the testes can lead to the accumulation of pus or serous inflammatory fluid."}</p>
                  </li>
                  <li>
                    <p>{"Filariasis or infection by the filarial worm, which obstructs the lymphatic drainage and accumulation of lymph in the sac."}</p>
                  </li>
                  <li>
                    <p>{"Hernia in the inguinal canal, which can also cause fluid to accumulate in the testicular sac"}</p>
                  </li>
                  <li>
                    <p>{"Torsion of the testis or winding of the testes around the testicular cord leads to decreased blood supply to the testes and is an emergency condition."}</p>
                  </li>
                </ul>
              </div>
              <div id="symptoms" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">What are the Symptoms of Hydrocele?</h2>
                <p>The common symptom of a hydrocele will inevitably be a swelling in the scrotal sac. Other symptoms, however, could be :</p>
                <ul className="">
                  <li>
                    <p>{"Heaviness in the scrotum due to fluid accumulation"}</p>
                  </li>
                  <li>
                    <p>{"Change in size of the hydrocele, especially if it is communicating with the abdominal cavity, which is the sign of a communicating hydrocele commonly seen in kids."}</p>
                  </li>
                  <li>
                    <p>{"When the hydrocele is not communicating with the abdominal cavity, it can lead to an increase in fluid accumulation in the cavity and also cause tenderness in the sac."}</p>
                  </li>
                  <li>
                    <p>{"Discomfort and dragging sensation in the testicular area."}</p>
                  </li>
                </ul>
                <div className="subdiv d-flex flex-column mt-4">
                  <strong>Advanced Hydrocele Treatment Options: Surgery and Non-Surgical</strong>
                  <p>
                    If you happen to have a case of advanced hydrocele, you can take a look and talk to your doctor about both surgical and non-surgical treatment options for hydroceletreatment.
                  </p>
                  <ul className="">
                    <li>
                      <p><strong>{"Non-surgical treatment for hydrocele:"}</strong>-{"this is the wait and watch approach, which is usually approached for infants and children having hydrocoele in the first few years of life as it usually goes away. If there is an underlying infective etiology for the hydrocele, an antibiotic may also be used to treat it."}</p>
                    </li>
                    <li>
                      <p><strong>{"Surgical treatment for hydrocele "}</strong>{"is adopted in kids who have a persistent hydroceleand in adults generally because there is always an underlying cause that needs to be addressed. Some examples of hydrocele surgery include the following:"}</p>
                    </li>
                    <li>
                      <p><strong>{"Hydrocelectomy"}</strong>{" is performed under anaesthesia and involves incision and drainage of the testicular sac. Sometimes, the surgeon may remove or tie up a part of the sac to prevent recurrence of hydrocele."}</p>
                    </li>
                    <li>
                      <p><strong>{"TNeedle aspiration"}</strong>is when a needle is inserted into the sac, and the fluid is drained into the syringe to reduce the discomfort caused by the hydrocele.</p>
                    </li>
                    <li>
                      <p><strong>{"Sclerotherapy"}</strong> is a procedure in which a sclerosant is used to collapse the sac and prevent fluid reaccumulation.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="treatment" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">What is the Procedure & Treatment for Hydrocele?</h2>
                <p>
                  It is very necessary to get your hydrocele treated.If a hydrocele is left untreated it may develop a risk for infection, inflammation or hernia in adults and premature birth, low birth rate or genetic disorders in infants. Infants who suffer from hydrocele can recover without any surgical treatment.
                </p>
                <strong>Types of hydrocelectomy:</strong>
                <ul className="">
                  <li>
                    <p><strong>{"Open hydrocelectomy"}</strong>-{"it is a traditional approach where an incision is made directly over the hydrocele sac in the scrotum to remove the sac. It is generally performed under local or general anaesthesia."}</p>
                  </li>
                  <li>
                    <p><strong>{"Laparoscopic hydrocelectomy"}</strong>{"it is a minimally invasive procedure in which a small incision is made in the abdomen through which a laparoscope and surgical tools are inserted which identifies and removes the hydrocele sac. General or regional anaesthesia is used."}</p>
                  </li>
                  <li>
                    <p><strong>{"Laser hydrocelectomy"}</strong>{"it is a minimally invasive procedure in which laser energy is passed through a small incision to vaporise and remove the hydrocele sac."}</p>
                  </li>
                  <li>
                    <p><strong>{"Microsurgical hydrocelectomy"}</strong> in this a smaller incision is made in the scrotum or groin area when compared to open hydrocelectomy through which specialisedinstruments and magnification are passed to remove the hydrocele sac. It causes less tissue trauma and faster recovery.</p>
                  </li>
                </ul>
                <div className={styles.Section2Question6}>
                  <strong>Recovery and Post-Treatment Care for Hydrocele</strong>
                  <p>{"Recovery following a hydrocelectomy procedure can take about 1-2 weeks, and slightly longer to feel completely at ease. Some of the precautions you can take to smoothen your road to recovery are as follows:"}</p>
                  <ul className={`${styles.numberlist}`}>
                    <li>
                      <p>{"Follow the discharge advice given by the doctor and go for a review"}</p></li>
                    <li>
                      <p>{"Take pain medications as prescribed"}</p></li>
                    <li>
                      <p>{"Avoid sexual activity for 4-6 weeks"}</p></li>
                    <li>
                      <p>{"Use a cold compress for swelling and bruising"}</p></li>
                    <li>
                      <p>{"Eat a healthy diet"}</p></li>
                    <li>
                      <p>{"Use the scrotal support prescribed by the doctor"}</p>
                    </li>
                    <li>
                      <p>{"Keep the surgical site clean and dry"}</p>
                    </li>
                    <li>
                      <p>{"Rest and hydrate well after the surgery."}</p>
                    </li>
                  </ul>
                </div>
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

                        setActiveId(id);
                      }
                    }}
                    value={activeId || ""}
                  >
                    <option value="" disabled>Select a section</option>
                    {tocItems.map(({ id, label, type }) => (
                      <option
                        key={id}
                        value={id}
                        disabled={type === 'heading'} // optionally disable heading in mobile select
                      >
                        {type === 'heading' ? `-- ${label} --` : `  ${label}`}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className={styles.Section2dropdownIcon} />
                </div>
              </div>

            ) : (
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
                  {/* <div className={styles.Section2iconWrapper}> */}
                  <Image src={FaShieldAlt} alt="Shield Icon" className={`${styles.Section2icon} mb-3`} />
                  {/* </div> */}
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