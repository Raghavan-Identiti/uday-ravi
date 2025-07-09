
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import pilonidalSinusImg1 from '../../assets/pilonidalSinusImg1.png';

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
    { id: 'pilonidal', label: 'Pilonidal',type:"heading" },
    { id: 'what-is-pilonidal', label: 'What Is Pilonidal',type:"subheading" },
    { id: 'causes', label: 'Causes',type:"subheading" },
    { id: 'symptoms', label: 'Symptoms',type:"subheading" },
    { id: 'diagnosis', label: 'Diagnosis',type:"subheading" },
    { id: 'treatment', label: 'Treatment',type:"subheading" },
    { id: 'prevention', label: 'Prevention',type:"subheading" },
  ];

  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Pilonidal Sinus";
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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Pilonidal Sinus Treatment in Bangalore</h1>
              <div id="pilonidal" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >PILONIDAL SINUS </h2>
                <p>A pilonidal sinus is a small opening or a tunnel found in the skin in the sacrococcygeal area (the area on the top of your buttocks where they divide). Pilonidal sinuses are harmless and cause symptoms only if they become infected with hair follicles. The condition is known as pilonidal sinus disease. The area where the pilonidal sinus develops appears swollen, tender, and red, with pus draining out. Treatment consists of antibiotics to treat the infection. Repeated infections require the removal of the sinus surgically.</p>
                <div className={` ${styles.Section2PilesImgdiv}`}>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={pilonidalSinusImg1} alt="pilonidalSinusImg1" className={styles.Section2PilesImage1} />
                    <p>Fig 1. Pilonidal Sinus</p>
                  </div>
                </div>
              </div>
              <div id="what-is-pilonidal" className={styles.Section2Question7} data-aos="fade-up">
                <h2 className="mt-5">What Is Pilonidal Sinus?</h2>
                <p>
                  {"The pilonidal sinus is an opening in the skin on the natal cleft (the place below your lower back where the buttocks divide). These sinuses can be found anywhere in your body, but the sacrococcygeal area (at the top of your butt, where they divide) is the most common. Frequently seen as a single opening at the top of your butt, about 5 cm from the anus, these sinuses can also have multiple openings along the midline. Pilonidal sinus affects both sexes. It is seen frequently in men due to excess hair growth and in people who have to sit for long periods of time, like cab drivers. Pilonidal sinuses are harmless and do not cause any symptoms. Only when they become infected with hair follicles, is there discomfort. The condition is known as pilonidal sinus disease. Fever, swollen and tender areas, and oozing of pus from the sinus are the common symptoms. Treatment of pilonidal sinus disease consists of medicines to treat the fever and pain and antibiotics for the infection. These infections tend to recur because of hair follicles in your butt area. In such cases, Dr. Uday Ravi may recommend getting the entire sinus excised."}
                </p>
                <strong style={{color:"#5c47dc"}}>Bilateral Gynaecomastia</strong>
                <p>
                  Gynecomastia is a benign enlargement of the male breast (typically bilateral, but sometimes unilateral) caused by proliferation of glandular components. Clinically, it is distinguished by the appearance of a rubbery or firm mass radiating concentrically from the nipples. Pseudogynecomastia (lipomastia) is characterized by fat deposition without glandular development and should be distinguished from gynecomastia.
                </p>
                <strong style={{color:"#5c47dc"}}>Asymmetric Gynaecomastia</strong>
                <p>
                  Asymmetric gynecomastia was defined as gynecomastia that met both of the following criteria: on physical examination, the size of the palpable mass beneath the nipple-areolarcomplex was twice as large as the smaller one; and on ultrasonography, the depth of the glandular tissue beneath the nipple-areolar complex was twice as deep as the smaller one.
                </p>
              </div>
              <div id="causes" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5">What Causes Pilonidal Sinus?</h2>
                <p>The exact cause of pilonidal sinus is not known. Since it occurs after puberty, changing hormone levels is considered to be one of the reasons. Hair growth in the butt area, friction from undergarments, and sitting for long periods of time are the other potential factors in the development of pilonidal sinus.</p>
                <p>Activities that cause friction on the skin of the buttock, like sitting for a long time, can cause the hair growing in the area to push back inwards. The body recognizes this hair as a foreign object and reacts like it would to any foreign object. It launches an immune response to push the hair out. Hence the symptoms of an abscess, pus, fever, pain, and inflammation.</p>
              </div>
              <div id="symptoms" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">What Are The Symptoms of Pilonidal Sinus?</h2>
                <p>
                  The pilonidal sinus is a small tunnel under the skin at the top of your butt, where the butt divides. It generally does not cause any symptoms. Pilonidal sinus disease is an inflammatory condition when hair follicles are entrapped inside it. The symptoms are seen as the body’s response to the hair as a foreign body. You may notice the following symptoms
                </p>
                <ul>
                  <li>
                    Fever- The body temperature is raised due to the immune response
                  </li>
                  <li>
                    Pain -The swelling and inflammation cause pain in the site, making it difficult for you to sit or lie on your back.
                  </li>
                  <li>
                    Swelling -The abscess is filled with pus which makes it appear swollen
                  </li>
                  <li>
                    Redness- The area will be inflamed and appear reddish
                  </li>
                  <li>
                    Heat- The swelling will feel hot to touch
                  </li>
                  <li>
                    Sensitivity- The affected area is extremely sensitive to touch
                  </li>
                  <li>
                    Pus- There may be oozing of a foul-smelling discharge from the site
                  </li>
                </ul>
                <p>In severe cases and repeated infections, pilonidal cysts may develop. Cysts are holes that form when an abscess has been present for a long time. Sometimes, more than one sinus tract may be formed with multiple openings along the midline from the top of the butt to the anus.</p>
              </div>
              <div id="diagnosis" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">How is Pilonidal Sinus Diagnosed?</h2>
                <p>
                  {"Dr. Uday Ravi who is renowned and the best pilonidal sinus surgeon diagnoses mainly by the symptoms and physical examination. A small pit or a tunnel on the skin at the midline where the butt divides is the hallmark finding seen on examination. Sometimes small hair may be trapped inside the pit, which can be pulled out. In rare cases, the pilonidal sinus may be present below the skin's surface. Though gentle pressure on the area will suffice to confirm the diagnosis, doctor may suggest sonography( a test that uses high-frequency sound waves to get pictures of the inside of your body) to confirm it. An MRI (magnetic resonance imaging) may be suggested if the symptoms suggest a deeper pathology like a fistula in ano (a small, abnormal tunnel that develops from the bowel to the skin surface)."}
                </p>
              </div>
              <div id="treatment" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">How is Pilonidal Sinus Treated?</h2>
                <p>
                  Pilonidal sinus is treated symptomatically. Doctor for pilonidal sinus will give medications like antipyretics and analgesics to deal with fever and pain. Antibiotics are prescribed to clear the infection.
                </p>
                <strong style={{color:"#5c47dc"}}>Incision and Drainage</strong>
                <p>
                  If there is a large abscess present, Dr. Uday Ravi will suggest an Incision and Drainage of the pus. This small procedure is done at the clinic under local anesthesia. The surgeon makes a small cut that allows the pus to drain. The wound will be dressed, and you can go home immediately after.
                </p>
                <strong style={{color:"#5c47dc"}}>Phenol Injections</strong>
                <p>
                  This process is similar to cleaning and flushing out the sinus. A solution of 80% phenol is injected into the sinus. It is allowed to stay there for a maximum of 3 minutes and then flushed out. This method pushes out the hair follicles from the sinus.
                </p>
                <strong style={{color:"#5c47dc"}}>Surgery</strong>
                <p>
                  Surgical treatment involves different procedures based on the severity of your condition.
                </p>

                <ul>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Excision of the sinus :</strong>
                    <p> This procedure is done under general anesthesia. Dr. Uday Ravi will cut open the sinus and surrounding region and remove it completely. The wound is left open to heal naturally. It will take 6 to 12 weeks to recover from this procedure. This procedure has the lowest risk of recurrence.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Excision with closure :</strong>
                    <p> In some cases of severe infection, doctor may excise the sinus completely. He then cuts oval-shaped flaps of skin on either side of it. The ends are then sutured together. This leads to the flattening of the groove between the buttocks. This procedure is done under general anesthesia. The stitches are removed 10 days after the procedure. The wound needs to be dressed every day. This procedure has a quicker recovery than open excision, but the chances of the wound getting infected are very high.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Laser Treatment: </strong>
                    <p> Dr. Uday Ravi does laser treatment for pilonidal sinus. Pilonidal sinus laser surgery is a minimally invasive and preferred procedure for treating pilonidal sinus. The procedure involves cleaning the entire sinus and passing a laser beam through it. The sinus tract is destroyed using a radial laser fiber. This procedure does not leave behind a wound or require stitches. The healing time is minimal, and you can return to your routine activities sooner than the traditional open surgeries.</p>
                  </li>
                </ul>
                <p>Pilonidal cyst treatment can also be done with the help of laser.
                <br/>You can generally go home on the same day as the procedure. To facilitate faster healing, you can do the following things.</p>
                <ul>
                  <li>Keep the wound area clean and dry at all times.</li>
                  <li>Avoid sitting for a long time at a stretch.</li>
                  <li>Wear loose-fitting undergarments that are comfortable.</li>
                  <li>Eat fiber-containing foods that promote easy passage of stools.</li>
                  <li>Avoid strenuous exercises for at least 8 weeks.</li>
                  <li>Do not go cycling or swimming till the wound has healed completely.</li>
                </ul>
                <p>Complications Associated With Pilonidal Sinus<br/>
                   Several complications arise with pilonidal sinus. 
                </p>
                 <ul>
                  <li>Recurrence of the infection and abscess is the most common complication.</li>
                  <li>Re-infection at the scar on the midline is frequently seen.</li>
                  <li>A surgical wound that has not healed properly would require further surgery and excision.</li>
                  <li>Pilonidal sinus may form again even after surgical excision.</li>
                </ul>
              </div>
              <div id="prevention" className={styles.Section2Question7} data-aos="fade-up">
                <h2 className="mt-5">How To Prevent Pilonidal Sinus?</h2>
                <p>
                  {"Pilonidal sinus can be prevented by ensuring good hygiene. Here are the steps that you can take to prevent pilonidal sinus"}
                </p>
                 <ul>
                  <li>Ensure the cleanliness of the region.</li>
                  <li>Wash the area with soap daily while bathing.</li>
                  <li>Wipe the area well. Do not let moisture accumulate.</li>
                  <li>Shave away hair growth regularly.</li>
                  <li>Do not sit for long periods of time at a stretch.</li>
                  <li>Lose excess weight by exercising and dieting.</li>
                  <li>Wear loose, comfortable clothing.</li>
                </ul>
                <strong >If you are looking for the best pilonidal sinus treatment in Bengaluru contact Dr. Uday Ravi</strong>
                
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