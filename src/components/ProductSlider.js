// components/ProductSlider.js
"use client"
import React, { useState, useEffect } from 'react';
import styles from './ProductSlider.module.css';

// Data for each product slide
const products = [
  {
    name: "Bell Appalam",
    description: "Bell Brand Appalam brings you authentic South Indian Appalams, crafted for premium taste and crisp texture. Perfect for all meals.",
    features: [
      "Made with traditional recipes to deliver the true taste of South Indian Appalam.",
      "Crafted from premium lentil flour and spices under strict hygiene standards.",
      "Light, crunchy, and perfectly roasted for a delightful eating experience.",
      "Enjoyed as a meal accompaniment or a standalone snack."
    ],
    image: "https://via.placeholder.com/600x450/fff8e1/d39644?text=Bell+Appalam" // Placeholder Image 1
  },
  {
    name: "Bell Vadam",
    description: "Experience the traditional crunch of Bell Vadam. Sun-dried and seasoned, they are the perfect side dish for any hearty meal.",
    features: [
      "Authentic South Indian Vadam, a classic accompaniment to meals.",
      "Made with wholesome ingredients and traditional sun-drying methods.",
      "Lightweight, expands beautifully when fried or roasted.",
      "Versatile and loved by all generations, adds a festive touch to dishes."
    ],
    image: "https://via.placeholder.com/600x450/e8f5e9/4caf50?text=Bell+Vadam" // Placeholder Image 2
  },
  {
    name: "Bell Chips",
    description: "Crispy and flavorful Bell Chips, a perfect snack for any time of the day. Our unique seasoning makes them irresistibly delicious!",
    features: [
      "Expertly spiced for a burst of traditional flavors in every bite.",
      "Made from high-quality ingredients, ensuring a premium snacking experience.",
      "Perfectly thin and crunchy, ideal for solo snacking or sharing.",
      "Available in various traditional South Indian spice blends."
    ],
    image: "https://via.placeholder.com/600x450/e0f7fa/00bcd4?text=Bell+Chips" // Placeholder Image 3
  },
  {
    name: "Bell Rava",
    description: "Finely milled Bell Rava (Semolina), essential for delicious upma, dosa, and other traditional delicacies.",
    features: [
      "Premium quality semolina, perfect for a variety of South Indian dishes.",
      "Finely granulated for smooth texture and consistent cooking.",
      "Rich in nutrients, making it a healthy choice for everyday meals.",
      "Easy to cook, offering convenience without compromising on taste."
    ],
    image: "https://via.placeholder.com/600x450/e3f2fd/2196f3?text=Bell+Rava" // Placeholder Image 4
  }
];

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 5000;
  
  // State to track if the slider should be active (Desktop mode: > 1024px)
  const [isSliderActive, setIsSliderActive] = useState(true); 

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  // --- Auto-Sliding and Resize Logic ---
  useEffect(() => {
    const handleResize = () => {
      // Slider is active only if screen width is greater than 1024px
      setIsSliderActive(window.innerWidth > 1024);
    };

    // Initial check and setup listener
    handleResize(); 
    window.addEventListener('resize', handleResize);

    let timer;
    if (isSliderActive) {
      // Start auto-slide only if desktop mode is active
      timer = setInterval(() => {
        nextSlide();
      }, slideDuration);
    }
    
    // Cleanup function clears the interval and the resize listener
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentSlide, isSliderActive]); 

  return (
    <section id="product-slider" className={`${styles.productSection} section-padding`}>
      <div className={`container ${styles.productContainer}`} style={{ marginTop: '40px' }}>
        {/* Add margin-top to the container */}
        <div className={styles.productContent}>
          {/* Section Header with Conditional Navigation */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Products</h2>
            {/* Show navigation arrows ONLY if the slider is active (Desktop) */}
            {isSliderActive && (
              <div className={styles.navigation}>
                <button className={styles.navButton} onClick={prevSlide}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                </button>
                <button className={styles.navButton} onClick={nextSlide}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            )}
          </div>

          {/* Main Product Display Area */}
          <div className={styles.productDisplay}>
            
            {/* Left Column: Product Text Content */}
            <div className={styles.productTextContent}>
              <div className={styles.textSliderWrapper}>
                
                {products.map((product, index) => (
                  <div 
                    key={index} 
                    className={`${styles.productDetails} ${isSliderActive && index === currentSlide ? styles.active : ''}`}
                    // Apply transform only if slider is active (Desktop)
                    style={isSliderActive ? { transform: `translateY(${(index - currentSlide) * 100}%)` } : {}} 
                  >
                    
                    {/* --- STATIC CARD IMAGE (Visible on Tablet/Mobile via CSS) --- */}
                    <img src={product.image} alt={product.name} className={styles.productImageStatic} />
                    
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                    
                    <ul className={styles.featureList}>
                      {product.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className={styles.featureNumber}>0{idx + 1}</span> {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Removed the Discover More button from here */}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Product Image (Visible on Desktop via CSS) */}
            <div className={styles.productImageContainer}>
              <div className={styles.imageSliderWrapper}>
                
                {products.map((product, index) => (
                  <div 
                    key={index} 
                    className={`${styles.imageSlide} ${isSliderActive && index === currentSlide ? styles.active : ''}`}
                    // Apply transform only if slider is active (Desktop)
                    style={isSliderActive ? { transform: `translateX(${(index - currentSlide) * 100}%)` } : {}} 
                  >
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Discover More Button */}
          <div className={styles.discoverMoreWrapper}>
            <button className={styles.discoverButton}>
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;