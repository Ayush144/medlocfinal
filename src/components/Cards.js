import React from "react";
import "../styles/cards.css";

const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      <div className="details">
        <p>{title}</p>
        <p>Price - {price} ₹</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
      </div>
    </div>
  );
};

export default Cards;