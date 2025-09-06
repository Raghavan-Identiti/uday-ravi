'use client'
import styles from './cta.module.css';
import Image from "next/image";
import callIcon from '../../assets/call-icon.png';
import PopupForm from '../../PopupModal/popupmodal';
import { useState } from "react";


export default function Cta() {
  const [showPopup, setShowPopup] = useState(false);
    return (    
        <>
        <div className={styles.HomeActions}>
  <button
    type="button"
    className={styles.HomeCtaBtnPrimary}
    onClick={() => setShowPopup(true)}
  >
    Book Appointment
  </button>

  <div className={styles.HomeCallNow}>
    <a href="tel:+91 7353530505" className={styles.HomeCallLink}>
      <Image src={callIcon} alt="call-icon" className={styles.HomeCallIcon} />
    </a>
  </div>
</div>

      <PopupForm showPopup={showPopup} setShowPopup={setShowPopup} />
      </>
    );
    }