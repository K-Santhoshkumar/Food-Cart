import React from "react";
import { Users, Award, Clock, Heart } from "lucide-react";
import "./About.css";

const About = () => {
  const stats = [
    { icon: <Users size={32} />, number: "10,000+", label: "Happy Customers" },
    { icon: <Award size={32} />, number: "500+", label: "Partner Restaurants" },
    { icon: <Clock size={32} />, number: "30 min", label: "Average Delivery" },
    { icon: <Heart size={32} />, number: "4.8/5", label: "Customer Rating" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      description: "Passionate about connecting people with great food"
    },
    {
      name: "Mike Chen",
      role: "Head Chef",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      description: "15+ years of culinary expertise"
    },
    {
      name: "Emily Davis",
      role: "Operations Manager",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      description: "Ensuring smooth delivery operations"
    }
  ];

  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>About FoodCart</h1>
          <p>
            We're passionate about bringing delicious food from the best restaurants 
            directly to your doorstep. Founded in 2020, FoodCart has grown to become 
            the most trusted food delivery platform in the city.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" 
            alt="About us" 
          />
        </div>
      </div>

      <div className="stats-section">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            To make great food accessible to everyone by connecting food lovers 
            with their favorite restaurants through a seamless, reliable, and 
            enjoyable delivery experience.
          </p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality First</h3>
            <p>We partner only with restaurants that meet our high standards for food quality and safety.</p>
          </div>
          <div className="value-card">
            <h3>Fast & Reliable</h3>
            <p>Our efficient delivery network ensures your food arrives hot and on time, every time.</p>
          </div>
          <div className="value-card">
            <h3>Customer Focused</h3>
            <p>Your satisfaction is our priority. We're here to make your food experience exceptional.</p>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Order?</h2>
        <p>Join thousands of satisfied customers and experience the FoodCart difference today!</p>
        <a href="/products" className="btn btn-primary">Start Ordering</a>
      </div>
    </div>
  );
};

export default About;