import React, { useState } from 'react';
import '../Shop_css/sofa.css';
import { NavLink } from "react-router-dom";
import Category from '../Component/Category';
import {Form,  Button } from 'react-bootstrap';
import ConfirmationModal from './ConfirmationModal';

export default function ProductDetails({orderedItems, product, quantity, increaseQuantity, decreaseQuantity, calculatePrice, detail })

{
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handlePlaceOrderClick = () => {
    setShowConfirmationModal(true);
  };
  

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        pinCode: '',
        state: '',
        city: '',
        houseNo: '',
        area: '',
      });

      
    
      // Calculated values for delivery charges and discount
      const deliveryCharges = 10; // Example delivery charges
      const discount = 200; // Example discount
      const gstAmount = 2000; 
      const gstRate = 8;
      
      const totalPrice = ((+product.price * quantity) + gstAmount + deliveryCharges - discount).toFixed(2);
   
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // We can perform form validation here
        console.log(formData);
      };

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isOrder, setIsOrder] = useState(false);

    const handleClick = () => {
        setIsFormVisible(true);
    };

    const handleClick2 = () => {
      setIsFormVisible(false);
      setIsOrder(true);
  };

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
        <div className="product-details" style={{ display: isFormVisible ? 'none' : 'block' }}>
            <div className='flex'>

            <div className='details'>
                <img className='product-image' src={product.image} alt={product.name} />
            </div>

            <div className='productp'>
                    <b><h2>{product.description}</h2></b>
                    <hr />
                    <div className='price'><b><span> Price <b><h2> ${product.price}</h2></b> </span></b></div>
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
                    {/* <div className="reviews">
                        {reviews.map((review, index) => (
                            <div key={index} className="review">
                                <p className='review'>{review.text} <p className='an'> ~ By {review.user} on {review.date}</p> <hr /></p>
                            </div>
                        ))}
                    </div> */}
                    <textarea placeholder="Write your review..." value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                    <input type="text" placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <button className='sub' onClick={submitReview}>Submit Review</button>
                </div>
                    <hr />

                    <div className="button-container">
                    <button className='cont' onClick={handleClick}>Buy Now</button>
                </div>
            </div>
        </div>










        
         {/* Form Component */}
    
    <div className='form'>
    
    <div className="container2" style={{ display: isFormVisible ? 'block' : 'none' }}>
      <h2>Enter Your Details</h2>
      
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            className='myinput'
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className= "mb-3" controlId= "email">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control
          type='mail'
          placeholder='Enter Your Email..'
          name='email'
          value={formData.email}
          onChange={handleChange} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="pinCode">
          <Form.Label>Pin Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pin code"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="houseNo">
          <Form.Label>House No./Building Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter house no./building name"
            name="houseNo"
            value={formData.houseNo}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="area">
          <Form.Label>Area/Colony/Society Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter area/colony/society details"
            name="area"
            value={formData.area}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="button-container"> {/* Apply centering styles */}
          <Button className='mysubmit' variant="primary" type="submit" onClick={handleClick2}>
            Confirm Order
          </Button>
        </div>
      </Form>
      </div>
     
      <div className='order' style={{ display:  isOrder ? 'block' : 'none' }}>
          {/* <h2>Order Details</h2> */}
      <div className="order-summary">
          <h3>Order Summary</h3>
        
        <p>Quantity : {quantity}</p>
        <p>Product Price: ${product.price}</p>
        <p>Delivery Charges: ${deliveryCharges}</p>
        <p>Discount: ${discount}</p>
        {<p>GST ({gstRate}%): ${gstAmount.toFixed(2)}</p>}
        { <p>Total Price Including GST: ${totalPrice}</p> }
        <div className="button-container"> {/* Apply centering styles */}
          <Button className='mysubmit' variant="primary" type="submit" onClick={handlePlaceOrderClick}>
            Place Order
          </Button>
          <ConfirmationModal show={showConfirmationModal} handleClose={() => setShowConfirmationModal(false)} />

        </div>

      </div> 
    </div>
   
  </div>
 
        </>
    );
};
