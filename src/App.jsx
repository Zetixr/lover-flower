import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Сквозные компоненты
import NavBar from './components/NavBar'
import Footer from './components/footer'

// Страницы
import Home from './pages/Home'
import Orders from './pages/orders'
import NotFound from './pages/test'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Шапка отображается на всех страницах */}
        <NavBar />

        {/* Маршрутизация страниц */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Подвал отображается на всех страницах */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App