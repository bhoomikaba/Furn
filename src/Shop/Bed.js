import React, { useState } from 'react';
import '../Shop_css/bed.css';
import bed1 from '../image/beds/bed1.jpeg';
import bed2 from '../image/beds/bed2.jpeg';
import bed4 from '../image/beds/bed4.jpeg';
import bed6 from '../image/beds/bed6.jpeg';
import bed7 from '../image/beds/bed7.jpeg';
import ProductDetails from './ProductDetails';

export default function Bed() {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const calculatePrice = () => {
        if (selectedProduct) {
            return parseFloat(selectedProduct.price.slice(1)) * quantity;
        }
        return 0;
    };

    const products = [
        { id: 1, image: bed1, name: 'Timeless Comfort Couch', price: '$123.0', description: 'Grandiose Mahogany Carved Canopy Bed: A Majestic Statement of Timeless Luxury and Comfort', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 2, image: bed2, name: 'Urban Elegance Loveseat', price: '$111.11',description: 'Plush Upholstered Wingback Bedframe: Offering Serene Nights Wrapped in Contemporary Elegance', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 3, image: bed4, name: 'Luxury Lounge Seating', price: '$1207.03', description: 'Serene Oasis Platform Bed: Crafted for Tranquility, Elevating Your Bedroom into a Haven', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 4, image: bed6, name: 'Plush Lounge Settee', price: '$1995.0', description: 'Exquisite Victorian Four-Poster Bed: An Emblem of Classic Sophistication and Regal Charm for Your Bedroom Retreat' , brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 5, image: bed7, name: 'Velvet Dream Sofa', price: '$20.00', description: 'Elegant Sleigh Bed with Rolled Headboard: A Fusion of Graceful Curves and Supreme Comfort, Transforming Every Night into a Dreamy Affair', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

    ];

    return (
        <div>
            {!selectedProduct && (
                <div>
                    <h1 className='h_head'>SOFA COLLECTION</h1>
                    <h5 className='h_title'>Most Selling & Trending Sofas</h5>
                    
                    <div className="cards">
                        {products.map(product => (
                            <div className="card" key={product.id} onClick={() => handleCardClick(product)}>
                                <div className="card__image-holder">
                                    <img className="card__image" src={product.image} alt={product.name} />
                                </div>
                                <div className="card-title">
                                    <a href="/" className="toggle-info btn">
                                        <span className="left"></span>
                                        <span className="right"></span>
                                    </a>
                                    <h2>
                                        {product.name}
                                        <small>{product.price}</small>
                                    </h2>
                                    
                                </div>
                                <div className="card-flap flap1">
                                    <div className="card-flap flap2">
                                        <div className="card-actions">
                                            <a href="/" className="btn">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
    
            {selectedProduct && (
                <ProductDetails 
                    product={selectedProduct}
                    quantity={quantity}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    calculatePrice={calculatePrice}
                />
            )}
        </div>
    ); 
}

