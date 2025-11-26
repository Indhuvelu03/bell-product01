// components/ProductSnapshotRow.js
"use client";
import React, { useRef, useEffect } from 'react';
import styles from './ProductSnapshotRow.module.css';

const products = [
    // ... (products array remains the same)
    { id: 1, name: 'Chips', image: '' },
    { id: 2, name: 'Pappads', image: '' },
    { id: 3, name: 'Asafoetida', image: '' },
    { id: 4, name: 'Rava', image: '' },
    { id: 5, name: 'Vermicelli', image: '' },
    { id: 6, name: 'Wheat Flour', image: '' },
    { id: 7, name: 'Sago', image: '' },
    { id: 8, name: 'Spice Mix', image: '' },
];

const ProductSnapshotRow = () => {
  const scrollContainerRef = useRef(null);
  const scrollInterval = 3000; // 3 seconds

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Enable auto-scroll ONLY if the screen width is less than 1200px (Tablet/Mobile)
    if (typeof window !== 'undefined' && window.innerWidth >= 1200) {
      return;
    }

    let scrollAmount = 0;
    
    // --- ADJUSTED ITEM WIDTH FOR SCROLLING ---
    let itemWidth = 190; // Default for Tablet (<1200px)
    if (window.innerWidth <= 600) {
        // New item width: 140px (image box) + 20px (gap) = 160px
        itemWidth = 160; 
    }
    // --- END ADJUSTED ITEM WIDTH ---

    const autoScroll = () => {
      scrollAmount += itemWidth;

      // Check if we reached the end (allows for small errors)
      if (scrollAmount >= container.scrollWidth - container.clientWidth - 10) {
        scrollAmount = 0; // Reset to the start
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    };

    const intervalId = setInterval(autoScroll, scrollInterval);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className={styles.productSnapshotRow}>
      <div className={styles.snapshotGrid} ref={scrollContainerRef}>
        {products.map((product) => (
          <div key={product.id} className={styles.snapshotItem}>
            <div className={styles.imageBox}>{product.image}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSnapshotRow;