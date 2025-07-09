
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import AnalFistulaImg1 from '../../assets/AnalFistulaImg1.png';
import pilesImage2 from '../../assets/Group167.png';
import AnalFistula from '../../assets/AnalFistula.png';
import AnalFistula2 from '../../assets/AnalFistula2.png';
import AnalFistula3 from '../../assets/AnalFistula3.png';
import AnalFistula4 from '../../assets/The-Meinero-fistuloscope.png';
import AnalFistula5 from '../../assets/Fistula-plug-placement.png';
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
    { id: 'anal-Fistula', label: 'Anal Fistula',type:"heading" },
    { id: 'types', label: 'Types',type:"subheading" },
    { id: 'complex-fistula', label: 'Complex Fistula' ,type:"subheading"},
    { id: 'symptoms', label: 'Symptoms' ,type:"subheading"},
    { id: 'causes', label: 'Causes' ,type:"subheading"},
    { id: 'diagnosis', label: 'Diagnosis',type:"subheading" },
    { id: 'treatment', label: 'Treatments',type:"subheading" },
    { id: 'methods-of-fistula-treatment', label: 'Methods Of Treatment',type:"subheading" },
    // { id: 'advantages', label: 'Advantages',type:"subheading" },
    { id: 'why-fistula-recur', label: 'Why Fistula Recur',type:"subheading" },
  ];

  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Fistula";
};

  return (
    <section className={styles.Section2}>
      <div className="container">
        {/* Header */}
        <div className="row" >
          <div className="col-12 px-5" data-aos="fade-up">
            <p className={styles.Section2Header}>
              <Link className='text-decoration-none text-dark' href={"/"}>Home</Link><Link className='text-decoration-none text-dark' href={"/services"}>&gt; Services</Link> &gt; <span>{getBreadcrumbLabel(activeId)}</span>
            </p>
          </div>
        </div>

        <div className="row d-flex flex-lg-row flex-column-reverse">
          {/* Left Content */}
          <div className="col-lg-9 col-md-12 mb-4 px-lg-5 px-3" >
            <div className={styles.Section2content}>
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Fistula Treatment in Bangalore</h1>
              <div id="anal-Fistula" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >What is Anal Fistula?</h2>
                <p>An anal fistula is a tunnel connecting the skin near the anus to the inside of the bowel (usually the rectum). This means that the inside of the bowel is connected to the outside of the body through an additional opening. An anal fistula often results from a previous or current anal abscess. As many as 50% of people with an abscess get a fistula. However, a fistula can also occur without an abscess.</p>

                <div className={`d-flex flex-column flex-lg-row justify-content-center gap-5 ${styles.Section2PilesImgdiv}`}>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={AnalFistulaImg1} alt="Piles Treatment" className={styles.Section2PilesImage1} />
                    <p>Fig 1. Anal Fistula</p>
                  </div>
                  
                </div>
              </div>
              <div id="types" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mb-3">Types of Fistual in Ano</h2>
                <p>Fistulas are classified by their relationship to parts of the anal sphincter complex (the muscles that allow us to control our stool). They are classified as</p>
                <ul className="d-flex flex-column row-gap-2">
                  <li>
                    Intersphincteric
                  </li>
                  <li>
                    Transsphincteric
                  </li>
                  <li>
                    Suprasphincteric
                  </li>
                  <li>
                    Extrasphincteric
                  </li>
                </ul>
                <p>Most common is Intrasphincteric and least common is Extrasphincteric.</p>
                <p>Based on the complexity of fistula, risk of incontinence and risk of recurrence, it is divided into</p>
                <ul className="d-flex flex-column row-gap-2">
                  <li>Simple fistula</li>
                  <li>
                    Complex fistula
                    <ul className={`${styles.sublistAlphabets} d-flex flex-column row-gap-2`}>
                      <li>Simple fistula:
                        <ul className={`d-flex flex-column row-gap-2 mt-3`}>
                          <li>They involve less than 30% of external spinchter.</li>
                        </ul>
                      </li>
                      <li>Complex fistula:
                        <ul className={` d-flex flex-column row-gap-2 mt-3`}>
                          <li>Involves more than 30% sphincter muscle</li>
                          <li>Fistula associated with preexisting fecal incontinence, inflammatory bowel disease, or prior radiation.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>

              </div>
              <div id="causes" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Causes of anal fistula</h2>
                <ul className="d-flex flex-column row-gap-2 mt-3">
                  <li>
                    {"Crohn’s disease (an inflammatory disease of the intestine)"}
                  </li>
                  <li>
                    {"Radiation (treatment for cancer)"}
                  </li>
                  <li>
                    Trauma
                  </li>
                  <li>
                    Sexually transmitted diseases
                  </li>
                  <li>
                    Tuberculosis
                  </li>
                  <li>
                    Diverticulitis
                  </li>
                  <li>
                    Colorectal Cancer
                  </li>
                </ul>
              </div>
              <div id="symptoms" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">Symptoms of anal fistula</h2>
                <p>
                  The signs and symptoms of an anal fistula include:
                </p>
                <ul className="">
                  <li>
                    <p>Frequent anal abscesses</p>
                  </li>
                  <li>
                    <p>Pain and swelling around the anus</p>
                  </li>
                  <li>
                    <p>{"Bloody or foul-smelling drainage (pus) from an opening around the anus. The pain may decrease after the fistula drains."}</p>
                  </li>
                  <li>
                    <p>Irritation of the skin around the anus from drainage</p>
                  </li>
                  <li>
                    <p>Pain with bowel movements</p>
                  </li>
                  <li>
                    <p>Bleeding</p>
                  </li>
                  <li>
                    <p>Fever, chills, and a general feeling of fatigue</p>
                  </li>
                </ul>
                <p>Anal fistula surgery aims to correct an anal fistula and treat all of its associated symptoms. If you have any of the above symptoms or you’re concerned about having an anal infection, abscess or fistula, speak with
                  <strong> Dr. UDAY RAVI, the best fistula specialist in BENGALURU.</strong>
                </p>
              </div>
              <div id="diagnosis" className={styles.Section2Question6} data-aos="fade-up">
                <h2 className="mt-5 mb-4">Diagnosis of anal fistula</h2>
                <p>{"Dr. UDAY RAVI will diagnose an anal fistula by examination of the area around the anus. He will look for an opening (the fistula tract) on the skin, then try to determine how deep the tract is, and the direction in which it is going. In many cases, there will be drainage from the external opening. Some fistulas may not be visible on the skin’s surface. Doctor might advise MRI fistulogram of the anal area to get a better view of the fistula tract. Few patients may require colonoscopy to rule out IBD which causes recurrent fistula."}</p>
              </div>
              <div id="treatment" className={styles.Section2Question7} data-aos="fade-up">
                <h2 className="mt-5">Fistula in Ano Treatment in BENGALURU</h2>
                <p>
                  When it comes to <strong> best fistula treatment in Bengaluru,</strong> surgery is often the primary approach for effective management. While there may be some post-operative pain, bleeding and wound healing challenges, these are typically manageable with proper care. However, two critical aspects to discuss with your fistula surgeon in Bengaluru are incontinence and recurrence.
                </p>
                <ul className="">
                  <li>
                    <p><strong>Pain : </strong>Post-surgery pain is common, but advanced surgical techniques help minimize discomfort. Completely painless fistula surgery in Bengaluru may not be possible, but proper care can significantly reduce pain.</p>
                  </li>
                  <li>
                    <p><strong>Bleeding : </strong>A small amount of post-operative bleeding, such as oozing, is normal. The extent depends on the wound and procedure type. Trusting an experienced fistula specialist in Bengaluru ensures safe and effective care.</p>
                  </li>
                  <li>
                    <p><strong>{"Wound Healing : "}</strong>The wound size varies based on the fistula’s complexity and the chosen surgical procedure. Typically, healing takes about 2-3 weeks, especially under the care of a skilled fistula surgeon.</p>
                  </li>
                  <li>
                    <p><strong>Incontinence : </strong>{" Incontinence, or the inability to control bowel movements, is a crucial concern when considering fistula surgery. For high or complex fistulas, sphincter muscle cutting may be required, increasing the risk of incontinence. Opt for a renowned fistula treatment center in Bengaluru for better outcomes. "}</p>
                  </li>
                  <li>
                    <p><strong>Recurrence : </strong>{"Recurrence is a possibility in any fistula treatment. Simple fistulas managed with sphincter-cutting surgery often have a lower recurrence rate than complex cases treated with sphincterpreserving procedures. Discussing the recurrence risk with the best fistula surgeon Dr. Uday Ravi in Bengaluru is essential for informed decision-making."}</p>
                  </li>
                </ul>
              </div>
              <div id="methods-of-fistula-treatment" className={styles.Section2Question8} data-aos="fade-up">
                <h2 className="mt-5">Different Surgical Methods of Fistula Treatment:</h2>
                <p>
                  There are two main types of fistula surgery :
                </p>
                <ul className="">
                  <li>
                    <p><strong>Sphincter-Cutting Surgery</strong></p>
                  </li>
                  <li>
                    <p><strong>{"Sphincter-Preserving Surgery (SPS)"} : </strong>This approach is chosen when there’s a high risk of incontinence with sphincter-cutting surgery. While SPS reduces incontinence risk, it has a higher chance of recurrence compared to sphincter-cutting surgery. The recurrence rate varies depending on the specific procedure and surgeon’s skill.</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p><strong>Fistulotomy : </strong></p>
                    <p>This involves cutting along the whole length of the fistula to open it up so it heals as a flat scar. A fistulotomy is usually done in simple fistula where the risk of incontinence is less. It is not suitable for complex fistula</p>
                    <p>Dr. Uday Ravi Fistula Specialist Surgeon in Bengaluru uses a LASER as an adjunct to Fistulectomy to minimize the risk of damage to the sphincter muscle. Thus, with the added advantage of Laser, the chances of post-operative pain will be negligible.</p>
                    <div className='d-flex flex-column align-items-center'>
                      <Image src={AnalFistula} alt="Anal Fistula" className={styles.Section2PilesTreatment} />
                      <p className={`${styles.Section2PilesTreatmentPara}`}>Fig 2. Fistulotomy</p>
                      {/* <p>Dr. Uday Ravi<strong> Fistula Specialist Surgeon in Bengaluru</strong> uses a LASER as an adjunct to Fistulectomy to minimize the risk of damage to the sphincter muscle. Thus, with the added advantage of Laser, the chances of post-operative pain will be negligible.</p> */}
                    </div>
                  </li>
                  <li>
                    <p><strong>{"Ligation of the intersphincteric Fistula Tract (LIFT)"} : </strong></p>
                    <p>The ligation of the intersphincteric fistula tract (LIFT) procedure is a best treatment for fistulas that pass through the anal sphincter muscles, where a fistulotomy would be too risky. This is a highly efficient procedure with almost no recurrences or incontinence. Dr. Uday Ravi is a well-known fistula surgeon in Bengaluru, specializes in complexfistula surgery.</p>
                    <p>Dr. Uday Ravi has performed hundreds of modified LASER LIFT procedures with excellent results which is an advanced procedure for fistula treatment in Bengaluru.</p>
                  </li>
                  <li>
                    <p><strong>{"FiLaC ( Fistula-tract Laser Closure)"} : </strong></p>
                    <p>It is a minimally invasive fistula-in-ano surgery that keeps the sphincter intact. This technique attempts to gently remove the anal fistula by using laser energy. The flexible, all-around radiating fiber-optic probe is inserted into the fistula tract from the outside. Then the laser is slowly withdrawn. The inflammatory tissue is destroyed in a controlled manner and the fistula tract contracts. The anal gland that originally caused the fistula is inactivated. Dr. Uday Ravi does the best laser fistula treatment in Bengaluru.</p>
                    
                  </li>
                  <li>
                    <p><strong>{"VAAFT"} : </strong></p>
                    <p>Video-assisted anal fistula treatment (VAAFT) is a new minimally invasive and sphincter-saving endoscopic treatment for complex fistulas. The fistula tract and internal fistula are localized using a fistuloscope inserted through the external opening and under direct vision fistula tract is destroyed from the inside and closure of the internal opening is done by stapling or suturing or cutaneous-mucosal flap.</p>
                    
                    {/* <div className='d-flex flex-column'>
                      <h2 id='advantages'>Advantages</h2>
                      <ul className='d-flex flex-column row-gap-2'>
                        <li>No surgical wounds on the buttocks or perianal region.</li>
                        <li>The internal opening is precisely located which is important in the treatment of any fistula.</li>
                        <li>Less chance of damage to the sphincter muscle</li>
                      </ul>
                      <h2>Potential drawbacks</h2>
                      <ul className='d-flex flex-column row-gap-2'>
                        <li>{"The biggest argument against VAAFT is its high rate of recurrence (~30%)"}</li>
                        <li>Higher cost of treatment</li>
                      </ul>
                    </div> */}
                  </li>
                  <li>
                    <p><strong>{"FISTULA PLUG"} : </strong></p>
                    <p>The fistula plug is a 100% synthetic bio-absorbable scaffold. This plug is placed in the fistula tract. Over time cells from the body migrate into the scaffold and new tissue is generated as the body gradually absorbs the plug material, leaving no permanent material in the body.</p>
                    {/* <div className='d-flex flex-column'>
                      <h2>Advantages of Fistula Plug</h2>
                      <ul className='d-flex flex-column row-gap-2'>
                        <li>No cutting involved and no operation wound. Therefore it is associated with less pain and faster recovery.</li>
                        <li>No damage to the sphincter muscle.</li>
                      </ul>
                      <div className='d-flex flex-column align-items-center mt-4'>
                        <Image src={AnalFistula5} alt="Anal Fistula." className={styles.Section2PilesTreatment} />
                        <p className={`${styles.Section2PilesTreatmentPara}`}>{"Fig 7. FISTULA PLUG"}</p>
                      </div>
                      <h2>Potential Drawbacks</h2>
                      <ul className='d-flex flex-column row-gap-2'>
                        <li>Failures can occur due to the dislodgement of the plug from the fistula tract.</li>
                        <li>The plug can get infected</li>
                        <li>Failure of treatment can occur in 25-30% of cases</li>
                      </ul>
                    </div> */}
                  </li>
                  <li>
                    <p><strong>PILTEC : </strong>A modification of the LIFT procedure</p>
                    <p>
                      <strong>Dr. Uday Ravi</strong> a well known <strong>fistula surgeon</strong> pioneered the <strong>LASER procedure</strong> named PILTEC having the highest cure with zero incontinence rate.
                    </p>
                    <p>According to Dr. Uday Ravi, a successful fistula surgery requires proper diagnosis, a perfectly performed and reported MRI, along with the surgeon’s expertise and the method of surgery. Dr. Uday Ravi, thebest fistula surgeon in Bengaluru performs a single-setting surgery with a success rate of more than 90% including fistula with perianal abscess. It is not only about surgery Dr Uday Ravi and their team provide very good postoperative care which is one of the most important components in the complete cure of fistula.</p>
                    <div>
                      
                    </div>
                    <div id="why-fistula-recur" className={styles.Section2Question9}>

                      <h2>Post-operative care after fistula surgery</h2>
                      <ul className='d-flex flex-column row-gap-2 mt-3'>
                        <li>{"Take sitz baths (sit for 15-20 minutes in warm water with antiseptic solution) three times a day and after each bowel movement for the first few days."}</li>
                        <li>If you were given a topical ointment, place this over the anal skin and a little into the anal canal 2-3 times a day.</li>
                        <li>Don’t worry if you have some bleeding, discharge, or itching during your recovery. This is normal.</li>
                        <li>Avoid constipation.</li>
                        <li>Take stool softener before bedtime every day till wound healing. </li>
                        <li>The use of dry toilet tissue should be avoided. After bowel movements use a jet water cleaning, if possible, followed by taking a warm bath.</li>
                        <li>{"If you were given a prescription for an ointment, apply these two or three times a day at the edge of the anal opening and inside by finger (not by applicator)."}</li>
                        <li>Eat a regular diet including plenty of fresh fruit and vegetables. Drink 6-8 glasses of water a day.</li>
                      </ul>
                        <p>Connect with Dr. Uday Ravi your fistula surgeon if your temperature is greater than 101 degrees, significant bleeding, and unbearable pain.</p>
                    </div>
                  </li>
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