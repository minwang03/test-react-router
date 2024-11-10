import React from 'react';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
  const { productId } = useParams(); 

  return (
    <div>
      <h1>Product Info</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default ProductInfo;
