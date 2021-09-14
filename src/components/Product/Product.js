import React, { Component } from "react";
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

export default class Product extends Component {
  state = {
    cart: [],
    total: 0,
  };

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  add = (product) => {
    this.setState(state => ({
      cart: [...state.cart, product.name],
      total: state.total + product.price
    }));
  };

  remove = (product) => {
    this.setState(state => {
      const cart = [...state.cart];
	  cart.splice(cart.indexOf(product.name))

	  return({
		  cart,
		  total: state.total - product.price
	  })
    });
  };

  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.currencyOptions);
  };

  render() {
    const { cart } = this.state;
	console.log({cart});

    return (
      <div className="wrapper">
        <div>Shopping Cart: {cart.length} total items.</div>
        <div>Total: {this.getTotal()}</div>
		{products.map(product => (
			<div className="product">
			<span role="img" aria-label={product.name}>
				{product.emoji}
			</span>
			<button onClick={() => this.add(product)}>Add</button>{" "}
			<button onClick={() => this.remove(product)}>Remove</button>
			</div>
		))}
      </div>
    );
  }
}
