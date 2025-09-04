
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css'; 
import { FaChevronDown } from 'react-icons/fa'; // Custom icon
import FaShieldAlt from '../../assets/Group158.png'; // Use your actual SVG or PNG
import Section4 from "./Section4";
import Section5 from "./Section5";
import PopupForm from '@/app/PopupModal/popupmodal';
import Link from 'next/link';
import gallbladderImg1New from '../../assets/gallbladderImg1New.png'
import gallbladderImg2New from '../../assets/gallbladderImg2New.png'
import gallbladderImg3New from '../../assets/gallbladderImg3New.png'
import gallbladderImg2 from '../../assets/gallbladderImg2.png'
import gallbladderImg3 from '../../assets/gallbladderImg3.png'
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
    { id: 'gallbladder-stones', label: 'Gallbladder Stones',type:"heading" },
    { id: 'types', label: 'Types',type:"subheading" },
    { id: 'symptoms', label: 'Symptoms',type:"subheading" },
    { id: 'causes', label: 'Causes',type:"subheading" },
    { id: 'complications', label: 'Complications',type:"subheading" },
    { id: 'diagnosis', label: 'Diagnosis',type:"subheading" },
    { id: 'treatment', label: 'Treatment',type:"subheading" },
    { id: 'benefits', label: 'Benefits' ,type:"subheading"},
    { id: 'prevention', label: 'Prevention' ,type:"subheading"},
  ];

  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Gastroenterology & GI Surgery";
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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Gallbladder stones Treatment in Bangalore</h1>
              <div id="gallbladder-stones" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >What is gallbladder stones (cholelithiasis)?</h2>
                <p>Gallbladder stones, also known as<strong> gallstones or cholelithiasis.</strong> Gallstones (cholelithiasis) are hard deposits that form in the gallbladder. The gallbladder is a small organ located below the liver that stores bile, a fluid that helps digest fats. Gallstones can be made of bilirubin, cholesterol, or a combination of both. These stones can vary in size and composition, and they can develop for several reasons. Gallbladder stones do not disappear by themselves.</p>
                <p> <strong> Dr. Uday Ravi,</strong> a leading surgeon in Bengaluru <strong>who does Best Gallstone Surgery in Bengaluru </strong>may decide to remove your gallbladder if it begins to pain or causes other symptoms. Around 80% of people with gallbladder stones will require surgery. Cholecystectomy is one of the most common procedures performed by doctors to remove gallbladder stones.</p>
                <div className='d-flex flex-column align-items-center'>
                    <Image src={gallbladderImg2New} alt="gallbladderImg1" className={styles.Section2PilesImage1New} />
                    <p>Fig 1. Anatomy of Liver and Gall Bladder</p>
                </div>
              </div>
              <div id="types" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5">Types of Gall-stones:</h2>
                <p>The most common symptom of diabetic foot ulcers is black tissue surrounding the ulcer, which forms because of the absence of healthy blood flow to the area around the ulcer. Also, you might see partial or complete tissue death due to infection around the affected area, causing pain, numbness, and pus discharge. However, some other signs and symptoms of diabetic foot ulcers are :</p>
                <ul className="">
                  <li>
                    <strong style={{color:"#5c47dc"}}>Cholesterol gallstones : </strong>
                    <p>{"Cholesterol gallstones are the most ordinary type of gallstones. They are made up of cholesterol, which is a type of fat. Cholesterol gallstones are more likely to develop in individuals who are overweight or obese, have a family history of gallstones, or have specific medical conditions, such as diabetes or liver disorder."}</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Pigment gallstones : </strong>
                    <p>{"Pigment gallstones are made up of bilirubin, a substance that is produced when red blood cells break down. Pigment gallstones are more likely to develop in individuals who have a liver disease that causes them to produce too much bilirubin, such as cirrhosis or hemolytic anemia."}</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Mixed stones : </strong>
                    <p>{"Mixed stones that contain both cholesterol and pigment components"}</p>
                  </li>
                </ul>
                <div className='d-flex flex-column align-items-center'>
                    <Image src={gallbladderImg1New} alt="gallbladderImg1" className={styles.Section2PilesImage1New} />
                    <p>Fig 2. Types of Gallbladder Stones</p>
                </div>
              </div>
              <div id="symptoms" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">What are the symptoms of gallbladder stones?</h2>
                <p>Gallbladder stones are asymptomatic in around 70% of instances. They can cause the following symptoms:</p>
                <ul >
                  <li>
                    <p>Infrequent but severe pain in the back and abdomen</p>
                  </li>
                  <li>
                    <p>Increase in the intensity of pain after consuming fatty food</p>
                  </li>
                  <li>
                    <p>{"Jaundice"}</p>
                  </li>
                  <li>
                    <p>{"If the gallbladder or bile duct becomes infected, it can cause fever and pain."}</p>
                  </li>
                  <li>
                    <p>{"Bloating"}</p>
                  </li>
                  <li>
                    <p>{"Indigestion"}</p>
                  </li>
                  <li>
                    <p>{"Nausea and vomiting"}</p>
                  </li>
                </ul>
              </div>
              <div id="causes" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">What are the causes of gallbladder stones?</h2>
                <p>The exact cause of gallstones is not fully comprehended, but there are a number of factors that can improve your risk of developing them. These include:</p>
                <ul className={`${styles.sublistAlphabets}`}>
                  <li>
                    <p>Being overweight or obese</p>
                  </li>
                   <li>
                    <p>Family history of gallstones</p>
                  </li>
                   <li>
                    <p>Certain medications, such as clofibrate and octreotide</p>
                  </li>
                   <li>
                    <p>Certain medical conditions, such as diabetes and liver disease</p>
                  </li>
                   <li>
                    <p>Being female</p>
                  </li>
                   <li>
                    <p>Rapid weight loss</p>
                  </li>
                   <li>
                    <p>Being over the age of 40</p>
                  </li>
                   <li>
                    <p>Pregnancy</p>
                  </li>
                   <li>
                    <p>Eating a diet high in cholesterol and fat</p>
                  </li>
                  <li>
                    <p>Eating a diet low in fiber</p>
                  </li>
                  <li>
                    <p>Not getting enough exercise</p>
                  </li>
                </ul>
              </div>
              <div id="complications" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Complications of gallbladder stones (cholelithiasis):</h2>
                <p>The complications of gallstones can include:</p>
                <ul className="">
                  <li>
                    <strong style={{color:"#5c47dc"}}>Acute cholecystitis :</strong>
                    <p>This is an inflammation of the gallbladder. It is the most common complication of gallstones. Acute cholecystitis can cause intense pain in the upper right abdomen, nausea, vomiting, and fever.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Ascending cholangitis : </strong>
                    <p>This is an infection of the bile ducts. It can happen when a gallstone blocks the bile duct and bacteria are able to grow in the thick bile. Ascending cholangitis can cause fever, chills, jaundice, and pain in the upper right abdomen.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Pancreatitis : </strong>
                    <p>This is an inflammation of the pancreas. It can happen when a gallstone blocks the pancreatic duct and pancreatic enzymes are unable to flow into the small intestine. Pancreatitis can cause extreme pain in the upper abdomen, nausea, vomiting, and fever.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Gallstone ileus : </strong>
                    <p>This is a rare complication of gallstones. It happens when a gallstone blocks the small intestine. This can cause nausea, vomiting, and abdominal discomfort.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Empyema : </strong>
                    <p>Sometimes a painful infection can lead to gallbladder empyema. Antibiotics alone do not ever treat these and they may require emergency surgery.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}}>Gallbladder cancer : </strong>
                    <p>Gallbladder cancer is a rare cancer that originates from the lining of the gallbladder. It is more likely to happen in individuals who have had gallstones for many years.</p>
                  </li>
                </ul>
                <p>
                  If you have gallstones, book an appointment soon with Dr. Uday Ravi for gallbladder stones treatment. These complications can be serious & even life-threatening.
                </p>
                {/* <div className='d-flex flex-column align-items-center'>
                    <Image src={gallbladderImg2New} alt="gallbladder" className={styles.Section2PilesImage1New} />
                    <p>Fig 2. Anatomy of liver and gall bladder</p>
                </div> */}
              </div>
              <div id="diagnosis" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">How are gallbladder stones diagnosed?:</h2>
                <p> <strong>Dr. Uday Ravi,</strong> the best doctor for <strong>gallbladder stone treatment in Bengaluru,</strong> will examine you and evaluate your eyes and skin for color changes caused by too much bilirubin in your system.</p>
                <p>For an exact diagnosis, he may ask you to undergo a few tests, such as:</p>
                <ul className="d-flex flex-column row-gap-2">
                  <li>
                    Blood tests
                  </li>
                  <li>
                    Abdominal CT scan
                  </li>
                  <li>
                    Ultrasound
                  </li>
                  <li>
                    {"Hepatobiliary iminodiacetic acid (HIDA) scan"}
                  </li>
                  <li>
                    {"Magnetic resonance imaging (MRI)"}
                  </li>
                  <li>
                    Endoscopic ultrasound
                  </li>
                  <li>
                    {"Magnetic resonance cholangiopancreatography (MRCP)"}
                  </li>
                  <li>
                    {"Endoscopic retrograde cholangiopancreatography (ERCP)"}
                  </li>
                </ul>
                
              </div>
              <div id="treatment" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Gallbladder Stones treatment :</h2>
                <strong>Laparoscopic cholecystectomy:</strong>
                <div className='d-flex flex-column align-items-center mt-5'>
                    <Image src={gallbladderImg3New} alt="gallbladder" className={styles.Section2PilesImage1New} />
                    <p className='mt-4'>Fig 2. Galbladder Stones</p>
                </div>
                <p>Laparoscopic cholecystectomy is the most common treatment for gallbladder stones. It is a minimally invasive surgery that involves making a few small incisions in the abdomen. The surgeon then inserts a laparoscope, a thin tube with a camera on the end, into one of the incisions. This permits the surgeon to see inside the abdomen and work on the gallbladder.</p>
                <p>During a laparoscopic cholecystectomy, the surgeon will remove the gallbladder along with any gallstones. The surgery usually takes about 12 hours and most individuals are able to go home the same day. Laparoscopic cholecystectomy is a safe and adequate treatment for gallbladder stones. It has a lower risk of complications than open surgery, and most individuals recover quickly.</p>
                <div className='d-flex flex-column align-items-center'>
                    <Image src={gallbladderImg2} alt="gallbladderImg2" className={styles.Section2PilesImage2} />
                    <p>Fig 3. Laparoscopic Cholecystectomy</p>
                </div>
                <strong>Open cholecystectomy:</strong>
                <p>Open cholecystectomy is a surgery to remove the gallbladder stones. It is a larger incision than laparoscopic cholecystectomy, and it is typically used when laparoscopic surgery is not possible or when there are difficulties with laparoscopic surgery. During an open cholecystectomy, the surgeon makes a 4- to 6-inch incision in the abdomen below the ribs on the right side. The muscle and tissue are pulled back to show the liver and gallbladder.</p>
                <p>The surgeon then removes the gallbladder and any gallstones that are present. The surgery typically takes about 2 hours and most individuals stay in the clinic for 1-2 days. Open cholecystectomy is a safe and adequate treatment for gallbladder stones. However, it is associated with a longer recovery time and more pain than laparoscopic cholecystectomy. In addition to surgery, there are some other treatment for gallbladder stones that may be considered in certain cases.</p>
                <strong>Robotic Cholecystectomy :</strong>
                <p>Utilizing the state-of-the-art Da Vinci Robotic Surgical System, this advanced technique allows for greater precision and control during surgery. Dr. Uday Ravi, a highly experienced Surgeon, specializes in robotic GI surgeries. The robotic system enhances visualization and allows for intricate movements that can result in less tissue damage and quicker recovery.</p>
                <div className='d-flex flex-column align-items-center'>
                    <Image src={gallbladderImg3} alt="gallbladderImg3" className={styles.Section2PilesImage2} />
                    <p>Fig 3. Robotic Cholecystectomy</p>
                </div>
                <strong>Oral Medication :</strong>
                <p>Oral medication is a non-surgical treatment option for gallbladder stones. Medications to dissolve gallbladder stones are rarely utilized and are reserved for those unable to undergo surgery due to other medical issues. Oral medication is not always successful in dissolving gallstones. If the stones do not dissolve, or if they cause symptoms, surgery may be necessary. If you have gallstones, it is important to talk to your doctor about the best treatment options for you. The best gallbladder stone treatment in Bengaluru, depends on the severity of your symptoms and the size and location of the gallstones.</p>
              </div>
              <div id="benefits" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Benefits of Laparoscopic Gallstone Surgery vs Open Surgery:</h2>
                <p>Here are some of the benefits of laparoscopic cholecystectomy over open cholecystectomy:</p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>Lower risk of complications</li>
                  <li>Faster recovery</li>
                  <li>Shorter hospital stay</li>
                  <li>Smaller incisions</li>
                  <li>No long-term wounds or scars left behind</li>
                  <li>Minimal intraoperative bleeding involved</li>
                </ul>
              </div>
              <div id="prevention" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">How to prevent Gallstones?:</h2>
                <p>There is no sure way to prevent gallstones, but there are some things you can do to reduce your risk:</p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>Maintain a healthy weight</li>
                  <li>Eat a healthy diet</li>
                  <li>Lose weight if you are obese</li>
                  <li>Avoid rapid weight loss</li>
                  <li>Eat regular meals</li>
                  <li>Drink plenty of fluids</li>
                  <li>Avoid certain medications</li>
                  <li>Get regular exercise</li>
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