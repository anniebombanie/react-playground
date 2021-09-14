import React, { useReducer, useState } from "react";
import "./Product.css";

const products = [
  {
    emoji: "🍦",
    name: "ice cream",
    price: 5,
  },
  {
    emoji: "🍩",
    name: "donuts",
    price: 2.5,
  },
  {
    emoji: "🍉",
    name: "watermelon",
    price: 4,
  },
];

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

function getTotal(total) {
  return total.toLocaleString(undefined, currencyOptions);
}

export default function Product() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function add(product) {
    setCart((current) => [...current, product.name]);
    setTotal((current) => current + product.price);
  }

  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.length} total items.</div>
      <div>Total: {getTotal(total)}</div>
      {products.map((product) => (
        <div key={product.name}>
          <div className="product">
            <span role="img" aria-label={product.name}>
              {product.emoji}
            </span>
          </div>
          <button onClick={() => add(product)}>Add</button>
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
}
