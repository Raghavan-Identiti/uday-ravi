
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import reconstructiveSurgeryImg1 from '../../assets/reconstructiveSurgeryImg1.png';
import reconstructiveSurgeryImg2 from '../../assets/reconstructiveSurgeryImg2.png';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Custom icon
import FaShieldAlt from '../../assets/Group158.png'; // Use your actual SVG or PNG
import Section3 from "./Section3";
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
    { id: 'gynecomastia', label: 'Gynecomastia',type:"heading" },
    { id: 'types', label: 'Types',type:"subheading" },
    { id: 'gynecomastia-surgery', label: 'Gynaecomastia Surgery',type:"subheading" },
    { id: 'liposuction', label: 'Liposuction',type:"subheading" },
    { id: 'techniques', label: 'Techniques' ,type:"subheading"},
    { id: 'procedure', label: 'Procedure ',type:"subheading" },
  ];

  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Plastic & Reconstructive Surgery";
};

  return (
    <section className={styles.Section2}>
      <div className="container">
        {/* Header */}
        <div className="row" data-aos="fade-up" >
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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Reconstructive surgery Treatment in Bangalore</h1>
              <div id="gynecomastia" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >Gynecomastia</h2>
                <p>In<strong> {"Gynecomastia"}</strong>, a man experiences the growth of abnormally large breasts due to the overgrowth of breast tissue. It can be caused by many reasons, be it genetic or hormonal imbalances. It mainly depends on the amount of estrogen, as it leads to the development of breasts in its large amount. Increased consumption of alcohol or steroids is also another cause of breast development. Dr. Uday Ravi is the Best Surgeon for <strong>{"Gynecomastia (Male Breast) Surgery in Bangalore."}</strong></p>
                <p>It is experienced in pubescent boys or older men. In older men when androgen generation is reduced, it leads them to <strong>Breast Development</strong>. In many cases, patients who are treated for gynecomastia, cancer breast development problem is found in them. Being overweight is also one of the reasons for breast development. To overcome this problem <strong>{"Male Breast (Gynecomastia) Reduction in Bangalore"} </strong>is performed and the time taken in treatment is around 2 to 3 hours. A patient with good mental health and who need treatment for physical transformation is an ideal candidate for this treatment.</p>
                <div className={` ${styles.Section2PilesImgdiv}`}>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={reconstructiveSurgeryImg1} alt="reconstructiveSurgeryImg1" className={styles.Section2PilesImage1} />
                    <p>Fig 1. Gynaecomastia</p>
                  </div>
                </div>
              </div>
              <div id="types" className={styles.Section2Question7} data-aos="fade-up">
                <h2 className="mt-5">Types of Gynaecomastia</h2>
                <strong style={{color:"#5c47dc"}}>Unilateral Gynaecomastia</strong>
                <p>
                  Gynecomastia can be a debilitating illness for males. Although gynecomastia is not medically hazardous, it can have a terrible emotional impact on a man&apos;s life. Many men with gynecomastia are anxious, depressed, and embarrassed about their enlarged breasts, and they may avoid certain social activities such as swimming or going to the beach. While the vast majority of gynecomastia patients have bilaterally enlarged male breasts, which means the disorder is present on both sides, a small minority of men experience unilateral gynecomastia. One-sided gynecomastia may appear to be a &quot;better&quot; option, but in reality, the asymmetry is typically more difficult to deal with than having gynecomastia on both sides.
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
              <div id="gynecomastia-surgery" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5 text-center">Gynaecomastia Surgery in Bangalore</h2>
                <p>Surgeon recommend cutting down on alcohol or cigarettes at least 2 weeks before the procedure. The patient can resume his physical movements after a few days. The exercise is continued a few days after the procedure and gradually intensifies over time. The patient achieves a better psychological condition and a better diagnostic benefit by undergoing surgery to reduce the size of the Male Breast (Gynecomastia) in Bangalore.</p>
                <strong>Methods used for treating it are as follows:</strong>
                <ul className="">
                  <li>
                    <strong>{"Surgical Resection (Subcutaneous Mastectomy) : "}</strong>
                    <p>{"Minimally invasive surgery to reduce the size of the male breast (gynecomastia)"}</p>
                  </li>
                  <li>
                    <strong>{"Liposuction Assisted Mastectomy : "}</strong>
                    <p>{"In this methods, different techniques are used according to the patients state and expected results. It is always good to clear all questions about Male Breast Surgery (Gynaecomastia) and expectations from Gynecomastia doctor in Bangalore at Dr. Uday Ravi. That gives a clear way to both patient and surgeon."}</p>
                  </li>
                </ul>
                
              </div>
              <div id="liposuction" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">Liposuction</h2>
                <p>
                  Liposuction is the procedure of removing body fat surgically from different parts of the body that has a lot of fat deposits under the skin and in the muscle tissue. Firstly, in this, the fat is turned into a liquid with the help of advanced technologies, known as Lipolysis and then removed with the help of a cannula and suction device. Reduce your unwanted fat with <strong> liposuction surgery in Bangalore.</strong>
                </p>
                <div className={` ${styles.Section2PilesImgdiv}`}>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={reconstructiveSurgeryImg2} alt="reconstructiveSurgeryImg1" className={styles.Section2PilesImage1} />
                    <p>Fig 2. Liposuction</p>
                  </div>
                </div>
                <p>Most common body parts where liposuction is carried out:</p>
                <ul >
                  <li>
                    <p>Abdomen</p>
                  </li>
                  <li>
                    <p>Hips</p>
                  </li>
                  <li>
                    <p>Outer thighs</p>
                  </li>
                  <li>
                    <p>Flanks</p>
                  </li>
                  <li>
                    <p>Back</p>
                  </li>
                  <li>
                    <p>Inner thighs</p>
                  </li>
                  <li>
                    <p>Inner knees</p>
                  </li>
                  <li>
                    <p>Upper arms</p>
                  </li>
                  <li>
                    <p>Chin, neck</p>
                  </li>
                  <li>
                    <p>Male Breast Tissue</p>
                  </li>
                  <li>
                    <p>Female genital area</p>
                  </li>
                </ul>
                <p>
                  <strong>Liposuction in Bangalore: </strong>
                  The word Liposuction can be divided into two parts, lipo i.e.fatand suction which means fat suction. Fat is simply suctioned out from the areas of the body under the influence of general anaesthesia. A small puncture is made and a hollow suction tube is inserted into the fatty body part and the other end of the cannula is connected to a high-performance suction pump that draws excess fat into a collection bottle.</p>
              </div>
              <div id="techniques" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">Techniques of Liposuction Surgery</h2>
                <p>
                  {"For liposuction, there are a number of crucial modifications available according to standard suction-assisted liposuction, such as UAL (Ultrasound Assisted Liposuction), PAL (Power Assisted Liposuction), VASER, and Laser Assisted Liposuction."}
                </p>
                <ul className={`${styles.numberlist}`}>
                  <li>
                    <strong style={{color:"#5c47dc"}} >{"UAL (Ultrasound Assisted Liposuction)"}</strong>
                    <p>In this method, the fat is first liquefied before it is removed. Therefore, the fat cells are targeted with ultrasonic waves. While sound energy waves are used to break down the walls of fat cells. And then, the liquefied fat is sucked out.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>{"PAL (Power Assisted Liposuction)"}</strong>
                    <p>This technique uses a special cannula to create small, rapid vibrations that help break down fat cells and remove fat from your body. Also, this procedure allows the surgeon to control the liposuction process and perform fat removal more precisely.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>{"VASER (Vibrant Amplification Of Sound Energy At Resonance)"}</strong>
                    <p>VASER Liposuction is the most advanced technique. It helps to craft and reshape the body according to the person dreams. Meanwhile, the energy from the ultrasound is used to melt the fat cells and the fat is removed through a thin cannula tube.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>{"Laser Liposuction"}</strong>
                    <p>In this technique, a combination of laser disruption of the adipocytes is performed and then extracted with the help of a cannula. Then the tumescent fluid is injected into the target area.</p>
                  </li>
                </ul>
              </div>
              <div id="procedure" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Procedure of the Liposuction Surgery</h2>
                <p>
                  The Liposuction Procedure Includes The Following Steps:
                </p>
                <ul className="">
                  <li>
                    <strong>Step 1 -<span style={{color:"#5c47dc"}}> Anesthesia :</span></strong> During the operation, medications will be given for your comfort. Local anesthetic, intravenous sedation, and general anesthesia are the options. Dr. Uday Ravi will advise you on the best decision.
                  </li>
                   <li>
                    <strong>Step 2 -<span style={{color:"#5c47dc"}}> The Incision :</span></strong> Liposuction is performed through small, inconspicuous incisions. A diluted local anesthetic is administered for bleeding and trauma reduction first. Then the incisions introduce a thin hollow tube, or cannula to release the extra fat with controlled movements back and forth. The fat is subsequently sucked out by a vacuum or syringe attached to the cannula. The fat has been dissolved.
                  </li>
                   <li>
                    <strong>Step 3 -<span style={{color:"#5c47dc"}}> See The Outcomes :</span></strong> Once the swelling and fluid retention has generally taken place since liposuction treatment, your better body contour will become noticeable.
                  </li>
                </ul>
                <p>
                  If you are looking for the best liposuction surgeon in Bangalore, contact Dr. Uday Ravi
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