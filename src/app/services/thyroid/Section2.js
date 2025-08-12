
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import ThyroidImg1 from '../../assets/ThyroidImg1.png';
import ThyroidImg1New from '../../assets/thyroidImg1New.png';

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
    { id: 'thyroid', label: 'Thyroid',type:"heading" },
    { id: 'types', label: 'Types',type:"subheading" },
    { id: 'underactive-thyroid', label: 'Underactive Thyroid',type:"subheading" },
    { id: 'overactive-thyroid', label: 'Overactive Thyroid',type:"subheading" },
    { id: 'thyroid-nodules', label: 'Thyroid Nodules',type:"subheading" },
    { id: 'goiter', label: 'Goiter',type:"heading" },
    { id: 'complications', label: 'Complications',type:"subheading" },
    { id: 'prevention', label: 'Prevention',type:"subheading" },
    { id: 'thyroid-cancer', label: 'Thyroid Cancer',type:"heading" },
    { id: 'types-of-thyroid-cancer', label: 'Types Of Thyroid Cancer',type:"subheading" },
    { id: 'causes', label: 'Causes',type:"subheading" },
    { id: 'symptoms', label: 'Symptoms' ,type:"subheading"},
    { id: 'diagnosis', label: 'Diagnosis',type:"subheading" },
    { id: 'treatment', label: 'Treatment',type:"subheading" },
    { id: 'reasons', label: 'Reasons' ,type:"subheading"},
  ];


  const getBreadcrumbLabel = (id) => {
    const match = tocItems.find((item) => item.id === id);
    return match ? match.label : "Thyroid Surgery";
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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Thyroid Treatment in Bangalore</h1>
              <div id="thyroid" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >Thyroid diseases</h2>
                <p>{"Thyroid is a small, butterfly-shaped gland located at the front of the neck under the skin. It’s a part of endocrine system and controls many of our body’s important functions by producing and releasing (secreting) certain hormones. Thyroid’s main job is to control the speed of metabolism (metabolic rate), which is the process of how body transforms the food you consume into energy. All of the cells in the body need energy to function."}</p>
                <h2>When your thyroid isn’t working properly, it can impact your entire body.</h2>
                <p>{"Thyroid disorders refer to conditions that affect the thyroid gland, which is responsible for producing hormones that regulate metabolism, energy use, and overall body function. The thyroid produces thyroid hormones (T3 and T4), which control many of the body's processes. When the thyroid becomes overactive (hyperthyroidism) or underactive (hypothyroidism), it can lead to a range of symptoms and complications."}</p>
              </div>
              <div id="types" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5" style={{color:"#5c47dc"}}>Types of Thyroid Disorders</h2>
                <h4 className="" id="underactive-thyroid">Hypothyroidism <span style={{ fontWeight: "300" }}>{"(Underactive Thyroid) :"}</span></h4>
                <p>Occurs when the thyroid gland does not produce enough thyroid hormones, leading to a slowing of body functions.</p>
                <div className='d-flex flex-column justify-content-center px-lg-4'>
                  <h4 className="">Causes :</h4>
                  <ul className={`${styles.numberlist}`}>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Hashimoto’s Thyroiditis : </strong>
                      <p>An autoimmune disorder where the body’s immune system attacks the thyroid.</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Iodine Deficiency : </strong>
                      <p>{"Lack of iodine in the diet (rare in countries with iodine-rich salt)."}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Thyroid Surgery or Radiation Therapy : </strong>
                      <p>Removal or damage of the thyroid gland can lead to hypothyroidism.</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Medications : </strong>
                      <p>Certain drugs like lithium and amiodarone can interfere with thyroid hormone production.</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Pituitary Disorders : </strong>
                      <p>In rare cases, the pituitary gland doesn’t produce enough TSH to stimulate the thyroid.</p>
                    </li>
                  </ul>
                  <h4 className="mb-3">Symptoms :</h4>
                  <ul className='d-flex flex-column row-gap-2'>
                    <li>
                      Fatigue or feeling sluggish.
                    </li>
                    <li>
                      Weight gain.
                    </li>
                    <li>
                      Dry skin and hair.
                    </li>
                    <li>
                      Cold intolerance.
                    </li>
                    <li>
                      Constipation
                    </li>
                    <li>
                      Depression and mood swings.
                    </li>
                    <li>
                      Puffy face.
                    </li>
                    <li>
                      Slow heart rate.
                    </li>
                  </ul>
                  <h4 className=" mb-3">Diagnosis :</h4>
                  <ul>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Blood Tests : </strong>
                      <p>{" Elevated TSH (Thyroid Stimulating Hormone) and low T3 and T4 levels."}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Ultrasound : </strong>
                      <p>{"To evaluate the thyroid gland size or detect nodules."}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Antibody Testing : </strong>
                      <p>To detect autoimmune diseases like Hashimoto’s.</p>
                    </li>
                  </ul>
                  <h4 className=''>Hypothyroid Treatment in Bangalore:</h4>
                  <ul className={styles.sublistAlphabets}>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Levothyroxine : </strong>
                      <p>Synthetic thyroid hormone to replace the missing thyroid hormone.</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Monitoring : </strong>
                      <p>Regular blood tests to ensure the correct dose of medication.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="overactive-thyroid" className={styles.Section2Question2} data-aos="fade-up">
                <h2>Hyperthyroidism <span style={{ fontWeight: "100" }}>{"(Overactive Thyroid):"}</span></h2>
                <p>Occurs when the thyroid gland produces excessive thyroid hormones, speeding up body functions.
                </p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={ThyroidImg1New} alt="Thyroid" className={styles.Section2PilesImage1} />
                  <p>Fig 1. Hyperthyroidism</p>
                </div>
                <div className='d-flex flex-column justify-content-center px-lg-4'>
                  <h4 className='mb-3'>Causes : </h4>
                  <ul className="">
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Graves Disease : </strong>
                      <p>An autoimmune disorder that stimulates the thyroid to overproduce hormones.</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Thyroid Nodules : </strong>
                      <p>{"Benign growths (adenomas) or goiter that produce excessive thyroid hormone."}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Thyroiditis : </strong>
                      <p>Inflammation of the thyroid, sometimes following a viral infection, can lead to the release of excess thyroid hormone.</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Excess Iodine Intake : </strong>
                      <p>{"Overconsumption of iodine (from supplements or medications)."}</p>
                    </li>
                  </ul>
                  <h4 className="mb-3">Symptoms :</h4>
                  <ul className='d-flex flex-column row-gap-2'>
                    <li>
                      Unexplained weight loss.
                    </li>
                    <li>
                      Rapid heartbeat or palpitations.
                    </li>
                    <li>
                      Anxiety or irritability.
                    </li>
                    <li>
                      Heat intolerance.
                    </li>
                    <li>
                      Increased sweating.
                    </li>
                    <li>
                      Tremors
                    </li>
                    <li>
                      Sleep disturbances.
                    </li>
                    <li>
                      {"Bulging eyes (in Graves' disease)."}
                    </li>
                  </ul>
                  <h4 className="mb-3">Diagnosis :</h4>
                  <ul>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Blood Tests : </strong>
                      <p>{" Low TSH and elevated T3 and T4 levels."}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Radioactive Iodine Uptake Test : </strong>
                      <p>{"To determine the cause of hyperthyroidism (e.g., Graves' disease, thyroid nodules)."}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Ultrasound or Scans : </strong>
                      <p>To detect thyroid enlargement or nodules.</p>
                    </li>
                  </ul>
                  <h4 className='mb-3'>Hypothyroid Treatment in Bangalore:</h4>
                  <ul className={styles.sublistAlphabets}>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Antithyroid Medications : </strong>
                      <p>{"carbimazole or propylthiouracil (PTU) to reduce thyroid hormone production."}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Radioactive Iodine : </strong>
                      <p> To destroy overactive thyroid tissue.</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Beta-blockers : </strong>
                      <p> To control symptoms like rapid heart rate and tremors.</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Thyroidectomy : </strong>
                      <p> Surgical removal of part or all of the thyroid in severe cases.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="thyroid-nodules" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="">Thyroid Nodules:</h2>
                <p>
                  Solid or fluid-filled lumps that form in the thyroid gland.
                </p>
                <div className='d-flex flex-column justify-content-center px-lg-4'>
                  <h4 className='mb-3'>Causes : </h4>
                  <ul className="">
                    <li >
                      {"Most nodules are benign (non-cancerous)."}
                    </li>
                    <li>
                      {"Some nodules can cause thyroid dysfunction (hyperthyroidism or hypothyroidism)."}
                    </li>
                  </ul>
                  <h4 className="mb-3">Symptoms :</h4>
                  <ul className='d-flex flex-column row-gap-2'>
                    <li>
                      {"Often asymptomatic (no symptoms)."}
                    </li>
                    <li>
                      {"Difficulty swallowing or breathing (if large)."}
                    </li>
                    <li>
                      {"Possible signs of thyroid dysfunction (weight changes, mood shifts, etc.)."}
                    </li>
                  </ul>
                  <h4 className="mb-3">Diagnosis :</h4>
                  <ul>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Ultrasound : </strong>
                      <p>{" To assess the size and characteristics of the nodule."}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Fine Needle Aspiration Biopsy : </strong>
                      <p>{"To determine whether the nodule is benign or malignant"}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Blood Tests : </strong>
                      <p> To check thyroid hormone levels.</p>
                    </li>
                  </ul>
                  <h4 className=''>Treatment:</h4>
                  <ul className={styles.sublistAlphabets}>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Observation : </strong>
                      <p>{"Small, benign nodules often don’t require treatment."}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Surgical Removal : </strong>
                      <p> If the nodule is large, symptomatic, or cancerous.</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Radioactive Iodine or Medication : </strong>
                      <p> For overactive nodules.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="goiter" className={styles.Section2Question3} data-aos="fade-up">
                <h2 style={{color:"#5a4ae3"}}>Goiter:</h2>
                <p>
                  An enlargement of the thyroid gland, which can occur with both hyperthyroidism and hypothyroidism.
                </p>
                <div className='d-flex flex-column justify-content-center px-lg-4'>
                  <h4 className='mb-3'>Causes : </h4>
                  <ul className="">
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Iodine Deficiency : </strong>
                      <p> Leads to goiter formation as the thyroid attempts to compensate for low iodine levels.</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Graves&apos; Disease or Hashimoto&apos;s Thyroiditis : </strong>
                      <p>{"Both can cause inflammation and enlargement of the thyroid."}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Thyroid Nodules : </strong>
                      <p> Can cause a visible goiter.</p>
                    </li>
                  </ul>
                  <h4 className="mb-3">Symptoms :</h4>
                  <ul className='d-flex flex-column row-gap-2'>
                    <li >
                      Visible swelling in the neck.
                    </li>
                    <li>
                      {"Difficulty swallowing or breathing if the goiter is large."}
                    </li>
                  </ul>
                  <h4 className="mb-3">Diagnosis :</h4>
                  <ul>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Physical Examination : </strong>
                      <p>{" Visible or palpable swelling."}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Ultrasound and Blood Tests : </strong>
                      <p>{" To determine if the goiter is related to thyroid dysfunction."}</p>
                    </li>
                  </ul>
                  <h4 className='mb-3'>Treatment:</h4>
                  <ul >
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Iodine Supplementation : </strong>
                      <p>{"In cases of iodine deficiency"}</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Antithyroid Medications or Thyroid Hormone Replacement : </strong>
                      <p> Based on thyroid function.</p>
                    </li>
                    <li>
                      <strong style={{ color: "#5c47dc" }}>Surgery : </strong>
                      <p>  If the goiter is large or causes difficulty with swallowing/breathing</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="complications" className={styles.Section2Question4} data-aos="fade-up">
                <h2 >Complications of Thyroid Disorders</h2>
                <div className='d-flex flex-column justify-content-center px-lg-4'>
                  <strong className='my-2' style={{ color: "#5c47dc" }}>Untreated Hypothyroidism</strong>
                  <ul>
                    <li>It can lead to heart problems, infertility, and severe fatigue.</li>
                    <li>In extreme cases, can lead to a life-threatening condition called myxedema coma.</li>
                  </ul>
                  <strong className='my-2' style={{ color: "#5c47dc" }}>Untreated Hyperthyroidism:</strong>
                  <ul>
                    <li>It can lead to heart problems like arrhythmias, osteoporosis, and infertility.</li>
                    <li>Thyroid Storm: A rare, severe form of hyperthyroidism that is life-threatening.</li>
                  </ul>
                </div>
              </div>
              <div id="prevention" className={styles.Section2Question5} data-aos="fade-up">
                <h2 >Prevention and Monitoring</h2>
                <p>
                  {`Regular thyroid screening for those at risk (e.g., family history, autoimmune disease).
                  Monitoring thyroid function after thyroidectomy or treatment for thyroid cancer.
                  Lifelong follow-up for thyroid hormone replacement in patients with hypothyroidism.`}
                </p>
              </div>
              <div id="thyroid-cancer" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5" style={{color:"#5a4ae3"}}>THYROID CANCER</h2>
                <p>
                  {"Thyroid cancer is a type of cancer that develops from the cells of the thyroid gland (the butterfly-shaped gland located at the base of the neck). This gland produces hormones that regulate heart rate, blood pressure, body temperature and weight. It develops when cells in the thyroid gland genetically mutate or change. These abnormal cells begin multiplies in the thyroid and results in tumor or cancer. It is one of the most treatable forms of cancer if caught early."}
                </p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={ThyroidImg1} alt="ThyroidImg1" className={styles.Section2PilesImage1} />
                  <p>Fig 1. Thyroid Cancer</p>
                </div>
              </div>
              <div id="types-of-thyroid-cancer" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Types of Thyroid Cancer</h2>
                <p>Thyroid cancer has the potential to spread to other parts of the body. The following are the main types of thyroid cancer:</p>
                <ul>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Papillary Carcinoma : </strong>
                    <p>
                      It is the most common type of thyroid cancer found. This type of cancer arises from follicular cells which produce thyroid hormone, it grows slowly and often spread to the lymph nodes in the neck. Even if there is spread, there is a good chance for full recovery. It may occur at any age, but most commonly it is found in people ages 30 to 50.
                    </p>
                  </li>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Follicular thyroid cancer : </strong>
                    <p>
                      This type of cancer also arises in the follicular cells, it may spread into the lymph nodes and is more likely to spread into blood vessels and to distant organs such as lungs and bones. It usually affects middle-aged people, particularly women.
                    </p>
                  </li>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Medullary Thyroid Cancer : </strong>
                    <p>
                      This type of cancer initiates when there is an elevated level of calcitonin in blood. Unlike the other types, the risk of this cancer increases at an early stage, as it develops due to certain genetic syndromes.
                    </p>
                  </li>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Anaplastic Thyroid Cancer : </strong>
                    <p>
                      This type of cancer is rare but it is more severe and rapidly growing. This type of cancer is very difficult to treat. It usually affects people over the age of 60.
                    </p>
                  </li>
                </ul>
              </div>
              <div id="causes" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Causes</h2>
                <p>The exact cause of thyroid cancer is unknown, it occurs when there is a change in the DNA of the cells in thyroid, which results in the production of lump due to the uncontrollable growth of these cells.There are a number of factors that increase your risk of developing thyroid cancer, these include:</p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>Over or underactive thyroid</li>
                  <li>Family history</li>
                  <li>Exposure to radiation</li>
                  <li>Obesity</li>
                  <li>Gene mutation</li>
                  <li>Radiation therapy for head and neck cancer</li>
                </ul>
              </div>
              <div id="symptoms" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Symptoms</h2>
                <p>The most common symptoms of thyroid cancer include:</p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>A painless lump or swelling in the neck</li>
                  <li>Neck or throat pain</li>
                  <li>Swollen glands in the neck</li>
                  <li>Difficulty in swallowing</li>
                  <li>Difficulty in breathing</li>
                  <li>Vocal changes or hoarseness that lasts more than two weeks</li>
                  <li>A sore throat or a cough that doesn’t get better</li>
                </ul>
              </div>
              <div id="diagnosis" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Diagnosis of thyroid swelling/cancer:</h2>
                <p>Dr. Uday Ravi who is a one of the best doctor for thyroid swelling treatment. Doctor will do physical examination and examine for any swelling over the thyroid gland. He might advice further tests based on patients symptoms and the findings on examination</p>
                <ul className={styles.numberlist}>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Blood tests : </strong>
                    <p>A thyroid blood test checks hormone levels and gauges whether your thyroid is functioning properly.</p>
                  </li>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Biopsy : </strong>
                    <p>During a fine-needle aspiration biopsy, your healthcare provider removes cells from your thyroid to test for cancer cells. A sentinel node biopsy can determine if cancer cells have spread to your lymph nodes. Your provider may use ultrasound technology to guide these biopsy procedures.</p>
                  </li>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Radioiodine scan : </strong>
                    <p>This test can detect thyroid cancer and determine if the cancer has spread. You swallow a pill containing a safe amount of radioactive iodine (radioiodine). Over a few hours, your thyroid gland absorbs the iodine. Your healthcare provider uses a special device to measure the amount of radiation in the gland. Areas with less radioactivity need more testing to confirm the presence of cancer</p>
                  </li>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Imaging scans : </strong>
                    <p> Radioactive iodine scan, computed tomography (CT) and positron emission tomography (PET) scans can detect thyroid cancer and cancer spread.</p>
                  </li>
                </ul>
              </div>
              <div id="treatment" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Thyroid swelling/cancer treatment :</h2>
                <p>Thyroid cancer is usually very treatable, even if the patient has a more advanced stage, the main treatments for thyroid cancer are:</p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>
                    Radioactive Iodine Therapy
                  </li>
                  <li>
                    External Radiotherapy
                  </li>
                  <li>
                    Surgery
                  </li>
                  <li>
                    Chemotherapy
                  </li>
                </ul>
              </div>
              <div id="reasons" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Reasons for thyroidectomy: </h2>
                <p>A thyroidectomy may become necessary for the following conditions if non-surgical treatment fails to achieve desired results:</p>
                <ul>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Thyroid Cancer : </strong>
                    <p>Most thyroidectomies are performed to treat thyroid cancer. Thyroidectomy for cancer will likely remove most of the thyroid gland, if not all.</p>
                  </li>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>{"Non-cancerous Enlargement of the Thyroid (goiter)"} : </strong>
                    <p>Removing all or part of your thyroid gland is an option if you have a large goiter that is uncomfortable or causes difficulty breathing or swallowing or, in some cases, if the goiter is causing hyperthyroidism.</p>
                  </li>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>{"Overactive Thyroid (hyperthyroidism)"} : </strong>
                    <p>Hyperthyroidism is a condition in which your thyroid gland produces too much of the hormone thyroxine. If you have problems with anti-thyroid drugs and don’t want radioactive iodine therapy, thyroidectomy may be an option.</p>
                  </li>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Indeterminate Or Suspicious Thyroid Nodules : </strong>
                    <p>Some thyroid nodules can’t be identified as cancerous or non-cancerous after testing a sample from a needle biopsy. Doctors may recommend that people with these nodules have thyroidectomy if the nodules have an increased risk of being cancerous</p>
                  </li>
                </ul>
              </div>
              <div id="symptoms" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">What are the types of thyroidectomies?: </h2>
                <p>There are two main categories of thyroidectomies:</p>
                <ul className={styles.numberlist}>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>Partial thyroidectomies : </strong> <span>It involves the removal of part of the thyroid which includes:</span>
                    <ul className='mt-2'>
                      <li>
                        <strong style={{ color: "#5c47dc" }}>{"Hemi-thyroidectomy or thyroid lobectomy "} : </strong>
                        <p>Here the surgeon removes one lobe (one half) of the patient thyroid.</p>
                      </li>
                      <li>
                        <strong style={{ color: "#5c47dc" }}>{"Isthmusectomy "} : </strong>
                        <p>{"Here the surgeon removes the thyroid tissue between the two lobes. Surgeons do this surgery specifically for small tumours which are located in the isthmus."}</p>
                      </li>
                      <li>
                        <strong style={{ color: "#5c47dc" }}>{"Open thyroid biopsy "} : </strong>
                        <p> Here the surgeon removes a thyroid nodule directly.</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong style={{ color: "#5c47dc" }}>{"Total thyroidectomies"} : </strong>
                    <p>Removing all or part of your thyroid gland is an option if you have a large goiter that is uncomfortable or causes difficulty breathing or swallowing or, in some cases, if the goiter is causing hyperthyroidism.</p>
                  </li>
                </ul>
              </div>
              <div id="symptoms" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">When does a patient need thyroidectomy surgery? </h2>
                <p>The doctor may recommend thyroidectomy for any of the following reasons:</p>
                <ul className='d-flex flex-column row-gap-2'>
                  <li>
                    {"If a patient has a nodule (growth) on the thyroid that might be thyroid cancer."}
                  </li>
                  <li>
                    {"If a patient has a diagnosis of thyroid cancer."}
                  </li>
                  <li>
                    {"If a patient has a nodule or goitre that’s compressing the trachea or oesophagus"}
                  </li>
                  <li>
                    {"If a patient has a nodule or goitre that’s releasing excess thyroid hormone"}
                  </li>
                </ul>
                <p>Book an appointment with Dr. Uday Ravi if you are having thyroid swelling and looking for thyroid treatment doctor in Bangalore</p>
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
                    <h4 className={styles.Section2sidebarTitle}>Table Of Contents</h4>
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