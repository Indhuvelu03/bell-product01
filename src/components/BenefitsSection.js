// components/BenefitsSection.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './BenefitsSection.module.css';

const BenefitIcon = ({ children }) => <div className={styles.benefitIcon}>{children}</div>;

const benefits = [
    { 
        title: "Authentic Taste", 
        text: "Delivering traditional South Indian flavors through our signature Appalam and snack range.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
    },
    { 
        title: "Product Variety", 
        text: "From Appalam to chips, pappads, asafoetida, and whole wheat rava.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
    },
    { 
        title: "Customer Trust", 
        text: "Loved by families across India and recognized for consistency and reliability.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
    },
    { 
        title: "Manufacturers and Suppliers", 
        text: "We Manufacture and supply crispy chips, flavorful pappads, pure asafoetida, and wholesome whole wheat rava.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
    }
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: "easeOut",
      delay: 0.4
    }
  }
};

// New variants for individual images
const imageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    }
  }
};

const mainImageVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    }
  }
};

const topRightImageVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    }
  }
};

const bottomRightImageVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    }
  }
};

const BenefitsSection = () => {
  return (
    <motion.section 
      className={styles.benefitsSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container">
        
        {/* Top Header - Centered */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className={styles.heading}>Our essence involves</h2>
        </motion.div>

        {/* --- Text Benefits Column (Always Stacked) --- */}
        <motion.div 
          className={styles.textBenefitsWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
            {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className={styles.benefitCard}
                  variants={cardVariants}
                >
                    <BenefitIcon>
                        {benefit.icon}
                    </BenefitIcon>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                </motion.div>
            ))}
        </motion.div>

        {/* --- Image Cluster (Below Text Benefits) --- */}
        <motion.div 
          className={styles.imageClusterColumn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={imageContainerVariants}
        >
            <motion.div 
              className={styles.mainImagePlaceholder}
              variants={mainImageVariants}
            >
              <img 
                src="https://i.pinimg.com/1200x/a4/b6/48/a4b648a6aaee2f2b38a02e96c607751a.jpg" 
                alt="Bell Brand Appalam" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
              />
            </motion.div>
            <div className={styles.sideImageContainer}>
                <motion.div 
                  className={styles.topRightImagePlaceholder}
                  variants={topRightImageVariants}
                >
                  <img 
                    src="https://i.pinimg.com/1200x/c8/79/f5/c879f5c6f858a0197006e4178185f60e.jpg" 
                    alt="Bell Brand Chips" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                  />
                </motion.div>
                <motion.div 
                  className={styles.bottomRightImagePlaceholder}
                  variants={bottomRightImageVariants}
                >
                  <img 
                    src="https://i.pinimg.com/1200x/dd/65/1e/dd651ec70c9cb2afdd8de27603061ecd.jpg" 
                    alt="Bell Brand Papad" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                  />
                </motion.div>
            </div>
        </motion.div>
        
      </div>
    </motion.section>
  );
};

export default BenefitsSection;