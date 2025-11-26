// components/TestimonialsSection.js

import React from 'react';
import styles from './TestimonialSection.module.css';

const testimonials = [
  {
    id: 1,
    name: "William Henry",
    text: "Living in Canada, I hadn't ventured much into Asian cuisine until recently. But wow, what a delicious world I've been missing! Khmer food, in particular, has captured my heart, and Bok Loh Hong holds a special place in my memory as the dish that first made me say, “Asian food is so yummy!” Living in Canada, I hadn't ventured much into Asian cuisine until recently. But wow, what a delicious world I've been missing! Khmer food, in particular, has captured my heart, and Bok Loh Hong holds a special place in my memory as the dish that first made me say, “Asian food is so yummy!”",
    rating: 4,
    image: "https://via.placeholder.com/60x60/f0f0f0/333?text=WH"
  },
  {
    id: 2,
    name: "Andia Jorida",
    text: "My experience at your restaurant was truly excellent. The food was absolutely delicious - every dish was perfectly cooked and bursting with flavor. But what really impressed me was the service. Your staff was attentive, friendly which make me feel want to be there again.",
    rating: 5,
    image: "https://via.placeholder.com/60x60/f0f0f0/333?text=AJ"
  },
  {
    id: 3,
    name: "William Henry",
    text: "Living in Canada, I hadn't ventured much into Asian cuisine until recently. But wow, what a delicious world I've been missing! Khmer food, in particular, has captured my heart, and Bok Loh Hong holds a special place in my memory as the dish that first made me say, “Asian food is so yummy!”",
    rating: 4,
    image: "https://via.placeholder.com/60x60/f0f0f0/333?text=WH"
  },
];

const renderStars = (rating) => {
  const stars = [];
  // Render 5 possible stars
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg 
        key={i} 
        className={`${styles.star} ${i < rating ? styles.filled : ''}`} 
        xmlns="http://www.w3.org/2000/svg" 
        width="18" height="18" viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"} 
        stroke="currentColor" 
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    );
  }
  return stars;
};

const TestimonialsSection = () => {
  const mainTestimonial = testimonials[0]; 
  const sideTestimonials = testimonials.slice(1); 

  return (
    <section className={`${styles.testimonialSection} section-padding`}>
      <div className="container">
        
        {/* Title is positioned before the content wrapper to align it over the left column */}
        <h2 className={styles.sectionTitle}>What Our Clients Think</h2>

        <div className={styles.contentWrapper}>
          
          {/* Main Testimonial Card (Left Column) */}
          <div className={styles.mainTestimonialCard}>
            
            <div className={styles.cardHeader}>
              <img src={mainTestimonial.image} alt={mainTestimonial.name} className={styles.clientImage} />
              <h3 className={styles.clientName}>{mainTestimonial.name}</h3>
            </div>
            
            <p className={styles.testimonialText}>{mainTestimonial.text}</p>
            
            <div className={styles.rating}>
              {renderStars(mainTestimonial.rating)}
              <span className={styles.ratingText}>{mainTestimonial.rating} stars</span>
            </div>
          </div>

          {/* Side Testimonials (Right Column) */}
          <div className={styles.sideTestimonialsWrapper}>
            {sideTestimonials.map(testimonial => (
              <div key={testimonial.id} className={styles.sideTestimonialCard}>
                
                <div className={styles.cardHeader}>
                  <img src={testimonial.image} alt={testimonial.name} className={styles.clientImage} />
                  <h3 className={styles.clientName}>{testimonial.name}</h3>
                </div>
                
                <p className={styles.testimonialText}>{testimonial.text}</p>
                
                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                  <span className={styles.ratingText}>{testimonial.rating} stars</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;