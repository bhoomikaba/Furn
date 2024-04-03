// Product.js
import React, { useState } from 'react';

const Product = ({ imageUrl, price, name, onAddToCart, onBuyButtonClick, hide }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCartWithQuantity = () => {
    onAddToCart({ imageUrl, price: price * quantity, name, quantity });
    onBuyButtonClick();
  };

  return (
    <div className={`product-card ${hide ? 'hide' : ''}`}>
      <img src={imageUrl} alt={name} />
      <div className="product-details">
        <h2>{name}</h2>
        <p>Price: ${price * quantity}</p>
        <div className="quantity-controls">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button className="buy-button" onClick={handleAddToCartWithQuantity}>BUY</button>
      </div>
    </div>
  );
};

export default Product;

