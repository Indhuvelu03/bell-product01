'use client';
import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div style={{ backgroundColor: '#76a20e' }}>
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        {/* <Nav /> */}
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav style={{
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 24px',
      color: 'white'
    }}>
      {/* <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f7e135', mixBlendMode: 'difference' }}>BELL BRAND</span> */}
      <button
        onClick={() => {
          document.getElementById("about-us")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.75rem',
          color: '#f7e135',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        ABOUT US <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)`, position: 'relative', width: '100%' }}
    >
      <CenterImage />

      <ParallaxImages />

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '24rem',
        background: 'linear-gradient(to bottom, transparent, #76a20e)'
      }} />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '64rem', padding: '0 16px', paddingTop: '200px' }}>
      <ParallaxImg
        src="https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="Bell Brand Appalam"
        start={-200}
        end={200}
        imgStyle={{ width: '33.333%', borderRadius: '8px' }}
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="Bell Brand Pappad"
        start={200}
        end={-250}
        imgStyle={{ width: '66.666%', margin: '0 auto', borderRadius: '8px' }}
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="Bell Brand Rava"
        start={-200}
        end={200}
        imgStyle={{ width: '33.333%', marginLeft: 'auto', borderRadius: '8px' }}
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="Bell Brand Chips"
        start={0}
        end={-500}
        imgStyle={{ width: '41.666%', marginLeft: '96px', borderRadius: '8px' }}
      />
    </div>
  );
};

const ParallaxImg = ({ imgStyle, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      ref={ref}
      style={{ ...imgStyle, transform, opacity, display: 'block' }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="about-us"
      style={{
        margin: '0 auto',
        maxWidth: '64rem',
        padding: '192px 16px',
        color: 'white'
      }}
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        style={{
          marginBottom: '40px',
          fontSize: '2.25rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          color: '#f7e135'
        }}
      >
        About Us
      </motion.h1>
      
      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.1 }}
        style={{
          fontSize: '1.125rem',
          lineHeight: '1.8',
          color: '#e8f5e9',
          marginBottom: '60px',
          maxWidth: '48rem'
        }}
      >
        Bell Brand has been a trusted name in South Indian households for decades. 
        We are committed to delivering authentic, high-quality food products that bring 
        the traditional flavors of Tamil Nadu to your table. Our products are crafted 
        with care, using time-honored recipes and the finest ingredients, ensuring 
        every bite is a celebration of taste and tradition. From crispy appalams to 
        aromatic spices, we take pride in preserving the culinary heritage of South India 
        while meeting the highest standards of quality and hygiene.
      </motion.p>

      <ScheduleItem title="Established Since 1985" date="Trusted for Generations" location="Tamil Nadu, India" />
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      style={{
        marginBottom: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #4caf50',
        padding: '0 12px 36px 12px'
      }}
    >
      <div>
        <p style={{ marginBottom: '6px', fontSize: '1.25rem', color: '#f7e135' }}>{title}</p>
        <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: '#a5d6a7' }}>{date}</p>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        textAlign: 'end',
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        color: '#a5d6a7'
      }}>
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};