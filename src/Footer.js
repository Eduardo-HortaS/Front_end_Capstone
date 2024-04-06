import './App.css';
import React from 'react';

function Footer() {
  return (
    <footer>
        <p>Navigation</p>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
        <p>Contact us</p>
        <ul>
            <li><a href="#phone">Phone</a></li>
            <li><a href="#email">Email</a></li>
            <li><a href="#address">Address</a></li>
        </ul>
        <p>Follow us on social media</p>
        <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
        </ul>
        <p>&copy; 2024 Little Lemon</p>
    </footer>
  );
}

export default Footer;