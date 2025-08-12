
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import DiabeticFootUlcer1 from '../../assets/Diabetic_Foot_Ulcer.png';
import DiabeticFootUlcer1New from '../../assets/Diabetic_Foot_UlcerNew.png';
import DiabeticFootUlcer2 from '../../assets/Diabetic_foot_syndrome_stages.png';
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
    { id: 'foot-ulcer', label: 'Foot Ulcer',type:"heading" },
    { id: 'symptoms', label: 'Symptoms',type:"subheading" },
    { id: 'causes', label: 'Causes',type:"subheading" },
    { id: 'risk-factors', label: 'Risk Factors',type:"subheading" },
    { id: 'procedures-to-be-taken', label: 'Procedures To Be Taken',type:"subheading" },
    { id: 'prevention', label: 'Prevention',type:"subheading" },
    { id: 'types', label: 'Types',type:"subheading" },
    { id: 'diagnosis', label: 'Diagnosis',type:"subheading" },
    { id: 'treatment', label: 'Treatment',type:"subheading" },
    { id: 'recovery-after', label: 'Recovery After Treatment',type:"subheading" }
  ];
  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Diabetes";
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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Diabetic and ulcer Treatment in Bangalore</h1>
              <div id="foot-ulcer" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >What is Diabetic Foot Ulcer?</h2>
                <p>A diabetic foot ulcer is a skin sore with skin thickness and skin loss on the foot due to vascular or neuropathic complications in type 1 and 2 diabetes mellitus patients. Approximately 34% of diabetic patients get diabetic foot ulcers during their lifetime. The risk factors of diabetic foot ulcers are as follows :</p>
                <ul className="">
                  <li>
                    <p>Type 2 diabetes is more prevalent than type 1.</p>
                  </li>
                  <li>
                    <p>Having diabetes for more than ten years.</p>
                  </li>
                  <li>
                    <p>Family history of diabetic foot ulcers.</p>
                  </li>
                </ul>
                <p>Foot ulcers are usually caused due to high blood sugar levels damaging the sensory nerves in peripheral neuropathy. This results in altered or complete loss of sensation and inability to feel pain. It is also caused by damage in the blood vessels due to the long duration of blood sugar and a decrease in the blood flow to the feet.</p>
                <div className={` ${styles.Section2PilesImgdiv}`}>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={DiabeticFootUlcer1New} alt="Diabetes Treatment" className={styles.Section2PilesImage1} />
                    <p>Fig 1. Diabetic Foot Ulcer</p>
                  </div>
                </div>
              </div>
              <div id="symptoms" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5">What are the Symptoms of Diabetic Foot Ulcer?</h2>
                <p>The most common symptom of diabetic foot ulcers is black tissue surrounding the ulcer, which forms because of the absence of healthy blood flow to the area around the ulcer. Also, you might see partial or complete tissue death due to infection around the affected area, causing pain, numbness, and pus discharge. However, some other signs and symptoms of diabetic foot ulcers are :</p>
                <ul className="">
                  <li>
                    <p>Darkened skin on the affected area</p>
                  </li>
                  <li>
                    <p>Numbness</p>
                  </li>
                  <li>
                    <p>Loss of hair around the affected area</p>
                  </li>
                  <li>
                    <p>Pain and tingling</p>
                  </li>
                  <li>
                    <p>Loss of sensation</p>
                  </li>
                </ul>
                <p>Also, look out for the following symptoms of diabetic foot ulcers :</p>
                <ul className="">
                  <li>
                    <p>Discharge of fluid or pus from the ulcer</p>
                  </li>
                  <li>
                    <p>Foul smell and swelling</p>
                  </li>
                  <li>
                    <p>{"Changes in the skin or toenails (cuts, blisters, sores, or calluses)"}</p>
                  </li>
                  <li>
                    <p>Skin discolouration and redness at times.</p>
                  </li>
                </ul>
                <p>Sometimes, diabetic foot ulcers don&apos;t show symptoms until they become infected.</p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={DiabeticFootUlcer2} alt="Piles Treatment" className={styles.Section2PilesImage2} />
                  <p>Fig 2. Stages of Diabetic Foot Syndrome</p>
                </div>
              </div>
              <div id="causes" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">What Causes Diabetic Foot Ulcers?</h2>
                <p>
                  People with diabetes are far more susceptible of foot ulcers because of the following causes:
                </p>
                <ul className={`${styles.sublistAlphabets}`}>
                  <li>
                    <strong>
                      Hyperglycaemia

                    </strong>
                    <p>Hyperglycaemia refers to the presence of high blood sugar or glucose levels. One problem with high blood sugar is that it can slow the healing of infected foot ulcers. Thus, people with type 2 diabetes have more difficulty fighting off infections from ulcers.</p>
                  </li>
                  <li>
                    <strong>
                      Poor blood circulation

                    </strong>
                    <p>One of the most common vascular diseases is poor blood circulation due to the high amount of sugars in the blood - and it is a common cause of foot ulcers in people with diabetes. Simply put, people with diabetes have poor blood circulation, and as a result, far lesser blood reaches the feet. The lack of proper blood circulation can lead to the formation of ulcers.</p>
                  </li>
                  <li>
                    <strong>
                      Nerve damage
                    </strong>
                    <p>One of the long-term effects caused by high blood sugar is that it causes damage to nerves. Damaged nerves can make one feel tingly and painful in the beginning. On the other hand, when the nerve damage is complete, it reduces or total loss of any sensitivity in the feet to pain. The result is painless wounds that may remain ignored or take the shape of ulcers.</p>
                  </li>
                  <li>
                    <strong>
                      Irritated or wounded feet
                    </strong>
                    <p>The irritation and wounds can often lead to ulcers in the feet.</p>
                  </li>
                </ul>
              </div>
              <div id="risk-factors" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">The Critical Risk Factors For Diabetic Foot Ulcers</h2>
                <p>
                  As mentioned earlier, everyone with diabetes is also at risk of foot ulcers. The ulcers may have several causes, and several factors lead to an increased risk for the disease, including the following:
                </p>
                <ul className={`${styles.sublistAlphabets}`}>
                  <li>
                    <p>Wrong kind of shoes that fit poorly.</p>
                  </li>
                  <li>
                    <p>Shoes made of poor-quality material.</p>
                  </li>
                  <li>
                    <p>Poor foot hygiene habits such as not washing feet often enough or not drying them after washing.</p>
                  </li>
                  <li>
                    <p>Ignoring the trimming of or improper trimming of toenails.</p>
                  </li>
                  <li>
                    <p>Excessive alcohol consumption having high-calorie content contributes to diabetes.</p>
                  </li>
                  <li>
                    <p>Eye diseases from diabetes may also signify increased chances of getting ulcers.</p>
                  </li>
                  <li>
                    <p>Heart disease can affect blood flow.</p>
                  </li>
                  <li>
                    <p>Kidney disease as it affects blood flow.</p>
                  </li>
                  <li>
                    <p>Obesity as it magnifies the effects of diabetes.</p>
                  </li>
                  <li>
                    <p>Tobacco use as it inhibits blood circulation.</p>
                  </li>
                  <li>
                    <p>Diabetic foot ulcers are also most common in older men.</p>
                  </li>
                </ul>
              </div>
              <div id="procedures-to-be-taken" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Procedures to Be Taken</h2>
                <p>
                  Diabetic foot infections/ulcers is very common in India. When you have diabetic foot ulcers, it is recommended to stay off the feet. This is because pressure from walking can lead to painful experiences and might worsen the condition. Dr. Uday Ravi might recommend you wear the following to prevent the pain:
                </p>
                <ul className="">
                  <li>
                    <p>Shoes for diabetes people to prevent corns and calluses</p>
                  </li>
                  <li>
                    <p>Foot braces</p>
                  </li>
                  <li>
                    <p>Casts</p>
                  </li>
                  <li>
                    <p>Compression wraps</p>
                  </li>
                </ul>
                <p>
                  You must see a diabetic foot specialist Dr. Uday Ravi immediately for a diabetic foot ulcer treatment. This is because the infection is a severe complication of a foot ulcer.
                </p>
              </div>
              <div id="prevention" className={styles.Section2Question6} data-aos="fade-up">
                <h2 className="mt-5 mb-4">How to prevent diabetic foot ulcer/infections?</h2>
                <ul className={`${styles.numberlist}`}>
                  <li>
                    <p>Examine your feet everyday. Check for cuts, rankles, redness, enlarging or nail issues. Utilize an amplifying hand mirror to check out at the lower part of your feet. Call your doctor in the event that you notice anything.</p>
                  </li>
                  <li>
                    <p>Wash feet in lukewarm, water. Keep your feet clean by washing them every day. Utilize just room temperature water you would use on an infant.</p>
                  </li>
                  <li>
                    <p>Be delicate while washing your feet. Wash them utilizing a delicate washcloth or wipe. Dry by smudging or tapping and cautiously dry between the toes.</p>
                  </li>
                  <li>
                    <p>Moisturize your feet but not between your toes. Utilize a lotion every day to hold dry skin back from tingling or breaking. Yet, don&apos;t Moisturize between the toes-that could energize parasitic contamination.</p>
                  </li>
                  <li>
                    <p>Wear socks to bed. If your feet get cold at night, wear socks. Never use a heating pad or a hot water bottle.</p>
                  </li>
                  <li>
                    <p>Cut nails cautiously. Cut them straight across and document the edges. Try not to cut them shorter, as this could prompt ingrown toenails.</p>
                  </li>
                  <li>
                    <p>Never treat corns or calluses yourself. No &quot;restroom medical procedure&quot; or medical pads. Visit diabetic foot specialist Dr. Uday Ravi for proper treatment.</p>
                  </li>
                  <li>
                    <p>Wear perfect, dry socks. Change them every day.</p>
                  </li>
                  <li>
                    <p>Consider socks made explicitly for patients living with diabetes. These socks have additional padding, don&apos;t have plastic tops, are higher than the lower leg and are produced using fibres that wick dampness away from the skin.</p>
                  </li>
                </ul>
              </div>
              <div id="types" className={styles.Section2Question7} data-aos="fade-up">
                <h2 className="mt-5">Types of Diabetic Foot Ulcers</h2>
                <p>
                  Diabetic foot ulcers can occur anywhere and anytime if you suffer from type 2 diabetes mellitus. Several types enlisted below require extensive foot ulcer treatment for diabetes.
                </p>
                <ul className="">
                  <li>
                    <strong>Neuropathic Ulcers</strong>
                    <p>Neuropathy or nerve damage ulcers are one of the long-term complications of type 2 diabetes. It damages the nerves that carry the touch sensation, temperature, and pain to the feet and legs. This ulcer is usually caused by trauma, which we neglect due to the lack of sensation around the affected areas. Sores and calluses are formed in these areas, and as they become thick, they traumatize the area beneath the skin. Hence, any cuts or bruises, that are left unnoticed, can get severe and form ulcers.</p>
                  </li>
                  <li>
                    <strong>Neuroischemic Ulcers</strong>
                    <p>Neuroischemic ulcers have a high chance of amputation, requiring an all-inclusive foot ulcer treatment for diabetes. This is because they do not heal properly, and they go deep down into skin and damage the tissue and bones. They are pale yellow and might have thin film skin, which is sometimes raised. Also, they usually grow on toenails. </p>
                  </li>
                  <li>
                    <strong>Ischemic Ulcers</strong>
                    <p>Ischemic means reduced blood flow to some parts of the body, which damages tissues and causes the cells to die. Ischemic ulcers occur when there is an abnormal narrowing of arteries, also known as peripheral artery disease. These are slow-healing and rapidly damaging ulcers. They are usually pink and have shallow open lesions with pink tissue surrounding them. Also, dry ulcers look like black necrotic scabs. </p>
                  </li>
                </ul>
              </div>
              <div id="diagnosis" className={styles.Section2Question8} data-aos="fade-up">
                <h2 className="mt-5 mb-4">Diagnosis of Diabetic Foot Ulcers</h2>
                <p>
                  You can get your diabetic foot ulcer diagnosed at the best diabetic foot specialist, Dr. Uday Ravi. Once you visit diabetic foot surgeon Dr. Uday Ravi, he can tell you the type of ulcer you have by -
                </p>
                <ul className={`${styles.sublistAlphabets}`}>
                  <li>
                    <p>The appearance of the ulcer</p>
                  </li>
                  <li>
                    <p>Location of the ulcer</p>
                  </li>
                  <li>
                    <p>The appearance of the surrounding skin and the border of the ulcer.</p>
                  </li>
                </ul>
                <p>
                  The doctor will ask you a few questions to rule out certain skin conditions. Based on these, the doctors will ask you to do the following tests -
                </p>
                <ul className={`${styles.sublistRomans}`}>
                  <li>
                    <p>X-rays to assess the bone alignment</p>
                  </li>
                  <li>
                    <p>MRI scans generate 3D images of soft tissues to see the extent of the damage.</p>
                  </li>
                  <li>
                    <p>Blood tests if there are signs of infections, such as redness, swelling, and warmth in the foot.</p>
                  </li>
                </ul>
              </div>
              <div id="treatment" className={styles.Section2Question9} data-aos="fade-up">
                <h2 className="mt-5">Diabetic Foot Ulcer/InfectionTreatment in Bangalore</h2>
                <p>
                  The treatment of diabetic foot ulcers involves a multi-faceted approach. Some of the most important ways of tackling the problem are the following:
                </p>
                <ul className={`${styles.numberlist}`}>
                  <li>
                    <strong>Avoid using affected feet</strong>
                    <p>First, if you have a diabetic foot, you may want to avoid standing or walking - stay off your feet to prevent pain. It is not about pain; putting unnecessary pressure or stress can worsen the infection, and the ulcer may expand.</p>
                  </li>
                  <li>
                    <strong>Custom footwear options</strong>
                    <p>There are several treatment options that Dr. Uday Ravi may recommend. It may include certain wearable items such as: </p>
                    <ul className={`${styles.sublistAlphabets}`}>
                      <li>
                        <p>Meet a podiatrist and get custom shoes specifically designed for people with diabetes. They are a crucial part of diabetic foot ulcer care.</p>
                      </li>
                      <li>
                        <p>Casts intended for the purpose</p>
                      </li>
                      <li>
                        <p>Foot braces for people with diabetes</p>
                      </li>
                      <li>
                        <p>Compression wraps made explicitly for the purpose</p>
                      </li>
                      <li>
                        <p>Shoe inserts that provide further protection to feet against corns and calluses</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Ointment</strong>
                    <p>Doctor may prescribe the best ointment for diabetic foot ulcer after carefully analysing your foot. This ointment should be applied as instructed. Finding the right kind of diabetic foot ulcer treatment in Bangalore is important to ensure effective treatment.</p>
                  </li>
                  <li>
                    <strong>Debridement</strong>
                    <p>Debridement is a crucial tactic for diabetic foot ulcer care. It refers to removing any dead skin or foreign objects that may have caused the ulcer. Doctor may do this to remove the cause of the issue and initiate or fasten the healing process.</p>

                  </li>
                  <li>
                    <strong>Measures to prevent infection</strong>
                    <p>In case you currently have a foot ulcer, the following are some of the essential measures to prevent its infection and are also an important part of diabetic foot ulcer care:</p>
                    <ul className={`${styles.sublistAlphabets}`}>
                      <li>
                        <p>Regular foot baths</p>
                      </li>
                      <li>
                        <p>Disinfecting the skin around an ulcer</p>
                      </li>
                      <li>
                        <p>Keep the ulcer dry</p>
                      </li>
                      <li>
                        <p>Frequent dressing changes</p>
                      </li>
                      <li>
                        <p>Enzyme treatments</p>
                      </li>
                      <li>
                        <p>Dressings containing calcium alginates. They will prevent the growth of harmful bacteria.</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Medication</strong>
                    <p>Dr. Uday Ravi may prescribe antibiotics, anticlotting medications, or antiplateletsto help treat the ulcers if the infection progresses, even after preventive or anti-pressure treatments mentioned above.</p>
                  </li>
                  <li>
                    <strong>Treatment of infections with antibiotics</strong>
                    <p>An infection of the feet is a rather severe complication of foot ulcers and requires immediate treatment. Not all infections are treated the same way, and one must determine which antibiotic will work best to treat the inflection with an antibiotic. Doctor may send pus culture and sensitivity to find out the organism and the antibiotics sensitive to it.</p>
                    <p>Please note that many of these antibiotics may attack Staphylococcus aureus, and it is a bacteria known to cause staph infections. They may also attack ß-haemolytic Streptococcus - a bacteria typically found in human intestines. Thus, doctor must be well aware of your other health conditions, especially those that may increase the risk of you getting infected by these harmful bacteria, including HIV and any liver problems.</p>
                  </li>
                  <li>
                    <strong>Surgical procedures</strong>
                    <p>In the worst of cases, a surgical procedure may become imperative as the diabetic foot ulcer treatment. The surgery can help alleviate the pain caused by pressure around the ulcer by shaving down the bone and removing foot abnormalities like bunions and hammertoes. Some surgeries may need to replace the skin with synthetic substitutes. Surgery may be necessary to amputate the leg in the most unfortunate cases.</p>
                    <p>Amputations are not needed in most cases of diabetic foot ulcers, and it is only an option left as a last resort.</p>
                    <p>Improving blood circulation to the foot or affected area with ulcer or wound.
                      You should make a point of getting the best diabetic foot ulcer treatment doctor in Bangalore. Dr. Uday Ravi may give medicines or plan an angioplasty to improve the circulation to the affected area in the foot. Along with that, wound care, off loading the feet will be suggested simultaneously.
                    </p>
                  </li>
                </ul>
              </div>
              <div id="recovery-after" className={styles.Section2Question9} data-aos="fade-up">
                <h2 className="mt-5">Recovery After Diabetic Foot Ulcer Treatment</h2>
                <p>
                  Recovering from diabetic foot ulcers is pretty viable if you follow every medical advice your doctor gives. You need to keep your ulcer clean and disinfected. Also, to prevent the formation of new ulcers, doctor recommends visiting a podiatrist for custom orthotic shoe inserts to align the bones by distributing the body&apos;s weight evenly during movement. This eliminates the stress that is susceptible to ulcers.
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
              <div className={styles.stickyWrapper} data-aos="fade-up">
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