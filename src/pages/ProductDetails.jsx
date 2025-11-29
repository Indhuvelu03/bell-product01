import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <button onClick={() => navigate(-1)}>← Back</button>
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        {/* Add more product details as needed */}
      </div>
    </div>
  );
};

export default ProductDetails;
