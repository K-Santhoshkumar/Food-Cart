import React, { useState, useMemo } from "react";
import { Filter, SortAsc, Grid, List } from "lucide-react";
import data from "../assets/products.json";
import Product from "./Product";
import "./ProductList.css";

const ProductList = ({ cart, setCart, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFoodType, setSelectedFoodType] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState([0, 500]);

  const categories = ["All", ...new Set(data.map(product => product.category))];
  const foodTypes = ["All", "Veg", "Non-Veg"];

  const filteredProducts = useMemo(() => {
    let filtered = data;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shop.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Food type filter
    if (selectedFoodType !== "All") {
      filtered = filtered.filter(product => product.ftype === selectedFoodType);
    }

    // Price range filter
    filtered = filtered.filter(product => {
      const price = parseInt(product.amt);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseInt(a.amt) - parseInt(b.amt);
        case "price-high":
          return parseInt(b.amt) - parseInt(a.amt);
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedFoodType, sortBy, priceRange]);

  return (
    <div className="product-list-page">
      <div className="page-header">
        <h1>Our Menu</h1>
        <p>Discover delicious food from the best restaurants</p>
      </div>

      <div className="filters-section">
        <div className="filters-container">
          <div className="filter-group">
            <label>Category</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Food Type</label>
            <select 
              value={selectedFoodType} 
              onChange={(e) => setSelectedFoodType(e.target.value)}
            >
              {foodTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Sort By</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="filter-group price-range">
            <label>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            />
          </div>

          <div className="view-toggle">
            <button 
              className={viewMode === "grid" ? "active" : ""}
              onClick={() => setViewMode("grid")}
            >
              <Grid size={20} />
            </button>
            <button 
              className={viewMode === "list" ? "active" : ""}
              onClick={() => setViewMode("list")}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="results-info">
        <p>{filteredProducts.length} items found</p>
      </div>

      <div className={`products-container ${viewMode}`}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
              viewMode={viewMode}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>No products found</h3>
            <p>Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;