import React from 'react';
import { ShoppingCart } from 'react-feather';
import styles from './HeroSection.module.css'; 

const HeroSection = () => {
  return (
    <section className={`section-padding ${styles.heroSection}`}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroImageCluster}>
          <div className={styles.mainImagePlaceholder}>Puffed Appalam</div>
        </div>
        
        <div className={styles.heroTextContent}>
          <h1 className="heading-font">
            Happy With <span className="text-highlight">Delicious Food</span> And Get New Experiences With Asian Food
          </h1>
          <p>
            Exploring new food with different transition form all Asian country especially
            from Cambodia chat you can try at this place and get a good price from us as well 
            we will make a good impact to our customers
          </p>
          <div className={styles.heroActions} style={{ marginTop: '20px' }}>
            <button className="btn-primary">
              Order Food <ShoppingCart size={18} />
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;