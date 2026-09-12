import React from 'react'
import { Link } from 'react-router-dom'

// Импортируем картинку (цветок со стеблем или цветок-ноль)
import fourZeroFourFlowers from '../assets/four-zero-four-flowers.png'
// Если у тебя другой файл фоновых цветов, например errorFlowers.png, расскоментируй:
// import errorFlowers from '../assets/errorFlowers.png'

import '../App.css'

const NotFound = () => {
  return (
    <div className="not-found-page">
      {/* Декоративный крупный цветок слева / по центру */}
      <img
        src={fourZeroFourFlowers}
        alt="Lover Flower 404"
        className="not-found-bg-flower"
      />

      <div className="not-found-container">
        {/* Композиция 404: 4 + Цветок-ноль + 4 */}
        <div className="not-found-code">
          <span className="digit">4</span>
          <div className="flower-zero-placeholder">
            {/* Если цветок не входит в единое изображение, он позиционируется здесь */}
          </div>
          <span className="digit">4</span>
        </div>

        {/* Текстовый блок и кнопка */}
        <div className="not-found-content">
          <span className="error-tag">ОШИБКА 404</span>
          <h1 className="error-title">УПС... ТАКОЙ СТРАНИЦЫ НЕТ</h1>
          
          <Link to="/" className="not-found-btn">
            НА ГЛАВНУЮ
          </Link>
        </div>

        {/* Водяной знак */}
        <div className="not-found-watermark">Lover Flower</div>
      </div>
    </div>
  )
}

export default NotFound