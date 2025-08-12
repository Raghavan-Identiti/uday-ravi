
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import AppendicitisImg1 from '../../assets/AppendicitisImg1.png';
import AppendicitisImg1New from '../../assets/AppendicitisImg1New.png';
import AppendicitisImg2 from '../../assets/AppendicitisImg2.png';
import AOS from 'aos';             // Import AOS
import 'aos/dist/aos.css';        // Import AOS styles
import { FaChevronDown} from 'react-icons/fa'; // Custom icon
import FaShieldAlt from '../../assets/Group158.png'; // Use your actual SVG or PNG
import Section4 from "./Section4";
import Section5 from "./Section5";
import PopupForm from '@/app/PopupModal/popupmodal';
import Link from 'next/link';

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
            currentId = id.trim(); // <== in case spaces sneak in again
          }
        }

      });
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


const tocItems = [
  { id: 'appendicitis', label: 'Appendicitis', type: 'heading' },
  { id: 'symptoms', label: 'Symptoms', type: 'subheading' },
  { id: 'need', label: 'Need', type: 'subheading' },
  { id: 'procedure', label: 'Procedure', type: 'subheading' },
  { id: 'advantages', label: 'Advantages', type: 'subheading' },
  { id: 'recovery-time', label: 'Recovery Time', type: 'subheading' },
  { id: 'complications', label: 'Complications', type: 'subheading' },
  { id: 'recovery-tips', label: 'Recovery Tips', type: 'subheading' },
];


  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Appendicitis";
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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Appendicitis Treatment in Bangalore</h1>
              <div id="appendicitis" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >Appendicitis</h2>
                <p>Appendicitis is an inflammation of the appendix. The appendix is a small pouch attached to the large intestine near your abdomen’s lower right part. However, in most people, pain begins around the navel and then moves. Appendicitis is a painful condition that occurs when the appendix becomes infected. As inflammation starts, appendicitis pain typically increases and eventually becomes severe. Standard treatment is the surgical removal of the appendix called Appendectomy. Surgeons usually carry out this procedure on an emergency basis.</p>
                <p>Since the appendix may burst or rupture, allowing infectious contents to penetrate the abdominal cavity, doctors consider appendicitis a medical emergency. To avoid complications, the doctor removes the appendix before it ruptures.</p>
                <div className={` ${styles.Section2PilesImgdiv}`}>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={AppendicitisImg1New} alt="AppendicitisImg1" className={styles.Section2PilesImage1New} />
                    <p>Fig 1. Appendicitis</p>
                  </div>
                </div>
              </div>
              <div id="symptoms" className={styles.Section2Question7} data-aos="fade-up">
                <h2>What are the symptoms of appendicitis?</h2>
                <p>Appendicitis causes abdominal pain, which is most often felt around the bellybutton. The pain could also spread to the lower right side of your abdomen. Additional signs and symptoms of appendicitis include:</p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>
                    Fever
                  </li>
                  <li>
                    Diarrhea
                  </li>
                  <li>
                    Nausea
                  </li>
                  <li>
                    Vomiting
                  </li>
                  <li>
                    Loss of appetite
                  </li>
                  <li>
                    Frequent urination
                  </li>
                  <li>
                    Painful urination
                  </li>
                </ul>
                <p>
                  If the appendix bursts, the person is likely to have a high fever and extreme abdominal pain.
                </p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={AppendicitisImg2} alt="AppendicitisImg2" className={styles.Section2PilesImage1} />
                  <p>Fig 2. Symptoms of Appendicitis</p>
                </div>
              </div>
              <div id="need" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5">Why do you need an appendectomy?</h2>
                <p>If you have symptoms of appendicitis, you will need an appendectomy to remove your appendix which is inflamed, swollen, and infected. 
                   There is a significant possibility that your appendix could burst or rupture if you have appendicitis. It can happen within 48 to 72 hours of the onset of symptoms. This can cause peritonitis, a life-threatening infection in your abdomen. 
                   It is done for:
                </p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>
                    {"Acute & recurrent appendicitis"}
                  </li>
                  <li>
                    {"Carcinoid tumor of the appendix"}
                  </li>
                  <li>
                    {"As gap appendectomy after drainage of appendicular abscess or after appendicular mass"}
                  </li>
                  <li>
                    {"Mucocele of the appendix"}
                  </li>
                </ul>
                
              </div>
              <div id="procedure" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">Procedure for appendectomy</h2>
                <p>
                  An appendectomy is a surgical procedure typically done by keyhole surgery, also known as laparoscopic surgery. Compared to open surgery, this technique is less invasive. That’s why more and more people opt for <strong>laparoscopic surgery for Appendix in Bengaluru.</strong> Dr. Uday Ravi is a well known laparoscopic surgeon in Bengaluru.
                </p>
                <strong style={{color:"#5c47dc"}}>Step by step procedure for laparoscopic appendectomy:</strong>
                <ul className='d-flex flex-column row-gap-2 mt-3'>
                  <li>
                    Generally, this procedure is done under general anesthesia.
                  </li>
                  <li>
                    Dr. Uday Ravi makes one to three small incisions in the abdomen and inserts a port, which is a special tool.
                  </li>
                  <li>
                    He uses this port to inject carbon dioxide into the stomach to inflate it and make the organs in the abdomen more visible.
                  </li>
                  <li>
                    The surgeon then inserts a laparoscope which has a lighted camera, into one of the incisions.
                  </li>
                  <li>
                    Other instruments are used to locate, position, and extract the appendix.
                  </li>
                  <li>
                    Dr. Uday will then remove the appendix from one of the incisions, and sterile fluid is administered to remove any residual infectious material. Then the surgeon removes the surgical instruments, allowing the carbon dioxide gas to escape, and uses sutures or bandages to seal the incisions. However, a laparoscope cannot always be used to complete the operation. If the surgeon cannot see the appendix well enough or if the patient has other health problems, in that case, the surgeon will perform an open appendectomy.
                  </li>
                </ul>
              </div>
              <div id="advantages" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">Advantages Of Laparoscopic Appendectomy:</h2>
                <p>
                  {"The advantages of laparoscopic appendectomy surgery are:"}
                </p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>
                    Less post-operative pain
                  </li>
                  <li>
                    Faster recovery
                  </li>
                  <li>
                    Short hospital stay
                  </li>
                  <li>
                    Less post-operative complications like wound infection and adhesion
                  </li>
                  <li>
                    Small incisions and minimum scarring
                  </li>
                  <li>
                    Short surgery that takes 30-40 minutes
                  </li>
                  <li>
                    Quick return to normal activities
                  </li>
                  <li>
                    Better cosmetic results
                  </li>
                </ul>
              </div>
              <div id="recovery-time" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Recovery time</h2>
                <p>
                  The recovery period depends on the severity of the infection and whether the appendix is ruptured or not. You will go home after 1-2 days in the hospital. But if the appendix has ruptured, you will have to stay in the hospital for longer. They will give you antibiotics and observe you for any signs of complications. Before you go home from the hospital. The surgeon will give instructions regarding restrictions and post-operation care to improve your recovery and minimize infection risk.
                </p>
              </div>
              <div id="complications" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Complications</h2>
                <p>
                  If you experience any of these symptoms during recovery, you should notify the doctor:
                </p>
                <ul className="">
                  <li>
                    <p>
                      Vomiting
                    </p>
                  </li>
                  <li>
                    <p>
                      Fever more than 1010F
                    </p>
                  </li>
                  <li>
                    <p>
                      Severe abdominal pain
                    </p>
                  </li>
                  <li>
                    <p>Not passing stool or gas for three days</p>
                  </li>
                  <li>
                    <p>
                      Persistent pain
                    </p>
                  </li>
                  <li>
                    <p>
                      Swelling, redness, bleeding, or drainage from the incision site
                    </p>
                  </li>
                  <li>
                    <p>
                      Watery diarrhea for more than three days
                    </p>
                  </li>
                </ul>
              </div>
              <div id="recovery-tips" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5 mb-3">Recovery tips</h2>
                <ul className="">
                  <li>
                    <p>
                      Do not lift objects weighing more than 10 pounds for few days after laparoscopic surgery.
                    </p>
                  </li>
                  <li>
                    <p>
                      Before touching the area near the incision site, thoroughly wash your hands with warm water and soap.
                    </p>
                  </li>
                  <li>
                    <p>
                      Follow the instructions of the doctor regarding bathing.
                    </p>
                  </li>
                  <li>
                    <p>
                      Regularly examine the bandages for signs of infection, such as redness or smelly drainage from the incision site.
                    </p>
                  </li>
                  <li>
                    <p>
                      Avoid wearing tight clothes that could rub against the incision sites and cause pain.
                    </p>
                  </li>
                  <li>
                    <p>
                      The doctor will prescribe pain relievers. He will advise you to drink more water to avoid bowel obstruction.
                    </p>
                  </li>
                  <li>
                    <p>
                      To reduce strain on the incision sites, place a pillow over the stomach and apply firm pressure before coughing or moving. It is known as splinting.
                    </p>
                  </li>
                </ul>
                <p>In case you need surgery for Appendix, contact Dr. Uday Ravi the best appendix surgeon in Bengaluru </p>
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