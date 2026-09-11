import React from 'react'
import boxesImg from '../assets/specialOcassion-boxes.png'
import christmasImg from '../assets/specialOcassion-christmas.png'
import fruitsImg from '../assets/specialOcassion-fruits.png'
import letterImg from '../assets/specialOcassion-letter.png'

const SpecialOccasion = () => {
  return (
    <section className="special-section">
      <div className="special-container">
        
        {/* Левая часть: Заголовок, описание и кнопка */}
        <div className="special-left">
          <h2 className="special-title">
            ОСОБЕННЫЙ <br /> ПОВОД?
          </h2>

          <p className="special-subtitle">
            МЫ ГОТОВЫ ПРИЙТИ НА ПОМОЩЬ И СОБРАТЬ УНИКАЛЬНЫЙ БУКЕТ, НА ЛЮБОЙ 
            ВКУС, БЮДЖЕТ И ДЛЯ ЛЮБОГО СОБЫТИЯ ПО ВАШЕМУ ИНДИВИДУАЛЬНОМУ ЗАКАЗУ.
          </p>

          <ul className="special-list">
            <li>УЧТЕМ ДАЖЕ САМЫЕ ИЗЫСКАННЫЕ ПОЖЕЛАНИЯ;</li>
            <li>ПОДОБРЕМ СВЕЖАЙШИЕ ЦВЕТЫ И СДЕЛАЕМ УНИКАЛЬНЫЙ БУКЕТ ИЛИ КОМПОЗИЦИЮ;</li>
            <li>ОПЛАТИТЬ МОЖНО ПРИ ПОЛУЧЕНИИ ИЛИ ОНЛАЙН НА САЙТЕ.</li>
          </ul>

          <button className="special-btn">
            СБРАТЬ ИНДИВИДУАЛЬНЫЙ БУКЕТ
          </button>
        </div>

        {/* Правая часть: Коллаж из 4-х картинок */}
        <div className="special-right">
          <div className="special-grid">
            {/* Большая картинка сверху справа (Подарки/Коробки) */}
            <div className="special-grid-item item-boxes">
              <img src={boxesImg} alt="Подарки" />
            </div>

            {/* Картинка снизу слева (Фрукты/Цветы) */}
            <div className="special-grid-item item-fruits">
              <img src={fruitsImg} alt="Цветы и фрукты" />
            </div>

            {/* Узкая картинка снизу по центру (Письмо) */}
            <div className="special-grid-item item-letter">
              <img src={letterImg} alt="Конверт и письмо" />
            </div>

            {/* Картинка снизу справа (Новогодний/Рождественский венок) */}
            <div className="special-grid-item item-christmas">
              <img src={christmasImg} alt="Декор" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SpecialOccasion