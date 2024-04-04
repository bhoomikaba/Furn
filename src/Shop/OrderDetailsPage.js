// OrderDetailsPage.js
import React from 'react';

const OrderDetailsPage = ({ orderedItems, totalPrice, gstRate, gstAmount, deliveryCharges, discount }) => {
  return (
    <div>
      <h2>Order Details</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {orderedItems.map((item, index) => (
            <li key={index}>
              {item.name}: {item.quantity} x ${item.price} = ${item.quantity * item.price}
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice}</p>
        <p>Delivery Charges: ${deliveryCharges}</p>
        <p>Discount: ${discount}</p>
        <p>GST ({gstRate}%): ${gstAmount.toFixed(2)}</p>
        <p>Total Price Including GST: ${(totalPrice + gstAmount + deliveryCharges - discount).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
