// useProductDetails.js
import { useState } from 'react';

export function useProductDetails(product) {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function calculatePrice() {
    return product.price * quantity;
  }

  return {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    calculatePrice,
  };
}