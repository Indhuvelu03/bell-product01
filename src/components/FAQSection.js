// components/FAQSection.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './FAQSection.module.css';

const faqs = [
  {
    number: "01",
    question: "What makes Bell Brand Appalam unique?",
    answer: "Bell Brand Appalam is crafted with traditional South Indian recipes, premium ingredients, and strict hygiene standards, ensuring authentic taste and crisp texture.",
  },
  {
    number: "02",
    question: "Do you offer products other than Appalam?",
    answer: "Yes, along with Appalam we manufacture and supply crispy chips, pappads, pure asafoetida, and whole wheat rava, all trusted for quality and flavor.",
  },
  {
    number: "03",
    question: "How can I place an order or become a distributor?",
    answer: (
      <>
        You can reach us directly at
        <br />
        <span className={styles.contactDetail}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +91 9840956836 / +91 9940285665
        </span>
        <br />
        <span className={styles.contactDetail}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          bellappalam@gmail.com
        </span> for inquiries, bulk orders, or distributor partnerships.
      </>
    ),
  },
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
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
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

const FAQSection = () => {
  return (
    <motion.section 
      className={`${styles.faqSection} section-padding`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className={styles.sectionSubtitle}>Got Questions?</span>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        </motion.div>

        <motion.div 
          className={styles.faqGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={styles.faqItem}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.faqDivider}></div>
              <div className={styles.faqContent}>
                <span className={styles.faqNumber}>{faq.number}</span>
                <div className={styles.faqText}>
                  <h4 className={styles.faqQuestion}>{faq.question}</h4>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Image Section --- */}
        {/* <motion.div 
          className={styles.imageContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={imageVariants}
        >
          <img 
            src="https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Bell Brand Products" 
            className={styles.bottomImage} 
          />
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default FAQSection;