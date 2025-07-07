import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Address",
      details: ["123 Food Street", "Gourmet District", "City, State 12345"]
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["info@foodcart.com", "support@foodcart.com"]
    },
    {
      icon: <Clock size={24} />,
      title: "Hours",
      details: ["Mon-Sun: 9:00 AM - 11:00 PM", "24/7 Online Ordering"]
    }
  ];

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with our team!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions about your order, want to partner with us, or just 
            want to say hello? We're here to help!
          </p>

          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="order">Order Inquiry</option>
                <option value="partnership">Restaurant Partnership</option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          <div className="map-content">
            <MapPin size={48} />
            <h3>Visit Our Office</h3>
            <p>123 Food Street, Gourmet District</p>
            <p>City, State 12345</p>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What are your delivery hours?</h3>
            <p>We deliver from 9:00 AM to 11:00 PM, 7 days a week. Online ordering is available 24/7.</p>
          </div>
          <div className="faq-item">
            <h3>How long does delivery take?</h3>
            <p>Most orders are delivered within 30-45 minutes, depending on your location and restaurant preparation time.</p>
          </div>
          <div className="faq-item">
            <h3>Do you charge delivery fees?</h3>
            <p>Delivery is free for orders above ₹299. For smaller orders, a small delivery fee may apply.</p>
          </div>
          <div className="faq-item">
            <h3>Can I track my order?</h3>
            <p>Yes! You'll receive real-time updates about your order status via SMS and email.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;