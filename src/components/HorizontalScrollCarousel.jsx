'use client';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [scrollEnd, setScrollEnd] = useState("-140%");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      
      // Calculate scroll end based on actual card widths and gaps
      // Total cards: 5, Gap: 1rem (16px) or 1.5rem (24px)
      // We need to scroll until last card is at the right edge of viewport
      
      if (width < 640) {
        // Mobile: cards are ~85vw (max 350px), gap 1rem, padding 1rem each side
        // 5 cards = 5 * 350 + 4 * 16 + 32 padding = 1750 + 64 + 32 = 1846px track
        // Need to scroll: track - viewport = 1846 - width
        const cardWidth = Math.min(width * 0.85, 350);
        const trackWidth = (cardWidth * 5) + (16 * 4) + 32;
        const scrollDistance = ((trackWidth - width) / trackWidth) * 100;
        setScrollEnd(`-${scrollDistance}%`);
      } else if (width < 1024) {
        // Tablet: cards are ~70vw (max 500px), gap 1.5rem, padding 2rem each side
        const cardWidth = Math.min(width * 0.7, 500);
        const trackWidth = (cardWidth * 5) + (24 * 4) + 64;
        const scrollDistance = ((trackWidth - width) / trackWidth) * 100;
        setScrollEnd(`-${scrollDistance}%`);
      } else {
        // Desktop: cards are 45vw (min 600px), gap 1.5rem, padding 2rem each side
        const cardWidth = Math.max(width * 0.45, 600);
        const trackWidth = (cardWidth * 5) + (24 * 4) + 64;
        const scrollDistance = ((trackWidth - width) / trackWidth) * 100;
        setScrollEnd(`-${scrollDistance}%`);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", scrollEnd]);

  return (
    <section
      id="horizontal-scroll-carousel"
      ref={targetRef}
      style={{
        position: "relative",
        height: isMobile ? "350vh" : isTablet ? "400vh" : "300vh",
      }}
    >
      {/* Section Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          paddingTop: isMobile ? "0.5rem" : "2rem",
          paddingBottom: isMobile ? "0.25rem" : "1rem",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: isMobile ? "0.75rem" : "0.875rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#eab308",
          }}
        >
          What We Offer
        </span>
        <h2
          style={{
            fontSize: isMobile ? "1.5rem" : isTablet ? "1.875rem" : "2.25rem",
            fontWeight: "bold",
            color: "black",
            marginTop: "0.5rem",
          }}
        >
          Our Products
        </h2>
      </div>

      <div
        style={{
          position: "sticky",
          top: isMobile ? "3rem" : "6rem",
          display: "flex",
          height: isMobile ? "calc(100vh - 3rem)" : "calc(100vh - 6rem)",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{ 
            x, 
            display: "flex", 
            gap: isMobile ? "1rem" : "1.5rem", 
            padding: isMobile ? "0 1rem" : "0 2rem" 
          }}
        >
          {products.map((product) => {
            return <Card card={product} key={product.id} isMobile={isMobile} isTablet={isTablet} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, isMobile, isTablet }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate responsive dimensions
  const cardWidth = isMobile ? "85vw" : isTablet ? "70vw" : "45vw";
  const cardMinWidth = isMobile ? "280px" : isTablet ? "400px" : "600px";
  const cardHeight = isMobile ? "400px" : "500px";

  return (
    <div
      style={{
        position: "relative",
        height: cardHeight,
        width: cardWidth,
        minWidth: cardMinWidth,
        maxWidth: isMobile ? "350px" : isTablet ? "500px" : "none",
        overflow: "hidden",
        borderRadius: "0.75rem",
        backgroundColor: "#e5e5e5",
        cursor: "pointer",
        flexShrink: 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 1500)}
    >
      <div
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          transition: "transform 0.5s ease",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      ></div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          background: isHovered
            ? "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
          transition: "background 0.3s ease",
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: isMobile ? "1rem" : "1.5rem",
        }}
      >
        {/* Title - Always visible */}
        <h3
          style={{
            fontSize: isMobile ? "1.25rem" : "1.5rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "white",
            marginBottom: "0.5rem",
          }}
        >
          {card.name}
        </h3>

        {/* Description - Hidden initially, shown on hover */}
        <p
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: isMobile ? "0.8rem" : "0.875rem",
            marginBottom: isHovered ? "0.75rem" : 0,
            maxHeight: isHovered ? "100px" : 0,
            overflow: "hidden",
            opacity: isHovered ? 1 : 0,
            transition: "all 0.4s ease-out",
            lineHeight: 1.4,
          }}
        >
          {card.description}
        </p>

        {/* Bullet Points - Hidden initially, shown on hover */}
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "0.2rem" : "0.25rem",
            maxHeight: isHovered ? "200px" : 0,
            overflow: "hidden",
            opacity: isHovered ? 1 : 0,
            transition: "all 0.5s ease-out 0.1s",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {card.features.map((feature, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "rgba(255,255,255,0.85)",
                fontSize: isMobile ? "0.75rem" : "0.875rem",
              }}
            >
              <span
                style={{
                  color: "#eab308",
                  fontSize: isMobile ? "1rem" : "1.125rem",
                }}
              >
                •
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const products = [
  {
    id: 1,
    name: "Bell Appalam",
    description:
      "Authentic South Indian Appalams, crafted for premium taste and crisp texture.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "100% Natural Ingredients",
      "No Preservatives",
      "Crispy & Light",
      "Perfect with Rice & Sambar",
    ],
  },
  {
    id: 2,
    name: "Bell Vadam",
    description:
      "Traditional crunch of Bell Vadam. Sun-dried and seasoned to perfection.",
    image:
      "https://images.unsplash.com/photo-1625398407796-82650a8c135f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Sun-Dried Naturally",
      "Traditional Recipe",
      "Long Shelf Life",
      "Ready to Fry",
    ],
  },
  {
    id: 3,
    name: "Bell Chips",
    description:
      "Crispy and flavorful Bell Chips, perfect snack for any time of the day.",
    image:
      "https://images.unsplash.com/photo-1621447504864-d8686e12698c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Crunchy Texture",
      "Multiple Flavors",
      "Party Favorite",
      "Made Fresh Daily",
    ],
  },
  {
    id: 4,
    name: "Bell Rava",
    description:
      "Finely milled Bell Rava, essential for delicious upma and dosa.",
    image:
      "https://images.unsplash.com/photo-1509358271058-aedd22b89f8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Premium Quality Wheat",
      "Fine & Coarse Options",
      "Ideal for Upma & Kesari",
      "No Additives",
    ],
  },
  {
    id: 5,
    name: "Bell Asafoetida",
    description:
      "Pure and aromatic asafoetida for authentic South Indian cooking.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Strong Aroma",
      "Enhances Flavor",
      "Pure & Authentic",
      "Essential for Tadka",
    ],
  },
];