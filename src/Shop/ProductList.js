import React from 'react';
import Product from './Product'; // Ensure correct path to the Product component

const ProductList = ({ products, selectedProduct, onProductSelect }) => {
  const handleProductSelect = (product) => {
    onProductSelect(product);
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          imageUrl={product.image}
          price={product.price}
          name={product.name}
          onAddToCart={product.onAddToCart}
          onBuyButtonClick={product.onBuyButtonClick}
          showDetails={selectedProduct && selectedProduct.id === product.id}
          toggleDetails={() => handleProductSelect(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
