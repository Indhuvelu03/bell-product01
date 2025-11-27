// components/ProductSlider.js
"use client"
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import styles from './ProductSlider.module.css';

// Data for each product
const products = [
  {
    id: 1,
    name: "Bell Appalam",
    description: "Authentic South Indian Appalams, crafted for premium taste and crisp texture.",
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["100% Natural Ingredients", "No Preservatives", "Crispy & Light", "Perfect with Rice & Sambar"]
  },
  {
    id: 2,
    name: "Bell Vadam",
    description: "Traditional crunch of Bell Vadam. Sun-dried and seasoned to perfection.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Sun-Dried Naturally", "Traditional Recipe", "Long Shelf Life", "Ready to Fry"]
  },
  {
    id: 3,
    name: "Bell Chips",
    description: "Crispy and flavorful Bell Chips, perfect snack for any time of the day.",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Crunchy Texture", "Multiple Flavors", "Party Favorite", "Made Fresh Daily"]
  },
  {
    id: 4,
    name: "Bell Rava",
    description: "Finely milled Bell Rava, essential for delicious upma and dosa.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Premium Quality Wheat", "Fine & Coarse Options", "Ideal for Upma & Kesari", "No Additives"]
  },
  {
    id: 5,
    name: "Bell Asafoetida",
    description: "Pure and aromatic asafoetida for authentic South Indian cooking.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Strong Aroma", "Enhances Flavor", "Pure & Authentic", "Essential for Tadka"]
  }
];

const ProductSlider = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="product-slider" ref={targetRef} className={styles.productSection}>
      {/* Section Header */}
      <div className={styles.sectionHeaderFixed}>
        <div className="container">
          <span className={styles.sectionSubtitle}>What We Offer</span>
          <h2 className={styles.sectionTitle}>Our Products</h2>
        </div>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div className={styles.stickyWrapper}>
        <motion.div style={{ x }} className={styles.carouselTrack}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>

      {/* Discover More Button */}
      <div className={styles.discoverMoreWrapper}>
        <button 
          className={styles.discoverButton}
          onClick={() => scrollToSection('popular-food')}
        >
          Discover More
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div 
        className={styles.cardImage}
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      />
      <div className={styles.cardOverlay}>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{product.name}</h3>
          <p className={styles.cardDescription}>{product.description}</p>
          <ul className={styles.cardFeatures}>
            {product.features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.bulletIcon}>•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;