// components/ProductSnapshotRow.js
"use client";
import React, { useRef, useEffect } from 'react';
import styles from './ProductSnapshotRow.module.css';

const products = [
    { id: 1, name: 'Chips', image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Pappads', image: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Asafoetida', image: 'https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Rava', image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 5, name: 'Vermicelli', image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 6, name: 'Wheat Flour', image: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 7, name: 'Sago', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 8, name: 'Spice Mix', image: 'https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
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
            <div className={styles.imageBox}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSnapshotRow;