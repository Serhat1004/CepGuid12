import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Confirmation.css'; // Create this CSS file for styling

const Confirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/orders'); // Redirect to the orders page after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigate]);

  return (
    <div className="confirmation-container">
      <h2>Payment Successful</h2>
      <p>Thank you for your payment. You will be redirected to your orders page shortly.</p>
    </div>
  );
};

export default Confirmation;
