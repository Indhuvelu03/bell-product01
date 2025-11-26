// components/PopularFood.js
"use client";
import React, { useState, useEffect } from 'react';
import styles from './PopularFood.module.css';

// --- Data ---
const categories = ["All", "Pappad", "Rava", "Asafotida", "Wheat", "Chips"];

// Initial list of food items
const initialFoodItems = [
  {
    id: 1,
    category: "Pappad",
    name: "Appalam - Pappad",
    description: "South Indian Appalams, crafted for premium taste and crisp texture.",
    image: "https://via.placeholder.com/300x200/fff8e1/d39644?text=Appalam+Pappad",
    liked: false
  },
  {
    id: 2,
    category: "Rava",
    name: "Whole Wheat Rava",
    description: "Whole Wheat Rava delivers wholesome nutrition and authentic South Indian texture fo...",
    image: "https://via.placeholder.com/300x200/c8e6c9/4caf50?text=Whole+Wheat+Rava",
    liked: false
  },
  {
    id: 3,
    category: "Chips",
    name: "Crispy Chips",
    description: "Crispy Chips offer irresistible crunch and taste, made with ingredients for snack lovers.",
    image: "https://via.placeholder.com/300x200/e1f5fe/29b6f6?text=Crispy+Chips",
    liked: false
  },
  {
    id: 4,
    category: "Pappad",
    name: "Rice Appalam",
    description: "Traditional rice appalams, light and airy, perfect with any meal.",
    image: "https://via.placeholder.com/300x200/ffe0b2/d7a84e?text=Rice+Appalam",
    liked: false
  },
  {
    id: 5,
    category: "Rava",
    name: "Fine Semolina Rava",
    description: "Finely milled semolina for smooth puddings and delicate dishes.",
    image: "https://via.placeholder.com/300x200/e8f5e9/4caf50?text=Fine+Semolina",
    liked: false
  },
  {
    id: 6,
    category: "Chips",
    name: "Banana Chips",
    description: "Sweet and savory banana chips, a healthy and crunchy snack.",
    image: "https://via.placeholder.com/300x200/f0f4c3/aed581?text=Banana+Chips",
    liked: false
  },
  {
    id: 7,
    category: "Asafotida",
    name: "Asafotida Powder",
    description: "A strong, pungent spice widely used in Indian vegetarian cooking.",
    image: "https://via.placeholder.com/300x200/e5e5e5/333333?text=Asafotida+Powder",
    liked: false
  },
  {
    id: 8,
    category: "Wheat",
    name: "Atta Wheat Flour",
    description: "Premium whole wheat flour, ideal for making soft rotis and chapattis.",
    image: "https://via.placeholder.com/300x200/f0fff0/7bc96b?text=Atta+Wheat+Flour",
    liked: false
  }
];

const PopularFood = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedItems, setDisplayedItems] = useState(initialFoodItems);

  // Parameter and filter logic based on the active category
  useEffect(() => {
    if (activeCategory === "All") {
      setDisplayedItems(initialFoodItems);
    } else {
      setDisplayedItems(initialFoodItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  // Handle liking/unliking a food item 
  const toggleLike = (id) => {
    setDisplayedItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <section id="popular-food" className={`${styles.popularFoodSection} section-padding`}>
      <div className="container">
        
        <h2 className={styles.sectionTitle}>Popular Food</h2>
        
        {/* Category Filter Navigation with Horizontal Scroll on Mobile */}
        <div className={styles.categoryNav}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Food Cards Grid */}
        <div className={styles.foodGrid}>
          {displayedItems.map(food => (
            <div key={food.id} className={styles.foodCard}>
              <div className={styles.cardHeader}>
                {/* Heart Icon (Like button) */}
                <button 
                  className={`${styles.likeButton} ${food.liked ? styles.liked : ''}`} 
                  onClick={() => toggleLike(food.id)}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    fill={food.liked ? "currentColor" : "none"} 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-heart"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                </button>
              </div>
              <div className={styles.cardImageWrapper}>
                <img src={food.image} alt={food.name} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.foodName}>{food.name}</h3>
                <p className={styles.foodDescription}>{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularFood;