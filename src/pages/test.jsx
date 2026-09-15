import React from 'react'
import { Link } from 'react-router-dom'
// Подключи твою ветку/цветок слева, если нужно, или фоновую картинку
import notFoundFlower from '../assets/faq-flower.png' // Используй твой цветок из assets
import '../App.css'

const NotFound = () => {
  return (
    <div className="not-found-page">
      {/* Декоративный цветок слева */}
      <img src={notFoundFlower} alt="" className="nf-flower" />

      {/* Огромный фоновый водяной знак */}
      <div className="nf-bg-text">LOVER FLOWER</div>

      <div className="nf-container">
        {/* Гигантская цифра 404 с эффектом подсвечивания */}
        <div className="nf-code-wrapper">
          <span className="nf-code">404</span>
        </div>

        <div className="nf-content">
          <span className="nf-badge">ОШИБКА 404</span>
          <h1 className="nf-title">УПС... ТАКОЙ СТРАНИЦЫ НЕТ</h1>
          <p className="nf-description">
            Возможно, она была перемещена или вовсе не существовала. <br />
            Предлагаем вернуться в наш каталог и выбрать прекрасный букет!
          </p>

          <Link to="/" className="nf-button">
            НА ГЛАВНУЮ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound