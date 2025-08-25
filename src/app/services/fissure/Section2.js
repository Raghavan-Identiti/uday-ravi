
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import Fissuresection1img1New from '../../assets/Fissuresection1img1New.jpg';
import FissureSymtomsimg from '../../assets/FissureSymtomsimg.png';
import AnalFistulaImg2New from '../../assets/AnalFistulaImg2New.jpg';
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
  const [isOpen, setIsOpen] = useState(false);
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
    { id: 'fissure', label: 'Fissure',type:"heading" },
    { id: 'types', label: 'Types' ,type:"subheading"},
    { id: 'causes', label: 'Causes',type:"subheading" },
    { id: 'primary-causes', label: 'Primary Causes',type:"subheading" },
    { id: 'conditions', label: 'Conditions' ,type:"subheading"},
    { id: 'symptoms', label: 'Symptoms',type:"subheading" },
    { id: 'diagnosis', label: 'Diagnosis',type:"subheading" },
    { id: 'treatment', label: 'Treatments' ,type:"subheading"},
    { id: 'prevention', label: 'Prevention',type:"subheading" },
  ];

  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Fissure";
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
          <div className="col-lg-9 col-md-12 mb-4 px-lg-5 px-3" >
            <div className={styles.Section2content}>
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Fissure Treatment in Bangalore</h1>
              <div id="fissure" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >What is Fissure?</h2>
                <p>{"Fissures are defined as any break, tear, or discontinuity in the usual tissue lining in your body. An anal fissure is the most common type of fissure that causes a small cut in the thin, moist tissue (mucosa) of the anal lining. "}</p>
                <p>{"The mucosa forms the inner lining of the anal canal, consisting of several mucous glands that secrete mucus to keep the lining moist. This mucosal layer can get damaged or injured due to wear and tear caused by repeated friction, which results in an abnormal slit."}</p>
                <div className={`d-flex flex-column flex-lg-row justify-content-center gap-5 ${styles.Section2PilesImgdiv}`}>
                  <Image src={Fissuresection1img1New} alt="Piles Treatment" className={styles.Section2PilesImage1} />\
                </div>
                <div className='d-flex flex-column align-items-center mt-4'>
                  <p>
                    Fig 1. Fissure
                  </p>
                </div>
              </div>
              <div id="types" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5">Anal fissures are classified into different types:</h2>
                <ul className="mt-3">
                  <li>
                    <p><strong>Acute Anal Fissures : </strong>These are superficial fissures present for less than 6 weeks. They present with well-demarcated edges.</p>
                  </li>
                  <li>
                    <p><strong>Chronic Anal Fissures : </strong>These fissures are present for more than 6 weeks. They may have thickened edges with skin tags.</p>
                  </li>
                  <li>
                    <p><strong>Primary Anal Fissures : </strong>These occur due to direct or primary causes that damage the mucosal lining of the anal canal.</p>
                  </li>
                  <li>
                    <p><strong>Secondary Anal Fissures : </strong>{"These develop secondary to other underlying medical conditions like Crohn's disease (inflammatory bowel disease)."}</p>
                  </li>
                </ul>
              </div>
              <div id="causes" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">What Causes A Fissure?</h2>
                <p>
                  The most common cause for an anal fissure is trauma caused by continuous friction during activities like anal sex, strained bowel movements, etc. The mucosal lining of the anal canal is thin and delicate and more prone to injury and infection.
                </p>
                <p>
                  {"If the anal sphincter muscles (ring-like muscles that control bowel movements), become too tight, they can add to the tension within your anal lining. This makes them more prone to wear and tear and reduces blood supply to the tissues."}
                </p>
              </div>
              <div id="primary-causes" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">Primary Causes Include:</h2>
                <ul className="mt-3">
                  <li>
                    <p>{"Chronic (long-lasting) constipation (inability to poop or hard stools) and straining while passing stools "}</p>
                  </li>
                  <li>
                    <p>{"Chronic diarrhea - Frequent watery stools"}</p>
                  </li>
                  <li>
                    <p>{"Anal sex- Sexual penetration through the anal opening"}</p>
                  </li>
                  <li>
                    <p>{"Obstructed defecation syndrome - A functional pooping disorder"}</p>
                  </li>
                  <li>
                    <p>{"Infant dyschezia - Difficulty pooping seen among infants."}</p>
                  </li>
                </ul>
              </div>
              <div id="conditions" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Contributing conditions or causes include:</h2>
                <p>
                  History of previous surgery
                </p>
                <ul className="">
                  <li>
                    <p><strong>{"Sexually transmitted infections (STIs)"}</strong>-{"Serious infections that develop after unsafe sex"}</p>
                  </li>
                  <li>
                    <p><strong>{"Inflammatory bowel disease (IBD)"}</strong>{" Chronic inflammation of the tissues in your digestive tract"}</p>
                  </li>
                  <li>
                    <p><strong>{"Anal tumors"}</strong>Abnormal cell multiplication in the anal canal</p>
                  </li>
                  <li>
                    <p><strong>{"Tuberculosis (TB)"}</strong>Bacterial infection that attacks your lungs</p>
                  </li>
                  <li>
                    <p><strong>{"Diaper rash"}</strong> A skin rash that affects a baby’s diaper area</p>
                  </li>
                </ul>
              </div>
              <div id="symptoms" className={styles.Section2Question6} data-aos="fade-up">
                <h2 className="mt-5 mb-4">What Are The Symptoms of Fissure</h2>
                <p>{"Symptoms of an anal fissure depend on the cause and severity of the condition. Some classic signs and symptoms are listed below:"}</p>
                <ul className="">
                  <li>
                    <p>{"A visible tear or slit in the skin around your anus"}</p></li>
                  <li>
                    <p>A small lump, boil, or skin tag is seen near the tear</p></li>
                  <li>
                    <p>{"Severe, throbbing anal pain during bowel movements"}</p></li>
                  <li>
                    <p>{"Persistent pain after a bowel movement that can last up to several hours"}</p></li>
                  <li>
                    <p>{"Streaks of blood in the stools"}</p></li>
                  <li>
                    <p>{"Burning sensation and itching in the anal area"}</p></li>
                </ul>
                <div className='d-flex flex-column align-items-center my-4'>
                  <Image src={AnalFistulaImg2New} alt="Anal fistula" className={`${styles.Section2PilesImage1} mb-3 `} />
                  <p>Fig 2. Anal Fissure</p>
                </div>
              </div>
              <div id="" className={styles.Section2Question7} data-aos="fade-up">
                <h2 className="mt-5">Specific symptoms of fissure in infants and older children :</h2>

                <ul className="mt-3">
                  <li>
                    <p>Babies will cry inconsolably while passing stools</p></li>
                  <li>
                    <p>{"The diaper area appears red and inflamed"}</p></li>
                  <li>
                    <p>{"Prominent tear near the baby’s anal area"}</p></li>
                  <li>
                    <p>{"Blood may be seen in the baby’s diaper after a bowel movement"}</p></li>
                  <li>
                    <p>{"Older children may avoid passing stool due to fear of anal pain"}</p></li>
                </ul>
                <div className='d-flex flex-column align-items-center mt-4'>
                  <Image src={FissureSymtomsimg} alt="FissureSymtomsimg" className={styles.Section2PilesTreatment} />
                  <p>Fig 2. Anal Fissure</p>
                </div>
              </div>
              <div id="diagnosis" className={styles.Section2Question8} data-aos="fade-up">
                <h2 className="mt-5 mb-4">How Are Fissures Diagnosed </h2>
                <p>
                  Dr. Uday Ravi is the best doctor for fissure. He will initially discuss details about your clinical symptoms and record your medical history to rule out:
                </p>
                <ul className="">
                  <li>
                    <p>{"The presence of any medical conditions like diabetes (increased blood sugar levels), hypertension       (high blood pressure), asthma, disorders related to the heart, lungs, or kidneys, or STIs."}</p>
                  </li>
                  <li>
                    <p>History of previous anal injuries and surgeries</p></li>
                  <li>
                    <p>History of traumatic childbirth</p></li>
                </ul>
                <ul className={`${styles.numberlist}`}>
                  <li>
                    <p><strong>Digital Rectal Exam : </strong>Dr. Uday Ravi will further physically examine you to see the fissure.</p>
                    <ul className={`${styles.sublistNumbers}`}>
                      <li>
                        <p>You will be made to lie on your belly or on your side and separate your buttocks gently.</p>
                      </li>
                      <li>
                        <p>Doctor will then insert a lubricated, gloved finger to open your anus, evaluating any tenderness or muscle spasm if present.</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p><strong>{"Anoscope"} : </strong>{"An anoscope (a tubular device) is inserted into the anus to help view the rectum and the anus."}</p>

                  </li>
                  <li>
                    <p><strong>{"Flexible Sigmoidoscopy "} : </strong>{"A thin, flexible tube with a tiny video camera is inserted to view the anal canal and the rectum. "}</p>

                  </li>
                  <li>
                    <p><strong>{"Colonoscopy"} : </strong>{"Here, a colonoscope (a thin, flexible tube) is inserted into the rectum to view the colon. This is usually done if you are over 45 years of age and have a risk of colon cancer."}</p>
                  </li>
                </ul>
              </div>
              <div id="treatment" className={styles.Section2Question8} data-aos="fade-up">
                <h2 className="mt-5">How Are Fissures Treated? </h2>
                <p>
                  The treatment of a fissure depends on the duration and the severity of the condition. Conservative methods are the first line of treatment to provide relief. However, medications and surgery are recommended if the fissure fails to respond to these methods. Treatment methods are the same for infants, older children, and adults.
                </p>
                <ul className={`${styles.numberlist}`}>
                  <li>
                    <p><strong>Conservative Methods : </strong></p>
                    <p>{"Fissures may heal within a few weeks through home treatments that include:"}</p>
                    <ul className="">
                      <li>
                        <p>{"Consuming a high-fiber diet consisting of fresh fruits (bananas, berries, papaya, apples), vegetables (green leafy vegetablesspinach), and whole grains (millet, barley, rice) to promote easy bowel movements."}</p>
                      </li>
                      <li>
                        <p>{"Hydrate yourself with at least 2 liters of fluid daily to soften your stool."}</p>
                      </li>
                      <li>
                        <p>{"Sitz bath- Soak in a plain warm water bath for 15 to 20 minutes daily, especially after a bowel movement."}</p>
                      </li>
                      <li>
                        <p>{"Use petroleum jelly around your anal region that promotes healing by locking moisture and preventing dryness."}</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p><strong>Medication : </strong></p>
                    <ul className={`${styles.sublistNumbers}`}>
                      <li>
                        <p>{"Nitroglycerin ointment :  Acts as a vasodilator by expanding the blood vessels. This helps restore the blood flow and relaxes the anal sphincter muscles."}</p>
                      </li>
                      <li>
                        <p>Calcium channel blockers : These are alternative medications to relax the blood vessels and your anal muscles.</p>
                      </li>
                      <li>
                        <p>Botox : Botox injections are given to your anal sphincter muscles to relax them. It is an excellent muscle relaxant. The effects last for 3 to 4 months.</p>
                      </li>
                      <li>
                        <p>Bulk laxatives : These medications soften your stool to help relieve the pressure on the anal muscles during strained bowel movements.</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p><strong>{"Surgical Treatment : "}</strong>{"If your fissures do not heal through medications or recur even after healing, surgery is the best option for you."}</p>
                    <ul className={`${styles.sublistNumbers}`}>
                      <li>
                        <p><strong>Lords Dilatation : </strong>{"This is an old method that relaxes the anal sphincter. This is a manual dilatation of the anal sphincter under general anesthesia (a numbing agent). Forceful dilatation may lead to multiple abrasions; hence, it is no longer recommended."}</p>
                      </li>
                      <li>
                        <p><strong>{"Lateral Internal Sphincterotomy (LIS) : "}</strong></p>
                        <ul>
                          <li>
                            <p>{"This minor surgical procedure reduces pressure inside the anus and promotes blood circulation to heal the tissues. "}</p>
                          </li>
                          <li>
                            <p>{"It is a procedure that will take around 20 to 30 minutes. This will be done under local or general anesthesia, depending on your pain threshold (ability to tolerate pain)."}</p>
                          </li>
                          <li>
                            <p>{"Dr. Uday Ravi will insert a scope (a thin tube with a light source and a video camera) into your anus. The camera images help the surgeon view the anal canal better."}</p>
                          </li>
                          <li>
                            <p>{"Doctor will guide small medical tools at the end of the scope to cut the internal canal sphincter."}</p>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p><strong>{"Laser Fissure Surgery : "}</strong></p>
                        <ul>
                          <li>
                            <p>{"Dr. Uday Ravi does laser treatment for fissure. It is a bloodless procedure that uses a beam of laser targeted at the anal sphincter muscles."}</p>
                          </li>
                          <li>
                            <p>{"The damaged tissues are dissolved through the heat energy generated by the laser beam."}</p>
                          </li>
                          <li>
                            <p>{"The procedure takes around 15 to 20 minutes."}</p>
                          </li>
                        </ul>
                        <p>{"Complications Associated With Fissures"}</p>
                        <p>{"Many fissures can heal by themselves in a few weeks, but if they do not, many complications can develop."}</p>
                      </li>
                      <li>
                        <p><strong>Fecal impaction : </strong>{"This results from constant constipation that causes the hard stools to get stuck inside your rectum."}</p>
                      </li>
                      <li>
                        <p><strong>Anal fistula : </strong>{"TA small, abnormal tunnel between the infected anal canal and the skin outside the anus."}</p>
                      </li>
                      <li>
                        <p><strong>Anal stenosis : </strong>{"Narrowing of the anal canal that makes it harder to pass stools. "}</p>
                      </li>
                      <li>
                        <p><strong>Failure healing : </strong>{"An anal canal that does not heal after 8 weeks is considered a chronic anal fissure."}</p>
                      </li>
                      <li>
                        <p><strong>Recurrence : </strong>{"This leads to repeated formation of anal fissures since you become prone to it."}</p>
                      </li>
                      <li>
                        <p><strong>A tear that extends to the surrounding structures : </strong>{"Anal tear, if left untreated, can extend to other structures, especially the internal anal sphincter muscles."}</p>
                      </li>

                    </ul>
                  </li>
                </ul>
              </div>
              <div id="prevention" className={styles.Section2Question7} data-aos="fade-up">
                <h2 className="mt-5">How To Prevent Fissures? </h2>
                <p>{"You can effectively reduce your risk of developing a fissure by following certain preventive measures :"}</p>
                <ul className="">
                  <li>
                    <p>{"Keeping your anal area clean and dry"}</p></li>
                  <li>
                    <p>{"Consuming a fibrous diet to promote easy bowel movements"}</p></li>
                  <li>
                    <p>{"Treating diarrhea immediately"}</p></li>
                  <li>
                    <p>{"Drinking plenty of water and exercising regularly to prevent constipation"}</p></li>
                  <li>
                    <p>{"Changing the infant’s diapers frequently, especially after a bowel movement"}</p></li>
                </ul>
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