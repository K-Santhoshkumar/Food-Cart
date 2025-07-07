import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import "./Header.css";

const Header = ({ cart, searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          🍽️ FoodCart
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
          <Link to="/products" className={isActive("/products") ? "active" : ""}>
            Products
          </Link>
          <Link to="/categories" className={isActive("/categories") ? "active" : ""}>
            Categories
          </Link>
          <Link to="/about" className={isActive("/about") ? "active" : ""}>
            About
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search food items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Cart and Mobile Menu */}
        <div className="nav-actions">
          <Link to="/cart" className="cart-link">
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <Link 
            to="/" 
            className={isActive("/") ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={isActive("/products") ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/categories" 
            className={isActive("/categories") ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>
          <Link 
            to="/about" 
            className={isActive("/about") ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={isActive("/contact") ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;