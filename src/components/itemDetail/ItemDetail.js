import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // Correctly imported useHistory
import "./ItemDetail.css";
import items from "../../mockData/items.json";
import { GlobalContext } from "../../context/GlobalState";

const getItemDetail = (id) => items.find((item) => item.id === id);

function ItemDetail() {
  const params = useParams();
  const itemId = parseInt(params?.id);
  const item = itemId ? getItemDetail(itemId) : null;
  const { cart, addItemToCartList } = useContext(GlobalContext);
  const cartItem = cart.find(c => c.id === itemId);
  const [isAdded, setIsAdded] = useState(!!cartItem);
  const [selectedPersons, setSelectedPersons] = useState(cartItem ? cartItem.adults : 1);
  const [selectedChildren, setSelectedChildren] = useState(cartItem ? cartItem.children : 0);
  const [finalPrice, setFinalPrice] = useState(cartItem ? cartItem.price : (item ? item.price : 0));
  const navigate = useNavigate();
  
  


  useEffect(() => {
    if (item) {
      const newPrice = (item.price * selectedPersons) + (item.price * 0.5 * selectedChildren);
      setFinalPrice(newPrice);
    }
  }, [selectedPersons, selectedChildren, item]);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="item-detail-container">
      <Link to="/Excursions" className="back-button">&#8592; Back</Link>
      <h1 className="tour-title">{item.name}</h1>
      <div className="item-detail">
        <div className="item-main">
          <img src={item.image} alt={item.name} className="item-main-image" />
          <div className="item-info">
            <p className="item-short-description">{item["short-description"]}</p>
            <p className="item-description">{item.description}</p>
            <div className="booking-details">
              <span className="final-price">₺{finalPrice.toFixed(2)}</span>
              <select className="item-detail-select" value={selectedPersons} onChange={(e) => setSelectedPersons(Number(e.target.value))}>
                {Array.from({ length: 7 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1} {i + 1 === 1 ? 'Adult' : 'Adults'}
                  </option>
                ))}
              </select>
              <select className="item-detail-select" value={selectedChildren} onChange={(e) => setSelectedChildren(Number(e.target.value))}>
                {Array.from({ length: 4 }, (_, i) => (
                  <option key={i} value={i}>
                    {i} {i === 1 ? 'Child' : 'Children'}
                  </option>
                ))}
              </select>
              <button className="item-btn" disabled={isAdded} onClick={() => { 
                  addItemToCartList({ ...item, adults: selectedPersons, children: selectedChildren, price: finalPrice }); 
                  setIsAdded(true); 
                }}>
                {isAdded ? <Link to="/cart" onClick={(e) => { e.preventDefault(); navigate.push('/cart'); }}>Go to Cart</Link> : "Purchase"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
