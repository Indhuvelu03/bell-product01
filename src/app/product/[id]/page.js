"use client";
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './ProductDetails.module.css';

const foodItems = [
  {
    id: 1,
    category: "Pappad",
    name: "Appalam - Pappad",
    description: "South Indian Appalams, crafted for premium taste and crisp texture.",
    fullDescription: "Our premium Appalam is made using traditional methods passed down through generations. Each piece is carefully crafted to ensure the perfect crispiness and authentic South Indian taste. We use only the finest ingredients sourced from local farmers, ensuring freshness and quality in every bite.",
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    price: "₹149",
    originalPrice: "₹199",
    weight: "200g",
    ingredients: ["Rice flour", "Salt", "Water", "Vegetable oil", "Cumin seeds"],
    nutritionalInfo: {
      calories: "350 kcal",
      protein: "8g",
      carbs: "70g",
      fat: "5g",
      fiber: "3g"
    },
    benefits: ["Gluten-free", "High in protein", "Traditional recipe", "Crispy texture"],
    features: ["No preservatives", "Hand-made", "100% Vegetarian", "FSSAI Certified"],
    rating: 4.8,
    reviews: 245,
    inStock: true,
    sku: "BELL-APP-001"
  },
  {
    id: 2,
    category: "Rava",
    name: "Whole Wheat Rava",
    description: "Whole Wheat Rava delivers wholesome nutrition and authentic South Indian texture.",
    fullDescription: "Stone-ground to perfection, our Whole Wheat Rava retains all the natural nutrients and fiber of whole wheat grains. Perfect for making upma, kesari, and other traditional dishes.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    price: "₹99",
    originalPrice: "₹129",
    weight: "500g",
    ingredients: ["100% Whole Wheat"],
    nutritionalInfo: {
      calories: "360 kcal",
      protein: "12g",
      carbs: "72g",
      fat: "2g",
      fiber: "10g"
    },
    benefits: ["100% Natural", "Rich in fiber", "Stone-ground", "No additives"],
    features: ["No preservatives", "Stone-ground", "100% Vegetarian", "FSSAI Certified"],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    sku: "BELL-RAV-002"
  },
  {
    id: 3,
    category: "Chips",
    name: "Crispy Chips",
    description: "Crispy Chips offer irresistible crunch and taste, made with premium ingredients.",
    fullDescription: "Perfectly seasoned and fried to golden perfection, our chips are the ideal snack for any occasion. Made with fresh potatoes and authentic spices.",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    price: "₹79",
    originalPrice: "₹99",
    weight: "150g",
    ingredients: ["Potatoes", "Vegetable oil", "Salt", "Spices", "Turmeric"],
    nutritionalInfo: {
      calories: "520 kcal",
      protein: "6g",
      carbs: "52g",
      fat: "32g",
      fiber: "4g"
    },
    benefits: ["Extra crispy", "Bold flavors", "Fresh ingredients", "Perfect crunch"],
    features: ["Fresh potatoes", "Traditional recipe", "100% Vegetarian", "FSSAI Certified"],
    rating: 4.7,
    reviews: 312,
    inStock: true,
    sku: "BELL-CHP-003"
  },
  {
    id: 4,
    category: "Pappad",
    name: "Rice Appalam",
    description: "Traditional rice appalams, light and airy, perfect with any meal.",
    fullDescription: "Made from the finest rice flour, these appalams are light, crispy, and complement any South Indian meal perfectly.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    price: "₹129",
    originalPrice: "₹159",
    weight: "200g",
    ingredients: ["Rice flour", "Salt", "Cumin", "Water", "Black pepper"],
    nutritionalInfo: {
      calories: "340 kcal",
      protein: "7g",
      carbs: "68g",
      fat: "4g",
      fiber: "2g"
    },
    benefits: ["Light & airy", "Authentic taste", "Easy to digest", "Traditional recipe"],
    features: ["No preservatives", "Hand-made", "100% Vegetarian", "FSSAI Certified"],
    rating: 4.5,
    reviews: 156,
    inStock: true,
    sku: "BELL-RAP-004"
  },
  {
    id: 5,
    category: "Rava",
    name: "Fine Semolina Rava",
    description: "Finely milled semolina for smooth puddings and delicate dishes.",
    fullDescription: "Our fine semolina is perfect for making smooth upma, crispy dosas, and delicious desserts.",
    image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    price: "₹89",
    originalPrice: "₹119",
    weight: "500g",
    ingredients: ["100% Durum Wheat Semolina"],
    nutritionalInfo: {
      calories: "370 kcal",
      protein: "13g",
      carbs: "74g",
      fat: "1g",
      fiber: "4g"
    },
    benefits: ["Finely milled", "Versatile use", "Premium quality", "Rich in protein"],
    features: ["Premium wheat", "Finely ground", "100% Vegetarian", "FSSAI Certified"],
    rating: 4.4,
    reviews: 98,
    inStock: true,
    sku: "BELL-FSR-005"
  },
  {
    id: 6,
    category: "Chips",
    name: "Banana Chips",
    description: "Sweet and savory banana chips, a healthy and crunchy snack.",
    fullDescription: "Made from fresh Kerala bananas, our chips are a perfect blend of sweet and savory flavors.",
    image: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    price: "₹99",
    originalPrice: "₹129",
    weight: "200g",
    ingredients: ["Banana", "Coconut oil", "Salt", "Turmeric powder"],
    nutritionalInfo: {
      calories: "480 kcal",
      protein: "2g",
      carbs: "58g",
      fat: "28g",
      fiber: "6g"
    },
    benefits: ["Natural sweetness", "Coconut oil fried", "Kerala special", "Energy boost"],
    features: ["Kerala bananas", "Coconut oil", "100% Vegetarian", "FSSAI Certified"],
    rating: 4.9,
    reviews: 423,
    inStock: true,
    sku: "BELL-BNC-006"
  },
  {
    id: 7,
    category: "Asafotida",
    name: "Asafotida Powder",
    description: "A strong, pungent spice widely used in Indian vegetarian cooking.",
    fullDescription: "Premium quality asafoetida that adds a unique umami flavor to your dishes. Essential for authentic Indian cooking.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    price: "₹199",
    originalPrice: "₹249",
    weight: "50g",
    ingredients: ["Pure Asafoetida resin", "Rice flour"],
    nutritionalInfo: {
      calories: "297 kcal",
      protein: "4g",
      carbs: "68g",
      fat: "1g",
      fiber: "4g"
    },
    benefits: ["Pure & potent", "Digestive aid", "Authentic flavor", "Premium grade"],
    features: ["Pure resin", "Strong aroma", "100% Vegetarian", "FSSAI Certified"],
    rating: 4.7,
    reviews: 178,
    inStock: true,
    sku: "BELL-ASF-007"
  },
  {
    id: 8,
    category: "Wheat",
    name: "Atta Wheat Flour",
    description: "Premium whole wheat flour, ideal for making soft rotis and chapattis.",
    fullDescription: "Our chakki-ground atta ensures you get the softest rotis and healthiest chapattis every time.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    price: "₹249",
    originalPrice: "₹299",
    weight: "1kg",
    ingredients: ["100% Whole Wheat"],
    nutritionalInfo: {
      calories: "340 kcal",
      protein: "13g",
      carbs: "71g",
      fat: "2g",
      fiber: "12g"
    },
    benefits: ["Chakki ground", "Soft rotis", "100% natural", "High in fiber"],
    features: ["Chakki ground", "Premium wheat", "100% Vegetarian", "FSSAI Certified"],
    rating: 4.8,
    reviews: 567,
    inStock: true,
    sku: "BELL-ATT-008"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className={styles.starRating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= Math.floor(rating) ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const product = foodItems.find(item => item.id === parseInt(params.id));

  const similarProducts = foodItems
    .filter(item => item.category === product?.category && item.id !== product?.id)
    .slice(0, 3);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <span className={styles.notFoundIcon}>🔍</span>
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist or has been removed.</p>
          <button onClick={() => router.push('/')} className={styles.homeBtn}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.breadcrumbContainer}>
          <nav className={styles.breadcrumbs}>
            <span onClick={() => router.push('/')} className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>›</span>
            <span onClick={() => router.push('/#our-products')} className={styles.breadcrumbLink}>Products</span>
            <span className={styles.breadcrumbSeparator}>›</span>
            <span className={styles.breadcrumbLink}>{product.category}</span>
            <span className={styles.breadcrumbSeparator}>›</span>
            <span className={styles.breadcrumbCurrent}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className={styles.mainSection}>
        
        {/* Left Column - Images */}
        <div className={styles.leftCol}>
          <motion.div 
            className={styles.mainImageBox}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.discountBadge}>
              {Math.round(((parseInt(product.originalPrice.replace('₹', '')) - parseInt(product.price.replace('₹', ''))) / parseInt(product.originalPrice.replace('₹', ''))) * 100)}% OFF
            </div>
            <img 
              src={product.gallery ? product.gallery[selectedImage] : product.image} 
              alt={product.name} 
            />
          </motion.div>
          
          {product.gallery && product.gallery.length > 1 && (
            <div className={styles.thumbnailRow}>
              {product.gallery.map((img, index) => (
                <div
                  key={index}
                  className={`${styles.thumbnail} ${selectedImage === index ? styles.thumbnailActive : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          )}

          {/* Trust Badges */}
          <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <span className={styles.trustIcon}>🛡️</span>
              <span>Quality Assured</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.trustIcon}>🚚</span>
              <span>Fast Delivery</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.trustIcon}>✓</span>
              <span>FSSAI Certified</span>
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className={styles.rightCol}>
          
          {/* Category & Stock */}
          <div className={styles.topMeta}>
            <span className={styles.categoryBadge}>{product.category}</span>
            <span className={product.inStock ? styles.inStock : styles.outOfStock}>
              {product.inStock ? '● In Stock' : '○ Out of Stock'}
            </span>
          </div>

          {/* Title */}
          <motion.h1 
            className={styles.prodTitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {product.name}
          </motion.h1>

          {/* Rating & Reviews */}
          <div className={styles.ratingRow}>
            <StarRating rating={product.rating} />
            <span className={styles.ratingText}>{product.rating}</span>
            <span className={styles.reviewCount}>({product.reviews} reviews)</span>
            <span className={styles.skuText}>SKU: {product.sku}</span>
          </div>

          {/* Description */}
          <p className={styles.prodDesc}>{product.description}</p>

          {/* Price Section */}
          <div className={styles.priceSection}>
            <div className={styles.priceRow}>
              <span className={styles.currentPrice}>{product.price}</span>
              <span className={styles.originalPrice}>{product.originalPrice}</span>
              <span className={styles.savingsTag}>
                You save ₹{parseInt(product.originalPrice.replace('₹', '')) - parseInt(product.price.replace('₹', ''))}
              </span>
            </div>
            <span className={styles.weightTag}>Net Weight: {product.weight}</span>
          </div>

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            {product.features.map((feature, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureCheck}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Quantity & Actions */}
          <div className={styles.actionsRow}>
            <div className={styles.quantityBox}>
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className={styles.qtyBtn}
              >
                −
              </button>
              <span className={styles.qtyValue}>{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className={styles.qtyBtn}
              >
                +
              </button>
            </div>
            <button className={styles.enquiryBtn}>
              <span>📞</span> Enquire Now
            </button>
            <button className={styles.whatsappBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              WhatsApp
            </button>
          </div>

          {/* Benefits */}
          <div className={styles.benefitsSection}>
            <h4>Key Benefits</h4>
            <div className={styles.benefitTags}>
              {product.benefits.map((benefit, i) => (
                <span key={i} className={styles.benefitTag}>{benefit}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className={styles.tabsSection}>
        <div className={styles.tabsContainer}>
          <div className={styles.tabHeaders}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'description' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'ingredients' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'nutrition' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('nutrition')}
            >
              Nutrition Facts
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'description' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.descriptionTab}
              >
                <p>{product.fullDescription}</p>
                <div className={styles.highlightBox}>
                  <h5>Why Choose Bell Brand?</h5>
                  <ul>
                    <li>Traditional recipes passed down through generations</li>
                    <li>Premium quality ingredients sourced locally</li>
                    <li>Strict hygiene and quality control standards</li>
                    <li>FSSAI certified manufacturing facility</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'ingredients' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.ingredientsTab}
              >
                <div className={styles.ingredientsList}>
                  {product.ingredients.map((ingredient, i) => (
                    <div key={i} className={styles.ingredientItem}>
                      <span className={styles.ingredientIcon}>🌿</span>
                      <span>{ingredient}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.allergyNote}>
                  <strong>Allergy Information:</strong> Please check the packaging for detailed allergen information. Manufactured in a facility that also processes nuts and dairy products.
                </div>
              </motion.div>
            )}

            {activeTab === 'nutrition' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.nutritionTab}
              >
                <p className={styles.nutritionNote}>Approximate values per 100g serving</p>
                <div className={styles.nutritionGrid}>
                  <div className={styles.nutritionItem}>
                    <span className={styles.nutritionLabel}>Calories</span>
                    <span className={styles.nutritionValue}>{product.nutritionalInfo.calories}</span>
                  </div>
                  <div className={styles.nutritionItem}>
                    <span className={styles.nutritionLabel}>Protein</span>
                    <span className={styles.nutritionValue}>{product.nutritionalInfo.protein}</span>
                  </div>
                  <div className={styles.nutritionItem}>
                    <span className={styles.nutritionLabel}>Carbohydrates</span>
                    <span className={styles.nutritionValue}>{product.nutritionalInfo.carbs}</span>
                  </div>
                  <div className={styles.nutritionItem}>
                    <span className={styles.nutritionLabel}>Fat</span>
                    <span className={styles.nutritionValue}>{product.nutritionalInfo.fat}</span>
                  </div>
                  <div className={styles.nutritionItem}>
                    <span className={styles.nutritionLabel}>Fiber</span>
                    <span className={styles.nutritionValue}>{product.nutritionalInfo.fiber}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className={styles.similarSection}>
          <div className={styles.similarHeader}>
            <h2>You May Also Like</h2>
            <p>More products from {product.category}</p>
          </div>
          <div className={styles.similarCards}>
            {similarProducts.map((item) => (
              <motion.div
                key={item.id}
                className={styles.simCard}
                onClick={() => router.push(`/product/${item.id}`)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.simImageBox}>
                  <img src={item.image} alt={item.name} />
                  <div className={styles.simOverlay}>
                    <span>View Details</span>
                  </div>
                </div>
                <div className={styles.simInfo}>
                  <span className={styles.simCategory}>{item.category}</span>
                  <h4>{item.name}</h4>
                  <div className={styles.simPriceRow}>
                    <span className={styles.simPrice}>{item.price}</span>
                    <span className={styles.simOriginal}>{item.originalPrice}</span>
                  </div>
                  <div className={styles.simRating}>
                    <StarRating rating={item.rating} />
                    <span>({item.reviews})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Back to Top */}
      <div className={styles.backToProducts}>
        <button onClick={() => router.push('/#our-products')} className={styles.backBtn}>
          ← Back to All Products
        </button>
      </div>
    </div>
  );
}