import React, { useState } from 'react';
import '../Shop_css/sofa.css';
import Category from '../Component/Category';

export default function ProductDetails({ product, quantity, increaseQuantity, decreaseQuantity, calculatePrice, detail })

{

    const [reviewText, setReviewText] = useState('');
    const [userName, setUserName] = useState('');
    const [reviews, setReviews] = useState([]);

    const submitReview = () => {
        // Implement review submission functionality
        if (reviewText.trim() !== '') {
            const newReview = {
                text: reviewText,
                user: userName || 'Anonymous', // Use the entered name or default to 'Anonymous'
                date: new Date().toLocaleDateString()
            };
            setReviews([...reviews, newReview]);
            setReviewText('');
            setUserName('');
        }
    };

    return (
        <>
        <div className="product-details">
            <div className='flex'>

            <div className='details'>
                <img className='product-image' src={product.image} alt={product.name} />
            </div>

            <div className='productp'>
                    <b><h2>{product.description}</h2></b>
                    <hr />
                    <div className='price'><b><span> Price <b><h2>{product.price}</h2></b> </span></b></div>
                    <hr />
                    <div className='buttons'>
                        <b><span>Quantity : </span></b>
                        <button className='button1' onClick={decreaseQuantity}>-</button>
                        <span className='qt'>{quantity}</span>
                        <button className='button2' onClick={increaseQuantity}>+</button>
                        <div className='totalp'>
                            <span>Total Price: ${calculatePrice().toFixed(2)}</span>
                        </div>
                    </div>  
                    <hr />
                </div>
            </div>
            
            <div className='det'>
                <hr />
                <h3>Product Details</h3>
                <hr/>

                <div className='pr'>
                    <div>
                        <h5>Brand : <span>{product.brand}</span></h5>
                        
                        <h5> Material : <span>{product.mat}</span>  </h5>
                        
                        <h5> Assembly : <span>{product.ass}</span> </h5>
                        
                        <h5> Colour : <span> {product.col}</span> </h5>
                       
                        <h5> Collections :  <span>{product.collection}</span> </h5>
                        
                        <h5> Dimensions : <span> {product.Dim}</span> </h5>
                        
                    </div>

                    <div>
                        <b><h5> Product Rating  :  <span>{product.rat}</span> </h5></b>
                       
                        <b><h5> Warranty : <span> {product.war}</span> </h5></b>
                       
                        <b><h5> Weight :  <span>{product.weight}</span>  </h5></b>
                       
                        <b><h5> Weight Capacity: <span>{product.wec}</span> </h5></b>
                        
                        <b><h5> Seller :  <span> {product.sel}</span></h5></b>
                       
                        <b><h5> Room Type : <span> {product.room}</span> </h5></b>
                        
                    </div>
                </div>
                <hr />
                <hr />
                <h3>Product Overview</h3>
                <hr/>
                <div className='spec'>
                    <div>
                        <div className="image_container">
                            <img srcset="https://assets.wfcdn.com/im/22754822/resize-h50-w50%5Ecompr-r85/7389/73896965/default_name.jpg" style={{ height: 'auto', width: '90px' }} />
                            <span>Stain Resistant</span>
                        </div>
                        <div className="image_container">
                            <img srcset="https://assets.wfcdn.com/im/52505879/resize-h50-w50%5Ecompr-r85/9809/98097849/default_name.jpg" style={{ height: 'auto', width: '90px' }} />
                            <span>Assembly Tools Included</span>
                        </div>
                    </div>
                    <div>
                        <div className="image_container">
                            <img srcset="https://assets.wfcdn.com/im/69637039/resize-h50-w50%5Ecompr-r85/9239/92399594/default_name.jpg" style={{ height: 'auto', width: '90px' }} />
                            <span>Weight Capacity (lbs): 750 lb.</span>
                        </div>
                        <div className="image_container">
                            <img srcset="https://assets.wfcdn.com/im/90042495/resize-h50-w50%5Ecompr-r85/7347/73473899/default_name.jpg" style={{ height: 'auto', width: '90px' }} />
                            <span>Assembly Required</span>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="review-section">
                    <h3>Customer Reviews</h3>
                    <hr />
                    <div className="reviews">
                        {reviews.map((review, index) => (
                            <div key={index} className="review">
                                <p className='review'>{review.text} <p className='an'> ~ By {review.user} on {review.date}</p> <hr /></p>
                            </div>
                        ))}
                    </div>
                    <textarea placeholder="Write your review..." value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                    <input type="text" placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <button className='sub' onClick={submitReview}>Submit Review</button>
                </div>
                    <hr />

                <div className="button-container">
                    <button className='cont'>Continue Shopping</button>
                </div>
            </div>
        </div>
        <Category/>
        

        </>
    );
};
