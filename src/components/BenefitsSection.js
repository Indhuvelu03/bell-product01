// components/BenefitsSection.js
import React from 'react';
import styles from './BenefitsSection.module.css';

const BenefitIcon = ({ children }) => <div className={styles.benefitIcon}>{children}</div>;

const benefits = [
    { title: "Authentic Taste", text: "Delivering traditional South Indian flavors through our signature Appalam and snack range." },
    { title: "Product Variety", text: "From Appalam to chips, pappads, asafoetida, and whole wheat rava." },
    { title: "Customer Trust", text: "Loved by families across India and recognized for consistency and reliability." },
    { title: "Manufacturers and Suppliers", text: "We Manufacture and supply crispy chips, flavorful pappads, pure asafoetida, and wholesome whole wheat rava." }
];

const BenefitsSection = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        
        {/* Top Header - Centered */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Our essence involves</h2>
          {/* <p className={styles.subheading}>
            Bell Brand Appalam - Manufacturer & Supplier
          </p> */}
        </div>

        {/* --- Text Benefits Column (Always Stacked) --- */}
        <div className={styles.textBenefitsWrapper}>
            {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                    <BenefitIcon>
                        {/* Placeholder Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 21v-3"/><path d="M15 2v10c0 .5.2 1 .5 1.4l2.5 2.5V21h3v-4.1l2.5-2.5c.3-.4.5-.9.5-1.4V2"/></svg>
                    </BenefitIcon>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                </div>
            ))}
        </div>

        {/* --- Image Cluster (Below Text Benefits) --- */}
        <div className={styles.imageClusterColumn}>
            <div className={styles.mainImagePlaceholder}>
                            </div>
            <div className={styles.sideImageContainer}>
                <div className={styles.topRightImagePlaceholder}>
                                    </div>
                <div className={styles.bottomRightImagePlaceholder}>
                                    </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default BenefitsSection;