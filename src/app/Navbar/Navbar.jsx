"use client";
import logo from '../../../public/Logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import styles from './Navbar.module.css';
import NavbarIcon1 from '../assets/Proctology.png'
import NavbarIcon2 from '../assets/Anal_Fistula.png'
import NavbarIcon3 from '../assets/Fissure.png'
import NavbarIcon4 from '../assets/Weight_Loss.png'
import NavbarIcon5 from '../assets/Thyroid_Disease.png'
import NavbarIcon6 from '../assets/Varicose_venis.png'
import NavbarIcon7 from '../assets/Fibroadenoma.png'
import NavbarIcon8 from '../assets/Hydrocele.png'
import NavbarIcon9 from '../assets/Reconstructive_Surgery.png'
import NavbarIcon10 from '../assets/Diabetic_Ulcer.png'
import NavbarIcon11 from '../assets/Gallbladder_Stones.png'
import NavbarIcon12 from '../assets/Appendicitis.png'
import NavbarIcon13 from '../assets/Circumcision.png'
import Pilonidal_SinusNavImg from '../assets/Pilonidal_SinusNavImg.png'
import CystsandSwellingNavImg from '../assets/CystsandSwellingNavImg.png'
import HerniaNavImg from '../assets/HerniaNavImg.png'


import NavbarIcon1SVG from '../assets/Navicon1.svg'
import NavbarIcon2SVG from '../assets/Navicon2.svg'
import NavbarIcon3SVG from '../assets/Navicon3.svg'
import NavbarIcon4SVG from '../assets/Navicon4.svg'
import NavbarIcon5SVG from '../assets/Navicon5.svg'
import NavbarIcon6SVG from '../assets/Navicon6.svg'
import NavbarIcon7SVG from '../assets/Navicon7.svg'
import NavbarIcon8SVG from '../assets/Navicon8.svg'
import NavbarIcon9SVG from '../assets/Navicon9.svg'
import NavbarIcon10SVG from '../assets/Navicon10.svg'
import NavbarIcon11SVG from '../assets/Navicon11.svg'
import NavbarIcon12SVG from '../assets/Navicon12.svg'
import NavbarIcon13SVG from '../assets/Navicon13.svg'
import HerniaNavlogo from '../assets/HerniaNavlogo.svg'
import cystsandswellingNavlogo from '../assets/cystsandswellingNavlogo.svg'
import pilonidal_sinusNavlogo from '../assets/pilonidal_sinusNavlogo.svg'
import { useState } from 'react';
import PopupForm from '../PopupModal/popupmodal';
import { usePathname } from 'next/navigation';

export default function Navbar({ setShowPopup = () => {} }) {

  const pathname = usePathname();

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/#about-doctor' },

  {
    name: 'Specialities',
    submenu: {
      core: [
        {
          name: 'Piles',
          path: '/services/piles',
          icon: NavbarIcon1,
        },
        {
          name: 'Anal Fistula',
          path: '/services/fistula',
          icon: NavbarIcon2,
        },
        {
          name: 'Fissure',
          path: '/services/fissure',
          icon: NavbarIcon3,
        },
        {
          name: 'Weight Loss (Intra-gastric Balloon)',
          path: '/services/weight-loss',
          icon: NavbarIcon4,
        },
        {
          name: 'Thyroid Disease',
          path: '/services/thyroid',
          icon: NavbarIcon5,
        },
        {
          name: 'Hernia',
          path: '/services/hernia',
          icon: HerniaNavImg,
        }
      ],
      specialized: [
        {
          name: "Varicose veins",
          path: '/services/varicose-veins',
          icon: NavbarIcon6,
        },
        {
          name: 'Breast Disease',
          path: '/services/breast-disease',
          icon: NavbarIcon7,
        },
        {
          name: 'Hydrocele',
          path: '/services/hydrocele',
          icon: NavbarIcon8,
        },
        {
          name: 'Reconstructive Surgery',
          path: '/services/reconstructive-surgery',
          icon: NavbarIcon9,
        },
        {
          name: 'Pilonidal Sinus',
          path: '/services/pilonidal-sinus',
          icon: Pilonidal_SinusNavImg,
        }
      ],
      supportive: [
        {
          name: 'Diabetic & Ulcer',
          path: '/services/diabetes',
          icon: NavbarIcon10,
        },
        {
          name: 'Gallbladder Stones',
          path: '/services/gastroenterology-and-gi-surgery',
          icon: NavbarIcon11,
        },
        {
          name: 'Appendicitis',
          path: '/services/appendicitis',
          icon: NavbarIcon12,
        },
        {
          name: 'Circumcision',
          path: '/services/circumcision',
          icon: NavbarIcon13,
        },
        {
          name: 'Cysts & Swelling',
          path: '/services/cysts-swelling',
          icon: CystsandSwellingNavImg,
        }
      ]
    }
  },
  {
    name: 'Services',
    submenu: {
      core: [
        {
          name: 'Piles',
          path: '/services/piles',
          icon: NavbarIcon1SVG,
        },
        {
          name: 'Anal Fistula',
          path: '/services/fistula',
          icon: NavbarIcon2SVG,
        },
        {
          name: 'Fissure',
          path: '/services/fissure',
          icon: NavbarIcon3SVG,
        },
        {
          name: 'Weight Loss (Intra-gastric Balloon)',
          path: '/services/weight-loss',
          icon: NavbarIcon4SVG,
        },
        {
          name: 'Thyroid Disease',
          path: '/services/thyroid',
          icon: NavbarIcon5SVG,
        },
        {
          name: 'Hernia',
          path: '/services/hernia',
          icon: HerniaNavlogo,
        }
      ],
      specialized: [
        {
          name: "Varicose veins",
          path: '/services/varicose-veins',
          icon: NavbarIcon6SVG,
        },
        {
          name: 'Breast Disease',
          path: '/services/breast-disease',
          icon: NavbarIcon7SVG,
        },
        {
          name: 'Hydrocele',
          path: '/services/hydrocele',
          icon: NavbarIcon8SVG,
        },
        {
          name: 'Reconstructive Surgery',
          path: '/services/reconstructive-surgery',
          icon: NavbarIcon9SVG,
        },
        {
          name: 'Pilonidal Sinus',
          path: '/services/pilonidal-sinus',
          icon: pilonidal_sinusNavlogo,
        }
      ],
      supportive: [
        {
          name: 'Diabetic & Ulcer',
          path: '/services/diabetes',
          icon: NavbarIcon10SVG,
        },
        {
          name: 'Gallbladder Stones',
          path: '/services/gastroenterology-and-gi-surgery',
          icon: NavbarIcon11SVG,
        },
        {
          name: 'Appendicitis',
          path: '/services/appendicitis',
          icon: NavbarIcon12SVG,
        },
        {
          name: 'Circumcision',
          path: '/services/circumcision',
          icon: NavbarIcon13SVG,
        },
        {
          name: 'Cysts & Swelling',
          path: '/services/cysts-swelling',
          icon: cystsandswellingNavlogo,
        }
      ]
    }
  },

  // { name: 'Blog', path: '/blog' },
  { name: 'Get in Touch', path: '/#get-in-touch' }
];

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-white d-lg-flex flex-lg-row justify-content-between px-xl-5 p-3 ${styles.navbar}`}>
        <Link className="navbar-brand" href="/">
          <Image src={logo} alt="Logo" className={`d-inline-block align-text-top ${styles.NavLogo}`} />
        </Link>

        <div className={`d-none d-lg-flex flex-row align-items-center gap-lg-4 ${styles.NavbarItemsdiv}`}>
          {navItems.map((item, i) => (
            item.name === "Services" || item.name === "Specialities" ? (
              <div key={i} className={styles.dropdownWrapper}>
                <span className={`${styles.navLink} ${styles.dropdownToggle}`}>
                  {item.name} <span className={styles.dropdownArrow}><FaChevronDown /></span>
                </span>
                <div className={styles.navcustomMegaMenu}>
                  <div className={`${styles.navThreeColumn}`}>
                    {/* Core Surgeries */}
                    <div className={styles.navColumn}>
                      <h6 className={styles.navColumnTitle}>CORE SURGERIES</h6>
                      <div className={styles.navmegaMenuItems}>
                        {item.submenu?.core?.map((subItem, i) => (
                          <Link key={i} href={subItem.path} className={`${styles.navmegaMenuItem} ${pathname === subItem.path ? styles.activeMegaItem : ''}`}>
                            <div className={styles.naviconBox}>
                              <Image
                                src={subItem.icon}
                                alt={subItem.name}
                                className={`
                                  ${item.name === 'Services' ? styles.iconSmall : styles.iconLarge}
                                  ${item.name === 'Services' && (subItem.name === 'Gallbladder Stones' || subItem.name === 'Proctology' || subItem.name === 'Anal Fistula' || subItem.name === 'Fissure') ? styles.customIcon1 : ''}
                                `}
                              />
                            </div>
                            <span className={styles.navLabel}>{subItem.name}</span>
                          </Link>
                        ))}

                      </div>
                    </div>

                    {/* Specialized Treatments */}
                    <div className={styles.navColumn}>
                      <h6 className={styles.navColumnTitle}>SPECIALIZED TREATMENTS</h6>
                      <div className={styles.navmegaMenuItems}>
                      {item.submenu?.specialized?.map((subItem, i) => (
                        <Link key={i} href={subItem.path} className={`${styles.navmegaMenuItem} ${pathname === subItem.path ? styles.activeMegaItem : ''}`}>
                          <div className={styles.naviconBox}>
                                                          <Image
                                src={subItem.icon}
                                alt={subItem.name}
                                className={`
                                  ${item.name === 'Services' ? styles.iconSmall : styles.iconLarge}
                                  ${item.name === 'Services' && subItem.name === 'Gallbladder Stones'   ? styles.customIcon1 : ''}
                                `}
                              />
                          </div>
                          <span className={styles.navLabel}>{subItem.name}</span>
                        </Link>
                      ))}
                      </div>
                    </div>

                    {/* Supportive Treatments */}
                    <div className={styles.navColumn}>
                      <h6 className={styles.navColumnTitle}>SUPPORTIVE TREATMENTS</h6>
                      <div className={styles.navmegaMenuItems}>
                      {item.submenu?.supportive?.map((subItem, i) => (
                        <Link key={i} href={subItem.path} className={`${styles.navmegaMenuItem} ${pathname === subItem.path ? styles.activeMegaItem : ''}`}>
                          <div className={styles.naviconBox}>
                                                         <Image
                                src={subItem.icon}
                                alt={subItem.name}
                                className={`
                                  ${item.name === 'Services' ? styles.iconSmall : styles.iconLarge}
                                  ${item.name === 'Services' && subItem.name === 'Gallbladder Stones' ? styles.customIcon1 : ''}
                                `}
                              />
                          </div>
                          <span className={styles.navLabel}>{subItem.name}</span>
                        </Link>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <Link key={i} className={`nav-link ${styles.navLink}`} href={item.path}>
                {item.name}
              </Link>
            )
          ))}
        </div>

        <div className="d-none d-lg-block">
          <button type="button" className={`${styles.navbarbtnPrimary}`}
            onClick={() => setShowPopup(true)}
          >
            Book Appointment
          </button>
        </div>

        <button className="navbar-toggler d-lg-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav" aria-controls="offcanvasNav">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
        <div className={`offcanvas-header ${styles.NavLogo} d-flex flex-row align-items-center row-gap-5`}>
          <Image src={logo} alt="Logo" />
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className={`offcanvas-body d-flex flex-column gap-4 ${styles.offcanvasBodyMobile}`}>
          {navItems.map((item, i) => (
            item.submenu ? (
              <div key={i} className="dropdown">
                <button className="btn dropdown-toggle w-100 text-start" data-bs-toggle="dropdown">
                  {item.name}
                </button>
                <ul className="dropdown-menu w-100">
                  {[
                    ...(item.submenu.core || []),
                    ...(item.submenu.specialized || []),
                    ...(item.submenu.supportive || [])
                  ].map((subItem, j) => (
                    <li key={j}>
                      <Link className="dropdown-item" href={subItem.path}>
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            ) : (
              <Link key={i} className={`nav-link ${styles.navLink}`} href={item.path}>
                {item.name}
              </Link>
            )
          ))}
          <button type="button" className={`${styles.navbarbtnPrimary} mt-3`}
            onClick={() => setShowPopup(true)}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}