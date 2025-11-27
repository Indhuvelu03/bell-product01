// components/TestimonialsSection.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './TestimonialSection.module.css';

const testimonials = [
  {
    id: 1,
    name: "Murugan S.",
    location: "T. Nagar, Chennai",
    text: "We've been using Bell Brand appalam for over 5 years now. The quality is always consistent and the crispness is perfect. My family loves it with our Sunday sambar rice. Definitely recommend to anyone looking for authentic taste.",
    rating: 5,
    initial: "M"
  },
  {
    id: 2,
    name: "Lakshmi N.",
    location: "Mylapore, Chennai",
    text: "I run a small provisions store and Bell Brand products are always in demand. Customers specifically ask for this brand. The freshness and quality keep them coming back. Great for business!",
    rating: 5,
    initial: "L"
  },
  {
    id: 3,
    name: "Karthik R.",
    location: "Anna Nagar, Chennai",
    text: "Tried Bell Brand rava recently and the upma came out really good. Nice texture and cooks well. My wife was impressed with the quality. Will continue buying their products.",
    rating: 4,
    initial: "K"
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <motion.svg 
        key={i} 
        className={`${styles.star} ${i < rating ? styles.filled : ''}`} 
        xmlns="http://www.w3.org/2000/svg" 
        width="18" height="18" viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"} 
        stroke="currentColor" 
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1, duration: 0.3 }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </motion.svg>
    );
  }
  return stars;
};

const TestimonialsSection = () => {
  const mainTestimonial = testimonials[0]; 
  const sideTestimonials = testimonials.slice(1); 

  return (
    <motion.section 
      className={`${styles.testimonialSection} section-padding`}
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
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionSubtitle}>Testimonials</span>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <p className={styles.sectionDescription}>
            Hear from our beloved customers across Chennai and Tamil Nadu
          </p>
        </motion.div>

        <motion.div 
          className={styles.contentWrapper}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          
          {/* Main Testimonial Card (Left Column) */}
          <motion.div 
            className={styles.mainTestimonialCard}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.quoteIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.012z"/>
              </svg>
            </div>
            
            <div className={styles.cardHeader}>
              <motion.div 
                className={styles.clientInitial}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {mainTestimonial.initial}
              </motion.div>
              <div className={styles.clientInfo}>
                <h3 className={styles.clientName}>{mainTestimonial.name}</h3>
                <span className={styles.clientLocation}>{mainTestimonial.location}</span>
              </div>
            </div>
            
            <p className={styles.testimonialText}>{mainTestimonial.text}</p>
            
            <div className={styles.rating}>
              {renderStars(mainTestimonial.rating)}
              <span className={styles.ratingText}>{mainTestimonial.rating}.0 Rating</span>
            </div>
          </motion.div>

          {/* Side Testimonials (Right Column) */}
          <motion.div 
            className={styles.sideTestimonialsWrapper}
            variants={staggerContainer}
          >
            {sideTestimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                className={styles.sideTestimonialCard}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.cardHeader}>
                  <motion.div 
                    className={styles.clientInitial}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {testimonial.initial}
                  </motion.div>
                  <div className={styles.clientInfo}>
                    <h3 className={styles.clientName}>{testimonial.name}</h3>
                    <span className={styles.clientLocation}>{testimonial.location}</span>
                  </div>
                </div>
                
                <p className={styles.testimonialText}>{testimonial.text}</p>
                
                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                  <span className={styles.ratingText}>{testimonial.rating}.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;