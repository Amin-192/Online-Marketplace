import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/layout/Header';
import './index.css'; // Import your Tailwind CSS file here
function App() {
  return (
    <div className="App">
      {/* Header appears on all pages */}
      <Header />
      
      {/* Routes to switch between pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;