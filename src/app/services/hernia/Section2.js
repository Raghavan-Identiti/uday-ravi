
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import HerniaImg1New from '../../assets/HerniaImg1New.png';
import HerniaImg2New from '../../assets/HerniaImg2New.jpg';
import HerniaImg3New from '../../assets/HerniaImg3New.png';

import { FaChevronDown } from 'react-icons/fa'; // Custom icon
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
    { id: 'hernia', label: 'Hernia',type:"heading" },
    { id: 'types', label: 'Types',type:"subheading" },
    { id: 'symptoms', label: 'Symptoms' ,type:"subheading"},
    { id: 'complications', label: 'Complications' ,type:"subheading"},
    { id: 'diagnosis', label: 'Diagnosis',type:"subheading" },
    { id: 'treatment', label: 'Treatment ',type:"subheading" },
    { id: 'benefits', label: 'Benefits ' },
    { id: 'untreated', label: 'Untreated Hernia' ,type:"subheading"},
  ];

  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Hernia";
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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Hernia Treatment in Bangalore</h1>
              <div id="gynecomastia" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >What is Hernia?</h2>
                <p>When an organ or a portion of tissue protrudes through a weakened section of the muscular structure, it gives rise to a noticeable swelling in the abdominal wall, medically referred to as a hernia. Hernias can manifest in various anatomical regions, encompassing the upper abdominal region, the navel area, and the groin.</p>
                <div className={` ${styles.Section2PilesImgdiv}`}>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={HerniaImg1New} alt="HerniaImg1" className={styles.Section2PilesImage1New} />
                    <p>Fig 1. Types of hernias</p>
                  </div>
                </div>
              </div>
              <div id="types" className={styles.Section2Question7} data-aos="fade-up">
                <h2 className="mt-5 mb-3">What are the types of Hernia?</h2>
                <ul>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Inguinal Hernia: </strong><p>In the realm of hernias, inguinal hernias stand out as the most common variety. These hernias manifest in the groin area, stemming from a weakening of the abdominal wall near the inguinal canal. This anatomical passageway serves a critical role, housing the round ligament in women and the spermatic cord in men.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Femoral hernia: </strong><p>A femoral hernia typically occurs in the upper thigh region. This type of hernia is characterized by a weakening of the abdominal wall near the femoral vein.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Umbilical hernia: </strong><p>Umbilical hernias, a distinct form of hernia, manifest in the vicinity of the belly button. They stem from a weakening of the abdominal wall near the navel.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Hiatal hernia: </strong><p>A hiatal hernia typically occurs in the upper abdomen. It’s closely linked to the diaphragm, a muscle that acts as the boundary between the chest and abdomen. This unique anatomical connection is the key factor contributing to the development of this condition.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Incisional hernia: </strong><p>An incisional hernia is a unique type of hernia which happens at previous sites of surgery. They are most commonly found in the abdomen as a lump at the site. They can be tender and painful. After undergoing a surgery of the abdomen, sometimes the cut muscles do not heal well together and have an area of weakness at the site of the incision (the cut). This area of weakness can now be pushed into by the organs and tissues of the abdomen, even causing an outward bulge on the outside of the abdominal wall. In mild cases, it is only a thin tissue layer pushed out into the weak space but it is not uncommon for organs to be pushed out as well.</p>
                  </li>
                </ul>
                <div className='d-flex flex-column align-items-center'>
                    <Image src={HerniaImg2New} alt="Hernia" className={styles.Section2PilesImage2New} />
                    <p>Fig 2. Types of Abdominal Hernias</p>
                </div>
                <strong >Am I at a Risk of Developing a Hernia?</strong>
                <p>
                  You have a higher risk of developing it:
                </p>
                <ul>
                  <li>If you are a smoker</li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Age: </strong><p>Age is a significant factor in hernia susceptibility, with older individuals exhibiting a higher likelihood of developing this condition.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Family history: </strong><p>You are more likely to get a hernia if your family has a history of hernias.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Obesity: </strong><p>A hernia is more likely if you are overweight or obese.</p>
                  </li>
                  <li>
                    <p>Engaging in strenuous activities can put excessive strain on your abdominal wall, increasing the risk of hernia development.</p>
                  </li>
                  <li>
                    <p>Chronic coughing or continuous strain on your abdominal wall can significantly increase the risk of hernia development. Instances of persistent coughing or straining often include conditions such as constipation.</p>
                  </li>
                  <li>
                    <p>The job involves lifting heavyweights</p>
                  </li>
                  <li>
                    <p>If you have any collagen disorders</p>
                  </li>
                  <li>
                    <p>Suffering from cystic fibrosis or chronic lung infections or chronic obstructive pulmonary diseases.</p>
                  </li>
                  <li>
                    <p>Undergone any previous abdominal surgeries or cesarean deliveries</p>
                  </li>
                  <li>
                    <p>Incidence is more common among males and pregnant women.</p>
                  </li>
                </ul>
              </div>
              <div id="symptoms" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5 mb-3">Signs and Symptoms of Hernia:</h2>
                <ul className="">
                  <li>
                    <p>{"Lump in the groin area when standing/straining & disappears when reclining"}</p>
                  </li>
                  <li>
                    <p>{"Pain at the site of the lump, especially when lifting a heavy object"}</p>
                  </li>
                  <li>
                    <p>{"Swelling of the scrotum"}</p>
                  </li>
                  <li>
                    <p>{"Excruciating abdominal pain (if you have strangulation)"}</p>
                  </li>
                  <li>
                    <p>{"Nausea, vomiting, loss of appetite & pain (if intestinal obstruction occurs)"}</p>
                  </li>
                </ul>
                
              </div>
              <div id="complications" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">What are the Complications Associated With an Untreated Hernia?</h2>
                <p>
                  A large unrepaired hernia may disrupt your normal chores and dayto-day activities. Sometimes the hernia may become incarcerated or trapped outside the abdominal wall. Additionally, it might become tightly trapped or strangulated that it no longer receives any blood supply causing the death of the tissues trapped outside. Excruciating pain, Fever, and Inflammation of the region around are all symptoms of strangulated hernia. All these complications are often avoided by timely surgical intervention.<strong>The only treatment for a hernia is surgery</strong>
                </p>
              </div>
              <div id="diagnosis" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">How is Hernia Diagnosed ?</h2>
                <p>
                  {"Dr. Uday Ravi diagnoses hernia of the patient by following different methods:"}
                </p>
                <ul >
                  <li>
                    <strong style={{color:"#5c47dc"}} >{"Physical Examination"}</strong>
                    <p> Dr. Uday Ravi one of the best hernia surgeon in Bengaluru initiates the diagnostic procedure with a comprehensive physical evaluation of the patient. During this assessment, he carefully inspects for discernible indications of a hernia, including any noticeable protrusions or swelling in regions like the abdomen, groin, or other relevant areas. This meticulous examination is the initial step in determining the presence of a hernia.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>{"Patient Medical History:"}</strong>
                    <p>Gathering the patient’s medical history is of atmost importance in the diagnostic process. Dr. Uday Ravi hernia specialist in Bengaluru onducts a thorough inquiry into the patient’s symptoms, the beginning of the hernia, and any accompanying pain or discomfort related to the hernia. This critical step helps the doctor to accurately diagnose and tailor treatment for hernias.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>{"Imaging tests"}</strong>
                    <p>In certain instances, diagnostic imaging procedures become essential for obtaining a clearer visualization of the hernia. These diagnostic examinations include:</p>
                    <ul>
                      <li>
                        <strong style={{color:"#5c47dc"}}>Ultrasound :</strong>
                        <p>High-frequency sound waves are made to generate precise images of the hernia, significantly enhancing diagnostic accuracy.</p>
                      </li>
                      <li>
                        <strong style={{color:"#5c47dc"}}>{"CT (Computed Tomography) Scan"} :</strong>
                        <p>{"Computed Tomography (CT) scans offer in-depth cross-sectional imagery, making them invaluable for diagnosing intricate or deep-seated hernias"}</p>
                      </li>
                      <li>
                        <strong style={{color:"#5c47dc"}}>{"(Magnetic Resonance Imaging) MRI:"} :</strong>
                        <p>{"Magnetic Resonance Imaging (MRI) proves invaluable when seeking further precision and clarity during the diagnostic process."}</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div id="treatment" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Best treatment for Hernia in Bengaluru:</h2>
                <p>
                  When considering hernia treatment, it’s crucial to recognize that surgery is frequently the most efficacious remedy. Dr. Uday Ravi, a distinguished surgeon located in Bengaluru, excels in delivering specialized hernia care. Dr. Uday customizes his approach to treatment based on the specific type, location, and size of the hernia.
                </p>
                <ul className="">
                  <li>
                    <strong style={{color:"#5c47dc"}}>Open Hernia Repair:</strong>
                    <p>
                      This procedure involves carefully placed incisions precisely at the hernia site. Subsequently, the protruding tissue is gently repositioned to its original location, and the abdominal lining is frequently reinforced employing either mesh or sutures.
                    </p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Laparoscopic Surgery for Hernia :</strong>
                    <p>
                      In the realm of minimally invasive hernia surgery, a key technique involves the precise insertion of a slender tube equipped with a camera, known as a laparoscope, along with specialized surgical instruments. These instruments are introduced through small incisions. Dr. Uday Ravi, a skilled laparoscopic surgeon who provides the best hernia treatment in Bengaluru, utilizes this advanced technology to expertly address hernias, all while closely monitoring the procedure on a high-definition screen for optimal precision and effectiveness.
                    </p>
                  </li>
                   <li>
                    <strong style={{color:"#5c47dc"}}>Robotic Surgery :</strong>
                    <p>
                      Robotic hernia repair stands at the forefront of hernia treatment. Dr. Uday Ravi harnessing the power of advanced robotic technology provides precise and minimally invasive solutions.
                    </p>
                  </li>
                  <li>
                    <p>This innovative approach has gained significant traction due to its numerous advantages when compared to conventional techniques.</p>
                  </li>
                </ul>
                <div className='d-flex flex-column align-items-center'>
                    <Image src={HerniaImg3New} alt="Hernia" className={styles.Section2PilesImage3New} />
                    <p>Fig 2. Umbilical Hernia</p>
                </div>
              </div>
              <div id="benefits" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Benefits of Robotic-Assisted Hernia Surgery:</h2>
                <p>
                  Minimally invasive robotic-assisted hernia surgery employs cutting edge robotic technology to perform surgical procedures with precision and efficiency. When compared to traditional open surgery, this approach offers numerous advantages, enhancing patient outcomes in several ways are as follows:
                </p>
                <ul className="">
                  <li>
                    <strong style={{color:"#5c47dc"}}>Less discomfort and scars due to smaller incisions :</strong>
                    <p>
                      Robotic assisted surgery is characterized by the use of smaller incisions compared to traditional open surgery. This minimally invasive approach offers numerous benefits for patients and is gaining popularity in the medical field.
                    </p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Faster recovery :</strong>
                    <p>
                      In comparison to individuals undergoing conventional open surgery, those opting for robotic-assisted hernia surgery frequently experience a swifter recovery process.
                    </p>
                  </li>
                   <li>
                    <strong style={{color:"#5c47dc"}}>Less chance of complications:</strong>
                    <p>
                      When comparing robotic-aided surgery to traditional open surgery, it’s important to note that the former significantly reduces the risk of complications. 
                    </p>
                  </li>
                  <li>
                    <p>Dr. Uday Ravi gives the best treatment for hernia in Bengaluru. He does the best surgery for Inguinal hernia. He also provides umbilical hernia treatment, incisional hernia treatment and hiatus hernia treatment.</p>
                  </li>
                </ul>
              </div>
              <div id="untreated" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">What Happens if hernia is untreated:</h2>
                <p>
                  Untreated inguinal or femoral hernias can give rise to two critical complications:
                </p>
                <ul className="">
                  <li>
                    <strong style={{color:"#5c47dc"}}>{"Obstruction (incarceration): "}</strong>
                    <p>
                      In this scenario, a portion of the intestine becomes trapped within the inguinal canal. Patients experiencing this complication may endure symptoms such as severe abdominal pain, nausea, vomiting, and the presence of a painful lump in the groin. Immediate medical evaluation and hernia surgery are imperative to alleviate these distressing symptoms.
                    </p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Strangulation :</strong>
                    <p>
                      When a segment of the intestine becomes entrapped within the hernia, its blood supply gets compromised. This situation is extremely perilous, as it can lead to tissue death if left untreated. Urgent hernia surgery is the only solution to prevent the progression of tissue necrosis and mitigate the associated risks.
                    </p>
                  </li>
                </ul>
                <strong>Book an appointment with our Consultant Laparoscopic and Robotic surgeon Dr. Uday Ravi if you are looking for hernia surgery in Bengaluru</strong>
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