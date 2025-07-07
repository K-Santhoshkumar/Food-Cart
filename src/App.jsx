import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ViewCart from "./components/ViewCart";
import Categories from "./components/Categories";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductList from "./components/ProductList";

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <BrowserRouter>
        <Header 
          cart={cart} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        <div className="container">
          <Routes>
            <Route 
              path="/" 
              element={<Home cart={cart} setCart={setCart} />} 
            />
            <Route
              path="/products"
              element={
                <ProductList 
                  cart={cart} 
                  setCart={setCart} 
                  searchQuery={searchQuery}
                />
              }
            />
            <Route
              path="/categories"
              element={
                <Categories 
                  cart={cart} 
                  setCart={setCart} 
                />
              }
            />
            <Route
              path="/cart"
              element={<ViewCart cart={cart} setCart={setCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;