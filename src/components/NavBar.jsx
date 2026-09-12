import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import searchImg from '../assets/search-img.png'
import phoneImg from '../assets/phone.png'
import bagImg from '../assets/bag.png'

const NavBar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const getAnchor = (id) => (isHomePage ? id : `/${id}`)

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Lover Flower" />
        </Link>

        {/* Навигация */}
        <nav className="navbar-nav">
          <Link to="/catalog">КАТАЛОГ</Link>
          <Link to="/delivery">ДОСТАВКА И ОПЛАТА</Link>
          <Link to="/about">О НАС</Link>
          <Link to="/contacts">КОНТАКТЫ</Link>
          <Link to="/faq">FAQ</Link>
        </nav>

        <div className="navbar-right">
          <button className="nav-icon-btn">
            <img src={searchImg} alt="Поиск" />
            <span>ПОИСК</span>
          </button>

          <a href="tel:+375291136969" className="nav-phone-link">
            <img src={phoneImg} alt="Телефон" />
            <span>+375 (29) 113-69-69</span>
          </a>

          {/* Переход на страницу заказов */}
          <Link to="/orders" className="nav-cart-btn">
            <img src={bagImg} alt="Корзина" />
            <span className="cart-badge">2</span>
          </Link>
        </div>

      </div>
    </header>
  )
}

export default NavBar