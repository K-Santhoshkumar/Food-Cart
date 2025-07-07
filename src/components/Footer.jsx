import React from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3>🍽️ FoodCart</h3>
              <p>Delicious food delivered to your doorstep</p>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Food Street, Gourmet District</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@foodcart.com</span>
              </div>
              <div className="contact-item">
                <Clock size={16} />
                <span>Mon-Sun: 9:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Menu</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4>Popular Categories</h4>
            <ul className="footer-links">
              <li><Link to="/categories">Italian Cuisine</Link></li>
              <li><Link to="/categories">Indian Cuisine</Link></li>
              <li><Link to="/categories">American Food</Link></li>
              <li><Link to="/categories">Asian Cuisine</Link></li>
              <li><Link to="/categories">Desserts</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#track">Track Your Order</a></li>
              <li><a href="#returns">Returns & Refunds</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4>Stay Updated</h4>
            <p>Subscribe to get special offers and updates</p>
            <div className="newsletter-signup">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#youtube" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © 2024 FoodCart. All rights reserved. Made with{" "}
              <Heart size={16} className="heart-icon" /> for food lovers.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#cookies">Cookies</a>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;