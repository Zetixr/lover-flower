import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Импорт всех 12 изображений из папки productImgs
import flower from '../../productImgs/flower.png'
import flowerOne from '../../productImgs/flowerOne.png'
import flowerTwo from '../../productImgs/flowerTwo.png'
import flowerThree from '../../productImgs/flowerThree.png'
import flowerFour from '../../productImgs/flowerFour.png'
import flowerFive from '../../productImgs/flowerFive.png'
import flowerSix from '../../productImgs/flowerSix.png'
import flowerSeven from '../../productImgs/flowerSeven.png'
import flowerEight from '../../productImgs/flowerEight.png'
import flowerNine from '../../productImgs/flowerNine.png'
import flowerTen from '../../productImgs/flowerTen.png'
import flowerEleven from '../../productImgs/flowerEleven.png'
import flowerTwelve from '../../productImgs/flowerTwelve.png'

import '../App.css'

// Массив из 12 букетов с подключенными файлами
const initialProducts = [
  { id: 1, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerOne, badge: null },
  { id: 2, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerTwo, badge: 'NEW' },
  { id: 3, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerThree, badge: null },
  { id: 4, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerFour, badge: null },
  { id: 5, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerFive, badge: 'SALE' },
  { id: 6, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerSix, badge: null },
  { id: 7, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerSeven, badge: null },
  { id: 8, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerEight, badge: 'SALE' },
  { id: 9, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerNine, badge: null },
  { id: 10, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerTen, badge: null },
  { id: 11, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerEleven, badge: 'NEW' },
  { id: 12, name: 'ЛУЧШИЙ ДЕНЬ', price: 167000, img: flowerTwelve, badge: null },
]

// Категории для фильтров
const categories = [
  'ЦВЕТЫ В КОРОБКЕ', 'РОЗЫ', 'ЦВЕТЫ В КОРЗИНЕ', 'БУКЕТЫ ИЗ СУХОЦВЕТОВ',
  'КОМПОЗИЦИИ ИЗ ЦВЕТОВ', 'ОТКРЫТКИ', 'ШАРЫ', 'МЯГКИЕ ИГРУШКИ',
  'ПРАЗДНИЧНАЯ УПАКОВКА', 'СЛАДОСТИ', 'ПОДАРКИ'
]

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <div className="catalog-page">
      <div className="catalog-container">
        
        {/* Хлебные крошки */}
        <div className="breadcrumbs">
          <Link to="/">ГЛАВНАЯ</Link> / <span>КАТАЛОГ</span>
        </div>

        {/* Чистый заголовок каталога без синих кружочков */}
        <div className="catalog-hero-section">
          <div className="hero-content">
            <h1 className="catalog-title">
              КАТАЛОГ <br /> БУКЕТОВ
            </h1>
            <p className="catalog-subtitle">
              В НАШЕМ МАГАЗИНЕ САМЫЙ БОЛЬШОЙ ВЫБОР БУКЕТОВ ДЛЯ ЛЮБОГО СОБЫТИЯ
            </p>

            {/* Фильтры-теги */}
            <div className="tags-cloud">
              {categories.map((tag, idx) => (
                <button
                  key={idx}
                  className={`tag-btn ${activeCategory === tag ? 'active' : ''}`}
                  onClick={() => setActiveCategory(activeCategory === tag ? null : tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Основной блок */}
        <div className="catalog-main">
          {/* Боковой фильтр */}
          <aside className="catalog-sidebar">
            <div className="filter-group">
              <h4 className="filter-title">ПО СВЕТУ</h4>
              <ul>
                <li><label><input type="checkbox" /> Нежные</label></li>
                <li><label><input type="checkbox" /> Яркие</label></li>
              </ul>
            </div>

            <div className="filter-group">
              <h4 className="filter-title">ПО ЦВЕТУ</h4>
              <ul>
                <li><label><input type="checkbox" /> Белый</label></li>
                <li><label><input type="checkbox" /> Желтый</label></li>
                <li><label><input type="checkbox" /> Зеленый</label></li>
                <li><label><input type="checkbox" /> Красный</label></li>
                <li><label><input type="checkbox" /> Розовый</label></li>
              </ul>
            </div>

            <div className="filter-group">
              <h4 className="filter-title">СТОИМОСТЬ</h4>
              <div className="price-inputs">
                <input type="number" placeholder="От" />
                <span>—</span>
                <input type="number" placeholder="До" />
              </div>
            </div>
          </aside>

          {/* Сетка карточек */}
          <div className="catalog-grid">
            {initialProducts.map((product) => (
              <div key={product.id} className="catalog-card">
                <div className="card-image-wrapper">
                  <img src={product.img} alt={product.name} />
                  {product.badge && (
                    <span className={`card-badge ${product.badge.toLowerCase()}`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="card-info">
                  <h3 className="card-name">{product.name}</h3>
                  <p className="card-price">{product.price.toLocaleString('ru-RU')} ₽</p>
                  <button className="add-to-cart-btn">В КОРЗИНУ</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Catalog