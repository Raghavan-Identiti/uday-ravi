
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import fibroadenomaImg2New from '../../assets/fibroadenomaImg2New.jpg';
import fibroadenomaImg3New from '../../assets/fibroadenomaImg3New.jpg';
import fibroadenomaImg4New from '../../assets/fibroadenomaImg4New.jpg';
import fibroadenomaImg5New from '../../assets/fibroadenomaImg5New.jpg';
import fibroadenomaImg6New from '../../assets/fibroadenomaImg6New.jpg';
import fibroadenomaImg7New from '../../assets/fibroadenomaImg7New.jpg';
import fibroadenomaImg8New from '../../assets/fibroadenomaImg8New.jpg';
import fibroadenomaImg9New from '../../assets/fibroadenomaImg9New.jpg';
import AOS from 'aos';             // Import AOS
import 'aos/dist/aos.css';        // Import AOS styles
import { FaChevronDown } from 'react-icons/fa'; // Custom icon
import FaShieldAlt from '../../assets/Group158.png'; // Use your actual SVG or PNG
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
    { id: 'fibroadenoma', label: 'Fibroadenoma',type:"heading" },
    { id: 'symptoms', label: 'Symptoms' ,type:"subheading"},
    { id: 'diagnosis', label: 'Diagnosis',type:"subheading" },
    { id: 'treatment', label: 'Treatment',type:"subheading" },
    { id: 'fibroadenoma-surger', label: 'Fibroadenoma Surger',type:"subheading" },
    { id: 'what-is-breast-Cancer', label: 'Breast Cancer',type:"heading" },
    { id: 'symptoms-of-breast-cancer', label: 'Symptoms of Breast Cancer',type:"subheading" },
    { id: 'breast-cancer-diagnosis', label: 'Breast Cancer Diagnosis',type:"subheading" },
    { id: 'treatment-breast-cancer', label: 'Treatment For Breast Cancer',type:"subheading" },
    { id: 'risk-reduction', label: 'Risk Reduction',type:"subheading" },
  ];

  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Fibroadenoma";
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
            <div className={styles.Section2content} >
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Fibroadenoma and Breast Cancer Treatment in Bangalore</h1>
              <div id="fibroadenoma" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >What is fibroadenoma?</h2>
                <p>{"A fibroadenoma of breast (a muscle lump) is benign, unlike breast cancer which grows larger over time and invasive which can spread to other body parts, fibroadenoma remains in the breast tissue and doesn't spread."}</p>
                <p>{"Although the majority of patients have a single fibroadenoma, it might be possible that multiple lumps can also occur simultaneously."}</p>
                <p>{"They are pretty small and mostly 1 or 2 centimetres. It's rare that the lumps get larger than 5 centimetres."}</p>
                <p>{"Usually, a fibroadenoma doesn't cause pain. Generally it feels like a marble that moves around beneath our breast's skin. It is described as a firm, rubbery or smooth."}</p>
                <p>It is one of the most common non-cancerous tumours, basically they are lumps that generally happen in the young women of having age in between 15 to 25 years. Mostly they shrink by the time and disappear but if they won&apos;t <strong>Dr. Uday Ravi can take help through fibroadenoma treatment in Bangalore.</strong></p>
                <div className='d-flex flex-column align-items-center'>
                  <div className='d-flex mb-5'>
                  <Image src={fibroadenomaImg2New} alt="fibroadenoma" className={styles.Section2PilesImage1New} />
                  <Image src={fibroadenomaImg3New} alt="fibroadenoma" className={styles.Section2PilesImage1New} />
                  </div>
                  <p>Fig 1. Breast disease</p>
                </div>
              </div>
              <div id="symptoms" className={styles.Section2Question7} data-aos="fade-up">
                <h2>What are the fibroadenoma symptoms?</h2>
                <p>Symptoms of fibroadenoma of the breast are</p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>
                    Firm
                  </li>
                  <li>
                    Rubbery
                  </li>
                  <li>
                    Painless lump
                  </li>
                  <li>
                    Easily moveable under the skin
                  </li>
                </ul>
                <p>
                  If you have any of these symptoms, get the immediate help from the Fibroadenoma Specialist in Bangalore, Dr. day Ravi.
                </p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={fibroadenomaImg4New} alt="fibroadenomaImg1" className={styles.Section2PilesImage1New} />
                  <p>Fig 2. An Abscess in the breast</p>
                </div>
                <p>
                  All fibroadenomas doesn&apos;t requires surgical treatments but there might be certain indications when surgery should be done and they are as follows:
                </p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>
                    Abnormal biopsy
                  </li>
                  <li>
                    Concern about cancer
                  </li>
                  <li>
                    Family history of breast cancer
                  </li>
                  <li>
                    Pain
                  </li>
                  <li>
                    Sudden increase in size of the lump
                  </li>
                </ul>
                <p>To have the best consultation, get the <strong>fibroadenoma treatment in Bangalore with Dr. Uday Ravi.</strong></p>
              </div>
              <div id="diagnosis" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5">Diagnosis</h2>
                <p>Doctor will first make a basic physical exam. He will check both your breasts for any abnormalities or tumours. Depending on factors such as your age,doctor may prescribe the following tests:
                </p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>
                    {"Breast ultrasound"}
                  </li>
                  <li>
                    {"Diagnostic mammography"}
                  </li>
                  <li>
                    {"Fine-needle aspiration"}
                  </li>
                  <li>
                    {"Core needle biopsy"}
                  </li>
                </ul>
              </div>
              <div id="treatment" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">Fibroadenoma Treatment</h2>
                <p>
                  In most cases, fibroadenomas are harmless and require no treatment at all, however, some women prefer to have them surgically removed.
                </p>
                
              </div>
              <div id="fibroadenoma-surger" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">Fibroadenoma surger includes:</h2>
                <p><strong>Cryoablation - </strong> freezing of the breast tissue by using gas</p>
                <p><strong> Lumpectomy or excisional biopsy - </strong> removal of the breast tissue to check for cancer</p>
                <p>
                  If you are searching for the best doctor to get <strong>fibroadenoma treatment in Bangalore,</strong> then Dr. Uday Ravi is one of the leading and reliable doctor for all your medical requirements.
                </p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={fibroadenomaImg5New} alt="fibroadenoma" className={styles.Section2PilesImage1New} />
                  <p>Fig 3. Fibrocystic Breast Diseases</p>
                </div>
              </div>
              <div id="what-is-breast-Cancer" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5" style={{color:"#5a4ae3",fontSize:"30px"}}>Breast Cancer</h2>
                <h2 className="">What is Breast Cancer?</h2>
                <p>
                  {"Breast cancer is a disease in which cells in the breast grow out of control. Breast cancer cells usually form a tumor that can often be seen on an x-ray or felt as a lump. Breast cancer is the second most common cancer in women after skin cancer. Rarely, it can also affect men."}
                </p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={fibroadenomaImg6New} alt="fibroadenoma" className={styles.Section2PilesImage1New} />
                  <p>Fig 4. Mastitis</p>
                </div>
              </div>
              <div id="symptoms-of-breast-cancer" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">What are the symptoms of Breast cancer?</h2>
                <p>
                  Breast cancer symptoms vary from person to person and there is no exact definition of what a lump or mass feels like. The best thing to do is to be familiar with your breasts so you know how “normal” feels and looks. If you notice any changes, you must visit the best breast cancer specialist in Bangalore for more information. Symptoms of breast cancer include:
                </p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>
                    Lump or mass in the breast
                  </li>
                  <li>
                    Lump or mass in the armpit
                  </li>
                  <li>
                    Breast skin changes, including skin redness and thickening of the breast skin, resulting in an orange-peel texture
                  </li>
                  <li>
                    Dimpling or puckering on the breast
                  </li>
                  <li>
                    Discharge from the nipple
                  </li>
                  <li>
                    Scaliness on the nipple, which sometimes extends to the areola
                  </li>
                  <li>
                    Nipple changes, including the nipple turning inward, pulling to one side, or changing direction
                  </li>
                  <li>
                    An ulcer on the breast or nipple, sometimes extending to the areola
                  </li>
                  <li>
                    Swelling of the breast
                  </li>
                </ul>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={fibroadenomaImg7New} alt="fibroadenoma" className={styles.Section2PilesImage1New} />
                  <p>Fig 5. Symptoms of Breast Cancer</p>
                </div>
                <p>
                  {"Breast cancer is categorized into different stages depending on how far the cancer has spread. Dr. Uday Ravi utilizes the widely recognized TNM staging system, which assesses the size and extent of the primary tumor (T), whether cancer has reached nearby lymph nodes (N), and if it has metastasized to other parts of the body (M)."}
                </p>
                <ul className='d-flex flex-column gap-3'>
                  <li>
                    <strong style={{color:"#5c47dc"}}>
                      Stage 0 : 
                    </strong>
                    {" Ductal Carcinoma In Situ (DCIS)"}
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>
                      Stage I :
                    </strong>
                    {" The tumor is small and remains confined to the breast without spreading to the lymph nodes or other parts of the body."}
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>
                      Stage II :
                    </strong>
                    {" Divided into IIA and IIB:"}
                    <ul className={`${styles.numberlist} d-flex flex-column gap-3`}>
                      <li>
                        <strong>Stage IIA : </strong>
                        {" The tumor is small but has spread to the axillary lymph nodes."}
                      </li>
                      <li>
                        <strong>Stage IIB : </strong>
                        {" The tumor is larger, and it may or may not have spread to the lymph nodes."}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>
                      Stage III :
                    </strong>
                    {" Divided into IIIA, IIIB, and IIIC : "}
                    <ul className={`${styles.numberlist} d-flex flex-column gap-3`}>
                      <li>
                        <strong>Stage IIIA : </strong>
                        {" The tumor is larger and has spread to nearby lymph nodes, which may be clumped together"}
                      </li>
                      <li>
                        <strong>Stage IIIB : </strong>
                        {" The tumor may have spread to the chest wall or skin, possibly causing swelling or ulcers in the breast."}
                      </li>
                      <li>
                        <strong>Stage IIIC : </strong>
                        {" The cancer has spread to lymph nodes above or below the collarbone or to lymph nodes on the opposite side of the chest."}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>
                      Stage IV :
                    </strong>
                    {" Metastatic Breast Cancer"}
                  </li>
                </ul>
                <p>The cancer has spread to distant parts of the body, such as the bones, liver, or lungs.</p>
                <p>The stage of breast cancer is crucial in determining treatment options and the overall prognosis. Dr. Uday Ravi says the importance of early detection and regular screening to identify breast cancer in its earliest, most treatable stages.</p>
              </div>
              <div id="breast-cancer-diagnosis" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">How Breast cancer is diagnosed?</h2>
                <p>
                  Doctor will do physical examination of the breast to look for any skin changes over the breast/nipple or if there is any discharge. Doctor will palpate to look for any lump in the breast or in the axilla. Doctor will then advise few tests depending on the patients symptoms and physical examination findings.
                </p>
                <div className='d-flex flex-column align-items-center'>
                  <div className='d-flex'>
                  <Image src={fibroadenomaImg8New} alt="fibroadenoma" className={styles.Section2PilesImage1New} />
                  <Image src={fibroadenomaImg9New} alt="fibroadenoma" className={styles.Section2PilesImage1New} />
                  </div>
                  <p>Fig 6. Breast Cancer Diagnosed</p>
                </div>
                <p>
                  <strong>Imaging tests : </strong>This procedure will use these to learn more about your breast.
                </p>
                <ul className={styles.sublistAlphabets}>
                  <li>
                    <p>
                      Ultrasound of both breasts
                    </p>
                  </li>
                  <li>
                    <p>
                      Mammogram
                    </p>
                  </li>
                  <li>
                    <p>
                      {"Magnetic resonance imaging (MRI)"}
                    </p>
                  </li>
                  <li>
                    <p>Biopsy</p>
                  </li>
                  <li>
                    <p>
                      PET CT
                    </p>
                  </li>
                </ul>
              </div>
              <div id="treatment-breast-cancer" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Treatment for Breast Cancer in Bangalore</h2>
                <p>Dr. Uday Ravi decides the treatment option for breast cancer depending upon the cancer type and extent of spread of cancer to different organs of the body. Treatments for breast cancer include</p>
                <ul className={styles.numberlist}>
                  <li>
                    <p>
                      Surgery such as - A mastectomy, which removes the whole breast
                    </p>
                  </li>
                  <li>
                    <p>
                      Radiation therapy
                    </p>
                  </li>
                  <li>
                    <p>
                      Chemotherapy
                    </p>
                  </li>
                  <li>
                    <p>
                      Hormone therapy: which blocks cancer cells from getting the hormones they need to grow
                    </p>
                  </li>
                  <li>
                    <p>
                      Targeted therapy: which uses drugs or other substances that attack specific cancer cells with less harm to normal cells
                    </p>
                  </li>
                  <li>
                    <p>
                      Immunotherapy
                    </p>
                  </li>
                </ul>
              </div>
              <div id="risk-reduction" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">What Can I Do to Reduce My Risk of Breast Cancer?</h2>
                <p>You can help lower your risk of breast cancer by taking care of your health in the following ways:</p>
                <ul>
                  <li>
                    <p>
                      Keep a healthy weight.
                    </p>
                  </li>
                  <li>
                    <p>
                      Exercise regularly.
                    </p>
                  </li>
                  <li>
                    <p>
                      Don’t Smoke
                    </p>
                  </li>
                  <li>
                    <p>
                      Avoid Birth Control Pills
                    </p>
                  </li>
                  <li>
                    <p>
                      Don’t drink alcohol, or limit alcoholic drinks.
                    </p>
                  </li>
                  <li>
                    <p>
                      Breastfeed your children, if possible.
                    </p>
                  </li>
                </ul>
                <p>If you have a family history of breast cancer, talk to Dr. Uday Ravi about other ways to lower your risk.</p>
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
      {/* <section id='faqs' className={styles.Section2FAQs} data-aos="fade-up">
        <Section4 />
      </section> */}
      <section id='about-doctor' className={styles.Section2AboutDoctor} data-aos="fade-up">
        <Section5 />
      </section>
      <PopupForm showPopup={showPopup} setShowPopup={setShowPopup} />
    </section>
  );
}