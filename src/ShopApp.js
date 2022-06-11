import React, { useState } from "react";
import Buyproducts from "./components/Buyproducts";
import ShopNavbar from "./components/ShopNavbar";
import Cart from "./components/Cart";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const ShopApp = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar/>
      <ShopNavbar setShow={setShow} size={cart.length} />
      {show ? (
        <Buyproducts handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      <Footer/>
    </React.Fragment>
  );
};

export default ShopApp;