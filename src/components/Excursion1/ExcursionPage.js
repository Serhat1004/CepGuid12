import React from 'react';
import items from "../../mockData/items.json";
import ItemList from "../itemList/ItemList";
import './ExcursionPage.css'; 

const ExcursionPage = () => {
  return (
    <div className="excursion-page">
        <ItemList items={items} />

        
    </div>
  );
}

export default ExcursionPage;
