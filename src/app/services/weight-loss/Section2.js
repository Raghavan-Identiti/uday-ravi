
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import weightLossmindmapimg1 from '../../assets/weightLossmindmapimg1.png';
import weightLossmindmapimg2 from '../../assets/weightLossmindmapimg2.png';
import weightLossmindmapimg3 from '../../assets/weightLossmindmapimg3.png';
import weightLossmindmapimg4 from '../../assets/weightLossmindmapimg4.png';
import weightLossmindmapimg5grp1 from '../../assets/weightLossmindmapimg5grp1.png';
import weightLossmindmapimg5grp2 from '../../assets/weightLossmindmapimg5grp2.png';
import weightLossmindmapimg5grp3 from '../../assets/weightLossmindmapimg5grp3.png';
import weightLossmindmapimg6 from '../../assets/weightLossmindmapimg6.png';
import weightLossmindmapimg7 from '../../assets/weightLossmindmapimg7.png';
import weightLossmindmapimg8 from '../../assets/weightLossmindmapimg8.png';
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
    { id: 'bariatric-surgery-Mechanism', label: 'Bariatric Surgery Mechanism' ,type:"subheading"},
    { id: 'eligibility', label: 'Eligibility For Bariatric Surgery' ,type:"subheading"},
    { id: 'sleeve-sastrectomy', label: 'Sleeve Gastrectomy' ,type:"subheading"},
    { id: 'counselling', label: 'Counselling' ,type:"subheading"},
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
              </div>
              <div id="bariatric-surgery" className={styles.Section2Question7} data-aos="fade-up">
                <h2 className="mt-5" style={{color:"#5a4ae3"}}>Bariatric surgery</h2>
                <p>
                  Obesity is a condition of excess body weight i.e., when a person is 20% or more above the ideal body weight. Obesity results from a chronic positive energy balance regulated by a complex interaction between endocrine tissues and the central nervous system.
                </p>
                <div className={`${weightLossmindmapimg1} d-flex flex-column align-items-center gap-3`}>
                  <Image src={weightLossmindmapimg1} alt='weightLossmindmapimg1' className={styles.Section2PilesTreatment}/>
                  <p className={`${styles.Section2PilesTreatmentPara}`}>Fig 1. Obesity pathology</p>
                </div>
              </div>
              <div className={styles.Section2Question8} data-aos="fade-up">
                <h2 className="mt-5 mb-4">Weight loss activates powerful compensatory biological pathways</h2>
                <p>
                  Dr. Uday Ravi provides wide range of safe and efficient methods for the treatment of both external and internal hemorrhoids. His aim is to alleviate the discomfort and itching associated with hemorrhoids. Dr. Uday Ravi, a highly regarded senior surgeon who is a piles specialist doctor in Bengaluru is dedicated to offering the best possible options for piles treatment to his patients. Here are some of the treatment options he recommends:
                </p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={weightLossmindmapimg2} alt="weightLossmindmapimg1" className={styles.Section2PilesTreatment} />
                  <p className={`${styles.Section2PilesTreatmentPara}`}>Fig 2. Biological pathways</p>
                </div>
                <p>
                  Bariatric surgery is a last resort for those who have not responded to diet, physical activity, and other non-surgical means of weight loss.
                </p>
                <p>
                  Bariatric surgery alters the gut-brain axis and allows one to lose a substantial amount of weight and at the same time switches off the hunger
                </p>
                <p>
                  Bariatric surgery together with a comprehensive assessment support and follow-up program allows patients to achieve their target weight
                </p>
                <div className={` ${styles.Section2PilesTreatmentImages}`}>
                    <Image src={weightLossmindmapimg3} alt="weightLossmindmapimg3" className={`${styles.Section2PilesTreatment1} img-fluid`} />
                    <p className={`mt-3 ${styles.pilesTreatment1sub}`}>Fig 3. Bariatric surgery</p>
                </div>
                <p>
                  Bariatric surgery is the most successful long-term treatment for obesity. it is nearly impossible for people with morbid obesity to sustain weight loss through diet and exercise alone. According to “Set Point Theory” once your body has registered your higher weight as “normal,” it continues to try to return to that weight.
                </p>
                <p>
                  Bariatric surgery works by changing how your body manages what you eat, allowing healthy diet and lifestyle changes to be effective for sustained weight loss and health. Bariatric surgery remains the only effective and enduring treatment for morbid obesity.
                </p>
                <p>
                  Bariatric surgery is a gastrointestinal surgery with an alternation in the GI tract. This surgery is a last resort for those who have not responded to nutrition, physical activity, and other non-surgical means of weight loss.
                </p>
                <p>
                  Many of the hormonal signals that cause weight gain or inability to lose weight are affected by these procedures, and it becomes easier to lose weight. But this still requires a healthy diet and a good exercise routine. These procedures are tools to treat a chronic disease, and cannot work alone.
                </p>
                <p>
                  Bariatric surgery in Bangalore is the last line of treatment for obesity and related diseases along with increased life expectancy and enhanced quality of life.
                </p>
                <p>
                  Patients suffering from morbid obesity should undergo Bariatric Surgery to -
                </p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>
                    Reduce life-threatening risk factors
                  </li>
                  <li>Improve self-esteem</li>
                  <li>Enhance the quality of life</li>
                </ul>
              </div>
              <div id="bariatric-surgery-Mechanism" className={styles.Section2Question9} data-aos="fade-up">
                <h2 >Mechanism of bariatric surgery</h2>
                <div className={` ${styles.Section2PilesTreatmentImages}`}>
                  <Image src={weightLossmindmapimg4} alt="weightLossmindmapimg4" className={`${styles.Section2PilesTreatment1} img-fluid`} />
                  <p className={`mt-3 ${styles.pilesTreatment1sub}`}>Fig 4. Mechanism of Bariatric surgery</p>
                </div>
              </div>
              <div id="eligibility" className={styles.Section2Question9} data-aos="fade-up">
                <h2>Eligibility Criteria for Bariatric Surgery</h2>
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
              </div>

              <div id="sleeve-sastrectomy" className={styles.Section2Question10} data-aos="fade-up">
                <h2 >Sleeve Gastrectomy</h2>
                <ul className={styles.numberlist}>
                  <li><strong >{"Roux-en Gastric Bypass"}</strong>
                    <p>{"Roux -en-Y Gastric Bypass is a combination of restrictive and malabsorptivetechniques that enhances the surgery outcomes. This procedure restricts calories intake (Restrictive Procedure) and at the same time limits food absorption (Malabsorptive procedure)"}</p>
                    <ul className={`${styles.Section2Question10Innerlist} list-unstyled`}>
                      <li>
                        <span style={{ color: "#5a4ae3" }}>STEP 1 </span>
                        <p>{"Roux-en-Y Gastric bypass surgery is a procedure where a small portion of the upper portion of the stomach near the esophagus is separated from the rest of the stomach and a small pouch is created by stapling (This causes food restriction)"}</p>
                      </li>
                      <li>
                        <span style={{ color: "#5a4ae3" }}>STEP 2</span>
                        <p>{"The lower segment of the intestine joined to the small pouch of the stomach (Malabsorption). The upper segment of the intestine which carries digestive juices from the remnant stomach re-attached at the distal end of the rouex limb by stapler or by suturing, thereby diverting bile as well as intestinal secretion. In this procedure depending on the BMI approx. 125 -170cm of the small intestine is bypassed"}</p>
                      </li>
                    </ul>
                    <div className={` ${styles.Section2PilesTreatmentImages}`}>
                      <Image src={weightLossmindmapimg6} alt="weightLossmindmapimg6" className={`${styles.Section2PilesTreatment1} img-fluid`} />
                      <p className={`mt-3 ${styles.pilesTreatment1sub}`}>Fig 6. Roux-en Gastric Bypass</p>
                    </div>
                  </li>
                  <li>
                    <strong>
                      Mini Gastric Bypas
                    </strong>
                    <div className={` ${styles.Section2PilesTreatmentImages}`}>
                      <Image src={weightLossmindmapimg7} alt="weightLossmindmapimg7" className={`${styles.Section2PilesTreatment1} img-fluid`} />
                      <p className={`mt-3 ${styles.pilesTreatment1sub}`}>Fig 7. Mini Gastric Bypass</p>
                    </div>
                    <p>Mini gastric bypass is a simpler procedure as compared to Roux en gastric bypass as it involves less rerouting of the intestine, single anastomosis, and comparatively less surgery time.</p>
                    <p>Mini Gastric Bypass procedure combines the effect of restriction and malabsorption to lose weight. The upper portion of the stomach is created into a long gastric tube and a wide loop of the small intestine is sutured with the gastric tube, bypassing approx. 150-200 cm of the intestine, which causes a malabsorption effect.</p>
                    <p>The restrictive technique reduces the gastric capacity and induces early satiety, which causes less consumption of food</p>
                    <p>By contrast, the malabsorptive technique involves malabsorption of the food and alteration of the gut hormones which can improve metabolic diseases like fatty liver. Insulin resistance, glycemic control</p>
                  </li>
                  <li>
                    <strong>{"Single anastomosis sleeve ileal bypass (SASI)"}</strong>
                    <p>{"SASI bypass is a novel bariatric procedure that reaches a compromise between the effect of restriction and malnutrition. This procedure utilizes neuroendocrine mechanisms that bind the alimentary tract and the nervous system. Single anastomosis sleeve ileal bypass (SASI) surgery is divided into 2 parts:"}</p>
                    <p>{"The first stage is gastric sleeve resection, which supports weight loss by mechanism of restrictive procedure."}</p>
                    <p>{"The second stage is the sleeve ileal bypass, where undigested aliment reaches the ileum fast and trigger the good hormone release from the distal ileum. Modification of the intestinal transit changes the concentration of orexigenic and anorexigenic hormones. When the undigested food is introduced to the lower portion of the small bowel, a hormone is produced to send the information to the brain to stop the appetite by slowing down the peristalsis and gastric emptying."}</p>
                    <p>{"Food can pass through the duodenum and the jejunum, so this mechanism can reduce the negative effects of malabsorption. SASI-S also minimizes the risk of long-term nutritional problems and reduces reflux by dropping the pressure in stomach."}</p>
                    <p>{"It benefits from the effect of fast transit of indigested food to the ileum, where anorexigenic intestinal hormones are released."}</p>
                    <p>{"Apart from weight loss, the effect of SASI bypass is a rapid resolution of diabetes"}</p>
                    <h2>The advantage of SASI bypass is more term of diabetes resolution</h2>
                    <strong className='mb-4'>Advantages of SASI-S surgery:</strong>
                    <ul className='d-flex flex-column row-gap-2 my-3'>
                      <li>Early satiety and less hunger due to reduction in ghrelin production</li>
                      <li>Food can pass through the duodenum and the jejunum, so there is less malabsorption and lower risk of nutrition deficiencies in long term</li>
                      <li>Access to bile duct is easily available</li>
                      <li>Modification in the intestinal transit can give extra advantages in 70-90% diabetes resolution</li>
                      <li>Less risks of internal hernia</li>
                      <li>Less incidence of weight regains</li>
                      <li>Positive impact on acid reflux as pressure on the stomach is reduced</li>
                    </ul>
                    <strong>Advantages of SASI-S surgery:</strong>
                    <ul className='d-flex flex-column row-gap-2 my-3'>
                      <li>Patients with BMI greater than 40</li>
                      <li>Patients with BMI 35 and have one or more co-morbidities such as: Type 2 diabetes, sleep apnea, insulin resistance, dyslipidaemia and cardio vascular diseases</li>
                    </ul>
                  </li>
                  <li>
                    <strong>SADI- S or SIPS surgery</strong>
                    <p>SADI -S or SIPS Surgery also known as single anastomosis duodeno-ileal switch or stomach intestinal sparing surgery.</p>
                    <p>SADI -S is a combination of sleeve gastrectomy and duodenal switch surgery. This procedure involves two steps:</p>
                    <p>In the first step surgeon creates a sleeve like gastric sleeve gastrectomy, where 80% of the stomach is removed which reduces the food intake.</p>
                    <p>The second step of a SADI-S procedure involves creating the bypass where the surgeon will detach the intestine below the stomach and reattach it about 2 metres down. This way, food will bypass the part of the digestive tract that absorbs most nutrients and calories, and produces malabsorptive effect for weight loss, good glycemic control which helps in diabetes resolution,</p>
                    <h2 >Advantage of SADI-S surgery:</h2>
                    <ul className='d-flex flex-column row-gap-2 '>
                      <li>This procedure results into significant weight loss and results in 80-90% of excess weight loss</li>
                      <li>Diabetes resolution.</li>
                      <li>Low incidence of dumping syndrome </li>
                      <li>Minimal risk of ulceration at the anastomosis site.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>{"Endoscopic Sleeve Gastroplasty (ESG)"}</strong>
                    <p>Endoscopic sleeve gastroplasty is an innovative technique used as a bridge between conventional weight loss methods and bariatric surgery. This procedure is a non-invasive procedure for obesity treatment. In this procedure, the volume of the stomach is reduced by endoscopic suturing, which guarantees a reduced complication rate.</p>
                    <strong>{"Mechanisms of weight loss post Endoscopic sleeve gastroplasty:"}</strong>
                    <p>Endoscopic sleeve gastroplasty procedure generates preventive satiety due to the sewing of part of the stomach that produces hunger hormone. Endoscopic sleeve gastroplasty slows the gastric emptying of the stomach and reduces hunger.</p>
                    <strong>{"Indications of bariatric surgery:"}</strong>
                    <p>In morbid obese patients where, bariatric surgery in Bangalore is contraindicated can be performed as a primary procedure.</p>
                    <p>Endoscopic surgery can be performed as a revisional surgery in patients with inadequate weight loss or patient who needs revisional bariatric surgery</p>
                    <p>Patient with chronic diseases like liver diseases, renal diseases with obesity can undergo this procedure to reduce weight and to delay the progression of the disease</p>
                    <div className={` ${styles.Section2PilesTreatmentImages}`}>
                      <Image src={weightLossmindmapimg8} alt="weightLossmindmapimg8" className={`${styles.Section2PilesTreatment1} img-fluid`} />
                      <p className={`mt-3 ${styles.pilesTreatment1sub}`}>Fig 8. Endoscopic Sleeve Gastroplasty</p>
                    </div>
                    <p>A comprehensive pre procedure investigation and preoperative counselling session by surgeon, dietitian, and psychologist</p>
                    <strong>Essential steps for performing ESG</strong>
                    <ul className='d-flex flex-column row-gap-2 my-3'>
                      <li>Procedure is performed under general anaesthesia with endoscope and special suturing device i.e. Apollo Overstich device, which is a long and flexible tube with a camera and a set of suturing tools.</li>
                      <li>Surgeon insert the Overstich device through the patient’s throat into the stomach and sews a series of internal sutures in the stomach wall. This reduces the size of the gastric cavity and prevents its distension Procedures takes 60-90 minutes</li>
                      <li>One day hospitalisation for pain management, hydration and maintaining vitals</li>
                      <li>A special diet for 1 month prescribed by qualified dietitian</li>
                      <li>A vigorous follow up is essential</li>
                    </ul>
                    <strong>Advantages of endoscopic sleeve gastroplasty</strong>
                    <ul className='d-flex flex-column row-gap-2 mt-3'>
                      <li>Endoscopic sleeve gastroplasty ensures faster recovery and less pain</li>
                      <li>Patient can resume their work within 3 days after procedure</li>
                      <li>Patient can loose 25 to 30% of excess body weight</li>
                      <li>Procedure is reversible</li>
                    </ul>
                      <p className='mb-2'>The protocol before the operation is:</p>
                      <p className='m-0'>Preoperative Examination: Blood investigations, X ray, ECG, pulmonary function test, 2D Echo, Endoscopy</p>
                  </li>
                </ul>
              </div>
              <div id="counselling" className={styles.Section2Question9} data-aos="fade-up">
                <h2>Bariatric Surgeon Counselling:</h2>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>In order to exclude contraindications, to understand the pros and cons of the procedure</li>
                  <li>To know the post procedure management, expectations, and post operative follow up protocol</li>
                  <li>Surgeon should know the medical history and associated disease condition, so that procedure should not be affected by these conditions.</li>
                </ul>
              </div>
              <div id="" className={styles.Section2Question9} data-aos="fade-up">
                <h2 >Psychiatrist Counselling:</h2>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>It is essential to exclude any psychiatric illness, eating disorder or substance abuse</li>
                  <li>To evaluate the willingness of the patient for lifestyle modifications to enhance the efficacy of the procedure</li>
                </ul>
              </div>
              <div id="" className={styles.Section2Question9} data-aos="fade-up">
                <h2>Bariatric Surgeon Counselling:</h2>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>To learn the healthy way of eating, portionsize, requirements of energy and protein</li>
                  <li>As this is a restrictive procedure so patient counselling is essential to avoid deficiency of any micro nutrients</li>
                  <li>Similar to any bariatric procedure, the patient should learn to do mindful eating, regular follow up for nutrition monitoring, regular physical activities and behaviour modification.</li>
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