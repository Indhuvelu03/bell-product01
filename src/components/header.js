// components/Header.js
"use client"
import React, { useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { name: 'About Us', href: '#about-us' }, // Matches the AboutUsCta section ID
  { name: 'Products', href: '#product-slider' }, // Matches the ProductSlider section ID
  { name: 'Features', href: '#popular-food' }, // Matches the PopularFood section ID
  { name: 'Contact', href: '#connect-with-us' }, // Matches the ConnectWithUs section ID
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navBar}>
          
          {/* Logo */}
          <div className={styles.logo}>
            <img 
              src="https://via.placeholder.com/40x40/a5df1f/304905?text=BELL" 
              alt="Bell Brand Appalam Logo" 
              className={styles.logoImage}
            />
          </div>
          
          {/* Hamburger/Close Icon */}
          <button 
            className={styles.menuToggle} 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" viewBox="0 0 24 24" 
              fill="none" stroke="currentColor" strokeWidth="2" 
              strokeLinecap="round" strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          {/* Navigation Links (Desktop View / Mobile Dropdown Card) */}
          <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
            <ul className={styles.navList}>
              {navLinks.map(link => (
                <li key={link.name} className={styles.navItem}>
                  <a href={link.href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;