
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import VaricoseVeinsImg1 from '../../assets/VaricoseVeinsImg1.png';
import VaricoseVeinsImg2 from '../../assets/VaricoseVeinsImg2.png';
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
    { id: 'varicose-veins', label: 'Varicose Veins' ,type:"heading"},
    { id: 'symptoms', label: 'Symptoms',type:"subheading" },
    { id: 'causes', label: 'Causes' ,type:"subheading"},
    { id: 'women-varicose-veins', label: 'Women And Varicose Veins',type:"subheading" },
    { id: 'diagnosis', label: 'Diagnosis',type:"subheading" },
    { id: 'complications', label: 'Complications' ,type:"subheading"},
    { id: 'treatment', label: 'Treatment',type:"subheading" },
    { id: 'advantages-of-veneseal', label: 'Advantages Of Veneseal' ,type:"subheading"},
  ];

  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Varicose Veins";
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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Varicose Vein Treatment in Bangalore</h1>
              <div id="varicose-veins" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >What is varicose vein?</h2>
                <p>{"Varicose veins are veins seen under the skin that have become swollen, twisted and bulging. They are usually seen in the legs and feet. They are quite common, and most of the time do not cause any problems. However, they can be disfiguring and be a cause for cosmetic concern in females. Varicose vein of legs is common, affecting 1-15% of adult men and 20-25% of adult women."}</p>
                <p>{"The veins of the lower limb have one way valves that keep the blood moving towards the heart and prevent its backflow. When these valves are damaged, blood starts pooling in the legs causing swelling of the legs, aching pain, heaviness, fatigue, skin discoloration, itching, varicosities (prominent vein) and if not treated it may develop non-healing ulcers in leg. Over time, the continuous pooling cause the veins to become stretched, swollen and tortuous. Raised pressure in these veins also causes development of spider veins and discoloured areas which look like bruises."}</p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={VaricoseVeinsImg1} alt="VaricoseVeinsImg1" className={styles.Section2PilesImage1} />
                  <p>Fig 1. Varicose Vien</p>
                </div>
              </div>
              <div id="" className={styles.Section2Question7} data-aos="fade-up">
                <strong style={{color:"#5c47dc"}} className="mt-5">The varicose vein consists of :</strong>
                <ul>
                  <li>
                    Venous insufficiency or venous reflux at groin.
                  </li>
                  <li>
                    Prominent and dilated perforators.
                  </li>
                  <li>
                    Dilated tortuous side branches.
                  </li>
                </ul>
              </div>
              <div id="symptoms" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5">Varicose vein symptoms</h2>
                <p>Women are more prone for varicose veins than men. There is an increased risk of the development of varicose vein among young females who wear tight jeans and high-heeled sandals.</p>
                
              </div>
              <div id="common-symptoms" className={styles.Section2Question3} data-aos="fade-up">
                <strong style={{color:"#5c47dc"}} className="mt-5">The most common presenting with symptoms:</strong>
                <ul className='d-flex flex-column row-gap-2 mt-3'>
                  <li>{"Pain (some time on & off)"}</li>
                  <li>{"Twisted, swollen, or lumpy veins"}</li>
                  <li>{"Heavy legs, especially after physical activity"}</li>
                  <li>{"Skin discolorations and ulcers"}</li>
                  <li>{"Itching"}</li>
                  <li>{"Swollen ankles"}</li>
                  <li>{"Leg cramps while standing up"}</li>
                  <li>{"Dark purple-colored veins"}</li>
                  <li>{"Dilated & tortured veins"}</li>
                  <li>{"Bleeding from leg"}</li>
                  <li>{"Non-healing ulcer of the leg"}</li>
                </ul>
              </div>
              <div id="causes" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">Causes of varicose veins?</h2>
                <ul className='d-flex flex-column row-gap-2 mt-3'>
                  <li>{"Obesity"}</li>
                  <li>{"Lack of exercise"}</li>
                  <li>{"Abnormal pressure on veins during pregnancy"}</li>
                  <li>{"Prolonged standing"}</li>
                  <li>{"Prolonged sitting with legs down."}</li>
                  <li>{"Due to advanced age, overweight and lack of exercise veins of legs become very weak and, therefore, develop into varicose veins."}</li>
                </ul>
                <div className='d-flex flex-column align-items-center my-4'>
                  <Image src={VaricoseVeinsImg2} alt="VaricoseVeinsImg4" className={`${styles.Section2PilesImage1} mb-3 `} />
                  <p>Fig 4. Untreated varicose vein with ulcer and pigmentation.</p>
                </div>
              </div>
              <div id="risk" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">Risk factors</h2>
                <ul className='d-flex flex-column row-gap-2 mt-3'>
                  <li>{"Family history"}</li>
                  <li>{"Obesity"}</li>
                  <li>{"Increasing age"}</li>
                  <li>{"Sex- women are more prone"}</li>
                  <li>{"Pregnancy"}</li>
                  <li>{"Standing or sitting for long periods of time"}</li>
                </ul>
                
              </div>
              <div id="women-varicose-veins" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">Why women are more susceptible to varicose veins?</h2>
                <p>
                  {"In females, the walls of veins become enlarged and dilated due to hormonal changes. During pregnancy the pressure on leg veins is increased significantly and these veins become weak and varicosed. Varicose veins develops in females when the normal flow of blood in the veins is obstructed who wear high heels, tight belts and panties."}
                </p>  
              </div>
              <div id="diagnosis" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">How varicose veins is diagnosed?</h2>
                <p>
                  Dr Uday Ravi who is one of the best varicose veins doctor in Bengaluru. He will take detailed history with symptoms and do the physical examination andlook for swelling, skin colour changes, tenderness or any tortuous veins on lower limbs. He will advice ultrasound Doppler study which can show the exact site of disease in the form of damaged valves & dilatation of veins.
                </p>
                
              </div>
              <div id="complications" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Complications of varicose veins</h2>
                <ul className='d-flex flex-column row-gap-2 mt-3'>
                  <li>
                    Bleeding from Superficial Veins
                  </li>
                  <li>
                    Venous pigmentation/Hemosiderin staining of the skin
                  </li>
                  <li>
                    Venous stasis dermatitis/venous eczema- Symptoms of this condition include swelling (typically concentrated around the legs or ankles), changes in skin color and texture, and pain. The affected skin is itchy, and assumes red, purple, or brown colors.
                  </li>
                  <li>
                    Venous stasis ulcers
                  </li>
                  <li>
                    Superficial venous thrombosis
                  </li>
                  <li>
                    Deep vein thrombosis (DVT)
                  </li>
                  <li>
                    Pulmonary embolism
                  </li>
                </ul>
              </div>
              <div id="treatment" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Varicose veins treatment in bangalore:</h2>
                {/* <p>Dr. Uday Ravi decides the treatment option for breast cancer depending upon the cancer type and extent of spread of cancer to different organs of the body. Treatments for breast cancer include</p> */}
                <ul className='d-flex flex-column row-gap-2 mt-3'>
                  <li>
                    <strong style={{color:"#5c47dc"}} >Lifestyle modification : </strong>
                    <ul className={`${styles.sublistAlphabets} d-flex flex-column row-gap-2`}>
                      <li>{"Losing any excess weight and doing light to moderate physical activity, such as swimming or walking."}</li>
                      <li>{"Avoid standing for long periods of time as this causes pooling of blood in the veins and may make your symptoms worse."}</li>
                      <li>{"While sleeping keep the legs elevated by placing 2 pillows under the feet. This helps in emptying of the pooled blood from the veins."}</li>
                    </ul>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}} >VENOUS STOCKINGS / COMPRESSION STOCKINGS</strong>
                    <p className='mt-3'>They help to maintain the blood flow in the leg veins and reduce leg swelling. They also help to reduce the risk of blood clots forming in the veins. They act by enhancing the effect of the natural pumping mechanism of the leg muscles. This helps to increase the blood flow back towards the heart.</p>
                    <p className='mt-3'>The stockings are worn during the day and taken off before going to bed at night. They should be worn again the first thing in the morning.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}} >MEDICATION</strong>
                    <p className='mt-3'>Tab Daflon may be used. Daflon is a micronized purified flavonoidfraction containing 90% diosmin and 10% other flavonoids expressed as hesperidin. It increases venous tone, it improves lymph drainage, and it protects the microcirculation. It helps to reduce leg swelling, improves skin changes and helps in the healing of ulcers.</p>
                  </li>
                  <li>
                     <p><strong style={{color:"#5c47dc"}} >Sclerotherapy : -</strong>This is only for short segment disease.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}} >Vein Stripping Surgery</strong>
                    <p>It is a major surgery. Surgeon disconnects and ties off all major varicose vein branches associated with the saphenousvein, he then removes the saphenous vein and varicose veins from your leg surgically. The recurrence rate is too high and it leaves ugly scars. It needs 4 weeks for recovery.</p>
                  </li>
                  <li>
                    <strong style={{color:"#5c47dc"}} >Radiofrequency Ablation of varicose veins/Endovenous laser ablation (EVLA)</strong>
                    <p className='mt-3'>
                      Laser treatment for varicose veins is extremely effective: With the 2-phase radial emission of energy through the ELVeS fibers, the energy can be applied homogeneously to the vessel wall. Thus the vein is sealed accurately. The risk of perforating the vein wall is minimized, side effects of typical varicose vein treatments rarely occur. The ELVeS fiber with an atraumatic fiber tip is inserted into the affected vein through a small puncture. Due to perfect view via ultrasound the fiber can be monitored and placed perfectly well.
                    </p>
                    <p>
                      The whole treatment takes approximately 30-45 minutes. During the treatment as well as afterwards the patient hardly feels any discomfort. Patients can return to their daily activities on the next day of the treatment.
                    </p>
                    <p>The recurrence rate is almost negligible and the pain associated with the procedure is much less as compared to other procedures</p>
                  </li>
                </ul>
                <div>
                  <strong>Advantages of EVLA</strong>
                  <ul className={styles.sublistAlphabets}>
                    <li>No scar on skin</li>
                    <li>Day care procedure or discharged in 1 day</li>
                    <li>Patients can resume normal activities within a day.</li>
                    <li>The recurrence rate is very low.</li>
                  </ul>
                  <ul>
                  <li>
                    <strong style={{color:"#5c47dc"}} >Veneseal treatment  for varicose veins</strong>
                    <p>The latest veneseal treatment for varicose veins is the best way to treat varicose veins without surgery. It is the latest USFDA approved treatment. In this system a small amount of adhesive(medical glue) is delivered that is utilized to close or seal the affected vein immediately, rerouting blood to nearby healthy veins and providing faster symptom relief. After this procedure doctor recommends you to rest for sometime before returning to your normal activities.</p>
                  </li>
                  </ul>
                </div>
              </div>
              <div id="advantages-of-veneseal" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Advantages of veneseal over other treatment option:</h2>
                <ul className={`${styles.sublistAlphabets} d-flex flex-column row-gap-1 mt-3`}>
                  <li>Minimally invasive procedure</li>
                  <li>No downtime</li>
                  <li>Doesn’t require stocking</li>
                  <li>High success rate</li>
                  <li>Less intra and post procedure pain</li>
                  <li>No multiple needle pricks</li>
                  <li>No major anesthesia</li>
                  <li>Best option even for elderly/high risk patients</li>
                </ul>                
                <p>If you are looking for the varicose veins treatment in Bangalore/ laser surgery for varicose veins the contact Dr. Uday Ravi</p>
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
      <section id='faqs' className={styles.Section2FAQs} data-aos="fade-up">
        <Section4 />
      </section>
      <section id='about-doctor' className={styles.Section2AboutDoctor} data-aos="fade-up">
        <Section5 />
      </section>
      <PopupForm showPopup={showPopup} setShowPopup={setShowPopup} />
    </section>
  );
}