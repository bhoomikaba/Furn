import React , {useState} from 'react';
// import '../Shop_css/table.css';
import ProductDetails from './ProductDetails';
import table2 from '../image/table/table2.jpeg'
import table3 from '../image/table/table3.jpeg'
import table4 from '../image/table/table4.jpeg'
import table5 from '../image/table/table5.jpeg'
import table6 from '../image/table/table6.jpeg'
import table7 from '../image/table/table7.jpeg'
import table8 from '../image/table/table8.jpeg'
import table9 from '../image/table/table9.jpeg'



export default function Table() {
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
        { id: 1, image: table2, name: 'Timeless Comfort Couch', price: '$123.0', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 2, image: table3, name: 'Urban Elegance Loveseat', price: '$111.11',description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 3, image: table4, name: 'Luxury Lounge Seating', price: '$1207.03', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 4, image: table5, name: 'Plush Lounge Settee', price: '$1995.0', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 5, image: table6, name: 'Velvet Dream Sofa', price: '$20.00', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 6, image: table7, name: 'Cozy Corner Charms', price: '$77.77', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room'},

        { id: 7, image: table8, name: 'Timeless Comfort Couch', price: '$123.0', description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },

        { id: 8, image: table9, name: 'Urban Elegance Loveseat', price: '$111.11',description: 'Urban elegance Loveseat Serta Monroe Queen Size Convertible Sleeper Sofa', brand: 'Urban Living', ass: 'Yes', mat : 'wooden', col: 'LightCyan', collection: 'Avnta', Dim: 'H 84 x W 198 x D 81 ( In Centimeters)', rat: '4.5', war:'3 Year', weight: '38 kg', wec: '4P', sel: 'Johnson & Johnson Brother"S ', room: 'Living Room' },
        
    ];

return (
    <div>
    {!selectedProduct && (
        <div>
            <h1 className='h_head'>TABLE COLLECTION</h1>
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