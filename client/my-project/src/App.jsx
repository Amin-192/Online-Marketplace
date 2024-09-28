import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import Home component
import About from './pages/About'; // Import About component
import Contact from './pages/Contact'; // Import Contact component
import Cart from './pages/Cart'; // Import Cart component
import Header from './components/layout/Header'; // Import Header component

function App() {
  const [cart, setCart] = useState([]); // Cart state

  // Function to add items to cart
  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to the cart
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} /> {/* Pass cart count to Header */}

      {/* Pass addToCart to Home */}
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} /> {/* Pass addToCart to Home */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </div>
  );
}

export default App;