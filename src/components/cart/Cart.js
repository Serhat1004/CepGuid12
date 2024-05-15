import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(GlobalContext);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {!cart.length ? (
        <p>No Excursions Added! Please add something to your cart.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <Link to={`/item/${item.id}`}>
                  <img src={item.image} alt={item.name} className="cart-image" />
                </Link>
                <div className="item-details">
                  <div className="item-name-price">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">₺{item.price.toFixed(2)}</div>
                    <div>Adults: {item.adults}</div>
                    <div>Children: {item.children}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/checkout">
            <button className="item-btn">Next</button>
          </Link>
          <Link to="/excursions">
            <button className="item-btn back-btn">Back to Excursions</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
