import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <div className="footer-nav">
                <p className="footer-head">Navigation</p>
                <Link to="/" className="footer-item">Home</Link>
                <Link to="/about" className="footer-item">About</Link>
                <Link to="/menu" className="footer-item">Menu</Link>
                <Link to="/reservations" className="footer-item">Reservations</Link>
                <Link to="/order" className="footer-item">Order Online</Link>
                <Link to="/login" className="footer-item">Login</Link>
            </div>
            <div className="footer-contact">
                <p className="footer-head">Contacts</p>
                <Link to="/phone" className="footer-item">Phone</Link>
                <Link to="/email" className="footer-item">Email</Link>
                <Link to="/address" className="footer-item">Address</Link>
            </div>
            <div className="footer-social">
                <p className="footer-head">Socials</p>
                <Link to="/facebook" className="footer-item">Facebook</Link>
                <Link to="/twitter" className="footer-item">Twitter</Link>
                <Link to="/instagram" className="footer-item">Instagram</Link>
            </div>
        </div>
        <div className="legal">
          <img src="/images/Logo.svg" alt="little lemon"/>
          <p>&copy; 2024 Little Lemon</p>
        </div>
    </footer>
  );
}

export default Footer;