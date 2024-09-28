import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Ensure your Tailwind or global CSS is imported here

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> {/* Helps with identifying potential issues during development */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);