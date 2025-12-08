// components/PopularFood.js
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './PopularFood.module.css';

// --- Data ---
const categories = ["All", "Appalam", "Pappad", "Chips", "Spices", "Rava"];

// Food items data matching product page
const initialFoodItems = [
  {
    id: 1,
    category: "Appalam",
    name: "Appalam",
    description: "Export quality traditional Appalam available in multiple sizes.",
    image: "https://i.pinimg.com/1200x/a3/c7/58/a3c758c793568876adacd19fe3379fae.jpg",
    liked: false
  },
  {
    id: 2,
    category: "Chips",
    name: "Masala Chips",
    description: "Spicy and crunchy Masala Chips enriched with pepper and cumin.",
    image: "https://i.pinimg.com/1200x/94/f8/f1/94f8f1fa1f07536f20bbeba3c99b1c84.jpg",
    liked: false
  },
  {
    id: 3,
    category: "Spices",
    name: "Asafetida (Kayam)",
    description: "Strong and aromatic Compounded Asafoetida for authentic cooking.",
    image: "https://i.pinimg.com/1200x/2e/6f/a3/2e6fa3e171a07fe215986de34bbe2611.jpg",
    liked: false
  },
  {
    id: 4,
    category: "Rava",
    name: "Samba Rava",
    description: "Premium quality Samba Wheat Rava for healthy breakfast options.",
    image: "https://i.pinimg.com/1200x/c7/0f/3a/c70f3a8b2c5eb72934b0d119e2f36115.jpg",
    liked: false
  },
  {
    id: 5,
    category: "Pappad",
    name: "Pappad",
    description: "Crispy and flavorful traditional Pappad made with premium ingredients.",
    image: "https://media.assettype.com/kalkionline/2024-03/110f1bb6-c4a4-4f07-92e0-815698b9e03b/Vadaam_Image.jpg?w=1200&ar=40:21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
    liked: false
  },
  {
    id: 6,
    category: "Rava",
    name: "Whole Wheat Rava",
    description: "Nutritious whole wheat rava for healthy and wholesome meals.",
    image: "https://i.pinimg.com/1200x/a5/d3/e5/a5d3e53177794b10ebd2a321355133e2.jpg",
    liked: false
  }
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

const PopularFood = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedItems, setDisplayedItems] = useState(initialFoodItems);
  const [allItems, setAllItems] = useState(initialFoodItems);

  useEffect(() => {
    if (activeCategory === "All") {
      setDisplayedItems(allItems);
    } else {
      // For specific category, show only the first item of that category
      const filteredItems = allItems.filter(item => item.category === activeCategory);
      setDisplayedItems(filteredItems.slice(0, 1));
    }
  }, [activeCategory, allItems]);

  const toggleLike = (id) => {
    setAllItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  const handleViewDetails = (productId) => {
    router.push(`/product/${productId}`);
  };

  const isFullWidth = activeCategory !== "All";

  return (
    <motion.section 
      id="popular-food" 
      className={`${styles.popularFoodSection} section-padding`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
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
          <span className={styles.sectionSubtitle}>Discover Our Range</span>
          <h2 className={styles.sectionTitle}>Popular Products</h2>
          <p className={styles.sectionDescription}>
            Explore our finest selection of traditional South Indian delicacies
          </p>
        </motion.div>
        
        {/* Category Filter Navigation */}
        <motion.div 
          className={styles.categoryNav}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Food Cards Grid */}
        <motion.div 
          className={`${styles.foodGrid} ${isFullWidth ? styles.foodGridSingle : ''}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {displayedItems.map((food, index) => (
              <motion.div 
                key={food.id} 
                className={`${styles.foodCard} ${isFullWidth ? styles.foodCardFull : ''}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.cardImageWrapper}>
                  <motion.img 
                    src={food.image} 
                    alt={food.name} 
                    className={styles.cardImage}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className={styles.cardOverlay}>
                    <motion.button 
                      className={`${styles.likeButton} ${food.liked ? styles.liked : ''}`} 
                      onClick={() => toggleLike(food.id)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="22" height="22" viewBox="0 0 24 24" 
                        fill={food.liked ? "currentColor" : "none"} 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                      </svg>
                    </motion.button>
                  </div>
                  <div className={styles.categoryBadge}>{food.category}</div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.foodName}>{food.name}</h3>
                  <p className={styles.foodDescription}>{food.description}</p>
                  <motion.button 
                    className={styles.viewButton}
                    onClick={() => handleViewDetails(food.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {/* <motion.div 
          className={styles.viewAllWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button 
            className={styles.viewAllButton}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(26, 71, 42, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default PopularFood;