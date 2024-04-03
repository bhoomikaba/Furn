import React, { useState } from 'react';
import '../Component_CSS/Cart.css';

const AddToCartButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="add-to-cart-button">
      Add to Cart
    </button>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    // Perform any necessary logic here, such as updating the cart items count or sending data to a server
    setCartItems(cartItems + 1);
  };

  return (
    <div>
      {/* Product details go here */}
      <p>Product Name: Sofa</p>
      <p>Price: $200</p>
      
      {/* Add to Cart Button */}
      <AddToCartButton onClick={handleAddToCart} />

      {/* Display Cart Items Count */}
      <p>Cart Items: {cartItems}</p>
    </div>
  );
};

export default Cart;


