import React, { useState } from 'react';
// import '../Shop_css/lamp.css';
import ProductDetails from './ProductDetails';
import lamp0 from '../image/lamps/lamp0.jpeg';
import lamp1 from '../image/lamps/lamp1.jpeg';
import lamp2 from '../image/lamps/lamp2.jpeg';
import lamp3 from '../image/lamps/lamp3.jpeg';
import lamp4 from '../image/lamps/lamp4.jpeg';
import lamp5 from '../image/lamps/lamp5.jpeg';
import lamp6 from '../image/lamps/lamp6.jpeg';
import lamp7 from '../image/lamps/lamp7.jpeg';
import lamp8 from '../image/lamps/lamp8.jpeg';
import lamp9 from '../image/lamps/lamp9.jpeg';
import lamp11 from '../image/lamps/lamp11.jpeg';
import lamp12 from '../image/lamps/lamp12.jpeg';

export default function Lamp() {
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
            return parseFloat(selectedProduct.price.slice(0)) * quantity;
        }
        return 0;
    };

    const products = [
        { id: 1, image: lamp0, name: 'Timeless Comfort Couch', price: '123.0', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 2, image: lamp1, name: 'Urban Elegance Loveseat', price: '111.11',description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 3, image: lamp11, name: 'Luxury Lounge Seating', price: '1207.03', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 4, image: lamp12, name: 'Plush Lounge Settee', price: '1995.0', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 5, image: lamp2, name: 'Velvet Dream Sofa', price: '20.00', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 6, image: lamp3, name: 'Cozy Corner Charms', price: '77.77', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room'},

        { id: 7, image: lamp4, name: 'Timeless Comfort Couch', price: '123.0', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 8, image: lamp5, name: 'Urban Elegance Loveseat', price: '111.11',description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 9, image: lamp6, name: 'Luxury Lounge Seating', price: '1207.03', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 10, image: lamp7, name: 'Plush Lounge Settee', price: '1995.0', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 11, image: lamp8, name: 'Velvet Dream Sofa', price: '20.00', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 12, image: lamp9, name: 'Cozy Corner Charms', price: '77.77', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room'}


    ];


  return (
    <div>
            {!selectedProduct && (
                <div>
                    <h1 className='h_head'>LAMP COLLECTION</h1>
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
                                        <small>${product.price}</small>
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