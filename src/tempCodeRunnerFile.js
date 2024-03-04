import logo from './logo.svg';
import Header from './Small_Components/Header';
//import Header from './small_components/Header';
import Contact_Us from './Small_components/Contact_Us';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import NavBar from './Small_components/NavBar'; // Corrected import statement


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Define other routes here */}
        </Routes>
        <Contact_Us />
      </Router>
    </div>
  );
}


export default App;
