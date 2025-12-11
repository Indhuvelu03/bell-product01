'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA FROM IMAGES & TEXT ---
const foodItems = [
  {
    id: 1,
    category: "Appalam",
    name: "Appalam",
    description: "Export quality traditional Appalam available in multiple sizes.",
    fullDescription: "Our export-quality Bell Brand Appalam is crafted using a blend of Urid and Rice flour. It delivers the authentic crunch and taste of South India. Perfectly seasoned and prepared under strict hygiene standards.",
    image: "https://i.pinimg.com/1200x/93/60/fb/9360fbeaa375f4e89448122d50566c35.jpg",
    price: "₹160",
    originalPrice: "₹200",
    weight: "30g, 60g, 100g, 160g, 200g, 250g, 300g, 500g",
    ingredients: ["Urid Flour", "Rice Flour", "Salt", "Vegetable Oil", "Calcium Carbonate"],
    nutritionalInfo: { calories: "343.81 Kcal", protein: "18.66g", carbs: "58.11g", fat: "0.36g", fiber: "2g" },
    benefits: ["Export Quality", "High Protein", "Calcium Enriched", "Traditional Taste"],
    features: ["FSSAI Certified", "No Artificial Colors", "Hygienically Packed", "Vegetarian"],
    rating: 4.8,
    reviews: 320,
    inStock: true,
    sku: "BELL-APP-EXP"
  },
  {
    id: 2,
    category: "Chips",
    name: "Masala Chips",
    description: "Spicy and crunchy Masala Chips enriched with pepper and cumin.",
    fullDescription: "These Masala Chips are a spicy delight, made with a base of Urid flour and seasoned with black pepper, cumin, and asafoetida. A perfect tea-time snack that brings a burst of flavor in every bite.",
    // image: "https://i.pinimg.com/1200x/14/f6/29/14f629b47c24937054a0e78c0b2809a4.jpg",
    image: "/papad1.jpeg",
    price: "₹80",
    originalPrice: "₹100",
    weight: "80g, 210g, 1kg",
    ingredients: ["Urid flour", "Pepper", "Salt", "Sodium Bicarbonate", "Asafoetida", "Cumin", "Vegetable Oil"],
    nutritionalInfo: { calories: "360 kcal", protein: "14g", carbs: "62g", fat: "4g", fiber: "3g" },
    benefits: ["Rich in Spices", "Digestive Aids", "Crispy Texture", "Perfect Snack"],
    features: ["Spicy Flavor", "Premium Ingredients", "Vegetarian", "Ready to Fry"],
    rating: 4.7,
    reviews: 145,
    inStock: true,
    sku: "BELL-MSL-CHP"
  },
  {
    id: 3,
    category: "Spices",
    name: "Asafoetida (Kayam)",
    description: "Strong and aromatic Compounded Asafoetida for authentic cooking.",
    fullDescription: "Our Kayam (Asafoetida) is compounded with high-quality wheat flour and edible gum to provide a strong, lasting aroma. Essential for Sambhar, Rasam, and other traditional Indian dishes.",
    image: "https://i.pinimg.com/1200x/eb/c5/e6/ebc5e6018493d10f80c8add506bc677b.jpg",
    price: "₹55",
    originalPrice: "₹70",
    weight: "25g, 50g, 100g",
    ingredients: ["Wheat flour", "Edible Arabic Gum", "Asafoetida", "Wheat flour used 65% Approx"],
    nutritionalInfo: { calories: "297 kcal", protein: "4g", carbs: "68g", fat: "1g", fiber: "4g" },
    benefits: ["Strong Aroma", "Digestive Aid", "Enhances Flavor", "Traditional Recipe"],
    features: ["Compounded", "Vegetarian", "Use sparingly", "Long Shelf Life"],
    rating: 4.9,
    reviews: 210,
    inStock: true,
    sku: "BELL-ASF-KYM"
  },
  {
    id: 4,
    category: "Rava",
    name: "Samba Rava",
    description: "Premium quality Samba Wheat Rava for healthy breakfast options.",
    fullDescription: "High-quality broken wheat (Samba Rava) perfect for making Upma, Porridge, and Kesari. Packed with fiber and nutrients, it is a healthy alternative to refined grains.",
    image: "https://i.pinimg.com/736x/ea/fd/d0/eafdd0d31c2453bf7533d7fa14addb06.jpg",
    price: "₹65",
    originalPrice: "₹85",
    weight: "500g",
    ingredients: ["100% Samba Wheat Granules"],
    nutritionalInfo: { calories: "340 kcal", protein: "12g", carbs: "71g", fat: "1.5g", fiber: "10g" },
    benefits: ["High Fiber", "Low Glycemic Index", "Rich in Nutrients", "Diet Friendly"],
    features: ["Double Roasted", "Cleaned", "No Preservatives", "Vegetarian"],
    rating: 4.6,
    reviews: 98,
    inStock: true,
    sku: "BELL-SMB-RVA"
  },
  {
    id: 5,
    category: "Pappad",
    name: "Pappad",
    description: "Crispy and flavorful traditional Pappad made with premium ingredients.",
    fullDescription: "Our Bell Brand Pappad is crafted using traditional recipes passed down through generations. Made with carefully selected lentils and spices, these papads offer the perfect crunch and authentic taste. Ideal as a side dish or snack, they fry up golden and crispy every time.",
    image: "https://i.pinimg.com/1200x/06/4e/29/064e29732b57a88ca1c376924c252639.jpg",
    price: "₹120",
    originalPrice: "₹150",
    weight: "100g, 200g, 500g",
    ingredients: ["Urid Dal", "Black Pepper", "Cumin", "Salt", "Asafoetida", "Vegetable Oil"],
    nutritionalInfo: { calories: "350 kcal", protein: "20g", carbs: "55g", fat: "2g", fiber: "3g" },
    benefits: ["High Protein", "Crispy Texture", "Traditional Recipe", "Versatile Snack"],
    features: ["FSSAI Certified", "No Preservatives", "Ready to Fry", "Vegetarian"],
    rating: 4.7,
    reviews: 185,
    inStock: true,
    sku: "BELL-PPD-TRD"
  },
  {
    id: 6,
    category: "Rava",
    name: "Whole Wheat Rava",
    description: "Nutritious whole wheat rava for healthy and wholesome meals.",
    fullDescription: "Our Whole Wheat Rava is made from 100% whole wheat grains, retaining all the natural fiber and nutrients. Perfect for making nutritious upma, kheer, halwa, and other traditional dishes. A healthier alternative that doesn't compromise on taste or texture.",
    image: "https://i.pinimg.com/736x/1c/35/61/1c3561cd8ee3ebc47e3b7cf8bc943ef2.jpg",
    price: "₹75",
    originalPrice: "₹95",
    weight: "500g, 1kg",
    ingredients: ["100% Whole Wheat Grains"],
    nutritionalInfo: { calories: "330 kcal", protein: "11g", carbs: "68g", fat: "2g", fiber: "12g" },
    benefits: ["100% Whole Grain", "High Fiber", "Rich in Nutrients", "Heart Healthy"],
    features: ["Stone Ground", "No Additives", "No Preservatives", "Vegetarian"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    sku: "BELL-WHL-RVA"
  }
];

// --- STYLES OBJECT ---
const theme = {
  colors: {
    primary: '#3f4195',    // Deep Forest Green
    secondary: '#cbdb3a',  // Gold/Bronze
    bg: '#fcfbf9',         // Warm Off-white
    text: '#2c3e50',       // Dark Blue-Grey
    textLight: '#7f8c8d',  // Muted Grey
    white: '#ffffff',
    lightGrey: '#f5f6fa',
    border: '#e1e4e8',
    whatsapp: '#69ea76'
  },
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Inter", sans-serif',
  },
  shadows: {
    soft: '0 10px 30px rgba(0,0,0,0.05)',
    hover: '0 15px 35px rgba(26, 71, 42, 0.15)',
    card: '0 4px 15px rgba(0,0,0,0.03)'
  }
};

const styles = {
  // Global & Layout
  wrapper: {
    minHeight: '100vh',
    background: theme.colors.bg,
    color: theme.colors.text,
    fontFamily: theme.fonts.body,
    paddingBottom: '4rem',
  },
  navbar: {
    padding: '1.2rem 1.5rem',
    // background: theme.colors.white,
    borderBottom: `1px solid ${theme.colors.border}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
  },
  navLogo: {
    fontFamily: theme.fonts.heading,
    fontSize: '1.8rem',
    fontWeight: '700',
    color: theme.colors.primary,
    cursor: 'pointer',
    letterSpacing: '-0.5px'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  
  // Detail View
  breadcrumbBar: {
    // background: theme.colors.white,
    padding: '1rem 0',
    marginBottom: '2rem',
    borderBottom: `1px solid ${theme.colors.border}`,
    backgroundColor: '#ffffff',
    marginTop: '10px',
    position: 'sticky',
    top: '70px',
    zIndex: 100
  },
  breadcrumbs: {
    display: 'flex',
    gap: '0.5rem',
    fontSize: '0.85rem',
    color: theme.colors.textLight,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  breadcrumbLink: {
    cursor: 'pointer',
    transition: 'color 0.2s',
    color: theme.colors.textLight,
    textDecoration: 'none'
  },
  breadcrumbSeparator: {
    color: theme.colors.border,
    fontSize: '0.8rem'
  },
  breadcrumbActive: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontFamily: theme.fonts.heading,
    fontSize: '1rem'
  },
  mainSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start'
  },
  mainImageBox: {
    background: theme.colors.white,
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: theme.shadows.soft,
    position: 'relative'
  },
  mainImage: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    display: 'block'
  },
  prodCategory: {
    color: theme.colors.secondary,
    fontSize: '0.9rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '0.5rem',
    display: 'block'
  },
  backBtn: {
    padding: '10px 20px',
    background: 'transparent',  
    border: '1px solid #0000005b',
    borderRadius: '60px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    color: theme.colors.textLight,
    transition: 'all 0.3s ease',
    marginBottom: '1rem'

  },
  prodTitle: {
    fontFamily: theme.fonts.heading,
    fontSize: '3rem',
    color: theme.colors.primary,
    fontWeight: '700',
    margin: '0 0 1rem 0',
    lineHeight: 1.1
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    borderBottom: `1px solid ${theme.colors.border}`
  },
  description: {
    lineHeight: 1.8,
    color: theme.colors.text,
    fontSize: '1.05rem',
    marginBottom: '2rem'
  },
  weightContainer: {
    marginBottom: '2.5rem'
  },
  weightLabel: {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: theme.colors.textLight,
    marginBottom: '0.8rem'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginBottom: '2.5rem'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    fontSize: '0.95rem',
    color: theme.colors.text
  },
  checkIcon: {
    color: theme.colors.secondary,
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  actionsRow: {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem'
  },
  btnPrimary: {
    flex: 2,
    padding: '1.2rem',
    background: theme.colors.primary,
    color: theme.colors.white,
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(26, 71, 42, 0.3)',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  btnSecondary: {
    flex: 1,
    padding: '1.2rem',
    background: theme.colors.whatsapp,
    color: theme.colors.white,
    border: 'none',
    // borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    // boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  },

  // Tabs
  tabSection: {
    marginTop: '5rem',
    borderTop: `1px solid ${theme.colors.border}`,
    paddingTop: '3rem'
  },
  tabHeaders: {
    display: 'flex',
    gap: '3rem',
    marginBottom: '3rem',
    justifyContent: 'center',
    borderBottom: `1px solid ${theme.colors.border}`
  },
  tabBtn: {
    padding: '0 0 1rem 0',
    background: 'transparent',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: theme.colors.textLight,
    cursor: 'pointer',
    position: 'relative',
    fontFamily: theme.fonts.heading,
    transition: 'all 0.3s'
  },
  tabBtnActive: {
    color: theme.colors.primary,
    fontWeight: '700'
  },
  activeLine: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: '3px',
    background: theme.colors.secondary,
    borderRadius: '3px 3px 0 0'
  },
  tabContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center'
  },
  nutritionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '1.5rem'
  },
  nutritionCard: {
    background: theme.colors.white,
    padding: '1.5rem 1rem',
    borderRadius: '12px',
    border: `1px solid ${theme.colors.border}`,
    transition: 'transform 0.3s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem'
  },
  nutritionLabel: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: theme.colors.textLight
  },
  nutritionValue: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: theme.colors.primary,
    fontFamily: theme.fonts.heading
  },
  // New table styles
  nutritionTable: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    borderCollapse: 'separate',
    borderSpacing: '0'
  },
  nutritionTableRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  nutritionTableCell: {
    background: theme.colors.white,
    padding: '1.5rem 2rem',
    borderRadius: '12px',
    border: `1px solid ${theme.colors.border}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.8rem',
    minWidth: '140px',
    flex: '1 1 140px',
    maxWidth: '180px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
  },
  
  // Replace the NutritionTable component with this new one
  nutritionTableWrapper: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  },
  
  nutritionTable: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  
  nutritionTh: {
    background: 'linear-gradient(135deg, #3f4195 0%, #5a5db8 100%)',
    color: '#ffffff',
    padding: '1.2rem 1.5rem',
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '0.95rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  
  nutritionThFirstChild: {
    borderTopLeftRadius: '12px',
  },
  
  nutritionThLastChild: {
    borderTopRightRadius: '12px',
    textAlign: 'right',
  },
  
  nutritionTr: {
    transition: 'all 0.3s ease',
    cursor: 'default',
  },
  
  nutritionTrEven: {
    backgroundColor: '#ffffff',
  },
  
  nutritionTrOdd: {
    backgroundColor: '#f8f9fc',
  },
  
  nutritionTrLastChildTdFirstChild: {
    borderBottomLeftRadius: '12px',
  },
  
  nutritionTrLastChildTdLastChild: {
    borderBottomRightRadius: '12px',
  },
  
  nutritionTd: {
    padding: '1rem 1.5rem',
    borderBottom: '1px solid #e8eaef',
  },
  
  nutritionTrLastChildTd: {
    borderBottom: 'none',
  },
  
  nutritionTdLabelCell: {
    fontWeight: '500',
    color: '#2c3e50',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  
  nutrientIcon: {
    fontSize: '1.2rem',
  },
  
  nutritionTdValueCell: {
    textAlign: 'right',
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#3f4195',
    fontFamily: theme.fonts.body,
    
  },
  
  // Mobile Card View - Hidden on Desktop
  nutritionMobileCards: {
    display: 'none',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
  },
  
  nutritionMobileCard: {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '1.2rem',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    border: '1px solid #e8eaef',
  },
  
  mobileCardIcon: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
  },
  
  mobileCardLabel: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#7f8c8d',
    marginBottom: '0.3rem',
  },
  
  mobileCardValue: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#3f4195',
    fontFamily: theme.fonts.heading,
  },
};

const StarRating = ({ rating }) => (
  <div style={{ color: theme.colors.secondary, fontSize: '1.1rem', letterSpacing: '2px' }}>
    {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
  </div>
);

// Add this new component before the main export
const NutritionTable = ({ nutritionalInfo }) => {
  const nutritionData = Object.entries(nutritionalInfo);
  
  return (
    <motion.div 
      className="nutrition-table-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <table className="nutrition-table">
        <thead>
          <motion.tr
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <th className="nutrition-th">Nutrient</th>
            <th className="nutrition-th">Value (per 100g)</th>
          </motion.tr>
        </thead>
        <tbody>
          {nutritionData.map(([key, value], index) => (
            <motion.tr
              key={key}
              className={`nutrition-tr ${index % 2 === 0 ? 'even' : 'odd'}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.1 + index * 0.08,
                ease: "easeOut"
              }}
              whileHover={{ 
                backgroundColor: '#f0f4ff',
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              <td className="nutrition-td label-cell">
                <span className="nutrient-icon">
                  {key === 'calories' }
                  {key === 'protein' }
                  {key === 'carbs' }
                  {key === 'fat' }
                  {key === 'fiber'}
                </span>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </td>
              <td className="nutrition-td value-cell">{value}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      
      {/* Mobile Card View */}
      <div className="nutrition-mobile-cards">
        {nutritionData.map(([key, value], index) => (
          <motion.div
            key={key}
            className="nutrition-mobile-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -3,
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              transition: { duration: 0.2 }
            }}
          >
            <div className="mobile-card-icon">
              {key === 'calories' }
              {key === 'protein' }
              {key === 'carbs' }
              {key === 'fat' }
              {key === 'fiber' }
            </div>
            <div className="mobile-card-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
            <div className="mobile-card-value">{value}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// --- MAIN APP COMPONENT ---
export default function ProductDetails() {
  const params = useParams();
  const productId = parseInt(params.id);
  
  const [activeTab, setActiveTab] = useState('description');
  const [productName, setProductName] = useState('');

  const currentProduct = foodItems.find(p => p.id === productId);
  const recommendedProducts = currentProduct ? foodItems.filter(item => item.id !== currentProduct.id).slice(0, 3) : [];

  // Handle product not found
  if (!currentProduct) {
    return (
      <div style={styles.wrapper}>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;700&display=swap');
          `}
        </style>
        <nav style={styles.navbar}>
          <div style={styles.navLogo} onClick={() => window.location.href = '/'}>BELL BRAND</div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.colors.text }}>Help: +91 98765 43210</span>
          </div>
        </nav>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <h1 style={{ fontFamily: theme.fonts.heading, fontSize: '2rem', color: theme.colors.primary }}>Product Not Found</h1>
            <p style={{ color: theme.colors.textLight, marginTop: '1rem' }}>The product you're looking for doesn't exist.</p>
            <button 
              onClick={() => window.location.href = '/'}
              style={{ ...styles.btnPrimary, marginTop: '2rem', display: 'inline-block' }}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const whatsappNumber = "919840956836";
  const whatsappMessage = `Hello! I'm interested in Bell Brand products, specifically ${productName}.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  const goToHome = () => {
    window.location.href = '/';
  };
  
  const goToProductsList = () => {
    window.location.href = '/#popular-food';
  };

  const goToProduct = (id) => {
    window.location.href = `/product/${id}`;
  };

  return (
    <div style={styles.wrapper}>
      {/* Inject Fonts & Global Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;700&display=swap');
          
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #f1f1f1; }
          ::-webkit-scrollbar-thumb { background: #c1a57b; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #1a472a; }
          
          .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(26, 71, 42, 0.4) !important; }
          .btn-secondary:hover { transform: translateY(-2px); }
          .card:hover { transform: translateY(-5px) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; }
          .back-btn:hover { background: #fff !important; border-color: #1a472a !important; color: #1a472a !important; }
          .breadcrumb-link:hover { color: #1a472a !important; text-decoration: underline; }
          
          /* Nutrition Table Styles */
          .nutrition-table-wrapper {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .nutrition-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          }
          
          .nutrition-th {
            background: linear-gradient(135deg, #3f4195 0%, #5a5db8 100%);
            color: #ffffff;
            padding: 1.2rem 1.5rem;
            text-align: left;
            font-weight: 600;
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .nutrition-th:first-child {
            border-top-left-radius: 12px;
          }
          
          .nutrition-th:last-child {
            border-top-right-radius: 12px;
            text-align: right;
          }
          
          .nutrition-tr {
            transition: all 0.3s ease;
            cursor: default;
          }
          
          .nutrition-tr.even {
            background-color: #ffffff;
          }
          
          .nutrition-tr.odd {
            background-color: #f8f9fc;
          }
          
          .nutrition-tr:last-child td:first-child {
            border-bottom-left-radius: 12px;
          }
          
          .nutrition-tr:last-child td:last-child {
            border-bottom-right-radius: 12px;
          }
          
          .nutrition-td {
            padding: 1rem 1.5rem;
            border-bottom: 1px solid #e8eaef;
          }
          
          .nutrition-tr:last-child .nutrition-td {
            border-bottom: none;
          }
          
          .nutrition-td.label-cell {
            font-weight: 500;
            color: #2c3e50;
            display: flex;
            align-items: center;
            gap: 0.8rem;
          }
          
          .nutrient-icon {
            font-size: 1.2rem;
          }
          
          .nutrition-td.value-cell {
            text-align: right;
            font-weight: 700;
            color: #3f4195;
            font-family: "sans-serif;
            font-size: 1.1rem;
          }
          
          /* Mobile Card View - Hidden on Desktop */
          .nutrition-mobile-cards {
            display: none;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .nutrition-mobile-card {
            background: #ffffff;
            border-radius: 12px;
            padding: 1.2rem;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            border: 1px solid #e8eaef;
          }
          
          .mobile-card-icon {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
          }
          
          .mobile-card-label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #7f8c8d;
            margin-bottom: 0.3rem;
          }
          
          .mobile-card-value {
            font-size: 1.3rem;
            font-weight: 700;
            color: #3f4195;
            font-family: sans-serif;
          }
          
          /* Responsive Styles */
          .main-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }
          
          .main-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            display: block;
          }
          
          .prod-title {
            font-family: "Playfair Display", serif;
            font-size: 3rem;
            color: #3f4195;
            font-weight: 700;
            margin: 0 0 1rem 0;
            line-height: 1.1;
          }
          
          .tab-headers {
            display: flex;
            gap: 3rem;
            margin-bottom: 3rem;
            justify-content: center;
            border-bottom: 1px solid #e1e4e8;
          }
          
          .actions-row {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
          }
          
          .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-bottom: 2.5rem;
          }
          
          .container-main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 2rem;
          }
          
          /* Tablet Styles */
          @media (max-width: 1024px) {
            .main-section {
              gap: 2.5rem;
            }
            
            .prod-title {
              font-size: 2.5rem;
            }
            
            .main-image {
              height: 400px;
            }
            
            .container-main {
              padding: 2rem 1.5rem;
            }
          }
          
          /* Mobile Styles */
          @media (max-width: 768px) {
            .breadcrumb-bar {
              top: 60px !important;
            }
            
            .main-section {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .main-image {
              height: 300px;
            }
            
            .prod-title {
              font-size: 2rem;
            }
            
            .tab-headers {
              gap: 1rem;
              flex-wrap: wrap;
              padding: 0 0.5rem;
            }
            
            .actions-row {
              flex-direction: column;
            }
            
            .actions-row button {
              flex: none !important;
              width: 100%;
            }
            
            .features-grid {
              grid-template-columns: 1fr;
            }
            
            .container-main {
              padding: 1.5rem 1rem;
            }
            
            .benefits-wrapper {
              gap: 0.5rem !important;
            }
            
            .benefits-wrapper > div {
              font-size: 0.75rem !important;
              padding: 0.4rem 0.8rem !important;
            }
            
            .weight-badges {
              gap: 0.5rem !important;
            }
            
            .weight-badges > span {
              padding: 0.5rem 0.8rem !important;
              font-size: 0.8rem !important;
            }
            
            /* Hide table, show cards on mobile */
            .nutrition-table {
              display: none;
            }
            
            .nutrition-mobile-cards {
              display: grid;
            }
          }
          
          /* Small Mobile Styles */
          @media (max-width: 480px) {
            .breadcrumb-bar {
              top: 50px !important;
            }
            
            .main-image {
              height: 250px;
            }
            
            .prod-title {
              font-size: 1.6rem;
            }
            
            .tab-headers {
              gap: 3rem;
            }
            
            .tab-headers button {
              font-size: 0.9rem !important;
              padding: 0 0 0.8rem 0 !important;
            }
            
            .nutrition-mobile-cards {
              grid-template-columns: repeat(2, 1fr);
              gap: 0.8rem;
            }
            
            .nutrition-mobile-card {
              padding: 1rem 0.8rem;
            }
            
            .mobile-card-icon {
              font-size: 1.5rem;
            }
            
            .mobile-card-label {
              font-size: 0.65rem;
            }
            
            .mobile-card-value {
              font-size: 1.1rem;
            }
          }
        `}
      </style>

      {/* Product Details View */}
      <div className="breadcrumb-bar" style={styles.breadcrumbBar}>
        <div style={styles.breadcrumbs}>
          <span onClick={goToHome} className="breadcrumb-link" style={styles.breadcrumbLink}>Home</span>
          <span style={styles.breadcrumbSeparator}>/</span>
          <span onClick={goToProductsList} className="breadcrumb-link" style={styles.breadcrumbLink}>Products</span>
          <span style={styles.breadcrumbSeparator}>/</span>
          <span style={styles.breadcrumbActive}>{currentProduct.name}</span>
        </div>
      </div>

      <div className="container-main">
        <button onClick={goToProductsList} className="back-btn" style={styles.backBtn}>
          ← Back to Collection
        </button>

        <div className="main-section">
          {/* Left Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              style={styles.mainImageBox}
            >
              <img src={currentProduct.image} alt={currentProduct.name} className="main-image" />
            </motion.div>
            
            {/* Benefits Badges */}
            <div className="benefits-wrapper" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem', justifyContent: 'center' }}>
              {currentProduct.benefits.map((b, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  fontSize: '0.85rem', 
                  color: theme.colors.text,
                  background: theme.colors.white,
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  border: `1px solid ${theme.colors.border}`
                }}>
                  <span style={{ color: theme.colors.secondary }}>★</span> {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <span style={styles.prodCategory}>{currentProduct.category} Collection</span>
            <h1 className="prod-title">{currentProduct.name}</h1>
            
            <div style={styles.ratingRow}>
              <StarRating rating={currentProduct.rating} />
              <span style={{ color: theme.colors.textLight, fontSize: '0.9rem' }}>
                Based on {currentProduct.reviews} verified reviews
              </span>
            </div>

            <p style={styles.description}>
              {currentProduct.description}
            </p>

            {/* Packaging Section */}
            <div style={styles.weightContainer}>
              <span style={styles.weightLabel}>Available Packaging</span>
              <div className="weight-badges" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {currentProduct.weight.split(',').map((w, i) => (
                  <span key={i} style={{
                    padding: '0.6rem 1.2rem',
                    borderRadius: '6px',
                    border: `1px solid ${theme.colors.border}`,
                    color: theme.colors.primary,
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    fontFamily: 'sans-serif',
                    background: theme.colors.white,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    display: 'inline-block'
                  }}>
                    {w.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="features-grid">
              {currentProduct.features.map((f, i) => (
                <div key={i} style={styles.featureItem}>
                  <span style={styles.checkIcon}>✓</span> {f}
                </div>
              ))}
            </div>

            <div className="actions-row">
              {/* <button className="btn-primary" style={styles.btnPrimary}>
                Enquire for Pricing
              </button> */}
              <a className="btn-secondary" href= {whatsappLink} style={styles.btnSecondary}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#ffff" fillRule="bold" d="M8 7V6a4 4 0 1 1 8 0v1h3c.552 0 1 .449 1 1.007v12.001c0 1.1-.895 1.992-1.994 1.992H5.994A1.994 1.994 0 0 1 4 20.008v-12C4 7.45 4.445 7 5 7zm1.2 0h5.6V6a2.8 2.8 0 0 0-5.6 0zM8 8.2H5.2v11.808c0 .436.356.792.794.792h12.012a.794.794 0 0 0 .794-.792V8.2H16V11h-1.2V8.2H9.2V11H8z"></path></svg>
                <span>Buy Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div style={styles.tabSection}>
          <div className="tab-headers">
            {['description', 'ingredients', 'nutrition'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  ...styles.tabBtn,
                  ...(activeTab === tab ? styles.tabBtnActive : {})
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeLine" 
                    style={styles.activeLine}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div style={styles.tabContent}>
            <AnimatePresence mode='wait'>
              {activeTab === 'description' && (
                <motion.div 
                  key="desc"
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p style={{ lineHeight: 2, fontSize: '1.1rem', color: theme.colors.text, maxWidth: '700px', margin: '0 auto' }}>
                    {currentProduct.fullDescription}
                  </p>
                </motion.div>
              )}
              
              {activeTab === 'ingredients' && (
                <motion.div 
                  key="ing"
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                    {currentProduct.ingredients.map((ing, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        style={{ 
                          padding: '1rem 2rem', 
                          background: theme.colors.white, 
                          borderRadius: '50px',
                          border: `1px solid ${theme.colors.border}`,
                          color: theme.colors.text,
                          fontSize: '1rem'
                        }}
                      >
                        {ing}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'nutrition' && (
                <motion.div 
                  key="nut"
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p style={{ marginBottom: '2rem', color: theme.colors.textLight, fontStyle: 'italic' }}>
                    Approximate values per 100g serving
                  </p>
                  <NutritionTable nutritionalInfo={currentProduct.nutritionalInfo} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}