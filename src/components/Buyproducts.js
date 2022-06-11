import React from "react";
// import list from "../data";
// import Product from "./Product";
import Cards from "./Cards";
import "../styles/buyproducts.css";
import { products } from "./products";

const Buyproducts = ({ handleClick }) => {
  return (
    <section>
      {products.map((item)=> (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Buyproducts;