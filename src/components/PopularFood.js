// components/PopularFood.js
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './PopularFood.module.css';

// --- Data ---
const categories = ["All", "Pappad", "Rava", "Asafotida", "Wheat", "Chips"];

// Initial list of food items with better images
const initialFoodItems = [
  {
    id: 1,
    category: "Pappad",
    name: "Appalam - Pappad",
    description: "South Indian Appalams, crafted for premium taste and crisp texture.",
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    liked: false
  },
  {
    id: 2,
    category: "Rava",
    name: "Whole Wheat Rava",
    description: "Whole Wheat Rava delivers wholesome nutrition and authentic South Indian texture.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    liked: false
  },
  {
    id: 3,
    category: "Chips",
    name: "Crispy Chips",
    description: "Crispy Chips offer irresistible crunch and taste, made with premium ingredients.",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    liked: false
  },
  {
    id: 4,
    category: "Pappad",
    name: "Rice Appalam",
    description: "Traditional rice appalams, light and airy, perfect with any meal.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    liked: false
  },
  {
    id: 5,
    category: "Rava",
    name: "Fine Semolina Rava",
    description: "Finely milled semolina for smooth puddings and delicate dishes.",
    image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    liked: false
  },
  {
    id: 6,
    category: "Chips",
    name: "Banana Chips",
    description: "Sweet and savory banana chips, a healthy and crunchy snack.",
    image: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    liked: false
  },
  {
    id: 7,
    category: "Asafotida",
    name: "Asafotida Powder",
    description: "A strong, pungent spice widely used in Indian vegetarian cooking.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    liked: false
  },
  {
    id: 8,
    category: "Wheat",
    name: "Atta Wheat Flour",
    description: "Premium whole wheat flour, ideal for making soft rotis and chapattis.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
      setDisplayedItems(allItems.filter(item => item.category === activeCategory));
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
          className={styles.foodGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {displayedItems.map((food, index) => (
              <motion.div 
                key={food.id} 
                className={styles.foodCard}
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
                    // onClick={() => handleViewDetails(food.id)}
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