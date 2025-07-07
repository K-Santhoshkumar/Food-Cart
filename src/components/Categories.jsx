import React, { useState } from "react";
import { ChefHat, Utensils, Coffee, IceCream } from "lucide-react";
import data from "../assets/products.json";
import Product from "./Product";
import "./Categories.css";

const Categories = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryIcons = {
    Italian: <ChefHat size={32} />,
    Indian: <Utensils size={32} />,
    American: <Coffee size={32} />,
    Thai: <Utensils size={32} />,
    Japanese: <ChefHat size={32} />,
    Mexican: <Utensils size={32} />,
    Greek: <ChefHat size={32} />,
    Chinese: <Utensils size={32} />,
    Desserts: <IceCream size={32} />,
    Salads: <Utensils size={32} />
  };

  const categories = data.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = {
        name: category,
        count: 0,
        products: []
      };
    }
    acc[category].count++;
    acc[category].products.push(product);
    return acc;
  }, {});

  const filteredProducts = selectedCategory === "All" 
    ? data 
    : categories[selectedCategory]?.products || [];

  return (
    <div className="categories-page">
      <div className="page-header">
        <h1>Food Categories</h1>
        <p>Explore our diverse range of cuisines from around the world</p>
      </div>

      <div className="categories-grid">
        <div 
          className={`category-card ${selectedCategory === "All" ? "active" : ""}`}
          onClick={() => setSelectedCategory("All")}
        >
          <div className="category-icon">
            <Utensils size={32} />
          </div>
          <h3>All Items</h3>
          <p>{data.length} dishes</p>
        </div>

        {Object.values(categories).map((category) => (
          <div
            key={category.name}
            className={`category-card ${selectedCategory === category.name ? "active" : ""}`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <div className="category-icon">
              {categoryIcons[category.name] || <Utensils size={32} />}
            </div>
            <h3>{category.name}</h3>
            <p>{category.count} dishes</p>
          </div>
        ))}
      </div>

      <div className="category-products">
        <div className="section-header">
          <h2>
            {selectedCategory === "All" ? "All Dishes" : `${selectedCategory} Cuisine`}
          </h2>
          <span className="product-count">{filteredProducts.length} items</span>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;