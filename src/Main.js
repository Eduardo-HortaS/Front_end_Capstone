import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage	from	'./HomePage'; 
import About from './About';
import Menu from './Menu';
import BookingPage from './BookingPage';
import Order from './Order';
import Login from './Login';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Main;