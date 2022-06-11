import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div className="quantityIn">
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button className="addcartbtn" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <hr></hr>
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs: {price}</span>
      </div>
      <div className="billing">
        <span className="billbtn"><Link className="alink" to="/checkout">Add Delivery Address &#x27A9;</Link></span>
      </div>
    </article>
  );
};

export default Cart;