import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import './CashPayment.css'; // Create this CSS file for styling

const CashPayment = () => {
  const navigate = useNavigate();
  const { cart, addItemToOrderList, clearCart, orders } = useContext(GlobalContext);

  const handleConfirm = () => {
    addItemToOrderList({
      orderId: orders.length + 1,
      buyerId: 1,
      items: [...cart],
      price: cart.reduce((sum, item) => sum + item.price, 0),
      address: "2025 Sk. Caglayan Mahallesi",
      deliveryDate: "05/16/2024",
      isDelivered: false,
    });
    clearCart();
    navigate('/confirmation'); // Navigate to confirmation page
  };

  return (
    <div className="payment-container">
      <h2>Cash Payment</h2>
      <p>Please prepare the exact amount of cash to hand over to the Tour Guide.</p>
      <button onClick={handleConfirm} className="confirm-button">Confirm Payment</button>
    </div>
  );
};

export default CashPayment;
