import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularProducts = () => {
  const navigate = useNavigate();
  
  const products = [
    // ...existing product data...
  ];
  
  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <h2>Popular Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => handleViewDetails(product.id)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;