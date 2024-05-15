import React, { useContext, useState, useRef, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import QRCode from 'qrcode.react';
import './Orders.css';

const generateRandomId = () => {
  const min = 10000;
  const max = 9999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Orders() {
  const { orders } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedQR, setSelectedQR] = useState('');
  const modalRef = useRef();

  const handleQRClick = (orderId) => {
    setSelectedQR(orderId);
    setShowModal(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="cart-list">
      {orders.map((order, index) => {
        const orderId = generateRandomId();

        return (
          <div className="order-container" key={index}>
            <div className="order-qr" onClick={() => handleQRClick(orderId)}>
              <QRCode value={`Order ID: ${orderId}`} size={60} />
            </div>
            <h3>Order ID: {orderId}</h3>
            {order.items.map((item, itemIndex) => (
              <div className="cart-item" key={itemIndex}>
                <div className="order-price">₺{item.price}</div>
                <div className="item-name">{item.name}</div>
              </div>
            ))}
          </div>
        );
      })}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" ref={modalRef}>
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <QRCode value={`Order ID: ${selectedQR}`} size={256} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
