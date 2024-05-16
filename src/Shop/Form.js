import React from 'react';
import '../Shop_css/form.css';
//import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import OrderDetailsPage from './OrderDetailsPage';
import Sofa from '../Shop/Sofa'


export default function RegistrationForm( {quantity, orderedItems, totalPrice})

{

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
  const deliveryCharges = 5; // Example delivery charges
  const discount = 2; // Example discount
  const gstAmount = 2000; 

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation here
    console.log(formData);
    // Submit the form data to your backend or perform further actions
  };

  return (
    <div className="container2">

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
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
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* <div className='order'>
      <h2>Order Details</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {{orderedItems.map((item, index) => (
            <li key={index}>
              {item.name}: {item.quantity} x ${item.price} = ${item.quantity * item.price}
            </li>
          ))} }
        </ul>
        { <p>Total Price: ${totalPrice}</p>}
        <p>Delivery Charges: ${deliveryCharges}</p>
        <p>Discount: ${discount}</p>
        {<p>GST ({gstRate}%): ${gstAmount.toFixed(2)}</p>}
        <p>Total Price Including GST: ${(totalPrice + gstAmount + deliveryCharges - discount).toFixed(2)}</p>
      </div>
    </div> */}

    </div>
    )
  }
