import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import Cart from './pages/Cart'; 
import Header from './components/layout/Header';
import Register from './pages/Register'; // Import Register component
import Login from './pages/Login'; // Import Login component

function App() {
  const [cart, setCart] = useState([]); // Cart state

  // Function to add items to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove items from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, cartIndex) => cartIndex !== index));
  };

  // Function to increase item quantity
  const increaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, cartIndex) =>
        cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease item quantity
  const decreaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, cartIndex) =>
        cartIndex === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <div className="App">
    <Header cartCount={cart.length} />
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
  );
}

export default App;