import React from 'react';
import { ArrowRight } from 'react-feather';
import styles from './AboutUsCta.module.css';
import PopularFoodSection from '../components/PopularFoodSection';

const AboutUsCta = () => {
  return (
    <section id="about-us" className={`section-padding ${styles.aboutUsCta}`}>
      <div className={`container ${styles.aboutContent}`}>
        <h2 className="heading-font" style={{ marginTop: '20px' }}>About Us</h2>
        <p>
          At Bell Brand Appalam, we are a trusted manufacturer and supplier of authentic South 
          Indian snacks. We combine traditional recipes with modern hygiene practices to 
          deliver premium quality and freshness.
        </p>
        <button 
          className={styles.learnMoreBtn} 
          aria-label="Learn more about Bell Brand Appalam"
        >
          Learn More <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default AboutUsCta;