import React from "react";
import "@/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProductCarousel />
      <About />
      <Footer />
    </div>
  );
}

export default App;
