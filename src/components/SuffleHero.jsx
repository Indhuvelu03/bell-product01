'use client';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from './SuffleHero.module.css';

const ShuffleHero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const btnstyles = {
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      backgroundColor: "#80A80A",   // green color similar to your sample
      color: "white",
      border: "none",
      borderRadius: "8px",
      padding: "10px 24px",
      // fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      width: "100%",        // makes it responsive
      maxWidth: "280px",    // prevents it from stretching too large
      transition: "0.2s",
    },
  };

  return (
    <section className={styles.heroSection}>
        <div className={styles.heroTextContent}>
          <h1 className="heading-font">
            Experience Authentic <span className="text-highlight">South Indian Flavors</span> With Bell Brand Traditional Foods
          </h1>
          <p>
            Discover the rich taste of authentic South Indian cuisine with our premium range of 
            traditional products. From crispy Appalam to aromatic spices and wholesome wheat rava, 
            we bring you the finest quality ingredients crafted with time-honored recipes and modern hygiene standards.
          </p>
          <div className={styles.heroActions}>
            {/* <button 
              className="btn-primary"
              onClick={() => scrollToSection('connect-with-us')}
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button> */}

            {/* <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "#80A80A",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px 24px",
                fontWeight: "600",
                cursor: "pointer",   // 👈 inline here
                width: "100%",
                maxWidth: "280px",
                transition: "0.2s",
              }}
            >
              Get in Touch <span style={{ fontSize: "18px" }}>➜</span>
            </button> */}

          </div>
        </div>
        <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  { id: 1, src: "https://i.pinimg.com/1200x/7f/75/6b/7f756b24abb992d779d0f7f89d43c9fe.jpg" },
  { id: 2, src: "https://i.pinimg.com/736x/4c/a9/81/4ca981f8fd9314a3857b8c3d94007b0e.jpg" },
  { id: 3, src: "https://i.pinimg.com/1200x/cd/0e/d6/cd0ed6938f3dc2cd11ca2a7f63e9eb67.jpg" },
  { id: 4, src: "https://i.pinimg.com/1200x/13/dc/95/13dc9580ebff657ab874ae7d37d80b54.jpg" },
  { id: 5, src: "https://5.imimg.com/data5/SELLER/Default/2024/9/451437705/RL/EQ/WC/130639282/samba-wheat-rava-1000x1000.jpg" },
  { id: 6, src: "https://i.pinimg.com/1200x/45/a8/b5/45a8b5aa9108cb1db4466a8e2899a983.jpg" },
  { id: 7, src: "https://i.pinimg.com/736x/09/a5/3d/09a53d5e8cd471d7bed296d09f884708.jpg" },
  { id: 8, src: "https://i.pinimg.com/1200x/dd/65/1e/dd651ec70c9cb2afdd8de27603061ecd.jpg" },
  { id: 9, src: "https://i.pinimg.com/736x/5f/72/51/5f7251937308408c6d44a88942df3d57.jpg" },
  { id: 10, src: "https://i.pinimg.com/736x/3e/64/4d/3e644d0701a187e2756391dafbc739d5.jpg" },
  { id: 11, src: "https://i.pinimg.com/736x/b9/ff/c3/b9ffc35725bb0a41031a825c1c4d76d4.jpg" },
  { id: 12, src: "https://i.pinimg.com/736x/71/56/c8/7156c8bc4f413b69f2b43ff6976e36f1.jpg" },
  { id: 13, src: "https://i.pinimg.com/1200x/af/16/0c/af160cfd9802b3498007662f9fcb5560.jpg" },
  { id: 14, src: "https://i.pinimg.com/736x/b2/9b/03/b29b03746f2c4c8a312a007f632eacaa.jpg" },
  { id: 15, src: "https://i.pinimg.com/1200x/de/61/d6/de61d6c893bffa8c509a162db3017e44.jpg" },
  { id: 16, src: "https://i.pinimg.com/1200x/5b/b7/f8/5bb7f83ea04482e62c587ce660a40252.jpg" },

];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      style={{
        width: "50%%",
        height: "100%",
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className={styles.shuffleGrid}>
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;