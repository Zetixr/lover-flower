import React from 'react';
import '../App.css'; // Или 'App.css', в зависимости от того, где храните стили

import logo from '../assets/logo.png';
import searchImg from '../assets/search-img.png';
import phoneImg from '../assets/phone.png';
import bagImg from '../assets/bag.png';

const NavBar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar">
        {/* Логотип */}
        <div className="navbar-logo">
          <a href="#">
            <img src={logo} alt="Lover Flower Logo" />
          </a>
        </div>

        {/* Главное меню */}
        <nav className="navbar-menu">
          <a href="#catalog" className="nav-link">КАТАЛОГ</a>
          <a href="#delivery" className="nav-link">ДОСТАВКА И ОПЛАТА</a>
          <a href="#about" className="nav-link">О НАС</a>
          <a href="#contacts" className="nav-link">КОНТАКТЫ</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        {/* Правая часть: поиск, телефон, корзина */}
        <div className="navbar-actions">
          <button className="search-btn">
            <img src={searchImg} alt="Search" className="icon" />
            <span>ПОИСК</span>
          </button>

          <a href="tel:+375291136969" className="phone-link">
            <img src={phoneImg} alt="Phone" className="icon" />
            <span>+375 (29) 113-69-69</span>
          </a>

          <div className="cart-container">
            <img src={bagImg} alt="Cart" className="cart-icon" />
            <span className="cart-badge">5</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;