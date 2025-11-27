// components/BenefitsSection.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './BenefitsSection.module.css';

const BenefitIcon = ({ children }) => <div className={styles.benefitIcon}>{children}</div>;

const benefits = [
    { title: "Authentic Taste", text: "Delivering traditional South Indian flavors through our signature Appalam and snack range." },
    { title: "Product Variety", text: "From Appalam to chips, pappads, asafoetida, and whole wheat rava." },
    { title: "Customer Trust", text: "Loved by families across India and recognized for consistency and reliability." },
    { title: "Manufacturers and Suppliers", text: "We Manufacture and supply crispy chips, flavorful pappads, pure asafoetida, and wholesome whole wheat rava." }
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
                        {/* Placeholder Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 21v-3"/><path d="M15 2v10c0 .5.2 1 .5 1.4l2.5 2.5V21h3v-4.1l2.5-2.5c.3-.4.5-.9.5-1.4V2"/></svg>
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
                src="https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Bell Brand Chips" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                  />
                </motion.div>
                <motion.div 
                  className={styles.bottomRightImagePlaceholder}
                  variants={bottomRightImageVariants}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
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