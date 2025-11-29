"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './ProductDetails.module.css';

const foodItems = [
  {
    id: 1,
    category: "Pappad",
    name: "Appalam - Pappad",
    description: "South Indian Appalams, crafted for premium taste and crisp texture.",
    fullDescription: "Our premium Appalam is made using traditional methods passed down through generations. Each piece is carefully crafted to ensure the perfect crispiness and authentic South Indian taste.",
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$4.99",
    weight: "200g",
    ingredients: "Rice flour, Salt, Water, Vegetable oil, Cumin seeds",
    nutritionalInfo: "Calories: 350, Protein: 8g, Carbs: 70g, Fat: 5g, Fiber: 3g",
    benefits: ["Gluten-free", "High in protein", "Traditional recipe", "Crispy texture"]
  },
  {
    id: 2,
    category: "Rava",
    name: "Whole Wheat Rava",
    description: "Whole Wheat Rava delivers wholesome nutrition and authentic South Indian texture.",
    fullDescription: "Stone-ground to perfection, our Whole Wheat Rava retains all the natural nutrients and fiber of whole wheat grains.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$3.99",
    weight: "500g",
    ingredients: "100% Whole Wheat",
    nutritionalInfo: "Calories: 360, Protein: 12g, Carbs: 72g, Fat: 2g, Fiber: 10g",
    benefits: ["100% Natural", "Rich in fiber", "Stone-ground", "No additives"]
  },
  {
    id: 3,
    category: "Chips",
    name: "Crispy Chips",
    description: "Crispy Chips offer irresistible crunch and taste, made with premium ingredients.",
    fullDescription: "Perfectly seasoned and fried to golden perfection, our chips are the ideal snack for any occasion.",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$2.99",
    weight: "150g",
    ingredients: "Potatoes, Vegetable oil, Salt, Spices, Turmeric",
    nutritionalInfo: "Calories: 520, Protein: 6g, Carbs: 52g, Fat: 32g, Fiber: 4g",
    benefits: ["Extra crispy", "Bold flavors", "Fresh ingredients", "Perfect crunch"]
  },
  {
    id: 4,
    category: "Pappad",
    name: "Rice Appalam",
    description: "Traditional rice appalams, light and airy, perfect with any meal.",
    fullDescription: "Made from the finest rice flour, these appalams are light, crispy, and complement any South Indian meal perfectly.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$4.49",
    weight: "200g",
    ingredients: "Rice flour, Salt, Cumin, Water, Black pepper",
    nutritionalInfo: "Calories: 340, Protein: 7g, Carbs: 68g, Fat: 4g, Fiber: 2g",
    benefits: ["Light & airy", "Authentic taste", "Easy to digest", "Traditional recipe"]
  },
  {
    id: 5,
    category: "Rava",
    name: "Fine Semolina Rava",
    description: "Finely milled semolina for smooth puddings and delicate dishes.",
    fullDescription: "Our fine semolina is perfect for making smooth upma, crispy dosas, and delicious desserts.",
    image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$3.49",
    weight: "500g",
    ingredients: "100% Durum Wheat Semolina",
    nutritionalInfo: "Calories: 370, Protein: 13g, Carbs: 74g, Fat: 1g, Fiber: 4g",
    benefits: ["Finely milled", "Versatile use", "Premium quality", "Rich in protein"]
  },
  {
    id: 6,
    category: "Chips",
    name: "Banana Chips",
    description: "Sweet and savory banana chips, a healthy and crunchy snack.",
    fullDescription: "Made from fresh Kerala bananas, our chips are a perfect blend of sweet and savory flavors.",
    image: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$3.99",
    weight: "200g",
    ingredients: "Banana, Coconut oil, Salt, Turmeric powder",
    nutritionalInfo: "Calories: 480, Protein: 2g, Carbs: 58g, Fat: 28g, Fiber: 6g",
    benefits: ["Natural sweetness", "Coconut oil fried", "Kerala special", "Energy boost"]
  },
  {
    id: 7,
    category: "Asafotida",
    name: "Asafotida Powder",
    description: "A strong, pungent spice widely used in Indian vegetarian cooking.",
    fullDescription: "Premium quality asafoetida that adds a unique umami flavor to your dishes. Essential for authentic Indian cooking.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$5.99",
    weight: "50g",
    ingredients: "Pure Asafoetida resin, Rice flour",
    nutritionalInfo: "Calories: 297, Protein: 4g, Carbs: 68g, Fat: 1g, Fiber: 4g",
    benefits: ["Pure & potent", "Digestive aid", "Authentic flavor", "Premium grade"]
  },
  {
    id: 8,
    category: "Wheat",
    name: "Atta Wheat Flour",
    description: "Premium whole wheat flour, ideal for making soft rotis and chapattis.",
    fullDescription: "Our chakki-ground atta ensures you get the softest rotis and healthiest chapattis every time.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$6.99",
    weight: "1kg",
    ingredients: "100% Whole Wheat",
    nutritionalInfo: "Calories: 340, Protein: 13g, Carbs: 71g, Fat: 2g, Fiber: 12g",
    benefits: ["Chakki ground", "Soft rotis", "100% natural", "High in fiber"]
  }
];

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const product = foodItems.find(item => item.id === parseInt(params.id));

  const similarProducts = foodItems
    .filter(item => item.category === product?.category && item.id !== product?.id)
    .slice(0, 3);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      
      {/* Top Bar */}
      <div className={styles.topBar}>
        <button onClick={() => router.back()} className={styles.backBtn}>
          ← Back
        </button>
        <span className={styles.topCategory}>{product.category}</span>
      </div>

      {/* Main Product Section */}
      <div className={styles.mainSection}>
        <div className={styles.leftCol}>
          <motion.div 
            className={styles.imgBox}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img src={product.image} alt={product.name} />
          </motion.div>
        </div>

        <div className={styles.rightCol}>
          <h1 className={styles.prodTitle}>{product.name}</h1>
          <p className={styles.prodDesc}>{product.description}</p>
          
          <div className={styles.priceSection}>
            <span className={styles.prodPrice}>{product.price}</span>
            <span className={styles.prodWeight}>{product.weight}</span>
          </div>

          <div className={styles.detailsBox}>
            <h3>Product Information</h3>
            <p>{product.fullDescription}</p>
          </div>

          <div className={styles.specs}>
            <div className={styles.specItem}>
              <strong>Ingredients:</strong>
              <span>{product.ingredients}</span>
            </div>
            <div className={styles.specItem}>
              <strong>Nutrition:</strong>
              <span>{product.nutritionalInfo}</span>
            </div>
          </div>

          <div className={styles.benefitsBox}>
            {product.benefits.map((benefit, i) => (
              <div key={i} className={styles.benefitTag}>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className={styles.similarSection}>
          <h2>More from {product.category}</h2>
          <div className={styles.similarCards}>
            {similarProducts.map((item) => (
              <div
                key={item.id}
                className={styles.simCard}
                onClick={() => router.push(`/product/${item.id}`)}
              >
                <img src={item.image} alt={item.name} />
                <div className={styles.simInfo}>
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
