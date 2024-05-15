import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import './CardPayment.css';

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { cart, addItemToOrderList, clearCart, orders } = useContext(GlobalContext);

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s+/g, ''); // Remove all spaces
    const regex = /^[0-9\b]{0,16}$/;
    if (regex.test(value)) {
      value = value.match(/.{1,4}/g)?.join(' ') || ''; // Add space after every 4 digits
      setCardNumber(value);
      setErrors(prevErrors => ({ ...prevErrors, cardNumber: '' }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, cardNumber: 'Card number must be 16 digits' }));
    }
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value;
    if (value.length === 2 && !value.includes('/')) {
      value = `${value}/`;
    }
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{0,2})$/;
    if (value.length <= 5) {
      setExpiryDate(value);
      if (regex.test(value)) {
        setErrors(prevErrors => ({ ...prevErrors, expiryDate: '' }));
      } else {
        setErrors(prevErrors => ({ ...prevErrors, expiryDate: 'Invalid expiry date' }));
      }
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]{0,3}$/;
    if (regex.test(value)) {
      setCvv(value);
      setErrors(prevErrors => ({ ...prevErrors, cvv: '' }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, cvv: 'CVV must be 3 digits' }));
    }
  };

  const isValidExpiryDate = (date) => {
    const [month, year] = date.split('/');
    if (month && year) {
      const expiryDate = new Date(`20${year}`, month - 1);
      const currentDate = new Date();
      return expiryDate > currentDate;
    }
    return false;
  };

  const handleConfirm = () => {
    const cardNumberValid = cardNumber.replace(/\s/g, '').length === 16;
    const expiryDateValid = /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiryDate) && isValidExpiryDate(expiryDate);
    const cvvValid = cvv.length === 3;

    if (cardNumberValid && expiryDateValid && cvvValid) {
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
      navigate('/confirmation');
    } else {
      setErrors({
        cardNumber: !cardNumberValid ? 'Card number must be 16 digits' : '',
        expiryDate: !expiryDateValid ? 'Invalid expiry date' : '',
        cvv: !cvvValid ? 'CVV must be 3 digits' : ''
      });
    }
  };

  return (
    <div className="payment-container">
      <h2>Card Payment</h2>
      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="MM/YY"
            required
          />
          {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            required
          />
          {errors.cvv && <p className="error">{errors.cvv}</p>}
        </div>
        <button type="button" onClick={handleConfirm} className="confirm-button">Confirm Payment</button>
      </form>
    </div>
  );
};

export default CardPayment;

