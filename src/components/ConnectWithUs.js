import React from 'react';
import styles from './ConnectWithUs.module.css';

const ConnectWithUs = () => {
  return (
    <section id="connect-with-us" className={`${styles.connectWithUsSection} section-padding`}>
      <div className="container">
        <h2 className="heading-font">Connect With Us</h2>
        <p>
          We would love to hear from you! Whether you have a question about our products, 
          need assistance with an order, or just want to share your feedback, feel free to 
          reach out to us through any of the following channels:
        </p>
        
        <div className={styles.contactMethods}>
          <div className={styles.contactMethod}>
            <h3>Email Us</h3>
            <p>For general inquiries, product questions, or feedback, email us at:</p>
            <a href="mailto:bellappalam@gmail.com" className={styles.emailLink}>
              bellappalam@gmail.com
            </a>
          </div>
          
          <div className={styles.contactMethod}>
            <h3>Call Us</h3>
            <p>For immediate assistance, give us a call:</p>
            <p className={styles.phoneNumbers}>
              <a href="tel:+919840956836">+91 9840956836</a> /{' '}
              <a href="tel:+919940285665">+91 9940285665</a>
            </p>
          </div>
        </div>
        
        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <p>Stay updated with our latest products and offers:</p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}>
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src="/icons/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;