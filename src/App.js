import logo from './logo.svg';
import Header from './Small_Components/Header';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import NavBar from './small_components/NavBar'; // Corrected import statement


function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}


export default App;
