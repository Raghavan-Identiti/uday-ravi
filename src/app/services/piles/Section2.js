
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import pilesImage1 from '../../assets/PilesImage1.png';
import pilesImage2 from '../../assets/PilesImage2.png';
import pilesclassify1 from '../../assets/classificationofpiles1.png';
import pilesclassify2 from '../../assets/classificationofpiles2.png';
import pilesclassify3 from '../../assets/classificationofpiles3.png';
import pilesclassify4 from '../../assets/classificationofpiles4.png';
import HemorrhoidLigation from '../../assets/Hemorrhoid-ligation.png';
import pilesTreatment1 from '../../assets/Piles-treatment1.png';
import pilesTreatment2 from '../../assets/Piles-treatment2.png';
import pilesTreatment3 from '../../assets/Piles-treatment3.png';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Custom icon
import FaShieldAlt from '../../assets/Group158.png'; // Use your actual SVG or PNG
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Link from 'next/link';
import AOS from 'aos';             // Import AOS
import 'aos/dist/aos.css';        // Import AOS styles

export default function Section2({ setShowPopup }) {
  const [activeId, setActiveId] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Piles";
};


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
    { id: 'what-is-piles', label: 'Piles',type:"heading" },
    { id: 'classification', label: 'Classifications',type:"subheading" },
    { id: 'symptoms', label: 'Signs & Symptoms',type:"subheading" },
    { id: 'causes', label: 'Causes Of Piles' ,type:"subheading"},
    { id: 'classificationofpiles', label: 'Grades',type:"subheading" },
    { id: 'piles-during-pregnancy', label: 'Pregnancy & Piles',type:"subheading" },
    { id: 'diagnosis', label: 'Diagnosis',type:"subheading" },
    { id: 'treatment', label: 'Treatments',type:"subheading" },
    { id: 'preventpiles', label: 'Prevention',type:"subheading" },
    { id: 'foods', label: 'Nutrition',type:"subheading" },
  ];
useEffect(() => {
  const element = document.querySelector(`.${styles.Section2Header}`);
  if (element) {
    setTimeout(() => {
      element.classList.add("overrideZ");
    }, 1000);
  }
}, []);

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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Piles Treatment In Bangalore</h1>
              <div id="what-is-piles" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >What are piles?</h2>
                <p>Piles, also known as hemorrhoids, are swollen blood vessels and bloated clumps of tissue located in the lower rectum or anus. They occur in a variety of sizes and can be internal or external.</p>
                <div className={`d-flex flex-column flex-lg-row gap-5 ${styles.Section2PilesImgdiv}`}>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={pilesImage1} alt="Piles Treatment" className={styles.Section2PilesImage1} />
                    <p>Fig 1. Normal rectum</p>
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={pilesImage2} alt="Piles Treatment" className={styles.Section2PilesImage2} />
                    <p>Fig 2. Hemorrhoid</p>
                  </div>
                </div>
              </div>
              <div id="classification" className={styles.Section2Question2} data-aos="fade-up">
                <h2 >What are the classifications of piles, or hemorrhoids?</h2>
                <ul className="">
                  <li>
                    <p><strong>Internal hemorrhoids : </strong> Internal hemorrhoids develop deep inside the rectum and may not be visible to the naked eye. They usually do not cause any pain, but you may notice slight bleeding through your anus.</p>
                  </li>
                  <li>
                    <p><strong>External hemorrhoids : </strong>External hemorrhoids develop on the outer edge of your anus. They may not be visible in some cases, but in other cases, they may look like lumps. External hemorrhoids cause severe pain and discomfort.</p>
                  </li>
                  <li>
                    <p><strong>Thrombosed hemorrhoids : </strong> Sometimes, blood clots develop within the hemorrhoid tissue. These are known as thrombosed hemorrhoids. They cut off the blood supply to the rectal tissue, causing extreme pain. If left untreated, thrombosed hemorrhoids can cause severe complications.</p>
                  </li>
                  <li>
                    <p><strong>Prolapsed hemorrhoids : </strong>Prolapsed hemorrhoids develop when the internal hemorrhoids swell and start to bulge outside the anus. They can cause itchiness, pain, discomfort, and a burning sensation.</p>
                  </li>
                </ul>
              </div>
              <div id="symptoms" className={styles.Section2Question3} data-aos="fade-up">
                <h2>What are the signs and symptoms of piles?</h2>
                <p>
                  The signs and symptoms of piles, or hemorrhoids, can vary depending on the type and severity of the condition. Common signs and symptoms include:
                </p>
                <ul className="d-flex flex-column row-gap-2">
                  <li>
                    Bleeding during and after bowel movements.
                  </li>
                  <li>
                    In the anal region, a feeling of a hard lump.
                  </li>
                  <li>
                    Feelings of satiety following bowel movements.
                  </li>
                  <li>
                    Around the anus, there is redness, swelling, and irritation.
                  </li>
                  <li>
                    During bowel movements, there is pain and discomfort.
                  </li>
                  <li>
                    Mucus discharge after bowel movements
                  </li>
                  <li>
                    Fecal Incontinence
                  </li>
                  <li>
                    Painful hard lump in the anus
                  </li>
                  <li>
                    The sensation of fullness in the bowels even after passing a stool
                  </li>
                </ul>
                <p>
                  If you&apos;re experiencing rectal bleeding, pain, or persistent discomfort it&apos;s important to consult with a healthcare professional for an accurate diagnosis and appropriate treatment plan.
                </p>
              </div>
              <div id="causes" className={styles.Section2Question4} data-aos="fade-up">
                <h2 >What causes piles?</h2>
                <p>
                  Piles can be caused by various factors. Here are some common causes of piles:
                </p>
                <ul className="d-flex flex-column row-gap-2">
                  <li>
                    Chronic constipation
                  </li>
                  <li>
                    Chronic diarrhea
                  </li>
                  <li>
                    Sitting for longer periods
                  </li>
                  <li>
                    Dietary imbalance or a Sedentary lifestyle
                  </li>
                  <li>
                    Tearing or straining during childbirth
                  </li>
                  <li>
                    The habit of inappropriate stool excretion
                  </li>
                  <li>
                    Excessive eating of junk food and less water intake
                  </li>
                  <li>
                    Low fibre intake
                  </li>
                  <li>
                    Straining during bowel movements
                  </li>
                  <li>
                    Obesity
                  </li>
                  <li>
                    Aging
                  </li>
                  <li>
                    Heavy lifting
                  </li>
                </ul>
              </div>
              <div id="classificationofpiles" className={styles.Section2Question5} data-aos="fade-up">
                <h2 >Classification of piles :</h2>
                <p>
                  Piles are categorized into four different grades:
                </p>
                <div className={styles.Section2PilesClassificationContainer}>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={pilesclassify1} alt="Piles Classification" className={styles.Section2PilesClassification} />
                    <strong>Grade I</strong>
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={pilesclassify2} alt="Piles Classification" className={styles.Section2PilesClassification} />
                    <strong>Grade II</strong>
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={pilesclassify3} alt="Piles Classification" className={styles.Section2PilesClassification} />
                    <strong>Grade III</strong>
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={pilesclassify4} alt="Piles Classification" className={styles.Section2PilesClassification} />
                    <strong>Grade IV</strong>
                  </div>
                </div>
                <ul className="d-flex flex-column row-gap-3">
                  <li>
                    <strong>Grade I : </strong>There are minor inflammations, mainly within the anus lining. They can&apos;t be seen.
                  </li>
                  <li>
                    <strong>Grade II : </strong>These piles are larger than grade I piles. But they remain within the anus. They may be pushed out during stool passing, but they will return on their own.
                  </li>
                  <li>
                    <strong>Grade III : </strong>These are commonly known as prolapsed hemorrhoids and appear outside the anus. They may feel like they are hanging from the rectum, but they are easy to re-insert.
                  </li>
                  <li>
                    <strong>Grade IV : </strong>These are unable to be put back in and need treatment. They are big and do not enter the anus.
                  </li>
                </ul>
              </div>
              <div id="piles-during-pregnancy" className={styles.Section2Question6} data-aos="fade-up">
                <h2 >Why do piles may occur during pregnancy?</h2>
                <ul className="d-flex flex-column row-gap-3">
                  <li>
                    During pregnancy, the body goes through several hormonal changes. These hormonal changes cause the veins to relax as well as lead to constipation. Constipation is one of the leading reasons for piles development due to the pressure and straining during the bowel movements. This pressure can cause tearing, bulging and even lump formation around and in the anus and lead to piles.
                  </li>
                  <li>
                    Other than constipation, the growing size of the uterus increased progesterone level, and the baby&apos;s positioning can also play a significant role in piles development among the expected women. Also, giving birth while in the second stage of labour can develop the issue of piles.
                  </li>
                  <li>
                    If you suffer from piles/hemmoroids during pregnancy, get your appointment now for consultation and treatment with Dr. Uday Ravi for the best hemmoroids treatment in Bangalore.
                  </li>
                </ul>
              </div>
              <div id="diagnosis" className={styles.Section2Question7} data-aos="fade-up">
                <h2 >How are piles diagnosed?</h2>
                <p>
                  <strong>The best doctor for piles in Bengaluru, Dr. Uday Ravi </strong> diagnoses through a combination of medical history evaluation, physical examination and occasionally, additional diagnostic tests. Here’s an overview of the diagnostic process for piles:
                </p>
                <ul className="">
                  <li>
                    <p><strong>Medical history : </strong>Dr.Uday Ravi will start by asking you questions about your symptoms, such as the duration, severity, and frequency of pain, itching, or bleeding. He may also ask about your bowel habits, dietary habits, and any family history of hemorrhoids.</p>
                  </li>
                  <li>
                    <p><strong>Physical examination : </strong>Dr. Uday Ravi will do physical examination of the anus and rectum. This usually involves visually inspecting the area for external piles or using a gloved finger to feel for internal piles. Dr. Uday Ravi may use an anoscope, a short tube-like instrument, to examine the inside of the rectum.</p>
                  </li>
                  <li>
                    <p><strong>{"Digital rectal examination (DRE) : "}</strong>The doctor inserts a lubricated, gloved finger into the rectum to feel for any abnormalities or growths.</p>
                  </li>
                  <li>
                    <p><strong>Sigmoidoscopy or colonoscopy : </strong>{"These methods involve using a flexible tube with a camera (sigmoidoscope or colonoscope) to examine the rectum and the lower part of the colon. It assists in evaluating the whole length of the rectum and colon to check for other potential causes of signs."}</p>
                  </li>
                  <li>
                    <p><strong>Anoscopy or proctoscopy : </strong>{"These procedures involve using a short, rigid, or flexible tube with a light source (anoscope or proctoscope) to examine the interior of the anus and lower rectum."}</p>
                  </li>
                  <li>
                    <p><strong>Barium enema X-ray : </strong>{"This test may be recommended to evaluate the whole colon and rectum if other tests are inconclusive. It concerns the insertion of a contrast material (barium) into the rectum, observed by X-rays to visualize the gastrointestinal tract."}</p>
                  </li>
                  <li>
                    <p><strong>Colon transit study : </strong>This test is used to assess how well stool moves via the colon. It aids in evaluating the functioning of the colon and determining any possible underlying causes of constipation or other signs.</p>
                  </li>
                </ul>
              </div>
              <div id="treatment" className={styles.Section2Question8} data-aos="fade-up">
                <h2 >How are piles treated?</h2>
                <p>
                  Dr. Uday Ravi provides wide range of safe and efficient methods for the treatment of both external and internal hemorrhoids. His aim is to alleviate the discomfort and itching associated with hemorrhoids. Dr. Uday Ravi, a highly regarded senior surgeon who is a piles specialist doctor in Bengaluru is dedicated to offering the best possible options for piles treatment to his patients. Here are some of the treatment options he recommends:
                </p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={HemorrhoidLigation} alt="Hemorrhoid ligation with elastic band." className={styles.Section2PilesTreatment} />
                  <p className={`${styles.Section2PilesTreatmentPara}`}>Fig 4. Hemorrhoid Treatment with Elastic Band Ligation</p>
                </div>

                <ul className="">
                  <li>
                    <p><strong>Lifestyle modifications : </strong>As an initial step, we emphasize the significance of adopting certain lifestyle modifications. These include increasing dietary fiber intake, staying well-hydrated by consuming ample amounts of water, and limiting the consumption of liquids containing caffeine, such as tea, coffee, and carbonated drinks. These dietary adjustments can help prevent straining during bowel movements</p>
                  </li>
                  <li>
                    <p><strong>Rubber band ligation : </strong>This treatment is commonly suggested for people with grade 1 to 3 hemorrhoids. It concerns the application of elastic bands around internal hemorrhoids, at least 1 cm above the dentate line, to cut off their blood supply.</p>
                  </li>
                  <li>
                    <p><strong>{"Sclerotherapy : "}</strong>This procedure involves injecting a sclerosing agent, such as phenol, directly into the piles. The key causes the walls of the veins to collapse, leading to the shrinkage of piles.</p>
                  </li>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Surgical Piles Treatment:</strong>
                    <ul className={`${styles.sublistAlphabets}`}>
                      <li>
                        <p><strong>Hemorrhoidectomy :</strong>This surgical procedure involves the removal of large external or internal hemorrhoids using laser.</p>
                      </li>
                      <li>
                        <p><strong>Internal hemorrhoid stapling : </strong>In this method, internal hemorrhoids are either removed using a stapling device or gently moved back into the anus and tied there.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p>
                  Dr. Uday Ravi, a highly skilled piles doctor in Bengaluru, possesses extensive expertise in providing exceptional care to his patients. Dr. Uday Ravi provides the best laser treatment for piles in Bengaluru. He prioritizes safety, ethical practices, and confidentiality, employing state-of-the-art technology and innovative approaches to ensure optimal outcomes for every individual he treats
                </p>
                <div className={`row mt-4 ${styles.Section2PilesTreatmentImages}`}>
                  <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <Image src={pilesTreatment1} alt="pilesTreatment1" className={`${styles.Section2PilesTreatment1} img-fluid`} />
                    <p className={`mt-3 ${styles.pilesTreatment1sub}`}>Fig 5. Stapler Surgery</p>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <Image src={pilesTreatment2} alt="pilesTreatment2" className={`${styles.Section2PilesTreatment2} img-fluid`} />
                    <p className={`mt-3 ${styles.pilesTreatment2sub}`}>Fig 6. Infrared Coagulation</p>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <Image src={pilesTreatment3} alt="pilesTreatment3" className={`${styles.Section2PilesTreatment3} img-fluid`} />
                    <p className={`mt-3 ${styles.pilesTreatment2sub}`}>Fig 7. Laser Treatment</p>
                  </div>
                </div>
              </div>
              <div id="preventpiles" className={styles.Section2Question9} data-aos="fade-up">
                <h2 className="mt-5">How to prevent piles?</h2>
                <p>
                  Preventing hemorrhoids involves adopting healthy lifestyle habits and making certain changes in your daily routine. Here are some effective tips to help you prevent hemorrhoids:
                </p>
                <ul className="d-flex flex-column row-gap-2">
                  <li>
                    Eat High-Fiber Diet
                  </li>
                  <li>
                    Stay Hydrated
                  </li>
                  <li>
                    Exercise Regularly
                  </li>
                  <li>
                    Avoid Straining
                  </li>
                  <li>
                    Maintain Good Hygiene
                  </li>
                  <li>
                    Manage Weight
                  </li>
                  <li>
                    Be Mindful of Medications.
                  </li>
                </ul>
              </div>
              <section id='foods' className={styles.Section2Foods} data-aos="fade-up">
                <Section3 />
              </section>
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

    </section>
  );
}