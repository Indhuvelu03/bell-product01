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
        <span className={styles.contactDetail}>📞 +91 9840956836 / +91 9940285665</span>
        <br />
        <span className={styles.contactDetail}>📧 bellappalam@gmail.com</span> for inquiries, bulk orders, or distributor partnerships.
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