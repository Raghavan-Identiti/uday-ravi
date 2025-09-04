"use client";
import { useEffect, useState } from "react";
import styles from "./PopupForm.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";

export const indianStates = [
  { value: "Yelahanka", label: "Yelahanka" },
  { value: "Kodigehalli", label: "Kodigehalli" },
  { value: "Rajaji Nagar", label: "Rajaji Nagar" },
  { value: "T Dasarhalli", label: "T Dasarhalli" },
];

export default function PopupForm({ showPopup, setShowPopup, selectedLocation }) {
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (selectedLocation) {
      setFormData((prev) => ({
        ...prev,
        location: selectedLocation,
      }));
    }
  }, [selectedLocation]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLocationChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      location: selectedOption?.value || "",
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      contact: value,
    }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required.";
    if (!formData.email) errs.email = "Email is required.";
    if (!formData.location) errs.location = "Location is required.";

if (formData.comment && formData.comment.length < 1) {
  errs.comment = "Comment must not be empty if provided.";
}


    return errs;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSaving(true); // Start spinner

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert("Message sent!");
        setShowPopup(false);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong.");
    } finally {
      setIsSaving(false); // Stop spinner
    }
  };

  if (!showPopup) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
<button type="button" className={styles.closeBtn} onClick={() => setShowPopup(false)}>×</button>
        <h3 className={styles.heading}>Book a Consultation</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" autoComplete="off" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" autoComplete="off" name="email" placeholder="Email" onChange={handleChange} required />
          <PhoneInput
            country={'in'}
            value={formData.contact || ""}
            onChange={handlePhoneChange}
            inputClass={styles.phoneInput}
          />

          {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
          <Select
            options={indianStates}
            placeholder="Preferred Location"
            onChange={handleLocationChange}
            value={indianStates.find(option => option.value === formData.location) || null}
          />


          {errors.location && <div className="invalid-feedback">{errors.location}</div>}

          <textarea
            name="comment"
            placeholder="Your message..."
            value={formData.comment}
            onChange={handleChange}
          // className={errors.comment ? "is-invalid" : ""}
          />
          <button className={styles.submitBtn} type="submit" disabled={isSaving}>
            <span className={styles.submitBtnText}>Submit</span>
            {isSaving && (
              <div className={`${styles.spinnerOverlay}`}>
                <div className={`${styles.spinner}`}></div>
              </div>
            )}
          </button>

        </form>
      </div>
    </div>
  );
}
