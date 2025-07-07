import React, { useEffect, useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "./ViewCart.css";

const ViewCart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    const subtotal = cart.reduce((acc, item) => acc + (parseInt(item.amt) * item.quantity), 0);
    setTotal(subtotal);
    
    // Calculate delivery fee (free for orders above ₹299)
    setDeliveryFee(subtotal >= 299 ? 0 : 40);
  }, [cart]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(total * 0.1);
      alert("Promo code applied! 10% discount added.");
    } else if (promoCode.toLowerCase() === "first20") {
      setDiscount(total * 0.2);
      alert("Promo code applied! 20% discount for first-time users.");
    } else {
      setDiscount(0);
      alert("Invalid promo code. Please try again.");
    }
  };

  const finalTotal = total + deliveryFee - discount;

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <ShoppingBag size={64} />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products" className="btn btn-primary">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <Link to="/products" className="back-link">
          <ArrowLeft size={20} />
          Continue Shopping
        </Link>
        <h1>Your Cart ({cart.length} items)</h1>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.pic} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="restaurant">{item.shop}</p>
                <p className="category">{item.category}</p>
                <div className="item-meta">
                  <span className={`food-type ${item.ftype.toLowerCase()}`}>
                    {item.ftype}
                  </span>
                  <span className="rating">★ {item.rating}</span>
                </div>
              </div>

              <div className="item-controls">
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <div className="item-price">
                  <span className="unit-price">₹{item.amt} each</span>
                  <span className="total-price">₹{parseInt(item.amt) * item.quantity}</span>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span className={deliveryFee === 0 ? "free" : ""}>
                {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
              </span>
            </div>
            
            {discount > 0 && (
              <div className="summary-row discount">
                <span>Discount</span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>
            )}
            
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{finalTotal.toFixed(2)}</span>
            </div>

            <div className="promo-section">
              <h4>Have a promo code?</h4>
              <div className="promo-input">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button onClick={applyPromoCode} className="apply-btn">
                  Apply
                </button>
              </div>
              <div className="promo-hints">
                <small>Try: SAVE10 or FIRST20</small>
              </div>
            </div>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

            <div className="delivery-info">
              <p>🚚 Estimated delivery: 30-45 minutes</p>
              <p>📞 We'll call you if there are any issues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;