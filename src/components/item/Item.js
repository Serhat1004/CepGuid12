import React, { useContext, useState } from "react";
import "./Item.css";

function Item({ name, price, image, description = [] }) {
  return (
    <div className="item-container">
      <div className="image-container">
        <img src={image} alt={name} className="item-image" />
      </div>
      <div className="item-details">
        <h4>{name}</h4>
        <p>₺{price}</p>
        
        <div className="item-description-list">
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Item;



