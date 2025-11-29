import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './ProductDetails.module.css';

const foodItems = [
  {
    id: 1,
    category: "Pappad",
    name: "Appalam - Pappad",
    description: "South Indian Appalams, crafted for premium taste and crisp texture.",
    image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$4.99",
    weight: "200g",
    ingredients: "Rice flour, Salt, Water, Vegetable oil",
    nutritionalInfo: "Calories: 350, Protein: 8g, Carbs: 70g, Fat: 5g"
  },
  {
    id: 2,
    category: "Rava",
    name: "Whole Wheat Rava",
    description: "Whole Wheat Rava delivers wholesome nutrition and authentic South Indian texture.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$3.99",
    weight: "500g",
    ingredients: "100% Whole Wheat",
    nutritionalInfo: "Calories: 360, Protein: 12g, Carbs: 72g, Fat: 2g"
  },
  {
    id: 3,
    category: "Chips",
    name: "Crispy Chips",
    description: "Crispy Chips offer irresistible crunch and taste, made with premium ingredients.",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$2.99",
    weight: "150g",
    ingredients: "Potatoes, Vegetable oil, Salt, Spices",
    nutritionalInfo: "Calories: 520, Protein: 6g, Carbs: 52g, Fat: 32g"
  },
  {
    id: 4,
    category: "Pappad",
    name: "Rice Appalam",
    description: "Traditional rice appalams, light and airy, perfect with any meal.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$4.49",
    weight: "200g",
    ingredients: "Rice flour, Salt, Cumin, Water",
    nutritionalInfo: "Calories: 340, Protein: 7g, Carbs: 68g, Fat: 4g"
  },
  {
    id: 5,
    category: "Rava",
    name: "Fine Semolina Rava",
    description: "Finely milled semolina for smooth puddings and delicate dishes.",
    image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$3.49",
    weight: "500g",
    ingredients: "100% Durum Wheat Semolina",
    nutritionalInfo: "Calories: 370, Protein: 13g, Carbs: 74g, Fat: 1g"
  },
  {
    id: 6,
    category: "Chips",
    name: "Banana Chips",
    description: "Sweet and savory banana chips, a healthy and crunchy snack.",
    image: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$3.99",
    weight: "200g",
    ingredients: "Banana, Coconut oil, Salt, Turmeric",
    nutritionalInfo: "Calories: 480, Protein: 2g, Carbs: 58g, Fat: 28g"
  },
  {
    id: 7,
    category: "Asafotida",
    name: "Asafotida Powder",
    description: "A strong, pungent spice widely used in Indian vegetarian cooking.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$5.99",
    weight: "50g",
    ingredients: "Pure Asafoetida resin",
    nutritionalInfo: "Calories: 297, Protein: 4g, Carbs: 68g, Fat: 1g"
  },
  {
    id: 8,
    category: "Wheat",
    name: "Atta Wheat Flour",
    description: "Premium whole wheat flour, ideal for making soft rotis and chapattis.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$6.99",
    weight: "1kg",
    ingredients: "100% Whole Wheat",
    nutritionalInfo: "Calories: 340, Protein: 13g, Carbs: 71g, Fat: 2g"
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = foodItems.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h2>Product Not Found</h2>
          <button onClick={() => navigate('/')} className={styles.backButton}>
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.productDetails}>
        <motion.button 
          className={styles.backButton}
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Products
        </motion.button>

        <div className={styles.content}>
          <motion.div 
            className={styles.imageSection}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src={product.image} alt={product.name} className={styles.image} />
            <div className={styles.categoryBadge}>{product.category}</div>
          </motion.div>

          <motion.div 
            className={styles.infoSection}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.description}>{product.description}</p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <strong>Weight:</strong> {product.weight}
              </div>
              <div className={styles.detailItem}>
                <strong>Ingredients:</strong> {product.ingredients}
              </div>
              <div className={styles.detailItem}>
                <strong>Nutritional Info:</strong> {product.nutritionalInfo}
              </div>
            </div>

            <motion.button 
              className={styles.addToCartButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
