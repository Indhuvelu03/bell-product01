// components/FAQSection.js
import React from 'react';
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

const FAQSection = () => {
  return (
    <section className={`${styles.faqSection} section-padding`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>FAQ</h2>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <hr className={styles.faqDivider} /> 
              <h3 className={styles.faqNumber}>{faq.number}</h3>
              <h4 className={styles.faqQuestion}>{faq.question}</h4>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* --- NEW IMAGE ADDITION --- */}
        <div className={styles.imageContainer}>
          <img 
            src="https://via.placeholder.com/1200x600/f0f0f0/333?text=Delicious+Appalam+Meal" 
            alt="Delicious Appalam Meal" 
            className={styles.bottomImage} 
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;