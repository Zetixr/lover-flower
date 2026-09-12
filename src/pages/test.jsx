import React from 'react'
import { Link } from 'react-router-dom'
import notFoundBg from '../assets/errorFlowers.png' // Твоя картинка с цветком и ветками

const NotFound = () => {
  return (
    <div className="not-found-page">
      {/* Синее подсветка-свечение справа на фоне */}
      <div className="glow-effect"></div>

      {/* Огромные цифры 404 по центру */}
      <div className="not-found-code">404</div>

      {/* Картинка с цветком и ветками, которая перекрывает 404 */}
      <div className="not-found-image-wrap">
        <img src={notFoundBg} alt="404 Flowers" className="not-found-img" />
      </div>

      {/* Рукописный надпись-водяной знак справа */}
      <div className="handwritten-watermark">Lover Flower</div>

      {/* Блок с текстом и кнопкой снизу справа */}
      <div className="not-found-content">
        <span className="error-subtitle">ОШИБКА 404</span>
        <h1 className="error-title">УПС... ТАКОЙ СТРАНИЦЫ НЕТ</h1>
        <Link to="/" className="not-found-btn">
          НА ГЛАВНУЮ
        </Link>
      </div>
    </div>
  )
}

export default NotFound