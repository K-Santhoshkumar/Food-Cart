import React from "react";
import { Star, Plus, Minus, ShoppingCart } from "lucide-react";
import "./Product.css";

const Product = ({ product, cart, setCart, viewMode = "grid" }) => {
  const name =
    product.name.length > 21
      ? product.name.substring(0, 20) + ".."
      : product.name;

  const isInCart = cart.some(item => item.id === product.id);
  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const addToCart = () => {
    if (isInCart) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = () => {
    if (quantity > 1) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== product.id));
    }
  };

  const removeCompletelyFromCart = () => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  if (viewMode === "list") {
    return (
      <div className="product-list-item">
        <div className="product-image">
          <img src={product.pic} alt={name} />
          <div className="product-badges">
            <span className={`food-type ${product.ftype.toLowerCase()}`}>
              {product.ftype}
            </span>
            {product.latest === "Yes" && <span className="new-badge">New</span>}
          </div>
        </div>
        
        <div className="product-details">
          <div className="product-header">
            <h3>{product.name}</h3>
            <div className="rating">
              <Star size={16} fill="currentColor" />
              <span>{product.rating}</span>
            </div>
          </div>
          
          <p className="restaurant">{product.shop}</p>
          <p className="category">{product.category}</p>
          <p className="description">{product.description}</p>
          
          <div className="product-footer">
            <div className="price">₹{product.amt}</div>
            <div className="cart-controls">
              {isInCart ? (
                <div className="quantity-controls">
                  <button onClick={removeFromCart} className="quantity-btn">
                    <Minus size={16} />
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button onClick={addToCart} className="quantity-btn">
                    <Plus size={16} />
                  </button>
                  <button onClick={removeCompletelyFromCart} className="remove-btn">
                    Remove
                  </button>
                </div>
              ) : (
                <button onClick={addToCart} className="add-to-cart-btn">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.pic} alt={name} />
        <div className="product-badges">
          <span className={`food-type ${product.ftype.toLowerCase()}`}>
            {product.ftype}
          </span>
          {product.latest === "Yes" && <span className="new-badge">New</span>}
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-header">
          <h3>{name}</h3>
          <div className="rating">
            <Star size={14} fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>
        
        <p className="restaurant">{product.shop}</p>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        
        <div className="product-footer">
          <div className="price">₹{product.amt}</div>
          {isInCart ? (
            <div className="quantity-controls">
              <button onClick={removeFromCart} className="quantity-btn">
                <Minus size={14} />
              </button>
              <span className="quantity">{quantity}</span>
              <button onClick={addToCart} className="quantity-btn">
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <button onClick={addToCart} className="add-to-cart-btn">
              <Plus size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;