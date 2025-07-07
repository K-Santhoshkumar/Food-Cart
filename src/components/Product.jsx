import React from "react";
import "./Product.css";
const Product = ({ product, cart, setCart }) => {
  const name =
    product.name.length > 21
      ? product.name.substring(0, 20) + ".."
      : product.name;
  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };
  return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt={name} height="150px" width="150px" />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price Rs:{product.amt}</p>
        {cart.includes(product) ? (
          <button className="btnremove" onClick={removeCart}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={addCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
