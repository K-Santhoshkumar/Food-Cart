import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Truck } from "lucide-react";
import data from "../assets/products.json";
import Product from "./Product";
import "./Home.css";

const Home = ({ cart, setCart }) => {
  const featuredProducts = data.filter(product => product.latest === "Yes").slice(0, 6);
  const topRatedProducts = data.sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Delicious Food <span className="highlight">Delivered</span> to Your Door
          </h1>
          <p className="hero-description">
            Discover amazing dishes from the best restaurants in your city. 
            Fresh, fast, and always delicious.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Order Now <ArrowRight size={20} />
            </Link>
            <Link to="/categories" className="btn btn-secondary">
              Browse Menu
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" 
            alt="Delicious food" 
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <Clock className="feature-icon" />
          <h3>Fast Delivery</h3>
          <p>Get your food delivered in 30 minutes or less</p>
        </div>
        <div className="feature-card">
          <Star className="feature-icon" />
          <h3>Quality Food</h3>
          <p>Fresh ingredients and top-rated restaurants</p>
        </div>
        <div className="feature-card">
          <Truck className="feature-icon" />
          <h3>Free Shipping</h3>
          <p>Free delivery on orders above ₹299</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="section-header">
          <h2>Featured Dishes</h2>
          <Link to="/products" className="view-all">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="section">
        <div className="section-header">
          <h2>Top Rated</h2>
          <Link to="/products" className="view-all">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="product-grid">
          {topRatedProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Get notified about new dishes and special offers</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;