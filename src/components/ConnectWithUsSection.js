// components/ConnectWithUsSection.js
import React from 'react';
import styles from './ConnectWithUsSection.module.css';

const ConnectWithUsSection = () => {
  return (
    <section className={`${styles.connectSection} section-padding`}>
      <div className="container">
        
        {/* Section Heading */}
        <h2 className={styles.sectionTitle}>Connect with us</h2>
        
        {/* Description Paragraph */}
        <p className={styles.description}>
          We'd love to hear from you! Whether you're looking to place an order, become a 
          distributor, or simply learn more about our products, our team is here to help.
        </p>

        {/* Form Container */}
        <div className={styles.formContainer}>
          <label htmlFor="emailInput" className={styles.emailLabel}>Email</label>
          <input 
            type="email" 
            id="emailInput" 
            placeholder="Enter your email" 
            className={styles.emailInput} 
          />
          {/* Let's Connect Button with Arrow */}
          <button className={styles.connectButton}>
            Let's Connect 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" viewBox="0 0 24 24" 
              fill="none" stroke="currentColor" strokeWidth="2" 
              strokeLinecap="round" strokeLinejoin="round" 
              className={styles.arrowIcon}
            >
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUsSection;