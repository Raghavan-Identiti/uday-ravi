
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import weightLossmindmapimg1 from '../../assets/weightLossmindmapimg1.png';
import weightLossmindmapimg1New from '../../assets/weightLossmindmapimg1New.jpg';
import weightLossmindmapimg2New from '../../assets/weightLossmindmapimg2New.jpg';
import weightLossmindmapimg3New from '../../assets/weightLossmindmapimg3New.jpg';
import weightLossmindmapimg4New from '../../assets/weightLossmindmapimg4New.jpg';
import weightLossmindmapimg5New from '../../assets/weightLossmindmapimg5New.jpg';
import weightLossmindmapimg6New from '../../assets/weightLossmindmapimg6New.jpg';
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

  
  const getBreadcrumbLabel = (id) => {
  const match = tocItems.find((item) => item.id === id);
  return match ? match.label : "Weight Loss";
};
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
    { id: 'intragastric-balloon', label: 'Intragastric Balloon',type:"heading" },
    { id: 'benefits', label: 'Benefits',type:"subheading" },
    { id: 'ideal-candidate', label: 'Ideal Candidate' ,type:"subheading"},
    { id: 'types', label: 'Types' ,type:"subheading"},
    { id: 'intragastric-balloon-work', label: 'Intragastric Balloon Work' ,type:"subheading"},
    { id: 'how-balloon-is-placed', label: 'How Balloon Is Placed',type:"subheading" },
    { id: 'bariatric-surgery', label: 'Bariatric Surgery',type:"heading" },
    { id: 'pathology', label: 'Pathology' ,type:"subheading"},
    { id: 'outcome', label: 'Outcome' ,type:"subheading"},
    { id: 'bariatric-surgery-mechanism', label: 'Mechanism' ,type:"subheading"},
    { id: 'types-bariatric', label: 'Types' ,type:"subheading"},
    { id: 'investigations', label: 'Investigations' ,type:"subheading"},
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
        <div className="row" data-aos="fade-up" >
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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Weight loss Treatment in Bangalore</h1>
              <div id="intragastric-balloon" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >Intragastric balloon</h2>
                <p>Intragastric balloon treatment helps achieve better portion control by making you feel full after eating less food.</p>

                <p>The intragastric balloon for weight loss has emerged as one of the most promising and efficient solutions for weight loss in the past few years. This non-surgical weight loss treatment in Bangalore offers an effective solution for individuals struggling with obesity.</p>
                
                <p>It is also recommended for patients who are super obese and need to cut their weight to become fit to undergo bariatric surgery. Intragastric balloon is the most preferred option for obesity treatment without surgery.</p>
                <div className='d-flex flex-column align-items-center my-4'>
                  <Image src={weightLossmindmapimg1New} alt="Weight Loss" className={`${styles.Section2PilesImage1} mb-3 `} />
                  <p>Fig 1. Intragastric balloon</p>
                </div>
              </div>
              <div id="benefits" className={styles.Section2Question2} data-aos="fade-up">
                <h2>Benefits of an intra gastric balloon</h2>
                <ul className="">
                  <li>
                    <p><strong>Non-surgical approach :</strong> It is an entirely non-surgical procedure in which the balloon is placed endoscopically, or the patient has to swallow the balloon. The patient can return home within two hours of the procedure.</p>
                  </li>
                  <li>
                    <p><strong>Reversible procedure :</strong> It is completely reversible. In rare circumstances, if the balloon does not suit your body, it can be easily removed through the mouth.</p>
                  </li>
                  <li>
                    <p><strong>Reduced appetite and portion control :</strong> The intragastric balloon occupies almost 60% of the space in the stomach. As a result, even a tiny amount of food creates a feeling of fullness and reduces food intake. This controlled eating helps develop healthier eating habits and promotes weight loss.</p>
                  </li>
                  <li>
                    <p><strong>Temporary intervention :</strong> Depending upon the balloon&apos;s quality and type, the balloon&apos;s life in the stomach ranges from 4 months to one year. During this golden period, individuals not only achieve significant weight loss but also have an opportunity to adopt sustainable and healthy lifestyle changes.</p>
                  </li>
                </ul>
              </div>
              <div id="ideal-candidate" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">Ideal candidate for intra-gastric balloon</h2>
                <ul className="">
                  <li>
                    <p><strong>BMI requirement: </strong>An ideal candidate should have a BMI ranging between 30 and 40. It can be placed in super-obese patients who are unfit for surgery or as an adjunct to bariatric surgery.</p>
                  </li>
                  <li>
                    <p><strong>Unsuccessful weight loss attempts:</strong> Candidates have tried various weight-loss options or medical weight-loss programs but have yet to achieve the desired results.</p>
                  </li>
                  <li>
                    <p><strong>Willingness to commit to lifestyle changes: </strong>Individual commitments to adopt and maintain healthy eating and lifestyle habits form the core of a successful weight loss program following balloon therapy. Candidates should be motivated and prepared to make these long-term adjustments.</p>
                  </li>
                  <li>
                    <p><strong>Absence of gastrointestinal disorders: </strong>Candidates should be free from active gastrointestinal disorders, such as ulcers, strictures, or bleeding disorders.</p>
                  </li>
                </ul>
                
              </div>
              
              <div id="types" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">Types of intragastric balloon</h2>
                <p>
                  There are a variety of balloons available in the market, but the best and most recommended intragastric balloons include:
                </p>
                <ul className={styles.sublistAlphabets}>
                  <li>
                    <p><strong>Spatz balloon :</strong> It is one of the best and most popular balloons manufactured in the USA. The main advantage of the Spatz balloon is that it can be modified according to the patient&apos;s needs. It means the solution present in the balloon can be increased or decreased depending on the requirements of the patient. Another advantage of this balloon is the life span of approximately one year. However, Spatz balloon can be placed and filled in the stomach endoscopically.</p>
                  </li>
                  <li>
                    <p><strong>Allurion gastric Balloon :</strong> Allurion balloon has gained widespread acceptance because of their ease of insertion. It has to be simply swallowed and no endoscopy needs to be performed during insertion. It has an AI-based program that tracks your weight loss and warns you if sufficient progress has not been achieved. After four months, the balloon burst on its own and expelled from the body through stools.</p>
                  </li>
                </ul>
                <div className='d-flex flex-column align-items-center my-4'>
                  <Image src={weightLossmindmapimg2New} alt="Weight Loss" className={`${styles.Section2PilesImage1} mb-3 `} />
                  <p>Fig 2. Gastric balloon</p>
                </div>
              </div>
              <div id="intragastric-balloon-work" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">How does intragastric balloon work for weight loss?:</h2>
                <ul className="">
                  <li>
                    <p><strong>Reduced stomach capacity :</strong> The balloon occupies the majority of the space in the stomach. As a result, the patient experiences a sense of fullness with a small quantity of meals, which results in weight loss over time.</p>
                  </li>
                  <li>
                    <p><strong>Increased satiety signals :</strong> Due to the inflated balloon, the patient always feels full. As a result, cravings for foods and sweets significantly decrease, and appetite is suppressed.</p>
                  </li>
                  <li>
                    <p><strong>Behaviour modifications :</strong> Patients undergo several counseling sessions to adopt better lifestyle habits and eat healthy foods. This helps them maintain weight loss for an extended period, even after the balloon is removed.</p>
                  </li>
                </ul>
              </div>
              <div id="how-balloon-is-placed" className={styles.Section2Question6} data-aos="fade-up">
                <h2 className="mt-5 mb-4">How the balloon is placed?</h2>
                <p>The balloon is placed as a daycare procedure. The steps involved in the placement of the balloon are:</p>
                <ul className="">
                  <li>
                    <p><strong>Through evaluation : </strong>A thorough patient evaluation is done to assess its suitability.</p>
                  </li>
                  <li>
                    <p><strong>Anesthesia :</strong> Thepatient might require a bit of sedation depending on the type of balloon.</p>
                  </li>
                  <li>
                    <p><strong>Insertion of the balloon :</strong> The balloon is inserted endoscopically through the mouth, or the balloon has to be swallowed depending upon the type of balloon</p>
                  </li>
                   <li>
                    <p><strong>Confirmation :</strong> The conformation is done to determine whether the balloon is in the right place with the help of an endoscope or X-ray machine.</p>
                  </li>
                   <li>
                    <p><strong>Inflation of balloon :</strong> the balloon is then inflated or filled with a unique solution. The volume of the solution depends upon the size of the stomach and the patient&apos;s weight loss goals.</p>
                  </li>
                </ul>
                <div className='d-flex flex-column align-items-center my-4'>
                  <Image src={weightLossmindmapimg3New} alt="Weight Loss" className={`${styles.Section2PilesImage1} mb-3 `} />
                  <p>Fig 2. Gastric balloon</p>
                </div>
              </div>
              <div id="bariatric-surgery" className={styles.Section2Question7} data-aos="fade-up">
                <h2 className="mt-5" style={{color:"#5a4ae3"}}>Bariatric surgery</h2>
                <p>
                  Obesity is a condition of excess body weight i.e., when a person is 20% or more above the ideal body weight. Obesity results from a chronic positive energy balance regulated by a complex interaction between endocrine tissues and the central nervous system.
                </p>
                <div className={` d-flex flex-column align-items-center gap-3`}>
                  <Image src={weightLossmindmapimg4New} alt='weightLossmindmapimg1' className={styles.Section2PilesImage1}/>
                  <p >Fig 3. Obesity</p>
                </div>
              </div>
              <div id="pathology" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">Obesity pathology</h2>
                <ul className={styles.numberlist}>
                  <li>
                    Energy intake
                    <ul className={styles.sublistAlphabets}>
                      <li>Binge eating</li>
                      <li>Food addiction</li>
                    </ul>
                  </li>
                  <li>
                    Energy expenditure
                    <ul className={styles.sublistAlphabets}>
                      <li>Resting metabolic rate</li>
                      <li>Activity related energy expenditure</li>
                      <li>Thermogenesis</li>
                    </ul>
                  </li>
                  <li>
                    Gut microbiota
                    <ul className={styles.sublistAlphabets}>
                      <li>Dysbiosis</li>
                      <li>SCFAs</li>
                    </ul>
                  </li>
                  <li>
                    Hormone imbalance
                    <ul className={styles.sublistAlphabets}>
                      <li>Neurotransmitters</li>
                      <li>Leptin</li>
                      <li>Ghrelin</li>
                      <li>Peptide hormones</li>
                    </ul>
                  </li>
                  <li>
                    Genetic disorders
                    <ul className={styles.sublistAlphabets}>
                      <li>Polygenic obesity</li>
                      <li>Leptin melanocortin pathway</li>
                      <li>Epigenetic disorder</li>
                    </ul>
                  </li>

                </ul>
              </div>
              <div id="outcome" className={styles.Section2Question4} data-aos="fade-up">
                <h2 className="mt-5">Outcome of weightloss:</h2>
                <ul >
                  <li>
                    Diet-Induced Weight Loss
                    <ul className={`${styles.sublistAlphabets} d-flex flex-column row-gap-3`}>
                      <li>
                        Hormonal changes (with weight loss):
                        <ul className='d-flex flex-column row-gap-2 '>
                          <li>Ghrelin ↑ (increases hunger)</li>
                          <li>GLP-1 ↓, PYY 3-36 ↓, Leptin ↓ (satiety hormones decrease)</li>
                          <li>Bile acids ↓</li>
                        </ul>
                      </li>
                      <li className=''>
                        <p className='mb-2'>Gut microbiota changes</p>
                        <b>Perceptions:</b>
                        <ul className='d-flex flex-column row-gap-2 mt-2'>
                          <li>Hunger ↑</li>
                          <li>Satiety ↓</li>
                          <li>Food aversions ↑</li>
                        </ul>
                        <b>Outcome:</b>
                        <ul className='d-flex flex-column row-gap-2 mt-2'>
                          <li>Body activates homeostatic mechanisms to defend higher weight</li>
                          <li>80% regain of lost weight in 5 years</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Bariatric Surgery-Induced Weight Loss
                    <ul className={styles.sublistAlphabets}>
                      <li>
                        Hormonal changes :
                        <ul className='d-flex flex-column row-gap-2 '>
                          <li>Ghrelin ↓ (reduces hunger)</li>
                          <li>GLP-1 ↑, PYY 3-36 ↑, Leptin ↓ (but in a different pattern)</li>
                          <li>Bile acids ↑</li>
                        </ul>
                      </li>
                      <li className=''>
                        <p className='mb-2'>Gut microbiota shifts (favorable)</p>
                        <b>Perceptions:</b>
                        <ul className='d-flex flex-column row-gap-2 mt-2'>
                          <li>Hunger ↓</li>
                          <li>Satiety ↑</li>
                          <li>Food preferences change</li>
                        </ul>
                        <b>Outcome:</b>
                        <ul className='d-flex flex-column row-gap-2 mt-2'>
                          <li>Resets body weight “set point” to a lower weight</li>
                          <li>Average sustained weight loss of 18% even after 20 years post-RYGB (Roux-en-Y Gastric Bypass)</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p>Dieting alone triggers biological mechanisms that favour weight regain. In contrast, bariatric surgery leads to favourable hormonal and metabolic changes that help maintain long-term weight loss by resetting the body&apos;s weight set point.</p>
                <p>For those peoplewho have not responded to diet, physical activity, and other non-surgical means of weight loss, bariatric surgery is the last resort</p>
                <p>Bariatric surgery alters the gut-brain axis and allows one to lose a substantial amount of weight and at the same time switches off the hunger</p>
                <p>Bariatric surgery together with a comprehensive assessment support and follow-up program allows patients to achieve their target weight</p>
                <p>Many of the hormonal signals that cause weight gain or inability to lose weight are affected by these procedures, and it becomes easier to lose weight. But this still requires a healthy diet and a good exercise routine. These procedures are tools to treat a chronic disease, and cannot work alone.</p>
                <p><b>Bariatric surgery in Bangalore</b> is the last line of treatment for obesity and related diseases along with increased life expectancy and enhanced quality of life.</p>
                <p>Patients suffering from morbid obesity should undergo Bariatric Surgery to -</p>
                <ul>
                  <li>Reduce life-threatening risk factors</li>
                  <li>Improve self-esteem</li>
                  <li>Enhance the quality of life</li>
                </ul>
              </div>
              <div id='bariatric-surgery-mechanism' className={styles.Section2Question8} data-aos="fade-up">
                <h2 className="mt-5 mb-4">Mechanism of bariatric surgery</h2>
                <div className='d-flex flex-column align-items-center'>
                  <ul>
                    <li>
                      <strong style={{ color: "#5a4ae3" }}>Boosts Metabolism : </strong>Bariatric surgery leads to hormonal changes that can increase your resting metabolic rate. The body burns more calories even at rest, helping maintain long-term weight loss.
                    </li>
                    <li>
                      <strong style={{ color: "#5a4ae3" }}>Reduces Hunger Hormones : </strong> Surgeries like gastric bypass or sleeve gastrectomy lower levels of ghrelin, the hunger hormone. You feel full sooner and reduce calorie intake naturally.
                    </li>
                    <li>
                      <strong style={{ color: "#5a4ae3" }}>Improves Insulin Sensitivity : </strong>It helps reverse Type 2 Diabetes by improving how your body processes insulin. Stabilizes blood sugar levels more effectively than diet or exercise alone.
                    </li>
                    <li>
                      <strong style={{ color: "#5a4ae3" }}>Long-Term Weight Management : </strong> Helps lose 60-80% of excess body weight. Prevents the body from regaining weight by altering the digestive system’s absorption capacity.
                    </li>
                    <li>
                      <strong style={{ color: "#5a4ae3" }}>Resolves Obesity-Related Health Issues : </strong>Reduces the risk of heart disease, sleep apnea, hypertension, and joint problems. Improves overall quality of life and mental well-being.
                    </li>
                  </ul>
                  <Image src={weightLossmindmapimg5New} alt="weightLoss" className={styles.Section2PilesImage1} />
                  <p className={`${styles.Section2PilesTreatmentPara}`}>Fig 4. Vertical Sleeve Gastrectomy</p>
                </div>
              </div>
              <div id="types-bariatric" className={styles.Section2Question9} data-aos="fade-up">
                <h2 >Types of bariatric surgery</h2>
                <ul className={`d-flex flex-column row-gap-2 ${styles.numberlist}`}>
                  <li>Sleeve Gastrectomy.</li>
                  <li>Roux-en Gastric Bypass.</li>
                  <li>Mini Gastric Bypass.</li>
                  <li>Single anastomosis sleeve ileal bypass (SASI).</li>
                  <li>SADI- S or SIPS Surgery.</li>
                  <li>Endoscopic Sleeve Gastroplasty (ESG).</li>
                </ul>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={weightLossmindmapimg6New} alt="weightLoss" className={styles.Section2PilesImage1} />
                  <p className={`${styles.Section2PilesTreatmentPara}`}>Fig 5. Bariatric surgery procedures</p>
                </div>
              </div>
              {/* <div id="eligibility" className={styles.Section2Question9} data-aos="fade-up">
                <h2>Investigations before surgery</h2>
                <p>Today we can define the stages of obesity on the basis of body mass index, a parameter to define the stages of obesity.</p>

                <div className={styles.Section2Question9Wrapper}>
                  {[
                    {
                      title: `<h6>Expected % total <br/> body  weight loss at 2 <br/> years (-26%)</h6>`,
                      points: [
                        "Remove 80% of the stomach, result in early satiety.",
                        "↑GLP-1, PYY, insulin secretion, bile acid secretion and satiety.",
                        "↓Ghrelin, insulin resistance and hunger.",
                        "Faster gastric emptying."
                      ],
                      image: weightLossmindmapimg5grp1,
                    },
                    {
                      title: `<h6>Expected % total <br/> body weight loss at 2 <br/> years (-26% to 35%)</h6>`,
                      points: [
                        "↑GLP-1, PPY, insulin secretion, bile acid secretion and satiety.",
                        "↓Hunger, Insulin resistance and hepatic glucose production.",
                        "Nutrients malabsorption result due to bypass of small area of intestine.",
                        "Improvement in GERD."
                      ],
                      image: weightLossmindmapimg5grp2,
                    },
                    {
                      title: `<h6>Expected % total <br/> body weight loss at 2 <br/> years (-37%)</h6>`,
                      points: [
                        "↑GLP-1, Insulin secretion and satiety.",
                        "↑GLP-1, PYY, insulin secretion, bile acid secretion and satiety.",
                        "↓Ghrelin, insulin resistance and hunger.",
                        "Faster gastric emptying."
                      ],
                      image: weightLossmindmapimg5grp3,
                    }
                  ].map((item, idx) => (
                    <div key={idx} className={styles.Section2Question9Card}>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      >
                      </div>
                      <div className={styles.Section2Question9CardContent}>
                        <ul>
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        <Image src={item.image} alt={`image-${idx}`} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className={styles.pilesTreatment4sub}>Fig 5. Eligibility Criteria for Bariatric Surgery</p>
              </div> */}

              <div id="investigations" className={styles.Section2Question10} data-aos="fade-up">
                <h2 >Investigations before surgery</h2>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>
                    Complete blood count.
                  </li>
                  <li>Renal function test.</li>
                  <li>Liver function test.</li>
                  <li>Lipid profile.</li>
                  <li>Thyroid profile.</li>
                  <li>HbA1c</li>
                  <li>Vitamin B12 and folic acid.</li>
                  <li>ECG and 2D Echo.</li>
                  <li>Pulmonary function test.</li>
                  <li>Sleep study.</li>
                  <li>Upper GI endoscopy.</li>
                  <li>Chest X-ray.</li>
                  <li>Ultrasound abdomen.</li>
                </ul>
                <strong style={{color:"#5a4ae3"}}>Bariatric Surgeon Counselling:</strong>
                <ul>
                  <li>In order to exclude contraindications, to understand the pros and cons of the procedure</li>
                  <li>To know the post procedure management, expectations, and post operative follow up protocol</li>
                  <li>Surgeon should know the medical history and associated disease condition, so that procedure should not be affected by these conditions.</li>
                </ul>
                <strong style={{color:"#5a4ae3"}}>Psychiatrist Counselling:</strong>
                <ul>
                  <li>It is essential to exclude any psychiatric illness, eating disorder or substance abuse</li>
                  <li>To evaluate the willingness of the patient for lifestyle modifications to enhance the efficacy of the procedure</li>
                </ul>
                <strong style={{color:"#5a4ae3"}}>Dietitian Counselling: </strong>
                <ul>
                  <li>To learn the healthy way of eating, portion size , requirements of energy and protein</li>
                  <li>As this is a restrictive procedure so patient counselling is essential to avoid deficiency of any micro nutrients</li>
                  <li>Similar to any bariatric procedure, the patient should learn to do mindful eating, regular follow up for nutrition monitoring, regular physical activities and behaviour modification.</li>
                </ul>
              </div>
              <b>Book an appointment now with Dr Uday Ravi, the best doctor for bariatric surgery in Bangalore</b>
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
              //<div className={styles.Section2dropdownContainer}>
              //   <div
              //     className={styles.Section2dropdownToggle}
              //     onClick={() => setIsOpen(!isOpen)}
              //   >
              //     <span>Table Of Contents</span>
              //     {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              //   </div>
              //   {isOpen && (
              //     <ul className={styles.Section2tocList}>
              //       {tocItems.map(({ id, label }) => (
              //         <li key={id}>
              //           <a
              //             href={`#${id}`}
              //             onClick={(e) => {
              //               e.preventDefault();

              //               const section = document.getElementById(id);
              //               if (section) {
              //                 const sectionHeight = section.offsetHeight;
              //                 const viewportHeight = window.innerHeight;
              //                 const stickyOffset = 80; // <-- set your navbar height here

              //                 const scrollTo =
              //                   section.offsetTop - (viewportHeight / 2 - sectionHeight / 2) - stickyOffset;

              //                 window.scrollTo({
              //                   top: scrollTo,
              //                   behavior: 'smooth',
              //                   block: 'center',
              //                 });

              //                 setActiveId(id); // optional
              //               }
              //             }}
              //             className={activeId === id ? styles.active : ''}
              //           >
              //             {label}
              //           </a>


              //         </li>
              //       ))}
              //     </ul>
              //   )}
              // </div>
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