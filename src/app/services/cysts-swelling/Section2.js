
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';
import Cysts_SwellingImg1 from '../../assets/Cysts_SwellingImg1.png';
import Cysts_SwellingImg2 from '../../assets/Cysts_SwellingImg2.png';
import Cysts_SwellingImg3 from '../../assets/Cysts_SwellingImg3.png';
import Cysts_SwellingImg4 from '../../assets/Cysts_SwellingImg4.png';
import AOS from 'aos';             // Import AOS
import 'aos/dist/aos.css';        // Import AOS styles
import { FaChevronDown } from 'react-icons/fa'; // Custom icon
import FaShieldAlt from '../../assets/Group158.png'; // Use your actual SVG or PNG
import Section4 from "./Section4";
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
    { id: 'lipoma', label: 'Lipoma', type: "heading" },
    { id: 'types', label: 'Types', type: "subheading" },
    { id: 'causes', label: 'Causes', type: "subheading" },
    { id: 'diagnosis', label: 'Diagnosis', type: "subheading" },
    { id: 'sebaceous-cyst', label: 'Sebaceous Cyst', type: "heading" },
    { id: 'symptoms-of-sebaceous-cysts', label: 'Symptoms', type: "subheading" },
    { id: 'diagnosis-sebaceous-cysts', label: 'Diagnosis', type: "subheading" },
    { id: 'warts', label: 'Warts', type: "heading" },
    { id: 'treatment-warts', label: 'Treatment Warts', type: "subheading" },
    { id: 'abscess', label: 'Abscess', type: "subheading" },
    { id: 'types-abscesses', label: 'Types Of Abscesses', type: "subheading" },
    { id: 'abscess-developed', label: 'Abscess Developed', type: "subheading" },
    { id: 'symptoms-abscess', label: 'Symptoms Abscess', type: "subheading" },
    { id: 'methods-abscess', label: 'Methods For Abscess', type: "subheading" },
    { id: 'abscess-treatment', label: 'Abscess Treatment', type: "subheading" },
    { id: 'corns', label: 'Corns', type: "heading" },
    { id: 'corn-treatment', label: 'Corn Treatment', type: "subheading" },
    { id: 'calluses', label: 'Calluses', type: "subheading" },
  ];


  const getBreadcrumbLabel = (id) => {
    const match = tocItems.find((item) => item.id === id);
    return match ? match.label : "Cysts & Swellings";
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
              <h1 className={styles.Section2Title} data-aos="fade-up">Best Cysts & Swelling Treatment in Bangalore</h1>
              <div id="lipoma" className={styles.Section2Question1} data-aos="fade-up">
                <h2 >What is Lipoma ?</h2>
                <ul className='d-flex flex-column row-gap-2 mt-3'>
                  <li>Lipomas are slowly growing lump of non- cancerous fat cells that form between the skin and underlying muscle layer.</li>
                  <li>They are usually soft and smooth to touch and can vary in size.</li>
                  <li>They are usually painless and tend to move easily when pressed.</li>
                  <li>They can form anywhere in the body but most commonly occur on the neck, shoulders, back, abdomen, arms, and thighs.</li>
                  <li>They are usually harmless but can cause discomfort or pain depending on their size and location.</li>
                </ul>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={Cysts_SwellingImg1} alt="Cysts_SwellingImg1" className={styles.Section2CystsImage1} />
                  <p>Fig 1. Lipoma</p>
                </div>
              </div>
              <div id="types" className={styles.Section2Question7} data-aos="fade-up">
                <h2 className="mt-5">Different types of Lipoma</h2>
                <p>There are four main types of lipomas:</p>
                <ul>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Subcutaneous Lipomas:</strong> are the most common type of lipoma. They form just under the skin, and are usually soft and rubbery to the touch. Subcutaneous lipomas can occur anywhere on the body, but are most commonly found on the trunk, shoulders, neck, and arms.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Intramuscular Lipomas </strong> form within the muscles, and are often firm and Painful to the</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Intermuscular Lipomas:</strong> form between the muscles, and can be either soft or hard to the touch. Intermuscular lipomas are most commonly found in the forearm or calf region.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Visceral Lipomas :</strong> form inside the body cavities, including around organs such as the heart, kidneys, or liver. Visceral lipomas are typically not palpable from the outside of the body.</p>
                  </li>
                </ul>
              </div>
              <div id="causes" className={styles.Section2Question2} data-aos="fade-up">
                <h2 className="mt-5">Causes of Lipoma:</h2>
                <p>The exact cause of lipomas is never established. However, some factors that may contribute to the development of lipomas include:
                </p>
                <ul className="">
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Genetics : </strong>  Lipomas can develop due to genetic tendency resulting in formation of multiple lipomas all over body.</p>
                  </li>
                  <li>
                    <p><strong>Injury : </strong> Although rare, but sometimes trauma or injury can trigger the growth of lipomas.</p>
                  </li>
                  <li>
                    <p><strong>Conditions : </strong> Certain congenital conditions like Adiposis Dolorosa or Madelung&apos;s disease result in the formation of multiple lipomas. Certain rare conditions like Gardner&apos;s syndrome or Cowden syndrome also increase the risk for lipoma formation.</p>
                  </li>
                </ul>
              </div>
              <div id="diagnosis" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5">Diagnosis of Lipomas</h2>
                <ul className='mt-3'>
                  <li>
                    <p>Dr. Uday Ravi diagnoses lipomas in almost all cases with physical and clinical examination. However additional tests may be recommended in certain cases.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Imaging Studies :</strong> Ultrasound, MRI, or CT scans can provide detailed images of the lump and its location within the body.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>FNAC or Biopsy : </strong> Rarely, a small tissue sample or few fat cells may be taken and examined under a microscope to confirm the diagnosis.</p>
                  </li>
                </ul>
                <strong>Best Lipoma Treatment in Bangalore</strong>
                <ul className={`${styles.numberlist} mt-3`}>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Liposuction for Lipomas : </strong> Liposuction plays a significant role in the management of lipomas but has its own indications and limitations. It is most effective for lipomas which are very superficial, small and soft in consistency. </p>
                    <p>The main advantage of liposuction is minimally invasive procedure resulting in rapid recovery and better cosmetic outcomes in aesthetically sensitive areas like face or neck. The major limitation of this procedure is its non-suitability for deep lipomas, large lipomas or lipomas near blood vessels or nerves. Sometimes, liposuction may result in incomplete removal of lipomas resulting in recurrence.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Pinch technique for Lipomas :</strong> Lipoma excision in Bangalore using pinch technique is one of the best treatment options. This technique can be performed in almost every case of lipomas and has least complication rates. This lipoma surgery in Bangalore involves use of highly specialized instruments to elevate the lipoma from underlying tissues. A sharp tool is then introduced to cut around base of lipoma and remove it from underlying tissues.</p>
                    <p>The wound is then allowed to heal on its own. This technique is not used for very large and deep lipomas</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Laser Procedure for Lipomas :</strong> Laser therapy has not gained much popularity in the treatment of lipomas. This is because of incomplete destruction of lipomas resulting in recurrence of lipomas. Laser therapy works by delivering focused light energy that is absorbed by the fat cells within the lipoma. This absorption generates heat, which leads to thermal damage and subsequent breakdown of the fat cells. However, hard lipomas and large lipomas may not completely break down resulting in recurrences. The effectiveness of laser therapy for lipomas can vary depending on the size, location, and characteristics of the lipoma. Small, superficial lipomas may respond well to laser treatment, whereas larger or deeper lipomas may require alternative or adjunctive treatments.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Steroid Injections into Lipomas :</strong> Direct instillation of steroids into the lipomas can sometimes shrink smaller lipomas. However, this technique is less commonly used due to multiple sessions, incomplete removal of lipomas and higher recurrences. They are not considered a definitive cure and may need to be repeated periodically for sustained benefit.</p>
                  </li>
                </ul>
                <strong>Contact Dr. Uday Ravi if you are looking for lipoma removal doctor in Bangalore</strong>
              </div>
              <div id="sebaceous-cyst" className={styles.Section2Question3} data-aos="fade-up">
                <h2 className="mt-5" style={{ color: "#5c47dc", fontSize: "30px" }}>Sebaceous cyst</h2>
                <h2 className="">What is a Sebaceous Cyst?</h2>
                <p>
                  The cyst may be a slow-growing, protein-filled, dome-like, yellow or white lump that will move simply underneath the skin. A sebaceous cyst, a common benign skin condition, forms when a hair follicle gets blocked and fills with keratin. Sebaceous cysts will be found on your entire body except palms and soles. Sebaceous cysts are usually harmless. Very few can become harmful or cancerous. Although often harmless, complications such as infection, pain, and rupture may require treatment, ranging from antibiotics to surgical removal.
                </p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={Cysts_SwellingImg2} alt="Cysts_SwellingImg2" className={styles.Section2CystsImage2} />
                  <p>Fig 2. Sebaceous Cyst</p>
                </div>
              </div>
              <div id="symptoms-of-sebaceous-cysts" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Causes of sebaceous cysts may include:</h2>
                <ul >
                  <li>
                    Misshapen or deformed ducts.
                  </li>
                  <li>
                    Damage to cells during surgery.
                  </li>
                  <li>
                    Genetic conditions like Gardner’s syndrome or basal cell nevus syndrome.
                  </li>
                </ul>
              </div>
              <div id="diagnosis-sebaceous-cysts" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Diagnosis</h2>
                <p>
                  Sebaceous cysts are typically diagnosed through a basic physical examination by doctors. However, if the cyst appears unusual, additional tests might be requested to rule out potential cancers, particularly if surgical removal is being considered. Tests which might be advised by doctor
                </p>

                <ul className={styles.sublistAlphabets}>
                  <li>
                    <p>
                      CT Scan
                    </p>
                  </li>
                  <li>
                    <p>
                      Ultrasound
                    </p>
                  </li>
                  <li>
                    <p>Punch Biopsy</p>
                  </li>
                </ul>
                <strong>Sebaceous cyst treatment in Bangalore</strong>
                <ul>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Conventional Wide Excision :</strong> In this sebaceous cyst removal is done completely but may result in a prominent scar.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Minimal Excision :</strong> Involves minimal scarring but carries a risk of cyst recurrence.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Laser with Punch Biopsy Excision :</strong>  In this procedure laser aided sebaceous cyst excision is done to drain the cyst, with the cyst’s outer walls removed later. Post-surgery, antibiotic ointment is typically prescribed to prevent infection until healing is complete. Scar cream may also be provided to minimize surgical scars.</p>
                  </li>
                </ul>
                <p>If you are searching for sebaceous cyst removal surgery then contact Dr. Uday Ravi</p>
              </div>
              <div id="warts" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5" style={{ color: "#5a4ae3", fontSize: "33px" }}>Warts</h2>
                <h2 className="" style={{ marginTop: "15px" }}>What are Warts?</h2>
                <p>Warts are common skin growths, and Human Papillomavirus (HPV) is one of the major causes of warts. Warts can occur anywhere on the body, with different types such as verruca plantaris on feet or verruca plana on faces, among others. Warts are relatively harmless in adults but can cause complications if spread to young children or the elderly with weak immune system. They may also get secondarily infected and become painful.</p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={Cysts_SwellingImg3} alt="Cysts_SwellingImg3" className={styles.Section2CystsImage2} />
                  <p>Fig 2. Sebaceous Cyst</p>
                </div>
              </div>
              <div id="treatment-warts" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Treatment for Warts in Bangalore</h2>
                <ul className={styles.numberlist}>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Topical Treatments :</strong> One of the most common ways of getting rid of warts is by using topical solution which usually has salicylic acid that slowly peels off the infected skin. Because of this, achieving the results often takes a few weeks, requiring continuous use for certain periods.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Cryotherapy :</strong> Cryotherapy is the use of liquid nitrogen to freeze warts. The freezing kills off the infected cells and as a result, they tend to fall off after several treatments. Cryotherapy is the most commonly used warts removal treatment in Bangalore, which is suitable for most types of warts. Typically, doctor applies liquid nitrogen directly onto the growth, which causes a blister to form and eventually makes the wart peel away.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Surgical Removal :</strong> During this process, surgeon will shave or cut off or burn with electric current, the wart under local anaesthesia. For most people, it takes less time, which makes it an easy skin warts treatment, but with some pain involved. It is beneficial, especially when dealing with larger or more stubborn growths that are unresponsive to topical therapies</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Co2 Laser Therapy :</strong> A CO2 laser, treats wart by burning the tissue away, using high-energy light beams. This is a highly targeted warts removal treatment in Bangalore. Lasers are very precise and only target the wart itself while leaving surrounding areas untouched. It is also notable that healing usually takes less time than other methods and is characterized by a low risk of scarring.</p>
                  </li>
                </ul>
              </div>
              <div id="abscess" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">What Is An Abscess?</h2>
                <p>Abscess develops when your body encounters a pathogen&apos;s interaction (pathogens are disease-causing organisms). Whenever your body&apos;s immune system encounters a pathogen interaction, the body starts off its preparation to fight against the infection by generating primary and secondary responses. White blood cells, which are also known as the fighter cells of the human body, rush to the site and accumulate there to stop the further spread of infection. This can lead to a localized collection of pus that forms within the tissues of the body, which is called an abscess.</p>
              </div>
              <div id="types-abscesses" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">What Are The Types Of Abscesses?</h2>
                <p>Based on their location, abscesses can be of different types:</p>
                <ul>
                  <li>
                    <strong>Skin Abscess (Cutaneous Abscess) :</strong>
                    <p>A skin abscess looks more like a pimple; it appears a boil on or inside the skin, and if internal, it is situated deep inside the skin. Skin abscesses might appear puffy and red.</p>
                    <ul className={styles.sublistAlphabets}>
                      <li>Furuncle or boil</li>
                      <li>Carbuncle</li>
                      <li>Hidradenitis suppurativa</li>
                      <li>Pilonidal cyst</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Oral Abscess :</strong>
                    <p>These abscesses can affect your teeth, gums, and throat.</p>
                    <ul className={styles.sublistAlphabets}>
                      <li>Gum abscesses</li>
                      <li>Periapical abscess</li>
                      <li>Periodontal abscess</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Internal Abscesses :</strong>
                    <p>Although they are much less common than the other types, internal abscesses can form on your brain, spinal cord, and other organs. Interior abscesses are typically more difficult to identify and manage.</p>
                    <ul className={styles.sublistAlphabets}>
                      <li>Abdominal abscess</li>
                      <li>Spinal cord abscess</li>
                      <li>Brain abscess</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div id="abscess-developed" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">How Is An Abscess Developed ? </h2>
                <p>Abscesses are typically caused by bacterial infections. The most common causative organism being the bacteria Staphylococcus. Occasionally, abscesses can be brought on by fungi, viruses, or parasites.</p>
                <p>During a bacterial invasion, the immune system of the body becomes active and commands the white blood cells to fight against the infection. This can lead to inflammation and damage to the surrounding tissues. This aids in the development of a pocket-like structure filled with pus, which is known as an abscess.</p>
              </div>
              <div id="symptoms-abscess" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Symptoms </h2>
                <ul>
                  <li>High fever and chills</li>
                  <li>Fatigue</li>
                  <li>Excessive sweating</li>
                  <li>Loss of appetite</li>
                  <li>Loss of weight</li>
                </ul>
              </div>
              <div id="methods-abscess" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">What Are The Diagnostic Methods For Abscess? </h2>
                <p>There are two main types of methods for diagnosing the Abscess</p>
                <ul>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Physical examination :</strong> Through a physical examination, doctor can determine whether you have a skin abscess. The abscess will be examined, and your symptoms will be monitored. Doctor will collect a sample of your abscess pus for analysis.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Imaging Tests :</strong> Doctor might recommend you to undergo some Imaging tests to understand the condition. These tests could include:</p>
                    <ul>
                      <li>MRI Scan</li>
                      <li>CT scan</li>
                      <li>Ultrasound</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div id="abscess-treatment" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Abscess Treatment in Bangalore </h2>
                <p>There are several methods for treatment of pus collection in Bangalore depending on its severity and type</p>
                <ul>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Medications :</strong> Depending on the abscess&apos;s severity and symptoms, your doctor may advise taking an oral antibiotic. Your doctor may prescribe antibiotics such as cephalexin and dicloxacillin depending upon the causative organism.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Drainage :</strong> If the abscess doesn&apos;t get better on its own, or with the help of antibiotics, you may require drainage.</p>
                    <ul>
                      <li>A very small incision will be made in the abscess.</li>
                      <li>They&apos;ll let the abscess drain to get rid of any pus, dead tissue, and debris that are still there. To allow any residual pus to drain, the abscess will stay open.</li>
                      <li>For larger abscesses, they might pack the open abscesses with gauze. After that, they&apos;ll cover it with a fresh, dry bandage.</li>
                      <li>The incision will heal naturally. A scar may form at the site indicating that the abscess is healing.</li>
                    </ul>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Needle aspiration :</strong> Doctor might use needle aspiration to treat internal abscesses, as internal abscesses are hard to detect, your doctor will use the imaging technique to locate the abscess.</p>
                    <ul>
                      <li>A CT or ultrasound scan will be used to direct a needle into position.</li>
                      <li>Using the needle, your doctor will drain the abscess.</li>
                      <li>The doctor will make a tiny incision in your skin and place a drainage catheter, which is a thin plastic tube.</li>
                      <li>The abscess can drain into a bag with the help of the catheter.</li>
                      <li>You might need to keep the bag there for a week or longer.</li>
                    </ul>
                  </li>
                </ul>
                <p>For the best abscess removal surgery in Bangalore book an appointment with Dr. Uday Ravi</p>
              </div>
              <div id="corns" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-4" style={{ color: "#5a4ae3", fontSize: "30px" }}>Corns </h2>
                <p>A corn is a small circular thickened lesion in the skin of the foot. It usually forms due to repeated pressure on the skin, such as the rubbing of a shoe. The name “corn” comes from its resemblance to a kernel of corn. A corn is different from a callus in that it has a central core of hard material.</p>
                <p>People with foot deformities, such as hammertoes, often suffer from corns because the tops of the bent toes rub against the tops of shoes.</p>
                <p>When corns get hard enough to cause pain, corn removal doctor in Bangalore will recommend the treatment option most appropriate for you. However, if the underlying cause of the corn is not treated or removed, the corn may return. It is important to avoid trying to remove a corn at home, as serious infection may occur.</p>
                <div className='d-flex flex-column align-items-center'>
                  <Image src={Cysts_SwellingImg4} alt="Cysts_SwellingImg4" className={styles.Section2CystsImage2} />
                  <p>Fig 4. Foot Corns</p>
                </div>
              </div>
              <div id="corn-treatment" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5 mb-3">Foot Corn Treatment in Bangalore </h2>
                <ul className={styles.numberlist}>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Home Remedies :</strong> Mild foot corns may be treated at home with over-the-counter corn pads, which can relieve pressure and reduce friction. Soaking the feet in warm water can also help soften the skin and make it easier to remove the corn.</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Salicylic Acid :</strong> Salicylic acid treatments can soften the skin and help remove the corn</p>
                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Padding :</strong> Padding may relieve pressure and reduce friction on the affected area</p>

                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Footwear Adjustments :</strong> Adjusting the fit of shoes or wearing more supportive footwear can help reduce pressure on the affected area and prevent the formation of new corns.</p>

                  </li>
                  <li>
                    <p><strong style={{ color: "#5c47dc" }}>Chemical Cautery :</strong> This method involves using a chemical solution to dissolve the corn. The chemical is applied to the affected area and allowed to penetrate the tissue, causing it to break down and eventually fall off.</p>

                  </li>
                  <li>
                    <p>Surgical Treatment Methods for Foot Corns</p>
                    <ul>
                      <li>
                        <p><strong style={{ color: "#5c47dc" }}>Excision :</strong> Foot corn removal surgery is done by cutting the corn with a scalpel or other surgical instrument. The wound is then sutured closed.</p>
                      </li>
                      <li>
                        <p><strong style={{ color: "#5c47dc" }}>Curettage :</strong> This surgical treatment method involves scraping the corn or callus away with a special surgical tool called a curette. The wound is then allowed to heal on its own.</p>
                      </li>
                      <li>
                        <p><strong style={{ color: "#5c47dc" }}>Laser Surgery :</strong> In this method, a laser is used to remove the corn. The laser vaporises the tissue and seals the wound, reducing bleeding and minimising the risk of infection.</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div id="calluses" className={styles.Section2Question5} data-aos="fade-up">
                <h2 className="mt-5">Calluses </h2>
                <p>A callus is a thickened area of skin on the foot caused by pressure and repeated rubbing, such as from a shoe or sock. The rubbing causes the skin to produce a layer of protective skin (a callus). Calluses vary in size and can become painful.</p>
                <p>There are a number of treatments for painful calluses. People who have calluses are cautioned against performing “bathroom surgery,” as this can lead to cuts and infection. Surgeon will evaluate the cause of the calluses and recommend the treatment most appropriate for your condition. However, if the underlying cause of the callus is not treated or removed, the callus may return.</p>
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