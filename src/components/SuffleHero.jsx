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
            Happy With <span className="text-highlight">Delicious Food</span> And Get New Experiences With Asian Food
          </h1>
          <p>
            Exploring new food with different transition form all Asian country especially
            from Cambodia chat you can try at this place and get a good price from us as well 
            we will make a good impact to our customers
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
  { id: 1, src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" },
  { id: 2, src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
  { id: 3, src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
  { id: 4, src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
  { id: 5, src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1325&q=80" },
  { id: 6, src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" },{ id: 7, src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" },
  { id: 8, src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" },
  { id: 9, src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" },
  { id: 10, src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
  { id: 11, src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&auto=format&fit=crop&w=684&q=80" },
  { id: 12, src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&auto=format&fit=crop&w=882&q=80" },
  { id: 13, src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" },
  { id: 14, src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=686&q=80" },
  { id: 15, src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&auto=format&fit=crop&w=681&q=80" },
  { id: 16, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1820&q=80" },

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