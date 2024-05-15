import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Checkout.css";

const Checkout = () => {
  const { cart, orders, addItemToOrderList, clearCart } =
    useContext(GlobalContext);
  const { tax } = { tax: 1.18 };
  const subTotal = Math.floor(cart?.reduce((sum, curr) => sum + curr.price, 0));
  const total = Math.floor(subTotal * tax);
  const [isOrdered, setIsOrdered] = useState(false);
  const navigate = useNavigate();

  const handlePay = () => {
    navigate('/payment-choice');
  };

  return (
    <div className="checkout-container">
      {isOrdered ? (
        <h3>
          Thank you for your Order!
          <Link to="/">Shop more</Link>
        </h3>
      ) : (
        <>
          <div>
            <div className="custom-row">
              <h4>Order Review</h4>
              <span>{cart?.length} items in cart</span>
            </div>
            <div className="custom-row">
              <h4>Checkout Summary</h4>
              <div className="checkout-summary">
                <span>Subtotal</span>
                <span>₺{subTotal}</span>
              </div>
              <div className="checkout-summary">
                <span>Tax</span>
                <span>18%</span> 
              </div>
            </div>
            <div className="custom-row">
              <h4>Total</h4>
              <span>₺{total}</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <button className="item-btn back-btn" onClick={() => navigate(-1)}>Back to Cart</button>
            <button className="item-button" onClick={handlePay}>
              Pay ₺{total}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
