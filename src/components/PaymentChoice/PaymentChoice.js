import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentChoice.css'; // Create this CSS file for styling

const PaymentChoice = () => {
  const navigate = useNavigate();

  const handleCashPayment = () => {
    // Handle cash payment logic here
    navigate('/cash-payment');
  };

  const handleCardPayment = () => {
    // Handle card payment logic here
    navigate('/card-payment');
  };

  return (
    <div className="payment-choice-container">
      <h2>Choose Payment Method</h2>
      <div className="payment-options">
        <button onClick={handleCashPayment} className="payment-button">Pay with Cash</button>
        <button onClick={handleCardPayment} className="payment-button">Pay with Card</button>
      </div>
    </div>
  );
};

export default PaymentChoice;
